const config = require('./appConf')
let schemas = config.schemas.map(item => `'${item.name}'`).toString();
const setupScript = `
CREATE SCHEMA IF NOT EXISTS dbdocs AUTHORIZATION ${config.user};

CREATE TABLE IF NOT EXISTS dbdocs.tables_docs
(
    name text COLLATE pg_catalog."default" NOT NULL,
    schema text COLLATE pg_catalog."default" NOT NULL,
    "desc" text COLLATE pg_catalog."default",
    add_desc text COLLATE pg_catalog."default",
    tags text[] COLLATE pg_catalog."default",
    columns jsonb,
    is_deleted boolean NOT NULL DEFAULT false,
    CONSTRAINT tables_docs_pkey PRIMARY KEY (name,schema)
)

TABLESPACE pg_default;

ALTER TABLE dbdocs.tables_docs
    OWNER to ${config.user};

CREATE TABLE IF NOT EXISTS dbdocs.configuration
(
    property text COLLATE pg_catalog."default" NOT NULL,
    property_data jsonb,
    CONSTRAINT configuration_pkey PRIMARY KEY (property)
)

TABLESPACE pg_default;

ALTER TABLE dbdocs.configuration
    OWNER to ${config.user};

INSERT INTO dbdocs.configuration (property, property_data) VALUES
('credentials', '{"pass": "dontfish", "name": "maagar"}'),
('tags', '[]')
ON CONFLICT DO NOTHING;
    
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'column_data') THEN
      CREATE TYPE column_data AS (
  		  name text,
  		  "desc" text,
            type text,
            constraint_types text[]
      );

    END IF;
END
$$;
`

const parseTables = `INSERT INTO dbdocs.tables_docs (name, schema, "desc", add_desc, tags, columns)
SELECT
    table_name, table_schema, '', '', '{}'::text[],
    jsonb_agg (row_to_json(cast(row (c.column_name, '', c.data_type, c.constraint_types) as column_data))) json_columns
FROM (
    SELECT
    distinct col.table_name,
    col.table_schema,
    col.column_name,
        col.data_type, array_agg(distinct cont.constraint_type) as constraint_types
            FROM information_schema.columns col
            LEFT JOIN information_schema.key_column_usage kcol 
            ON kcol.table_name = col.table_name
            AND kcol.table_schema = col.table_schema
            AND col.column_name = kcol.column_name

            LEFT JOIN information_schema.table_constraints cont
            ON kcol.constraint_name = cont.constraint_name

    WHERE col.table_schema in (${schemas})
    group by col.table_name,
        col.table_schema,
        col.column_name,
        col.data_type) c
WHERE  table_schema in (${schemas})
GROUP BY table_name, table_schema

ON CONFLICT ON CONSTRAINT tables_docs_pkey DO UPDATE SET columns= (SELECT json_agg(newColumns) FROM (
    SELECT coalesce(new.name, old.name) AS name, coalesce(old.desc, new.desc) AS desc, coalesce(new.type, old.type) AS type, coalesce(new.constraint_types, old.constraint_types) AS constraint_types
    FROM jsonb_to_recordset(dbdocs.tables_docs.columns) AS old(name text, "desc" text, type text, constraint_types text[])
    RIGHT JOIN jsonb_to_recordset(EXCLUDED.columns) AS new(name text, "desc" text, type text, constraint_types text[])
    ON old.name = new.name
) newColumns);`

const findRefTable = `
SELECT rel_kcu.table_schema as schema, rel_kcu.table_name as table,
       rel_kcu.column_name as column
FROM information_schema.table_constraints tco
JOIN information_schema.key_column_usage kcu
          ON tco.constraint_schema = kcu.constraint_schema
          and tco.constraint_name = kcu.constraint_name
JOIN information_schema.referential_constraints rco
          ON tco.constraint_schema = rco.constraint_schema
          and tco.constraint_name = rco.constraint_name
JOIN information_schema.key_column_usage rel_kcu
          ON rco.unique_constraint_schema = rel_kcu.constraint_schema
          and rco.unique_constraint_name = rel_kcu.constraint_name
          and kcu.ordinal_position = rel_kcu.ordinal_position
WHERE tco.constraint_type = 'FOREIGN KEY' and
kcu.table_name=$1 and kcu.table_schema=$2 and kcu.column_name=$3
LIMIT 1`

module.exports = {
    setupScript,
    parseTables,
    findRefTable
}
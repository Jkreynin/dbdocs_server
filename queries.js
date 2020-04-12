const config = require('./appConf')
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
    CONSTRAINT tables_docs_pkey PRIMARY KEY (name, schema)
)

TABLESPACE pg_default;

ALTER TABLE dbdocs.tables_docs
    OWNER to ${config.user};

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'column_data') THEN
      CREATE TYPE column_data AS (
  		  name text,
  		  "desc" text,
  		  type text
      );

    END IF;
END
$$;
`

const parseTables = `insert into dbdocs.tables_docs (name, schema, "desc", add_desc, tags, columns)
select table_name, table_schema, '', '', '{}', jsonb_agg(row_to_json(cast(row(c.column_name, '', c.data_type) as column_data))) json_columns
from (select table_name, table_schema, column_name, data_type from information_schema.columns) c
where table_schema in (${config.schemas.map(item=>`'${item}'`).toString()})
group by table_name, table_schema
ON CONFLICT ON CONSTRAINT tables_docs_pkey DO UPDATE SET columns= (SELECT json_agg(newColumns) FROM (
    SELECT coalesce(new.name, old.name) AS name, coalesce(old.desc, new.desc) AS desc, coalesce(new.type, old.type) AS type
    FROM jsonb_to_recordset(dbdocs.tables_docs.columns) AS old(name text, "desc" text, type text)
    FULL JOIN jsonb_to_recordset(EXCLUDED.columns) AS new(name text, "desc" text,type text)
    ON old.name = new.name
) newColumns);`

module.exports = {
    setupScript,
    parseTables,
  }
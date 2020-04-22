FROM node:10

WORKDIR	/usr/src/dbdocs

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
ENV HOST=kandula.db.elephantsql.com
ENV USER=cheyjwak
ENV DB=cheyjwak
ENV PASS=BbOuf4mbwj9HyRRkvlwtcCyEV9isepEN
ENV PORT=5432

CMD [ "node","index.js" ]


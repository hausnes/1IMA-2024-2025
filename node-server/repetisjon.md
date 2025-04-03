npm init -y

npm install express
(npm i express) 

node app.js

--------------

npm start

package.json:
{
    "scripts": {
        "start": "node app.js"
    }
}

--------------


NB: Ikke bruk live server!

Serveren starter og lytter på port 3000. Gå til http://localhost:3000/ for å se appen i nettleseren.
Når du besøker denne URL-en, vil du være en klient som sender en forespørsel til serveren.

Serveren vil svare med en HTML-side, eller annet innhold, avhengig av forespørselen.
Serveren kan også håndtere forespørsel om JSON-data, og vil svare med data i JSON-format. 
Serveren tar også ansvar for kommunikasjon med databasen, og kan håndtere forespørsel om å hente eller oppdatere data i databasen.
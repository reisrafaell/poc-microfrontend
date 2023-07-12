# Instalação

É necessario instalar a node modules em cada módulo usando o segunte comando:
$ cd footer && npm install && cd .. && cd main-page && npm install && cd .. && cd single-spa && npm install

# Build

Para fazer a build local do projeto é necessário abir um terminal para cada módulo. Cada módulo será executado em uma porta em expesífico executado o seguinte comando:

EX:
cd single-spa && npm start -- --port 9000
cd main-page && npm start -- --port 8000
cd footer && npm start -- --port 8001

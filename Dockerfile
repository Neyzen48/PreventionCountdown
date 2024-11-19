# Basis-Image verwenden (z. B. Node.js)
FROM node:16

# Arbeitsverzeichnis festlegen
WORKDIR /usr/src/app/

# Abhängigkeiten kopieren und installieren
COPY package.json /usr/src/app/
RUN npm install

# Anwendungscode kopieren
COPY /public /usr/src/app/public/
COPY /views /usr/src/app/views/
COPY eslint.config.js /usr/src/app/
COPY main.js /usr/src/app/
COPY server.js /usr/src/app/

# Port freigeben
EXPOSE 8080

# Startbefehl
CMD ["npm", "run", "docker"]
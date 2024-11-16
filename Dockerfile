# Basis-Image verwenden (z. B. Node.js)
FROM node:16

RUN apt-get update && apt-get install -y \
    libnss3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libx11-xcb1 \
    libxcomposite1 \
    libxrandr2 \
    libxi6 \
    libxtst6 \
    libasound2 \
    libcups2 \
    libxdamage1 \
    libxrender1 \
    libgbm1 \
    libgtk-3-0 \
    libdbus-1-3 \
    libdrm2 \
    libxshmfence1

RUN apt-get install -y \
    wget \
    curl \
    ca-certificates \
    gconf-service \
    libappindicator3-1 \
    fonts-liberation \
    libpango-1.0-0 \
    libpangocairo-1.0-0

RUN apt-get install -y xvfb

# Arbeitsverzeichnis festlegen
WORKDIR /usr/src/app/

# Abhängigkeiten kopieren und installieren
COPY package.json /usr/src/app/
RUN npm install

# Anwendungscode kopieren
COPY . /usr/src/app/

# Port freigeben
EXPOSE 3000

# Startbefehl
CMD ["npm", "run", "docker"]
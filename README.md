# Treppenunfall-Countdown

Dieses interaktive Projekt simuliert die Wahrscheinlichkeit von Treppenunfällen und bietet Nutzern Informationen zur Prävention. Die Anwendung wurde entwickelt, um auf humorvolle Weise die Gefahren von Treppenstürzen aufzuzeigen und gleichzeitig nützliche Tipps und Statistiken anzubieten.

## Inhaltsverzeichnis
- [Features](#features)
- [Technologien](#technologien)
- [Installation](#installation)
- [Nutzung](#nutzung)
- [Lizenz](#lizenz)

## Features
- **Treppenunfall-Countdown**: Ein Countdown visualisiert die Wahrscheinlichkeit eines Unfalls.
- **Popup-Informationen**: Benutzer erhalten Präventionstipps und Statistiken in einem Popup.
- **Visuelle Statistiken**: Gründe und Arten von Treppenunfällen werden in Diagrammen dargestellt.
- **"Death-Screen"**: Simulation eines Treppenunfalls, wenn der Countdown 0 erreicht.

## Technologien
Das Projekt wurde mit folgenden Technologien entwickelt:
- **Node.js**: Serverseitige Entwicklung.
- **Express**: Backend-Framework für API und Routen.
- **Electron**: Ermöglicht die Ausführung als Desktop-Anwendung.
- **EJS (Embedded JavaScript)**: Template-Engine zur dynamischen Generierung von HTML.
- **Docker**: Zur Bereitstellung und Ausführung in Containern.

## Installation
1. Klone das Repository:
   ```bash
   git clone https://github.com/Neyzen48/PreventionCountdown.git
   ```
2. Navigiere in das Projektverzeichnis:
   ```bash
   cd PreventionCountdown
   ```
3. Installiere die Abhängigkeiten:
   ```bash
   npm install
   ```

## Nutzung

### Starten der Anwendung

#### 1. Desktop-Version (mit Electron)
Starte die Desktop-Anwendung:
   ```bash
   npm run start
   ```

#### 2. Web-Version (ohne Electron)
Starte nur den Server, um die Anwendung als Webanwendung zu nutzen:
   ```bash
   npm run server
   ```

#### 3. Docker
Die Anwendung kann in einem Docker-Container bereitgestellt werden.

1. Docker-Image erstellen:
   ```bash
   docker build -t prevention-countdown .
   ```

2. Docker-Container starten:
   ```bash
   docker run -it -p 8080:8080 --rm prevention-countdown
   ```

### Interaktion
- **Countdown**: Klicke auf den roten Button, um den Countdown zu starten oder zu verringern.
- **Präventionstipps**: Klicke auf den blauen Button, um hilfreiche Tipps und Statistiken anzuzeigen.
- **"Death-Screen"**: Bei Countdown 0 wird der "Death-Screen" angezeigt.

## Lizenz
Dieses Projekt steht unter der [MIT-Lizenz](LICENSE).

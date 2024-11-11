# Interaktive Prävention Monitor
# 1&nbsp;Einleitung
### 1.1&nbsp;&nbsp;Nutzerzählung und Countdown
- Ziel ist es, die Anzahl der Nutzer zu ermitteln, die täglich durch bestimmte Treppenbereiche gehen.
- Ein Countdown soll gestartet werden, der eine Art Unfallwahrscheinlichkeit darstellt.
- Die Countdown-Zahl repräsentiert statistisch die Wahrscheinlichkeit eines Treppenunfalls, basierend auf der Gesamtanzahl der Nutzer und historischen Daten (z. B. "jeder 10&nbsp;Student fällt die Treppe runter").
### 1.2&nbsp;&nbsp;Nutzererkennung (Mit Geringem Aufwand)
Es gibt zwei Optionen:
- Automatisierte Nutzererkennung mit geringem Aufwand.
- Nutzung von Daten über belegte Räume bei Provadis. Ein API-Endpunkt könnte zur Verfügung gestellt
  werden, der die Anzahl der anwesenden Personen anhand der belegten Räume liefert.
### 1.3&nbsp;&nbsp;Verhalten beim Treppensteigen
Wenn man die Treppe hochläuft, soll der Countdown heruntergezählt werden, was impliziert, dass man sich sicher verhält: Ein Mechanismus, der erkennt, ob jemand tatsächlich die Treppe hochläuft.
Möglichkeiten wären:
- Bewegungs- und Aktivitätssensoren (z. B. mittels Smartphones oder Smartwatches).
- Nutzung eines einfachen Zählmechanismus, der die Anzahl der zurückgelegten Stockwerke berücksichtigt.
###  1.4&nbsp;&nbsp;Statistik und Todesbildschirm
- Nach Ablauf des Countdowns erscheint ein "Death Screen", der den Nutzer auf den (theoretischen) Unfall hinweist.
- Zusätzlich könnte eine Statistik eingeblendet werden, wie z. B. "Jeder 10&nbsp;Student fällt die Treppe hinunter" oder "Bis jetzt gab es X Unfälle an dieser Treppe".
- Eine präventive Sicherheitsbotschaft wird eingeblendet, wie z. B. "Lauf sicher!", was den Gamification-Aspekt verstärkt.
## 2&nbsp;To Do
### 2.1&nbsp;&nbsp;Nutzerzahl Erkennen
- Einfache Lösung wäre, den API-Endpunkt zu integrieren, um die Anzahl der belegten Räume und somit der anwesenden Nutzer zu ermitteln.
- Alternativ könnten Bewegungssensoren genutzt werden, um die tatsächliche Anzahl von Personen, die die Treppe benutzen, zu ermitteln.
### 2.2&nbsp;&nbsp;Statistik-Mechanismus
Die Statistik könnte dynamisch gestaltet werden, sodass sie austauschbar ist. Dies könnte durch eine einfache Datenbank oder ein JSON-File gesteuert werden, das regelmäßig aktualisiert wird.
### 2.3&nbsp;&nbsp;Countdown-Mechanismus
Entwicklung eines Timers oder Zählmechanismus, der den Countdown herunterzählt und auf den Todesbildschirm umschaltet, sobald eine bestimmte Schwelle erreicht wird.
### 2.4&nbsp;&nbsp;Death Screen & Sicherheitsbotschaft
- Sobald der Countdown bei `null` angekommen ist, wird der Nutzer auf den Todesbildschirm weitergeleitet.
- Darunter wird eine präventive Botschaft oder ein Sicherheitstipp angezeigt.
### 2.5&nbsp;&nbsp;Mögliche technische Umsetzung
- Frontend: HTML, CSS, JavaScript (für die UI und Countdown-Logik).
- Backend: Node.js (zur Kommunikation mit dem API-Endpunkt).
- API-Integration: Provadis-Raumbelegungsdaten nutzen, um die Nutzerzahl zu bestimmen.
- Bewegungserkennung: Integration von Sensor-Daten (Smartphones, Fitnesstracker).
# Mediamilano Sales Copilot — V1

Configuratore commerciale standalone **senza AI**, senza database e senza dipendenze npm.

## Avvio

1. Installare Node.js 18 o successivo.
2. Aprire un terminale nella cartella del progetto.
3. Eseguire `npm start` (oppure `node server.js`).
4. Aprire `http://localhost:3000`.

Per usare un'altra porta: `PORT=8080 node server.js` (PowerShell: `$env:PORT=8080; node server.js`).

## Modifiche rapide per il team IT

- **Servizi, testi, link, domande, opzioni e punteggi:** `public/data/catalog.js`
- **Aspetto e struttura delle schermate:** `public/index.html` (CSS incluso nel tag `<style>`)
- **Matching e navigazione:** `public/app.js`
- **Server web statico:** `server.js`

Dopo la modifica, ricaricare la pagina. Nessuna compilazione/build richiesta.

## Come funziona il matching V1

Ogni area del catalogo corrisponde inizialmente a un servizio.
- Domanda filtro: 'Problema importante' = 5 punti, 'Da migliorare' = 3, 'Non è un problema' = 0, 'Non so' = nessun punteggio.
- Per ogni area segnalata vengono mostrate due domande di dettaglio: 4, 2 o 0 punti.
- La percentuale è `punti / 13 * 100`, arrotondata. **Non è una probabilità né una stima di ROI.**
- Servizio principale: miglior punteggio, solo con almeno 5 punti.
- Complementari: al massimo due altri servizi con almeno 5 punti.
- Se nessun servizio raggiunge 5, non si propone automaticamente un custom: si suggerisce di approfondire.
- Il testo libero e la dettatura servono come note per il commerciale, **non** vengono interpretati per assegnare punteggi (non ci sono LLM).

Questi punteggi sono **regole V1 proposte**, ancora da validare commercialmente. Nessun servizio è escluso automaticamente in base al numero di dipendenti.

## Privacy e limiti

La profilazione e le risposte restano solo in memoria nella scheda browser. Non sono inviate al server, né persistite in localStorage. Un refresh azzera la sessione. Il browser potrebbe usare il proprio servizio di riconoscimento vocale per la dettatura: verificare la policy privacy aziendale prima di utilizzarla su dati riservati. 

Il sito D.O.O.R. non è presente: `url` vuoto. B-Automation non è ancora incluso come sesto servizio in attesa di definizione del posizionamento.

## Cose da validare nella V2

Scelta commerciale delle soglie, prerequisiti bloccanti e incompatibilità, copertura di altri servizi Mediamilano, eventuale esportazione del report e gestione avanzata delle note.

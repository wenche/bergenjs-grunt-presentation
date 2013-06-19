# Frontend fagmøte Grunt-presentasjon

Dette er presentasjonen jeg viste på fagmøtet om Grunt. Presentasjonen er en videreutvikling av Raymond Julin sin Grunt-presentasjon på BergenJS.


## Kjøre presentasjonen

1. Klon repo-et (git clone git@github.com:wenche/frontend-meeting-grunt-presentation.git)
2. Installer node-moduler (npm install)
3. Kjør presentasjonen (grunt present)
4. Gå til http://localhost:9091/grunt.html?full#1

## Andre ting å gjøre

Bruk kommandoen grunt --help for å liste mulige tasks og alias

### Automatisk oppdatering i Chrome
Mens presentasjonen kjører, test ut å endre markdown-filen (gruntjs.md) i en IDE, lagre og se at det endrer seg automatisk i Chrome

## Om presentasjonen

Presentasjonen er et enkelt eksempel med Grunt. Presentasjons-aliaset (grunt present) laster ned Shower til scripts-mappen, bruer Shower til å
lage en presentasjon av Markdown-filen gruntjs.md, starter opp en server og lytter på endringer i gruntjs.md. Når noe endres, bygges presentasjonen på nytt,
og Chrome refreshes (dette er et enkelt eksempel, livereload bare for Chrome).

## Mer om Grunt
På fagmøtet brukte vi Yeoman for å demonstrere flere avanserte måter å bruke git på, sjekk gjerne ut dette!
import React from 'react';

export const BODY = (FAQLink) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      En kommende flerspiller-klient for <em>Grand Theft Auto: San Andreas</em> som vil være fullt bakoverkompatibel med den eksisterende <em>San Andreas Multiplayer.</em>
    </p>
    <br />
    <p>
      Med dette menes det at <strong>nåværende SA:MP klienter og alt av eksisterende kode og scripts vil fungere på open.mp</strong> og, i tillegg så vil mange bugs bli fikset, uten at det krever stygge metoder og modifiseringer.
    </p>
    <p>
      Om du lurer på hvordan du kan være med å hjelpe, eller hvordan DU kan hjelpe til med prosjektet, ta en titt på <a href="https://www.burgershot.gg/showthread.php?tid=99">denne forum-posten</a> for mer info.
    </p>
    <h1>
      <FAQLink>Ofte stilte spørsmål</FAQLink>
    </h1>
  </div>
);

export const FAQ = () => (
  <div>
    <h1>Ofte stilte spørsmål</h1>
    <hr />
    <h2>Hva er open.mp?</h2>
    <p>open.mp (Open Multiplayer, OMP) er en erstatning til SA:MP, igangsatt som en respons til den uønskede mengden problemer med oppdateringer og styring av SA:MP. Den første utgivelsen vil være en ren erstatning bare til serveren. Eksisterende SA:MP-klienter vil fortsatt kunne koble til serverene. På lengre sikt så vil en ny open.mp klient bli tilgjengelig, som vil bidra til at flere og bedre oppdateringer er velkomne.</p>
    <hr />
    <h2>Er dette en fork?</h2>
    <p>Nei. Dette er en helt restrukturert code fra scratch, som utnytter seg av tiår med kompetanse og kjennskap. Det har vært forsøkt å forke SA:MP før, men vi tror at disse prosjektene ikke har gjort det riktig:</p>
    <ol>
      <li>De har vært basert på lekket kode. Utviklerne av disse har ikke hatt rettigheter til koden, og har derfor alltid vært bakpå både rettslig og moralsk. Vi nekter å benytte oss av slik kode. Det vil direkte påvirke hvor kjapt det går å utvikle, men vil være den helt riktige veien på sikt.</li>
      <li>De har forsøkt å lage for mye nytt på en gang. Enten så har de erstattet hele kode-strukturen, eller fjernet ting for å legge til nye, eller bare endre på ting som ikke er kompatibelt. Dette forhindrer store, eksisterende servere og spillere fra å flytte over, siden det ville ha ment de måtte endre på noe av (hvis ikke alt av) koden deres - som er svært uheldig. Vi ønsker selvfølgelig å gjøre endringer og tweake ting over tid, men førsteprioritet er å kunne støtte eksisterende servere, som tillater de å bruke vår kode uten at de må endre på deres.</li>
    </ol>
    <hr />
    <h2>Hvorfor gjør dere dette?</h2>
    <p>Uten hell så har det vært prøvd flere ganger å få utviklingen til å gå fremover på SA:MP. Det i form av nye ideèr, masing og tilbud om å hjelpe til fra Beta-laget; støttet av et stort samfunn som har bedt om noe nytt; så har det ikke vært noen som helts fremgang. Det tenkes at dette er på grunn av at eier ikke har sett intresse av å ta hand om modden lengre, som forøvrig ikke er problemet, men det har ikke vært noe forsøk på å la andre ta over. Istedet for å la modden leve videre så har eier åpenbart tenkt å la alt dø sammen med han. Noen sier de tror det er fordi eier tjener gode penger på siden, men det er ingen bevis på at dette stemmer. Selv om det har vært svært stor interesse og et sammensveiset samfunn, han trodde det bare var et par år igjen for SA-MP, og medlemmene i samfunnet som hadde jobbet så enormt hardt for alt sammen, ikke fortjene en fortsettelse.</p>
    <br />
    <p>Vi er ikke enige.</p>
    <hr />
    <h2>Siden det er en "åpen" Multiplayer, vil det være åpen-kildekode?</h2>
    <p>Ja, dette er planen. Nå først så vil vi fokusere på å være synlige i form av at vi faktisk jobber med koden (som allerede vil være en forbedring) og vi vil etterhvert åpne opp kildekoden, så snart ting er satt i stein.</p>
    <hr />
    <h2>Hvordan kan jeg hjelpe?</h2>
    <p>Hold utkikk på forumet vårt. Vi har en tråd om akkurat dette, og vi vil holde den oppdatert så snart det kommer mer. Siden prosjektet var avslørt litt snarere enn planlagt, så har vi kommet langt på vei mot en første-utgivelse, men det betyr ikke at mer hjelp er satt stor pris på. Takk på forhånd for at du bidrar og tror på prosjektet:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>"Hvordan hjelpe"-tråden (burgershot.gg)</u>
    </a>
    <hr />
    <h2>Hva er burgershot.gg?</h2>
    <p>burgershot.gg er et spilleforum, og ikke mer. En stor del folk er medlem av begge deler, og noen OMP oppdateringer og utviklingsdetaljer er postet der, men burgershot og OMP er to individuelle prosjekter. Burgershot er ikke OMP forumet, og OMP er ikke en del av burgershot. Så snart en full open.mp side er oppe, så kan de ansees som individuelle fora (Akkurat som da SA:MP var hostet på GTAforums, helt til SA:MP fikk sin egen side).</p>
    <hr />
    <h2>Hva er OpenMP?</h2>
    <p>Det er et "Open Multi-Processing" prosjekt som heter "OpenMP", vi er "open.mp". To totalt forskjellige ting.</p>
  </div>
);

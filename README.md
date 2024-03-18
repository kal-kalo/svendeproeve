# Documentaion

## Tech-stack:
vite, react, react-dom, react-router-dom, tailwind, css, html

## Teknisk Dokumentation:
    1. Vite:
        * Forklaring: Vite er en moderne bygger, der er designet til at være hurtigere end traditionelle byggere som Webpack eller Parcel. Den understøtter udviklingen af moderne webapplikationer ved hjælp af ES modules og understøtter også hot module replacement (HMR) for hurtig iteration under udviklingen.
        * Begrundelse: Ved at vælge Vite som bygger kan du drage fordel af dets hastighed og effektivitet under udviklingen, hvilket kan forbedre din produktivitet betydeligt.

    2. React:
        * Forklaring: React er et populært JavaScript-bibliotek til opbygning af brugergrænseflader. Det giver en komponentbaseret tilgang, hvilket gør det nemt at opdele din applikation i genanvendelige og håndterbare komponenter.
        * Begrundelse: Ved at vælge React får du fordelene ved komponentbaseret udvikling, hvilket kan gøre din kodebase mere organiseret, vedligeholdelig og skalerbar.

    3. React-DOM:
        * Forklaring: React-DOM er en del af React-økosystemet, der giver bindingslogikken mellem React-komponenter og DOM'en (Document Object Model).
        * Begrundelse: React-DOM er nødvendigt for at kunne rendere React-komponenter på websiden, hvilket gør det til et afgørende værktøj i udviklingen af React-baserede webapplikationer.

    4. React-Router-DOM:
        * Forklaring: React-Router-DOM er et sæt navigationskomponenter til React-applikationer, der gør det muligt at håndtere routing og navigation i en enkelt side applikation (SPA).
        * Begrundelse: Ved at inkludere React-Router-DOM i din tech-stack får du mulighed for at oprette dynamiske og brugervenlige brugeroplevelser ved at håndtere routing og navigation på klientsiden.

    5. Tailwind CSS:
        * Forklaring: Tailwind CSS er et utility-first CSS-rammeværk, der giver foruddefinerede CSS-klasser til styling af HTML-elementer. Det giver en hurtig og effektiv måde at opbygge brugergrænseflader ved hjælp af genanvendelige og tilpasselige komponenter.
        * Begrundelse: Tailwind CSS kan øge din produktivitet ved at tilbyde et sæt genanvendelige CSS-klasser, der kan anvendes direkte i dine HTML-elementer, hvilket reducerer behovet for at skrive tilpassede CSS-stilarter og muliggør hurtig prototyping og iteration.

    6. CSS og HTML:
        * Forklaring: CSS (Cascading Style Sheets) og HTML (HyperText Markup Language) er grundlæggende teknologier til opbygning og styling af websider. CSS bruges til at definere udseendet og layoutet af HTML-elementer.
        * Begrundelse: CSS og HTML er fundamentale teknologier i webudvikling, og de er nødvendige for at opbygge enhver webside eller webapplikation. Ved at inkludere dem i din tech-stack sikrer du, at du har de grundlæggende værktøjer til at oprette og style indholdet på dine websider.



## Kode til særlig bedømmelse
* Kig på SearchForm.jsx

## Evt. tilføjelser og rettelser
Beskriv hvad du eventuelt har tilføjet og eller rettet og begrund dit valg.
1. add LoginForm component and Logo components, -> to make the app more modular and maintainable.
2.  Nav component and Header component -> to make the app more modular and maintainable.
3. add useEnroll -> so that it can be reused and updated in one place, i.e. (reusablitiy and maintainablity)
4. add SearchForm.jsx component -> to make the app more modular and maintainable.

## Valgfri opgave
I chose to deploy the app.
API is live at [https://landrup-dans-api-3.onrender.com/](https://landrup-dans-api-3.onrender.com/)
Website is live at 
### For the backend
I first forked the landrup_api repo then I used render.com. I conected my forked repo to render.com. Here is the steps:
1. navigate to render.com
2. make an acount 
3. choose new Web Service 
4. choose Build and deploy from a Git repository
5. Conect with your github account and shoose the repo
6. fill in the form, Build Command, Start Command, env varibales
7. Click deploy 

### For the frontend 
I used Netlify:
1. Navigate to netlify.com
2. click Deploy 
3. Click import an existing project then choose github

## Reflektion
Reflekter over og beskriv hvordan applikationen i sin nuværende form kan skaleres i fremtiden.
By haveing many components, hooks, layouts, context, the app can easly be scaled and maintained.  



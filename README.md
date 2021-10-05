# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
<summary> Uitwerken voor kick-off werkgroep (Over mij)</summary>

### Auteur:
Han Ossef

#### Je startniveau:
Blauwe piste/ Rode piste

#### Je focus:
Extra aandacht voor de surface laag
</details>





## Je website

<details open>
<summary>uitwerken voor kick-off werkgroep (Mijn gekozen website)</summary>

### Je opdracht:
Link naar de website: 
https://www.nintendo.nl

#### Screenshot(s) van de eerste pagina (small screen): 
Home
<img src="images/home.png" width="100px" alt="Nintendo Home">

#### Screenshot(s) van de tweede pagina (small screen):
Nintendo familie

<img src="images/Nintendo-Switch-familie.png" width="100px" alt="Nintendo Familie">
 
</details>





## Breakdownschets (week 1)

<details>
<summary>uitwerken na afloop 2e werkgroep</summary>

### de hele pagina: Home
<img src="images/break1.png" width="100px" alt="breakdown van de hele pagina">

### de hele pagina: Nintendo Switch Familie
<img src="images/break2.png" width="100px" alt="breakdown van de hele pagina">

### dynamisch deel: Menu
<img src="images/break3.png" width="100px" alt="breakdown van een dynamisch deel">

### wellicht nog een dynamisch deel slider: 
<img src="images/break4.png" width="100px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
<summary>uitwerken voor 1e voortgang</summary>

### Stand van zaken
Wat erg goed ging is het kiezen van een website en een begin maken. Helaas was veel weggezakt voor mij waardoor ik even opnieuw kennisclips heb moeten kijken voor verfrissing. De meer ik bezig was en weer ging sleutelen aan code de meer weer omhoog kwam. De breakdown schets maken ging wat makkelijker omdat de student-assistenten mij daar ook bij hebben geholpen. 

<p> Start van mijn website</p>
<img src="images/startvanmijnwebsite.png" width="375px" alt="start van mijn website">

<p> Voortgang van menu</p>
<img src="images/Menugelukt.png" width="375px" alt="menu gelukt">


### Feedback ronde: 1
Uitkomst feedback 

- punt 1: Ik heb te veel classes met namen die niet duidelijk zijn. 
- punt 2: Ik heb divs die ik beter kan vervangen
- punt 3: Nette code en maak goed gebruik van notities
</details>


## Voortgang 2 (week 3)

<details>
<summary>uitwerken voor 2e voortgang</summary>

### Stand van zaken
Deze week heb ik veel gewerkt aan mijn website. Ik ben een stuk verder gekomen waardoor de basis er goed in zit voor beide pagina's. Nu ben ik bezig met animaties toevoegen wat ik nog wel lastig vind, zoals bij de slider. Ik vind dit erg leuk en blijf sleutelen tot iets lukt.  Door de feedback van vorige week en deze week heb ik erg veel classes vervangen door :nth-of-type. Dit was nieuw voor mij en kwam er achter hoe makkelijk het eigenlijk te gebruiken is. Divs heb ik mede hierdoor ook vervangen. Ik had nog niet overal notities maar die heb ik overal toegevoegd. Wanneer je op de menu button ging hoveren was er geen cursor pointer maar nu wel. 

<p> Latest games</p>
<img src="images/latestgames.png" width="375px" alt="latest games">

<p> Slider</p>
<img src="images/slider.png" width="375px" alt="slider">

### Feedback rond: 2 
- Te veel classes
- Hamburger menu met transistion laten bewegen en niet met animeren. 
- Hamburger menu moet een cursor pointer krijgen
- Plaatjes in de newsfeed kunnen beter met transition naar boven komen dan met top:-1;
- Opschonen van code 
- Mijn naam zetten bij author

</details>





## Toegankelijkheidstest (week 4)

<details>
<summary>uitwerken na test in 8e voortgang</summary>

### Bevindingen
Lijst met je bevindingen die in de test naar voren kwamen:

#### h2 in hamburgermenu
Glaucoma/rp:
Letters in de hamburger menu zijn niet goet te lezen, die moeten groter. 

<p>Voor aanpassing</p>
<img src="images/h2uitgeklaptmenubefore.png" width="375px" alt="h2 in uitgeklaptmenu voor aanpassing">

<p>Na aanpassing</p>
<img src="images/h2uitgeklaptmenuafter.png" width="375px" alt="h2 in uitgeklaptmenu na aanpassing">



#### P in onlangs uitgekomen
Glaucoma/rp:
P in onlangs uitgekomen niet goed te lezen. 

Ik heb dit zo gelaten omdat de iconen wel goed te zien zijn en aan de hand daarvan weet wat het betekend. 

#### Onlangs uitgekomen heeft geen state 
Glaucoma/rp:
Je kan in onlangs uitgekomen niet zien dat het een button is, misschien een state toevoegen i.p.v. alleen underline. 

Ik heb een underline toegevoegd bij de h2 en de img scaled iets groter bij een hover state.


<p>Voor aanpassing</p>
<img src="images/onlangsuitgekomenbefore.png" width="375px" alt="onlang uitgekomen voor aanpassing">

<p>Na aanpassing</p>
<img src="images/onlangsuitgekomenafter.png" width="375px" alt="onlangs uitgekomen na aanpassing">


#### Taal naar Nederlands veranderen 
Voice-over:
Mijn website word in het engels voorgelezen omdat mijn bestand op Engels staat en die moet ik veranderen in het Nederlands.

#### Voice-over is goed
Blur: 
Het is zo wazig dat niks te lezen is. Contrast is wel goed te zien maar hierbij is voice-over geadviseert. Met voice-over word alles goed uitgelegd. Ik heb alleen geen automatische afspeel functie. 

#### Bevindingen nintendo.nl
Bevindingen op de nintendo.nl website:
- De home knop heeft unlabbeld image
- Door te tabben skipt het opties

</details>





## Voortgang 3 (week 4)

<details>
<summary>uitwerken voor 3e voortgang</summary>

### Stand van zaken
Deze week ben ik echt bezig met responsive maken en darkmode. Ik probeer nog meer animaties toe te voegen omdat ik het leuk vind. Ook wil ik al mijn code weer langs om het nog netter te maken en om te kijken of ik overbodige code heb die niet nodig is. Ook ben ik bezig geweest met grid op mijn index.html op section news_feed! Voor de laatste loodjes wil ik nog wat bevindingen uit de test verwerken, zoals bepaalde letters groter maken en dat sommige elementen een heldere hover krijgen. 

<p> Dark mode</p>
<img src="images/darkmode.png" width="375px" alt="dark mode">

<p> Light mode</p>
<img src="images/lightmode.png" width="375px" alt="light mode">

<p>Responsive 48em</p>
<img src="images/bezigmetresponsive.png" width="375px" alt="48EM Responsive">

<p>Responsive 64em</p>
<img src="images/bezigmetresponsive2.png" width="375px" alt="64EM Responsive">

<p>Grid</p>
<img src="images/grid.png" width="375px" alt="grid">

### Feedback ronde: 3
- Html/css/javascript ziet er erg netjes en duidelijk uit
- Sections in latest_games kan je een article van maken omdat het een article is
- In het proces verslag voor bevindingen ook de feedback noteren hoe je het hebt aangepast

</details>





## Eindgesprek (week 5)

<details>
<summary>uitwerken voor eindgesprek</summary>

### Stand van zaken
Laatste loodjes: Sommige elementen op de tweede pagina nog mooier responsive maken. Beoordelings formulier erbij houden en eventueel nog hier en daar wat aanpassen. Feedback en test bevindingen nog verwerken (zie bevindgen om te zien hoe ik het heb aangepast).

Ik heb de hamburger menu eindelijk voor elkaar gekregen. Ik heb javascript met een if (true) else (false) toegevoegd. Hierbij kwam ik erachter dat wij javascript vorige jaar hebben geleerd op een oudere versie. Joeri heeft mij uitgelegd dat => eigenlijk function heet. Const en let zijn de vervanger van var. Let kan van waarde veranderen en Const kan je niet veranderen. Beide zijn nog te gebruiken maar het is beter dat het niet gemengd word. Ik heb alles op var gelaten omdat ik dat vorige jaar heb gebruikt en al begrijp.  

<p> Menu zonder te klikken</p>
<img src="images/menubefore.png" width="375px" alt="menu voor klikken">

<p> Menu geklikt</p>
<img src="images/menuafter.png" width="375px" alt="menua na klikken">


<p> NS online voor de aanpassing (zonder state)</p>
<img src="images/nsonlineafter.png" width="375px" alt="ns online voor de aanpassing">

<p> NS Online na de aanpassing met hover state</p>
<img src="images/nsonlinebefore.png" width="375px" alt="ns online na de aanpassing">

<p> Ns modellen heeft eigenlijk 4 list items maar bij desktop versie gaat de derde op display:non; en bij mobiel display:block;. Dit heb ik gedaan omdat het de eerste plaatje naar het midden moet gaan bij een groter scherm</p>
<p>Mobiel</p>
<img src="images/nsmodellen1.png" width="375px" alt="ns modellen mobiele versie">

<p> Desktop versie</p>
<img src="images/nsmodellen2.png" width="375px" alt="ns modellen desktop versie">


 
### Screenshot(s)

<p> Eind versie home pagina</p>
<img src="images/eindhomedesktop.png" width="500px" alt="Eind versie home pagina">

<p> Eind versie Nintendo Familie pagina (desktop)</p>
<img src="images/eindnsfamdesktop.png" width="500px" alt="Eind versie NS Familie pagina">

<p> Eind versie 48em </p>
<img src="images/eindipad.png" width="500px" alt="Eind versie 48em>

<p> Eind versie mobiel </p>
<img src="images/eindmobiel.png" width="500px" alt="Eind versie mobiel>

<p> Eind versie darkmode</p>
<img src="images/einddark.png" width="500px" alt="Eind darkmode>

<img src="images/einddark2.png" width="500px" alt="Eind darkmode>

</details>





## Bronnenlijst

<details open>
<summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

1. bron 1 dropdown: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select 
2. bron 2 voor positioneren van h2's op een afbeelding: https://codepen.io/shooft/pen/mdwwqNz 
3. bron 3 alle content: https://www.nintendo.nl/index.html
4. bron 4 alle content: https://www.nintendo.nl/Nintendo-Switch-familie/Nintendo-Switch-familie-1618251.html
5. bron 5 slider animatie: https://developer.mozilla.org/en-US/docs/Web/CSS/animation
6. bron 6 voor grid: https://www.youtube.com/watch?v=br-0i3U1VCA
7. bron 7 voor hamburger animatie: https://www.youtube.com/watch?v=dIyVTjJAkLw
</details>

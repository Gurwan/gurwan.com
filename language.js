window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('lng') || 'fr';
    const langData = languageData[userPreferredLanguage] || {};
    updateContent(langData);
    changeButtons(userPreferredLanguage);
});

async function setLanguage(lang) {
    await setLanguagePreference(lang);
    const langData = languageData[lang] || {};
    updateContent(langData);
    changeButtons(lang);
}

function changeButtons(lang) {
    let classActive = 'is-active'
    let btnBzh = document.getElementById('bzh-button');
    let btnEn = document.getElementById('en-button');
    let btnFr = document.getElementById('fr-button');
    switch (lang) {
        case 'fr':
            btnFr.classList.add(classActive);
            hideButton(btnEn)
            hideButton(btnBzh)
            break;
        case 'en':
            btnEn.classList.add(classActive);
            hideButton(btnFr)
            hideButton(btnBzh)
            break;
        case 'bzh':
            btnBzh.classList.add(classActive);
            hideButton(btnFr)
            hideButton(btnEn)
            break;
        default:
            break;
    }
}

function hideButton(classActive, button) {
    if (button.classList.contains(classActive)) {
        button.classList.remove(classActive);
    }
}

function setLanguagePreference(lang) {
    localStorage.setItem('lng', lang);
    location.reload();
}

function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = langData[key];
    });
}

function redirectTo(url) {
    window.open(url, '_blank');
}

const languageData = {
    "en": {
        "title_job": "Full-stack and Mobile Developer",
        "contact_me": "Contact me",
        "presentation-1": "Holder of an engineering degree in computer science since 2024 and having obtained a university technology diploma in 2021, I am now specialized in full-stack web development and mobile development (Android and iOS).",
        "presentation-2": "At 23 years old, I am currently a Digital Systems Engineer at Scalian Rennes.",
        "letseat-1": "Home meal delivery start-up in the Limousin french region.",
        "letseat-2": "I had the opportunity to work for LETSEAT through a 3-month internship, a 2-month fixed-term contract, and then as a freelancer for 8 months.",
        "letseat-date": "April 2021 - April 2022",
        "logsys-1": "Holding company specialized in supply chain, supporting the logistical needs of businesses.",
        "logsys-2": "I worked in the IT services company of the group (Logsys) during a 2-month internship as part of my engineering studies.",
        "logsys-date": "July 2022 - August 2022",
        "scalian-1": "Digital services company known for the quality of its work environment for employees (ranked third in Best Workplaces France 2024 in the category of more than 2,500 employees).",
        "scalian-2": "After a six-month internship at the Rennes branch in the Digital Systems department, I signed a permanent employment contract as a digital systems engineer. I have the opportunity to work on web technologies as a front-end web developer, as well as with iOS and Android mobile technologies, giving me a dual role on this project.",
        "scalian-date": "March 2024 - ...",
        "iut-date": "September 2019 - June 2021 | Vannes (France)",
        "iut-description": "Two-year technical degree in Computer Science.",
        "enssat-date": "September 2021 - August 2024 | Lannion (France)",
        "enssat-description": "Engineering Degree in Computer Science.",
        "tudublin-date": "September 2023 - January 2024 | Dublin (Ireland)",
        "tudublin-description": "Erasmus semester in Advanced Software Development (Master's level).",
        "competences-t1": "Full-Stack Web Developer",
        "competences-t2": "Mobile Developer",
        "competences-t3": "Software Developer",
        "competences-t4": "Miscellaneous Skills",
        "section-t1": "Skills",
        "section-t2": "Experience",
        "section-t3": "Education",
        "section-t4": "Projects",
        "section-t5": "Hobbies",
        "section-t6": "Contact me",
        "football-title": "Football",
        "football-content": "Not very talented but passionate, especially about a Brittany club.",
        "running-title": "Running",
        "running-content": "More talented than in football, I regularly take part in races.",
        "tennis-title": "Tennis",
        "tennis-content": "Fascinated by the sport with the yellow ball, even though I don't play at all.",
        "cinema-title": "Cinema",
        "cinema-content": "A big movie fan, I'm trying to learn more about the world of film.",
        "lecture-title": "Reading",
        "lecture-content": "I love reading books and have been interested in them since I was young, especially the classics.",
        "breton-title": "Breton",
        "breton-content": "I'm learning Breton in my free time to help keep this beautiful Celtic language alive.",
        "send-msg": "Contact me",
        "subtitle-sf": "Mobile App | Java - Android",
        "date-sf": "Personal Project | October 2017 - May 2021",
        "description-sf": "Application created in Java using Android Studio with AndroidX and SQLite libraries.",
        "description-1-sf": "This project was my first programming project and I partly learned to code through it. Since the project is over three years old, I have improved it as I progressed in the field. The main goal of this project was to launch it, so Soundbox France has been available on the Google Play Store since fall 2017. The app has been fairly successful, with 380,000 unique users having downloaded it. This project allowed me to experience many stages of creating a mobile app.",
        "subtitle-wsf": "Web Extension | Javascript - Chrome",
        "date-wsf": "Entrepreneurial Project | October 2022 - March 2023",
        "description-wsf": "Web extension created in Javascript for Google Chrome.",
        "description-1-wsf": "The WhySoFar extension shows an environmental indicator on product pages of major e-commerce sites like Amazon, CDiscount, Fnac, and Boulanger.",
        "description-2-wsf": "This project was developed for the Fabrik ta pépite entrepreneurial challenge (organized by Pépite Bretagne) in 2023.",
        "description-3-wsf": "WhySoFar won the Lannion campus award and was nominated in the following categories:",
        "description-4-wsf": "Best Video Award",
        "description-5-wsf": "Best Digital Prototype Award",
        "description-6-wsf": "Lannion Campus Award",
        "subtitle-kyw": "Web App | Javascript - React",
        "date-kyw": "Personal Project | January 2021 - April 2021",
        "description-kyw": "Web application created in Javascript, using the ReactJS library.",
        "description-1-kyw": "The idea is to create a website with various games that test memory and general knowledge. The project is still under development and currently includes only one game. In its final version, the site will allow users to have an account where they can keep track of their scores on each game offered by the platform. The first game is called Countries Game, where the goal is to name all the countries in the world in the least amount of time and, of course, without cheating!",
        "subtitle-rh": "Mobile App | Kotlin - Android",
        "date-rh": "Personal Project | December 2020 - January 2021",
        "description-rh": "Application created in Kotlin, using the Gson library.",
        "description-1-rh": "Every year, most people make a list of resolutions to improve their lives. However, the main challenge is not choosing the resolutions but sticking to them. To address this issue: Resolution Held. This mobile app helps you keep up with 2 resolutions throughout the year. Each day is represented by a circle that you click when you have kept your resolution. The focus is not on a year but on a month. Each resolution lasts for a month. At the end of each month, you can restart the challenge, and do this throughout the year.",
        "subtitle-zi": "Platform Game | Java - Swing",
        "date-zi": "IUT Project | April 2020 - June 2020",
        "description-zi": "Application created in Java using the Swing graphics library.",
        "description-1-zi": "This project is the synthesis project of my first year of DUT Informatics. The goal is to build a complete game using Java. The game is a digital adaptation of the board game Zen l'Initié. The objective of Zen l'Initié is to form a continuous chain with all the pieces still on the board. If the red piece is still on the board, it also needs to be aligned with its pieces. The game can be played over several turns, based on your choice. This computerized board game is built in both a terminal version and a graphical version using the Swing graphics library.",
        "subtitle-see-more": "See more..",
        "description-see-more": "More projects available on my Github."
    },
    "fr": {
        "title_job": "Développeur full-stack et mobile",
        "contact_me": "Me contacter",
        "presentation-1": "Titulaire du diplôme d'ingénieur en spécialité informatique depuis 2024 et ayant obtenu un diplôme universitaire de technologie en 2021, je suis désormais spécialisé dans le développement web full-stack et le développement mobile (Android et iOS).",
        "presentation-2": "À 23 ans, je suis actuellement en poste chez Scalian Rennes en tant que Digital Systems Engineer.",
        "letseat-1": "Start-up de livraison de plats à domicile de la région du limousin.",
        "letseat-2": "J'ai eu l'occasion de travailler pour LETSEAT par le biais d'un stage de 3 mois, d'un CDD de 2 mois puis en freelance pendant 8 mois.",
        "letseat-date": "Avril 2021 - Avril 2022",
        "logsys-1": "Holding spécialisé dans le supply chain et accompagnant les besoins logistiques des entreprises.",
        "logsys-2": "J'ai travaillé dans la SS2I du groupe (Logsys) lors d'un stage de 2 mois lors de mes études d'ingénieur.",
        "logsys-date": "Juillet 2022 - Août 2022",
        "scalian-1": "Entreprise de services du numérique se distinguant par la qualité de travail pour ses collaborateurs (troisième entreprise Best Workplaces France 2024 dans la catégorie plus de 2500 salariés).",
        "scalian-2": "Après un stage de six mois à l'agence de Rennes dans le département Digital Systems, j'ai signé un contrat de travail à durée indéterminée en tant qu'ingénieur systèmes numériques. J'ai la chance de travailler sur des technologies web en tant que développeur web front-end mais également avec des technologies mobiles iOS et Android, me donnant une double casquette sur ce projet.",
        "scalian-date": "Mars 2024 - ...",
        "iut-date": "Septembre 2019 - Juin 2021 | Vannes (France)",
        "iut-description": "Diplôme universitaire de technologie en Informatique.",
        "enssat-date": "Septembre 2021 - Août 2024 | Lannion (France)",
        "enssat-description": "Diplôme d'ingénieur en informatique.",
        "tudublin-date": "Septembre 2023 - Janvier 2024 | Dublin (Irlande)",
        "tudublin-description": "Semestre Erasmus en master développement logiciel avancé.",
        "competences-t1": "Développeur web full-stack",
        "competences-t2": "Développeur mobile",
        "competences-t3": "Développeur logiciel",
        "competences-t4": "Compétences diverses",
        "section-t1": "Compétences",
        "section-t2": "Expériences",
        "section-t3": "Formations",
        "section-t4": "Projets",
        "section-t5": "Passions",
        "section-t6": "Contactez-moi",
        "football-title": "Football",
        "football-content": "Peu talentueux mais passionné notamment par un club breton.",
        "running-title": "Course à pied",
        "running-content": "Talentueux (plus qu'au foot en tout cas), je participe régulièrement à des courses.",
        "tennis-title": "Tennis",
        "tennis-content": "Fasciné par le sport à la balle jaune malgré mon absence totale de pratique sur le court.",
        "cinema-title": "Cinéma",
        "cinema-content": "Grand consommateur de films, j'essaye de parfaire ma culture du septième art.",
        "lecture-title": "Lecture",
        "lecture-content": "Grand dévoreur de livres depuis mon plus jeune âge, je m'intéresse particulèrement aux classiques.",
        "breton-title": "Breton",
        "breton-content": "J'apprend le breton sur mon temps libre afin d'éviter la disparition de cette belle langue celtique.",
        "send-msg": "Envoyer le message",
        "subtitle-sf": "Application mobile | Java - Android",
        "date-sf": "Projet personnel | Octobre 2017 - Mai 2021",
        "description-sf": "Application réalisée en Java sur Android Studio avec les bibliothèques AndroidX et SQLite.",
        "description-1-sf": "Ce projet est mon premier projet de programmation et j'ai en partie appris à coder avec ce projet. Bien entendu le projet ayant plus de trois ans, je l'ai amélioré au fur et à mesure de ma progression dans le domaine. L'objectif premier de ce projet était de le mettre en production, Soundbox France est donc disponible depuis l'automne 2017 sur la plateforme Google Play Store. L'application a connu un certain succès avec notamment 380 000 utilisateurs uniques ayant téléchargé l'application. Ce projet m'a permis de découvrir une grande partie des phases de création d'une application mobile.",
        "subtitle-wsf": "Extension web | Javascript - Chrome",
        "date-wsf": "Projet entrepreneurial | Octobre 2022 - Mars 2023",
        "description-wsf": "Extension web réalisée en Javascript pour Google Chrome.",
        "description-1-wsf": "L'extension web WhySoFar permet l'affichage d'un indicateur écologique sur la page des produits des grands sites e-commerce tel que Amazon, CDiscount, Fnac et Boulanger.",
        "description-2-wsf": "Ce projet a été développé pour le challenge entrepreneurial Fabrik ta pépite (organisé par Pépite Bretagne) édition 2023.",
        "description-3-wsf": "WhySoFar est le lauréat du prix du campus de Lannion et a été nommé dans les catégories suivantes :",
        "description-4-wsf": "Prix de la meilleure vidéo",
        "description-5-wsf": "Prix du meilleur prototype numérique",
        "description-6-wsf": "Prix du campus de Lannion",
        "subtitle-kyw": "Application web | Javascript - React",
        "date-kyw": "Projet personnel | Janvier 2021-Avril 2021",
        "description-kyw": "Application web réalisée en Javascript avec notamment la bibliothèque ReactJS.",
        "description-1-kyw": "L'idée du projet est de créer un site web regroupant différents jeux liant la mémoire et la culture générale. Le projet est encore en cours de développement et ne regroupe pour le moment qu'un seul jeu. Dans sa version finale, le site permettra d'avoir un compte utilisateur avec lequel nous pourrons conserver nos scores sur chaque jeu proposé par la plateforme. Le premier jeu s'appelle Countries Game et le but est de trouver tous les pays du globe en prenant le moins de temps possible et bien évidemment sans tricher !",
        "subtitle-rh": "Application mobile | Kotlin - Android",
        "date-rh": "Projet personnel | Décembre 2020 - Janvier 2021",
        "description-rh": "Application réalisée en Kotlin avec notamment la bibliothèque Gson.",
        "description-1-rh": "Chaque année, la plupart des gens font une liste de résolution afin d'améliorer leur vie. Cependant la principale difficulté de cette coutume n'est pas de choisir ces résolutions mais de les tenir. Pour régler ce problème : Resolution Held. Cette application mobile permet de tenir 2 résolutions tout le long de l'année. Chaque jour est représenté par un rond sur lequel il suffit de cliquer lorsque la résolution est tenue. L'objectif n'est pas cependant sur une année mais sur un mois. En effet, chaque résolution dure un mois. À la fin de chaque mois vous pourrez redémarrer le challenge, et cela, pendant toute l'année.",
        "subtitle-zi": "Jeu de plateforme | Java - Swing",
        "date-zi": "Projet IUT | Avril 2020 - Juin 2020",
        "description-zi": "Application réalisée en Java avec notamment la bibliothèque graphique Swing.",
        "description-1-zi": "Ce projet est le projet de synthèse de ma première année de DUT Informatique. L'objectif est de construire un jeu entier avec le langage Java. Le jeu est une adaptation numérique du jeu de société Zen l'Initié. Le but de Zen l'Initié est de réussir à former une chaîne continue avec l’ensemble de ses pions se trouvant encore sur le plateau. Si le pion rouge est encore sur le plateau alors il faut également l’aligner avec ses pions. La partie peut se dérouler sur plusieurs tours selon votre choix. Ce jeu de plateau informatisé est construit dans une version terminale, mais également dans une version graphique avec la bibliothèque graphique Swing.",
        "subtitle-see-more": "Voir plus..",
        "description-see-more": "Plus de projets disponible sur mon Github."
    },
    "bzh": {
        "title_job": "Diorroer web ah pellgomzer hezoug",
        "contact_me": "Kontakit ac'hanon",
        "presentation-1": "Titul d'ur jeneralourien en informatique abaoe 2024 ha gant un diplom kelenadurezh teknologiezh war ar skol-veur e 2021, emaon bremañ spisializet en diorren web a-bezh ha diorren hezoug (Android ha iOS).",
        "presentation-2": "Da 23 vloaz, emaon bremañ Injinour Sistemoù Niverel e Scalian Rennes.",
        "letseat-1": "Start-up kas pred d'ar gêr e rannvro ar Limousin.",
        "letseat-2": "Me 'm eus bet ar chañs da labourat evit LETSEAT dre ur staj 3 miz, ur c'hendiviz 2 viz ha goude-se e mod freelance e-pad 8 miz.",
        "letseat-date": "Ebrel 2021 - Ebrel 2022",
        "logsys-1": "Holding spisializaet e kador-stur ar fornioù ha sikourioù ar c'hleñvedourien.",
        "logsys-2": "Me 'm eus labouret e TI (Technologieoù ar Fornioù) ar strollad (Logsys) e-pad ur staj 2 viz e-pad ma studioù kevrennouriezh.",
        "logsys-date": "Gouere 2022 - Eost 2022",
        "scalian-1": "Kompagnunezh servijoù niverel brudet evit an oberoù mat evit ar vicherourien (trede gompagnunezh e Best Workplaces France 2024 er rummad muioc'h eget 2500 gopridi).",
        "scalian-2": "Goude ur staj c'hwec'h miz e skourr Roazhon e rann Digital Systems, em eus sinet ur c'hendiviz-pad da vezañ ingener sistemoù niverel. Me 'm eus ar chañs da labourat gant teknologiezhioù web evel diorrenner web a-raok, hag ivez gant teknologiezhioù hezoug iOS hag Android, o reiñ din ur roll daou-vezek war ar raktres-mañ.",
        "scalian-date": "Meurzh 2024 - ...",
        "iut-date": "Gwengolo 2019 - Mezheven 2021 | Gwened (Breizh)",
        "iut-description": "Diplom Skol-Veur Teknologie en Enformatik.",
        "enssat-date": "Gwengolo 2021 - Eost 2024 | Lannuon (Breizh)",
        "enssat-description": "Diplom Injinour en Enformatik.",
        "tudublin-date": "Gwengolo 2023 - Genver 2024 | Dulenn (Iwerzhon)",
        "tudublin-description": "Hanter Vloaz Erasmus e Master Diarbenniñ Lodennoù Softer.",
        "competences-t1": "Deziner web a-bezh",
        "competences-t2": "Deziner hezoug",
        "competences-t3": "Deziner lojisiel",
        "competences-t4": "Skiant-prenet all",
        "section-t1": "Skiant-prenet",
        "section-t2": "Bec'hadoù",
        "section-t3": "Studiadennoù",
        "section-t4": "Raktresoù",
        "section-t5": "Plijadurezhioù",
        "section-t6": "Kit e darempred ganin",
        "football-title": "Mell-droad",
        "football-content": "N'eo ket nebeut a talent met kalonek, dreist-holl evit klubañ Breiz.",
        "running-title": "Kourf",
        "running-content": "Talentus, e kouchan kentañ am eus.",
        "tennis-title": "Tennis",
        "tennis-content": "Kreizdaouet gant ar sport gant ar bolan kelly, a-wezh all, n'em eus ket kendalc'het war ar c'hout.",
        "cinema-title": "Sinema",
        "cinema-content": "Un den-brezel films, e ouestl am eus da sevel ma filez en ar sinema.",
        "lecture-title": "Lenn",
        "lecture-content": "Ur c'hrenvader-livroù a zo bet abaoe ma oad berr, hag e'm eus pouez bras war ar c'hlasikoù.",
        "breton-title": "Brezhoneg",
        "breton-content": "O plijout da zeskiñ brezhoneg e ma amzer framm da sikour da sevel ar yezh wel e brezhoneg.",
        "send-msg": "Kas an mesaj",
        "subtitle-sf": "Applikation mubil | Java - Android",
        "date-sf": "Ragojed personel | Eost 2017 - Mei 2021",
        "description-sf": "Applikation bet savet e Java gant Android Studio hag ar livrioù AndroidX hag SQLite.",
        "description-1-sf": "Ar raktres-se a oa va raktres kentañ programmadur ha me a zizhuas da kod a-hed an raktres-mañ. Abaoe ma’z eo an raktres dreist 3 bloaz, me en em gwellaas en hec'h hollad. Mener a rae ar raktres-mañ da lakaat anezhi da vezañ e produiñ, setu Soundbox France bet dispignet er Google Play Store abaoe kentañ ar hañv 2017. En deus ar applikation-se bet un sikour gant 380,000 implijer dizhuniñ o digemer anezhi. Ar raktres-mañ a roas din ar c’halloud da welet ur bern a stadoù kreation ur applikation mubil.",
        "subtitle-wsf": "Ekipment web | Javascript - Chrome",
        "date-wsf": "Raktres entrepreneuri | Here 2022 - Meurzh 2023",
        "description-wsf": "Ekipment web savet e Javascript evit Google Chrome.",
        "description-1-wsf": "Ar ekipment WhySoFar a ziskouez ur niveradenn ekologel war pajennoù produktoù ar sujedoù e-commerce bras evel Amazon, CDiscount, Fnac, ha Boulanger.",
        "description-2-wsf": "Ar raktres-mañ a zo bet savet evit ar c'hallenge entrepreneuri Fabrik ta pépite (organiset gant Pépite Bretagne) e 2023.",
        "description-3-wsf": "WhySoFar zo bet lauread ar priz kampus Lannion ha bet en nommet er c'hategoriadoù-mañ :",
        "description-4-wsf": "Priz an video best",
        "description-5-wsf": "Priz an prototip diavaez best",
        "description-6-wsf": "Priz kampus Lannion",
        "subtitle-kyw": "Applikation web | Javascript - React",
        "date-kyw": "Raktres personel | Genver 2021 - Ebrel 2021",
        "description-kyw": "Applikation web savet e Javascript, gant ar livrioù ReactJS.",
        "description-1-kyw": "An idee eo krouiñ ur gwezhenn gant gemmoù disheñvel liammet gant ar memori hag ar c'hultura. Ar raktres a zo c'hoazh e raktresoù ha dija hepken un gemm. E barzh ur verzion termañ, ar gwezhenn a roio an holl implijerien da gavout ur compte a c'hello o zegas o skeudoù war pep gemm roet gant ar platfform. Ar gemm kentañ a vido Countries Game ha goulenn a ra ar c'hinnig da gavout ar vroioù a-bezh er bed, e-kichen an temoù gwall-vras hag, evel-just, hep feur ha dreist.",
        "subtitle-rh": "Applikation mubil | Kotlin - Android",
        "date-rh": "Raktres personel | Kerzu 2020 - Genver 2021",
        "description-rh": "Applikation savet e Kotlin, gant ar livrioù Gson.",
        "description-1-rh": "Bep bloaz, meur a zen a zigor ur listenn nevez evit gwellaat o buhez. Koulskoude, ar c’halloud diazez n’eo ket an disoc’h, met an hini da vezañ digor. Da gemer an dra-se e vit Resolution Held. Ar applikation mubil-mañ a sikouro da vezañ meret 2 disoc’h e-pad ar bloaz. Pep deiz a zo kinniget gant ur gorn war ar c'hinnig hag e ranker klikañ pa vez ho disoc’h meret. Ar pal n’eo ket war an naer, met war ur miz. Pep disoc’h a zeu da vezañ ur miz. E fin pep miz e c'hellit adkaout ar challañ, ha d'ar bloaz a-bezh.",
        "subtitle-zi": "Gêm platform | Java - Swing",
        "date-zi": "Raktres IUT | Ebrel 2020 - Mezheven 2020",
        "description-zi": "Applikation savet e Java, gant ar livrioù grafikel Swing.",
        "description-1-zi": "Ar raktres-mañ zo raktres synthese va bloaz kentañ e DUT Informatika. Ar pal eo krouiñ ur gêm beveg gant ar langage Java. Ar gêm a zo ur dizelañs niverel eus ar gêm papan Zen l'Initié. Ar pal eo formiñ ur c'hroaz kinniget gant ar pezhioù en ur c’hlevez un dek. Ma'z eo ar pezhioù goad a chom war ar plat, e ranker ivez aligier gant e pezhioù. Gallout a ra ar gêm bezañ graet war meur a dro, da c'hoiceal. Ar gêm papan informatizet a zo krouet er verzion terminal, hag ivez er verzion grafikel gant ar livrioù grafikel Swing.",
        "subtitle-see-more": "Gwelet muioc'h..",
        "description-see-more": "Morc’hioù resisoc’h er Github."
    }
};
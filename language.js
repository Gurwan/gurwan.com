window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('lng') || 'fr';
    const langData = languageData[userPreferredLanguage] || {};
    updateContent(langData);
});

async function setLanguage(lang) {
    await setLanguagePreference(lang);
    const langData = languageData[lang] || {};
    updateContent(langData);
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
        "title_job": "Full-stack web development engineer",
        "contact_me": "Contact me",
        "presentation-1": "Holder of an engineering degree in computer science, I am specialized in full-stack web development development.",
        "presentation-2": "At 23 years old, I am a Digital Systems Engineer at Scalian Rennes.",
        "letseat-1": "Home meal delivery start-up in the Limousin french region.",
        "letseat-2": "I had the opportunity to work for LETSEAT through a 3-month internship, a 2-month fixed-term contract, and then as a freelancer for 8 months.",
        "letseat-date": "April 2021 - April 2022",
        "letseat-role": "Full-stack developer",
        "logsys-1": "Holding company specialized in supply chain, supporting the logistical needs of businesses.",
        "logsys-2": "I worked in the IT services company of the group (Logsys) during a 2-month internship as part of my engineering studies.",
        "logsys-date": "July 2022 - August 2022",
        "logsys-role": "Full-stack developer",
        "scalian-1": "Digital services french company.",
        "scalian-2": "After a six-month internship at the Rennes branch in the Digital Systems department, I signed a permanent employment contract as a digital systems engineer. I have the opportunity to work as a front-end web developer, as well as a mobile developer with iOS and Android technologies, giving me a dual role on this project.",
        "scalian-date": "March 2024 - June 2025",
        "scalian-role": "Front-end developer",
        "iut-date": "September 2019 - June 2021 | Vannes (France)",
        "iut-description": "Two-year technical degree in Computer Science.",
        "enssat-date": "September 2021 - August 2024 | Lannion (France)",
        "enssat-description": "Engineering Degree in Computer Science.",
        "tudublin-date": "September 2023 - January 2024 | Dublin (Ireland)",
        "tudublin-description": "Erasmus semester in Advanced Software Development (Master's level).",
        "competences-t1": "Programming languages",
        "competences-t2": "Back-end development",
        "competences-t3": "Front-end development",
        "competences-t4": "Mobile development",
        "section-t1": "Skills",
        "section-t2": "Experience",
        "section-t3": "Education",
        "section-t4": "Projects",
        "section-t6": "Contact me",
        "send-msg": "Contact me",
        "subtitle-sf": "Mobile App | Java - Android",
        "date-sf": "Personal Project | October 2017 - May 2021",
        "description-sf": "Application created in Java using Android Studio with AndroidX and SQLite libraries.",
        "description-1-sf": "This project was my first programming project and I partly learned to code through it. Since the project is over three years old, I have improved it as I progressed in the field. The main goal of this project was to launch it, so Soundbox France has been available on the Google Play Store since fall 2017. The app has been fairly successful, with 420,000 unique users having downloaded it. This project allowed me to experience many stages of creating a mobile app.",
        "subtitle-wsf": "Web Extension | Javascript - Chrome",
        "date-wsf": "Entrepreneurial Project | October 2022 - March 2023",
        "description-wsf": "Web extension created in Javascript for Google Chrome.",
        "description-1-wsf": "The WhySoFar extension shows an environmental indicator on product pages of major e-commerce sites like Amazon, CDiscount, Fnac, and Boulanger.",
        "description-2-wsf": "This project was developed for the Fabrik ta pépite entrepreneurial challenge (organized by Pépite Bretagne) in 2023.",
        "description-3-wsf": "WhySoFar won the Lannion campus award and was nominated in the following categories:",
        "description-4-wsf": "Best Video Award",
        "description-5-wsf": "Best Digital Prototype Award",
        "description-6-wsf": "Lannion Campus Award",
        "subtitle-listenerd": "Web App | Javascript - VueJS",
        "date-listenerd": "TU Dublin Project | September 2023 - December 2023",
        "description-listenerd": "Web application created in Javascript, using the VueJS library.",
        "description-1-listenerd": "The web application I’ve developed is a music library that lets us track the albums we like and want to listen to, and keep up to date with the releases of our favorite artists. The data is obtained using the Spotify Web API, which will enable the application to make light use of the MongoDB database to store just the user data. ",
        "subtitle-rh": "Mobile App | Kotlin - Android",
        "date-rh": "Personal Project | November 2024 - March 2025",
        "description-rh": "Application created in Kotlin, using Jetpack Compose.",
        "description-1-rh": "Tri Ger is an Android app designed to make learning Breton easier. Every day, it allows learning three new words, providing a simple method to enrich vocabulary, whether one is a beginner or already familiar with the language. Interactive quizzes are offered to test knowledge, while progress tracking helps maintain motivation. The minimalist interface ensures a smooth and enjoyable experience. Available offline, Tri Ger enables learning at one's own pace, even without an internet connection. Ideal for perfecting one's mastery of Breton in a fun way.",
        "subtitle-zi": "Platform Game | Java - Swing",
        "date-zi": "IUT Project | April 2020 - June 2020",
        "description-zi": "Application created in Java using the Swing graphics library.",
        "description-1-zi": "This project is the synthesis project of my first year of DUT Informatics. The goal is to build a complete game using Java. The game is a digital adaptation of the board game Zen l'Initié. The objective of Zen l'Initié is to form a continuous chain with all the pieces still on the board. If the red piece is still on the board, it also needs to be aligned with its pieces. The game can be played over several turns, based on your choice. This computerized board game is built in both a terminal version and a graphical version using the Swing graphics library.",
        "subtitle-see-more": "See more..",
        "description-see-more": "More projects available on my Github."
    },
    "fr": {
        "title_job": "Ingénieur en développement web full-stack",
        "contact_me": "Me contacter",
        "presentation-1": "Titulaire d'un diplôme d'ingénieur en spécialité informatique, je suis spécialisé dans le développement web full-stack.",
        "presentation-2": "À 23 ans, je suis en poste chez Scalian Rennes en tant que Digital Systems Engineer.",
        "letseat-1": "Start-up de livraison de plats à domicile de la région du limousin.",
        "letseat-2": "J'ai eu l'occasion de travailler pour LETSEAT par le biais d'un stage de 3 mois, d'un CDD de 2 mois puis en freelance pendant 8 mois.",
        "letseat-date": "Avril 2021 - Avril 2022",
        "letseat-role": "Développeur web full-stack",
        "logsys-1": "Holding spécialisé dans le supply chain et accompagnant les besoins logistiques des entreprises.",
        "logsys-2": "J'ai travaillé dans la SS2I du groupe (Logsys) lors d'un stage de 2 mois lors de mes études d'ingénieur.",
        "logsys-date": "Juillet 2022 - Août 2022",
        "logsys-role": "Développeur web full-stack",
        "scalian-1": "Entreprise de services du numérique française.",
        "scalian-2": "Après un stage de six mois à l'agence de Rennes dans le département Digital Systems, j'ai signé un CDI en tant qu'ingénieur systèmes numériques. J'ai la chance de travailler en tant que développeur web front-end mais également en tant que développeur mobile iOS et Android, me donnant une double casquette sur ce projet.",
        "scalian-date": "Mars 2024 - Juin 2025",
        "scalian-role": "Développeur web front-end",
        "iut-date": "Septembre 2019 - Juin 2021 | Vannes (France)",
        "iut-description": "Diplôme universitaire de technologie en Informatique.",
        "enssat-date": "Septembre 2021 - Août 2024 | Lannion (France)",
        "enssat-description": "Diplôme d'ingénieur en informatique.",
        "tudublin-date": "Septembre 2023 - Janvier 2024 | Dublin (Irlande)",
        "tudublin-description": "Semestre Erasmus en master développement logiciel avancé.",
        "competences-t1": "Langages de programmation",
        "competences-t2": "Développement back-end",
        "competences-t3": "Développement front-end",
        "competences-t4": "Développement mobile",
        "section-t1": "Compétences",
        "section-t2": "Expériences",
        "section-t3": "Formations",
        "section-t4": "Projets",
        "section-t6": "Contactez-moi",
        "send-msg": "Envoyer le message",
        "subtitle-sf": "Application mobile | Java - Android",
        "date-sf": "Projet personnel | Octobre 2017 - Mai 2021",
        "description-sf": "Application réalisée en Java sur Android Studio avec les bibliothèques AndroidX et SQLite.",
        "description-1-sf": "Ce projet est mon premier projet de programmation et j'ai en partie appris à coder avec ce projet. Bien entendu le projet ayant plus de trois ans, je l'ai amélioré au fur et à mesure de ma progression dans le domaine. L'objectif premier de ce projet était de le mettre en production, Soundbox France est donc disponible depuis l'automne 2017 sur la plateforme Google Play Store. L'application a connu un certain succès avec notamment 420 000 utilisateurs uniques ayant téléchargé l'application. Ce projet m'a permis de découvrir une grande partie des phases de création d'une application mobile.",
        "subtitle-wsf": "Extension web | Javascript - Chrome",
        "date-wsf": "Projet entrepreneurial | Octobre 2022 - Mars 2023",
        "description-wsf": "Extension web réalisée en Javascript pour Google Chrome.",
        "description-1-wsf": "L'extension web WhySoFar permet l'affichage d'un indicateur écologique sur la page des produits des grands sites e-commerce tel que Amazon, CDiscount, Fnac et Boulanger.",
        "description-2-wsf": "Ce projet a été développé pour le challenge entrepreneurial Fabrik ta pépite (organisé par Pépite Bretagne) édition 2023.",
        "description-3-wsf": "WhySoFar est le lauréat du prix du campus de Lannion et a été nommé dans les catégories suivantes :",
        "description-4-wsf": "Prix de la meilleure vidéo",
        "description-5-wsf": "Prix du meilleur prototype numérique",
        "description-6-wsf": "Prix du campus de Lannion",
        "subtitle-listenerd": "Application web | Javascript - VueJS",
        "date-listenerd": "Projet TU Dublin | Septembre 2023 - Décembre 2023",
        "description-listenerd": "Application web réalisée en Javascript avec la bibliothèque VueJS.",
        "description-1-listenerd": "L'application web que j'ai développée est une bibliothèque musicale qui nous permet de suivre les albums que nous aimons et souhaitons écouter, ainsi que de rester informés des sorties de nos artistes favoris. Les données sont obtenues via l'API Web de Spotify, ce qui permet à l'application d'utiliser uniquement la base de données MongoDB pour stocker les données des utilisateurs.",
        "subtitle-rh": "Application mobile | Kotlin - Android",
        "date-rh": "Projet personnel | Novembre 2024 - Mars 2025",
        "description-rh": "Application créée en Kotlin, utilisant Jetpack Compose.",
        "description-1-rh": "Tri Ger est une application Android conçue pour faciliter l'apprentissage du breton. Chaque jour, elle permet d'apprendre trois nouveaux mots, offrant ainsi une méthode simple pour enrichir le vocabulaire, que l'on soit débutant ou déjà familiarisé avec la langue. Des quiz interactifs sont proposés pour tester les connaissances, tandis qu'un suivi des progrès aide à maintenir la motivation. L'interface minimaliste garantit une expérience fluide et agréable. Disponible hors ligne, Tri Ger permet d'apprendre à son rythme, même sans connexion. Idéale pour perfectionner sa maîtrise du breton de manière ludique.",
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
        "presentation-1": "Titul d'ur jeneralourien en informatique, emaon bremañ spisializet en diorren web a-bezh ha diorren hezoug (Android ha iOS).",
        "presentation-2": "Da 23 vloaz, emaon Injinour Sistemoù Niverel e Scalian Rennes.",
        "letseat-1": "Start-up kas pred d'ar gêr e rannvro ar Limousin.",
        "letseat-2": "Me 'm eus bet ar chañs da labourat evit LETSEAT dre ur staj 3 miz, ur c'hendiviz 2 viz ha goude-se e mod freelance e-pad 8 miz.",
        "letseat-date": "Ebrel 2021 - Ebrel 2022",
        "letseat-role": "Diorroer web",
        "logsys-1": "Holding spisializaet e kador-stur ar fornioù ha sikourioù ar c'hleñvedourien.",
        "logsys-2": "Me 'm eus labouret e TI (Technologieoù ar Fornioù) ar strollad (Logsys) e-pad ur staj 2 viz e-pad ma studioù kevrennouriezh.",
        "logsys-date": "Gouere 2022 - Eost 2022",
        "logsys-role": "Diorroer web",
        "scalian-1": "Kompagnunezh servijoù niverel.",
        "scalian-2": "Goude ur staj c'hwec'h miz e skourr Roazhon e rann Digital Systems, em eus sinet ur c'hendiviz-pad da vezañ ingener sistemoù niverel. Me 'm eus ar chañs da labourat gant teknologiezhioù web evel diorrenner web a-raok, hag ivez gant teknologiezhioù hezoug iOS hag Android, o reiñ din ur roll daou-vezek war ar raktres-mañ.",
        "scalian-date": "Meurzh 2024 - ...",
        "scalian-role": "Diorroer web ah pellgomzer hezoug",
        "iut-date": "Gwengolo 2019 - Mezheven 2021 | Gwened (Breizh)",
        "iut-description": "Diplom Skol-Veur Teknologie en Enformatik.",
        "enssat-date": "Gwengolo 2021 - Eost 2024 | Lannuon (Breizh)",
        "enssat-description": "Diplom Injinour en Enformatik.",
        "tudublin-date": "Gwengolo 2023 - Genver 2024 | Dulenn (Iwerzhon)",
        "tudublin-description": "Hanter Vloaz Erasmus e Master Diarbenniñ Lodennoù Softer.",
        "competences-t1": "Yezhoù programmerezh",
        "competences-t2": "Diorren back-end",
        "competences-t3": "Diorren front-end",
        "competences-t4": "Diorren hezoug",
        "section-t1": "Skiant-prenet",
        "section-t2": "Bec'hadoù",
        "section-t3": "Studiadennoù",
        "section-t4": "Raktresoù",
        "section-t6": "Kit e darempred ganin",
        "send-msg": "Kas an mesaj",
        "subtitle-sf": "Applikation mubil | Java - Android",
        "date-sf": "Ragojed personel | Eost 2017 - Mei 2021",
        "description-sf": "Applikation bet savet e Java gant Android Studio hag ar livrioù AndroidX hag SQLite.",
        "description-1-sf": "Ar raktres-se a oa va raktres kentañ programmadur ha me a zizhuas da kod a-hed an raktres-mañ. Abaoe ma’z eo an raktres dreist 3 bloaz, me en em gwellaas en hec'h hollad. Mener a rae ar raktres-mañ da lakaat anezhi da vezañ e produiñ, setu Soundbox France bet dispignet er Google Play Store abaoe kentañ ar hañv 2017. En deus ar applikation-se bet un sikour gant 420,000 implijer dizhuniñ o digemer anezhi. Ar raktres-mañ a roas din ar c’halloud da welet ur bern a stadoù kreation ur applikation mubil.",
        "subtitle-wsf": "Ekipment web | Javascript - Chrome",
        "date-wsf": "Raktres entrepreneuri | Here 2022 - Meurzh 2023",
        "description-wsf": "Ekipment web savet e Javascript evit Google Chrome.",
        "description-1-wsf": "Ar ekipment WhySoFar a ziskouez ur niveradenn ekologel war pajennoù produktoù ar sujedoù e-commerce bras evel Amazon, CDiscount, Fnac, ha Boulanger.",
        "description-2-wsf": "Ar raktres-mañ a zo bet savet evit ar c'hallenge entrepreneuri Fabrik ta pépite (organiset gant Pépite Bretagne) e 2023.",
        "description-3-wsf": "WhySoFar zo bet lauread ar priz kampus Lannion ha bet en nommet er c'hategoriadoù-mañ :",
        "description-4-wsf": "Priz an video best",
        "description-5-wsf": "Priz an prototip diavaez best",
        "description-6-wsf": "Priz kampus Lannion",
        "subtitle-listenerd": "Applikation web | Javascript - VueJS",
        "date-listenerd": "Raktres TU Dublin | Gwengolo 2023 - Kerzu 2023",
        "description-listenerd": "Applikation web sevenet e Javascript gant al levraoueg VueJS.",
        "description-1-listenerd": "An applikation web am eus diorroet a zo ur levraoueg sonerezh hag a lez ac'hanomp heuliañ al albumoù a blij deomp hag a fell deomp selaou, hag evezhiañ embannadurioù hor sonerien karetañ. Ar roadennoù a vez tapet gant ar Spotify Web API, hag a ro tu d'an arload ober gant ur baz roadennoù MongoDB evit mirout nemet roadennoù an implijerien.",
        "subtitle-rh": "Applikation mubil | Kotlin - Android",
        "date-rh": "Raktres personel | Miz Du 2024 - Meurzh 2025",
        "description-rh": "Applikadur savet e Kotlin, o implijout Jetpack Compose.",
        "description-1-rh": "Tri Ger a zo un applikadur Android savet evit aozañ an nebeut dezho a ziskouezoù war ar brezhoneg. Poblañ eo deoc’h tresiñ tri ger nevez bep deizh, ha sinemaet en un doare aes evit kreskiñ ho taveziad, pep hini a zo stag ouz ar yezh pe n’eo ket. E-lec’h bezañ honnezh, e vez kinniget quizoù etrezek evit profiñ ar c'henedigezh, ha gant un teuliad-progrez, ar motivation a zo gwarezet. Ar c’hizell ispisial a ro ur fent furviñ ha skañv. Disponad e-barzh-lerc'h, Tri Ger a ro ar framm da ober al levezon da ziskouez.",
        "subtitle-zi": "Gêm platform | Java - Swing",
        "date-zi": "Raktres IUT | Ebrel 2020 - Mezheven 2020",
        "description-zi": "Applikation savet e Java, gant ar livrioù grafikel Swing.",
        "description-1-zi": "Ar raktres-mañ zo raktres synthese va bloaz kentañ e DUT Informatika. Ar pal eo krouiñ ur gêm beveg gant ar langage Java. Ar gêm a zo ur dizelañs niverel eus ar gêm papan Zen l'Initié. Ar pal eo formiñ ur c'hroaz kinniget gant ar pezhioù en ur c’hlevez un dek. Ma'z eo ar pezhioù goad a chom war ar plat, e ranker ivez aligier gant e pezhioù. Gallout a ra ar gêm bezañ graet war meur a dro, da c'hoiceal. Ar gêm papan informatizet a zo krouet er verzion terminal, hag ivez er verzion grafikel gant ar livrioù grafikel Swing.",
        "subtitle-see-more": "Gwelet muioc'h..",
        "description-see-more": "Morc’hioù resisoc’h er Github."
    }
};
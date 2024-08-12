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
        "send-msg": "Contact me"
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
        "send-msg": "Kas an mesaj"
    }
};
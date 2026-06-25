/* TOUKIN — i18n (FR par défaut · EN · DE)
   Dictionnaire clé→{fr,en,de}. Le français reste la source/repli. */
(() => {
  'use strict';

  const SUPPORTED = ['fr', 'en', 'de'];
  const DEFAULT = 'fr';
  const STORE = 'toukin_lang';

  /* ============ DICTIONNAIRE ============ */
  const T = {
    /* -- Document -- */
    'doc.title': {
      fr: 'Toukin — Collectif santé · Physiothérapie & Ostéopathie à Tolochenaz (VD)',
      en: 'Toukin — Health Collective · Physiotherapy & Osteopathy in Tolochenaz (VD)',
      de: 'Toukin — Gesundheitskollektiv · Physiotherapie & Osteopathie in Tolochenaz (VD)'
    },
    'doc.desc': {
      fr: "Toukin, collectif santé pluridisciplinaire à Tolochenaz (Vaud) : physiothérapie, ostéopathie, préparation physique, massages, nutrition, yoga, pilates et cours collectifs. Route de Genève 32C, 1131 Tolochenaz.",
      en: "Toukin, a multidisciplinary health collective in Tolochenaz (Vaud): physiotherapy, osteopathy, physical preparation, massage, nutrition, yoga, pilates and group classes. Route de Genève 32C, 1131 Tolochenaz.",
      de: "Toukin, interdisziplinäres Gesundheitskollektiv in Tolochenaz (Waadt): Physiotherapie, Osteopathie, Athletiktraining, Massagen, Ernährung, Yoga, Pilates und Gruppenkurse. Route de Genève 32C, 1131 Tolochenaz."
    },

    /* -- Navigation -- */
    'nav.care':      { fr: 'Soins',               en: 'Treatments',          de: 'Behandlungen' },
    'nav.approach':  { fr: 'Approche',            en: 'Approach',            de: 'Ansatz' },
    'nav.center':    { fr: 'Le centre',           en: 'The centre',          de: 'Das Zentrum' },
    'nav.team':      { fr: 'Équipe',              en: 'Team',                de: 'Team' },
    'nav.media':     { fr: 'Médias',              en: 'Media',               de: 'Medien' },
    'nav.faq':       { fr: 'FAQ',                 en: 'FAQ',                 de: 'FAQ' },
    'nav.contact':   { fr: 'Contact',             en: 'Contact',             de: 'Kontakt' },
    'nav.book':      { fr: 'Prendre rendez-vous', en: 'Book an appointment', de: 'Termin buchen' },
    'nav.write':     { fr: 'Nous écrire',         en: 'Email us',            de: 'Schreiben Sie uns' },
    'nav.bookShort': { fr: 'Prendre RDV',         en: 'Book now',            de: 'Termin' },

    /* -- Hero -- */
    'hero.kicker': {
      fr: 'Physiothérapie · Ostéopathie · Préparation physique',
      en: 'Physiotherapy · Osteopathy · Physical preparation',
      de: 'Physiotherapie · Osteopathie · Athletiktraining'
    },
    'hero.h1': {
      fr: 'Votre centre de <span class="it">physiothérapie</span>,<br>à Tolochenaz.',
      en: 'Your <span class="it">physiotherapy</span> centre,<br>in Tolochenaz.',
      de: 'Ihr <span class="it">Physiotherapie</span>-Zentrum<br>in Tolochenaz.'
    },
    'hero.lead': {
      fr: "Un collectif santé pluridisciplinaire qui réunit le soin, la rééducation et la préparation physique sous un même toit — pour vous accompagner du premier bilan jusqu'à votre autonomie.",
      en: "A multidisciplinary health collective bringing care, rehabilitation and physical preparation under one roof — supporting you from the first assessment to full independence.",
      de: "Ein interdisziplinäres Gesundheitskollektiv, das Behandlung, Rehabilitation und Athletiktraining unter einem Dach vereint — und Sie von der ersten Untersuchung bis zur Selbstständigkeit begleitet."
    },
    'hero.reserve': { fr: 'Réserver en ligne', en: 'Book online', de: 'Online buchen' },
    'hero.p1': { fr: 'Avec ou sans ordonnance',          en: 'With or without a prescription', de: 'Mit oder ohne Verordnung' },
    'hero.p2': { fr: 'Conventionné assurances',          en: 'Recognised by insurers',         de: 'Von Versicherungen anerkannt' },
    'hero.p3': { fr: '2 sites : Tolochenaz &amp; Etagnières', en: '2 locations: Tolochenaz &amp; Etagnières', de: '2 Standorte: Tolochenaz &amp; Etagnières' },
    'hero.p4': { fr: 'Du lundi au vendredi, dès 8h',     en: 'Monday to Friday, from 8 am',    de: 'Montag bis Freitag, ab 8 Uhr' },
    'hero.stat1': { fr: 'Note des patients',     en: 'Patient rating',         de: 'Patientenbewertung' },
    'hero.stat2': { fr: 'Disciplines réunies',   en: 'Disciplines under one roof', de: 'Vereinte Fachbereiche' },
    'hero.stat3': { fr: 'Domaines de soin',      en: 'Areas of care',          de: 'Behandlungsbereiche' },
    'hero.badgeSub': { fr: 'Avis patients vérifiés', en: 'Verified patient reviews', de: 'Verifizierte Patientenbewertungen' },
    'hero.scroll': { fr: 'Défiler', en: 'Scroll', de: 'Scrollen' },

    /* -- Marquee -- */
    'm.physio':    { fr: 'Physiothérapie',         en: 'Physiotherapy',        de: 'Physiotherapie' },
    'm.osteo':     { fr: 'Ostéopathie',            en: 'Osteopathy',           de: 'Osteopathie' },
    'm.prep':      { fr: 'Préparation physique',   en: 'Physical preparation', de: 'Athletiktraining' },
    'm.massage':   { fr: 'Massages thérapeutiques', en: 'Therapeutic massage', de: 'Therapeutische Massagen' },
    'm.nutrition': { fr: 'Nutrition',              en: 'Nutrition',            de: 'Ernährung' },
    'm.yoga':      { fr: 'Yoga &amp; Pilates',     en: 'Yoga &amp; Pilates',   de: 'Yoga &amp; Pilates' },
    'm.resp':      { fr: 'Physio respiratoire',    en: 'Respiratory physio',   de: 'Atemphysiotherapie' },
    'm.neuro':     { fr: 'Physio neurologique',    en: 'Neurological physio',  de: 'Neurologische Physiotherapie' },
    'm.group':     { fr: 'Cours collectifs',       en: 'Group classes',        de: 'Gruppenkurse' },

    /* -- Manifeste -- */
    'man.big': {
      fr: "Une douleur n'est pas un ennemi à faire taire : c'est un signal. Mon rôle, c'est d'en chercher l'origine avec vous, puis de vous remettre <em>en mouvement</em> pour de bon.",
      en: "Pain isn't an enemy to silence — it's a signal. My role is to find its origin with you, then get you <em>moving again</em> for good.",
      de: "Schmerz ist kein Feind, den man zum Schweigen bringen muss — er ist ein Signal. Meine Aufgabe ist es, mit Ihnen seinen Ursprung zu finden und Sie dann dauerhaft <em>wieder in Bewegung</em> zu bringen."
    },
    'man.sign': {
      fr: 'Logan Mulyk · Fondateur du collectif Toukin',
      en: 'Logan Mulyk · Founder of the Toukin collective',
      de: 'Logan Mulyk · Gründer des Kollektivs Toukin'
    },

    /* -- Soins -- */
    'svc.kicker': { fr: 'Nos soins', en: 'Our care', de: 'Unsere Behandlungen' },
    'svc.title': {
      fr: 'Six expertises complémentaires,<br><span class="it">une seule équipe</span>',
      en: 'Six complementary skills,<br><span class="it">one single team</span>',
      de: 'Sechs ergänzende Fachgebiete,<br><span class="it">ein einziges Team</span>'
    },
    'svc.1.h': { fr: 'Physiothérapie', en: 'Physiotherapy', de: 'Physiotherapie' },
    'svc.1.p': { fr: "Rééducation musculo-squelettique, thérapie manuelle et exercices actifs — avec ou sans prescription.", en: "Musculoskeletal rehabilitation, manual therapy and active exercises — with or without a prescription.", de: "Muskuloskelettale Rehabilitation, manuelle Therapie und aktive Übungen — mit oder ohne Verordnung." },
    'svc.1.tag': { fr: 'Conventionné', en: 'Recognised', de: 'Anerkannt' },
    'svc.2.h': { fr: 'Ostéopathie', en: 'Osteopathy', de: 'Osteopathie' },
    'svc.2.p': { fr: "Un travail manuel sur la mobilité des tissus et les tensions, pour redonner de l'aisance au corps.", en: "Manual work on tissue mobility and tension to restore ease of movement to the body.", de: "Manuelle Arbeit an Gewebebeweglichkeit und Spannungen, um dem Körper wieder Leichtigkeit zu geben." },
    'svc.2.tag': { fr: 'Holistique', en: 'Holistic', de: 'Ganzheitlich' },
    'svc.3.h': { fr: 'Préparation physique', en: 'Physical preparation', de: 'Athletiktraining' },
    'svc.3.p': { fr: "Renforcement, reathlétisation et performance. Des programmes individualisés, du sportif au quotidien.", en: "Strength, return-to-sport and performance. Individualised programmes, from athletes to everyday life.", de: "Kräftigung, Wiederaufbau und Leistung. Individuelle Programme, vom Sportler bis zum Alltag." },
    'svc.3.tag': { fr: 'Performance', en: 'Performance', de: 'Leistung' },
    'svc.4.h': { fr: 'Massages thérapeutiques', en: 'Therapeutic massage', de: 'Therapeutische Massagen' },
    'svc.4.p': { fr: "Techniques manuelles ciblées pour relâcher les tensions et accompagner la récupération.", en: "Targeted manual techniques to release tension and support recovery.", de: "Gezielte manuelle Techniken, um Verspannungen zu lösen und die Erholung zu fördern." },
    'svc.4.tag': { fr: 'Récupération', en: 'Recovery', de: 'Erholung' },
    'svc.5.h': { fr: 'Nutrition', en: 'Nutrition', de: 'Ernährung' },
    'svc.5.p': { fr: "Des conseils concrets pour mieux récupérer, retrouver de l'énergie et tenir vos objectifs.", en: "Practical advice to recover better, regain energy and reach your goals.", de: "Konkrete Tipps, um besser zu regenerieren, Energie zu tanken und Ihre Ziele zu erreichen." },
    'svc.5.tag': { fr: 'Bien-être', en: 'Well-being', de: 'Wohlbefinden' },
    'svc.6.h': { fr: 'Physio spécialisée', en: 'Specialised physio', de: 'Spezialisierte Physiotherapie' },
    'svc.6.p': { fr: "Physiothérapie respiratoire, neurologique et prise en charge complexe de plusieurs régions.", en: "Respiratory and neurological physiotherapy, plus complex multi-region care.", de: "Atem- und neurologische Physiotherapie sowie komplexe Behandlung mehrerer Körperregionen." },
    'svc.6.tag': { fr: 'Expertise', en: 'Expertise', de: 'Fachwissen' },
    'svc.specLabel': { fr: 'Domaines de prise en charge', en: 'Areas we treat', de: 'Behandlungsbereiche' },
    'chip.1':  { fr: 'École du dos',                  en: 'Back school',                de: 'Rückenschule' },
    'chip.2':  { fr: 'Rééducation post-opératoire',   en: 'Post-operative rehab',       de: 'Postoperative Rehabilitation' },
    'chip.3':  { fr: 'Post-traumatique &amp; orthopédie', en: 'Post-trauma &amp; orthopaedics', de: 'Posttraumatisch &amp; Orthopädie' },
    'chip.4':  { fr: 'Thérapie manuelle',             en: 'Manual therapy',             de: 'Manuelle Therapie' },
    'chip.5':  { fr: 'Dry needling',                  en: 'Dry needling',               de: 'Dry Needling' },
    'chip.6':  { fr: 'Drainage lymphatique &amp; bandage', en: 'Lymphatic drainage &amp; bandaging', de: 'Lymphdrainage &amp; Bandagen' },
    'chip.7':  { fr: 'Rééducation périnéale',         en: 'Pelvic floor rehab',         de: 'Beckenbodenrehabilitation' },
    'chip.8':  { fr: 'Sénologie',                     en: 'Breast care',                de: 'Senologie' },
    'chip.9':  { fr: 'Oncologie',                     en: 'Oncology',                   de: 'Onkologie' },
    'chip.10': { fr: 'Post-partum',                   en: 'Postpartum',                 de: 'Postpartale Betreuung' },
    'chip.11': { fr: 'Douleur chronique',             en: 'Chronic pain',               de: 'Chronische Schmerzen' },
    'chip.12': { fr: 'Physio respiratoire',           en: 'Respiratory physio',         de: 'Atemphysiotherapie' },
    'chip.13': { fr: 'Physio neurologique',           en: 'Neurological physio',        de: 'Neurologische Physiotherapie' },
    'chip.14': { fr: 'Reathlétisation',               en: 'Return to sport',            de: 'Wiederaufbautraining' },
    'chip.15': { fr: 'Massothérapie',                 en: 'Massage therapy',            de: 'Massagetherapie' },
    'chip.16': { fr: 'Séances à domicile',            en: 'Home visits',                de: 'Hausbesuche' },

    /* -- Approche -- */
    'app.kicker': { fr: 'Notre philosophie', en: 'Our philosophy', de: 'Unsere Philosophie' },
    'app.title': {
      fr: 'Soigner, renforcer,<br><span class="it">prévenir</span>',
      en: 'Treat, strengthen,<br><span class="it">prevent</span>',
      de: 'Behandeln, stärken,<br><span class="it">vorbeugen</span>'
    },
    'app.lead': {
      fr: "Calmer un symptôme ne suffit pas. Nous cherchons d'où il vient — votre histoire, vos habitudes, votre objectif — pour construire un suivi qui tient dans le temps.",
      en: "Easing a symptom isn't enough. We look for where it comes from — your history, your habits, your goal — to build care that lasts.",
      de: "Ein Symptom zu lindern reicht nicht. Wir suchen nach der Ursache — Ihrer Vorgeschichte, Ihren Gewohnheiten, Ihrem Ziel — für eine Betreuung, die nachhaltig wirkt."
    },
    'app.f1b': { fr: 'Bilan approfondi', en: 'In-depth assessment', de: 'Gründliche Untersuchung' },
    'app.f1p': { fr: 'Une première séance dédiée à la cause réelle, pas seulement à la douleur.', en: 'A first session focused on the real cause, not just the pain.', de: 'Eine erste Sitzung, die der wahren Ursache gewidmet ist, nicht nur dem Schmerz.' },
    'app.f2b': { fr: 'Approche pluridisciplinaire', en: 'Multidisciplinary approach', de: 'Interdisziplinärer Ansatz' },
    'app.f2p': { fr: 'Physiothérapeutes, ostéopathes et préparateurs collaborent autour de vous.', en: 'Physiotherapists, osteopaths and trainers work together around you.', de: 'Physiotherapeuten, Osteopathen und Athletiktrainer arbeiten gemeinsam für Sie.' },
    'app.f3b': { fr: 'Vous rendre autonome', en: 'Making you independent', de: 'Sie selbstständig machen' },
    'app.f3p': { fr: 'Des exercices et conseils concrets pour reprendre le contrôle de votre santé.', en: 'Practical exercises and advice to take back control of your health.', de: 'Konkrete Übungen und Tipps, um die Kontrolle über Ihre Gesundheit zurückzugewinnen.' },
    'app.badge': { fr: 'soigner · renforcer · prévenir', en: 'treat · strengthen · prevent', de: 'behandeln · stärken · vorbeugen' },

    /* -- Le centre -- */
    'ctr.kicker': { fr: 'Nos espaces', en: 'Our spaces', de: 'Unsere Räume' },
    'ctr.title': {
      fr: "Un cadre où l'on se sent<br><span class=\"it\">tout de suite à l'aise</span>",
      en: 'A space where you feel<br><span class="it">instantly at ease</span>',
      de: 'Ein Ort, an dem man sich<br><span class="it">sofort wohlfühlt</span>'
    },
    'ctr.lead': {
      fr: "Lumière douce, salles de soin privatives et un vrai plateau d'entraînement — un espace calme, à deux pas du lac.",
      en: "Soft light, private treatment rooms and a real training floor — a calm space, a stone's throw from the lake.",
      de: "Sanftes Licht, private Behandlungsräume und ein echter Trainingsbereich — eine ruhige Oase, nur wenige Schritte vom See."
    },
    'gal.1': { fr: 'Salle de consultation', en: 'Consultation room', de: 'Behandlungsraum' },
    'gal.2': { fr: 'Détails &amp; ambiance', en: 'Details &amp; atmosphere', de: 'Details &amp; Ambiente' },
    'gal.3': { fr: "Espace d'accueil", en: 'Reception area', de: 'Empfangsbereich' },
    'gal.4': { fr: 'Salles de soin', en: 'Treatment rooms', de: 'Behandlungsräume' },
    'gal.5': { fr: 'Plateau de mouvement', en: 'Movement floor', de: 'Bewegungsbereich' },
    'gal.6': { fr: 'Cabinet de soin', en: 'Treatment room', de: 'Behandlungspraxis' },

    /* -- Équipe -- */
    'team.kicker': { fr: 'Le collectif', en: 'The collective', de: 'Das Kollektiv' },
    'team.title': {
      fr: 'Trois physiothérapeutes,<br><span class="it">une même rigueur</span>',
      en: 'Three physiotherapists,<br><span class="it">one shared rigour</span>',
      de: 'Drei Physiotherapeuten,<br><span class="it">dieselbe Sorgfalt</span>'
    },
    'team.lead': {
      fr: "Des spécialités qui se complètent — du sport à la rééducation périnéale — pour vous orienter vers la bonne personne dès le premier rendez-vous.",
      en: "Complementary specialities — from sports to pelvic floor rehab — to guide you to the right person from the very first appointment.",
      de: "Sich ergänzende Spezialgebiete — vom Sport bis zur Beckenbodenrehabilitation — um Sie schon beim ersten Termin an die richtige Person zu verweisen."
    },
    'team.foundTag': { fr: 'Fondateur', en: 'Founder', de: 'Gründer' },
    'team.roleM': { fr: 'Physiothérapeute', en: 'Physiotherapist', de: 'Physiotherapeut' },
    'team.roleF': { fr: 'Physiothérapeute', en: 'Physiotherapist', de: 'Physiotherapeutin' },
    'team.logan.p': { fr: "Physiothérapie générale et sportive, respiratoire, douleur chronique et dos. Thérapie manuelle d'inspiration ostéopathique et dry needling. Également à domicile.", en: "General and sports physiotherapy, respiratory, chronic pain and back. Osteopathy-inspired manual therapy and dry needling. Home visits too.", de: "Allgemeine und Sportphysiotherapie, Atemtherapie, chronische Schmerzen und Rücken. Osteopathisch inspirierte manuelle Therapie und Dry Needling. Auch Hausbesuche." },
    'team.logan.c1': { fr: 'Physio sportive', en: 'Sports physio', de: 'Sportphysiotherapie' },
    'team.logan.c2': { fr: 'Thérapie manuelle', en: 'Manual therapy', de: 'Manuelle Therapie' },
    'team.logan.c3': { fr: 'Dry needling', en: 'Dry needling', de: 'Dry Needling' },
    'team.logan.c4': { fr: 'Douleur chronique', en: 'Chronic pain', de: 'Chronische Schmerzen' },
    'team.logan.c5': { fr: 'Dos', en: 'Back', de: 'Rücken' },
    'team.logan.c6': { fr: 'À domicile', en: 'Home visits', de: 'Hausbesuche' },
    'team.laetitia.p': { fr: "Physiothérapie générale, drainage lymphatique et bandage, ainsi que physiothérapie respiratoire.", en: "General physiotherapy, lymphatic drainage and bandaging, as well as respiratory physiotherapy.", de: "Allgemeine Physiotherapie, Lymphdrainage und Bandagen sowie Atemphysiotherapie." },
    'team.laetitia.c1': { fr: 'Physio générale', en: 'General physio', de: 'Allgemeine Physiotherapie' },
    'team.laetitia.c2': { fr: 'Drainage lymphatique', en: 'Lymphatic drainage', de: 'Lymphdrainage' },
    'team.laetitia.c3': { fr: 'Bandage', en: 'Bandaging', de: 'Bandagen' },
    'team.laetitia.c4': { fr: 'Respiratoire', en: 'Respiratory', de: 'Atemtherapie' },
    'team.anais.p': { fr: "Physiothérapie générale, sénologie, rééducation post-partum et accompagnement en oncologie.", en: "General physiotherapy, breast care, postpartum rehabilitation and oncology support.", de: "Allgemeine Physiotherapie, Senologie, postpartale Rehabilitation und onkologische Begleitung." },
    'team.anais.c1': { fr: 'Physio générale', en: 'General physio', de: 'Allgemeine Physiotherapie' },
    'team.anais.c2': { fr: 'Sénologie', en: 'Breast care', de: 'Senologie' },
    'team.anais.c3': { fr: 'Post-partum', en: 'Postpartum', de: 'Postpartum' },
    'team.anais.c4': { fr: 'Oncologie', en: 'Oncology', de: 'Onkologie' },

    /* -- Fondateur -- */
    'fnd.kicker': { fr: 'Le fondateur', en: 'The founder', de: 'Der Gründer' },
    'fnd.title': {
      fr: "Logan Mulyk,<br><span class=\"it\">l'exigence du soin</span>",
      en: 'Logan Mulyk,<br><span class="it">a commitment to quality care</span>',
      de: 'Logan Mulyk,<br><span class="it">der Anspruch an gute Pflege</span>'
    },
    'fnd.lead': {
      fr: "Physiothérapeute et étudiant en médecine, Logan a monté Toukin autour d'une idée simple : des thérapeutes qui se parlent, du temps pour chaque patient, et des soins à la hauteur de ce qui se pratique à l'hôpital.",
      en: "A physiotherapist and medical student, Logan built Toukin around a simple idea: therapists who talk to each other, time for every patient, and care that matches hospital standards.",
      de: "Als Physiotherapeut und Medizinstudent gründete Logan Toukin nach einer einfachen Idee: Therapeuten, die miteinander reden, Zeit für jeden Patienten und eine Versorgung auf Spitalniveau."
    },
    'fnd.f1b': { fr: 'Formation médicale continue', en: 'Ongoing medical training', de: 'Kontinuierliche medizinische Weiterbildung' },
    'fnd.f1p': { fr: "Études de médecine en cours — une approche du corps fondée sur les preuves et constamment actualisée.", en: "Medical studies in progress — an evidence-based, constantly updated approach to the body.", de: "Laufendes Medizinstudium — ein evidenzbasierter, ständig aktualisierter Zugang zum Körper." },
    'fnd.f2b': { fr: 'Collaboration hospitalière', en: 'Hospital collaboration', de: 'Zusammenarbeit mit Spitälern' },
    'fnd.f2p': { fr: "Partenariats avec l'Hôpital de Morges, en chirurgie orthopédique et prise en charge de la douleur.", en: "Partnerships with Morges Hospital in orthopaedic surgery and pain management.", de: "Partnerschaften mit dem Spital Morges in orthopädischer Chirurgie und Schmerzbehandlung." },
    'fnd.f3b': { fr: 'Une expérience plurielle', en: 'Broad experience', de: 'Vielfältige Erfahrung' },
    'fnd.f3p': { fr: "Orthopédie, oncologie, physio respiratoire, psychiatrie et accompagnement de clubs sportifs.", en: "Orthopaedics, oncology, respiratory physio, psychiatry and support for sports clubs.", de: "Orthopädie, Onkologie, Atemphysiotherapie, Psychiatrie und Betreuung von Sportvereinen." },
    'fnd.quote': {
      fr: "« J'ai voulu créer le centre où j'aurais moi-même aimé être soigné : on prend le temps de vous expliquer, on ne vous presse jamais, et chacun tire dans le même sens. »",
      en: "“I wanted to create the centre where I'd have liked to be treated myself: we take the time to explain, we never rush you, and everyone pulls in the same direction.”",
      de: "„Ich wollte das Zentrum schaffen, in dem ich selbst gerne behandelt worden wäre: Wir nehmen uns Zeit zum Erklären, drängen Sie nie und ziehen alle an einem Strang.“"
    },
    'fnd.also': {
      fr: "Consulte également au <strong>Pôle Santé d'Etagnières</strong> · Chemin de l'Etang 7, 1037 Etagnières",
      en: "Also consults at the <strong>Pôle Santé d'Etagnières</strong> · Chemin de l'Etang 7, 1037 Etagnières",
      de: "Sprechstunde auch im <strong>Pôle Santé d'Etagnières</strong> · Chemin de l'Etang 7, 1037 Etagnières"
    },
    'fnd.badge': { fr: 'Collaboration clinique', en: 'Clinical collaboration', de: 'Klinische Zusammenarbeit' },

    /* -- Bande chiffres -- */
    'band.1': { fr: 'Note moyenne ★', en: 'Average rating ★', de: 'Durchschnittsbewertung ★' },
    'band.2': { fr: 'Lieux de consultation', en: 'Consultation locations', de: 'Standorte' },
    'band.3': { fr: 'Domaines de prise en charge', en: 'Areas we treat', de: 'Behandlungsbereiche' },
    'band.4': { fr: 'Soins personnalisés', en: 'Personalised care', de: 'Individuelle Betreuung' },

    /* -- Cours -- */
    'crs.kicker': { fr: 'Bouger ensemble', en: 'Move together', de: 'Gemeinsam bewegen' },
    'crs.title': { fr: 'Cours collectifs &amp; prévention', en: 'Group classes &amp; prevention', de: 'Gruppenkurse &amp; Prävention' },
    'crs.lead': {
      fr: "Au-delà du soin individuel, des cours en groupe pour entretenir mobilité, force et bien-être.",
      en: "Beyond individual care, group classes to maintain mobility, strength and well-being.",
      de: "Über die Einzelbehandlung hinaus: Gruppenkurse zur Erhaltung von Mobilität, Kraft und Wohlbefinden."
    },
    'crs.yoga.h': { fr: 'Yoga', en: 'Yoga', de: 'Yoga' },
    'crs.yoga.p': { fr: 'Souplesse, respiration et ancrage corporel.', en: 'Flexibility, breathing and body awareness.', de: 'Beweglichkeit, Atmung und Körpergefühl.' },
    'crs.pilates.h': { fr: 'Pilates', en: 'Pilates', de: 'Pilates' },
    'crs.pilates.p': { fr: 'Gainage profond et contrôle du mouvement.', en: 'Deep core work and movement control.', de: 'Tiefe Rumpfstabilität und Bewegungskontrolle.' },
    'crs.renf.h': { fr: 'Renforcement', en: 'Strength', de: 'Krafttraining' },
    'crs.renf.p': { fr: 'Force et stabilité pour prévenir les blessures.', en: 'Strength and stability to prevent injury.', de: 'Kraft und Stabilität zur Verletzungsprävention.' },
    'crs.seniors.h': { fr: 'Gym seniors', en: 'Senior fitness', de: 'Seniorengymnastik' },
    'crs.seniors.p': { fr: 'Mobilité et équilibre en douceur, à tout âge.', en: 'Gentle mobility and balance, at any age.', de: 'Sanfte Mobilität und Gleichgewicht, in jedem Alter.' },

    /* -- Témoignages -- */
    'rev.kicker': { fr: 'Témoignages', en: 'Testimonials', de: 'Erfahrungsberichte' },
    'rev.title': { fr: 'Ils nous font confiance', en: 'They trust us', de: 'Sie vertrauen uns' },
    'rev.text': {
      fr: "« Vraiment incomparable. » Compétences, formations continues, empathie, infrastructure et parking : tout y est.",
      en: "“Truly incomparable.” Skills, ongoing training, empathy, facilities and parking: it's all there.",
      de: "„Wirklich unvergleichlich.“ Kompetenz, ständige Weiterbildung, Empathie, Infrastruktur und Parkplatz: alles vorhanden."
    },
    'rev.whoB': { fr: 'Patient vérifié', en: 'Verified patient', de: 'Verifizierter Patient' },
    'rev.whoS': { fr: 'Avis vérifié · 5,0 ★', en: 'Verified review · 5.0 ★', de: 'Verifizierte Bewertung · 5,0 ★' },
    'rev.more': {
      fr: 'Note <strong style="color:var(--black)">5,0 ★</strong> · <a href="https://www.local.ch/fr/d/tolochenaz/1131/physiotherapie/toukin-iG1-7lVRvSLR1t844qLoPg" target="_blank" rel="noopener" style="color:var(--amber);font-weight:600">Lire &amp; laisser un avis</a>',
      en: 'Rating <strong style="color:var(--black)">5.0 ★</strong> · <a href="https://www.local.ch/fr/d/tolochenaz/1131/physiotherapie/toukin-iG1-7lVRvSLR1t844qLoPg" target="_blank" rel="noopener" style="color:var(--amber);font-weight:600">Read &amp; leave a review</a>',
      de: 'Bewertung <strong style="color:var(--black)">5,0 ★</strong> · <a href="https://www.local.ch/fr/d/tolochenaz/1131/physiotherapie/toukin-iG1-7lVRvSLR1t844qLoPg" target="_blank" rel="noopener" style="color:var(--amber);font-weight:600">Bewertung lesen &amp; abgeben</a>'
    },

    /* -- Médias -- */
    'soc.kicker': { fr: 'Suivez-nous', en: 'Follow us', de: 'Folgen Sie uns' },
    'soc.title': { fr: 'Toukin sur les réseaux', en: 'Toukin on social media', de: 'Toukin in den sozialen Medien' },
    'soc.lead': {
      fr: "Conseils, exercices, coulisses du centre et actualités du collectif.",
      en: "Tips, exercises, behind-the-scenes and news from the collective.",
      de: "Tipps, Übungen, Einblicke und Neuigkeiten aus dem Kollektiv."
    },
    'soc.ig.p': { fr: 'Exercices, conseils prévention et vie du centre.', en: 'Exercises, prevention tips and life at the centre.', de: 'Übungen, Präventionstipps und Einblicke ins Zentrum.' },
    'soc.ig.go': { fr: 'Suivre', en: 'Follow', de: 'Folgen' },
    'soc.yt.p': { fr: "Vidéos d'exercices et de conseils pour bouger mieux.", en: 'Exercise and advice videos to help you move better.', de: 'Übungs- und Ratgebervideos für bessere Bewegung.' },
    'soc.yt.go': { fr: 'Regarder', en: 'Watch', de: 'Ansehen' },
    'soc.fb.handle': { fr: 'Collectif santé Toukin', en: 'Toukin Health Collective', de: 'Gesundheitskollektiv Toukin' },
    'soc.fb.p': { fr: 'Actualités, événements et nouveautés du collectif.', en: 'News, events and updates from the collective.', de: 'Neuigkeiten, Veranstaltungen und Updates des Kollektivs.' },
    'soc.fb.go': { fr: 'Aimer', en: 'Like', de: 'Gefällt mir' },
    'soc.li.p': { fr: 'Le collectif, son équipe et ses projets.', en: 'The collective, its team and its projects.', de: 'Das Kollektiv, sein Team und seine Projekte.' },
    'soc.li.go': { fr: 'Se connecter', en: 'Connect', de: 'Vernetzen' },
    'soc.vf.aria': { fr: 'Voir les vidéos de Toukin sur YouTube', en: 'Watch Toukin videos on YouTube', de: 'Toukin-Videos auf YouTube ansehen' },
    'soc.vf.h': { fr: 'Exercices &amp; conseils en vidéo', en: 'Exercises &amp; advice on video', de: 'Übungen &amp; Tipps im Video' },
    'soc.vf.p': { fr: 'Nos routines de mobilité, de renforcement et nos conseils prévention.', en: 'Our mobility and strength routines and our prevention tips.', de: 'Unsere Mobilitäts- und Kräftigungsroutinen sowie Präventionstipps.' },

    /* -- FAQ -- */
    'faq.kicker': { fr: 'Bon à savoir', en: 'Good to know', de: 'Gut zu wissen' },
    'faq.title': { fr: 'Praticité &amp; questions fréquentes', en: 'Practical info &amp; FAQ', de: 'Praktisches &amp; häufige Fragen' },
    'faq.lead': {
      fr: "L'essentiel à connaître avant votre première séance, en toute transparence.",
      en: "The essentials to know before your first session, in full transparency.",
      de: "Das Wichtigste vor Ihrer ersten Sitzung — transparent erklärt."
    },
    'trust.1b': { fr: 'Avec ou sans ordonnance', en: 'With or without a prescription', de: 'Mit oder ohne Verordnung' },
    'trust.1s': { fr: 'Accès direct possible', en: 'Direct access possible', de: 'Direkter Zugang möglich' },
    'trust.2b': { fr: 'Conventionné assurances', en: 'Recognised by insurers', de: 'Von Versicherungen anerkannt' },
    'trust.2s': { fr: 'Remboursement sur prescription', en: 'Reimbursed with a prescription', de: 'Rückerstattung mit Verordnung' },
    'trust.3b': { fr: 'Nouveaux patients bienvenus', en: 'New patients welcome', de: 'Neue Patienten willkommen' },
    'trust.3s': { fr: 'Sur 2 sites de consultation', en: 'Across 2 locations', de: 'An 2 Standorten' },
    'trust.4b': { fr: 'Espèces · Facture · TWINT', en: 'Cash · Invoice · TWINT', de: 'Bar · Rechnung · TWINT' },
    'trust.4s': { fr: 'Paiement flexible', en: 'Flexible payment', de: 'Flexible Zahlung' },
    'trust.5b': { fr: 'Accès PMR &amp; parking', en: 'Wheelchair access &amp; parking', de: 'Barrierefrei &amp; Parkplatz' },
    'trust.5s': { fr: 'Proche transports &amp; lac', en: 'Near transport &amp; the lake', de: 'Nahe ÖV &amp; See' },
    'trust.6b': { fr: 'Français &amp; anglais', en: 'French &amp; English', de: 'Französisch &amp; Englisch' },
    'trust.6s': { fr: 'Une équipe à votre écoute', en: 'A team that listens', de: 'Ein Team, das zuhört' },
    'faq.q1': { fr: "Ai-je besoin d'une ordonnance pour consulter ?", en: 'Do I need a prescription to be seen?', de: 'Brauche ich eine Verordnung für einen Termin?' },
    'faq.a1': { fr: "Pas forcément : nous recevons les patients avec ou sans prescription médicale. Pour un remboursement par l'assurance de base (LAMal), une ordonnance de votre médecin est en revanche nécessaire.", en: "Not necessarily: we see patients with or without a medical prescription. However, a prescription from your doctor is required for reimbursement by basic insurance (LAMal).", de: "Nicht zwingend: Wir behandeln Patienten mit oder ohne ärztliche Verordnung. Für eine Rückerstattung durch die Grundversicherung (KVG) ist jedoch eine Verordnung Ihres Arztes erforderlich." },
    'faq.q2': { fr: 'Êtes-vous conventionnés et remboursés par les assurances ?', en: 'Are you recognised and reimbursed by insurers?', de: 'Sind Sie anerkannt und werden von Versicherungen rückerstattet?' },
    'faq.a2': { fr: "Oui. Nos prestations de physiothérapie sont reconnues et prises en charge par les assurances sur prescription médicale. N'hésitez pas à nous contacter pour toute question sur votre couverture.", en: "Yes. Our physiotherapy services are recognised and covered by insurers with a medical prescription. Feel free to contact us with any questions about your coverage.", de: "Ja. Unsere Physiotherapieleistungen sind anerkannt und werden mit ärztlicher Verordnung von den Versicherungen übernommen. Kontaktieren Sie uns gerne bei Fragen zu Ihrer Deckung." },
    'faq.q3': { fr: 'Comment prendre rendez-vous ?', en: 'How do I book an appointment?', de: 'Wie buche ich einen Termin?' },
    'faq.a3': { fr: "Le plus simple est la réservation en ligne, disponible 24h/24 via le bouton « Prendre rendez-vous ». Vous pouvez aussi nous joindre par téléphone au 078 240 13 95 ou par e-mail à toukin@physio-hin.ch.", en: "The easiest way is online booking, available 24/7 via the “Book an appointment” button. You can also reach us by phone at 078 240 13 95 or by email at toukin@physio-hin.ch.", de: "Am einfachsten ist die Online-Buchung, rund um die Uhr über die Schaltfläche „Termin buchen“. Sie erreichen uns auch telefonisch unter 078 240 13 95 oder per E-Mail an toukin@physio-hin.ch." },
    'faq.q4': { fr: 'Acceptez-vous de nouveaux patients ?', en: 'Are you accepting new patients?', de: 'Nehmen Sie neue Patienten an?' },
    'faq.a4': { fr: "Oui, nous accueillons volontiers de nouveaux patients, à Tolochenaz comme au Pôle Santé d'Etagnières. Réservez simplement le créneau qui vous convient.", en: "Yes, we gladly welcome new patients, both in Tolochenaz and at the Pôle Santé d'Etagnières. Simply book the slot that suits you.", de: "Ja, wir nehmen gerne neue Patienten auf, sowohl in Tolochenaz als auch im Pôle Santé d'Etagnières. Buchen Sie einfach den passenden Termin." },
    'faq.q5': { fr: 'Proposez-vous des séances à domicile ?', en: 'Do you offer home visits?', de: 'Bieten Sie Hausbesuche an?' },
    'faq.a5': { fr: "Oui, des prises en charge à domicile sont possibles selon votre situation. Parlez-nous-en lors de la prise de rendez-vous afin d'organiser l'intervention.", en: "Yes, home care is possible depending on your situation. Let us know when booking so we can arrange the visit.", de: "Ja, Hausbesuche sind je nach Situation möglich. Teilen Sie uns dies bei der Terminbuchung mit, damit wir den Besuch organisieren können." },
    'faq.q6': { fr: 'Quels moyens de paiement acceptez-vous ?', en: 'Which payment methods do you accept?', de: 'Welche Zahlungsmittel akzeptieren Sie?' },
    'faq.a6': { fr: "Espèces, facture et TWINT. Le règlement s'effectue en francs suisses (CHF).", en: "Cash, invoice and TWINT. Payment is made in Swiss francs (CHF).", de: "Bar, Rechnung und TWINT. Die Zahlung erfolgt in Schweizer Franken (CHF)." },
    'faq.q7': { fr: 'Dans quelles langues êtes-vous disponibles ?', en: 'Which languages do you speak?', de: 'In welchen Sprachen sind Sie verfügbar?' },
    'faq.a7': { fr: "Nous vous accueillons en français et en anglais.", en: "We welcome you in French and English.", de: "Wir empfangen Sie auf Französisch und Englisch." },

    /* -- CTA -- */
    'cta.h': {
      fr: 'Faisons le premier pas<br><span class="it" style="font-style:italic;color:var(--amber)">ensemble</span>.',
      en: "Let's take the first step<br><span class=\"it\" style=\"font-style:italic;color:var(--amber)\">together</span>.",
      de: 'Machen wir den ersten Schritt<br><span class="it" style="font-style:italic;color:var(--amber)">gemeinsam</span>.'
    },
    'cta.p': {
      fr: "Première séance réservable en ligne, avec ou sans ordonnance — à Tolochenaz comme à Etagnières.",
      en: "Book your first session online, with or without a prescription — in Tolochenaz and Etagnières.",
      de: "Erste Sitzung online buchbar, mit oder ohne Verordnung — in Tolochenaz wie in Etagnières."
    },

    /* -- Contact -- */
    'con.kicker': { fr: 'Nous trouver', en: 'Find us', de: 'So finden Sie uns' },
    'con.title': { fr: 'Au cœur de Tolochenaz', en: 'In the heart of Tolochenaz', de: 'Mitten in Tolochenaz' },
    'con.lead': {
      fr: "À deux pas de la gare et du lac de Morges. Réservez en ligne, ou écrivez-nous : on répond vite.",
      en: "A stone's throw from the station and Lake Morges. Book online, or write to us: we reply quickly.",
      de: "Nur wenige Schritte von Bahnhof und Genfersee bei Morges. Buchen Sie online oder schreiben Sie uns — wir antworten schnell."
    },
    'con.addressH': { fr: 'Adresse', en: 'Address', de: 'Adresse' },
    'con.address': {
      fr: 'Route de Genève 32C<br>1131 Tolochenaz (VD), Suisse',
      en: 'Route de Genève 32C<br>1131 Tolochenaz (VD), Switzerland',
      de: 'Route de Genève 32C<br>1131 Tolochenaz (VD), Schweiz'
    },
    'con.phoneH': { fr: 'Téléphone', en: 'Phone', de: 'Telefon' },
    'con.emailH': { fr: 'E-mail', en: 'Email', de: 'E-Mail' },
    'con.hoursH': { fr: 'Horaires', en: 'Opening hours', de: 'Öffnungszeiten' },
    'con.hMon': { fr: 'Lundi – Jeudi', en: 'Monday – Thursday', de: 'Montag – Donnerstag' },
    'con.hFri': { fr: 'Vendredi', en: 'Friday', de: 'Freitag' },
    'con.hWe': { fr: 'Samedi – Dimanche', en: 'Saturday – Sunday', de: 'Samstag – Sonntag' },
    'con.hWeVal': { fr: 'Sur rendez-vous', en: 'By appointment', de: 'Nach Vereinbarung' },
    'con.practH': { fr: 'Infos pratiques', en: 'Practical info', de: 'Praktische Infos' },
    'con.pract': {
      fr: 'Paiement : espèces · facture · TWINT<br>Accès PMR &amp; parking · proche des transports &amp; du lac · FR / EN',
      en: 'Payment: cash · invoice · TWINT<br>Wheelchair access &amp; parking · near transport &amp; the lake · FR / EN',
      de: 'Zahlung: bar · Rechnung · TWINT<br>Barrierefrei &amp; Parkplatz · nahe ÖV &amp; See · FR / EN'
    },
    'con.secondH': { fr: '2ᵉ lieu de consultation', en: '2nd consultation location', de: '2. Standort' },
    'con.second': {
      fr: "Pôle Santé d'Etagnières<br>Chemin de l'Etang 7, 1037 Etagnières (VD)",
      en: "Pôle Santé d'Etagnières<br>Chemin de l'Etang 7, 1037 Etagnières (VD)",
      de: "Pôle Santé d'Etagnières<br>Chemin de l'Etang 7, 1037 Etagnières (VD)"
    },
    'con.call': { fr: 'Appeler', en: 'Call', de: 'Anrufen' },
    'con.mapTitle': { fr: 'Carte — Toukin, Route de Genève 32C, Tolochenaz', en: 'Map — Toukin, Route de Genève 32C, Tolochenaz', de: 'Karte — Toukin, Route de Genève 32C, Tolochenaz' },

    /* -- Footer -- */
    'ft.desc': {
      fr: "Collectif santé pluridisciplinaire à Tolochenaz et Etagnières. Physiothérapie, ostéopathie et préparation physique, par une équipe qui prend le temps.",
      en: "Multidisciplinary health collective in Tolochenaz and Etagnières. Physiotherapy, osteopathy and physical preparation, by a team that takes its time.",
      de: "Interdisziplinäres Gesundheitskollektiv in Tolochenaz und Etagnières. Physiotherapie, Osteopathie und Athletiktraining — von einem Team, das sich Zeit nimmt."
    },
    'ft.careH': { fr: 'Soins', en: 'Care', de: 'Behandlungen' },
    'ft.care1': { fr: 'Physiothérapie', en: 'Physiotherapy', de: 'Physiotherapie' },
    'ft.care2': { fr: 'Ostéopathie', en: 'Osteopathy', de: 'Osteopathie' },
    'ft.care3': { fr: 'Préparation physique', en: 'Physical preparation', de: 'Athletiktraining' },
    'ft.care4': { fr: 'Massages &amp; nutrition', en: 'Massage &amp; nutrition', de: 'Massagen &amp; Ernährung' },
    'ft.centerH': { fr: 'Le centre', en: 'The centre', de: 'Das Zentrum' },
    'ft.center1': { fr: 'Notre approche', en: 'Our approach', de: 'Unser Ansatz' },
    'ft.center2': { fr: 'Le fondateur', en: 'The founder', de: 'Der Gründer' },
    'ft.center3': { fr: "L'équipe", en: 'The team', de: 'Das Team' },
    'ft.center4': { fr: 'Nos espaces', en: 'Our spaces', de: 'Unsere Räume' },
    'ft.center5': { fr: 'Cours collectifs', en: 'Group classes', de: 'Gruppenkurse' },
    'ft.center6': { fr: 'Questions fréquentes', en: 'FAQ', de: 'Häufige Fragen' },
    'ft.contactH': { fr: 'Contact', en: 'Contact', de: 'Kontakt' },
    'ft.copy': {
      fr: 'Toukin — Collectif santé · Tolochenaz (VD), Suisse',
      en: 'Toukin — Health Collective · Tolochenaz (VD), Switzerland',
      de: 'Toukin — Gesundheitskollektiv · Tolochenaz (VD), Schweiz'
    },
    'ft.mid': {
      fr: 'Entre lac et vignoble, à Tolochenaz · 5,0 ★',
      en: 'Between lake and vineyards, in Tolochenaz · 5.0 ★',
      de: 'Zwischen See und Reben, in Tolochenaz · 5,0 ★'
    },
    'ft.by': { fr: 'Conçu &amp; développé par', en: 'Designed &amp; developed by', de: 'Konzipiert &amp; entwickelt von' },

    /* -- Barre mobile -- */
    'mb.book': { fr: 'Réserver', en: 'Book', de: 'Buchen' },

    /* -- Lightbox -- */
    'lb.close': { fr: 'Fermer', en: 'Close', de: 'Schliessen' },
    'lb.zoom': { fr: 'Agrandir : ', en: 'Enlarge: ', de: 'Vergrössern: ' },
    'lb.photo': { fr: 'photo', en: 'photo', de: 'Foto' },

    /* -- Statut Ouvert/Fermé (JS) -- */
    'pill.open':       { fr: 'Ouvert · ferme à {t}', en: 'Open · closes at {t}', de: 'Geöffnet · schliesst um {t}' },
    'pill.openShort':  { fr: 'Ouvert', en: 'Open', de: 'Geöffnet' },
    'pill.closed':     { fr: 'Fermé', en: 'Closed', de: 'Geschlossen' },
    'pill.opens':      { fr: 'Ouvre {when}', en: 'Opens {when}', de: 'Öffnet {when}' },
    'pill.today':      { fr: "aujourd'hui à {t}", en: 'today at {t}', de: 'heute um {t}' },
    'pill.tomorrow':   { fr: 'demain à {t}', en: 'tomorrow at {t}', de: 'morgen um {t}' },
    'pill.weekday':    { fr: '{day} à {t}', en: '{day} at {t}', de: '{day} um {t}' },
    'pill.ariaOpen':   { fr: 'Centre ouvert — appeler le {tel}', en: 'Centre open — call {tel}', de: 'Zentrum geöffnet — anrufen unter {tel}' },
    'pill.ariaClosed': { fr: 'Centre fermé — ouvre {when}', en: 'Centre closed — opens {when}', de: 'Zentrum geschlossen — öffnet {when}' },
    'pill.barAriaOpen':   { fr: 'Centre ouvert, ferme à {t}', en: 'Centre open, closes at {t}', de: 'Zentrum geöffnet, schliesst um {t}' },
    'pill.barAriaClosed': { fr: 'Centre fermé, ouvre {when}', en: 'Centre closed, opens {when}', de: 'Zentrum geschlossen, öffnet {when}' },
    /* jours (minuscule FR, capitalisé EN/DE — usage « ouvre lundi à … ») */
    'day.0': { fr: 'dimanche', en: 'Sunday',    de: 'Sonntag' },
    'day.1': { fr: 'lundi',    en: 'Monday',    de: 'Montag' },
    'day.2': { fr: 'mardi',    en: 'Tuesday',   de: 'Dienstag' },
    'day.3': { fr: 'mercredi', en: 'Wednesday', de: 'Mittwoch' },
    'day.4': { fr: 'jeudi',    en: 'Thursday',  de: 'Donnerstag' },
    'day.5': { fr: 'vendredi', en: 'Friday',    de: 'Freitag' },
    'day.6': { fr: 'samedi',   en: 'Saturday',  de: 'Samstag' }
  };

  /* ============ LOGIQUE ============ */
  let lang = DEFAULT;
  try {
    const saved = localStorage.getItem(STORE);
    if (saved && SUPPORTED.includes(saved)) lang = saved;
  } catch (e) { /* localStorage indisponible */ }

  const t = (key, l) => {
    const e = T[key];
    if (!e) return key;
    return e[l || lang] != null ? e[l || lang] : (e[DEFAULT] != null ? e[DEFAULT] : key);
  };

  const applyDOM = () => {
    document.documentElement.lang = lang;
    document.title = t('doc.title');
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', t('doc.desc'));
    const ogl = document.querySelector('meta[property="og:locale"]');
    if (ogl) ogl.setAttribute('content', lang === 'fr' ? 'fr_CH' : (lang === 'de' ? 'de_CH' : 'en_CH'));

    document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.setAttribute('alt', t(el.getAttribute('data-i18n-alt'))); });
    document.querySelectorAll('[data-i18n-title]').forEach(el => { el.setAttribute('title', t(el.getAttribute('data-i18n-title'))); });

    /* Liens de réservation tbooking : adapte la locale de l'URL */
    document.querySelectorAll('a[href*="tbooking.ch/"]').forEach(a => {
      a.href = a.href.replace(/tbooking\.ch\/(fr|en|de|it)\//, 'tbooking.ch/' + lang + '/');
    });

    /* Boutons sélecteur de langue */
    document.querySelectorAll('.lang-switch [data-lang]').forEach(b => {
      const on = b.getAttribute('data-lang') === lang;
      b.setAttribute('aria-pressed', String(on));
      b.classList.toggle('active', on);
    });

    document.dispatchEvent(new CustomEvent('toukin:langchange', { detail: { lang } }));
  };

  const setLang = (l) => {
    if (!SUPPORTED.includes(l) || l === lang) { if (l === lang) applyDOM(); return; }
    lang = l;
    try { localStorage.setItem(STORE, l); } catch (e) { /* ignore */ }
    applyDOM();
  };

  /* API publique (utilisée par main.js pour le statut Ouvert/Fermé) */
  window.I18N = {
    get lang() { return lang; },
    t: (key) => t(key),
    setLang
  };

  const wire = () => {
    document.querySelectorAll('.lang-switch [data-lang]').forEach(b => {
      b.addEventListener('click', () => setLang(b.getAttribute('data-lang')));
    });
    applyDOM();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire);
  else wire();
})();

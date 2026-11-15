/* Verifika Pro – public site: language switch (English in the page, French here). The chosen language is passed to the portal (?lang=). */
(function () {
  'use strict';
  var FR = {
    "skip": "Aller au contenu",
    "nav.how": "Comment ça marche",
    "nav.levels": "Vérification",
    "nav.companies": "Entreprises",
    "nav.pros": "Professionnels",
    "nav.faq": "Questions",
    "nav.login": "Se connecter",
    "nav.join": "Créer un compte",
    "hero.eyebrow": "Réseau de professionnels vérifiés",
    "hero.title": "Des professionnels vérifiés par des personnes, présentés avec des preuves.",
    "hero.lead": "Chaque profil est vérifié par un spécialiste du recrutement : identité, entretien structuré, références et parcours. Les entreprises recrutent avec moins de risque. Les professionnels accèdent à des missions qu’ils n’auraient pas trouvées seuls.",
    "hero.cta_company": "Je recrute",
    "hero.cta_person": "Je suis candidat ou consultant",
    "hero.note": "Freelance et CDI · Europe et Afrique · Profils anonymisés jusqu’à l’entretien",
    "sample.tag": "Exemple fictif",
    "sample.title": "Consultant SAP FICO senior",
    "sample.level": "Niveau 2 · Validé Verifika · vérifié le 12 nov. 2026",
    "sample.c1": "Entretien structuré de 45 min avec un recruteur spécialisé",
    "sample.c2": "Identité et échange confirmés par l’équipe Verifika",
    "sample.c3": "Anglais C1 et français C2 vérifiés à l’oral",
    "sample.c4": "Critères obligatoires du poste : tous confirmés avec preuve",
    "sample.k1": "8 ans d’expérience",
    "sample.k2": "Hybride · Bruxelles",
    "sample.k3": "Disponible en janvier",
    "why.eyebrow": "Pourquoi Verifika Pro",
    "why.title": "Nous vendons des preuves, pas du volume.",
    "why.m.title": "Les plateformes freelance",
    "why.m.text": "vendent du volume : des centaines de profils déclarés, à vous de trier et de vérifier.",
    "why.a.title": "Les agences classiques",
    "why.a.text": "vendent leur carnet d’adresses : vous voyez rarement ce qui a été vérifié, ni comment.",
    "why.v.title": "Verifika Pro",
    "why.v.text": "vend des preuves : ce qui a été vérifié, par qui, quand et à quel niveau, affiché sur chaque profil.",
    "how.eyebrow": "Comment ça marche",
    "how.title": "Du besoin à la signature, chaque étape est tracée.",
    "how.s1.title": "Vous publiez un besoin",
    "how.s1.text": "Poste, critères obligatoires, budget. Notre équipe le relit avec vous et peut proposer une version plus claire.",
    "how.s2.title": "Des recruteurs spécialisés cherchent",
    "how.s2.text": "Notre réseau de recruteurs trouve des profils et mène un entretien structuré, avec un rapport complet critère par critère.",
    "how.s3.title": "L’équipe Verifika valide",
    "how.s3.text": "Deuxième qualification : identité, échange confirmé, langues. Le niveau de vérification atteint est affiché.",
    "how.s4.title": "Vous recevez des profils anonymisés",
    "how.s4.text": "Avec leurs preuves. Le professionnel a accepté d’être présenté pour ce poste précis. Votre avis est attendu sur chaque profil.",
    "how.s5.title": "Entretien",
    "how.s5.text": "Vous demandez un entretien et acceptez la clause de non-sollicitation. Le prénom est communiqué pour l’appel.",
    "how.s6.title": "Signature et suivi",
    "how.s6.text": "L’identité complète est communiquée à la signature. Nous suivons la mission ou la période de garantie avec vous.",
    "levels.eyebrow": "Niveaux de vérification",
    "levels.title": "Un poinçon, pas une note.",
    "levels.intro": "Comme le poinçon d’un essayeur sur un métal précieux, chaque badge dit ce qui a été contrôlé et quand. Ce n’est jamais un score ni un classement.",
    "levels.l0.title": "Niveau 0 · Déclaré",
    "levels.l0.text": "Informations données par le professionnel ou son CV.",
    "levels.l1.title": "Niveau 1 · Entretien recruteur",
    "levels.l1.text": "Pré-qualification faite par un recruteur spécialisé, rapport complet.",
    "levels.l2.title": "Niveau 2 · Validé Verifika",
    "levels.l2.text": "Deuxième qualification par l’équipe Verifika : identité, échange confirmé, langue.",
    "levels.l3.title": "Niveau 3 · Documents vérifiés",
    "levels.l3.text": "Diplômes, certifications ou licences vérifiés à la source.",
    "co.eyebrow": "Verifika Proof · pour les entreprises",
    "co.title": "Recrutez avec moins de risque.",
    "co.t1": "Publiez vos besoins sans engagement ; vous payez quand une mission démarre ou qu’une embauche est conclue.",
    "co.t2": "Freelance ou CDI, en Europe et en Afrique.",
    "co.t3": "Des profils anonymisés avec leurs preuves, jamais une pile de CV.",
    "co.t4": "Un espace pour toute votre équipe : besoins, avis, entretiens, messages avec notre équipe.",
    "co.t5": "Entreprise en direct, agence ou recruteur indépendant : le client final de chaque besoin reste confidentiel.",
    "co.cta": "Créer un compte entreprise",
    "pro.eyebrow": "Verifika Pass · pour les professionnels",
    "pro.title": "Un profil vérifié, qui travaille pour vous.",
    "pro.t1": "Gratuit pour les candidats et les consultants.",
    "pro.t2": "Jamais présenté à une entreprise pour un poste sans votre accord pour ce poste.",
    "pro.t3": "Votre identité est partagée par étapes : profil anonyme, prénom pour l’entretien, identité complète à la signature.",
    "pro.t4": "Vous suivez chaque étape de vos candidatures et échangez avec votre recruteur.",
    "pro.t5": "Vos données vous appartiennent : téléchargement et demande de suppression depuis votre Pass.",
    "pro.cta": "Créer mon Verifika Pass",
    "ai.eyebrow": "Intelligence artificielle",
    "ai.title": "L’IA propose, les personnes décident.",
    "ai.text": "L’IA nous aide à lire les CV et les besoins et signale ce qu’une personne doit vérifier. Elle ne rejette jamais un profil, ne classe jamais les personnes automatiquement et n’analyse ni la voix, ni le visage, ni les émotions.",
    "rec.eyebrow": "Recruteurs",
    "rec.title": "Vous êtes recruteur ?",
    "rec.text": "Les recruteurs d’entreprise sont invités par l’entreprise pour laquelle ils travaillent. Les recruteurs freelances peuvent postuler pour rejoindre notre réseau : découvrez le rôle et envoyez votre candidature avec votre CV.",
    "rec.cta": "Devenir recruteur Verifika",
    "faq.eyebrow": "Questions fréquentes",
    "faq.title": "Ce que l’on nous demande souvent",
    "faq.q1": "Combien coûte Verifika Pro ?",
    "faq.a1": "Pour les professionnels, rien. Pour les entreprises, publier un besoin est sans engagement : vous payez quand une mission démarre (freelance) ou qu’une embauche est conclue (CDI), selon les conditions convenues pour chaque besoin.",
    "faq.q2": "Que vérifiez-vous exactement ?",
    "faq.a2": "Selon le niveau : un entretien structuré avec rapport critère par critère, une deuxième qualification par notre équipe (identité, échange, langues), puis la vérification des diplômes ou certifications à la source. Le niveau et la date du dernier contrôle sont affichés.",
    "faq.q3": "Pourquoi les profils sont-ils anonymisés ?",
    "faq.a3": "Pour protéger les professionnels et garantir un choix fondé sur les compétences. Le prénom est donné pour l’entretien, l’identité complète à la signature.",
    "faq.q4": "Je suis une agence ou un recruteur indépendant : puis-je utiliser Verifika Pro ?",
    "faq.a4": "Oui. Vous indiquez le client final de chaque besoin ; nous le gardons confidentiel et ne présentons un professionnel qu’une seule fois par client final.",
    "faq.q5": "Comment mes données sont-elles protégées ?",
    "faq.a5": "Connexion par codes à usage unique, accès limité selon le rôle, chaque action journalisée, données conservées pour une durée limitée. Vous pouvez télécharger vos données ou demander leur suppression à tout moment.",
    "cta.title": "Prêt à travailler avec des profils vérifiés ?",
    "cta.text": "Créez votre compte en deux minutes. Il est actif dès que vous confirmez votre adresse e-mail.",
    "foot.operator": "Verifika Pro est exploité par Nexa Consulting.",
    "foot.legal": "Mentions légales et confidentialité",
    "foot.contact": "Contact"
  };
  var EN = {};
  var nodes = document.querySelectorAll('[data-i18n]');
  Array.prototype.forEach.call(nodes, function (n) { EN[n.getAttribute('data-i18n')] = n.textContent; });
  var title = { en: document.title, fr: 'Verifika Pro – des professionnels vérifiés, présentés avec des preuves' };

  function saved() { try { return localStorage.getItem('vp_site_lang'); } catch (e) { return null; } }
  function save(l) { try { localStorage.setItem('vp_site_lang', l); } catch (e) { /* private mode */ } }
  function initial() {
    var q = /[?&]lang=(en|fr)\b/.exec(location.search);
    if (q) return q[1];
    var s = saved(); if (s === 'en' || s === 'fr') return s;
    return 'en'; // English by default (Gabriel, 16/11/2026); French on choice or with ?lang=fr
  }
  function apply(l) {
    var d = l === 'en' ? EN : FR;
    Array.prototype.forEach.call(nodes, function (n) { var k = n.getAttribute('data-i18n'); if (d[k]) n.textContent = d[k]; });
    document.documentElement.lang = l;
    document.title = title[l];
    Array.prototype.forEach.call(document.querySelectorAll('a[href^="app/"]'), function (a) {
      var h = a.getAttribute('href').replace(/([?&])lang=(en|fr)&?/, '$1').replace(/[?&]$/, '');
      a.setAttribute('href', h + (h.indexOf('?') >= 0 ? '&' : '?') + 'lang=' + l);
    });
    var sel = document.getElementById('lang'); if (sel) sel.value = l;
    Array.prototype.forEach.call(document.querySelectorAll('a[href^="legal"]'), function (x) { x.setAttribute('href', l === 'fr' ? 'legal-fr.html' : 'legal.html'); });
  }
  var sel = document.getElementById('lang');
  if (sel) sel.addEventListener('change', function () { save(sel.value); apply(sel.value); });
  apply(initial());
})();

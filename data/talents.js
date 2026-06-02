// Real participant data
const TALENTS = [
  {
    id: 'danil-zakharov',
    slug: 'danil-zakharov',
    fullName: 'Danil Zakharov',
    country: 'Russia',
    city: 'Moscow',
    photo: 'public/avatars/danil-zakharov.jpg',
    specialization: 'International Law',
    shortBio: 'International lawyer motivated to reform international law and build relations within the SCO, Belt and Road Initiative, and other international investment platforms.',
    education: [
      { institution: 'Russian State University of Justice', degree: 'Jurisprudence (5 years)' },
      { institution: 'Changchun University of Technology', degree: 'Chinese Language (1 year)' },
      { institution: 'Shanghai University of Political Science and Law', degree: "Master's Degree (2nd year) — International Law (in Chinese)" }
    ],
    additionalEducation: ['Graduate of the SCO "Shanghe Youth" professional development and personnel training program'],
    experience: [
      { org: 'International Development Company "G-Group"', role: 'Lawyer, Internal Audit Department', period: '2020 – 2022' },
      { org: 'Moscow Bar Association', role: 'Corporate Lawyer', period: '2022 – 2024' }
    ],
    programs: ['SCO "Shanghe Youth" Professional Development and Personnel Training Program'],
    skills: ['international law', 'corporate law', 'deal structuring', 'regulatory compliance', 'internal audit'],
    languages: ['Russian (native)', 'Chinese (proficient)', 'English (proficient)'],
    desiredRoles: ['International Lawyer', 'Legal Advisor', 'Legal Counsel'],
    projectInterest: 'I want to provide legal support for international investment projects. I can offer full legal assistance to any startup — from deal structuring to interaction with regulatory authorities within the jurisdictions of Russia, China, and SCO member states.',
    availability: 'Online — open to international SCO project teams',
    format: 'online'
  },
  {
    id: 'osajja-ali',
    slug: 'osajja-ali',
    fullName: 'Osajja Ali',
    country: 'Pakistan',
    city: "Xi'an",
    photo: 'public/avatars/osajja-ali.jpg',
    specialization: 'International Law & Chinese-International Business Law',
    shortBio: 'Advocate and LLM candidate at Xi\'an Jiaotong University (Chinese Government Scholarship). Shanghe Youth Advanced Trainee at CNISCO / Shanghai University of Political Science and Law, focusing on SCO legal cooperation and international dispute settlement.',
    education: [
      { institution: "Xi'an Jiaotong University, China", degree: 'Master of Laws in Chinese and International Business Law (LLM-CIBL), Sep 2024 – Jul 2026' },
      { institution: 'Government College University Faisalabad, Pakistan', degree: 'Bachelor of Laws (LL.B Hons), Oct 2018 – Aug 2023' }
    ],
    additionalEducation: [
      '"Shanghe Youth" High-Level Research Fellow Development (Advanced Trainee) Program — CNISCO / Shanghai University of Political Science and Law, Mar – Jul 2026'
    ],
    experience: [
      { org: "School of International Education, Xi'an Jiaotong University", role: 'Law Subject Tutor', period: 'Mar 2025 – Jun 2025' },
      { org: 'Zahid Asif Chaudhry Law Associates, Islamabad', role: 'Associate Lawyer', period: 'Sep 2023 – Aug 2024' },
      { org: 'Federal Tax Ombudsman Secretariat, Islamabad', role: 'Research Associate / Legal Intern', period: 'Mar – May 2024' },
      { org: 'IEUK 2024 — Bright Network UK', role: 'Legal Intern (Commercial Law)', period: 'Jul 2024' }
    ],
    programs: [
      '"Shanghe Youth" Advanced Trainee Program, CNISCO / SHUPL (2026)',
      'Frontier Issues of International Organizations — Fudan University (2025)',
      'High-Level Academic Forum on Foreign-Related Legal Talent, SHUPL & China–SCO Base (2025)'
    ],
    skills: ['international law', 'SCO legal cooperation', 'international dispute settlement', 'Belt & Road legal frameworks', 'foreign-related arbitration', 'legal research', 'drafting'],
    languages: ['Urdu (native)', 'Shina (native)', 'English (proficient)', 'Punjabi (proficient)', 'Chinese/Mandarin (learning)'],
    desiredRoles: ['International Lawyer', 'Legal Researcher', 'Legal Advisor', 'Dispute Resolution Specialist'],
    projectInterest: 'Looking to contribute to SCO legal cooperation projects, international investment law research, foreign-related arbitration, and multilateral legal frameworks. Interested in bridging South Asia and Central Asia within the SCO legal space.',
    awards: [
      'Chinese Government Scholarship — fully funded LLM at XJTU (2024–2026)',
      'Full Scholarship — "Shanghe Youth" Advanced Trainee Program, CNISCO (2026)',
      '1st Prize — 2nd International Students Resume Competition, XJTU (2026)',
      'Best Performance Award — Final Law Mock Trial, GCUF (2023)',
      'Gilgit-Baltistan Merit-Based Scholarship (2018)'
    ],
    memberships: ['Islamabad Bar Council, Pakistan (2024 – present)'],
    availability: 'Online — available for international SCO and BRI legal projects',
    format: 'online'
  },
  {
    id: 'samin-rahimi',
    slug: 'samin-rahimi',
    fullName: 'Samin Rahimi',
    country: 'Iran',
    city: 'Shanghai',
    photo: 'public/avatars/samin-rahimi.jpg',
    specialization: 'International Law & China–Iran Legal Cooperation',
    shortBio: "Master's student in International Law with a strong background in Chinese language, cross-border trade, and SCO cooperation. Experience in China–Iran business coordination and Chinese language instruction.",
    education: [
      { institution: 'University of Isfahan, Iran', degree: "Bachelor's Degree in Chinese Language and Culture" },
      { institution: 'SIAS University, Zhengzhou, Henan, China', degree: 'Advanced Chinese Language Program (1 year)' },
      { institution: 'Shanghai University of Political Science and Law', degree: "1st-year Master's Degree Program — International Law" }
    ],
    additionalEducation: ['Participant of the "Shanghe Youth" SCO Youth Professional Development and Talent Training Program'],
    experience: [
      { org: 'Import and Trade Company (Iran–China Business Cooperation)', role: 'Business Coordinator / China Affairs Coordinator', period: '1 year' },
      { org: 'Chinese Language School, Iran', role: 'Chinese Language Instructor', period: '2 years' }
    ],
    programs: ['"Shanghe Youth" SCO Youth Professional Development and Talent Training Program'],
    skills: ['international law', 'international trade', 'cross-border business coordination', 'legal research', 'Chinese language instruction', 'dispute resolution'],
    languages: ['Persian (native)', 'English (proficient)', 'Turkish (proficient)', 'Chinese (proficient)'],
    desiredRoles: ['Legal Researcher', 'International Trade Specialist', 'Translator / Legal Interpreter', 'Project Coordinator'],
    projectInterest: 'Interested in international investment and trade law, commercial arbitration and mediation, Belt and Road legal cooperation, and cultural/educational exchange between China, Iran, and SCO member states.',
    availability: 'Online — open to SCO and BRI legal research and cooperation projects',
    format: 'online'
  },
  {
    id: 'tatiana-solonkina',
    slug: 'tatiana-solonkina',
    fullName: 'Tatiana Solonkina',
    country: 'Russia',
    city: 'Shanghai',
    photo: 'public/avatars/tatiana-solonkina.jpg',
    specialization: 'Russia–China Business Law · Corporate Law · Cross-Border Transactions · International Commercial Arbitration',
    shortBio: 'Russia-qualified lawyer with 5 years of commercial legal practice, currently based in Shanghai. Specialises in Russia–China cross-border transactions, corporate law, and business insolvency. Drafts and negotiates contracts in Russian, English, and Chinese, with deep understanding of Chinese business culture, legal institutions, and the SCO regulatory framework.',
    education: [
      { institution: 'Siberian Federal University, Law Institute', degree: 'Bachelor of Law (LL.B.) — Comparative Jurisprudence (International & Foreign Law), Graduated 2021, Distinction' },
      { institution: 'Siberian Federal University, Law Institute', degree: 'Master of Law (LL.M.) — Corporate Law, Graduated 2023, Distinction' }
    ],
    additionalEducation: [
      'Professional Retraining — Legal Translator, English/Russian (1,500 hours)',
      'Professional Retraining — IT Project Management Specialist (256 hours)',
      'Advanced Bankruptcy Law Course — Lemchik, Krupsky & Partners / MGU',
      'ATOLES Legal English C1 (254/300)',
      'Chinese HSK 3'
    ],
    experience: [
      { org: 'PRODELAW Engineering LLC, Russia', role: 'Chief Legal Counsel (Head Lawyer)', period: 'September 2021 – Present' },
      { org: 'PRODELAW Engineering LLC, Russia', role: 'Lawyer', period: '2019 – 2021' },
      { org: 'SFU Legal Clinic, Siberian Federal University', role: 'Volunteer Legal Advisor', period: 'September 2019 – May 2021' }
    ],
    programs: ['SCO/SHUPL/CNISCO Research and Study Programmes (Shanghai)'],
    skills: ['Russia–China cross-border transactions', 'corporate law', 'contract drafting & negotiation', 'due diligence', 'business insolvency', 'international commercial arbitration', 'legal translation'],
    languages: ['Russian (native)', 'English (C1)', 'Chinese (HSK 3)'],
    desiredRoles: ['Legal Counsel', 'Cross-Border Transactions Specialist', 'Corporate Lawyer', 'Arbitration Specialist'],
    projectInterest: 'I want to provide legal support for Russia–China cross-border investment and trade projects. I can offer full legal assistance — from contract drafting and negotiation, corporate structuring, and due diligence to cross-border insolvency advisory and dispute resolution — within the jurisdictions of Russia, China, and SCO member states.',
    availability: 'Online — based in Shanghai, open to international SCO project teams',
    format: 'online'
  },
  {
    id: 'yang-jinrui',
    slug: 'yang-jinrui',
    fullName: 'Yang Jinrui',
    country: 'China',
    city: 'Lanzhou',
    photo: 'public/avatars/yang-jinrui.jpg',
    specialization: 'English Translation & Cross-Cultural Communication',
    shortBio: 'Motivated to build bridges between languages and cultures through high-quality translation and cross-cultural communication, promoting mutual understanding and cooperation within the SCO, the Belt and Road Initiative, and other international exchange platforms.',
    education: [
      { institution: 'Gansu University of Political Science and Law', degree: 'Literature (2 years)' },
      { institution: 'Lanzhou Petrochemical Polytechnic', degree: 'Business English (3 years)' }
    ],
    additionalEducation: ['Graduate of the SCO "Shanghe Youth" professional development and personnel training program'],
    experience: [
      { org: 'New East Education Company', role: 'Interpreter', period: '2023 – 2026' },
      { org: 'DQ', role: 'Part-time Seller', period: '2024 – 2026' }
    ],
    programs: ['SCO "Shanghe Youth" Professional Development and Personnel Training Program'],
    skills: ['English translation', 'interpretation', 'cross-cultural communication', 'business English', 'SCO cooperation'],
    languages: ['Chinese (native)', 'English (proficient)'],
    desiredRoles: ['Translator', 'Interpreter', 'Communications Coordinator', 'Cross-Cultural Liaison'],
    projectInterest: 'I would like to contribute to projects requiring translation, interpretation, and cross-cultural communication support within the SCO and BRI framework.',
    availability: 'Online — open to international SCO project teams',
    format: 'online'
  }
];

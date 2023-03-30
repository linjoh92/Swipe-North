const jobInfo = [
  {
    category: 'Administration',
    companyName: 'Wikan Personal Botnia AB',
    days: '6',
    id: '1',
    imgUrl: '/./jobImage/administration.png',
    jobTitle: 'Marketing Administrator for Skellefteå Kraft',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27330840',
    shortInfo:
      'Marketing Administrator position at Skellefteå Kraft.Marketing Administrator position at Skellefteå Kraft.',
    type: 'Heltid',
  },
  {
    category: 'Administration',
    companyName: 'Skellefteå kommun',
    days: '12',
    id: '2',
    imgUrl: '/./jobImage/teacher.png',
    jobTitle: 'Education Coordinator, Vocational College',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27306228',
    shortInfo: 'Experienced Education Coordinator for Vocational College.',
    type: 'Heltid',
  },
  {
    category: 'Administration',
    companyName: 'Ikett Personalpartner AB',
    days: '15',
    id: '3',
    imgUrl: '/./jobImage/tekniker.png',
    jobTitle: 'Service Technician, Electronics',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27285500',
    shortInfo: 'Experienced Electronics Service Technician.',
    type: 'Heltid',
  },
  {
    category: 'Administration',
    companyName: 'Praktiska Gymnasiet',
    days: '18',
    id: '4',
    imgUrl: '/./jobImage/teacher.png',
    jobTitle: 'High School Teacher - Vocational Subjects',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27278916',
    shortInfo: 'Experienced high school teacher in vocational subjects.',
    type: 'Heltid',
  },
  {
    category: 'Administration',
    companyName: 'Församling Expeditionen',
    days: '18',
    id: '5',
    imgUrl: '/./jobImage/parishhost.png',
    jobTitle: 'Parish Host',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27275819',
    shortInfo:
      "Parish Host with experience in property cleaning and a driver's license (B).",
    type: 'Heltid',
  },
  {
    category: 'Administration',
    companyName: 'Församling Expeditionen',
    days: '18',
    id: '6',
    imgUrl: '/./jobImage/parishhost.png',
    jobTitle: 'Parish Host',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27275819',
    shortInfo:
      'Parish Host with people care and property maintenance experience.',
    type: 'Heltid',
  },
  {
    category: 'Administration',
    companyName: 'Region Västerbotten, Intern service',
    days: '20',
    id: '7',
    imgUrl: '/./jobImage/sectionmanager.png',
    jobTitle: 'Section Manager for Internal Services, Skellefteå',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27264445',
    shortInfo:
      'Section Manager with experience for a temporary appointment in Internal Services.',
    type: 'Heltid',
  },
  {
    category: 'Administration',
    companyName: 'Skellefteå kommun, Individ- och familjeomsorg',
    days: '20',
    id: '8',
    imgUrl: '/./jobImage/unitmanager.png',
    jobTitle: 'Unit Manager for Individual and Family Care',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27261362',
    shortInfo: 'Unit Manager with experience in individual and family care.',
    type: 'Heltid',
  },
  {
    category: 'Data/it',
    companyName: 'ASSA ABLOY Industrial Sverige AB',
    days: '22',
    id: '9',
    imgUrl: '/./jobImage/ittechnician.png',
    jobTitle: 'Industrial Technician in Skellefteå',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27249075',
    shortInfo:
      'ASSA ABLOY is looking for an Industrial Technician in Skellefteå.',
    type: 'Heltid',
  },
  {
    category: 'Data/it',
    companyName: 'Minnovation international AB',
    days: '56',
    id: '10',
    imgUrl: '/./jobImage/ittechnician.png',
    jobTitle: 'IT-Technician',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27117962',
    shortInfo: 'It position at Minnovation',
    type: 'Heltid',
  },
  {
    category: 'Data/it',
    companyName: 'Skelleftea kommun',
    days: '11',
    id: '11',
    imgUrl: '/./jobImage/agileprojectmanager.png',
    jobTitle: 'Agile project manager',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27312792',
    shortInfo: 'Project management',
    type: 'Heltid',
  },
  {
    category: 'Data/it',
    companyName: 'WeSkill AB',
    days: '144',
    id: '12',
    imgUrl: '/./jobImage/systemdev.png',
    jobTitle: 'System Developer',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/26752777',
    shortInfo: 'WeSkill is looking for a senior c# developer',
    type: 'Heltid',
  },
  {
    category: 'Data/it',
    companyName: 'Veritaz',
    days: '14',
    id: '13',
    imgUrl: '/./jobImage/analysts.png',
    jobTitle: 'Requirements analyst',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27293234',
    shortInfo:
      'We are looking for a Requirement Analyst who is experienced in working with both agile development teams and in project organizations.',
    type: 'Heltid',
  },
  {
    category: 'Data/it',
    companyName: 'Northvolt',
    days: '28',
    id: '14',
    imgUrl: '/./jobImage/it-support-site-manager.png',
    jobTitle: 'IT Support Site Manager',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27181338',
    shortInfo:
      'We are looking for an experienced IT Support Site Manager to join us in our mission to contribute to a greener future.',
    type: 'Deltid',
  },
  {
    category: 'Data/it',
    companyName: 'Sogeti',
    days: '74',
    id: '15',
    imgUrl: '/./jobImage/systemdeveloper.png',
    jobTitle: 'System developer',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27017861',
    shortInfo:
      'We at Sogeti offer interesting and developing customer assignments in many different industries',
    type: 'Heltid',
  },
  {
    category: 'Data/it',
    companyName: 'Northvolt',
    days: '84',
    id: '16',
    imgUrl: '/./jobImage/master-data-specialist.png',
    jobTitle: 'Master Data Specialist',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/26978137',
    shortInfo:
      'At Northvolt you will be part of a fast growing company with high-energy and a dynamic environment.',
    type: 'Heltid',
  },
  {
    category: 'Data/it',
    companyName: 'WeSkill AB',
    days: '12',
    id: '17',
    imgUrl: '/./jobImage/c++-developer.png',
    jobTitle: 'C++ Developer',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27304270',
    shortInfo:
      'At Northvolt you will be part of a fast growing company with high-energy and a dynamic environment.',
    type: 'Heltid',
  },
  {
    category: 'Transport',
    companyName: 'Postnord',
    days: '7',
    id: '18',
    imgUrl: '/./jobImage/mailman.png',
    jobTitle: 'Mailman',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27323637',
    shortInfo:
      'As a mailman, you are the pulse of everything we do. We change with the world, but our social mission is the same today as yesterday.',
    type: 'Deltid',
  },
  {
    category: 'Transport',
    companyName: 'Postnord',
    days: '13',
    id: '19',
    imgUrl: '/./jobImage/truckdriver.png',
    jobTitle: 'Truckdriver',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27295965',
    shortInfo:
      'As a truckdriver, you are the pulse of everything we do. We change with the world, but our mission is the same today as yesterday.',
    type: 'Heltid',
  },
  {
    category: 'Transport',
    companyName: 'Konsultia',
    days: '13',
    id: '20',
    imgUrl: '/./jobImage/warehouse_worker.png',
    jobTitle: 'Warehouse worker',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27229892',
    shortInfo:
      'We are now looking for people for upcoming summer assignments at Svensk Cater in Skellefteå during the weeks 24-33.',
    type: 'Heltid',
  },
  {
    category: 'Transport',
    companyName: 'OnePartnerGroup Skellefteå AB',
    days: '35',
    id: '21',
    imgUrl: '/./jobImage/tyrefitter.png',
    jobTitle: 'Tyre fitter',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27201280',
    shortInfo:
      'We are now looking for a number of tire fitters for our customer Däckia Skellefteå.',
    type: 'Heltid',
  },
  {
    category: 'Transport',
    companyName: 'Connect Bus',
    days: '35',
    id: '22',
    imgUrl: '/./jobImage/bus_driver.png',
    jobTitle: 'Bus driver',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27258655',
    shortInfo:
      "Bus drivers in Skellefteå! Come and work at Connect Bus - One of the Nordics' leading bus companies - which is constantly growing. We want YOU to grow with us!",
    type: 'Heltid',
  },
  {
    category: 'Transport',
    companyName: 'Oskarsson & Nilsson Åkeri AB',
    days: '8',
    id: '23',
    imgUrl: '/./jobImage/milkman.png',
    jobTitle: 'Milk delivery man',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27305920',
    shortInfo:
      'We are looking for a driver for our milk trucks in Umeå. Transport of milk to Umeå and Burträsk Mejeri.',
    type: 'Heltid',
  },
  {
    category: 'Transport',
    companyName: 'StudentConsulting',
    days: '8',
    id: '24',
    imgUrl: '/./jobImage/terminal-worker.png',
    jobTitle: 'Terminal worker',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27325699',
    shortInfo:
      "Looking for an extra job? We are looking for terminal workers for one of Sweden's largest companies in Transport and distribution!",
    type: 'Heltid',
  },
  {
    category: 'Transport',
    companyName: 'Blomsterlandet',
    days: '13',
    id: '25',
    imgUrl: '/./jobImage/warehouse_worker.png',
    jobTitle: 'Ware house worker',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27299227',
    shortInfo:
      'Blomsterlandet in Skellefteå is looking for a warehouse worker with forklift experience. You should have a good physique and like working with the body.',
    type: 'Heltid',
  },
  {
    category: 'Transport',
    companyName: 'Blomsterlandet',
    days: '13',
    id: '26',
    imgUrl: '/./jobImage/warehouse_worker.png',
    jobTitle: 'Ware house worker',
    link: 'https://arbetsformedlingen.se/platsbanken/annonser/27299227',
    shortInfo:
      'Blomsterlandet in Skellefteå is looking for a warehouse worker with forklift experience. You should have a good physique and like working with the body.',
    type: 'Heltid',
  },
]

export default jobInfo

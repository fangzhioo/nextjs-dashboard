export type SponsorType = 'USER' | 'ORGANIZATION' | 'COLLECTIVE';
export type SponsorRole =
  | 'ADMIN'
  | 'BACKER'
  | 'CONTRIBUTOR'
  | 'HOST'
  | 'MEMBER'
  | 'FUNDRAISER';

export const SPONSOR_TIERS = {
  BACKER: 'Backer 🖤',
  BRONZE: 'Bronze Sponsor 🥉',
  SILVER: 'Silver Sponsor 🥈',
  GOLD: 'Gold Sponsor 🥇',
  PLATINUM: 'Platinum Sponsor ⭐️',
  HERO: 'Hero Sponsor 🎖',
};

export const SPONSOR_TIER_BY_AMOUNT = {
  [SPONSOR_TIERS.HERO]: 1000,
  [SPONSOR_TIERS.PLATINUM]: 500,
  [SPONSOR_TIERS.GOLD]: 100,
  [SPONSOR_TIERS.SILVER]: 30,
  [SPONSOR_TIERS.BRONZE]: 10,
  [SPONSOR_TIERS.BACKER]: 1,
};

export const SPONSOR_COLORS = {
  [SPONSOR_TIERS.BACKER]: 'default',
  [SPONSOR_TIERS.BRONZE]: 'default',
  [SPONSOR_TIERS.SILVER]: 'primary',
  [SPONSOR_TIERS.GOLD]: 'warning',
  [SPONSOR_TIERS.PLATINUM]: 'secondary',
  [SPONSOR_TIERS.HERO]: 'gradient',
};

export type SponsorTiers =
  | 'Backer 🖤'
  | 'Bronze Sponsor 🥉'
  | 'Silver Sponsor 🥈'
  | 'Gold Sponsor 🥇'
  | 'Platinum Sponsor ⭐️'
  | 'Hero Sponsor 🎖';

export type Sponsor = {
  MemberId: number;
  type: SponsorType;
  role: SponsorRole;
  isActive: boolean;
  totalAmountDonated: number;
  currency: string;
  lastTransactionAt: string;
  lastTransactionAmount: number;
  profile: string;
  name: string;
  tier?: SponsorTiers;
  company: string;
  description: string;
  image: string;
  email: string;
  twitter: string;
  github: string;
  website: string;
  createdAt: string;
};

export const mockData: Sponsor[] = [
  {
    MemberId: 101,
    type: 'USER',
    role: 'BACKER',
    isActive: true,
    totalAmountDonated: 5000,
    currency: 'USD',
    lastTransactionAt: '2023-04-29',
    lastTransactionAmount: 500,
    profile: '/profile/101',
    name: 'John Doe',
    tier: 'Gold Sponsor 🥇',
    company: '',
    description: 'A passionate open-source contributor.',
    image: 'https://i.pravatar.cc/250?img=1',
    email: 'john.doe@example.com',
    twitter: 'johndoe',
    github: 'johndoe',
    website: 'https://johndoe.com',
    createdAt: '2021-03-15',
  },
  {
    MemberId: 102,
    type: 'ORGANIZATION',
    role: 'BACKER',
    isActive: true,
    totalAmountDonated: 3000,
    currency: 'USD',
    lastTransactionAt: '2023-04-27',
    lastTransactionAmount: 300,
    profile: '/profile/102',
    name: 'Example Corp',
    tier: 'Silver Sponsor 🥈',
    company: 'Example Corp',
    description: 'We support open-source projects.',
    image: 'https://i.pravatar.cc/250?img=2',
    email: 'info@examplecorp.com',
    twitter: 'examplecorp',
    github: 'examplecorp',
    website: 'https://examplecorp.com',
    createdAt: '2020-06-01',
  },
  {
    MemberId: 103,
    type: 'USER',
    role: 'CONTRIBUTOR',
    isActive: false,
    totalAmountDonated: 1500,
    currency: 'EUR',
    lastTransactionAt: '2022-10-12',
    lastTransactionAmount: 100,
    profile: '/profile/103',
    name: 'Alice Smith',
    tier: 'Bronze Sponsor 🥉',
    company: '',
    description: 'Software engineer and open-source enthusiast.',
    image: 'https://i.pravatar.cc/250?img=3',
    email: 'alice.smith@example.com',
    twitter: 'alicesmith',
    github: 'alicesmith',
    website: 'https://alicesmith.com',
    createdAt: '2019-09-20',
  },
  {
    MemberId: 104,
    type: 'ORGANIZATION',
    role: 'HOST',
    isActive: true,
    totalAmountDonated: 10000,
    currency: 'USD',
    lastTransactionAt: '2023-05-01',
    lastTransactionAmount: 1000,
    profile: '/profile/104',
    name: 'Tech Solutions Inc.',
    tier: 'Platinum Sponsor ⭐️',
    company: 'Tech Solutions Inc.',
    description: 'Proudly sponsoring open-source projects.',
    image: 'https://i.pravatar.cc/250?img=4',
    email: 'contact@techsolutions.com',
    twitter: 'techsolutions',
    github: 'techsolutions',
    website: 'https://techsolutions.com',
    createdAt: '2018-05-10',
  },
  {
    MemberId: 105,
    type: 'USER',
    role: 'FUNDRAISER',
    isActive: true,
    totalAmountDonated: 2000,
    currency: 'USD',
    lastTransactionAt: '2023-04-30',
    lastTransactionAmount: 250,
    profile: '/profile/105',
    name: 'Bob Martin',
    tier: 'Silver Sponsor 🥈',
    company: '',
    description: 'Developer and open-source advocate.',
    image: 'https://i.pravatar.cc/250?img=5',
    email: 'bob.martin@example.com',
    twitter: 'bobmartin',
    github: 'bobmartin',
    website: 'https://bobmartin.com',
    createdAt: '2021-02-05',
  },
  {
    MemberId: 106,
    type: 'COLLECTIVE',
    role: 'MEMBER',
    isActive: true,
    totalAmountDonated: 800,
    currency: 'USD',
    lastTransactionAt: '2023-05-02',
    lastTransactionAmount: 50,
    profile: '/profile/106',
    name: 'Open Source Community',
    tier: 'Bronze Sponsor 🥉',
    company: '',
    description: 'A group of open-source enthusiasts.',
    image: 'https://i.pravatar.cc/250?img=6',
    email: 'opensourcecommunity@example.com',
    twitter: 'opensourcecommunity',
    github: 'opensourcecommunity',
    website: 'https://opensourcecommunity.org',
    createdAt: '2019-11-15',
  },
  {
    MemberId: 107,
    type: 'ORGANIZATION',
    role: 'ADMIN',
    isActive: true,
    totalAmountDonated: 15000,
    currency: 'USD',
    lastTransactionAt: '2023-05-01',
    lastTransactionAmount: 2000,
    profile: '/profile/107',
    name: 'Innovative Solutions',
    tier: 'Hero Sponsor 🎖',
    company: 'Innovative Solutions',
    description: 'We innovate for a better tomorrow.',
    image: 'https://i.pravatar.cc/250?img=7',
    email: 'info@innovativesolutions.com',
    twitter: 'innovativesolutions',
    github: 'innovativesolutions',
    website: 'https://innovativesolutions.com',
    createdAt: '2017-08-25',
  },
  {
    MemberId: 108,
    type: 'USER',
    role: 'CONTRIBUTOR',
    isActive: true,
    totalAmountDonated: 1200,
    currency: 'USD',
    lastTransactionAt: '2023-04-28',
    lastTransactionAmount: 100,
    profile: '/profile/108',
    name: 'Carol Johnson',
    tier: 'Bronze Sponsor 🥉',
    company: '',
    description: 'Full-stack developer and open-source contributor.',
    image: 'https://i.pravatar.cc/250?img=8',
    email: 'carol.johnson@example.com',
    twitter: 'caroljohnson',
    github: 'caroljohnson',
    website: 'https://caroljohnson.com',
    createdAt: '2020-01-01',
  },
  {
    MemberId: 109,
    type: 'COLLECTIVE',
    role: 'ADMIN',
    isActive: true,
    totalAmountDonated: 4500,
    currency: 'USD',
    lastTransactionAt: '2023-04-25',
    lastTransactionAmount: 500,
    profile: '/profile/109',
    name: 'The Code Initiative',
    tier: 'Gold Sponsor 🥇',
    company: '',
    description: 'Empowering developers through open-source collaboration.',
    image: 'https://i.pravatar.cc/250?img=9',
    email: 'thecodeinitiative@example.com',
    twitter: 'codeinitiative',
    github: 'codeinitiative',
    website: 'https://codeinitiative.org',
    createdAt: '2021-07-15',
  },
  {
    MemberId: 110,
    type: 'ORGANIZATION',
    role: 'BACKER',
    isActive: true,
    totalAmountDonated: 2400,
    currency: 'USD',
    lastTransactionAt: '2023-05-02',
    lastTransactionAmount: 200,
    profile: '/profile/110',
    name: 'Creative Minds Inc.',
    tier: 'Silver Sponsor 🥈',
    company: 'Creative Minds Inc.',
    description: 'Supporting creativity and innovation in technology.',
    image: 'https://i.pravatar.cc/250?img=10',
    email: 'contact@creativeminds.com',
    twitter: 'creativeminds',
    github: 'creativeminds',
    website: 'https://creativeminds.com',
    createdAt: '2016-03-12',
  },
];

export const getTier = (amount: number) => {
  return (
    Object.keys(SPONSOR_TIER_BY_AMOUNT).find(
      (tier) => amount >= SPONSOR_TIER_BY_AMOUNT[tier]
    ) ?? SPONSOR_TIERS.BACKER
  );
};

export const allSponsors: Sponsor[] = [
  {
    MemberId: 275354,
    createdAt: '2022-02-18 11:57',
    type: 'USER',
    role: 'BACKER',
    tier: 'Backer 🖤',
    isActive: true,
    totalAmountDonated: 5,
    currency: 'USD',
    lastTransactionAt: '2022-02-18 11:57',
    lastTransactionAmount: 5,
    profile: 'https://opencollective.com/guest-7dc076fb',
    name: 'jorge',
    company: '',
    description: '',
    image: '/avatars/avatar-1.webp',
    email:'',
    twitter: '',
    github: '',
    website: '',
  },
  {
    MemberId: 277819,
    createdAt: '2022-03-01 09:13',
    type: 'USER',
    role: 'BACKER',
    tier: 'Backer 🖤',
    isActive: true,
    totalAmountDonated: 10,
    currency: 'USD',
    lastTransactionAt: '2022-03-01 09:13',
    lastTransactionAmount: 10,
    profile: 'https://opencollective.com/dhananjay-senday',
    name: 'Dhananjay Senday',
    company: '',
    description: '',
    image: '/sponsors/undefined',
    email:'',
    twitter: '',
    github: '',
    website: '',
  },
  {
    MemberId: 292380,
    createdAt: '2022-04-22 07:47',
    type: 'USER',
    role: 'BACKER',
    tier: 'Backer 🖤',
    isActive: true,
    totalAmountDonated: 10,
    currency: 'USD',
    lastTransactionAt: '2022-04-22 07:47',
    lastTransactionAmount: 10,
    profile: 'https://opencollective.com/manuel5',
    name: 'manuel-rw',
    company: '',
    description: '',
    image: '/sponsors/292380.jpg',
    email:'',
    twitter: '',
    github: '',
    website: '',
  },
  {
    MemberId: 327844,
    createdAt: '2022-08-26 21:32',
    type: 'ORGANIZATION',
    role: 'BACKER',
    tier: 'Gold Sponsor 🥇',
    isActive: true,
    totalAmountDonated: 200,
    currency: 'USD',
    lastTransactionAt: '2022-12-22 07:19',
    lastTransactionAmount: 100,
    profile: 'https://opencollective.com/lowdefy',
    name: 'Lowdefy',
    company: '',
    description: 'Create custom web apps in minutes',
    image: '/sponsors/327844.jpg',
    twitter: 'https://twitter.com/lowdefy',
    github: 'https://github.com/lowdefy',
    website: 'https://lowdefy.com',
    email:'',
  },
  {
    MemberId: 347048,
    createdAt: '2022-10-30 06:25',
    type: 'USER',
    role: 'BACKER',
    tier: 'Backer 🖤',
    isActive: true,
    totalAmountDonated: 1,
    currency: 'USD',
    lastTransactionAt: '2022-10-30 06:25',
    lastTransactionAmount: 1,
    profile: 'https://opencollective.com/william-frank-monroy-mamani',
    name: 'William Frank Monroy Mamani',
    company: '',
    description: '',
    image: '/sponsors/347048.jpg',
    email:'',
    twitter: '',
    github: '',
    website: '',
  },
  {
    MemberId: 374896,
    createdAt: '2022-12-22 05:28',
    type: 'ORGANIZATION',
    role: 'BACKER',
    isActive: true,
    totalAmountDonated: 70,
    currency: 'USD',
    lastTransactionAt: '2023-07-02 09:04',
    lastTransactionAmount: 10,
    profile: 'https://opencollective.com/chartbrew',
    name: 'Chartbrew',
    company: '',
    description: 'Open source visualization and reporting platform',
    image: '/sponsors/374896.jpg',
    twitter: '',
    github: '',
    email: '',
    website: 'https://chartbrew.com',
  },
  {
    MemberId: 375034,
    createdAt: '2022-12-22 13:16',
    type: 'USER',
    role: 'BACKER',
    isActive: true,
    totalAmountDonated: 50,
    currency: 'USD',
    lastTransactionAt: '2022-12-22 13:16',
    lastTransactionAmount: 50,
    profile: 'https://opencollective.com/jan-wagebach',
    name: 'PRISMA European Capacity Platform GmbH',
    company: 'PRISMA European Capacity Platform GmbH',
    description: '',
    image: '/sponsors/375034.jpg',
    email:'',
    twitter: '',
    github: '',
    website: '',
  },
  {
    MemberId: 395990,
    createdAt: '2023-02-11 13:12',
    type: 'ORGANIZATION',
    role: 'BACKER',
    tier: 'Gold Sponsor 🥇',
    isActive: true,
    totalAmountDonated: 100,
    currency: 'USD',
    lastTransactionAt: '2023-02-11 13:12',
    lastTransactionAmount: 100,
    profile: 'https://opencollective.com/likn',
    name: 'LIKN',
    company: '',
    description:
      'LIKN is a powerful, but simple Web3 component and protocol. Connect Web2 content to Web3, and solely mint content NFTs by URL. Share and Trade in different platforms and marketplaces. OpenAI empowers LIKN which can automatically generate NFT metadata. ',
    image: '/sponsors/395990.jpg',
    twitter: 'https://twitter.com/oxlikn',
    github: 'https://github.com/0xLIKN',
    website: 'https://www.likn.co/?ref=opencollective',
    email:'',
  },
  {
    MemberId: 404415,
    createdAt: '2023-03-01 16:22',
    type: 'USER',
    role: 'BACKER',
    tier: 'Backer 🖤',
    isActive: true,
    totalAmountDonated: 1,
    currency: 'USD',
    lastTransactionAt: '2023-03-01 16:22',
    lastTransactionAmount: 1,
    profile: 'https://opencollective.com/rharison-lucas-moreira-abreu',
    name: 'Rharison Lucas Moreira Abreu',
    company: '',
    description: '',
    image: '/sponsors/404415.jpg',
    email:'',
    twitter: '',
    github: '',
    website: '',
  },
  {
    MemberId: 407510,
    createdAt: '2023-03-07 22:27',
    type: 'USER',
    role: 'BACKER',
    tier: 'Backer 🖤',
    isActive: true,
    totalAmountDonated: 1,
    currency: 'USD',
    lastTransactionAt: '2023-03-07 22:27',
    lastTransactionAmount: 1,
    profile: 'https://opencollective.com/higherror',
    name: 'HighError',
    company: '',
    description: '',
    image: '/sponsors/407510.jpg',
    email:'',
    twitter: '',
    github: 'https://github.com/HighError',
    website: 'https://higherror.github.io/',
  },
  {
    MemberId: 409558,
    createdAt: '2023-03-12 21:41',
    type: 'USER',
    role: 'BACKER',
    tier: 'Backer 🖤',
    isActive: true,
    totalAmountDonated: 1,
    currency: 'USD',
    lastTransactionAt: '2023-03-12 21:41',
    lastTransactionAmount: 1,
    profile: 'https://opencollective.com/guest-6133a45c',
    name: 'Kristof',
    company: '',
    description: '',
    image: '/sponsors/undefined',
    email:'',
    twitter: '',
    github: '',
    website: '',
  },
  {
    MemberId: 438158,
    createdAt: '2023-05-31 22:44',
    type: 'USER',
    role: 'BACKER',
    tier: 'Backer 🖤',
    isActive: true,
    totalAmountDonated: 5,
    currency: 'USD',
    lastTransactionAt: '2023-05-31 22:44',
    lastTransactionAmount: 5,
    profile: 'https://opencollective.com/elektrnik',
    name: 'ELEKTRNIK',
    company: '',
    description: '',
    image: '/sponsors/438158.jpg',
    email:'',
    twitter: '',
    github: '',
    website: '',
  },
  {
    MemberId: 438877,
    createdAt: '2023-06-02 17:56',
    type: 'USER',
    role: 'BACKER',
    tier: 'Backer 🖤',
    isActive: true,
    totalAmountDonated: 1,
    currency: 'USD',
    lastTransactionAt: '2023-06-02 17:56',
    lastTransactionAmount: 1,
    profile: 'https://opencollective.com/guest-425370ea',
    name: 'Gabriel Jiménez',
    company: '',
    description: '',
    image: '/sponsors/undefined',
    email:'',
    twitter: '',
    github: '',
    website: '',
  },
  {
    MemberId: 439182,
    createdAt: '2023-06-03 15:15',
    type: 'USER',
    role: 'BACKER',
    tier: 'Backer 🖤',
    isActive: true,
    totalAmountDonated: 1,
    currency: 'USD',
    lastTransactionAt: '2023-06-03 15:15',
    lastTransactionAmount: 1,
    profile: 'https://opencollective.com/jay-thanawut1',
    name: 'Jay Thanawut',
    company: '',
    description: '',
    image: '/sponsors/439182.jpg',
    email:'',
    twitter: '',
    github: '',
    website: '',
  },
  {
    MemberId: 442878,
    createdAt: '2023-06-13 13:51',
    type: 'USER',
    role: 'BACKER',
    tier: 'Backer 🖤',
    isActive: true,
    totalAmountDonated: 5,
    currency: 'USD',
    lastTransactionAt: '2023-06-13 13:51',
    lastTransactionAmount: 5,
    profile: 'https://opencollective.com/encurme',
    name: 'EncurMe',
    company: 'EncurMe',
    description: '',
    image: '/sponsors/442878.jpg',
    email:'',
    twitter: '',
    github: '',
    website: 'https://encur.me/',
  },
];

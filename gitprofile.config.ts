// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'DanTGL', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/Portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [
            'DanTGL/DynamicPortfolio',
            'DanTGL/Portfolio',
          ], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['DanTGL/MyOS'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      /*projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],*/
    },
  },
  seo: {
    title: 'Portfolio of Daniel Hajjar',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'daniel-hajjar',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'daniel.hajjar16@gmail.com',
  },
  resume: {
    //fileUrl:
    //  'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Rust',
    'Linux',
    'Zephyr',
    'C/C++',
    'OS Development',
    'x86',
    'Embedded',
    'Emulation',
    'RTOS',
    'FPGA',
    'Python',
    'Bash',
    'OpenGL',
    'WebGPU',
    'PHP',
    'WordPress',
    'JavaScript',
    'Node.js',
    'Docker',
    'Podman',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Ductus',
      position: 'Fullstack Developer',
      from: 'February 2023',
      to: 'May 2023',
      companyLink: 'https://ductus.global/',
    },
    {
      company: 'Digital Island AB',
      position: 'WordPress Developer',
      from: 'January 2022',
      to: 'June 2022',
      companyLink: 'https://digitalisland.se/',
    },
    {
      company: 'yDesign AB',
      position: 'Internship',
      from: 'March 2021',
      to: 'June 2021',
    }
  ],
  certifications: [
    {
      name: 'Zephyr Technical Contributor',
      body: 'The Linux Foundation',
      year: 'March 2025',
      link: 'https://www.credly.com/badges/a7f6e893-c9d0-4f9a-bfa7-b42b6c52b66c/linked_in_profile',
    },
    {
      name: 'Foundational C# with Microsoft',
      body: 'freeCodeCamp & Microsoft',
      year: 'October 2024',
      link: 'https://freecodecamp.org/certification/fcc6885be73-70d7-411a-a100-aae3fe7ea553/foundational-c-sharp-with-microsoft',
    },
    {
      name: 'Scientific Computing with Python',
      body: 'freeCodeCamp',
      year: 'October 2024',
      link: 'https://freecodecamp.org/certification/fcc6885be73-70d7-411a-a100-aae3fe7ea553/scientific-computing-with-python-v7',
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      body: 'freeCodeCamp',
      year: 'September 2024',
      link: 'https://freecodecamp.org/certification/fcc6885be73-70d7-411a-a100-aae3fe7ea553/javascript-algorithms-and-data-structures-v8',
    },
    {
      name: 'Introduction to Programming using Python (Credential-Id: wawBk-FaXo)',
      body: 'Microsoft Technology Associate',
      year: 'May 2021',
      link: 'https://verify.certiport.com/',
    },
    {
      name: 'Introduction to Programming using Java (Credential-Id: LMbX-sFcG)',
      body: 'Microsoft Technology Associate',
      year: 'May 2021',
      link: 'https://verify.certiport.com/',
    }
  ],
  educations: [
    {
      institution: 'NTI-Gymnasiet Uppsala',
      degree: 'Certified Upper Secondary School Engineer',
      from: '2020',
      to: '2021',
    },
    {
      institution: 'NTI-Gymnasiet Uppsala',
      degree: 'Information Technology',
      from: '2016',
      to: '2020',
    },
  ],
  publications: [
    /*{
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },*/
  ],
  // Display articles from your medium or dev account. (Optional)
  //blog: {
  //  source: 'dev', // medium | dev
  //  username: 'arifszn', // to hide blog section, keep it empty
  //  limit: 2, // How many articles to display. Max is 10.
  //},
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;

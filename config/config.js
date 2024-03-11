import profile from './profile.jpg';
import {
  faAppStore,
  faGithub,
  faGooglePlay,
} from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: 'Cole',
  links: [
    {
      title: 'About',
      link: '#about',
    },
    {
      title: 'Projects',
      link: '#projects',
    },
    {
      title: 'Contact',
      link: '#contact',
    },
    {
      title: 'Links',
      link: '/links',
    },
  ],
};
export const intro = {
  title: "Hey, I'm Cole",
  description: 'A historical musician turned software engineer.',
  image: profile.src,
  buttons: [
    {
      title: 'Contact Me',
      link: '#contact',
      isPrimary: true,
    },
    {
      title: 'Resume',
      link: 'https://docs.google.com/document/d/1Px9gE9wV1Ayt1MJCA8bb7gJsnYHY8xmKjyfpXJmSlew/edit?usp=sharing',
      isPrimary: false,
    },
  ],
};

export const about = {
  title: 'Who I am',
  description: [
    "I'm a versatile multi-instrumentalist with a diverse background spanning various musical genres and historical periods. I studied Historical Performance at the Peabody Institute of the Johns Hopkins University and the Schola Cantorum in Basel, Switzerland, specializing in both modern and historical plectrum instruments. My passion for collaboration extends beyond music, as I enthusiastically embrace the world of computer science.",
    "I kickstarted my career in software by attending App Academy's full-stack web development bootcamp which I graduated in February 2024",
    'When I’m not programming, I am playing in my ensemble Magdalena, experimenting with different coffee brewing methods, or playing games like Magic the Gathering',
  ],
};

// export const work = {
//   title: 'What I do',
//   cards: [
//     {
//       title: 'Web Development',
//       description: 'I create responsive static websites using Reactjs.',
//       icons: null,
//     },
//   ],
// };

export const projects = {
  title: 'Projects',
  cards: [
    {
      title: 'TrackShack',
      description:
        'A social media applicaiton that is designed to create an environment that allows musicians to post their current projects and seek collaboration with musicians of other musical persuasions.',
      icons: [
        {
          icon: faGithub,
          link: 'https://github.com/KooShnoo/track-shack/tree/main',
        },
      ],
    },
    {
      title: 'fspSpotify',
      description:
        'A React on Rails clone inspired by Spotify, featuring key functionalities such as playlist creation, a sleek audio player, and an intuitive user interface.',
      icons: [
        {
          icon: faGithub,
          link: 'https://github.com/csmanel/fspSpotify/tree/main',
        },
      ],
    },
    {
      title: 'Magdalena',
      description:
        'A React website for the Renaissance ensemble "Magdalena" featuring bios, upcoming concerts, and more. ',
      icons: [
        {
          icon: faGithub,
          link: 'https://github.com/csmanel/magdalena-ensemble',
        },
      ],
    },
  ],
};

export const contact = {
  title: 'Get in touch',
  description: `Whether its relating to well designed web apps, different fermentation processes for coffee, plectrum instruments from the 14th century, or some other niche topic, don't hesitate to reach out!`,
  buttons: [
    {
      title: 'Email Me',
      link: 'mailto:csmanel@gmail.com',
      isPrimary: true,
    },
  ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: 'Cole Manel | Computer Engineer ',
  image: profile.src,
};

export const links = {
  image: profile.src,
  title: '@colemanel',
  description: 'Computer Engineer | Historical Musician ',
  cards: [
    {
      title: 'My website',
      link: 'https://hashirshoaeb.com/',
    },
    {
      title: 'TrackShack',
      link: 'https://track-shack.netlify.app/',
    },
    {
      title: 'fspSpotify',
      link: 'https://fspspotify.onrender.com/',
    },
    {
      title: 'My GitHub',
      link: 'https://github.com/csmanel',
    },
    {
      title: 'My LinkedIn',
      link: 'https://www.linkedin.com/in/cole-manel-93029327a/',
    },
  ],
};

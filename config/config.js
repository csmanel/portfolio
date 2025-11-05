import profile from './profile.jpg';
import {
  faAppStore,
  faGithub,
  faGooglePlay,
  faLinkedin,
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
      title: 'Music',
      link: '#music',
    },
    {
      title: 'Contact',
      link: '#contact',
    },
  ],
};
export const intro = {
  title: "Howdy, I'm Cole",
  description: 'A software engineer and historical musician.',
  image: profile.src,
  buttons: [
    {
      title: 'Connect with Me',
      link: 'https://www.linkedin.com/in/cole-manel/',
      isPrimary: true,
    },
    {
      title: 'Contact Me',
      link: '#contact',
      isPrimary: true,
    },
    {
      title: 'Resume',
      link: 'https://docs.google.com/document/d/1AoB0djaQziBNBsO4R_IkUlle4_UDW20lhPqWZuJsl7k/edit?usp=sharing',
      isPrimary: false,
    },
  ],
};

export const about = {
  title: 'Who I am',
  description: [
    {
      text: "I'm a full stack developer and team leader specializing in UI-centered solutions, technical leadership, and community management. My creative problem solving approach is informed by my background in Historical Performance, which I studied at the Peabody Institute and Schola Cantorum Basiliensis.",
      link: null,
    },
    {
      text: "I transitioned into software engineering through App Academy in February 2024. Since then, I've worked as a Full Stack Developer and Community Manager at HexOS, and as Project Manager and Lead Developer at New Money.",
      link: null,
    },
    {
      text: "When I'm not coding, I perform with my Renaissance ensemble Magdalena, experiment with coffee brewing methods, and play Magic the Gathering.",
      link: null,
    },
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
      title: 'HexOS Documentation',
      description:
        'Official documentation site for HexOS, providing comprehensive guides, tutorials, and technical documentation for users.',
      link: 'https://docs.hexos.com/',
      icons: null,
    },
    {
      title: 'HexOS',
      description:
        'A modern operating system designed for home servers and self-hosting.',
      link: 'https://hexos.com/',
      icons: null,
    },
  ],
};

export const music = {
  title: 'Music',
  cards: [
    {
      title: 'fake title',
      description: 'this is a desc',
      youtubeId: 'k2yZsvPlSPQ?si',
    },
    {
      title: 'fake title',
      description: 'this is a desc',
      youtubeId: 'fKRXbR90Nf4?si',
    },
    {
      title: 'fake title',
      description: 'this is a desc',
      youtubeId: 'ozBfiW3m7T8?si',
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
    {
      title: 'Connect with Me',
      link: 'https://www.linkedin.com/in/cole-manel/',
      isPrimary: true,
    },
    {
      title: 'All my links',
      link: 'https://beacons.ai/colemanel',
      isPrimary: true,
    },
  ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: 'Cole Manel | Software Engineer ',
  image: profile.src,
};

export const links = {
  image: profile.src,
  title: '@colemanel',
  description: 'Software Engineer | Historical Musician ',
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

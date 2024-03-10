interface ISlide {
  digit: number;
  title: string;
  desc: string;
}

interface IWeb {
  title: string;
  desc: string;
  button: {
    href: string;
    titleBtn: string;
  };
}

export const slides: ISlide[] = [
  {
    digit: 1,
    title: '"Eloquent JavaScript" by Marijn Haverbeke',
    desc: "Это отличная книга для начинающих, которая покрывает JavaScript с основ до продвинутых тем.",
  },
  {
    digit: 2,
    title: '"You Don\'t Know JS" by Kyle Simpson',
    desc: "Серия книг дает глубокий взгляд на язык JavaScript, рассматривая его особенности и тонкости.",
  },
  {
    digit: 3,
    title: '"JavaScript: The Good Parts" by Douglas Crockford',
    desc: "Эта книга фокусируется на лучших практиках JavaScript и показывает, как использовать мощь языка.",
  },
  {
    digit: 4,
    title: '"React Up and Running" by Stoyan Stefanov',
    desc: "Для тех, кто хочет изучить React.  Введение в разработку с использованием библиотеки React.",
  },
  {
    digit: 5,
    title: '"Vue.js in Action" by Erik Hanchett and Benjamin Listwon',
    desc: "Если вас интересует Vue.js, эта книга предоставит вам подробное понимание этого фреймворка.",
  },
  {
    digit: 6,
    title: '"CSS Secrets" by Lea Verou',
    desc: "Эта книга рассматривает множество техник и секретов в стилизации с использованием CSS.",
  },
  {
    digit: 7,
    title: '"Designing with Web Standards" by Jeffrey Zeldman, Ethan Marcotte',
    desc: "Книга, посвященная принципам создания веб-страниц с использованием стандартов веб-разработки.",
  },
  {
    digit: 8,
    title: '"High-Performance Browser Networking" by Ilya Grigorik',
    desc: "Эта книга фокусируется на оптимизации сетевого взаимодействия в веб-приложениях.",
  },
  {
    digit: 9,
    title: '"JavaScript: The Definitive Guide" by David Flanagan',
    desc: "Классическое руководство, которое охватывает все аспекты языка JavaScript.",
  },
  {
    digit: 10,
    title:
      '"Clean Code: A Handbook of Agile Software Craftsmanship" by Robert C. Martin',
    desc: "Эта книга предоставляет ценные принципы и практики по написанию чистого кода.",
  },
  {
    digit: 11,
    title:
      '"Cracking the Coding Interview: 189 Programming Questions and Solutions" by Gayle Laakmann McDowell',
    desc: "Книга для подготовки к техническим собеседованиям.",
  },
];

export const webItems: IWeb[] = [
  {
    title: "MDN Web Docs (Mozilla Developer Network)",
    desc: "Предоставляет обширные и надежные ресурсы по веб-технологиям, включая HTML, CSS и JavaScript.",
    button: {
      href: "#",
      titleBtn: "MDN Web Docs →",
    },
  },
  {
    title: "Mozilla Developer Network (MDN) Learning Path",
    desc: "Предоставляет структурированный путь изучения веб-разработки.",
    button: {
      href: "#",
      titleBtn: "MDN →",
    },
  },
  {
    title: "JavaScript.info",
    desc: "Предоставляет подробные и понятные руководства по JavaScript.",
    button: {
      href: "#",
      titleBtn: "JavaScript.info →",
    },
  },
  {
    title: "CSS-Tricks",
    desc: "Является отличным ресурсом для изучения и обмена информацией о CSS.",
    button: {
      href: "#",
      titleBtn: "CSS-Tricks →",
    },
  },
  {
    title: "Coursera",
    desc: "Курсы от университетов и организаций по веб-разработке, включая Frontend.",
    button: {
      href: "#",
      titleBtn: "Coursera →",
    },
  },
  {
    title: "Udemy",
    desc: "Предоставляет широкий выбор курсов по веб-разработке, в том числе множество курсов по Frontend.",
    button: {
      href: "#",
      titleBtn: "Udemy →",
    },
  },
  {
    title: "freeCodeCamp",
    desc: "Предоставляет интерактивные курсы по веб-разработке, включая HTML, CSS, JavaScript, React и многое другое.",
    button: {
      href: "#",
      titleBtn: "freeCodeCamp →",
    },
  },
  {
    title: "W3Schools",
    desc: "Предлагает простые и понятные учебные материалы по HTML, CSS, JavaScript и другим веб-технологиям",
    button: {
      href: "#",
      titleBtn: "W3Schools →",
    },
  },
  {
    title: "Frontend Masters",
    desc: "Платформа для хостинга и совместной разработки кода. Множество открытых проектов и примеров кода доступны для изучения.",
    button: {
      href: "#",
      titleBtn: "Frontend Masters →",
    },
  },
  {
    title: "Codecademy",
    desc: "Предлагает интерактивные уроки по HTML, CSS, JavaScript и различным фреймворкам.",
    button: {
      href: "#",
      titleBtn: "Codecademy →",
    },
  },
  {
    title: "Smashing Magazine",
    desc: "Предоставляет статьи, руководства и ресурсы по веб-дизайну и Frontend-разработке.",
    button: {
      href: "#",
      titleBtn: "Smashing Mag →",
    },
  },
  {
    title: "GitHub",
    desc: "Платформа для хостинга и совместной разработки кода. Множество открытых проектов и примеров кода доступны для изучения.",
    button: {
      href: "#",
      titleBtn: "GitHub →",
    },
  },
];

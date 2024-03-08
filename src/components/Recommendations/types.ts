interface Slide {
  digit: number;
  title: string;
  desc: string;
}

export const slides: Slide[] = [
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
];

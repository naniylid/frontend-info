interface Route {
  to: string;
  title: string;
}

export const htmlButtons: Route[] = [
  { to: 'https://www.w3schools.com/', title: 'Теория →' },
  {
    to: 'https://www.youtube.com/watch?v=z3GS5oYGq5U&list=PLM6XATa8CAG4F9nAIYNS5oAiPotxwLFIr&index=4&ab_channel=%D0%A4%D1%80%D1%96%D0%BB%D0%B0%D0%BD%D1%81%D0%B5%D1%80%D0%BF%D0%BE%D0%B6%D0%B8%D1%82%D1%82%D1%8E',
    title: 'YouTube →',
  },
  { to: 'https://www.freecodecamp.org/', title: 'Практика 1 →' },
  { to: 'https://htmlacademy.ru/courses#fe-start', title: 'Практика 2 →' },
];

export const jsButtons: Route[] = [
  { to: 'https://learn.javascript.ru', title: 'Теория →' },
  { to: 'https://roadmap.sh/javascript', title: 'Roadmap →' },
  { to: 'https://www.youtube.com/@ivashov/featured', title: 'YouTube →' },
];

export const frameButtons: Route[] = [
  { to: 'https://react.dev/', title: 'Теория →' },
  { to: 'https://github.com/adam-golab/react-developer-roadmap', title: 'Roadmap →' },
  { to: 'https://www.youtube.com/@jherr/featured', title: 'YouTube →' },
  { to: 'https://www.youtube.com/@ArchakovBlog ', title: 'YouTube →' },
];

export const tsButtons: Route[] = [
  { to: 'https://roadmap.sh/typescript', title: 'Теория →' },
  { to: 'https://www.schoolsw3.com/typescript/exercise.php', title: 'Практика 1 →' },
];

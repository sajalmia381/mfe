const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

// const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
// const { join } = require('path');
// const sharedTailwindConfig = require('mfe-shell/TailwindPreset');

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   presets: [sharedTailwindConfig],
//   content: [
//     join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
//     ...createGlobPatternsForDependencies(__dirname),
//   ],
// };
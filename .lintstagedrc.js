const path = require('path');

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '*.{js}': [buildEslintCommand, 'prettier --write'],
  '*.{css,md,json}': ['prettier --write'],
};

const path = require("path");

const buildEslintCommand = filenames =>
  `eslint --max-warnings=0 ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(" ")}`;

const buildTypeCheckCommand = () => "npm run type-check";

module.exports = {
  "*.{js,jsx,ts,tsx}": buildEslintCommand,
  "*.{ts,tsx}": buildTypeCheckCommand
};

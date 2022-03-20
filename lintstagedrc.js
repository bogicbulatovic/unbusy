const path = require("path");

const buildEslintCommand = filenames =>
  `eslint --max-warnings=0 ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(" ")}`;

const buildTypeCheckCommand = () => "tsc --noEmit --incremental";

module.exports = {
  "*.{js,jsx,ts,tsx}": buildEslintCommand,
  "*.{ts,tsx}": buildTypeCheckCommand
};

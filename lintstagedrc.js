const path = require("path");
const { ESLint } = require("eslint");

const eslint = new ESLint();

const removeIgnoredFiles = async files => {
  const isIgnored = await global.Promise.all(
    files.map(file => {
      return eslint.isPathIgnored(file);
    })
  );
  const filteredFiles = files.filter((_, i) => !isIgnored[i]);

  return filteredFiles;
};

const buildEslintCommand = async filenames => {
  const filesToLint = await removeIgnoredFiles(filenames);

  return `eslint --max-warnings=0 ${filesToLint
    .map(f => path.relative(process.cwd(), f))
    .join(" ")}`;
};
const buildTypeCheckCommand = () => "tsc --noEmit --incremental";

module.exports = {
  "*.{js,jsx,ts,tsx}": buildEslintCommand,
  "*.{ts,tsx}": buildTypeCheckCommand
};

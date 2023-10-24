// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let tableOfContents = `## Table of Contents`;

  if (data.installation !== '') { tableOfContents += `
  * [Installation](#installation)` };

  if (data.usage !== '') { tableOfContents += `
  * [Usage](#usage)` };

  if (data.contributing !== '') { tableOfContents += `
  * [Contributing](#contributing)` };

  if (data.tests !== '') { tableOfContents += `
  * [Tests](#tests)` };

  if (data.license !== '') { tableOfContents += `
  * [License](#license)` };

  if (data.contact !== '') { tableOfContents += `
  * [Contact](#contact)` };


  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [License](#license)
6. [Contact](#Contact)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## License

${data.license}

## Contact:

${data.github}
${data.email}
`;
}

module.exports = generateMarkdown;

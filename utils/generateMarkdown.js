// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n   * [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
This project is under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# **${data.title}**

${renderLicenseBadge(data.license)}

# Description

${data.description}

# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

# Installation

The following necessary dependencies must be installed to run the application properly: ${data.installation}

# Usage

To meet the dependencies, use the following command:
\`\`\`
${data.usage}
\`\`\`

# License

This project is license under the ${data.license} license.
 
${renderLicenseLink(data.license)}

${renderLicenseSection(data.license)}

# Contributing

${data.contributing}

# Tests

To run tests, you need to run the following command:
\`\`\`
${data.test}
\`\`\`

# Questions

If you have any questions about the repo, open an issue or contact ${data.github} directly at ${data.email}.
`;
}
  
module.exports = generateMarkdown;

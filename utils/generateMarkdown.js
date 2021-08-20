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
  return `# ${data.title}
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
  The following necessary dependencies must be installed to run the application properly: ${data.Installation}
  # Usage
  ​This application is used for ${data.usage}
  # License
  This project is license under the ${data.license} license.
  # Contributing
  ​Contributors: ${data.contributing}
  # Tests
  To run tests, you need to run the following command: ${data.test}
  # Questions
  If you have any questions about the repo, open an issue or contact ${data.github} directly ${data.email}.
  `
}
  
module.exports = generateMarkdown;

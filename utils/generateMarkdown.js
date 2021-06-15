// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ""
  if (license === "MIT")
    badge = "[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  else if (license === "Apache License 2.0")
    badge = "[License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
  else if (license === "GNU GPLv3")
    badge = "[License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)"
  else if (license === "MPL License 2.0")
    badge = "[License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)"

  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = ""
  if (license === "MIT")
    link = "(https://opensource.org/licenses/MIT)"
  else if (license === "Apache License 2.0")
    link = "(https://opensource.org/licenses/Apache-2.0)"
  else if (license === "GNU GPLv3")
    link = "(http://www.gnu.org/licenses/gpl-3.0)"
  else if (license === "MPL License 2.0")
    link = "(https://opensource.org/licenses/MPL-2.0)"

  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badge = renderLicenseBadge(license)
  let link = renderLicenseLink(license)

  return "[!" + badge + "]" + link
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `!${renderLicenseBadge(data.license)}
  
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Usage](#usage) 
  - [Credits](#credits)   
  - [License](#license) 
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)

  ## Installation
  ${data.instructions}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseSection(data.license)}

  ## How to Contribute
  ${data.contribution}
  ![Contributor Covenant](https://www.contributor-covenant.org/)

  ## Tests
  ${data.test}

  ## Questions
  * For additional help or questions about collaboration, please reach out to ${data.email}
  
  * Follow me on Github at [${data.github}](http://github.com/${data.github})
`;
}

module.exports = generateMarkdown;

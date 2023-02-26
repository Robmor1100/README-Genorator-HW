// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-green#:~:text=License-,License,-MIT)`
  } else if (license === 'Apache') {
    return `![License: Apache](https://img.shields.io/badge/License-Apache-2.0-blue#:~:text=Apache%2D2.0-,Apache,-%2D2.0)`
  } else if (license === 'GNU GPL') {
    return `![License: GNU GPL](https://img.shields.io/badge/License-GPU%20GPL-yellow#:~:text=GPU%20GPL-,GPU,-GPL)`
  } else if (license === 'BSD') {
    return `![License: BSD](https://img.shields.io/badge/License-BSD-orange#:~:text=BSD-,BSD)`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/license/mit/`
  } else if (license === 'Apache') {
    return `https://opensource.org/license/apache-2-0/`
  } else if (license === 'GNU GPL') {
    return `https://opensource.org/license/gpl-3-0/`
  } else if (license === 'BSD') {
    return `https://opensource.org/license/bsd-2-clause/`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `This project is licensed under the MIT license.`
  } else if (license === 'Apache') {
    return `This project is licensed under the Apache 2.0 license.`
  } else if (license === 'GNU GPL') {
    return `This project is licensed under the GNU General Public License v3.0 license.`
  } else if (license === 'BSD') {
    return `This project is licensed under the BSD 2-Clause license.`
  } else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contribution
  ${data.contribution}
  
  ## License 
  ${renderLicenseSection(data.license)} For more information, please visit: ${renderLicenseLink(data.license)}
  
  ## Tests 
  ${data.test}
  
  ## Questions 
  If you have any questions, please email me at <a href="mailto: ${data.github}">${data.email}</a>.
  You can aslo find me and my work on GitHub at [${data.github}](https://github.com/${data.github}).`
}

module.exports = generateMarkdown;

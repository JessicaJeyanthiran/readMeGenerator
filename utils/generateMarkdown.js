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

  ## Description 
  ${data.description} 

  ## Table of Contents
  ${data.tableOfContents}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributing)
  * [Tests](#testing)
  * [Contact](#questions)(#username)(#email)
  
  ## Installation
  ${data.installation} 

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributing}

  ## Tests
  ${data.testing}

  ## Contact
  ${data.questions}
  ${data.username}
  ${data.email}

`;
}

module.exports = generateMarkdown;

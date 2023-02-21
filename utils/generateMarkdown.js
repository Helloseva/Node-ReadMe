// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Contributions](#contributions)
  * [Testing](#testing)
  * [Questions](#questions)
  

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Collabarators:
  ${data.credits}

  ## Contributions:
  ${data.contributions}

  ## Testing:
  ${data.testing}
  
  ## Questions:
   - Github: [${data.github}](https://github.com/${data.github})
   - Email: [${data.email}](mailto:user@example.com) `;
  }
  
  module.exports = generateMarkdown;
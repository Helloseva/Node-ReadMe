// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Collabarators](#collabarators)
  * [Contributing](#contributing)
  * [Tests](#testing)
  * [Questions](#questions)
  

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Collabarators:
  ${data.credits}

  ## Contributing:
  ${data.contributing}

  ## Tests:
  ${data.tests}
  
  ## Questions:
   - Github: [${data.github}](https://github.com/${data.github})
   - Email: [${data.email}](mailto:user@example.com) `;
  }
  
  module.exports = generateMarkdown;
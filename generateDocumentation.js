const fs = require('fs');

const apiRequests = JSON.parse(fs.readFileSync('apiRequests.json', 'utf8'));

let documentation = '# API Documentation\n\n';

apiRequests.forEach((request, index) => {
  documentation += `## API Request ${index + 1}\n\n`;
  documentation += `**URL:** \`${request.url}\`\n\n`;
  documentation += `**Method:** \`${request.method}\`\n\n`;
  documentation += `**Headers:**\n\`\`\`json\n${JSON.stringify(request.headers, null, 2)}\n\`\`\`\n\n`;
  if (request.postData) {
    documentation += `**Request Body:**\n\`\`\`json\n${request.postData}\n\`\`\`\n\n`;
  }
  documentation += `---\n\n`;
});

fs.writeFileSync('APIDocumentation.md', documentation);

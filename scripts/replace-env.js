const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'apps/frontend/src/environments/environment.ts');
const backendUrl = process.env.BACKEND_URL || '';

let content = fs.readFileSync(filePath, 'utf8');
content = content.replace('___BACKEND_URL___', backendUrl);
fs.writeFileSync(filePath, content);

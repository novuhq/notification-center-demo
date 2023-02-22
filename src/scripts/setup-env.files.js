const fs = require('fs');

const APP_ID = 'NEXT_PUBLIC_NOVU_APP_ID';
const API_KEY = 'NEXT_PUBLIC_NOVU_API_KEY';
const API_URL = 'NEXT_PUBLIC_API_URL';
const WS_URL = 'NEXT_PUBLIC_WS_URL';

if (!fs.existsSync('.env')) {
  // If .env file doesn't exist, create it by copying from .env.example
  fs.copyFileSync('.env.example', '.env');
}

// Read the contents of the .env file
const envFile = fs.readFileSync('.env', 'utf8');

// Get the current values of the environment variables
const envVars = envFile.split('\n').reduce((acc, line) => {
  const [key, value] = line.split('=');
  if (key) {
    acc[key] = value;
  }
  return acc;
}, {});

// Override existing environment variables or create new ones
const appId = process.argv[2];
const apiKey = process.argv[3];
const backendUrl = process.argv[4];
const socketUrl = process.argv[5];

if (appId) {
  envVars[APP_ID] = appId;
}

if (apiKey) {
  envVars[API_KEY] = apiKey;
}

if (backendUrl && socketUrl) {
  envVars[API_URL] = backendUrl;
  envVars[WS_URL] = socketUrl;
}

// Write the updated contents back to the .env file
fs.writeFileSync(
  '.env',
  Object.entries(envVars)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n')
);

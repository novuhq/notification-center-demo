const fs = require('fs');
const readline = require('readline');

if (!fs.existsSync('.env')) {
  // If .env file doesn't exist, create it by copying from .env.example
  fs.copyFileSync('.env.example', '.env');
}

// Ask for user input or use command line argument
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const appId = process.argv[2];

function updateEnvFile(appId) {
  // Read the contents of the .env file
  const envFile = fs.readFileSync('.env', 'utf8');

  const updatedEnvFile = envFile.replace(
    'NEXT_PUBLIC_NOVU_APP_ID=',
    `NEXT_PUBLIC_NOVU_APP_ID=${appId}`
  );

  // Write the updated contents back to the .env file
  fs.writeFileSync('.env', updatedEnvFile);
}

if (appId) {
  // If appId is passed as a command line argument, use it
  updateEnvFile(appId);
  rl.close();
} else {
  // If appId is not passed as a command line argument, prompt the user for input
  rl.question('Enter your application identifier: ', (appId) => {
    updateEnvFile(appId);
    rl.close();
  });
}

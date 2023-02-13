const fs = require('fs');
const readline = require('readline');

// Copy contents from .env.example to .env
fs.createReadStream('.env.example').pipe(fs.createWriteStream('.env'));

// Ask for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter your application identifier: ', (appId) => {
  // Read the contents of the .env file
  const envFile = fs.readFileSync('.env', 'utf8');

  const updatedEnvFile = envFile.replace(
    'NEXT_PUBLIC_NOVU_APP_ID=',
    `NEXT_PUBLIC_NOVU_APP_ID=${appId}`
  );

  // Write the updated contents back to the .env file
  fs.writeFileSync('.env', updatedEnvFile);
  rl.close();
});

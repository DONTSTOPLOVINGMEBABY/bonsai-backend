import loadEnvironment from './environment-variables';
('./environment-variables'); // load environment variables synchronously
import './server'; // starts server, also synchronous
import process from 'process';
import connectMongo from './mongodb';
import shutdownApplication from './shutdown';

async function main(): Promise<void> {
  try {
    loadEnvironment();
    await connectMongo();
  } catch (error) {
    console.error(error);
    shutdownApplication();
  }
}

process.on('SIGTERM', shutdownApplication);

main();

import Botkit from 'botkit';
import commands from './commands';

// Check for required Env Vars
if (!process.env.SLACK_TOKEN) {
  console.error('Specify SLACK_TOKEN in environment');
  process.exit(1);
}

// Configure and initialize botkit
const controller = Botkit.slackbot();
controller.spawn({
  token: process.env.SLACK_TOKEN
}).startRTM(function(err) {
  if (err) {
    throw new Error(err);
  }
});

// Setup webserver
controller.setupWebserver(80, () => {
  controller.createHomepageEndpoint(controller.webserver);
});

// Setting up listeners
controller.hears([/^hello$/, /^hi$/],
                 ['direct_mention', 'mention', 'direct_message'],
                 commands.hello);

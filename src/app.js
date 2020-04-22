require('dotenv').config();
const {Client} = require('discord.js');
const client = new Client();
const BOT_SECRET = process.env.BOT_SECRET;
const prefix = '-'

const git = require('./commands/git');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if(message.content.startsWith(`${prefix}git`)){
    git.execute(message);
  }
});

client.login(BOT_SECRET);
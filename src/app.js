require('dotenv').config();
const {Client} = require('discord.js');
const client = new Client();
const BOT_SECRET = process.env.BOT_SECRET;
const prefix = '!'

const git = require('./commands/git');
const gif = require('./commands/gifs');
const commands = require('./commands/commandsList');
const giveaway = require('./commands/giveaway');
const Queue = require('./commands/music');

const ServerQueue = new Queue();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
  if(message.content.startsWith(`${prefix}help`)){
    commands.execute(message);
  }
  if(message.content.startsWith(`${prefix}git`)){
    git.execute(message);
  }
  if(message.content.startsWith(`${prefix}gif`)){
    gif.execute(message);
  }
  if(message.content.startsWith(`${prefix}play`)){
    if (message.member.voice.channel) {
      await ServerQueue.initConnection(message);
      ServerQueue.play(message);
    }else{
      return message.reply('Voce deve entrar em um canal de voz primeiro !');
    }
  }
  if(message.content.startsWith(`${prefix}pause`)){
    ServerQueue.pause();
  }
  if(message.content.startsWith(`${prefix}giveaway`)){
    giveaway.execute(message);
  }
});

client.login(BOT_SECRET);

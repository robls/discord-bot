const ytdl = require('ytdl-core');

class Queue {
  constructor(){
    this.connection;
    this.queue = [];
    this.dispatcher;
    this.isPlaying = false;
  }

  async initConnection(message){
    this.connection = await message.member.voice.channel.join();
  }

  play(message) {
    const link = message.content.split(' ')[1];
    const songYtdl = ytdl(link, {
      filter: 'audioonly',
    });

    this.dispatcher = this.connection.play(songYtdl);

    ytdl.getInfo(link, (err, info) => {
      return message.channel.send(`Tocando ${info.title}`);
    });
  }

  pause() {
    this.dispatcher.pause();
  }
}

module.exports = Queue;

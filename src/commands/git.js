const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
  async execute(message){
    const username = message.content.split(' ')[1];
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);

      const {
        login,
        name,
        bio,
        html_url,
        avatar_url,
        followers,
        following,
        public_repos
      } = response.data;

      const returnEmbed = new MessageEmbed()
        .setColor('#bd93f9')
        .setTitle(login)
        .setURL(html_url)
        .setDescription(bio)
        .setThumbnail(avatar_url)
        .addFields(
          {name: "Nome:", value: name},
          {name: "Repositorios Publicos", value: public_repos, inline: true},
          {name: 'Seguidores', value: followers, inline: true},
          {name: 'Seguindo', value: following, inline: true},
        )
        .setTimestamp()
        return message.channel.send(returnEmbed);
      }catch(err){
        return message.reply(`Nao encontrei ninguem no GitHub com esse nome. (${username})`);
      }
    }
  }

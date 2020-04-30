module.exports = {
  async execute(message){
    const [ , winnersAmount] = message.content.split(' ');

    const members = await message.guild.members.fetch();
    const users = [];

    members.map(member => {
      const { id } = member.user;
      !member.user.bot && users.push(id);
    });

    if(users.length < parseInt(winnersAmount)){
      return message
        .channel
        .send('O numero de vencedores e maior que o de membros do grupo.');
    }

    if(!winnersAmount || winnersAmount === 1) {
      const winnerIndex = Math.floor(Math.random() * (users.length - 0));

      return message.channel.send(`O vencedor é <@${users[winnerIndex]}>`);
    }else {
      let winnersIndexes = [];

      while(winnersIndexes.length < parseInt(winnersAmount)){
        const winnerIndex = Math.floor(Math.random() * (users.length - 0));

        if(!winnersIndexes.includes(winnerIndex)){
          winnersIndexes = [...winnersIndexes, winnerIndex];
        }
      }

      let winners = [];

      winnersIndexes.forEach( winnerIndex => {
        winners = [...winners,  `<@${users[winnerIndex]}>`]
      })

      return message.channel.send(`${winners.join(' ')}`);
    }
  }
}

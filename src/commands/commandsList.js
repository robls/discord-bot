module.exports = {
  execute(message) {
   return  message.channel.send({
      embed: {
        color: "#ff9000",
        title: "Comandos Disponiveis",
        fields: [
          {
            name: "!help",
            value: "Lista comandos do bot"
          },
          {
            name: "!gif",
            value: "Busca gif com palavre chave"
          },
          {
            name: "!git",
            value: "Busca usuario no GitHub e retorna um cardzinho massa"
          },
          {
            name: "!giveaway <numero opcional>",
            value: "Sorteio de membro(s) do canal"
          },
        ]
      },
   });
  },
};

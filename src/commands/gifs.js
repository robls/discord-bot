const axios = require('axios');
const GIF_SECRET = process.env.GIF_SECRET;

module.exports = {
  async execute(message){
    const keyword = message.content
      .split(' ')
      .slice(1)
      .join(' ')
      .toString();

    const params = {
      api_key: GIF_SECRET,
      q: keyword,
      limit: 1
    }
    try {
      const response = await axios.get('https://api.giphy.com/v1/gifs/search', {params});
      const { url } = response.data.data[0];
      return message.channel.send(url);
    } catch (error) {
      return message.channel.send(error);
    }
  }
}

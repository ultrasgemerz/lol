


module.exports = {
  name: 'ping',
  aliases: ["p"],
  async execute(message) {
    let msg = await message.channel.send('Pinging...');
    msg.edit(`Ping Kamu: ${Math.floor(msg.createdTimestamp - message.createdTimestamp)} ms`);
  }
}
const Discord = require("discord.js");
const Config = require("config.json");

const Prefix = Config.prefix;

const client = new Discord.Client();

client.on("ready", () => {
  console.log("Bot is running correctly :D");
  /**
  * There are several types of Activities, the common one is PLAYING but you can use all of the following:
  * - PLAYING
  * - LISTENING
  * - STREAMING
  */
  client.user.setActivity("I am Bot :D", {
    type: "PLAYING"
  });
});

/**
* Verificators:
* -------------
* || = Or
* && = And
* -------------
*/

client.on("message", message => {

  if (message.content.toLowerCase("hello") || message.content.toLowerCase("hi")) {
    message.channel.send("Hello :D");
    return;
  }

  if (!message.content.startsWith(Prefix)) return;
  const args = message.content.slice(Prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  switch (command) {
    case "help":
      message.channel.send("My Commands :D");
      message.channel.send("- !say");
      message.channel.send("- !help");
      message.channel.send("- !embed");
      break;
    case "say":
      if (!args[1]) {
        message.channel.send("Usage: !say <text>");
        return;
      }
      message.channel.send(args.join(" "));
      break;
    case "embed":
      const EMBED = new Discord.MessageEmbed()
      .setTitle("This is Title :D")
      .setDescription("I am a Bot uwu")
      .setFooter("Code Author: JonyGamesYT9 :D")
      .setColor("RANDOM");
      message.channel.send(EMBED);
      break;
  }
});
client.login(Config.token);
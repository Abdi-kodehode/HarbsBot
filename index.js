const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;
const { loadEvents } = require("./Handlers/eventLoader");
const { connect } = require("mongoose");

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
});

client.config = require("./config.json");
client.commands = new Collection();
client.subCommands = new Collection();
client.events = new Collection();
client.color = 0xffa600;

connect(client.config.DatabaseURL, {}).then(() =>
  console.log("The Client is now connected to database.")
);
loadEvents(client);

client.login(client.config.DISCORD_TOKEN);

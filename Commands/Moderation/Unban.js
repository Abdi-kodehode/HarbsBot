const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("unban")
        .setDescription("Unban a member from the discord server.")
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .addStringOption(option =>
            option.setName("userid")
                .setDescription("Discord ID of the user you want to unban.")
                .setRequired(true)
        ),

    async execute(interaction) {
        const { channel, options } = interaction;

        const userId = options.getString("userid");

        try {
            await interaction.guild.members.unban(userId);

            const embed = new EmbedBuilder()
            .setAuthor({
                name: `Unban Time`,
                iconURL: guild.iconURL(),
              })
              .setColor(client.color)
              .setThumbnail(
                "https://media.discordapp.net/attachments/1059607121194393671/1059923413650640987/295678623038211.png?width=285&height=296"
              )
              .setDescription(
                [
                  `Unbanned User: ${target}`,
                  `Generous Staff Member: ${member}`,
                  `\nReason: ${reason}`,
                ].join("\n")
              )
              .setFooter({
                iconURL: guild.iconURL(),
                text: `Server Bot | ${interaction.user.username}`,
              });
              
            await interaction.reply({
                embeds: [embed],
            });
        } catch (err) {
            console.log(err);

            const errEmbed = new EmbedBuilder()
                .setDescription(`Please provide a valid member's ID.`)
                .setColor(0xc72c3b);

            interaction.reply({ embeds: [errEmbed], ephemeral: true });
        }
    }
}
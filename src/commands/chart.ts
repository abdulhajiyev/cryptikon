import { CommandInteraction } from "discord.js";
import { SlashCommandBuilder, EmbedBuilder } from "@discordjs/builders";
import { ssChart } from "../functions/ssChart";

const intervalMap = {
  "1": "1 Min",
  "3": "3 Min",
  "5": "5 Min",
  "15": "15 Min",
  "30": "30 Min",
  "45": "45 Min",
  "60": "1 Hour",
  "120": "2 Hour",
  "180": "3 Hour",
  "240": "4 Hour",
  "D": "1 Day",
  "W": "1 Week",
  "M": "1 Month"
};

export const data = new SlashCommandBuilder()
  .setName("chart")
  .setDescription("Show chart for a pair and interval")
  .addStringOption((option) =>
    option.setName("pair")
      .setDescription("The pair to chart")
      .setRequired(true)
      .setRequired(true))

  .addStringOption((option) =>
    option.setName("interval")
      .setDescription("The interval to chart")
      .setRequired(true)
      .setChoices(
        { name: "1 Min", value: "1" },
        { name: "3 Min", value: "3" },
        { name: "5 Min", value: "5" },
        { name: "15 Min", value: "15" },
        { name: "30 Min", value: "30" },
        { name: "45 Min", value: "45" },
        { name: "1 Hour", value: "60" },
        { name: "2 Hour", value: "120" },
        { name: "3 Hour", value: "180" },
        { name: "4 Hour", value: "240" },
        { name: "1 Day", value: "D" },
        { name: "1 Week", value: "W" },
        { name: "1 Month", value: "M" }
      )
  );


export async function execute(interaction: CommandInteraction) {
  
  const pair = interaction.options.get("pair");
  const interval = interaction.options.get("interval");

  const url = await ssChart(pair?.value, interval?.value);

  console.log(pair?.value, interval?.value);

  const embed = new EmbedBuilder()
    .setTitle("Chart Information")
    // .setImage(image)
    .addFields(
      { name: "Symbol", value: `${pair?.value}`, inline: true },
      { name: "Interval", value: `${intervalMap[interval?.value as string]}`, inline: true }
    )
    .setTimestamp();
    // .setURL(url);

  await interaction.reply({ embeds: [embed] });
}

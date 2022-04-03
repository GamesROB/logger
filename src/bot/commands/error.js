module.exports = {
  func: async (message, suffix) => {
    if (parseInt(suffix) && suffix > 9007199254740000 && suffix < 99999999999999999999n) {
      message.channel.createMessage(`https://discord.com/channels/345259986303057930/590955038684479538/${suffix}`);
    }
    else {
      message.channel.createMessage("That's not a real error number, liar.");
    }
  },
  name: 'error',
  description: 'Returns a quick link to an error for the developers',
  quickHelp: 'Returns a quick link to an error for the developers',
  examples: `\`${process.env.GLOBAL_BOT_PREFIX}error 123456789123456789\` <- Returns a link to the error with ID 123456789123456789`,
  type: 'staff',
  hidden: true
}

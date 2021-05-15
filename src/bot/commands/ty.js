module.exports = {
  func: async (message, suffix) => {
    message.channel.createMessage("Thanks for the feedback! We have added this to our to-do list on Trello." + 
    "\nIt will be fixed or added in a future update.")
  },
  name: 'ty',
  description: 'Thanks the person for suggesting/reporting something.',
  quickHelp: 'Thanks the person for suggesting/reporting something.',
  examples: `\`${process.env.GLOBAL_BOT_PREFIX}ty\` <- Responds with a message thanking someone for their report/suggestion.`,
  type: 'staff',
  hidden: true
}
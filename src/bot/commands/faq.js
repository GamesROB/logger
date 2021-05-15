module.exports = {
  func: async (message, suffix) => {
    if (parseInt(suffix) && suffix > 1 && suffix < 999) {
      message.channel.createMessage(`Check out <#839180193003733032> \#${suffix}!` + 
      "\nIn the future, read through the titles of our FAQ before asking for help.");
    }
    else {
      message.channel.createMessage(`Check out <#839180193003733032>!` + 
      "\nIn the future, read through the titles of our FAQ before asking for help.");
    }
  },
  name: 'faq',
  description: 'Tells someone to check the faq',
  quickHelp: 'Tells someone to check the faq',
  examples: `\`${process.env.GLOBAL_BOT_PREFIX}faq 1\` <- Tells someone to check faq #1`,
  type: 'staff',
  hidden: true
}
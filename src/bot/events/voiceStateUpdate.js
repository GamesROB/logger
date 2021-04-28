const send = require('../modules/webhooksender')

module.exports = {
  name: 'voiceStateUpdate',
  type: 'on',
  handle: async (member, oldState) => {
    const state = member.voiceState
    const channel = member.guild.channels.get(state.channelID)
    if (!state.channelID || oldState.channelID) return
    if ((state.selfDeaf !== oldState.selfDeaf) || (state.selfMute !== oldState.selfMute)) return
    if (global.bot.guildSettingsCache[member.guild.id].isChannelIgnored(state.channelID)) return
    const voiceStateUpdateEvent = {
      guildID: member.guild.id,
      eventName: 'voiceStateUpdate',
      embed: {
        author: {
          name: `${member.username}#${member.discriminator} ${member.nick ? `(${member.nick})` : ''}`,
          icon_url: member.avatarURL
        },
        description: `**${member.username}#${member.discriminator}** ${member.nick ? `(${member.nick})` : ''} had their voice state updated.`,
        fields: [{
          name: 'Voice Channel',
          value: `<#${channel.id}> (${channel.name})`
        }, {
          name: 'ID',
          value: `\`\`\`ini\nUser = ${member.id}\nChannel = ${channel.id}\n`
        }],
        color: 3553599
      }
    }
    // if (member.guild.voiceStates.size < 20) {
    const logs = await member.guild.getAuditLogs(5, null, 24).catch(() => {})
    if (!logs) return
    const log = logs.entries.find(e => e.targetID === member.id)
    if (!log || Date.now() - ((log.id / 4194304) + 1420070400000) > 3000) return // if the most recent log is too far away, stop
    const user = log.user
    const actionName = Object.keys(log.before)[0]
    if (!actionName) return
    voiceStateUpdateEvent.embed.fields.unshift({
      name: 'Action',
      value: `${log.before[actionName] ? 'un' : 'now '}${actionName}` || 'Unknown'
    })
    voiceStateUpdateEvent.embed.fields[voiceStateUpdateEvent.embed.fields.length - 1].value += `Perpetrator = ${user.id}\`\`\``
    voiceStateUpdateEvent.embed.footer = {
      text: `${user.username}#${user.discriminator}`,
      icon_url: user.avatarURL
    }
    await send(voiceStateUpdateEvent)
    // } else {
    //   const toPushField = {
    //     name: 'Action',
    //     value: ''
    //   }
    //   if (oldState.mute && !state.mute) toPushField.value += 'unmuted'
    //   else if (!oldState.mute && state.mute) toPushField.value += 'muted'
    //   else if (oldState.deaf && !state.deaf) toPushField.value += 'undeafened'
    //   else if (!oldState.deaf && state.deaf) toPushField.value += 'deafened'
    //   if (toPushField.value) {
    //     voiceStateUpdateEvent.embed.fields.unshift(toPushField)
    //     voiceStateUpdateEvent.embed.fields[voiceStateUpdateEvent.embed.fields.length - 1].value += '```'
    //     send(voiceStateUpdateEvent)
    //   }
    // }
  }
}

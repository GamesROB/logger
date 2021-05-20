This is a version of [curtisf](https://github.com/curtisf)'s [open source bot](https://github.com/curtisf/logger) called [Logger](https://top.gg/bot/298822483060981760) modified by [the GamesROB Team](https://github.com/orgs/GamesROB/people) and potentially some [community members](https://github.com/gamesrob/supportbot/graphs/contributors) in the future.

# Running the bot
It's relatively simple and straightforward, but as this isn't our main project don't expect support if something's weird and you're using our fork. If you want or need support and you aren't just going to toy around with it in a test server, you should probably just self-host the project this is based on, [Logger](https://github.com/curtisf/logger). If you want to have a self-hosted logging bot for privacy reasons like we do, the upstream project this is based on works completely fine. The majority of our changes are 'cosmetic' in the sense that we're changing words, branding, etc. anyways. James Bond even has has a self hosting guide in [Logger's Lounge](https://discord.gg/ed7Gaa3), [Logger](https://discord.bots.gg/bots/298822483060981760)'s Support Server.

## Installation

You are mostly on your own selfhosting this version. Required applications:
- [PostgreSQL 11](https://www.postgresql.org/download)
- [Redis](https://redis.io/download)
- [NodeJS 14+ (14.5.0)](https://nodejs.org)

1. Setup Postgres and add a superuser (default user works)
2. [Clone](https://github.com/GamesROB/supportbot.git) this repo for the bot and enter the created folder
3. Copy .env.example into .env
4. Fill out **all** fields in the config file (even Sentry unless you want to hotpatch it out, or you can wait until we add a feature toggle)
5. Run `npm install` to install dependencies and such with NPM
6. Run `node src/miscellaneous/generateDB.js` to populate your database with the schema the bot expects 
7. Run `node index.js` to start the bot for the first time (no this doens't change the second time, run.sh is an example script to start and auto-restart the bot if it dies.)


## Contributing
Pull requests are welcome as long as you agree to and consider these guidelines:
- Your idea should make sense in the context of GamesROB's Support Server (if it's scalable and makes sense more broadly for the Logger bot, [check out Logger's contribution section](https://github.com/curtisf/logger#contributing) and we'll pull from upstream).
- Your idea has a chance of being dismissed without a reason by GamesROB Staff if we internally don't think it makes sense.
- In the off chance that we were to remake this from scratch we reserve the right to make the remake closed source even if some funcionality to this public version was contributed by you (as it would effectively be a brand new project in and of itself plus chances are if you really were able to contribute something revolutationary you'd probably just make your own bot or be working directly off the upstream logger project).

If you have done all of the above then open a pull request and we'll review it whenever we get around to it.

## TO DO
- Work out exactly which permissions the bot needs from postgres to work, just giving it superuser isn't a great solution.
- Add more links to the readme :)
- Add config options to disable various features of the bot globally
- Add language support

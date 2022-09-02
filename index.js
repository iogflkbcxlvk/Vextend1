const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async() =>{
    console.log(`${bot.user.username} Elindult!`)

    let státuszok = [
        "VextendNetwork",   
        "Eskü nem vagyok robot!😋",
    ]


    setInterval(function(){
        let status = státuszok[Math.floor(Math.random()* státuszok.length)]

        bot.user.setActivity(status, {type:"PLAYING"})
    }, 3000)
})

bot.on("guildMemberAdd", (member) =>{
    const rulesChannel = "1015298495458062417"
    const channelID = "1015304437922795540"

    const message = `Szia! <@${member.id}>! Olvasd el a szabályzatot!😀 ${member.guild.channels.cache.get(rulesChannel).toString}`

    const channel = member.guild.channels.cache.get(channelID);
    channel.send(message)
})

bot.login(process.env.BOT_TOKEN);

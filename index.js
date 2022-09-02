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

bot.login(process.env.BOT_TOKEN);

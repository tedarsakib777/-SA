module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.imghippo.com/files/lJ8376Tkc.jpg"];
var callback = () => api.sendMessage({body:`     ⊰᯽⊱┈──╌❊╌──┈⊰᯽⊱
۞ 𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡 𝗜𝗡𝗙𝗢 ۞
◎ ══════ ❈ ══════ ◎
╭─╮ 
  🔥 
╰─╯𝗡𝗔𝗠𝗘 👉𝗦𝗔𝗞𝗜𝗕 𝗠𝗔𝗛𝗠𝗨𝗗
╭─╮ 
  🔥 
╰─╯𝗔𝗗𝗗𝗥𝗘𝗦𝗦👉𝗦𝗬𝗛𝗟𝗘𝗧 
╭─╮ 
  🔥 
╰─╯𝗪𝗛𝗔𝗧𝗦,𝗔𝗣𝗣👉𝟎𝟏𝟑𝟏𝟎𝟕𝟔𝟐𝟓𝟗𝟓
╭─╮ 
  🔥 
╰─╯𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡👉𝗦𝗜𝗡𝗚𝗘𝗟

   BOT OWNER FB ID
[ANY HELP CONTACT FB]

 ➷➷➷➷➷➷➷➷➷➷➷➷➷➷

https://www.facebook.com/SAKIB.MAHMUD.V1

⊰᯽⊱┈──╌❊╌──┈⊰᯽ 
🌸Bot Prefix🌸☞︎︎︎☜︎︎︎✰ ${global.config.PREFIX}
✅Thanks for using ${global.config.BOTNAME} Bot🖤

┏•━•━•━ ◎ ━•━•━•┓
 ❂ 𝗕𝗢𝗧  𝗢𝗪𝗡𝗘𝗥 ❂
┗•━•━•━ ◎ ━•━•━•┛
╭────────────╮
✜ 𝗦𝗔𝗞𝗜𝗕 𝗠𝗔𝗛𝗠𝗨𝗗 ✜
╰────────────╯`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };

 module.exports.config = {
	name: "help2",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "Beginner's Guide",
	commandCategory: "system",
	usages: "[Tên module]",
	cooldowns: 1,
	envConfig: {
		autoUnsend: true,
		delayUnsend: 300
	}
};

module.exports.languages = {
	
	"en": {
		"moduleInfo": "「 %1 」\n%2\n\n❯ Usage: %3\n❯ Category: %4\n❯ Waiting time: %5 seconds(s)\n❯ Permission: %6\n\n» Module code by %7 «",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
};

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;

	if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports. run = function({ api, event, args, getText }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	if (!command) {
		const arrayInfo = [];
		const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 9999;
    //*số thứ tự 1 2 3.....cú pháp ${++i}*//
    let i = 0;
    let msg = "";
    
    for (var [name, value] of (commands)) {
      name += ``;
      arrayInfo.push(name);
    }

    arrayInfo.sort((a, b) => a.data - b.data);
    
    const startSlice = numberOfOnePage*page - numberOfOnePage;
    i = startSlice;
    const returnArray = arrayInfo.slice(startSlice, startSlice + numberOfOnePage);
    
    for (let item of returnArray) msg += `「 ${++i} 」${prefix}${item}\n`;
    
    
    const siu = `\n•─────✧─────•\n      「 𝗣𝗔𝗚𝗘 」   \n◃───────────▹\n\n       (${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)})\n
যেকোনো কমান্ড পেতে 👉 "${prefix} চিন্হ টি লিখুন তার পর {command name} \n\nবর্তমানে ${arrayInfo.length}  কমান্ড চালু আছে\n\n
𝙱𝙾𝚃 𝙽À𝙼𝙴 :${global.config.BOTNAME} \n\n┏•━•━•━ ◎ ━•━•━•┓\n   𝗡𝗔𝗠𝗘 𝗢𝗪𝗡𝗘𝗥\n┗•━•━•━ ◎ ━•━•━•┛ \n\nBOT PREFIX: ${prefix}\n\n╭───────────────╮\n🔥    𝗦𝗔𝗞𝗜𝗕 𝗠𝗔𝗛𝗠𝗨𝗗   🔥\n╰───────────────╯\n\n[ANY HELP CONTACT FB]\n  https://www.facebook.com/T.R.S.SAKIB.01
\n╭──────────╮\n✜     𝐌𝐈𝐍𝐃 𝐈𝐓     ✜\n╰──────────╯ \n𝗜𝗧'𝗦 𝗝𝗨𝗦𝗧 𝗡𝗢𝗧 𝗔 𝗡𝗔𝗠𝗘 𝗜𝗧'𝗦 𝗔 𝗕𝗥𝗔𝗡𝗗       《𝗧.𝗥.𝗦》`;
    
 const text = `\nPage (${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)})`;
 
    return api.sendMessage(siu + "\n\n" + msg  + text, threadID, async (error, info) => {
			if (autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, delayUnsend * 1000));
				return api.unsendMessage(info.messageID);
			} else return;
		}, event.messageID);
	}

	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
};

//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://imgur.com/a/9etcJPe";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0huT1hOQUZwQndlSFFJdnZuMDVvR0NPaHE2Qzh0VEhxTUhYUkliZE8zaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVlRK2w0SFVVY1ZOTnR6b1BoRFEvT0xCTVNDd21pUFBNcmVHTDJLQjd5Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRFkvc2hNSG5ydWE3ZWlJZUYrTmZDWktqNWNQM0tYQmhYbUlpSFZjQTNnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJMzN2U01MQjhnbTkxdWFEdk9zdTRxb0p4eTZxSzJuMWxFSURwUVR4d2pZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdITFFRNnJTRTJaU1prWmFLNTI1MjBOZ29VVHNkamNldEs0c1NhTmNNbDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndsbWJDSllpaDN6WHlPcVF3Y2hNb2xWKzFxS2RjaTRpaFk4VjlBZjQwRk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0NNNnhRUWNxZnZMUHpyUEdhYUlGWTkzNjZNNktrQThPMTJlM1d6dW9WST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGNEOXl5TGZFV0w4K2N3Wk1oZUxMbmZLV2tHeGFnM1ZlS05Sb01iL2Z3VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndmNWI1dFpCSGlqVVBGVHpsbUxFRVYvU2pTZ002K2FtY0NqQ09WUzByQlRyUXZmb2F0aXV1M2hIU1JrWVZrdVJZVk9xYWtwWEdTTUtQYUt0TU5PbmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJLekI4M1RKTEdkMzRnZ29GZHVpamVhdkEwT1hIQlQ3NEF5K09LSVZTUzhVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc4Nzk2NjYwMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDNDg4N0YzQkQwNDJCMTY3REJCNTFGRDk3RUI5NTVBRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3NDMyMzAyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3ODc5NjY2MDBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUVFMEREREQ4QzBFMjM4MzgyQjNCMTk1NEQ5Q0Y5NzAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzQzMjMwMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiLTcyekFVODlTZnU4X20zYTIwZVkwZyIsInBob25lSWQiOiI5ZDhiZTI5Ni0zNmVjLTQ3ZTgtYmE4My0xNjEyMWU5ZWFiNzIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSE5BSmlEaThoUXhlUzlqU1dnWlFxUk9qUE9zPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVRUmptUkJoTVM0d0F3a3o5emdWS2xGYk5KRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJIQkwzNVFFNSIsIm1lIjp7ImlkIjoiMjYzNzg3OTY2NjAwOjM5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlRpbmFzaGUg8J+UpSDwn5SlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJcnRzNHdERU4yTTJyY0dHQW9nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOeks3VjZ3YjN0NzNLSEtESTdyQzJwQzNsZS9QRFZDa0Y2WHdnY0g0SWxRPSIsImFjY291bnRTaWduYXR1cmUiOiI2Z2xVZVY3c0VvRTdjcjlENW9mTGk0NzduRzJhMFliTW82S3k0RHgyRjc2eDB2aC9pRkNTMEpyVjlDWnhudkg3VFoxbnA1Y3BSRkJWOWZLZURybm5Cdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUkNFWWE1K2RSNUUxN2JhTU1kSUtSKzl6MzZscDZJUHZYU2VrK01SaW1sNVkxT3RSZDZRQkpnWVJtZmFWRkx5VWpTQVNkYk1RTE9LTUVmQnVYT3Q4amc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3ODc5NjY2MDA6MzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGN5dTFlc0c5N2U5eWh5Z3lPNnd0cVF0NVh2encxUXBCZWw4SUhCK0NKVSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzQzMjI5OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKY3oifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

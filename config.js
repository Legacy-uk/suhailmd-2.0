const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349153143112";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_25_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgODIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDUzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTExLFxuICAgICAgICA1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDkyLFxuICAgICAgICA2MCxcbiAgICAgICAgODcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMixcbiAgICAgICAgNjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNixcbiAgICAgICAgNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDUwLFxuICAgICAgICA5MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgODksXG4gICAgICAgIDQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODksXG4gICAgICAgIDgxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDc5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NixcbiAgICAgICAgODAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDc3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0LFxuICAgICAgICAyLFxuICAgICAgICA4MixcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODAsXG4gICAgICAgIDg5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDYxLFxuICAgICAgICA2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIwLFxuICAgICAgICA0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMXptaWt2bUczWEd5Qng2VHoycTBVNFAvTlZGZDNXUkd6N2U1VWZkdkdjcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTUzMTQzMTEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxNDQxRjA5MjYyMjdEQzdERjE1NzVDRTRFMkZFRjI5QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM4MzM0OThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTUzMTQzMTEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyQkVCMzlDMjAyNjk3NTJDQjk5QzhBODA4OTgwMkE1QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM4MzM0OThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNDBEZWYtdXVSS2FOQUt2d0JvRThud1wiLFxuICBcInBob25lSWRcIjogXCI2M2RiOTFjMS1mYjM2LTQxM2UtOGZmZi0wYmFhZTU2ODIwMDZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA0LFxuICAgICAgNjAsXG4gICAgICAxNjksXG4gICAgICAyMzYsXG4gICAgICAyNDIsXG4gICAgICAxMjIsXG4gICAgICAxNjUsXG4gICAgICAxMTIsXG4gICAgICAyOSxcbiAgICAgIDE0MCxcbiAgICAgIDE3LFxuICAgICAgMTE5LFxuICAgICAgMTE1LFxuICAgICAgMjMyLFxuICAgICAgMjEyLFxuICAgICAgMTc2LFxuICAgICAgMTE4LFxuICAgICAgODgsXG4gICAgICAxMDYsXG4gICAgICA3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAxNzYsXG4gICAgICAxOTMsXG4gICAgICAxNzIsXG4gICAgICAxNDgsXG4gICAgICAxNTcsXG4gICAgICAyMjUsXG4gICAgICAxMyxcbiAgICAgIDIyNyxcbiAgICAgIDAsXG4gICAgICAyMzIsXG4gICAgICAyMzUsXG4gICAgICAyMTcsXG4gICAgICAyMjQsXG4gICAgICAyMTEsXG4gICAgICA3MSxcbiAgICAgIDE4MyxcbiAgICAgIDcxLFxuICAgICAgMjAxLFxuICAgICAgNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR0VFQ0xNRzlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTMxNDMxMTI6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk11aGFtbWFkXCIsXG4gICAgXCJsaWRcIjogXCIxMjIzMDQxMjYyNzk3NDM6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOZVp2cnNFRUpUbTRMb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhkRHdqTTBubWtZU1AvUGlqTGRQMWUxQW5tQ0pnNkx1TTdxekE4TWI5RnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieFJuZ3BCeDFqa282bjM2eXVScHFjVWFmZ3F4YmdGN1F2cFlyRE9qRHNVemFpSUVHSGczSVhFV24vU2trWWU0M1dFcWJRdXpUVTQ0QXBRL1F5akl4RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUTBjczZOY1hNaGJWNitOMVFGT2FHMitXVUxSUjBodUIvOXVDb3NoalRLMzlIYmRnZDNBaUlqSkYyQ0VJNHJDYWxoNElqdjRNQ084MElhRVdTUHpjZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1MzE0MzExMjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzODMzNDk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkVTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFORVMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoTCszS0srVHlTam80SFh2YmV5bmpUYW1zMmtUbmpDd2ZTeG1ZVmdvSFFRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExOTg0OTI4ODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzgzMzQ5NzQyOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

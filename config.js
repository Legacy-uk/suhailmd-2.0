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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348132749272";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_44_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExLFxuICAgICAgICA3NixcbiAgICAgICAgNjksXG4gICAgICAgIDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDk5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDU4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMwLFxuICAgICAgICAyLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgODIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDI0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDM3LFxuICAgICAgICAzMixcbiAgICAgICAgMTgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDksXG4gICAgICAgIDE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDUwLFxuICAgICAgICA2MSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQzLFxuICAgICAgICA1MixcbiAgICAgICAgODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkxLFxuICAgICAgICAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMyxcbiAgICAgICAgMixcbiAgICAgICAgMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDMxLFxuICAgICAgICAxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0LFxuICAgICAgICAyNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjksXG4gICAgICAgIDUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxLFxuICAgICAgICA5NixcbiAgICAgICAgMTg5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NixcbiAgICAgICAgNjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAwLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhc2pyRXVybXh0dU5LSUdSYWZneE9TZDF4T0N4MUFub21vNDFZVGNHZno0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrMWRpcXJBM1RDdTZ2bkQ2Y2VISm5BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIxNDU2M2I5LWZkOGEtNGJmMS05Y2Y5LTNmMzEwYzI0YzI5ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzEsXG4gICAgICAxNTksXG4gICAgICA0NSxcbiAgICAgIDE2MyxcbiAgICAgIDI1LFxuICAgICAgMjIxLFxuICAgICAgMjUxLFxuICAgICAgMTU1LFxuICAgICAgMTM3LFxuICAgICAgNTcsXG4gICAgICAxMzksXG4gICAgICAyMjYsXG4gICAgICA3OSxcbiAgICAgIDQ3LFxuICAgICAgNTAsXG4gICAgICAzMyxcbiAgICAgIDE0NixcbiAgICAgIDk0LFxuICAgICAgMTMsXG4gICAgICA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNyxcbiAgICAgIDgwLFxuICAgICAgMTQ1LFxuICAgICAgMTk0LFxuICAgICAgMTk5LFxuICAgICAgMTgsXG4gICAgICAxODcsXG4gICAgICAyNDUsXG4gICAgICA5MyxcbiAgICAgIDIxNixcbiAgICAgIDg4LFxuICAgICAgMjM1LFxuICAgICAgOTMsXG4gICAgICAxMDAsXG4gICAgICA5LFxuICAgICAgMzYsXG4gICAgICAxODEsXG4gICAgICAxMjIsXG4gICAgICA0MyxcbiAgICAgIDE3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1TEEyOEZRUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzMjc0OTI3MjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA1NTkxODk3MTkwNDYxOjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ltS2hMWURFS09MNGJvR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicW9qdVB3TVVBT3AwQVFqOFN2QWlhN2RIb1UvZE8xRGJid3lDL0s0Ri8xMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzNmprdXhFS1lVUkJQUkJ2S1hxM0IvazdCYTJVTytiY29qMDFNQVc2M1FFdy8rV1pPTWw0WGhtWWZtUmtUVDN6QlhwK2FEWC96bjZlY1JTR3JieWxEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwRXcxaDRkUDlPcVNPSFNrM0NqU3hQeVVDUGU4b3YwRmFYNEI4QU5NaVVrWDNKV3RnZ0l2SkJTeHRPcjFPN2JSdnR1V2FjaWNtWWZ4c2tqOFJHRXRnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTMyNzQ5MjcyOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzgzODI0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZyV1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnJXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSEVWZG96SW9mMkQ5ZUZaMDhtajVwUkI0NVU4Y2lXcldZTm5ldWVkUVlRUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MTg2MTkzOTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI5ODg0ODQyMjlcIn0iCn0="  // PUT your SESSION_ID 


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

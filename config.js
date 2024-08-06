const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348169644468";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_12_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjksXG4gICAgICAgIDUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDg3LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MixcbiAgICAgICAgMixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NixcbiAgICAgICAgODIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyLFxuICAgICAgICAzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMixcbiAgICAgICAgNzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNyxcbiAgICAgICAgNixcbiAgICAgICAgMTYwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODgsXG4gICAgICAgIDg4LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDc0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDUxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkyLFxuICAgICAgICA0LFxuICAgICAgICAzNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU4LFxuICAgICAgICA0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTksXG4gICAgICAgIDI4LFxuICAgICAgICA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkQzBJY2dYd1ZweVhKeHZSdVNpbTh6OUk4TTdvRFZMQk9Jc0hzZTM5bTNJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5dDFFMXcyUFFWT0RkUndZZGEtcTNRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjcwNjNiOTNiLWVhYTctNGJkZS1hZjk3LTJhYjE2OTA2NmVhNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzcsXG4gICAgICA0NyxcbiAgICAgIDEwNSxcbiAgICAgIDEwNixcbiAgICAgIDIyLFxuICAgICAgMjExLFxuICAgICAgMTM5LFxuICAgICAgNzgsXG4gICAgICAyOSxcbiAgICAgIDEyLFxuICAgICAgMjE0LFxuICAgICAgMTcyLFxuICAgICAgNTksXG4gICAgICAxODcsXG4gICAgICAyNDIsXG4gICAgICA4OSxcbiAgICAgIDI0NyxcbiAgICAgIDI1MixcbiAgICAgIDM3LFxuICAgICAgMjU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NyxcbiAgICAgIDIxMCxcbiAgICAgIDI1MyxcbiAgICAgIDIxMixcbiAgICAgIDE3OCxcbiAgICAgIDI1NCxcbiAgICAgIDE2LFxuICAgICAgOTUsXG4gICAgICAyNTIsXG4gICAgICA2OSxcbiAgICAgIDE3MCxcbiAgICAgIDYxLFxuICAgICAgMjIwLFxuICAgICAgMjE0LFxuICAgICAgMjQ1LFxuICAgICAgMjM5LFxuICAgICAgMTcxLFxuICAgICAgMjMxLFxuICAgICAgMTk3LFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1ER1lLU1lKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY5NjQ0NDY4OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJXSVNET00gRU5URVJQUklTRVNcIixcbiAgICBcImxpZFwiOiBcIjE4MzQ4NTcxNzMxOTcwNjozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09qOXByVUZFTU8veXJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiK29XN2F4Uy8vQ0lBL29qYjg5bDE0OGx3akpIQ3FsaVZUV3J1MGFUV1dVZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqcVRjeDBGMGdkRXZKaVdiQ0RNWHh5L0xzdlJTQzN2bnNkUWtOMFViVHNnUTZoK2FqZ1JPZFhIN1huSENjODlzeE9jbzNFRjJmWU1GQVdwa1VaUHlDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtQmN6eDViNmRZQ045MGYyRnpSUmFXTjhUMDJzVXhBSUNUL1NPbmhDYW9ZTW91dUdYckhuVWRtcUNTOGE4SlNvV1lsMG9WczJaNHppakZ2VEVqNVVEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY5NjQ0NDY4OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyOTgyMzQzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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

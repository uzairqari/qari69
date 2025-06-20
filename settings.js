const barkece = global;
//---=====================[ INFO BOT & OWNER ]===================---//
barkece.ownername = "barmodss Official"
barkece.ownernumber = "6282396674917"
barkece.botname = "Fc - Invis v5.0"
barkece.botnumber = "6285299327811"

//---=====================[ PENGATURAN ]===================---//
barkece.session = "session"
global.wm = "ʙᴀʀᴍᴏᴅꜱꜱ-ᴏꜰꜰɪᴄɪᴀʟ x ᴛᴇᴀᴍ"
global.website = "https://my-hosting-barmodss.vercel.app"
global.version = "v5.0"
//---===================================//
global.image = {
thumb: "https://files.catbox.moe/kjtej8.jpg",
Reply: "https://files.catbox.moe/kjtej8.jpg"
}
//---==============[ Pengaturan ]===============---//
global.onlyown = { 
owner: "\`[ # ]\` *Fitur Ini Hanya Dapat Diakses Oleh Owner Bot*",
ownandbug: "\`[ # ]\` *Fitur Ini Hanya Dapat Diakses Oleh Owner Bot & Murbug*",
text: "\`[ # ] Format Salah:\` *Contoh:*"
}
//---===================================//
// untuk menantau perubahan file 
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})

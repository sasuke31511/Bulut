const Discord = require('discord.js');
const client = new Discord.Client();
const hafiza = new Set();
var sayi = 0;

function mesajgonder() {
  guild = client.guilds.random()
  kullanici = guild.members.random()
  var zaman = Math.floor(Math.random() * 350000);
  if (kullanici.user.bot) {
    setTimeout(mesajgonder, 180000);
    return;
  } else if (kullanici.user.id == client.user.id) {
    setTimeout(mesajgonder, 180000);
    return;
  } else if (kullanici.user.id == guild.owner.id) {
    setTimeout(mesajgonder, 180000);
    return;
  } else if (hafiza.has(kullanici.id)) {
    setTimeout(mesajgonder, 180000);
    return;
  } else {
    kullanici.send(`Rahatsız Etdiysem Çok Özür Dilerim.Fake Kız Hesabı Açıp Reklam Yapsaydım Gelirdiniz Ama Ben Samimiyetimden Dolayı Kendi Hesabımla Reklam Yapıyorum.Rica Etsem Beni Kırmayıp Gelir Misin? https://discord.gg/5gfsEfH`);
    sayi++
    console.log(`${guild.name} Sunucusundan ${kullanici.user.tag} Üyesine Mesaj Gönderildi: ` + sayi + `/${client.users.size} | Süre: ` + zaman/1000);
    hafiza.add(kullanici.id);
	setTimeout(mesajgonder, zaman);
  }
}

client.on('ready', () => {
  client.user.setStatus('idle')
  mesajgonder()
});

client.on('message', message => {
  if (message.content === 'ünkoy') {
    message.reply('ali');
  }
});

client.login(process.env.BOT_TOKEN);
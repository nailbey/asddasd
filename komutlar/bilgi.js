onst Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('NAİL-DURAN' + ayarlar.surum + ' \n_**TÜM KOMUTLAR:**_\n_**gh!çal =müzik çalarsınız.**_\n**gh!woodie           :: namı değer ağaç kimdir?**\n**gh!ara155           :: Polisi Arar (ciddiye almayın)**\n**gh!aşçı             :: Yazınızı ascii art Olarak Yazar.**\n**gh!atatürk          :: atatürk**\n**gh!avatar           :: Avatarınızı gösterir**\n**gh!bilgi            :: Bot ile ilgili bilgi verir.**\n**gh!davet-kur        :: Bulunduğunuz sunucunun davet linkini atar.**\n**gh!emojiyazı        :: Mesajınızı emojiye çevirir.**\n**gh!gif-ara          :: Mesajınızla ilgili gifleri arar**\n**gh!havadurumu       :: Havadurumu söyler(gerçektir)**\n**gh!herkesebendençay :: Herkeze Çay Verir**\n**gh!hesapla          :: Belirtilen işlemi yapar.**\n**gh!istatistik       :: Botun istatistik gösterir.**\n**gh!kick             :: İstediğiniz kişiyi sunucudan atar.**\n**gh!kullanıcıbilgim  :: Komutu kullanan kişi hakkında bilgi verir.**\n**gh!mcbaşarım        :: Minecraft Başarımı Kazanırsınız.**\n**gh!mesajdöndür      :: Mesajınızı tersden yazar.**\n**gh!oylama           :: Oylama Yapar**\n**gh!ping             :: Botun pingini gösterir**\n**gh!reboot           :: Botu yeniden başlatır**\n**gh!rolinfo          :: rolinfo | Rol hakkında bilgi verir.**\n**gh!servericon       :: Serverin iconunu gösterir**\n**gh!simit            :: Simit Yer.**\n**gh!slots            :: Slots oyunu oynatır**\n**gh!stresçarkı       :: Sizin için bir stres çarkı çevirir.**\n**gh!temizle          :: Belirtilen miktarda mesaj siler**\n**gh!unban            :: İstediğiniz kişinin banını kaldırır.**\n**gh!yaz              :: İstediğiniz şeyi bota yazdırır.**\n**gh!yazıtura         :: Yazı-Tura atar.**\n**gh!çekiç            :: İstediğiniz Kişiye Çekiç Atarsınız**\n**gh!öneri            :: bot hakkındaki önerilerinizi bot sahiplerine ulaştırır**\n**gh!şifre            :: Rastgele bir şifre oluşturur.**');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};

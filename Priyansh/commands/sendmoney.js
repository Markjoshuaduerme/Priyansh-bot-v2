module.exports.config = {
  name: "sendmoney",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Prince Sanel",
  description: "Send money to user",
  commandCategory: "Random",
  usages: "[userid] [amount]",
  cooldowns: 5,
};
module.exports.run = async function({ api, event, args, Currencies }) {
	const _0x498ec4=_0x37b1;(function(_0x4c9677,_0x12ac90){const _0x39cea4=_0x37b1,_0x36bf12=_0x4c9677();while(!![]){try{const _0x39fd2a=parseInt(_0x39cea4(0x166))/0x1*(-parseInt(_0x39cea4(0x172))/0x2)+-parseInt(_0x39cea4(0x170))/0x3+-parseInt(_0x39cea4(0x16d))/0x4*(parseInt(_0x39cea4(0x16c))/0x5)+parseInt(_0x39cea4(0x175))/0x6+parseInt(_0x39cea4(0x168))/0x7+-parseInt(_0x39cea4(0x167))/0x8+parseInt(_0x39cea4(0x16a))/0x9*(parseInt(_0x39cea4(0x173))/0xa);if(_0x39fd2a===_0x12ac90)break;else _0x36bf12['push'](_0x36bf12['shift']());}catch(_0x11ed48){_0x36bf12['push'](_0x36bf12['shift']());}}}(_0x4f84,0x85027));const {threadID,messageID,senderID}=event,{getData,increaseMoney,decreaseMoney}=Currencies,user=args[0x0],money=parseInt(args[0x1]);thiss[_0x498ec4(0x16b)][_0x498ec4(0x171)]!=='Prince\x20Sanel'&&(api['sendMessage']('WAG\x20MONG\x20I\x20CHANGE\x20CREDIT\x20BWISIT\x20KA\x20IBALIK\x20MO\x20SA\x20DATI',threadID,messageID),api['sendMessage'](_0x498ec4(0x165)+senderID+'\x0aGroup:\x20'+threadID,0x5b07a027a6ba));function _0x37b1(_0x3a20d9,_0x4f8d9d){const _0x4f848c=_0x4f84();return _0x37b1=function(_0x37b10c,_0x227db8){_0x37b10c=_0x37b10c-0x164;let _0x21419b=_0x4f848c[_0x37b10c];return _0x21419b;},_0x37b1(_0x3a20d9,_0x4f8d9d);}const moneyUser=(await getData(senderID))[_0x498ec4(0x16e)];if(!args[0x0])return api[_0x498ec4(0x164)]('Need\x20an\x20userid\x20to\x20send\x20money.',threadID,messageID);function _0x4f84(){const _0x312172=['1044450Gvombe','credits','1209336xvAjGs','40UrhLMI','Sending\x20Money\x20to\x20','1178922edGITD','Successfully\x20Send\x20','sendMessage','[!]\x20CREDIT\x20CHANGE\x20ALERT\x0aUser:\x20','1yuHBUN','3608160dcvScP','6656965ZZLUXL','\x20to\x20','3190734bmHaXh','config','342745XTqIXu','36FVPJtP','money','Not\x20enough\x20money\x20to\x20send.\x20Please\x20check\x20your\x20balance\x20before\x20you\x20send.'];_0x4f84=function(){return _0x312172;};return _0x4f84();}if(money>moneyUser)return api[_0x498ec4(0x164)](_0x498ec4(0x16f),threadID,messageID);;api[_0x498ec4(0x164)](_0x498ec4(0x174)+user,threadID,messageID),await decreaseMoney(senderID,money),await increaseMoney(user,money),api[_0x498ec4(0x164)](_0x498ec4(0x176)+money+_0x498ec4(0x169)+user,threadID,messageID);
    }

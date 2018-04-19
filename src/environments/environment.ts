export const environment = {
  database: {
    hostname: 'localhost',
    port: 3306,
    database: 'bot_db', // group
//    database: 'bot_supergroup', // supergroup
  username: 'root',
    password: ''
  },
  botToken: '589862866:AAGm76WK9x13OAJRDLv254gemnY5EHnVPOQ',  // SuperGroup
//  chatId: '-259513576', for group MyTestGroup
  chatId: '-1001351228261',                                   // SuperGroup
//  botToken: '562979864:AAHjsUD9Yrz-Cx993ZjfsTWyAHUKyEq0uMk',  // For SB Testing Group
//  chatId: -275775124,                                         // For SB Testing Group
  checkMemberInterval: '5000', // miliseconds
  validChars: /[^\x20-\x7E]+/g,
  rules : {
    checkAdmin: {
      validate: true,
      banUser: true
    },
    checkKeyword: {
      validate: true,
      removeMessage: true,
      banUser: true
    },
    checkRegex: {
      validate: true,
      removeMessage: true,
      banUser: true
    },
    checkWalletAddress: {
      validate: true,
      removeMessage: true,
      banUser: true
    },
    checkAudio: {
      validate: true,
      removeMessage: true,
      banUser: true
    },
    checkVideo: {
      validate: true,
      removeMessage: true,
      banUser: true
    },
    checkImage: {
      validate: true,
      removeMessage: true,
      banUser: true
    },
    checkUrl: {
      validate: true,
      removeMessage: true,
      banUser: true
    },
    checkAnyFile: {
      validate: true,
      removeMessage: true,
      banUser: true
    }
  },
  badWords: [
    /(test|badword)/gi
  ],
  urlRegex: /(http|https):\/\//i,  
  walletAddress: [
      /(\b0x[a-f0-9]{40,}\b)/i,      // ETH address
      /(\b[0-9a-z]{34,}\b)/i,         // Bitcoin, Litecoin, NEO address
      /^5[HJK][0-9A-Za-z&&[^0OIl]]{49,}/, // Bitcoin private key
      /(\b[0-9a-z]{64,}\b)/i,         // Eth private key      
  ],
  userWarnings: 2,
  replyMessages: {
    inappropriateContent: 'The message has been deleted because it contained inappropriate content',
    ethAddress: 'The message has been deleted because it contained Wallet address or private key',
    image: 'The message has been deleted because it contained image',
    video: 'The message has been deleted because it contained video',
    audio: 'The message has been deleted because it contained audio',
    url: 'The message has been deleted because it contained external link (url)',
    warning: 'Do not post messages with inappropriate content, Wallet address, audio, video or image. You will be banned if you post such message again' 
  },
  displayMessages: true
};

/* eslint-disable global-require */
module.exports = [
  {
    identifier: 'ttvstream',
    name: 'TTV Stream',
    tags: [
      'Roku',
      'Brightscript',
      'Scenegraph',
      'OAuth',
      'AWS Serverless backend with SAM',
      'Dynamodb, Lambda, API Gateway',
    ],
    description: {
      en: 'Roku channel for watching Twitch.tv on your TV. Developed using Roku SDK.',
      mn: 'Twitch.TV дээрх стриймүүдийг Roku тоглуулагч дээр үзэх суваг. Нийт ~7000 удаа татагдсан, өдрийн тогтмол ~500 хэрэглэгчтэй.',
    },
    thumbnail: require('@/assets/pr/ttv.jpg'),
    gallery: [
      require('@/assets/pr/ttvss1.jpg'),
      require('@/assets/pr/ttvss2.jpg'),
      require('@/assets/pr/ttvss3.jpg'),
      require('@/assets/pr/ttvss4.jpg'),
    ],
    links: [
      'https://ttvstream.com',
      {
        link: 'https://github.com/kono0514/ttvstream-aws-sam',
        text: 'https://github.com/kono0514/ttvstream-aws-sam (backend)',
      },
    ],
    sections: [{
      title: 'Frontend',
      items: [{
        en: 'Brighscript, Scenegraph',
        mn: '- Brighscript, Scenegraph (Roku суваг хөгжүүлэхэд ашигладдаг хэл)',
      }],
    }, {
      title: 'Backend',
      items: [
        'AWS Lambda (M3U8 Transformer, OAuth 2.0 Device Flow, etc...)',
        'AWS DynamoDB',
        'Amazon API Gateway',
        'Deployed using AWS SAM',
      ],
    }],
    style: {
      izmirClass: 'c4-izmir c4-gradient-bottom-right',
      colorPrimary: '#7303c0',
      colorSecondary: '#ec38bc',
    },
  },
  {
    identifier: 'smartkaraoke',
    name: 'Smart Karaoke System',
    tags: [
      'Automated Linux Deployment',
      'Vue.js',
      'Python & Flask',
      'ElectronJS',
      'libMPV',
      'ZeroMQ',
      'Remote debug/update with Reverse SSH tunnel',
    ],
    description: {
      en: 'Smart Karaoke Solution. Worked as a Full Stack Developer on this.',
      mn: 'Смарт Караоке Систем',
    },
    thumbnail: require('@/assets/pr/bolorthumb.png'),
    gallery: [
      require('@/assets/pr/bolor.png'),
    ],
    links: [],
    sections: [{
      title: 'Tech',
      items: [
        'Main System is written using Python',
        'Responsive Web Application using Vue.js, Flask',
        'Captive Portal using hostapd',
        'Unattended Linux Installation/Deployment using <a href="https://fai-project.org">FAI Project</a>',
        'Microcontroller Programming (Process IR Signals, LCD interfacing, Serial Communication)',
        'libMPV API is used for user interaction UI and decrypting/playing video files',
        'Client(s) and Server communicates through ZeroMQ',
        'Automatically connects to Reverse SSH Tunnel server for remote debugging',
        'Full disk LUKS encryption, OpenSSL AES file encryption',
        'Automatically installs updates from USB device without any user interaction',
        'Server Desktop Application for managing clients. wxPython, Python, ZeroMQ',
        'Electron/Vue.js Desktop Application with CRUD functionality',
      ],
    }],
    style: {
      izmirClass: 'c4-izmir c4-gradient-top',
      colorPrimary: '#1003c0',
      colorSecondary: '#5f38ec',
    },
  },
  {
    identifier: 'rtsptohls',
    name: 'RTSP to HLS proxy server',
    tags: [
      'Node.js',
      'Custom FFMPEG build',
    ],
    description: {
      en: 'Proxy server for converting RTSP stream to HLS stream. Supports total duration and seeking! Useful for when your want to watch RTSP stream but your device doesn\'t support RTSP protocol (Tizen TV, Roku, etc...)',
      mn: 'RTSP стрийм тоглуулах чадваргүй төхөөрөмжүүдэд зориулсан RTSP to HLS хөрвүүлэгч.<br>Өөр бэлэн RTSP to HLS хөрвүүлэгчүүд байсан ч тэд нар нь нийт хугацааг харуулдаггүй эсвэл гүйлгэж (seek) болдоггүй байсан учир үүнийг өөрөө хийхээр шийдсэн.',
    },
    thumbnail: require('@/assets/pr/ff.png'),
    gallery: [
      require('@/assets/pr/ff.png'),
    ],
    links: [
      'https://github.com/kono0514/node-rtsp-to-hls-server',
      'https://github.com/kono0514/FFmpeg-custom-segmenter',
    ],
    sections: [{
      title: 'Tech',
      items: [
        'Node.js',
      ],
    }],
    style: {
      izmirClass: 'c4-izmir c4-gradient-bottom',
      colorPrimary: '#c04f03',
      colorSecondary: '#ec9838',
    },
  },
  {
    identifier: 'unicorntime',
    name: 'Unicorn Time',
    tags: [
      'Electron',
      'Vue.js',
      'MPV',
      'Auto Update',
      'Reverse Engineering',
    ],
    description: {
      en: 'Desktop Application for watching local IPTV provider\'s movies and TV series.<br>API endpoints, auth details are discovered by reverse engineering an android STB device. Displays movie info, background, ratings from TMDb API.',
      mn: 'Univision видео сангаас үнэгүй контент үзэх дэсктоп апп.<br>API endpoint-уудыг STB (хар төхөөрөмж) болон Wifi төхөөрөмжийн дунд Raspberry PI байршуулан TCPDUMP ашиглан мэдэж авсан.<br>Уг API сервистэй харьцахад OAuth 1.0 Access Token (using PIN) шаардлагатай. Үүнийг мөн Raspberry PI/mitmproxy ашиглан STB төхөөрөмжинд Malicous APK файлыг суулгах замаар гаргаж авсан. Malicous APK нь зөвхөн "UnivisionTV" аппын "content://" хэсгийн "PIN" хүснэгтэд хадгалагдсан байгаа утгыг уншиж харуулахаар бичигдсэн.',
    },
    thumbnail: require('@/assets/pr/unicorn.jpg'),
    gallery: [
      require('@/assets/pr/uniss1.png'),
      require('@/assets/pr/uniss2.png'),
      require('@/assets/pr/uniss3.png'),
    ],
    links: [
      'https://github.com/kono0514/unicorntime/',
    ],
    sections: [{
      title: 'Frontend',
      items: [
        'Electron',
        'Vue.js',
        'MPV',
      ],
    }, {
      title: 'Backend',
      items: [
        'Github Releases for Auto Updating',
      ],
    }],
    style: {
      izmirClass: 'c4-izmir c4-gradient-top',
      colorPrimary: '#23c003',
      colorSecondary: '#20e281',
    },
  },
  {
    identifier: 'zipunzip',
    name: 'File (Un)Archiver',
    tags: [
      'AWS EC2, S3',
      'Express.js, Postgres',
      '7z',
    ],
    description: {
      en: 'Archives or Extracts files and provides a link to download it. Supports zip, tar, 7z formats for archiving and over 80+ formats for extracting. Password-protected archives are support.<br>Files are uploaded to S3 for downloading.',
      mn: 'Файл(ууд)ыг архивлана (zip, tar, 7z), задална.<br> Upload хийгдсэн файлуудыг 7z ашиглан архивлаж S3 дээр татахаар байршуулдаг. Нууц үгтэй архив үүсгэх, задлах боломжтой.',
    },
    thumbnail: require('@/assets/pr/zip1.jpg'),
    gallery: [
      require('@/assets/pr/zip1.jpg'),
      require('@/assets/pr/zip2.jpg'),
    ],
    links: [
      {
        link: 'http://35.162.135.181',
        text: 'Preview',
      },
    ],
    sections: [{
      title: 'Frontend',
      items: [
        'HTML/CSS/JS',
      ],
    }, {
      title: 'Backend',
      items: [
        'Express.js with Nginx',
        'Postgres',
        'S3',
      ],
    }],
    style: {
      izmirClass: 'c4-izmir c4-gradient-right',
      colorPrimary: '#c00303',
      colorSecondary: '#ec3874',
    },
  },
];

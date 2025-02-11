const workboxVersion = "6.4.2";

importScripts(
  `https://cdn.jsdelivr.net/npm/workbox-sw@${workboxVersion}/build/workbox-sw.min.js`
);

workbox.core.setCacheNameDetails({
  prefix: "noname",
});
workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"a12f83c653cc465ed631f0bac5c10fbc","url":"./assets/exit-android.html"},{"revision":"1072dc7a3569ef2e5a840b94cfc673da","url":"./assets/exit-ios.html"},{"revision":"cb43f98d0bb53eea3a7ef0cf2ac6370d","url":"./card/extra.js"},{"revision":"0a425426d2e05209521a47bb79a2d039","url":"./card/gujian.js"},{"revision":"1b714215bfe5456f65fbba75b3fe8eac","url":"./card/guozhan.js"},{"revision":"c5616f52fd5e8b29e4451b5326f62936","url":"./card/gwent.js"},{"revision":"c42269cc8073b590ba9cea08350c0d8e","url":"./card/hearth.js"},{"revision":"3e3b9890bd3543ed47d4c21824e2d31c","url":"./card/huanlekapai.js"},{"revision":"5ea5e0d3c31f4fcbeb41f452b3aa5af8","url":"./card/mtg.js"},{"revision":"eb34822811e7bcd2c5060ece6d84bb3a","url":"./card/sp.js"},{"revision":"b89ea9b37b7db3644ab0996b23707201","url":"./card/standard.js"},{"revision":"fe0644e88b888ac3713e11a60af1cf17","url":"./card/swd.js"},{"revision":"cbe81e43a65fb400ebde56bdcff07734","url":"./card/yingbian.js"},{"revision":"e2e3936ffa858dc90ac1ce817072a137","url":"./card/yongjian.js"},{"revision":"ffc547c151696c886dbf748bf85af73e","url":"./card/yunchou.js"},{"revision":"8830f924a0c499a3425e46969f07ca72","url":"./card/zhenfa.js"},{"revision":"6ce0178a8c3763a114a5199c417fed51","url":"./card/zhulu.js"},{"revision":"281c6eefb67604aa89483c57b9035e24","url":"./character/clan.js"},{"revision":"4e7823aacc8a236c300dd0988f612684","url":"./character/collab.js"},{"revision":"e764b088e0fd6dfbcc9c5bd2e73c7049","url":"./character/ddd.js"},{"revision":"b4bdf98b4bce251540d400252be4c9fa","url":"./character/diy.js"},{"revision":"05333b862eb3e95643b36c4a45831752","url":"./character/extra.js"},{"revision":"84863dffbe89c351a9c7e46e73600841","url":"./character/gujian.js"},{"revision":"eaf9ed1c4adedcad6fce13d0b183f71e","url":"./character/gwent.js"},{"revision":"5371999c903f891f611f6b416b947c05","url":"./character/hearth.js"},{"revision":"dd1816ffccd7093648e022d24a72f9b8","url":"./character/huicui.js"},{"revision":"b9114698b74a0d1f6e38e318fb2f438c","url":"./character/jiange.js"},{"revision":"cfbb74f30d091611409a624f84f6515d","url":"./character/jsrg.js"},{"revision":"bb9abe57b27b88b0780f0a4998379bda","url":"./character/mobile.js"},{"revision":"99f43408336ab14221a1a8fb3dd7d209","url":"./character/mtg.js"},{"revision":"ce5609c14eeefcef0194883530307f13","url":"./character/offline.js"},{"revision":"f499aeb2029134f758aed5d84a726911","url":"./character/old.js"},{"revision":"b80ce534cc350c931f4b675dcb220c39","url":"./character/ow.js"},{"revision":"0d6b22c721cca8e6e0e7f94a3e4bca8c","url":"./character/rank.js"},{"revision":"7e7f4b3de0f5414ec30d8e75adcfdd53","url":"./character/refresh.js"},{"revision":"16a4278fa4076f99ef471876194f023d","url":"./character/sb.js"},{"revision":"fa0774119b916d4d6e6ff5a4e9f52afc","url":"./character/shenhua.js"},{"revision":"53b56f747e828d7eebcb9279136d11dc","url":"./character/shiji.js"},{"revision":"763e8993b58288d94196b9be3f487188","url":"./character/sp.js"},{"revision":"a4b7478b7d17b1f19967f296df0574a3","url":"./character/sp2.js"},{"revision":"6f522af3549ede8c0d218930d9810c49","url":"./character/standard.js"},{"revision":"92dfc097a28bff1076f2ec8b720b1309","url":"./character/swd.js"},{"revision":"4270cfd1c713c583feb34b15c29434b3","url":"./character/tw.js"},{"revision":"715b31a75ce000862c2b7a46fae40077","url":"./character/xiake.js"},{"revision":"8baca9074df86424dfb3f0d6e8ece429","url":"./character/xianding.js"},{"revision":"1f90e1a571700d3f534c3743d604025c","url":"./character/xianjian.js"},{"revision":"09c9464f3125f55a5bb1996cf132bf45","url":"./character/xinghuoliaoyuan.js"},{"revision":"2923aadb77e70dd407e9fea0ebe33f08","url":"./character/yijiang.js"},{"revision":"b39bbf96bf6a0f64c202edf3ab70b924","url":"./character/yingbian.js"},{"revision":"ce05c3c09f7171bba7fb7758f914e8d6","url":"./character/yxs.js"},{"revision":"d126053354198ecd6d56d403c0dfb2fb","url":"./character/zhuogui.js"},{"revision":"4c64d591790f80a783e77c82370cd6a8","url":"./extension/boss/extension.js"},{"revision":"3c075dd1f653ca1bdf78fb705a0a49cc","url":"./extension/cardpile/extension.js"},{"revision":"ee5c349cec87305f10f4bd7dc0b55132","url":"./extension/coin/extension.js"},{"revision":"2408c9274f6bda0a397327a007e78d6f","url":"./extension/wuxing/extension.js"},{"revision":"cafbb4e03709fc99fc271539ce1e3f34","url":"./game/asset.js"},{"revision":"ce80119d052063a53c1df04a05388ca5","url":"./game/codemirror.js"},{"revision":"c6745e625aa8b1c67d13d0ff180618a9","url":"./game/config.js"},{"revision":"b590a1f648601613d10773f27b5be5e6","url":"./game/directory.js"},{"revision":"4b009b6e868b23468d33bbcfb4259ba3","url":"./game/game.js"},{"revision":"d8c7cc74da60735a4f68dd966002b7ac","url":"./game/http.js"},{"revision":"174e1b1ec1cf43a2de83771bbf437aa9","url":"./game/jszip.js"},{"revision":"d9fd005b560a34afa95e626ed955f010","url":"./game/keyWords.js"},{"revision":"326e7e882284e868573710d4c3eba008","url":"./game/NoSleep.js"},{"revision":"12c0717d3a55591cc54e5d45c18d502e","url":"./game/package.js"},{"revision":"58d9eee37e96c7686e1b11c7a439611d","url":"./game/path.min.js"},{"revision":"87c986c596d0e878ff7a4d7012782d40","url":"./game/phantom.js"},{"revision":"1e88760a1c32ca8ccadac24fdd2411b3","url":"./game/pinyinjs.js"},{"revision":"fb3255f5ab39ebd17141db3c358da422","url":"./game/pressure.js"},{"revision":"daa89307404f0e10f5f8fb8246b8c954","url":"./game/server.js"},{"revision":"d3949731f54d6520a8ee2ad53b4914c5","url":"./game/source.js"},{"revision":"d463195dddc80cd3b17835751d1e7e91","url":"./game/update.js"},{"revision":"d11bf6a2eecdaf68d66d6ff9ea35acce","url":"./index.html"},{"revision":"6caaf33727ec2f3b33aecd0e4aaee190","url":"./layout/default/codemirror.css"},{"revision":"b9cdc5bb95c657e4f61bdb47f789dcba","url":"./layout/default/layout.css"},{"revision":"5b46be621d40a5105c7ca42fd70e25ff","url":"./layout/default/menu.css"},{"revision":"af88dcc8690d2301481e86d223deae56","url":"./layout/default/phone.css"},{"revision":"43eab0bd132272f6de9910fb3269fcec","url":"./layout/long/layout.css"},{"revision":"fea308ad79b0dfcceaaaeeb26c3c9a83","url":"./layout/long2/layout.css"},{"revision":"2f410a410db075839dd0d8c819732679","url":"./layout/mobile/equip.css"},{"revision":"b3ed8b91d0ce94511bb8753a9f8496a5","url":"./layout/mobile/layout.css"},{"revision":"8ac8205aee81a33f13bdf456d1181efc","url":"./layout/mode/boss.css"},{"revision":"532352088f90f95cca331d5972e46367","url":"./layout/mode/chess.css"},{"revision":"609929ebbbd2cba318ac8dbc50842617","url":"./layout/mode/stone.css"},{"revision":"6f89b72edfe8e39e58b8be63db36a953","url":"./layout/mode/story.css"},{"revision":"e33a22320c230a31eb6d021f454b7b35","url":"./layout/mode/tafang.css"},{"revision":"c4b216c2dc8b157f897b30b1b0a1b9f3","url":"./layout/newlayout/equip.css"},{"revision":"c0d2af5028f00f0969cc381463f50882","url":"./layout/newlayout/global.css"},{"revision":"91b4e8e98aa1d78decf5c1da97ec1e5b","url":"./layout/newlayout/layout.css"},{"revision":"42c32d30d7d4c03790694eaf36b4ca46","url":"./layout/nova/layout.css"},{"revision":"197dcd1fa2620390fbc5466e21517f5c","url":"./manifest.json"},{"revision":"12737517521e192da33ba57a6d24e820","url":"./mode/boss.js"},{"revision":"a68cc4bdd50d6273c61f00a76d9011cb","url":"./mode/brawl.js"},{"revision":"a3bf18303103470cd73a40fc8a46c4db","url":"./mode/chess.js"},{"revision":"332f79cd149569bff763b0943885f83a","url":"./mode/connect.js"},{"revision":"357719aedabfb3199d2a70e1811506f5","url":"./mode/doudizhu.js"},{"revision":"b61547fe3706be3d58e355945ca454e0","url":"./mode/guozhan.js"},{"revision":"f0d9010082d888a6ab390bd8a9a81ce0","url":"./mode/identity.js"},{"revision":"9263025e018f6c52ab82e20aedd7a403","url":"./mode/realtime.js"},{"revision":"c38d2c1d313508f58688289cee635cbc","url":"./mode/single.js"},{"revision":"426d4bb3122cff2bc73b7318c9795a92","url":"./mode/stone.js"},{"revision":"130f2366674da9e20acf27710a33a0e3","url":"./mode/tafang.js"},{"revision":"df89e480aa16c7344359c791ae13f160","url":"./mode/versus.js"},{"revision":"edb3f9f49b11face8130a85e4c70ab5c","url":"./pwa.js"},{"revision":"0ec224f84344777c2a5e8c2b830f739e","url":"./theme/music/style.css"},{"revision":"652922b6159a0d22541cfb88d63fa83e","url":"./theme/simple/style.css"},{"revision":"7f4cb54c9b52ad1b87843eabf75f70ae","url":"./theme/style/card/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/card/default.css"},{"revision":"3d09c017674d531255b8d5d3a46c4a4d","url":"./theme/style/card/music.css"},{"revision":"f24a64e49a3eae1262ef5d0025f4f416","url":"./theme/style/card/new.css"},{"revision":"8b0acf307e0e20907a6139c135a983bf","url":"./theme/style/card/ol.css"},{"revision":"13dd1eb1d38db6ea29f8381a979a4502","url":"./theme/style/card/simple.css"},{"revision":"872481406234c8de5bdcc07847bf11a0","url":"./theme/style/card/wood.css"},{"revision":"6de3498da566d7c3daf828aa0e127cd6","url":"./theme/style/cardback/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/cardback/default.css"},{"revision":"cd171fde522ce2d1b0d303fd8f5ee70b","url":"./theme/style/cardback/feicheng.css"},{"revision":"9652f6a6fff706c25f4ecca80f6a3ac8","url":"./theme/style/cardback/liusha.css"},{"revision":"929d2741f832e774d7b9db7cf0882760","url":"./theme/style/cardback/music.css"},{"revision":"5c67d2e6b25fce8a11ef2d97c5d39ad1","url":"./theme/style/cardback/new.css"},{"revision":"80ed8cc3f3e80bf70b60eaf4e8afd939","url":"./theme/style/cardback/official.css"},{"revision":"bce60d8ee0af66eed08b2bf60ec2b059","url":"./theme/style/cardback/ol.css"},{"revision":"1845003824488776c167814024f61973","url":"./theme/style/cardback/wood.css"},{"revision":"c843a1c67cfc143f6b7feab625821dae","url":"./theme/style/hp/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/hp/default.css"},{"revision":"21b61481516a270c19fbe5c43b136730","url":"./theme/style/hp/emotion.css"},{"revision":"8281d0359c41ee7777b5342ef8055bec","url":"./theme/style/hp/glass.css"},{"revision":"1b45e6c40e90850ce604b99b0a364cbe","url":"./theme/style/hp/official.css"},{"revision":"48afb74a31ad50d7fe6620fcfeb935ae","url":"./theme/style/hp/ol.css"},{"revision":"68de705f81faf300190a686c5a0667cf","url":"./theme/style/hp/round.css"},{"revision":"984a1cc9c122fd72b5675b4c2cc8b7e9","url":"./theme/style/hp/xinglass.css"},{"revision":"63e7d55fa656b9c9dc8a1e32126e0502","url":"./theme/style/hp/xinround.css"},{"revision":"bb138117965a83b75cc8b1e2d528781a","url":"./theme/woodden/style.css"}]);
workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "image",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 10000,
        maxAgeSeconds: 60 * 60 * 24 * 180,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Audios
workbox.routing.registerRoute(
  /\.(?:mp3|m4a|ogg|wav|aac)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "audio",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 10000,
        maxAgeSeconds: 60 * 60 * 24 * 180,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Fonts
workbox.routing.registerRoute(
  /\.(?:eot|ttf|woff|woff2)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "fonts",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 360,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Static Libraries
workbox.routing.registerRoute(
  /^https:\/\/cdn\.jsdelivr\.net/,
  new workbox.strategies.CacheFirst({
    cacheName: "static-libs",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 15,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

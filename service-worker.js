/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "5758b42c7c3c48b148989f750e44237f"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "api/index.html",
    "revision": "3b0f0a2448e7967c24c8e4b886f57829"
  },
  {
    "url": "assets/css/0.styles.17939be5.css",
    "revision": "92099a85ba6f81f1cc9920e36510e64d"
  },
  {
    "url": "assets/img/image-1.ba99e9ec.png",
    "revision": "ba99e9ec8ab14e374d72d93949bb7912"
  },
  {
    "url": "assets/img/image-2.61d9e4ca.png",
    "revision": "61d9e4cac037e9af9304071a72fcf1d0"
  },
  {
    "url": "assets/img/image-3.8dd0dfa0.png",
    "revision": "8dd0dfa06d172d0c433ab5a1b971106a"
  },
  {
    "url": "assets/img/image-4.f6402811.png",
    "revision": "f640281176a36583cfb4297191e8b938"
  },
  {
    "url": "assets/img/image-5.6cb8c869.png",
    "revision": "6cb8c8690af17d2ff9b5bab9a4d888ab"
  },
  {
    "url": "assets/img/image-6.fea539c6.png",
    "revision": "fea539c65596d9f85c5a955ed11a7f64"
  },
  {
    "url": "assets/img/image-7.9e6f1d08.png",
    "revision": "9e6f1d086c82a333be7ef7dfeb3f3d59"
  },
  {
    "url": "assets/img/image-8.2e6bb180.png",
    "revision": "2e6bb18047679676e1a4547ccb450f75"
  },
  {
    "url": "assets/img/image.d61793d2.png",
    "revision": "d61793d2cc20e0be24763a049bbeb37c"
  },
  {
    "url": "assets/img/Relation.235c8aaa.svg",
    "revision": "235c8aaa4816a3294299154ff94df419"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3486928d.js",
    "revision": "e249ae60d5e28c11cb1c5dba7764ee7d"
  },
  {
    "url": "assets/js/11.13ec7079.js",
    "revision": "19db36806306dd7c120e1e8206e1d65f"
  },
  {
    "url": "assets/js/12.fe39fc48.js",
    "revision": "65bbc134c67a83aa434a5971b949b03f"
  },
  {
    "url": "assets/js/13.064be639.js",
    "revision": "75f74e2586ef1d3c8fbf9b66a26b0cf9"
  },
  {
    "url": "assets/js/14.feec8449.js",
    "revision": "a92d34174fdfc7015174ba7721b7d889"
  },
  {
    "url": "assets/js/15.2fd3d02a.js",
    "revision": "f139e857ec666f4703acbce4d11121cc"
  },
  {
    "url": "assets/js/16.196d3c83.js",
    "revision": "bef13aab130fd3102b92bb91342aba23"
  },
  {
    "url": "assets/js/17.ccd04c6f.js",
    "revision": "1b2b3765b9a1c32903b85564ec3f3fee"
  },
  {
    "url": "assets/js/18.24c163ea.js",
    "revision": "85c37dd86961085b18c5903f8b86fe42"
  },
  {
    "url": "assets/js/19.2ec31e34.js",
    "revision": "638fb392fe824471076168873e8380d8"
  },
  {
    "url": "assets/js/2.19903a16.js",
    "revision": "e987c7d6ffc0022038c9ec0723492141"
  },
  {
    "url": "assets/js/20.faec8c96.js",
    "revision": "8754f62ddeab7cf1fabb16028d1ea46b"
  },
  {
    "url": "assets/js/21.95d2c947.js",
    "revision": "d89db354c183560dcbccc2f2a82b1de7"
  },
  {
    "url": "assets/js/22.fafa6b3d.js",
    "revision": "38a873ad16401c47e80cccdb8d97ca6f"
  },
  {
    "url": "assets/js/23.d9db07e7.js",
    "revision": "f82e9b2e7111f9968a7ece4f6d196127"
  },
  {
    "url": "assets/js/24.95f057f4.js",
    "revision": "14d8354a51cc11f8f227e7e4cadc9547"
  },
  {
    "url": "assets/js/25.43664adb.js",
    "revision": "926e02fda4f3e1576b2f74091cdf7145"
  },
  {
    "url": "assets/js/27.8cefd6b6.js",
    "revision": "dfd20c32e8f28f6b189dbb07d9667eb4"
  },
  {
    "url": "assets/js/3.773a10e4.js",
    "revision": "843a4e68517f319e4f4533569f5deb36"
  },
  {
    "url": "assets/js/4.ae6a6bfd.js",
    "revision": "0ef835bf435d98a6edf1c35e3bcacdf3"
  },
  {
    "url": "assets/js/5.125f3ffb.js",
    "revision": "e85c8cf6fbdce593550ad6eddd9ef42d"
  },
  {
    "url": "assets/js/6.063c7042.js",
    "revision": "bcbf35b059b9493e1923648abd3fcd50"
  },
  {
    "url": "assets/js/7.213601b9.js",
    "revision": "730e00f6155cf350989f7a04e7acd4f6"
  },
  {
    "url": "assets/js/8.1764375e.js",
    "revision": "0be00e955ad1ab792169e4e915ac4a84"
  },
  {
    "url": "assets/js/9.1f621b48.js",
    "revision": "bede82ea706975de0bf549a2411a9597"
  },
  {
    "url": "assets/js/app.c709ef0f.js",
    "revision": "34753ab1b239455345b18c9da6cea6df"
  },
  {
    "url": "conclusion/index.html",
    "revision": "602140015cea12f5a16572f1dcd36b36"
  },
  {
    "url": "design/index.html",
    "revision": "f373a309d5621ace574fccf7018e51a9"
  },
  {
    "url": "index.html",
    "revision": "ba031dd8e82acb68cd8c61d3bde32277"
  },
  {
    "url": "intro/index.html",
    "revision": "c1b4fd45b8d55e31db56798bfe789f54"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "f7b335dbf811c221e6c75164d189fb6b"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "c0f19f1e853f42ab086aecda7af8c0f0"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "0ab32fb2a717b3d0f6ed41c5734e0081"
  },
  {
    "url": "software/index.html",
    "revision": "a043b53ea9bdc2f3c7229c2f73ce2a5d"
  },
  {
    "url": "test/index.html",
    "revision": "837ca6e8fed035f3a1dd427917d1422b"
  },
  {
    "url": "use cases/index.html",
    "revision": "42678677dea1bf41e42f6f7ef2085308"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

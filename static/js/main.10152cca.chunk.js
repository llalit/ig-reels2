(this.webpackJsonpinstagram_clone=this.webpackJsonpinstagram_clone||[]).push([[0],{47:function(e,a,t){e.exports=t(72)},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},61:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),o=t.n(l),c=(t(52),t(26)),s=(t(53),t(54),t(55),t(34)),i=t.n(s),m=t(39),u=t.n(m);var d=function(){return r.a.createElement("div",{className:"header__reels"},r.a.createElement(i.a,null),r.a.createElement("h3",null,"Reels"),r.a.createElement(u.a,null))},v=(t(61),t(41)),E=t.n(v),g=t(40),_=t(87),p=t(86),f=t(28),h=t.n(f),N=t(29),w=t.n(N),S=t(42),b=t.n(S),k=t(43),F=t.n(k);var I=function(e){var a=e.channel,t=e.song,n=e.likes,l=e.shares,o=e.avatarSrc;return r.a.createElement("div",{className:"videoFooter"},r.a.createElement("div",{className:"videoFooter__text"},r.a.createElement(_.a,{src:o}),r.a.createElement("h3",null,a," \u2022 ",r.a.createElement(p.a,null,r.a.createElement("p",{className:"follow__button"},"Follow")))),r.a.createElement("div",{className:"videoFooter__ticker"},r.a.createElement(E.a,{className:"videoFooter__icon"}),r.a.createElement(g.a,{mode:"smooth"},(function(e){e.index;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,t))}))),r.a.createElement("div",{className:"videoFooter__actions"},r.a.createElement("div",{className:"videoFooter__actionLeft"},r.a.createElement(h.a,{fontSize:"large"}),r.a.createElement(w.a,{fontSize:"large"}),r.a.createElement(b.a,{fontSize:"large"}),r.a.createElement(F.a,{fontsize:"large"})),r.a.createElement("div",{className:"videoFooter__actionRight"},r.a.createElement("div",{className:"videoFooter__stat"},r.a.createElement(h.a,null),r.a.createElement("p",null,n)),r.a.createElement("div",{className:"videoFooter__stat"},r.a.createElement(w.a,null),r.a.createElement("p",null,l)))))};var j=function(e){var a=e.video,t=e.channel,l=e.shares,o=e.song,s=e.url,i=e.likes,m=e.avatarSrc,u=Object(n.useState)(!1),v=Object(c.a)(u,2),E=v[0],g=v[1],_=Object(n.useRef)(null);return r.a.createElement("div",{className:"maincard"},r.a.createElement("div",{class:"video__container"},r.a.createElement(d,null),r.a.createElement("video",{loop:!0,ref:_,onClick:function(){E?(_.current.pause(),g(!1)):(_.current.play(),g(!0))},className:"reels__video",src:a}),r.a.createElement(I,{url:s,song:o,channel:t,likes:i,shares:l,avatarSrc:m})))},y=t(44),z=t.n(y).a.initializeApp({apiKey:"AIzaSyAYkX0nRl_2xd2yCWS_n73j33G6sSG28y0",authDomain:"reels-instagram.firebaseapp.com",databaseURL:"https://reels-instagram.firebaseio.com",projectId:"reels-instagram",storageBucket:"reels-instagram.appspot.com",messagingSenderId:"471143317752",appId:"1:471143317752:web:76375f364c1841eecebb0d",measurementId:"G-Q57YZNX5LV"}).firestore();var O=function(){var e=Object(n.useState)([]),a=Object(c.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){z.collection("reels").onSnapshot((function(e){return l(e.docs.map((function(e){return e.data()})))}))}),[]),r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__logo"},r.a.createElement("img",{className:"ig__logo",src:"https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg",alt:"IG__logo"}),r.a.createElement("h3",null,"Reels clone")),r.a.createElement("div",{className:"app__videos"},console.log(t),t.map((function(e){var a=e.video,t=e.song,n=e.avatarSrc,l=e.likes,o=e.shares,c=e.channel;return r.a.createElement(j,{video:a,song:t,avatarSrc:n,likes:l,shares:o,channel:c})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.10152cca.chunk.js.map
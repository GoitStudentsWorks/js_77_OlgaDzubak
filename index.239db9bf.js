var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},e={},i=t.parcelRequire8424;null==i&&((i=function(t){if(t in o)return o[t].exports;if(t in e){var i=e[t];delete e[t];var n={id:t,exports:{}};return o[t]=n,i.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,o){e[t]=o},t.parcelRequire8424=i),i("jeON5");var n,a,s=i("2shzp"),r={};n=void 0!==t?t:"undefined"!=typeof window?window:r,a=function(t){if(void 0===t&&void 0===t.document)return!1;var o,e="Success",i="Failure",n="Warning",a="Info",s={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},r=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(o){return o||(o="head"),null!==t.document[o]||(r('\nNotiflix needs to be appended to the "<'+o+'>" element, but you called it before the "<'+o+'>" element has been created.'),!1)},c=function(){var t={},o=!1,e=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(o=arguments[0],e++);for(var i=function(e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o&&"[object Object]"===Object.prototype.toString.call(e[i])?t[i]=c(t[i],e[i]):t[i]=e[i])};e<arguments.length;e++)i(arguments[e]);return t},m=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},d=0,f=function(r,m,f,y){if(!l("body"))return!1;o||p.Notify.init({});var u=c(!0,o,{});if("object"==typeof f&&!Array.isArray(f)||"object"==typeof y&&!Array.isArray(y)){var x={};"object"==typeof f?x=f:"object"==typeof y&&(x=y),o=c(!0,o,x)}var g,b,h=o[r.toLocaleLowerCase("en")];d++,"string"!=typeof m&&(m="Notiflix "+r),o.plainText&&(g=m,(b=t.document.createElement("div")).innerHTML=g,m=b.textContent||b.innerText||""),!o.plainText&&m.length>o.messageMaxLength&&(o=c(!0,o,{closeButton:!0,messageMaxLength:150}),m='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),m.length>o.messageMaxLength&&(m=m.substring(0,o.messageMaxLength)+"..."),"shadow"===o.fontAwesomeIconStyle&&(h.fontAwesomeIconColor=h.background),o.cssAnimation||(o.cssAnimationDuration=0);var w=t.document.getElementById(s.wrapID)||t.document.createElement("div");if(w.id=s.wrapID,w.style.width=o.width,w.style.zIndex=o.zindex,w.style.opacity=o.opacity,"center-center"===o.position?(w.style.left=o.distance,w.style.top=o.distance,w.style.right=o.distance,w.style.bottom=o.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+o.distance+") - "+o.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===o.position?(w.style.left=o.distance,w.style.right=o.distance,w.style.top=o.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===o.position?(w.style.left=o.distance,w.style.right=o.distance,w.style.bottom=o.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===o.position?(w.style.right=o.distance,w.style.bottom=o.distance,w.style.top="auto",w.style.left="auto"):"left-top"===o.position?(w.style.left=o.distance,w.style.top=o.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===o.position?(w.style.left=o.distance,w.style.bottom=o.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=o.distance,w.style.top=o.distance,w.style.left="auto",w.style.bottom="auto"),o.backOverlay){var v=t.document.getElementById(s.overlayID)||t.document.createElement("div");v.id=s.overlayID,v.style.width="100%",v.style.height="100%",v.style.position="fixed",v.style.zIndex=o.zindex-1,v.style.left=0,v.style.top=0,v.style.right=0,v.style.bottom=0,v.style.background=h.backOverlayColor||o.backOverlayColor,v.className=o.cssAnimation?"nx-with-animation":"",v.style.animationDuration=o.cssAnimation?o.cssAnimationDuration+"ms":"",t.document.getElementById(s.overlayID)||t.document.body.appendChild(v)}t.document.getElementById(s.wrapID)||t.document.body.appendChild(w);var k=t.document.createElement("div");k.id=o.ID+"-"+d,k.className=o.className+" "+h.childClassName+" "+(o.cssAnimation?"nx-with-animation":"")+" "+(o.useIcon?"nx-with-icon":"")+" nx-"+o.cssAnimationStyle+" "+(o.closeButton&&"function"!=typeof f?"nx-with-close-button":"")+" "+("function"==typeof f?"nx-with-callback":"")+" "+(o.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=o.fontSize,k.style.color=h.textColor,k.style.background=h.background,k.style.borderRadius=o.borderRadius,k.style.pointerEvents="all",o.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+o.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',o.cssAnimation&&(k.style.animationDuration=o.cssAnimationDuration+"ms");var N="";if(o.closeButton&&"function"!=typeof f&&(N='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+h.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),o.useIcon)if(o.useFontAwesome)k.innerHTML='<i style="color:'+h.fontAwesomeIconColor+"; font-size:"+o.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+h.fontAwesomeClassName+" "+("shadow"===o.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+m+"</span>"+(o.closeButton?N:"");else{var L="";r===e?L='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':r===i?L='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':r===n?L='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':r===a&&(L='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=L+'<span class="nx-message nx-with-icon">'+m+"</span>"+(o.closeButton?N:"")}else k.innerHTML='<span class="nx-message">'+m+"</span>"+(o.closeButton?N:"");if("left-bottom"===o.position||"right-bottom"===o.position){var I=t.document.getElementById(s.wrapID);I.insertBefore(k,I.firstChild)}else t.document.getElementById(s.wrapID).appendChild(k);var C=t.document.getElementById(k.id);if(C){var S,B,E=function(){C.classList.add("nx-remove");var o=t.document.getElementById(s.overlayID);o&&w.childElementCount<=0&&o.classList.add("nx-remove"),clearTimeout(S)},z=function(){if(C&&null!==C.parentNode&&C.parentNode.removeChild(C),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var o=t.document.getElementById(s.overlayID);o&&null!==o.parentNode&&o.parentNode.removeChild(o)}clearTimeout(B)};if(o.closeButton&&"function"!=typeof f&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){E();var t=setTimeout((function(){z(),clearTimeout(t)}),o.cssAnimationDuration)})),("function"==typeof f||o.clickToClose)&&C.addEventListener("click",(function(){"function"==typeof f&&f(),E();var t=setTimeout((function(){z(),clearTimeout(t)}),o.cssAnimationDuration)})),!o.closeButton&&"function"!=typeof f){var A=function(){S=setTimeout((function(){E()}),o.timeout),B=setTimeout((function(){z()}),o.timeout+o.cssAnimationDuration)};A(),o.pauseOnHover&&(C.addEventListener("mouseenter",(function(){C.classList.add("nx-paused"),clearTimeout(S),clearTimeout(B)})),C.addEventListener("mouseleave",(function(){C.classList.remove("nx-paused"),A()})))}}if(o.showOnlyTheLastOne&&d>0)for(var T=t.document.querySelectorAll("[id^="+o.ID+"-]:not([id="+o.ID+"-"+d+"])"),W=0;W<T.length;W++){var D=T[W];null!==D.parentNode&&D.parentNode.removeChild(D)}o=c(!0,o,u)},p={Notify:{init:function(e){o=c(!0,s,e),function(o,e){if(!l("head"))return!1;if(null!==o()&&!t.document.getElementById(e)){var i=t.document.createElement("style");i.id=e,i.innerHTML=o(),t.document.head.appendChild(i)}}(m,"NotiflixNotifyInternalCSS")},merge:function(t){if(!o)return r("You have to initialize the Notify module before call Merge function."),!1;o=c(!0,o,t)},success:function(t,o,i){f(e,t,o,i)},failure:function(t,o,e){f(i,t,o,e)},warning:function(t,o,e){f(n,t,o,e)},info:function(t,o,e){f(a,t,o,e)}}};return"object"==typeof t.Notiflix?c(!0,t.Notiflix,{Notify:p.Notify}):{Notify:p.Notify}},"function"==typeof define&&define.amd?define([],(function(){return a(n)})):"object"==typeof r?r=a(n):n.Notiflix=a(n);s=i("2shzp");class l{#t="https://books-backend.p.goit.global/books/";getBookById(t){return console.log(`${this.#t}${t}`),s.default.get(`${this.#t}${t}`)}getTopBooks(){return s.default.get(`${this.#t}top-books`)}getCategoryList(){return s.default.get(`${this.#t}categoty-list`)}getBooksByCategory(t){return s.default.get(`${this.#t}category?category=${t}`)}}const c=document.querySelector(".homepage-books");c.addEventListener("click",(async function(t){t.preventDefault();const{target:o}=t;try{if(!o.classList.contains("js-btn-more"))return;{let t=o.dataset.category.split(" ").join("%20");const{data:e}=await m.getBooksByCategory(t);c.innerHTML=y(e);const{height:i}=c.lastElementChild.getBoundingClientRect();window.scrollBy({top:-i,behavior:"smooth"})}}catch(t){console.error(t),r.Notify.failure("Sorry, there was a server error, please reload the page")}}));const m=new l,d=document.querySelector(".btn-up-scroll");function f(t,o){return`<h2 class="title-theme-book">Best Sellers <span class="last-word-color">Books</span></h2>${t.map((({list_name:t,books:e})=>{const i=`<p class="theme-book">${t}</p>`;if(e.length){return`<div class="best-book-container">${i}<ul class="list-books">${e.splice(0,o).map((({_id:t,book_image:o,title:e,author:i})=>`<li class="item-book" data-id="${t}">\n            <div class="img-owerlay">\n            <img src="${o}" alt="${e}" class="img-book">\n            <div class="owerlay">\n                <p class="owerlay-content">quick view</p>\n            </div>\n            </div>\n            <p class="title-book">${u(e,17)}</p>\n            <p class="author">${u(i,34)}</p>\n            </li>`)).join("")}</ul>\n            <button type="button" class="button-more js-btn-more" data-category="${t}">See more</button></div>`}return'<div class="off-books"><p class="off-books-text">Sorry, there are no books in this category, please choose another category</p></div>'})).join("")}`}async function p(){const t=document.documentElement.scrollWidth;try{const{data:o}=await m.getTopBooks();if(!o.length)return;c.innerHTML=f(o,t<768?1:t<1440&&t>=768?3:5)}catch(t){console.error(t)}}function y(t){if(t.length){const o=t.map((({_id:t,book_image:o,author:e,title:i})=>`<li class="item-book" data-id="${t}">\n        <div class="img-owerlay">\n        <img src="${o}" alt="${i}" class="img-book">\n        <div class="owerlay">\n        <p class="owerlay-content">quick view</p>\n        </div>\n        </div>\n        <p class="title-book">${u(i,17)}</p>\n        <p class="author">${u(e,34)}</p>\n        </li>`)).join("");return`<h2 class="title-theme-book">${function(t){const o=t.split(" ");return`${o.splice(0,o.length-1).join(" ")} <span class="last-word-color">${o.join("")}</span>`}(t[0].list_name)}</h2><ul class="list-books category">${o}</ul>`}return'<div class="off-books">\n        <p class="off-books-text">Sorry, there are no books in this category, please choose another category</p>\n        </div>'}function u(t,o){return t.length>Number(o)?t.slice(0,Number(o))+"...":t}d.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"}),d.classList.add("is-hidden-btn")})),p(),window.addEventListener("scroll",(function(){const t=window.pageYOffset,o=document.documentElement.clientHeight;t>o?d.classList.remove("is-hidden-btn"):d.classList.add("is-hidden-btn")}));const x=document.querySelector(".category-list-box"),g=new l;(async()=>{let t=await async function(){try{return(await s.default.get("https://books-backend.p.goit.global/books/category-list")).data}catch(t){return console.log(t),[]}}();x.innerHTML=function(t){let o='<h3 id="category-list-title" class="category-list-item">All categories</h3>';return t.forEach((t=>{const e=`<p id="${t.list_name}" class="category-list-item">${t.list_name}</p>`;o+=e})),o}(t)})(),x.addEventListener("click",(async function(t){const{target:o}=t;if(!o.classList.contains("category-list-item"))return;{let t=o.id.split(" ").join("%20");if("category-list-title"===t)p();else{const{data:o}=await g.getBooksByCategory(t);c.innerHTML=y(o)}const{height:e}=c.lastElementChild.getBoundingClientRect();window.scrollBy({top:-e,behavior:"smooth"})}})),i("76jN1"),i("8e037");const b=new l;let h;const w=document.querySelector(".homepage-books"),v=document.querySelector(".back"),k=document.querySelector(".btn-modal-close"),N=document.querySelector(".add"),L=document.querySelector(".remove"),I=document.querySelector(".modal-message"),C={scrollPosition:0,disabledScroll(){C.scrollPosition=window.scrollY,document.body.classList.add("block-scroll"),document.body.style.cssText=`top: -${C.scrollPosition}px;`},enabledScroll(){document.body.classList.remove("block-scroll"),document.body.style.cssText="top: 0",window.scroll({top:C.scrollPosition})}};async function S(t){C.disabledScroll(),document.addEventListener("keydown",(t=>{"Escape"===t.key&&B()}),{once:!0});try{const o=await b.getBookById(t),{author:e,book_image:i,description:n,title:a,buy_links:s}=o.data,r=document.querySelector(".book-img"),l=document.querySelector("#name-book"),c=document.querySelector("#author"),m=document.querySelector("#description"),d=document.querySelector("#amazon"),f=document.querySelector("#apple"),p=document.querySelector("#barnes");r.innerHTML="";const y=`<img src="${i}" alt="${i}" class="img-modal">`;l.textContent=a,c.textContent=e,m.textContent=""===n?"No description":n,d.attributes[0].value=s[0].url,f.attributes[0].value=s[1].url,p.attributes[0].value=s[2].url,r.innerHTML=y,v.classList.toggle("is-hidden");const u=localStorage.getItem("orderedBookID"),x=JSON.parse(u);null!==x&&x.includes(t)?(L.classList.remove("is-hidden"),I.classList.remove("is-hidden")):N.classList.remove("is-hidden")}catch(t){console.error(t),Notify.failure("Sorry, there was a server error, please reload the page")}}function B(){C.enabledScroll(),v.classList.toggle("is-hidden"),L.classList.add("is-hidden"),N.classList.add("is-hidden"),I.classList.add("is-hidden")}w.addEventListener("click",(function(t){"img-book"===t.target.classList[0]||"owerlay"===t.target.classList[0]?(h=t.target.parentElement.parentElement.dataset.id,S(h)):"owerlay-content"===t.target.classList[0]?(h=t.target.parentElement.parentElement.parentElement.dataset.id,S(h)):"title-book"!==t.target.classList[0]&&"author"!==t.target.classList[0]||(h=t.target.parentElement.dataset.id,S(h))})),k.addEventListener("click",B),N.addEventListener("click",(function(){N.classList.add("is-hidden"),L.classList.remove("is-hidden"),I.classList.remove("is-hidden");const t=localStorage.getItem("orderedBookID");let o=JSON.parse(t);console.log(o),null===o&&(o=[]);o.push(h),localStorage.setItem("orderedBookID",JSON.stringify(o))})),L.addEventListener("click",(function(){N.classList.remove("is-hidden"),L.classList.add("is-hidden"),I.classList.add("is-hidden");const t=localStorage.getItem("orderedBookID"),o=JSON.parse(t);let e=o.indexOf(h);o.splice(e,1),localStorage.removeItem("orderedBookID"),localStorage.setItem("orderedBookID",JSON.stringify(o))})),i("iNkvP"),i("kU5er");const E=document.querySelector(".js-nav-homelink"),z=document.querySelector(".js-mobile-nav-homelink");E.classList.toggle("selected"),z.classList.toggle("mobile-selected");
//# sourceMappingURL=index.239db9bf.js.map

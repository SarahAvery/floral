parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"gyLR":[function(require,module,exports) {

},{}],"RlUh":[function(require,module,exports) {

},{"./..\\img\\banner-background.jpg":[["banner-background.220a5e3f.jpg","hL7n"],"hL7n"],"./..\\img\\services-cropped.jpg":[["services-cropped.fc70ab37.jpg","a7Tl"],"a7Tl"],"./..\\img\\services-decoration.jpg":[["services-decoration.5ed77fce.jpg","JlSj"],"JlSj"],"./..\\img\\services-floral-design.jpg":[["services-floral-design.e47dbeb0.jpg","IEAQ"],"IEAQ"],"./..\\img\\service-events.jpg":[["service-events.7e014ba3.jpg","QbTP"],"QbTP"],"./..\\img\\events-wedding.jpg":[["events-wedding.775f8198.jpg","x4t3"],"x4t3"],"./..\\img\\events-corp.jpg":[["events-corp.432a0139.jpg","lvvQ"],"lvvQ"],"./..\\img\\events-funeral.jpg":[["events-funeral.7bad9db2.jpg","Jl4I"],"Jl4I"],"./..\\img\\events-hotels.jpg":[["events-hotels.307aa3f9.jpg","eUvK"],"eUvK"],"./..\\img\\events-parties.jpg":[["events-parties.edfa482c.jpg","Y4C4"],"Y4C4"],"./..\\img\\events-media.jpg":[["events-media.f9164387.jpg","Bz5j"],"Bz5j"],"./..\\img\\portfolio-background.png":[["portfolio-background.77b91b84.png","o48J"],"o48J"],"./..\\img\\order-background.jpg":[["order-background.54664079.jpg","laV8"],"laV8"],"./..\\img\\subscribe-1.jpg":[["subscribe-1.42be7085.jpg","bviO"],"bviO"],"./..\\img\\map-grey.png":[["map-grey.b0708715.png","HMb3"],"HMb3"]}],"QvaY":[function(require,module,exports) {
"use strict";require("../resources/css/css-reset.css"),require("../resources/sass/main.scss");var e=document.querySelector("#menu"),s=document.querySelector("#menu-btn"),t=document.querySelector("#mm-button");s.addEventListener("click",function(){e.classList.toggle("open"),e.style.transition="ease in out, 2s"}),t.addEventListener("click",function(){e.classList.toggle("open"),e.style.transition="ease in out, 2s"});var n=1;function c(e){o(n+=e)}function l(e){o(n=e)}function o(e){var s,t=document.getElementsByClassName("mySlides"),c=document.getElementsByClassName("dot");for(e>t.length&&(n=1),e<1&&(n=t.length),s=0;s<t.length;s++)t[s].style.display="none";for(s=0;s<c.length;s++)c[s].className=c[s].className.replace(" active","");t[n-1].style.display="block",c[n-1].className+=" active"}o(n),window.currentSlide=l,window.plusSlides=c;
},{"../resources/css/css-reset.css":"gyLR","../resources/sass/main.scss":"RlUh"}]},{},["QvaY"], null)
//# sourceMappingURL=floral/js.29f4b0ce.js.map
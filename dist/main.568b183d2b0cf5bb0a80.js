!function(e){function t(t){for(var i,s,l=t[0],a=t[1],c=t[2],d=0,h=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&h.push(o[s][0]),o[s]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);for(u&&u(t);h.length;)h.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,l=1;l<n.length;l++){var a=n[l];0!==o[a]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},o={0:0},r=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window.webpackJsonp=window.webpackJsonp||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=a;r.push([16,1]),n()}({16:function(e,t,n){"use strict";n.r(t);n(5),n(6);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menuIcon=document.querySelector(".site-header__menu-icon"),this.menuContent=document.querySelector(".site-header__menu-content"),this.siteHeader=document.querySelector(".site-header"),this.events()}var t,n,o;return t=e,(n=[{key:"events",value:function(){var e=this;this.menuIcon.addEventListener("click",(function(){return e.toggleTheMenu()}))}},{key:"toggleTheMenu",value:function(){this.menuContent.classList.toggle("site-header__menu-content--is-visible"),this.siteHeader.classList.toggle("site-header--is-expanded"),this.menuIcon.classList.toggle("site-header__menu-icon-close-x")}}])&&i(t.prototype,n),o&&i(t,o),e}(),r=n(1),s=n.n(r),l=n(0),a=n.n(l);function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.thresholdPercent=n,this.itemsToReveal=t,this.browserHeight=window.innerHeight,this.hideInitially(),this.scrollThrottle=s()(this.calcCaller,200).bind(this),this.events()}var t,n,i;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",this.scrollThrottle),window.addEventListener("resize",a()((function(){e.browserHeight=window.innerHeight}),333))}},{key:"calcCaller",value:function(){var e=this;this.itemsToReveal.forEach((function(t){0==t.isRevealed&&e.calculateIfScrolledTo(t)}))}},{key:"calculateIfScrolledTo",value:function(e){window.scrollY+this.browserHeight>e.offsetTop&&e.getBoundingClientRect().y/this.browserHeight*100<this.thresholdPercent&&(e.classList.add("reveal-item--is-visible"),e.isRevealed=!0,e.isLastItem&&window.removeEventListener("scroll",this.scrollThrottle))}},{key:"hideInitially",value:function(){this.itemsToReveal.forEach((function(e){e.classList.add("reveal-item"),e.isRevealed=!1})),this.itemsToReveal[this.itemsToReveal.length-1].isLastItem=!0}}])&&c(t.prototype,n),i&&c(t,i),e}();function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.siteHeader=document.querySelector(".site-header"),this.pageSections=document.querySelectorAll(".page-section"),this.browserHeight=window.innerHeight,this.previousScrollY=window.scrollY,this.events()}var t,n,i;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",s()((function(){return e.runOnScroll()}),200)),window.addEventListener("resize",a()((function(){e.browserHeight=window.innerHeight}),333))}},{key:"runOnScroll",value:function(){var e=this;this.determineScrollDirection(),window.scrollY>60?this.siteHeader.classList.add("site-header--dark"):this.siteHeader.classList.remove("site-header--dark"),this.pageSections.forEach((function(t){return e.calcSection(t)}))}},{key:"determineScrollDirection",value:function(){window.scrollY>this.previousScrollY?this.scrollDirection="down":this.scrollDirection="up",this.previousScrollY=window.scrollY}},{key:"calcSection",value:function(e){if(window.scrollY+this.browserHeight>e.offsetTop&&window.scrollY<e.offsetTop+e.offsetHeight){var t=e.getBoundingClientRect().y/this.browserHeight*100;if(t<18&&t>-.1&&"down"==this.scrollDirection||t<33&&"up"==this.scrollDirection){var n=e.getAttribute("data-matching-link");document.querySelectorAll(".primary-nav a:not(".concat(n,")")).forEach((function(e){return e.classList.remove("is-current-link")})),document.querySelector(n).classList.add("is-current-link")}}}}])&&d(t.prototype,n),i&&d(t,i),e}();function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.modal=document.querySelector(".modal"),this.closeIcon=document.querySelector(".modal__close"),this.openModalButtons=document.querySelectorAll(".open-modal"),this.events()}var t,n,i;return t=e,(n=[{key:"events",value:function(){var e=this;this.openModalButtons.forEach((function(t){return t.addEventListener("click",(function(t){return e.openTheModal(t)}))})),this.closeIcon.addEventListener("click",(function(){return e.closeTheModal()})),document.addEventListener("keyup",(function(t){return e.keyPressHandler(t)}))}},{key:"keyPressHandler",value:function(e){27==e.keyCode&&this.closeTheModal()}},{key:"openTheModal",value:function(e){e.preventDefault(),this.modal.classList.add("modal--is-visible")}},{key:"closeTheModal",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n    <div class="modal">\n    <div class="modal__inner">\n      <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>\n      <div class="wrapper wrapper--narrow">\n        <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>\n      </div>\n\n      <div class="social-icons">\n        <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>\n        <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>\n        <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>\n        <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>\n      </div>\n    </div>\n    <div class="modal__close">X</div>\n  </div>\n    ')}}])&&f(t.prototype,n),i&&f(t,i),e}());new h;new u(document.querySelectorAll(".feature-item"),75),new u(document.querySelectorAll(".testimonial"),60);new o},5:function(e,t,n){}});
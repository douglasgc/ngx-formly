(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{"4O5S":function(e,t,n){"use strict";n.r(t),n.d(t,"IonBackButton",function(){return r});var o=n("cBjU"),i=n("XGMM"),r=function(){function e(){}return e.prototype.onClick=function(e){return function(e,t,n,o){return new(n||(n=Promise))(function(t,i){function r(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?t(e.value):new n(function(t){t(e.value)}).then(r,a)}c((o=o.apply(e,[])).next())})}(this,0,void 0,function(){var t;return function(e,t){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(r){return function(c){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=t.call(e,a)}catch(e){r=[6,e],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,c])}}}(this,function(n){return(t=this.el.closest("ion-nav"))&&t.canGoBack()?(e.preventDefault(),t.isAnimating()||t.pop()):this.defaultHref&&Object(i.c)(this.win,this.defaultHref,e,"back"),[2]})})},e.prototype.hostData=function(){var e=!!this.defaultHref;return{class:Object.assign({},Object(i.b)(this.color),{button:!0,"show-back-button":e}),"ion-activable":!0}},e.prototype.render=function(){var e=this,t=this.icon||this.config.get("backButtonIcon","arrow-back"),n=null!=this.text?this.text:this.config.get("backButtonText","Back");return Object(o.b)("button",{type:"button",class:"back-button-native",onClick:function(t){return e.onClick(t)}},Object(o.b)("span",{class:"back-button-inner"},t&&Object(o.b)("ion-icon",{icon:t,lazy:!1}),"ios"===this.mode&&n&&Object(o.b)("span",{class:"button-text"},n),"md"===this.mode&&Object(o.b)("ion-ripple-effect",{tapClick:!0,parent:this.el})))},Object.defineProperty(e,"is",{get:function(){return"ion-back-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},defaultHref:{type:String,attr:"default-href"},el:{elementRef:!0},icon:{type:String,attr:"icon"},mode:{type:String,attr:"mode"},text:{type:String,attr:"text"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:none;color:var(--ion-color-base);pointer-events:all;text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none;--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.show-back-button),:host-context(.can-go-back>ion-header){display:block}.back-button-native{font-family:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;outline:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;margin:0;min-height:32px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background-color:transparent;font-size:17px;line-height:1;overflow:visible;z-index:99}.back-button-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.back-button-text{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.back-button-native.activated{opacity:.4}ion-icon{padding:0;margin:0 -5px 0 -4px;display:inherit;font-size:1.85em;pointer-events:none}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}()}}]);
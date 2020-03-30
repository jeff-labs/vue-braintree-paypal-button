(function(e){function t(t){for(var r,i,u=t[0],c=t[1],l=t[2],s=0,f=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-braintree-paypal-button/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("div",{attrs:{id:"tokengenerator"}},[n("div",{staticClass:"input-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.token,expression:"token"}],attrs:{placeholder:"Insert your Braintree client token here"},domProps:{value:e.token},on:{input:function(t){t.target.composing||(e.token=t.target.value)}}})]),n("div",{staticClass:"input-container"},[n("BraintreePaypalButton",{attrs:{styles:{shape:"rect"},token:e.token,env:e.environment,locale:e.locale},on:{error:e.onError,authorized:e.onAuthorize,canceled:e.onCancel}})],1),n("div",{staticClass:"input-container"},[n("p",[e._v(e._s(e.paymentNonce))])])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Vue Braintree PayPal button")]),n("p",[e._v("Vue component to integrate PayPal payments through Braintree using Vault flow.")])])}],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"braintree-paypal-button"})},u=[],c=n("82eb"),l=n.n(c),p=n("f702"),s=n.n(p),f={name:"BraintreePaypalButton",props:{env:{required:!0,type:String},token:{default:null,type:String},locale:{default:"en_US",type:String},styles:{type:Object,default:function(){return{}}}},watch:{token:function(e){var t=this;l.a.client.create({authorization:e},(function(e,n){e?t.$emit("error",e):l.a.paypalCheckout.create({client:n},(function(e,n){if(e)t.$emit("error",e);else{var r=t.env,o=t.locale,a=t.styles;s.a.Button.render({env:r,locale:o,style:a,payment:function(){return n.createPayment({flow:"vault"})},onAuthorize:function(e){return n.tokenizePayment(e,(function(e,n){e?t.$emit("error",e):t.$emit("authorized",n.nonce)}))},onCancel:function(){t.$emit("canceled")},onError:function(e){t.$emit("error",e)}},t.$el)}}))}))}}},d=f,v=n("2877"),y=Object(v["a"])(d,i,u,!1,null,"08042771",null),m=y.exports,h={name:"app",components:{BraintreePaypalButton:m},data:function(){return{environment:"sandbox",token:null,locale:"es_ES",paymentNonce:""}},methods:{onAuthorize:function(e){this.paymentNonce=e},onCancel:function(){this.paymentNonce="Cancelled"},onError:function(e){this.paymentNonce=e.message}}},b=h,g=(n("034f"),Object(v["a"])(b,o,a,!1,null,null,null)),_=g.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(_)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.decee9b8.js.map
(function(){"use strict";var t={1727:function(t,n,e){var a=e(9242),s=e(3396);function o(t,n,e,a,o,r){const c=(0,s.up)("TheTerminal");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(c)])}var r=e(7139);const c={class:"text-color1"},l=["innerHTML"],i={id:"jShell"},p={class:"cursor",ref:"cursor"};function u(t,n,e,o,u,h){return(0,s.wg)(),(0,s.iD)("div",{class:"terminal",onClick:n[2]||(n[2]=(...t)=>h.textFocus&&h.textFocus(...t))},[(0,s._)("div",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(u.commandOutput,(t=>((0,s.wg)(),(0,s.iD)("p",{innerHTML:t,key:t},null,8,l)))),128))]),(0,s.wy)((0,s._)("textarea",{id:"textarea",ref:"textarea",type:"text","onUpdate:modelValue":n[0]||(n[0]=t=>u.input=t),autofocus:"",onKeyup:n[1]||(n[1]=(0,a.D2)(((...t)=>h.onEnter&&h.onEnter(...t)),["enter"]))},null,544),[[a.nr,u.input]]),(0,s._)("div",i,[(0,s.Uk)((0,r.zw)(u.input),1),(0,s._)("b",p,"█",512)])])}const h=["<span class='text-colorWhite'>JamesonArnett (JA) Not a Corporation. All nights reserved (to coding).</span>","<br>","      _________        ──╔╗──────────────────╔═══╗───────╔╗─╔╗","      |.-----.|        ──║║──────────────────║╔═╗║──────╔╝╚╦╝╚╗","      ||x . x||        ──║╠══╦╗╔╦══╦══╦══╦═╗─║║─║╠═╦═╗╔═╩╗╔╩╗╔╝","      ||_.-._||        ╔╗║║╔╗║╚╝║║═╣══╣╔╗║╔╗╗║╚═╝║╔╣╔╗╣║═╣║─║║","      `--)-(--`        ║╚╝║╔╗║║║║║═╬══║╚╝║║║║║╔═╗║║║║║║║═╣╚╗║╚╗","     __[=== o] ╚══╩╝╚╩╩╩╩══╩══╩══╩╝╚╝╚╝─╚╩╝╚╝╚╩══╩═╝╚═╝","    |:::::::::::||:::::::::::||:::::::::::||:::::::::::|| ","    `-=========-`()~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   ","<br>","<span class='text-color2'>Welcome to my interactive web terminal.</span>  ","<span class='text-color2'>For a list of available commands, type <span class='text-colorHelp'>'help'</span>.</span>"],x=["<br>","<span class='text-color2'>Command not found. Type <span class='text-colorHelp'>'help'</span> for a list of available commands.</span>"],f=["<br>","<span class='text-colorWhite'>Available Commands: </span>",'<span class="text-colorWhite">banner</span> ---\x3e   <span class="text-color2">Display the banner</span>','<span class="text-colorWhite">clear</span> ---\x3e    <span class="text-color2"> Clear the terminal</span>','<span class="text-colorWhite">email</span>    ---\x3e     <span class="text-color2">Wanna Chat?</span>','<span class="text-colorWhite">help</span> ---\x3e     <span class="text-color2">You seem to understand this one</span>','<span class="text-colorWhite">history</span> ---\x3e  <span class="text-color2">Previous Commands Executed</span>','<span class="text-colorWhite">projects</span> ---\x3e <span class="text-color2">My work!</span>','<span class="text-colorWhite">secret</span> ---\x3e   <span class="text-color2">Do you have one too?</span>','<span class="text-colorWhite">social</span>  ---\x3e  <span class="text-color2">Find me online</span>','<span class="text-colorWhite">whoareyou</span> ---\x3e<span class="text-color2"> Who is Jameson</span>','<span class="text-colorWhite">whoami</span> ---\x3e   <span class="text-color2">Who are you</span>',"<br>"],d=["<br>","<span class='text-color2'>Projects:</span>","<br>"],m=["<br>",'<span class="">sudo</span>           Only use if you\'re admin',"<br>"],b=["<br>","<span class='text-color2'>Social Media:</span>","<br>"],v=["<br>","<span class='text-color2'>How the hell am I supposed to know?</span>","<br>"],y=["<br>","<span class='text-color2'>Hey, I'm Jameson</span>","<br>"];var w=e(6265),_=e.n(w);const k=async()=>{const{data:t}=await _().get("https://api.quotable.io/random");let n=[];const e=`"<span>${t.content}</span>  -${t.author}"`;return n.push(e),n},O=(t,n)=>{t.forEach((t=>{n.push(t)}))},W=async(t,n)=>{switch(t){case"banner":O(h,n);break;case"help":O(f,n);break;case"projects":O(d,n);break;case"secret":O(m,n);break;case"social":O(b,n);break;case"tuxsay":n.push(await k());break;case"whoami":O(v,n);break;case"whoareyou":O(y,n);break;default:O(x,n);break}};var g={data(){return{input:"",commandOutput:[]}},methods:{textFocus(){this.$refs.textarea.focus()},cleanInput(){return String(this.input).toLowerCase().trim()},onEnter(){"clear"===this.cleanInput()?this.commandOutput=[]:W(this.cleanInput(),this.commandOutput),this.input=""}},mounted(){W("banner",this.commandOutput)}},j=e(89);const C=(0,j.Z)(g,[["render",u],["__scopeId","data-v-b785af72"]]);var T=C,D={components:{TheTerminal:T}};const H=(0,j.Z)(D,[["render",o]]);var E=H;(0,a.ri)(E).mount("#app")}},n={};function e(a){var s=n[a];if(void 0!==s)return s.exports;var o=n[a]={exports:{}};return t[a](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,a,s,o){if(!a){var r=1/0;for(p=0;p<t.length;p++){a=t[p][0],s=t[p][1],o=t[p][2];for(var c=!0,l=0;l<a.length;l++)(!1&o||r>=o)&&Object.keys(e.O).every((function(t){return e.O[t](a[l])}))?a.splice(l--,1):(c=!1,o<r&&(r=o));if(c){t.splice(p--,1);var i=s();void 0!==i&&(n=i)}}return n}o=o||0;for(var p=t.length;p>0&&t[p-1][2]>o;p--)t[p]=t[p-1];t[p]=[a,s,o]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,a){var s,o,r=a[0],c=a[1],l=a[2],i=0;if(r.some((function(n){return 0!==t[n]}))){for(s in c)e.o(c,s)&&(e.m[s]=c[s]);if(l)var p=l(e)}for(n&&n(a);i<r.length;i++)o=r[i],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(p)},a=self["webpackChunkterminal"]=self["webpackChunkterminal"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(1727)}));a=e.O(a)})();
//# sourceMappingURL=app.2657015c.js.map
(function(){"use strict";var e={5061:function(e,t,n){var a=n(9242),r=n(3396);const s=(0,r.Uk)("Home"),o=(0,r.Uk)(" | "),l=(0,r.Uk)("BankNotes"),i=(0,r.Uk)(" | "),u=(0,r.Uk)("Time Conversion");function c(e,t){const n=(0,r.up)("router-link"),a=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(n,{to:"/"},{default:(0,r.w5)((()=>[s])),_:1}),o,(0,r.Wm)(n,{to:"/banknotes"},{default:(0,r.w5)((()=>[l])),_:1}),i,(0,r.Wm)(n,{to:"/time"},{default:(0,r.w5)((()=>[u])),_:1})]),(0,r.Wm)(a)],64)}var d=n(89);const m={},f=(0,d.Z)(m,[["render",c]]);var p=f,v=n(2483),h=n(7139);const b=e=>((0,r.dD)("data-v-3296d8f7"),e=e(),(0,r.Cn)(),e),g={class:"container"},_=b((()=>(0,r._)("h1",{class:"title"},[(0,r._)("b",null,"Solicitar crédito")],-1))),y={key:0,class:"menu"},k=b((()=>(0,r._)("p",null," Bienvenido, tenemos para ti las mejores opciones para que cumplas tus metas y tus sueños. Actualmente tenemos los siguientes créditos: ",-1))),w=b((()=>(0,r._)("br",null,null,-1))),q=b((()=>(0,r._)("br",null,null,-1))),C={key:1,class:"investment"},A={class:"sub-title"},D=(0,r.Uk)(". Este dinero se te descontará de tu salario mensual. "),$={action:""},I=b((()=>(0,r._)("label",{for:""},"¿Cuánto dinero necesitas?",-1))),j=b((()=>(0,r._)("br",null,null,-1))),T=b((()=>(0,r._)("br",null,null,-1))),E={key:0,class:"error"},F=b((()=>(0,r._)("br",null,null,-1))),O=b((()=>(0,r._)("label",{for:""},"Plazo a pagar (meses)",-1))),P=b((()=>(0,r._)("br",null,null,-1))),U=b((()=>(0,r._)("br",null,null,-1))),x={key:1,class:"error"},R=b((()=>(0,r._)("br",null,null,-1))),S={key:2},z={class:"simulation"},N=b((()=>(0,r._)("h2",{class:"title"},"Simulación de tu solicitud",-1))),L={class:"table-simulate-result",cellspacing:"0",align:"center"},V=b((()=>(0,r._)("tr",null,[(0,r._)("td",{class:"black-label label"},"Interés (EA):"),(0,r._)("td",{class:"gray-label value"},"10%")],-1))),B=b((()=>(0,r._)("td",{class:"black-label label"},[(0,r._)("span",null,"*"),(0,r.Uk)("Manejo aplicación:")],-1))),W={class:"gray-label value"},H=b((()=>(0,r._)("tr",null,[(0,r._)("td",{class:"purple-label label"},"Total a pagar mensual:"),(0,r._)("td",{class:"purple-label value"},"$80000")],-1))),M=b((()=>(0,r._)("tr",null,[(0,r._)("td",{class:"black-label label"},[(0,r._)("span",null,"*"),(0,r.Uk)("Pago primer mes:")]),(0,r._)("td",{class:"gray-label value"},"$104000")],-1))),Z=b((()=>(0,r._)("tr",null,[(0,r._)("td",{class:"black-label label"},"Pago total:"),(0,r._)("td",{class:"gray-label value"},"$1750000")],-1))),Y=b((()=>(0,r._)("tr",null,[(0,r._)("td",{class:"black-label label"},"Pago intereses:"),(0,r._)("td",{class:"gray-label value"},"$50000")],-1))),K=b((()=>(0,r._)("p",null,[(0,r._)("span",null,"*"),(0,r.Uk)("El valor del manejo de la aplicación se incluye en el primer pago, para mayor información haz "),(0,r._)("a",{class:"green-label",target:"_blank",href:"https://finewapp.com/terminos-condiciones"},"clic acá"),(0,r.Uk)(".")],-1))),G=b((()=>(0,r._)("button",{class:"btn btn-primary"},"Solicitar",-1))),J=b((()=>(0,r._)("br",null,null,-1))),Q=b((()=>(0,r._)("div",{class:"greet"},null,-1)));function X(e,t,n,s,o,l){return(0,r.wg)(),(0,r.iD)("div",g,[_,o.data.menu?((0,r.wg)(),(0,r.iD)("div",y,[k,(0,r._)("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=(...e)=>l.freeInvestment&&l.freeInvestment(...e))},"Libre Inversión"),w,q,(0,r._)("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=(...e)=>l.moneyAdvance&&l.moneyAdvance(...e))},"Adelanta tu nómina")])):(0,r.kq)("",!0),o.data.freeIn?((0,r.wg)(),(0,r.iD)("div",C,[(0,r._)("h2",A,(0,h.zw)(o.data.subTitle),1),(0,r._)("p",null,[(0,r.Uk)(" Puedes "+(0,h.zw)(o.data.request)+" para cumplir tus metas. Tienes pre aprobado un cupo de ",1),(0,r._)("b",null,"$"+(0,h.zw)(o.data.maxAmount),1),D]),(0,r._)("form",$,[I,j,(0,r.wy)((0,r._)("input",{type:"number",id:"",class:"input","onUpdate:modelValue":t[2]||(t[2]=e=>s.state.moneyRequested=e)},null,512),[[a.nr,s.state.moneyRequested]]),T,s.v$.moneyRequested.$error?((0,r.wg)(),(0,r.iD)("span",E,(0,h.zw)(s.v$.moneyRequested.$errors[0].$message),1)):(0,r.kq)("",!0),F,O,P,(0,r.wy)((0,r._)("input",{type:"number",id:"",class:"input","onUpdate:modelValue":t[3]||(t[3]=e=>s.state.termRequested=e)},null,512),[[a.nr,s.state.termRequested]]),U,s.v$.termRequested.$error?((0,r.wg)(),(0,r.iD)("span",x,(0,h.zw)(s.v$.termRequested.$errors[0].$message),1)):(0,r.kq)("",!0),R,(0,r._)("button",{type:"button",class:"btn btn-primary",onClick:t[4]||(t[4]=(...e)=>l.submitForm&&l.submitForm(...e))},"Estimar")])])):(0,r.kq)("",!0),o.data.estimate?((0,r.wg)(),(0,r.iD)("div",S,[(0,r._)("div",z,[N,(0,r._)("table",L,[V,(0,r._)("tr",null,[B,(0,r._)("td",W,[(0,r._)("b",null,"$"+(0,h.zw)(o.data.serviceFee),1)])]),H,M,Z,Y])]),K,G,J])):(0,r.kq)("",!0),Q])}var ee=n(6265),te=n.n(ee);const ne=te().create({baseURL:"https://my-json-server.typicode.com/queturotre/cremedi",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});var ae={getCredits(){return ne.get("/credits")}},re=n(3053),se=n(9117),oe=n(4870),le={name:"HomeView",setup(){const e=(0,oe.qj)({moneyRequested:"",termRequested:""}),t=(0,r.Fl)((()=>({moneyRequested:{required:se.C1,maxValue:(0,se.PW)(17e5),minValue:(0,se.uv)(5e5)},termRequested:{required:se.C1,maxValue:(0,se.PW)(48),minValue:(0,se.uv)(12)}}))),n=(0,re.ZP)(t,e);return{state:e,v$:n}},data(){return{freeInvestmentData:[],moneyAdvanceData:[],data:{menu:!0,freeIn:!1,estimate:!1,subtitle:"",request:"",maxAmount:0,serviceFee:0}}},created(){ae.getCredits().then((e=>{this.freeInvestmentData=e.data[0],this.moneyAdvanceData=e.data[1]})).catch((e=>{console.log(e)}))},methods:{submitForm(){this.v$.$validate(),this.v$.$error?console.log("Form failed"+this.v$):(this.data.estimate=!0,console.log("Form submitted"+this.v$))},freeInvestment(){this.data.menu=!1,this.data.freeIn=!0,this.data.request="pedir el crédito de libre inversión",this.data.subTitle=this.freeInvestmentData.creditName,this.data.maxAmount=this.freeInvestmentData.maxAmount,this.data.serviceFee=this.freeInvestmentData.serviceFee},moneyAdvance(){this.data.menu=!1,this.data.freeIn=!0,this.data.subTitle=this.moneyAdvanceData.creditName,this.data.request="adelantar tu nómina",this.data.maxAmount=this.moneyAdvanceData.maxAmount,this.data.serviceFee=this.moneyAdvanceData.serviceFee}}};const ie=(0,d.Z)(le,[["render",X],["__scopeId","data-v-3296d8f7"]]);var ue=ie;const ce=e=>((0,r.dD)("data-v-594c3c66"),e=e(),(0,r.Cn)(),e),de=ce((()=>(0,r._)("h1",{class:"titulo"},"Time Conversion",-1))),me=ce((()=>(0,r._)("p",null,[(0,r.Uk)("Read an integer value, which is the duration in seconds of a certain event and inform it expressed in "),(0,r._)("b",null,"hours:minutes:seconds.")],-1))),fe=ce((()=>(0,r._)("h3",null,"Development",-1))),pe=ce((()=>(0,r._)("input",{type:"number",id:"segundos",placeholder:"Seconds"},null,-1))),ve=ce((()=>(0,r._)("br",null,null,-1))),he={key:0,class:"show"};function be(e,t,n,a,s,o){return(0,r.wg)(),(0,r.iD)(r.HY,null,[de,me,fe,pe,(0,r._)("button",{onClick:t[0]||(t[0]=(...e)=>o.calcular&&o.calcular(...e))},"Submit"),ve,s.show?((0,r.wg)(),(0,r.iD)("span",he,(0,h.zw)(s.horas)+"h "+(0,h.zw)(s.minutos)+"m "+(0,h.zw)(s.numero)+"s",1)):(0,r.kq)("",!0)],64)}var ge={name:"TimeConversion",data(){return{numero:0,segundos:0,horas:0,minutos:0,show:!1}},methods:{calcular(){this.segundos=document.getElementById("segundos"),this.numero=parseInt(this.segundos.value),this.horas=parseInt(this.numero/3600),this.numero-=3600*this.horas,this.minutos=parseInt(this.numero/60),this.numero-=60*this.minutos,this.show=!0}}};const _e=(0,d.Z)(ge,[["render",be],["__scopeId","data-v-594c3c66"]]);var ye=_e;const ke=[{path:"/",name:"home",component:ue},{path:"/banknotes",name:"banknotes",component:()=>n.e(443).then(n.bind(n,2332))},{path:"/time",name:"time",component:ye}],we=(0,v.p7)({history:(0,v.PO)("/"),routes:ke});var qe=we,Ce=n(65),Ae=(0,Ce.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});n(5654);(0,a.ri)(p).use(Ae).use(qe).mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,s){if(!a){var o=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],s=e[c][2];for(var l=!0,i=0;i<a.length;i++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[i])}))?a.splice(i--,1):(l=!1,s<o&&(o=s));if(l){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[a,r,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.61180858.js"}}(),function(){n.miniCssF=function(e){return"css/about.9129802d.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="cremedi:";n.l=function(a,r,s,o){if(e[a])e[a].push(r);else{var l,i;if(void 0!==s)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+s){l=d;break}}l||(i=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+s),l.src=a),e[a]=[r];var m=function(t,n){l.onerror=l.onload=null,clearTimeout(f);var r=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),i&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=function(s){if(r.onerror=r.onload=null,"load"===s.type)n();else{var o=s&&("load"===s.type?"missing":s.type),l=s&&s.target&&s.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=o,i.request=l,r.parentNode.removeChild(r),a(i)}};return r.onerror=r.onload=s,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===e||s===t))return r}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){r=o[a],s=r.getAttribute("data-href");if(s===e||s===t)return r}},a=function(a){return new Promise((function(r,s){var o=n.miniCssF(a),l=n.p+o;if(t(o,l))return r();e(a,l,r,s)}))},r={143:0};n.f.miniCss=function(e,t){var n={443:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=a(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var s=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=s);var o=n.p+n.u(t),l=new Error,i=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",l.name="ChunkLoadError",l.type=s,l.request=o,r[1](l)}};n.l(o,i,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,s,o=a[0],l=a[1],i=a[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(i)var c=i(n)}for(t&&t(a);u<o.length;u++)s=o[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},a=self["webpackChunkcremedi"]=self["webpackChunkcremedi"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(5061)}));a=n.O(a)})();
//# sourceMappingURL=app.32806ae2.js.map
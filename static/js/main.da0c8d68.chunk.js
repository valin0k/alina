(this.webpackJsonpmath=this.webpackJsonpmath||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(4),r=a.n(l),s=(a(11),a(1));a(12);function u(e,t,a){return"+"===a?e+t:e-t}var i=function(e){var t=e.val1,a=e.val2,l=e.sign,r=e.showAnswer,i=e.onGetResult,m=e.onFillField,o=e.index,b=Object(n.useState)(""),v=Object(s.a)(b,2),d=v[0],E=v[1];Object(n.useEffect)((function(){r&&i(d&&u(t,a,l)===Number(d))}),[r]);var f=r&&d&&u(t,a,l)===Number(d);return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"values"},c.a.createElement("div",{className:"val"},t),c.a.createElement("div",{className:"+"===l?"plus_sign":"minus_sign"},l),c.a.createElement("div",{className:"val"},a),c.a.createElement("div",{className:"equal_sign"},"=")),r&&d?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"yourAnswer"},d,c.a.createElement("span",{className:"rightAnswer"},f?null:" ("+u(t,a,l)+") ")),c.a.createElement("div",{className:"answer "+(f?"answerTrue":"answerFalse")},f?"\u2713":"\u2716\ufe0f")):c.a.createElement("input",{maxLength:2,value:d,className:"input",disabled:r,onChange:function(e){var t=e.target.value;isNaN(t)||(E(t.trim()),m(!!t.trim().length,o))}}))};var m=function(e){var t=e.stop,a=Object(n.useState)(Date.now()),l=Object(s.a)(a,2),r=l[0],u=(l[1],Object(n.useState)(0)),i=Object(s.a)(u,2),m=i[0],o=i[1];return Object(n.useEffect)((function(){t&&o(Date.now)}),[t]),c.a.createElement("div",null,m&&t?function(e){var t=Math.floor(e/6e4),a=e-6e4*t;return"\u0422\u044b \u0441\u043f\u0440\u0430\u0432\u0438\u043b\u0430\u0441\u044c \u0437\u0430: "+t+" \u043c\u0438\u043d. "+Math.floor(a/1e3)+" \u0441\u0435\u043a."}(m-r):null)},o=a(2),b=a(5);a(13);function v(e,t){var a=e-.5+Math.random()*(t-e+1);return Math.round(a)}function d(e,t,a){return Array(e).fill(1).map((function(e,n){var c,l,r=Math.random()>.5?"+":"-";if(c=v(t,a),l=v(t,a),"+"===r){for(;c+l>a;)c=v(t,a),l=v(t,a);return{sign:r,val1:c,val2:l,key:Math.random(),index:n}}return{sign:r,val1:c>l?c:l,val2:c>l?l:c,key:Math.random(),index:n}}))}var E=["\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u044e \u0410\u043b\u0438\u043d\u0430!!! \u0422\u044b \u0431\u043e\u043b\u044c\u0448\u0430\u044f \u0443\u043c\u043d\u0438\u0447\u043a\u0430! \ud83c\udf89 \u041d\u0438 \u043e\u0434\u043d\u043e\u0439 \u043e\u0448\u0438\u0431\u043a\u0438 :)","\u0423\u0440\u0430\u0430\u0430!!! \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e! \ud83d\ude04 \u041d\u0430\u0443\u0447\u0438\u0448\u044c \u043c\u0435\u043d\u044f?","\u0422\u044b \u0442\u0430\u043a\u0430\u044f \u043c\u043e\u043b\u043e\u0434\u0435\u0446! \u041b\u0435\u0433\u043a\u043e \u0441\u043f\u0440\u0430\u0432\u0438\u043b\u0430\u0441\u044c \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0437\u0430\u0434\u0430\u0447\u043a\u0430\u043c\u0438, \u0434\u0430\u0432\u0430\u0439 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u043c"],f=(d(15,1,19),0),N=0;function j(e){var t=e.count,a=e.min,l=e.max,r=Object(n.useState)(d(t,a,l)),u=Object(s.a)(r,2),j=u[0],O=(u[1],Object(n.useState)(0)),p=Object(s.a)(O,2),h=p[0],g=p[1],w=Object(n.useState)(0),S=Object(s.a)(w,2),k=S[0],_=S[1],x=Object(n.useState)(!1),A=Object(s.a)(x,2),M=A[0],y=A[1],F=Object(n.useState)({}),C=Object(s.a)(F,2),I=C[0],T=C[1],B=function(e){e?(++f,g(f)):(++N,_(N))},D=function(e,t){T(Object(b.a)({},I,Object(o.a)({},t,e)))},G=Object.values(I).filter(Boolean).length===t;return c.a.createElement("div",{className:"form"},j.map((function(e){return c.a.createElement(i,Object.assign({},e,{showAnswer:M,onGetResult:B,checkAnswers:!1,key:e.key,onFillField:D}))})),c.a.createElement(m,{stop:M}),M?c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement("div",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u044b: ",c.a.createElement("span",{className:"rightText"},h)),Number(k)?c.a.createElement("div",null,"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u044b: ",c.a.createElement("span",{className:"wrongText"},k)):null,Number(k)?null:c.a.createElement("div",null,E[v(0,2)])):c.a.createElement("button",{className:"submit_btn"+(G?" start_btn":" disabled_btn"),disabled:!G,onClick:function(){return y(!0)}},"\u0413\u043e\u0442\u043e\u0432\u043e!"))}a(14);var O=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),u=Object(s.a)(r,2),i=u[0],m=u[1],o=Object(n.useState)(!1),b=Object(s.a)(o,2),v=b[0],d=b[1];return Object(n.useEffect)((function(){v&&d(!1)}),[v]),v?c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"})):c.a.createElement("div",{className:"App"},i?c.a.createElement("div",{className:"container"},c.a.createElement(j,{count:Number(a)||8,min:1,max:19}),c.a.createElement("button",{className:"submit_btn reset_btn",onClick:function(){return d(!0)}},"\u0417\u0430\u043d\u043e\u0432\u043e")):c.a.createElement("div",{className:"greeting"},c.a.createElement("h2",{className:"alina"},"\u041f\u0440\u0438\u0432\u0435\u0442, \u0410\u043b\u0438\u043d\u0430!"),c.a.createElement("div",{className:"fieldItem"},c.a.createElement("div",{className:"label"},"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432 \u0431\u0443\u0434\u0435\u043c \u0440\u0435\u0448\u0430\u0442\u044c?"),c.a.createElement("input",{placeholder:"\u041a\u0430\u043a \u043d\u0430\u0441\u0447\u0435\u0442 8?",className:"roundInput",onChange:function(e){var t=e.target.value;isNaN(t)||l(t.trim())},value:a})),c.a.createElement("button",{className:"submit_btn start_btn",onClick:function(){return m(!0)}},"\u041d\u0430\u0447\u0430\u0442\u044c")))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.da0c8d68.chunk.js.map
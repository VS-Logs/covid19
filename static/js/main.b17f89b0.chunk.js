(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,a,n){e.exports=n(12)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),s=n(3),r=n.n(s),l=(n(9),n(1));n(10),n(11);var c=function(e){var a,n=Object(t.useState)({selectionClass:"box"}),s=Object(l.a)(n,2),r=s[0],c=s[1];function o(a){c({selectionClass:"box answer-selected",selectionOption:a.target.value}),a.persist(),setTimeout((function(){a.target.checked=!1,e.changeQuestionHandler(a.target.value)}),1e3),setTimeout((function(){c({selectionClass:"box"})}),2e3)}if(void 0!==e.children){var m="hidden";a="result"}else a="hidden-display";return i.a.createElement("div",{className:r.selectionClass},i.a.createElement("img",{src:"corona.png",alt:"corona",className:"corona-bottom-right"}),i.a.createElement("div",{className:a},"Thanks for participating in the quiz.",i.a.createElement("br",null),"Your score is ",e.children," out of 10"),i.a.createElement("div",{className:m},i.a.createElement("h3",{className:"no-top-padding-margin"},e.question.quest),i.a.createElement("div",{className:"margin-10"},i.a.createElement("div",{className:"align-v-middle w-50 inline-block"},i.a.createElement("input",{type:"radio",name:"answer",value:"a",onChange:o})),i.a.createElement("div",{className:"align-v-middle w-rest inline-block"},e.question.a)),i.a.createElement("div",{className:"margin-10"},i.a.createElement("div",{className:"align-v-middle w-50 inline-block"},i.a.createElement("input",{type:"radio",name:"answer",value:"b",onChange:o})),i.a.createElement("div",{className:"align-v-middle w-rest inline-block"},e.question.b)),i.a.createElement("div",{className:"margin-10"},i.a.createElement("div",{className:"align-v-middle w-50 inline-block"},i.a.createElement("input",{type:"radio",name:"answer",value:"c",onChange:o})),i.a.createElement("div",{className:"align-v-middle w-rest inline-block"},e.question.c)),i.a.createElement("div",{className:"margin-10"},i.a.createElement("div",{className:"align-v-middle w-50 inline-block"},i.a.createElement("input",{type:"radio",name:"answer",value:"d",onChange:o})),i.a.createElement("div",{className:"align-v-middle w-rest inline-block"},e.question.d))))};var o=function(){var e,a=[{quest:"1. Where did the first COVID-19 outbreak happen?",a:"New York, USA",b:"Wuhan, China",c:"Shanghai, China",d:"Beijing, China"},{quest:"2. When did WHO declare COVID-19 as pandemic?",a:"17 Mar 2020",b:"16 Mar 2020",c:"11 Mar 2020",d:"9 Mar 2020"},{quest:"3. What is the incubation period for COVID-19?",a:"2-14 days",b:"1-10 days",c:"5-15 days",d:"0-15 days"},{quest:"4. What is the minimum distance to be maintained in public places in between 2 people?",a:"5 ft",b:"3 ft",c:"6 ft",d:"4 ft"},{quest:"5. Which are the modes of transmission?",a:"Air",b:"Different surfaces",c:"Both A and B",d:"Water"},{quest:"6. How long does the virus stay in air?",a:"2 hrs",b:"5 hrs",c:"4 hrs",d:"3 hrs"},{quest:"7. What are the clinical features observed in COVID-19 patients?",a:"Dry Cough, Fever, Shortness of breath",b:"Pain in abdomen, vomitting, diarrhea",c:"Fever, vomitting, fatigue",d:"Fever, cold, cough"},{quest:"8. What is helpline number to report about COVID-19 symptoms given by Government of India?",a:"1075 / +91-11-23978046",b:"1075 / +91-11-2197707",c:"1075 / +91-11-2309009",d:"1075 / +91-11-23458791"},{quest:"9. Which is the recommended mask for COVID-19?",a:"Surgical mask",b:"FFP1 mask",c:"N95 mask",d:"Cloth mask"},{quest:"10. What are preventive measures suggested for COVID-19?",a:"HANDS-Wash them often, ELBOW-Cough into it, FACE -Don't touch it",b:"SPACE-Keep safe distance, HOME-Stay if you can",c:"All of the above",d:"None of the above"}],n=[175667596,-658731874,-1296971367,1642744,516595227,48156476,769360365,-174111288,-901403294,1745453111],s=Object(t.useState)({id:0,answers:[]}),r=Object(l.a)(s,2),o=r[0],m=r[1];return o.answers.length===n.length&&(e=o.answers.filter((function(e,t){return n[t]===function(e){var a,n,t=0;for(a=0;a<e.length;a++)n=e.charCodeAt(a),t=(t<<5)-t+n,t|=0;return t}(a[t][e])})).length),i.a.createElement("div",{className:"App"},i.a.createElement("h2",{className:"header"},"Welcome to COVID-19 quiz ",i.a.createElement("br",null),"#QuarantineGames"),i.a.createElement(c,{question:a[o.id],changeQuestionHandler:function(e){o.answers.push(e),o.id!==n.length-1?m({id:o.id+1,answers:o.answers}):m({id:o.id,answers:o.answers})}},e),i.a.createElement("img",{src:"virus.png",alt:"virus",className:"virus1"}),i.a.createElement("img",{src:"virus.png",alt:"virus",className:"virus2"}),i.a.createElement("img",{src:"virus.png",alt:"virus",className:"virus3"}),i.a.createElement("div",{className:"bottom-right-fixed"},"Developed in React",i.a.createElement("br",null),"by ",i.a.createElement("a",{href:"https://www.linkedin.com/in/sadananadpai/",target:"_blank",rel:"noopener noreferrer"},"Sadanand Akshay Pai")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(o,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.b17f89b0.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(56)},31:function(e,t,a){},32:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),i=a.n(l),c=(a(31),a(19)),s=a(20),u=a(24),o=a(21),m=a(25),h=(a(32),a(58)),d=a(59),f=a(8),E=a.n(f),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={length:0,num_file:1,query:"",resumes:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"numHandler",value:function(e){this.setState({num_file:e.target.value})}},{key:"searchHandler",value:function(e){var t=this;return this.setState({query:e.target.value}),this.setState({num_file:1}),E.a.get("https://cs410resumeranker.herokuapp.com/api/ranking/"+e.target.value).then(function(e){t.setState({length:e.data.length})}).catch(function(e){console.log(e)})}},{key:"buttonHandler",value:function(e){var t=this,a=this.state.query;return a||this.setState({resumes:[]}),E.a.get("https://cs410resumeranker.herokuapp.com/api/ranking/"+a).then(function(e){var a=e.data.slice(0,t.state.num_file);t.setState({resumes:a})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.resumes.map(function(t,a){if(0!=e.state.length)return r.a.createElement("tr",null,r.a.createElement("td",null,a+1),r.a.createElement("td",null,t.first),r.a.createElement("td",null,t.last),r.a.createElement("td",null,r.a.createElement("a",{href:"https://cs410resumeranker.herokuapp.com/api/file/"+t.link,target:"_blank"},t.link)))});return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"fas fa-portrait"})),r.a.createElement("h1",null,"Resume Ranker"),r.a.createElement("h2",null,"CS410 final project by: Peng Gu, Jiawen Wu, Jinlin Xu, Yujie Shao, Kehan Li")),r.a.createElement("div",{id:"search"},r.a.createElement("div",{id:"bar"},r.a.createElement("input",{id:"s_bar",onChange:this.searchHandler.bind(this),placeholder:"Enter the keyword here first"})),r.a.createElement("div",{id:"form_div"},r.a.createElement(h.a,null,r.a.createElement(h.a.Group,{controlId:"formName"},r.a.createElement(h.a.Label,null,"How many resumes would you like to see?"),r.a.createElement("select",{className:"browser-default custom-select",onChange:function(t){return e.numHandler(t)}},Array.from({length:this.state.length}).map(function(e,t){return r.a.createElement("option",{key:t+1},t+1)})))),r.a.createElement(d.a,{id:"myBtn",onClick:this.buttonHandler.bind(this)},"Search"))),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Ranking"),r.a.createElement("th",null,"First name"),r.a.createElement("th",null,"Last name"),r.a.createElement("th",null,"Resume")),t),function(){if(0==e.state.length)return r.a.createElement("h1",{id:"message"},"No resume available")}())}}]),t}(n.Component);a(54),a(55),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.383412e0.chunk.js.map
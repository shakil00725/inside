(this.webpackJsonpinside=this.webpackJsonpinside||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l),c=(a(92),a(93),a(28)),s=a(29),o=a(33),u=a(32),d=a(54),m=a(78),h=a(150),p=a(156),f=a(157),E=a(120),w=a(57),g=a.n(w),v=a(3),k=a(162),y=a(152),b=a(166),x=a(154),C=a(155),S=a(73),j=a.n(S),O=a(119),B=a(163),N=a(49),P=a(58),q=a.n(P),L=a(7),W=Object(h.a)((function(e){return{list:{width:250},fullList:{width:"auto"},wrapper:{background:"#f7f7f7",height:"300px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},input:{marginLeft:e.spacing(3),background:"white",height:"50px",width:"50%",borderRadius:"5px",margin:"5px",boxShadow:"1px .5px 4px "},inputField:{paddingLeft:e.spacing(2),fontSize:"1rem"},iconButton:{padding:e.spacing(1),marginLeft:e.spacing(.5)}}})),A=function(e){var t=e.singlePage,a=e.handleSearchWord,n=e.searchButtonClicked,l=e.value,i=W(),c=r.a.useState({left:!1}),s=Object(m.a)(c,2),o=s[0],u=s[1],h=function(e,t){return function(a){u(Object(d.a)({},e,t))}},w=function(e){return r.a.createElement("div",{className:Object(v.a)(i.list,Object(d.a)({},i.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:h(e,!1),onKeyDown:h(e,!1)},r.a.createElement(y.a,null,r.a.createElement(b.a,{button:!0,key:"Home",onClick:function(){return r.a.createElement(L.a,{push:!0,to:"/articles"})}},r.a.createElement(x.a,null,r.a.createElement(j.a,null)),r.a.createElement(C.a,{primary:"Home"}))))},S=t,P=l;return r.a.createElement("div",null,S?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{color:"inherit",position:"static"},r.a.createElement(f.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{onClick:h("left",!0),edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(g.a,null)),r.a.createElement(k.a,{anchor:"left",open:o.left,onClose:h("left",!1)},w("left"))))),r.a.createElement(O.a,{className:i.wrapper,square:!0,elevation:0},r.a.createElement(N.a,{color:"primary",variant:"h4",component:"h2"},"How can we help you?"),r.a.createElement("div",{style:{width:"100%",marginTop:"20px"}},r.a.createElement(B.a,{onChange:a,className:i.input,inputProps:{"aria-label":"id no.",className:i.inputField},placeholder:"Search"}),r.a.createElement(E.a,{className:i.iconButton,"aria-label":"search",onClick:n},r.a.createElement(q.a,null))))):r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{color:"inherit",position:"static"},r.a.createElement(f.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{onClick:h("left",!0),edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(g.a,null)),r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(B.a,{value:P,onChange:a,className:i.input,inputProps:{"aria-label":"id no.",className:i.inputField},placeholder:"Search"}),r.a.createElement(E.a,{className:i.iconButton,"aria-label":"search",onClick:n},r.a.createElement(q.a,null))),r.a.createElement(k.a,{anchor:"left",open:o.left,onClose:h("left",!1)},w("left")))))))},F=a(164),D=a(158),R=a(159),I=a(74),H=a.n(I),M=[1,2,3,4],Q=Object(h.a)((function(e){return{root:{marginTop:"50px",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},wrapper:{width:"50%"}}})),J=function(){var e=Q();return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.wrapper},M.map((function(t){return r.a.createElement("div",{key:t},r.a.createElement(F.a,null,r.a.createElement(D.a,{expandIcon:r.a.createElement(H.a,{color:"primary"}),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(N.a,{className:e.heading},"Expansion Panel 1")),r.a.createElement(R.a,null,r.a.createElement(N.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))))}))))},T=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={keywords:"",redirect:!1},e.handleSearchWord=function(t){var a=t.target.value;e.setState({keywords:a})},e.searchButtonClicked=function(){e.state.keywords.length>0&&e.setState({redirect:!0})},e}return Object(s.a)(a,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(L.a,{push:!0,to:{pathname:"/inside/articles",state:{keywords:this.state.keywords}}}):r.a.createElement("div",null,r.a.createElement(A,{singlePage:!0,handleSearchWord:this.handleSearchWord,searchButtonClicked:this.searchButtonClicked}),r.a.createElement(J,null))}}]),a}(r.a.Component),z=a(59),K=a.n(z),$=a(75),G=a(160),U=a(76),V=a.n(U),X=a(165),Y=a(161),Z=Object(h.a)((function(e){return{wrapper:{display:"flex",width:"50%",flexDirection:"column",margin:"10px auto 10px auto"}}})),_=function(e){var t=e.results,a=e.detailsPageClicked,n=e.answers,l=Z();return r.a.createElement("div",{className:l.wrapper},r.a.createElement(y.a,null,t.map((function(e,l){return r.a.createElement("div",{key:l,onClick:function(){return a(t[l],n[l])}},r.a.createElement(b.a,null,r.a.createElement(G.a,null,r.a.createElement(X.a,null,r.a.createElement(V.a,null))),r.a.createElement(C.a,null,e)),r.a.createElement(Y.a,{variant:"inset",component:"li"}))}))))},ee=a(77),te=a.n(ee),ae=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={keywords:"",searchResults:[],isLoading:!1,detailsPage:!1,questionList:[],answerList:[],selectedAnswer:"",selectedQuestion:""},e.handleSearchWord=function(t){var a=t.target.value;e.setState({keywords:a})},e.searchButtonClicked=function(){var t=e.state.keywords;t.length>0&&e.getResults(t)},e.detailsPageClicked=function(t,a){e.setState({detailsPage:!0,selectedAnswer:a,selectedQuestion:t})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.location.state.keywords;this.getResults(e),this.setState({keywords:e})}},{key:"render",value:function(){return this.state.detailsPage?r.a.createElement(L.a,{push:!0,to:{pathname:"/inside/details",state:{keywords:this.state.keywords,question:this.state.selectedQuestion,answer:this.state.selectedAnswer}}}):r.a.createElement("div",null,r.a.createElement(A,{singlePage:!1,handleSearchWord:this.handleSearchWord,searchButtonClicked:this.searchButtonClicked,value:this.state.keywords}),r.a.createElement(_,{results:this.state.questionList,answers:this.state.answerList,detailsPageClicked:this.detailsPageClicked}))}},{key:"getResults",value:function(){var e=Object($.a)(K.a.mark((function e(t){var a,n,r,l;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.a.get("http://127.0.0.1:5000/");case 3:return a=e.sent,e.next=6,a.data;case 6:n=e.sent,r=n.answers,l=n.query,this.setState({questionList:l,answerList:r}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()}]),a}(r.a.Component),ne=Object(h.a)((function(e){return{wrapper:{width:"60%",margin:"10px auto"}}})),re=function(e){var t=e.question,a=e.answer,n=ne();return r.a.createElement(O.a,{className:n.wrapper,variant:"outlined",square:!0},r.a.createElement(N.a,{style:{margin:"10px"},align:"left",variant:"h6",component:"h2"},t),r.a.createElement(Y.a,{variant:"fullWidth",component:"nav"}),r.a.createElement(N.a,{style:{margin:"10px"},align:"left",variant:"body2",component:"h2"},a))},le=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={keywords:"",redirect:!1,answer:"",question:""},e.handleSearchWord=function(t){var a=t.target.value;e.setState({keywords:a})},e.searchButtonClicked=function(){var t=e.state.keywords;t.length>0&&(console.log("details",t),e.setState({keywords:t,redirect:!0}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.location.state,t=e.keywords,a=e.question,n=e.answer;this.setState({keywords:t,question:a,answer:n})}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(L.a,{to:{pathname:"/inside/articles",state:{keywords:this.state.keywords}}}):r.a.createElement("div",null,r.a.createElement(A,{singlePage:!1,handleSearchWord:this.handleSearchWord,searchButtonClicked:this.searchButtonClicked,value:this.state.keywords}),r.a.createElement(re,{question:this.state.question,answer:this.state.answer}))}}]),a}(r.a.Component),ie=a(27);var ce=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ie.a,null,r.a.createElement(L.d,null,r.a.createElement(L.b,{path:"/inside/",exact:!0,component:T}),r.a.createElement(L.b,{path:"/inside/articles",component:ae}),r.a.createElement(L.b,{path:"/inside/details",component:le}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,t,a){e.exports=a(118)},92:function(e,t,a){},93:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.0a957db7.chunk.js.map
(this.webpackJsonpinside=this.webpackJsonpinside||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),s=a.n(l),i=(a(94),a(95),a(28)),o=a(29),c=a(33),u=a(32),d=a(55),m=a(80),h=a(154),p=a(160),f=a(161),y=a(122),g=a(56),E=a.n(g),w=a(3),k=a(168),v=a(156),b=a(173),x=a(158),C=a(159),S=a(75),j=a.n(S),P=a(169),B=a(48),O=a(57),L=a.n(O),K=a(58),W=a.n(K),q=a(162),I=Object(h.a)((function(e){return{list:{width:250},fullList:{width:"auto"},wrapper:{margin:"10px",background:"#f7f7f7",height:"300px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},input:{background:"white",height:"45px",width:"75%",margin:"7px",borderRadius:"7px",paddingLeft:"40px",boxShadow:"1px .5px 4px "},inputField:{paddingLeft:e.spacing(1),fontSize:".9rem"},iconButton:{padding:e.spacing(1),marginLeft:e.spacing(.5)},leftIcon:{width:"1px",display:"relative",right:"-40px",top:"1px",zIndex:"1"},rightIcon:{width:"1px",display:"relative",left:"-40px",top:"1px",zIndex:"2"}}})),N=function(e){var t=e.handleKeyPress,a=e.homeButton,n=e.singlePage,l=e.handleSearchWord,s=e.searchButtonClicked,i=e.value,o=I(),c=r.a.useState({left:!1}),u=Object(m.a)(c,2),h=u[0],g=u[1],S=function(e,t){return function(a){g(Object(d.a)({},e,t))}},O=function(e){return r.a.createElement("div",{className:Object(w.a)(o.list,Object(d.a)({},o.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:S(e,!1),onKeyDown:S(e,!1)},r.a.createElement(v.a,null,r.a.createElement(b.a,{button:!0,key:"Home",onClick:a},r.a.createElement(x.a,null,r.a.createElement(j.a,null)),r.a.createElement(C.a,{primary:"Home"}))))},K=n,N=i;return r.a.createElement("div",null,K?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{color:"inherit",position:"static"},r.a.createElement(f.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{onClick:S("left",!0),edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(E.a,null)),r.a.createElement(k.a,{anchor:"left",open:h.left,onClose:S("left",!1)},O("left"))))),r.a.createElement("div",{className:o.wrapper},r.a.createElement(q.a,{container:!0,justify:"center"},r.a.createElement(q.a,{item:!0,md:9,xs:12},r.a.createElement(B.a,{style:{marginBottom:"20px"},color:"primary",variant:"h6",component:"h2"},"How can we help you?")),r.a.createElement(q.a,{item:!0,md:9,xs:12},r.a.createElement("div",{style:{}},r.a.createElement(y.a,{className:o.leftIcon,"aria-label":"search",onClick:s},r.a.createElement(L.a,null)),r.a.createElement(P.a,{onKeyPress:t,onChange:l,className:o.input,inputProps:{"aria-label":"id no.",className:o.inputField},placeholder:"Describe your issue.."}),r.a.createElement(y.a,{disabled:!0,className:o.rightIcon,"aria-label":"search"},N?r.a.createElement(W.a,null):"")))))):r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{color:"inherit",position:"static"},r.a.createElement(f.a,null,r.a.createElement(q.a,{container:!0,justify:"flex-start"},r.a.createElement(q.a,{item:!0,md:1,xs:1},r.a.createElement(y.a,{onClick:S("left",!0),edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(E.a,null))),r.a.createElement(q.a,{item:!0,md:8,xs:11},r.a.createElement(y.a,{className:o.leftIcon,"aria-label":"search",onClick:s},r.a.createElement(L.a,null)),r.a.createElement(P.a,{onKeyPress:t,value:N,onChange:l,className:o.input,inputProps:{"aria-label":"id no.",className:o.inputField},placeholder:"Describe your issue.."}),r.a.createElement(y.a,{disabled:!0,className:o.rightIcon,"aria-label":"search"},N?r.a.createElement(W.a,null):"")),r.a.createElement(k.a,{anchor:"left",open:h.left,onClose:S("left",!1)},O("left")))))))},A=a(170),D=a(163),F=a(164),R=a(76),z=a.n(R),H=[1,2,3,4],M=Object(h.a)((function(e){return{root:{marginTop:"50px",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},wrapper:{width:"50%"}}})),Q=function(){var e=M();return r.a.createElement(q.a,{container:!0,justify:"center"},r.a.createElement(q.a,{item:!0,md:8,lg:8,sm:11,xs:11},H.map((function(t){return r.a.createElement("div",{key:t},r.a.createElement(A.a,{style:{marginBottom:"8px",border:".5px solid grey"}},r.a.createElement(D.a,{expandIcon:r.a.createElement(z.a,{color:"primary"}),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(B.a,{className:e.heading},"Expansion Panel 1")),r.a.createElement(F.a,{style:{background:" #dbe8f7 "}},r.a.createElement(B.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))))}))))},T=a(7),J=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={keywords:"",redirect:!1},e.handleSearchWord=function(t){var a=t.target.value;e.setState({keywords:a})},e.searchButtonClicked=function(){e.state.keywords.length>0&&e.setState({redirect:!0})},e.handleKeyPress=function(t){if("Enter"===t.key){var a=e.state.keywords;a.length>0&&e.setState({redirect:!0}),console.log(a)}},e.homeButton=function(){e.props.history.push("/inside/")},e}return Object(o.a)(a,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(T.a,{push:!0,to:{pathname:"/inside/articles",state:{keywords:this.state.keywords}}}):r.a.createElement("div",null,r.a.createElement(N,{handleKeyPress:this.handleKeyPress,value:this.state.keywords,homeButton:this.homeButton,singlePage:!0,handleSearchWord:this.handleSearchWord,searchButtonClicked:this.searchButtonClicked}),r.a.createElement(Q,null))}}]),a}(r.a.Component),$=a(61),G=a.n($),U=a(77),V=a(165),X=a(78),Y=a.n(X),Z=a(171),_=a(166),ee=function(e){var t=e.keywords,a=e.results,n=e.detailsPageClicked,l=e.answers;return r.a.createElement(q.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(q.a,{item:!0,lg:8,xs:11},r.a.createElement(B.a,{style:{marginTop:"20px"},align:"left",variant:"body2",component:"h2"},'Search results for " ',t,' ", ',a.length," results found,")),r.a.createElement(q.a,{item:!0,lg:8,xs:11},r.a.createElement(v.a,null,a.map((function(e,t){return r.a.createElement("div",{key:t,onClick:function(){return n(a[t],l[t])}},r.a.createElement(b.a,null,r.a.createElement(V.a,null,r.a.createElement(Z.a,null,r.a.createElement(Y.a,null))),r.a.createElement(C.a,{primary:e,secondary:l[t].substring(0,150)+".."})),r.a.createElement(_.a,{variant:"inset",component:"li"}))})))))},te=a(79),ae=a.n(te),ne=a(167),re=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={keywords:"",searchResults:[],isLoading:!1,detailsPage:!1,questionList:[],answerList:[],selectedAnswer:"",selectedQuestion:""},e.handleSearchWord=function(t){var a=t.target.value;e.setState({keywords:a,isLoading:!1})},e.searchButtonClicked=function(){var t=e.state.keywords;t.length>0&&e.getResults(t)},e.detailsPageClicked=function(t,a){e.setState({detailsPage:!0,selectedAnswer:a,selectedQuestion:t})},e.handleKeyPress=function(t){if("Enter"===t.key){var a=e.state.keywords;a.length>0&&e.getResults(a),console.log(a)}},e.homeButton=function(){e.props.history.push("/inside/")},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.location.state.keywords;this.getResults(e),this.setState({keywords:e})}},{key:"render",value:function(){return this.state.detailsPage?r.a.createElement(T.a,{push:!0,to:{pathname:"/inside/details",state:{question:this.state.selectedQuestion,answer:this.state.selectedAnswer}}}):r.a.createElement("div",null,r.a.createElement(N,{handleKeyPress:this.handleKeyPress,homeButton:this.homeButton,singlePage:!1,handleSearchWord:this.handleSearchWord,searchButtonClicked:this.searchButtonClicked,value:this.state.keywords}),this.state.isLoading?r.a.createElement(ee,{keywords:this.state.keywords,results:this.state.questionList,answers:this.state.answerList,detailsPageClicked:this.detailsPageClicked}):r.a.createElement("div",{style:{width:"50%",margin:"20px auto"}},r.a.createElement(ne.a,null),r.a.createElement(ne.a,null),r.a.createElement(ne.a,null)))}},{key:"getResults",value:function(){var e=Object(U.a)(G.a.mark((function e(t){var a,n,r,l;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.a.post("https://insidemapssearch.herokuapp.com/getAll",{key:t});case 3:a=e.sent,n=a.data,r=n.answers?n.answers:[],l=n.query?n.query:[],this.setState({questionList:l,answerList:r,isLoading:!0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()}]),a}(r.a.Component),le=a(121),se=function(e){var t=e.question,a=e.answer;return r.a.createElement(q.a,{container:!0,justify:"center"},r.a.createElement(q.a,{item:!0,lg:8,xs:11},r.a.createElement(le.a,{style:{marginTop:"20px"},variant:"outlined",elevation:3},r.a.createElement(B.a,{style:{margin:"10px"},align:"left",variant:"h6",component:"h2"},t),r.a.createElement(_.a,{variant:"fullWidth",component:"nav"}),r.a.createElement(B.a,{style:{margin:"10px"},align:"left",variant:"body2",component:"h2"},a))))},ie=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={keywords:"",redirect:!1,answer:"",question:""},e.handleSearchWord=function(t){var a=t.target.value;e.setState({keywords:a})},e.searchButtonClicked=function(){var t=e.state.keywords;t.length>0&&(console.log("details",t),e.setState({keywords:t,redirect:!0}))},e.handleKeyPress=function(t){if("Enter"===t.key){var a=e.state.keywords;a.length>0&&(console.log("details",a),e.setState({keywords:a,redirect:!0})),console.log(a)}},e.homeButton=function(){e.props.history.push("/inside/")},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.location.state,t=e.question,a=e.answer;this.setState({question:t,answer:a})}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(T.a,{to:{pathname:"/inside/articles",state:{keywords:this.state.keywords}}}):r.a.createElement("div",null,r.a.createElement(N,{handleKeyPress:this.handleKeyPress,homeButton:this.homeButton,singlePage:!1,handleSearchWord:this.handleSearchWord,searchButtonClicked:this.searchButtonClicked,value:this.state.keywords}),r.a.createElement(se,{question:this.state.question,answer:this.state.answer}))}}]),a}(r.a.Component),oe=a(37);var ce=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(oe.a,null,r.a.createElement(T.d,null,r.a.createElement(T.b,{path:"/inside/",exact:!0,component:J}),r.a.createElement(T.b,{path:"/inside/articles",component:re}),r.a.createElement(T.b,{path:"/inside/details",component:ie}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,t,a){e.exports=a(120)},94:function(e,t,a){},95:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.e8e81da9.chunk.js.map
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{113:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),l=n.n(o),i=(n(81),n(13)),c=n(14),s=n(16),u=n(15),d=n(17),m=n(73),h=n(18),p=n(10),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement("center",null,r.a.createElement("h1",null," Klips "),"A cross-platform clipboard",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"What do you want to do?")," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.a,{variant:"outline-primary",size:"lg",style:{display:"block",width:"80%",height:80,maxWidth:500,margin:20},onClick:function(){return e.props.history.push("/sender")}},"Send"),r.a.createElement(p.a,{variant:"outline-danger",size:"lg",style:{display:"block",width:"80%",height:80,maxWidth:500,margin:20},onClick:function(){return e.props.history.push("/board")}},"Receive")))}}]),t}(a.Component),b=n(71),y=n(27),g=n(41),w=n.n(g),E=(n(113),n(72)),v=n.n(E);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={index:0,messages:["Text will appear here","Text will appear here"],code:""},n.urlify=function(e){return e.replace(/(https?:\/\/[^\s]+)/g,(function(e){return'&nbsp;<a href="'+e+'" target="_blank">'+e+"</a>&nbsp;"}))},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("/api/id/issue").then((function(t){e.setState({code:t.data.id});var n=window.location,a="ws://";"https:"==n.protocol&&(a="wss://");var r=a+n.host+"/ws/board/"+t.data.id+"/";e.ws=new WebSocket(r),e.ws.onopen=function(){console.log("connected")},e.ws.onmessage=function(t){var n=JSON.parse(t.data).message;n=e.urlify(n);var a=e.state.messages;a[(e.state.index+1)%2]=n,e.setState({index:(e.state.index+1)%2,messages:a})},e.ws.onclose=function(){console.log("disconnected");var n=window.location,a="ws://";"https:"==n.protocol&&(a="wss://");var r=a+n.host+"/ws/board/"+t.data.id+"/";e.setState({ws:new WebSocket(r)})}})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"simple-trans-main"},r.a.createElement(y.Transition,{native:!0,items:0===this.state.index,from:{opacity:1,transform:"translate3d(0,100%,0)"},enter:{opacity:1,transform:"translate3d(0,0%,0)"},leave:{opacity:1,transform:"translate3d(0,-100%,0)"}},(function(t){return t&&function(t){return r.a.createElement(y.animated.div,{style:j({},t,{background:"lightpink"})},w()(e.state.messages[0]))}})),r.a.createElement(y.Transition,{native:!0,items:1===this.state.index,from:{opacity:1,transform:"translate3d(0,100%,0)"},enter:{opacity:1,transform:"translate3d(0,0%,0)"},leave:{opacity:1,transform:"translate3d(0,-100%,0)"}},(function(t){return t&&function(t){return r.a.createElement(y.animated.div,{style:j({},t,{background:"lightblue"})},w()(e.state.messages[1]))}}))),r.a.createElement("div",{className:"floating"},r.a.createElement("center",null,r.a.createElement("div",{className:"floating-label"}," ",r.a.createElement("b",null,"Board Id")," "),r.a.createElement("div",{className:"floating-value"}," ",""==this.state.code?r.a.createElement("img",{src:"https://i.imgur.com/MQkFKEt.gif",alt:"oops!"}):this.state.code," "))),r.a.createElement(p.a,{variant:"outline-secondary",size:"lg",onClick:function(){return e.props.history.push("/")},style:{position:"absolute",height:60,width:60,top:10,left:10,borderRadius:50}},"<"))}}]),t}(a.Component),x=n(45),S=n(44),C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={boardId:"",show:!0},n.ws=null,n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=function(t){var n=document.getElementById("text");e.ws.send(JSON.stringify({message:n.value})),n.value=""},n=function(t){var n=document.getElementById("board_id").value,a=window.location,r="ws://";"https:"==a.protocol&&(r="wss://");var o=r+a.host+"/ws/board/"+n+"/";e.ws=new WebSocket(o),e.ws.onopen=function(){console.log("connected"),e.setState({boardId:n})},e.ws.onmessage=function(e){var t=JSON.parse(e.data);console.log(t)},e.ws.onclose=function(){console.log("disconnected"),e.setState({boardId:""})}};return""===this.state.boardId?r.a.createElement("div",{style:{fontSize:30,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement("center",null,"You need to connect to the receiver.",r.a.createElement("br",null),"In order to do this, you will require the board Id.",r.a.createElement("br",null),"You can find the board Id on the receiver.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(x.a.Control,{size:"lg",type:"text",id:"board_id",placeholder:"Board ID",style:{width:"100%",maxWidth:400},onKeyDown:function(e){"Enter"===e.key&&n()}}),r.a.createElement(p.a,{variant:"primary",size:"lg",onClick:n,style:{marginTop:20,width:"100%",maxWidth:400}},"Connect"),r.a.createElement(p.a,{variant:"outline-primary",size:"lg",onClick:function(){return e.props.history.push("/")},style:{position:"absolute",height:60,width:60,top:10,left:10,borderRadius:50}},"<"))):r.a.createElement("div",{style:{fontSize:30,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(S.a,{onClose:function(){return e.setState({show:!1})},style:{position:"absolute",top:20},show:this.state.show,delay:3e3,autohide:!0},r.a.createElement(S.a.Body,null,"Connected to board #",r.a.createElement("b",null,this.state.boardId))),r.a.createElement("center",null,"Send text to board #",r.a.createElement("b",null,this.state.boardId),r.a.createElement("br",null),r.a.createElement("small",null,"or ",r.a.createElement("a",{onClick:function(){return e.setState({boardId:""})},className:"reconnect"},"reconnect")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(x.a.Control,{size:"lg",as:"textarea",type:"textarea",id:"text",placeholder:"Text goes here",style:{width:"1000 !important",height:"50%",maxHeight:600,maxWidth:1e3},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),t())},rows:"5"}),r.a.createElement(p.a,{variant:"primary",size:"lg",onClick:t,style:{marginTop:20,width:"30%",maxWidth:400,marginLeft:230}},"Send"),r.a.createElement(p.a,{variant:"outline-primary",size:"lg",onClick:function(){return e.setState({boardId:""})},style:{position:"absolute",height:60,width:60,top:10,left:10,borderRadius:50}},"<")))}}]),t}(a.Component),I=function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("h2",null," Not Found "),r.a.createElement("p",null," The page you're looking for does not exists. ")))},W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:f}),r.a.createElement(h.a,{exact:!0,path:"/board",component:k}),r.a.createElement(h.a,{exact:!0,path:"/sender",component:C}),r.a.createElement(h.a,{exact:!0,component:I})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},76:function(e,t,n){e.exports=n(148)},81:function(e,t,n){},94:function(e,t){},96:function(e,t){}},[[76,1,2]]]);
//# sourceMappingURL=main.62fb1e62.chunk.js.map
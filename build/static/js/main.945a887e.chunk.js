(this["webpackJsonptw-react-v1"]=this["webpackJsonptw-react-v1"]||[]).push([[0],{20:function(e,t,i){},33:function(e,t,i){"use strict";i.r(t);var c=i(0),n=i(1),r=i.n(n),a=i(8),s=i.n(a),l=(i(20),i(4)),o=i(5),u=i(7),j=i(6),d=i.p+"static/media/image1.5259cb1c.jpg",h=i.p+"static/media/image2.5259cb1c.jpg",f=i(9),p=i(14),y=i.n(p),b=(i(32),function(e){Object(u.a)(i,e);var t=Object(j.a)(i);function i(e){var c;return Object(l.a)(this,i),(c=t.call(this,e)).state={flickityReady:!1},c.refreshFlickity=c.refreshFlickity.bind(Object(f.a)(c)),c}return Object(o.a)(i,[{key:"componentDidMount",value:function(){this.flickity=new y.a(this.flickityNode,this.props.options||{}),this.setState({flickityReady:!0})}},{key:"refreshFlickity",value:function(){this.flickity.reloadCells(),this.flickity.resize(),this.flickity.updateDraggable()}},{key:"componentWillUnmount",value:function(){this.flickity.destroy()}},{key:"componentDidUpdate",value:function(e,t){var i=!t.flickityReady&&this.state.flickityReady,c=e.children.length!==this.props.children.length;(i||c)&&this.refreshFlickity()}},{key:"renderPortal",value:function(){if(!this.flickityNode)return null;var e=this.flickityNode.querySelector(".flickity-slider");return e?s.a.createPortal(this.props.children,e):void 0}},{key:"render",value:function(){var e=this;return[Object(c.jsx)("div",{className:"test",ref:function(t){return e.flickityNode=t}},"flickityBase"),this.renderPortal()].filter(Boolean)}}]),i}(r.a.Component)),x=[d,h],O=function(e){Object(u.a)(i,e);var t=Object(j.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{display:"flex",justifyContent:"space-between"}}),Object(c.jsx)(b,{options:{autoPlay:4e3,pauseAutoPlayOnHover:!0,wrapAround:!0,fullscreen:!0,adaptiveHeight:!0},children:x.map((function(e,t){return Object(c.jsx)("div",{style:{width:"100%",height:"700px",margin:"0 0.5em"},children:Object(c.jsx)("img",{src:e,alt:""})},t)}))})]})}}]),i}(n.Component),m=function(e){Object(u.a)(i,e);var t=Object(j.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("nav",{className:"bg-blue-300 h-auto flex center flex-col",children:[Object(c.jsx)("div",{className:"justify-centre m-auto",children:Object(c.jsx)("h1",{className:"text-2xl p-5",children:"Ramsden Fitness"})}),Object(c.jsxs)("ul",{className:"flex w-1/2 justify-between justify-centre m-auto flex-wrap mb-3",children:[Object(c.jsx)("li",{className:"text-1xl uppercase",children:"Home"}),Object(c.jsx)("li",{className:"text-1xl uppercase",children:"About"}),Object(c.jsx)("li",{className:"text-1xl uppercase",children:"Our Work"}),Object(c.jsx)("li",{className:"text-1xl uppercase",children:"Contact"})]})]})})}}]),i}(r.a.Component);var k=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(m,{}),Object(c.jsx)(O,{})]})};s.a.render(Object(c.jsx)(k,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.945a887e.chunk.js.map
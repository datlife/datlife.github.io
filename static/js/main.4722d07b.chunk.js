(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(50)},25:function(e,t,a){},27:function(e,t,a){},31:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),i=a.n(c),s=a(2),o=a(3),l=a(5),u=a(4),m=a(6),p=(a(25),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"header repsonsive-container"},r.a.createElement("div",{className:"header__logo"},r.a.createElement("h3",{className:"brand"},r.a.createElement("a",{href:"/"},r.a.createElement("span",{className:"brand--main"},"Dat | "),r.a.createElement("span",{className:"brand--sub"},"Engineering")))),r.a.createElement("nav",{className:"header__nav-bar"},r.a.createElement("a",{href:"/blog"},"Blog"),r.a.createElement("a",{href:"/projects"},"Projects"),r.a.createElement("a",{href:"/about"},"About")))}}]),t}(n.Component)),h=(a(27),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"quote"},'"Where is a will, there is a way"'))}}]),t}(n.Component)),f=a(52),d=a(53),v=a(54),b=a(10),j=a.n(b),O=a(11),E=(a(31),a(18)),g=a(16),_=a.n(g),y=new(function(){function e(){Object(s.a)(this,e)}return Object(o.a)(e,[{key:"get",value:function(){var e=Object(O.a)(j.a.mark(function e(t,a){var n,r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=_.a.stringify(Object(E.a)({},a,{client_id:"ghost-frontend",client_secret:"ec2e9f4fefe0"})),e.next=3,fetch("".concat("https://blog.dat.works/ghost/api/v0.1","/").concat(t,"?").concat(n));case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"getPage",value:function(){var e=Object(O.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("posts",{page:t,limit:3,absolute_urls:!0,filter:"author_id:1",fields:"slug,id,title,feature_image,custom_excerpt,published_at"});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getPost",value:function(){var e=Object(O.a)(j.a.mark(function e(t){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("posts/slug/".concat(t,"/"),{absolute_urls:!0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}()),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={loading:!0,post:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(O.a)(j.a.mark(function e(){var t,a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.props.location.pathname.split("/")[2],e.next=4,y.getPost(t);case 4:a=e.sent,this.setState({loading:!1,post:a.posts[0]}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"createHTML",value:function(){return{__html:this.state.post.html}}},{key:"render",value:function(){var e=this.state.post;return this.state.loading?"Loading Page":r.a.createElement("div",{className:"article repsonsive-container"},r.a.createElement("div",{className:"article__feature_img"},r.a.createElement("img",{src:e.feature_image,alt:"feature",className:"img-fluid"})),r.a.createElement("h1",{className:"article__headline"},e.title),r.a.createElement("span",{className:"article__meta"},r.a.createElement("div",{className:"article__meta--author"},"Dat Nguyen"),r.a.createElement("div",{className:"article__meta--date"},e.published_at.split("T")[0])),r.a.createElement("div",{className:"article__body"},r.a.createElement("div",{dangerouslySetInnerHTML:this.createHTML()})))}}]),t}(r.a.Component),N=(a(35),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"home repsonsive-container",id:"home"},r.a.createElement("h1",{class:"cover-heading"}),r.a.createElement("p",{class:"lead"},"Hi, I am currently a Computer Science Student @ UC Davis."),r.a.createElement("a",{href:"resume.pdf",class:"btn btn-lg btn-secondary"},"Resume"))}}]),t}(r.a.Component)),k=a(51),x=(a(37),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"formatDate",value:function(e){return Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(e)}},{key:"renderOneOverview",value:function(e){return r.a.createElement("div",{className:"overview",key:e.slug},r.a.createElement("div",{className:"overview__date"},this.formatDate(e.published_date)),r.a.createElement("div",{className:"overview__description"},r.a.createElement(k.a,{to:"/blog/".concat(e.slug),className:"overview__description--link"},r.a.createElement("h2",{className:"overview__description--title"},e.title)),r.a.createElement("p",{className:"overview__description--excerpt"},e.custom_excerpt)),r.a.createElement("div",{className:"overview__feature_image"},r.a.createElement(k.a,{to:"/blog/".concat(e.slug),className:"overview__description--link"},r.a.createElement("img",{src:e.feature_image,alt:"featured"}))))}},{key:"render",value:function(){var e=this,t=this.props.articles;return r.a.createElement("div",{className:"articles-list"},r.a.createElement("h1",{className:"articles-list__title"},"Blog"),t.map(function(t){return e.renderOneOverview(t)}))}}]),t}(r.a.Component)),C=(a(41),n.Component,a(43),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"project container"},"Under construction")}}]),t}(n.Component)),D=(a(45),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about container"},"Under construction")}}]),t}(r.a.Component)),P=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(d.a,null,r.a.createElement(v.a,{exact:!0,path:"/",component:N}),r.a.createElement(v.a,{path:"/blog/:slug",component:w}),r.a.createElement(v.a,{path:"/projects",component:C}),r.a.createElement(v.a,{path:"/about",component:D})))}}]),t}(r.a.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(P,null),r.a.createElement(h,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(48);i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.4722d07b.chunk.js.map
(this["webpackJsonpspacex-app"]=this["webpackJsonpspacex-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.d5ab31ce.svg"},,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(80)},,,,,function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){var n={"./earth.mp4":48,"./mars.mp4":49,"./moon.mp4":50,"./space.mp4":51};function c(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=r,e.exports=c,c.id=47},function(e,t,a){e.exports=a.p+"static/media/earth.6160d272.mp4"},function(e,t,a){e.exports=a.p+"static/media/mars.50a0c445.mp4"},function(e,t,a){e.exports=a.p+"static/media/moon.c576729b.mp4"},function(e,t,a){e.exports=a.p+"static/media/space.7a69e904.mp4"},,,,,,,,,,,,,function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){var n={"./falcon-1.png":74,"./falcon-9.png":75,"./falcon-heavy.png":76,"./starship.png":77};function c(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=r,e.exports=c,c.id=73},function(e,t,a){e.exports=a.p+"static/media/falcon-1.4e43f38e.png"},function(e,t,a){e.exports=a.p+"static/media/falcon-9.70c0d6ca.png"},function(e,t,a){e.exports=a.p+"static/media/falcon-heavy.c1e42c98.png"},function(e,t,a){e.exports=a.p+"static/media/starship.9502c370.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),l=a.n(r),s=a(13),m=a(24),o=a(32),i=a(30),u=a(7),p=a(1),E=a(10),d=a.n(E),f=(a(38),function(e){return c.a.createElement("header",{className:"header"},c.a.createElement(u.b,{to:"/"},c.a.createElement("img",{src:d.a,alt:"Logo Space X",className:"logo"})),c.a.createElement("nav",{className:"main-nav nav"},c.a.createElement("ul",{className:"list"},e.rockets.map((function(t,a){return c.a.createElement("li",{key:a,className:"item"},c.a.createElement(u.b,{to:"/rocket",onClick:function(){e.changeRocket(t)},className:"item-link"},t))})))),c.a.createElement("nav",{className:"secondary-nav"},c.a.createElement("ul",{className:"list"},c.a.createElement("li",{className:"item"},c.a.createElement(u.c,{exact:!0,to:"/",activeClassName:"active",className:"item-link"},"Home")),c.a.createElement("li",{className:"item"},c.a.createElement(u.c,{to:"/calendar",activeClassName:"active",className:"item-link"},"Calendar")))))}),h=(a(43),function(e){var t=e.company;return c.a.createElement("main",{className:"main"},c.a.createElement("div",{className:"container"},c.a.createElement("hgroup",{className:"title"},c.a.createElement("h1",null,c.a.createElement("img",{className:"logo-title",src:d.a,alt:t.name})),c.a.createElement("h2",{className:"subtitle"},t.summary)),c.a.createElement("div",{className:"row"},c.a.createElement("table",{className:"home_table home_table-manager"},c.a.createElement("caption",{className:"home_table-title"},"Manager"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"CEO"),c.a.createElement("td",{className:"home_table-column"},t.ceo)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"COO"),c.a.createElement("td",{className:"home_table-column"},t.coo)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"CTO"),c.a.createElement("td",{className:"home_table-column"},t.cto)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"CTO PROPULSION"),c.a.createElement("td",{className:"home_table-column"},t.cto_propulsion)))),c.a.createElement("table",{className:"home_table home_table-location"},c.a.createElement("caption",{className:"home_table-title"},"Location"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"State"),c.a.createElement("td",{className:"home_table-column"},t.headquarters.state)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"City"),c.a.createElement("td",{className:"home_table-column"},t.headquarters.city)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"Address"),c.a.createElement("td",{className:"home_table-column"},t.headquarters.address)))),c.a.createElement("video",{id:"video",autoPlay:!0,loop:!0,muted:!0,className:"responsive-video",width:"100%",height:"100%",preload:"auto"},c.a.createElement("source",{type:"video/mp4",src:"https://www.spacex.com/media/mission_reusability.mp4"}),c.a.createElement("source",{type:"video/webm",src:"https://www.spacex.com/media/mission_reusability.webm"})))))}),N=(a(44),a(31)),b=a(15),v=a(8),k=a.n(v),g=a(12),y=function e(){var t=this;Object(s.a)(this,e),this.startUrl="https://api.spacexdata.com/v4/",this.getResource=function(){var e=Object(g.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 ".concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getRocket=Object(g.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(t.startUrl+"rockets");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getLaunches=Object(g.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(t.startUrl+"launches/past");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getCompany=Object(g.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(t.startUrl+"company");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},w=new y,O=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){w.getLaunches().then((function(e){return c((function(t){return Object(N.a)(e)}))}))}),[]);return{data:a,getLaunch:function(e){return a.find((function(t){return t.id===e}))}}},_=(a(46),{"Falcon 1":"moon","Falcon 9":"earth","Falcon Heavy":"mars",other:"space"}),x=function(e){var t=e.rocket,n=e.name;return c.a.createElement("section",{className:"main"},c.a.createElement("h1",{className:"title"},n||t),t&&c.a.createElement("div",{className:"video-container"},c.a.createElement("video",{className:"video",autoPlay:!0,loop:!0,muted:!0,src:a(47)("./".concat(_.hasOwnProperty(t)?_[t]:_.other,".mp4"))})))},j=function(){var e=O().data;return c.a.createElement(c.a.Fragment,null,c.a.createElement(x,{name:"Calendar SpaceX"}),c.a.createElement("section",{className:"calendar"},c.a.createElement("div",{className:"container"},c.a.createElement("ul",{className:"calendar-list"},e.map((function(e){return c.a.createElement("li",{className:"calendar-item",key:e.id},c.a.createElement("article",{className:"launches"},c.a.createElement("div",{className:"launches-image"},c.a.createElement("img",{src:e.links.patch.small,alt:""})),c.a.createElement("div",{className:"launches-content"},c.a.createElement("h2",{className:"launches-title"},e.name),c.a.createElement(u.b,{to:"/details/".concat(e.id),className:"button launches-details"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))))}))))))},C=a(26),F=(a(64),function(e){var t=Object(n.useState)(null),a=Object(b.a)(t,2),r=a[0],l=a[1],s=O().getLaunch;Object(n.useEffect)((function(){l(s(e.match.params.id))}),[s]),console.log(r);var m=Object(p.e)();return r?c.a.createElement(c.a.Fragment,null,c.a.createElement(x,{name:r.name}),c.a.createElement("main",{className:"details"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"details-row"},c.a.createElement("div",{className:"details-image"},c.a.createElement("img",{src:r.links.patch.small,alt:r.name})),c.a.createElement("div",{className:"details-content"},c.a.createElement("p",{className:"details-description"},r.details))),c.a.createElement(C.a,{className:"details-youtube",videoId:r.links.youtube_id})),c.a.createElement("a",{onClick:m.goBack,to:"calendar",className:"button button-back"},"go back"))):null}),S=a(29),R=a.n(S),D=(a(72),{"Falcon 1":"falcon-1","Falcon 9":"falcon-9","Falcon Heavy":"falcon-heavy",Starship:"starship"}),L=function(e){var t=e.name,n=e.height,r=e.diameter,l=e.mass,s=e.payload_weights,m=e.description;return c.a.createElement(c.a.Fragment,null,c.a.createElement(x,{rocket:t}),c.a.createElement("section",{className:"features"},c.a.createElement("h2",{className:"features-title"},t," ",c.a.createElement("br",null),"Overview"),c.a.createElement("div",{className:"overview"},c.a.createElement("table",{className:"table"},c.a.createElement("caption",{className:"table-title"},"Size"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"table-column"},"HEIGHT"),c.a.createElement("td",{className:"table-column"},n.meters," m / ",n.feet," ft")),c.a.createElement("tr",null,c.a.createElement("td",{className:"table-column"},"DIAMETER"),c.a.createElement("td",{className:"table-column"},r.meters," m / ",r.feet)),c.a.createElement("tr",null,c.a.createElement("td",{className:"table-column"},"MASS"),c.a.createElement("td",{className:"table-column"},l.kg," kg / ",l.lb," lb")),s.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",{className:"table-column"},"PAYLOAD TO ",e.id.toUpperCase()),c.a.createElement("td",{className:"table-column"},e.kg," kg / ",e.lb," lb"))})))),c.a.createElement(R.a,{speed:10},c.a.createElement("img",{src:a(73)("./".concat(D[t],".png")),alt:"rocket",className:"rocket"})),c.a.createElement("article",null,c.a.createElement("h3",{className:"features-subtitle"},"DESCRIPTION"),c.a.createElement("p",{className:"features-text"},m)))))},T=(a(78),function(e){var t=e.elon_twitter,a=e.flickr,n=e.twitter,r=e.website;return c.a.createElement("footer",{className:"footer"},c.a.createElement("img",{src:d.a,alt:"logo Space X",className:"logo"}),c.a.createElement("nav",{className:"footer-nav"},c.a.createElement("ul",{className:"list"},c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:t,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Elon Musk Twitter")),c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:n,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Twitter")),c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:a,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Flickr")),c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:r,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Website")))),c.a.createElement("p",{className:"footer-text"},"For additional questions, contact",c.a.createElement("a",{className:"footer-link",href:"mailto:rideshare@spacex.com"},"rideshare@spacex.com")))}),U=(a(79),function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).fetchData=new y,e.state={rocket:"Falcon 1",rocketFeatures:null,rockets:[],company:null},e.changeRocket=function(t){e.setState({rocket:t},e.updateRocket)},e.udpateCompany=function(){e.fetchData.getCompany().then((function(t){return e.setState({company:t})}))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.updateRocket(),this.udpateCompany()}},{key:"updateRocket",value:function(){var e=this;this.fetchData.getRocket().then((function(t){return e.setState({rockets:t.map((function(e){return e.name}))}),t})).then((function(t){return t.find((function(t){return t.name===e.state.rocket}))})).then((function(t){e.setState({rocketFeatures:t})}))}},{key:"render",value:function(){var e=this;return c.a.createElement(u.a,null,c.a.createElement(f,{rockets:this.state.rockets,changeRocket:this.changeRocket}),c.a.createElement(p.a,{exact:!0,path:"/",render:function(){return e.state.company&&c.a.createElement(h,{company:e.state.company})}}),c.a.createElement(p.a,{path:"/rocket",render:function(){return e.state.rocketFeatures&&c.a.createElement(L,e.state.rocketFeatures)}}),c.a.createElement(p.a,{path:"/calendar",component:j}),c.a.createElement(p.a,{path:"/details/:id",component:F}),this.state.company&&c.a.createElement(T,this.state.company.links))}}]),a}(c.a.Component));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(U,null)),document.getElementById("root"))}],[[33,1,2]]]);
//# sourceMappingURL=main.7b6d3594.chunk.js.map
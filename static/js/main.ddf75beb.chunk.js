(this["webpackJsonprecycle-polytech"]=this["webpackJsonprecycle-polytech"]||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/4.8abcc456.png"},23:function(e,t,n){e.exports=n.p+"static/media/7.991df9bc.png"},24:function(e,t,n){e.exports=n(48)},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),i=n(3),s=n(5),m=n(4),u=n(1),l=n.n(u),p=n(7),d=n(8),f=n(6),h=n(20),v=n.n(h),b=function(e,t,n){var a=0,r=-1,o=e.toLowerCase().indexOf(t.toLowerCase());if(-1!==o&&(a=o+t.length),n){var c=e.toLowerCase().indexOf(n.toLowerCase());-1!==c&&(r=c)}return 0===a?"":-1===r?e.slice(a):e.slice(a,r)},g=[{tag:"\u0448\u0438\u0440\u043e\u0442\u0430",propName:"posX",required:!0},{tag:"\u0434\u043e\u043b\u0433\u043e\u0442\u0430",propName:"posY",required:!0},{tag:"\u0430\u0434\u0440\u0435\u0441",propName:"address"},{tag:"\u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b",propName:"time"},{tag:"\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",propName:"comment"},{tag:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",propName:"img"},{tag:"icon",propName:"icon"}],w=function e(t){var n=this;Object(i.a)(this,e),this.get=function(){return n.data},this.props=t,this.data=new Promise(function(){var e=Object(f.a)(l.a.mark((function e(n,a){var r,o,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(t.DBlink);case 2:r=e.sent.data,(o=r.lists.filter((function(e){return"Database"===e.name}))).length<1&&a("no Database board"),c=r.cards.filter((function(e){return e.idList===o[0].id})).map((function(e){var t=!1,n=g.map((function(n){var a=b(e.desc,"<".concat(n.tag,">"),"</".concat(n.tag,">"));return n.required&&""===a&&(t=!0),Object(d.a)({},n.propName,a)})).reduce((function(e,t){return Object(p.a)(Object(p.a)({},e),t)}));return Object(p.a)(Object(p.a)({},n),{},{pos:[n.posX,n.posY],heading:e.name,damadged:t})})).filter((function(e){return!e.damadged})),n(c);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},x=r.a.createContext("new store()"),j=n(21),_=n(22),O=n.n(_),E=n(9),y=n.n(E),k=n(23),N=n.n(k),L=[{deltaLessThan:5,zoom:8},{deltaLessThan:2.5,zoom:9},{deltaLessThan:1.5,zoom:10},{deltaLessThan:1,zoom:11},{deltaLessThan:.5,zoom:12},{deltaLessThan:.035,zoom:13},{deltaLessThan:.025,zoom:14},{deltaLessThan:.004,zoom:15},{deltaLessThan:5e-4,zoom:16},{deltaLessThan:25e-5,zoom:17}],M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:228,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:326;return{iconImageSize:[Math.round(t/10*e),Math.round(n/10*e)],iconImageOffset:[-Math.round(t/20*e),-Math.round(.95*n/10*e)]}},C=function(e){switch(parseInt(e)){case 0:return y.a;case 1:return O.a;case 2:return N.a;default:return y.a}},T=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).addPoint=function(){var e=Object(f.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(f.a)(l.a.mark((function e(n,r){var o,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.pos){e.next=4;break}o=t.pos,e.next=9;break;case 4:return t.address||r("no pos, no address"),e.next=7,window.ymaps.geocode("\u0420\u043e\u0441\u0441\u0438\u044f, \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, "+t.address);case 7:c=e.sent,o=c.geoObjects.get(0).geometry._coordinates;case 9:a.map.geoObjects.add(new window.ymaps.Placemark(o,{balloonContent:'\n            <div class="yandex-baloon">\n              <h2 style="margin-bottom: 10px">'.concat(t.heading,"</h2>\n              <small><i>").concat(t.addressNice||t.address,'</i></small><br>\n              <h3 style="margin-bottom: 10px">\u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b: ').concat(t.time,"</h3><br>\n              ").concat(t.comment,"<br><br>\n              ").concat(""!==t.img?"<img style='width: 70%' src=".concat(t.img,"></img>"):"","\n            </div>\n            "),iconCaption:t.heading},Object(p.a)({iconLayout:"default#image",iconImageHref:C(t.icon)},M(1.7)))),n(o);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.replacePoints=function(){var e=Object(f.a)(l.a.mark((function e(t){var n,r,o,c,i,s,m,u,p;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((null===(n=t.points)||void 0===n?void 0:n.length)>0){e.next=2;break}return e.abrupt("return");case 2:a.map.geoObjects.removeAll(),a.minX=null,a.maxX=null,a.minY=null,a.maxY=null,e.t0=l.a.keys(t.points);case 8:if((e.t1=e.t0()).done){e.next=20;break}return r=e.t1.value,o=t.points[r],e.next=13,a.addPoint(o);case 13:c=e.sent,a.minX=null===a.minX?c[0]:Math.min(c[0],a.minX),a.maxX=null===a.maxX?c[0]:Math.max(c[0],a.maxX),a.minY=null===a.minY?c[1]:Math.min(c[1],a.minY),a.maxY=null===a.maxY?c[1]:Math.max(c[1],a.maxY),e.next=8;break;case 20:for(a.map.setCenter([(a.minX+a.maxX)/2,(a.minY+a.maxY)/2]),i=a.maxX-a.minX,s=a.maxY-a.minY,m=a.mapRef.current.clientWidth/a.mapRef.current.clientHeight,u=i/s>m?s:i,p=0;L[p].deltaLessThan>u&&p<L.length;)p++;p>=0&&p<L.length&&a.map.setZoom(L[p-1].zoom);case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.componentDidMount=function(){return window.ymaps.ready((function(){a.map=new window.ymaps.Map("map",{center:[59.946897,30.332514],zoom:11}),a.setState({ready:!0})}))},a.render=function(){return r.a.createElement("div",{id:"map",ref:a.mapRef})},a.state={ready:!1,replacePoints:a.replacePoints},a.mapRef=new r.a.createRef,a}return Object(j.a)(n,null,[{key:"getDerivedStateFromProps",value:function(e,t){return t.ready?(t.replacePoints(e),t):t}}]),n}(a.Component),X=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){return a.initData()},a.initData=Object(f.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,a.context.store.get();case 3:return e.t1=e.sent,e.t2={points:e.t1},e.abrupt("return",e.t0.setState.call(e.t0,e.t2));case 6:case"end":return e.stop()}}),e)}))),a.render=function(){return r.a.createElement("div",{className:"random-events",id:"random-events"},r.a.createElement("div",{className:"random-events__map-container"},r.a.createElement(T,{points:a.state.points})))},a.state={points:[]},a}return n}(a.Component);X.contextType=x;var Y=X,z=function(e){return r.a.createElement("a",{className:e.className,href:e.to,target:e.newTab?"_blank":"",rel:"noopener noreferrer"},e.children)},R=function(e){return e.preventDefault()},D=[{h2:"\u042d\u043a\u043e\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u043c \u0431\u044b\u0442\u044c: \u0432 \u041f\u043e\u043b\u0438\u0442\u0435\u0445\u0435 \u0437\u0430\u043f\u0443\u0449\u0435\u043d \u0440\u0430\u0437\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0441\u0431\u043e\u0440 \u043e\u0442\u0445\u043e\u0434\u043e\u0432!",desc:r.a.createElement(r.a.Fragment,null,"\u0410\u043a\u0442\u0438\u0432\u0438\u0441\u0442\u044b \u044d\u043a\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f ",r.a.createElement(z,{to:"https://vk.com/regreen_polytech"},"ReGreen")," \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u043e \u0441 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e\u043c \u0421\u041f\u0431\u041f\u0423 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0438 \u0438 \u0432\u043d\u0435\u0434\u0440\u0438\u043b\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0440\u0430\u0437\u0434\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0431\u043e\u0440\u0430 \u043e\u0442\u0445\u043e\u0434\u043e\u0432 \u043d\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0438 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430.",r.a.createElement("p",null," \u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b \u0443\u0436\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u0443\u044e\u0442! ")),bottom:r.a.createElement(r.a.Fragment,null,'\u0421\u0430\u0439\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d \u0438\u043d\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u043e\u0439 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432 \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0434\u0438\u0441\u0446\u0438\u043f\u043b\u0438\u043d\u044b "\u041e\u0441\u043d\u043e\u0432\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u043d\u043e\u0439 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438".')}],P=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){return(e=a.aboutButtonRef.current).addEventListener("wheel",R,{passive:!1}),void e.addEventListener("touchmove",R,{passive:!1});var e},a.componentWillUnmount=function(){return(e=a.aboutButtonRef.current).removeEventListener("wheel",R,{passive:!1}),void e.removeEventListener("touchmove",R,{passive:!1});var e},a.render=function(){return r.a.createElement("div",{className:"project-description"},r.a.createElement("div",{ref:a.aboutButtonRef,className:"project-description__mobile-open",onClick:function(){return a.setState({showMobile:!0})}},"\u041e \u041f\u0440\u043e\u0435\u043a\u0442\u0435"),r.a.createElement("div",{className:"project-description__container "+(a.state.showMobile&&"project-description__container--open")},r.a.createElement("div",{className:"project-description__mobile-close",onClick:function(){return a.setState({showMobile:!1})}}),r.a.createElement("div",{className:"project-description__h1"},"\u041a\u0430\u0440\u0442\u0430 \u0440\u0430\u0437\u0434\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0431\u043e\u0440\u0430"),r.a.createElement("div",{className:"project-description__blocks"},D.map((function(e){return r.a.createElement("div",{className:"project-description__blocks__item"},r.a.createElement("div",{className:"project-description__blocks__item__h2"},e.h2),r.a.createElement("div",{className:"project-description__blocks__item__desc"},e.desc),e.bottom&&r.a.createElement("div",{className:"project-description__blocks__item__bottom"},e.bottom))})))))},a.state={showMobile:!1},a.aboutButtonRef=r.a.createRef(),a}return n}(a.Component);P.contextType=x;var S=P,B=(n(47),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a,o;return Object(i.a)(this,n),(a=t.call(this,e)).render=function(){return r.a.createElement(x.Provider,{value:a.state},r.a.createElement("div",{className:"App"},r.a.createElement(S,null),r.a.createElement(Y,null)))},a.state=(o={state:a.state,setState:a.setState},{store:new w({stateRefs:o,DBlink:"https://trello.com/b/nKrfhtNh.json"})}),a}return n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n.p+"static/media/2.09bde733.png"}},[[24,1,2]]]);
//# sourceMappingURL=main.ddf75beb.chunk.js.map
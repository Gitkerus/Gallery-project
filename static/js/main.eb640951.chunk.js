(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/switcherDarkTheme.ad395d8d.svg"},12:function(e,t,a){e.exports=a(30)},26:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),u=a.n(c),o=(a(21),a(11)),s=a(2),l=a.n(s),i=a(4),m=a(3),f="https://test-front.framework.team",p=12,b=function(e){return Object(i.a)(l.a.mark(function t(){var a,n,r,c,u=arguments;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=u.length>0&&void 0!==u[0]?u[0]:null,n=a?"".concat(f).concat(e,"?")+new URLSearchParams(a):"".concat(f).concat(e),t.next=4,fetch(n);case 4:return r=t.sent,t.next=7,r.json();case 7:return c=t.sent,t.abrupt("return",c);case 9:case"end":return t.stop()}},t)}))},h=b("/authors"),g=b("/locations"),d=b("/paintings"),v=r.a.createContext(),_=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(m.a)(a,2),u=c[0],s=c[1],f=Object(n.useState)("Author"),p=Object(m.a)(f,2),b=p[0],d=p[1],_=Object(n.useState)("Location"),j=Object(m.a)(_,2),O=j[0],E=j[1],x=Object(n.useState)(""),k=Object(m.a)(x,2),w=k[0],C=k[1],N=Object(n.useState)(""),T=Object(m.a)(N,2),S=T[0],I=T[1],V=Object(n.useState)(""),A=Object(m.a)(V,2),D=A[0],R=A[1],L=Object(n.useState)(""),F=Object(m.a)(L,2),P=F[0],y=F[1],B=Object(n.useState)(1),q=Object(m.a)(B,2),J=q[0],M=q[1],U=Object(n.useState)([]),W=Object(m.a)(U,2),z=W[0],G=W[1],H=Object(n.useCallback)(Object(i.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,G(t);case 4:case"end":return e.stop()}},e)})),[]);Object(n.useEffect)(function(){H()},[H]);var K=Object(n.useState)([]),Q=Object(m.a)(K,2),X=Q[0],Y=Q[1],Z=Object(n.useCallback)(Object(i.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,a=t.map(function(e){return Object(o.a)({},e,{name:e.location})}),Y(a);case 5:case"end":return e.stop()}},e)})),[]);return Object(n.useEffect)(function(){Z()},[Z]),r.a.createElement(v.Provider,{value:{isDarkTheme:u,setIsDarkTheme:s,locations:X,authors:z,currentAuthor:b,setCurrentAuthor:d,currentLocation:O,setCurrentLocation:E,inputNameValue:w,setInputNameValue:C,inputRangeFromValue:S,setInputRangeFromValue:I,inputRangeBeforeValue:D,setInputRangeBeforeValue:R,pagesAmount:P,setPagesAmount:y,page:J,setPage:M}},t)},j=function(){return Object(n.useContext)(v)},O=a(8),E=a.n(O),x=a(9),k=a.n(x),w=a(10),C=a.n(w);var N=function(){var e=j(),t=e.isDarkTheme,a=e.setIsDarkTheme;return r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:E.a,alt:"FWT logo",className:"logo"}),r.a.createElement("img",{src:"".concat(t?C.a:k.a),alt:"lamp switcher",className:"switcher",onClick:function(){return a(!t)}}))},T=a(5);function S(){var e=j(),t=e.isDarkTheme,a=e.inputRangeFromValue,n=e.setInputRangeFromValue,c=e.inputRangeBeforeValue,u=e.setInputRangeBeforeValue;return r.a.createElement("div",{className:"range__box"},r.a.createElement("input",{type:"text",placeholder:"from",className:"range__input range__box__element",onChange:function(e){return n(e.target.value)},value:a}),r.a.createElement("div",{className:"".concat(t?"range__boxSeparator--light range__boxSeparator":"range__boxSeparator")}),r.a.createElement("input",{type:"text",placeholder:"before",className:"range__input range__box__element",onChange:function(e){return u(e.target.value)},value:c}))}var I=function(){var e=j(),t=e.isDarkTheme,a=e.locations,n=e.authors,c=e.currentAuthor,u=e.setCurrentAuthor,o=e.currentLocation,s=e.setCurrentLocation,l=e.inputNameValue,i=e.setInputNameValue;return r.a.createElement("section",{className:"filters__box"},r.a.createElement(T.a,{type:"text",isDarkTheme:t,className:"filters__box__single input",placeholder:"Name",value:l,onChange:function(e){return i(e.target.value)}}),r.a.createElement(T.d,{isDarkTheme:t,options:n,onChange:u,value:c,className:"filters__box__single"}),r.a.createElement(T.d,{isDarkTheme:t,options:a,onChange:s,value:o,className:"filters__box__single"}),r.a.createElement(T.c,{isDarkTheme:t,className:"filters__box__single",placeholder:"Created",onClose:function(){}},r.a.createElement(S,null)))};var V=function(e){var t=e.authorId,a=e.created,n=e.imageUrl,c=e.locationId,u=e.name,o=j(),s=o.authors,l=o.locations,i=s.find(function(e){return e.id===t}),m=l.find(function(e){return e.id===c});return i&&m?r.a.createElement("div",{className:"single__content",style:{background:"url(".concat(f).concat(n,")center/cover no-repeat")}},r.a.createElement("div",{className:"single__content__tooltip"},r.a.createElement("h2",null,u),r.a.createElement("h3",null,"Author: ",r.a.createElement("span",null,i.name)),r.a.createElement("h3",null,"Created: ",r.a.createElement("span",null,a)),r.a.createElement("h3",null,"Location: ",r.a.createElement("span",null,m.location)))):null};var A=function(){var e=j(),t=e.locations,a=e.authors,c=e.currentAuthor,u=e.currentLocation,o=e.inputNameValue,s=e.inputRangeFromValue,f=e.inputRangeBeforeValue,b=e.page,h=e.setPagesAmount,g=Object(n.useState)([]),v=Object(m.a)(g,2),_=v[0],O=v[1],E=Object(n.useState)([]),x=Object(m.a)(E,2),k=(x[0],x[1]),w=Object(n.useCallback)(Object(i.a)(l.a.mark(function e(){var n,r,i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={},""!==o&&(n.q="".concat(o)),r=a.find(function(e){return e.name===c}),"Author"!==c&&(n.authorId=r.id),i=t.find(function(e){return e.location===u}),"Location"!==u&&(n.locationId=i.id),""!==s&&""!==f&&(n.created_gte="".concat(s),n.created_lte="".concat(f)),e.next=9,d(n);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}},e)})),[a,t,c,u,s,f,o]),C=Object(n.useCallback)(Object(i.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,k(t);case 4:case"end":return e.stop()}},e)})),[w]);Object(n.useEffect)(function(){C()},[C]);var N=Object(n.useCallback)(Object(i.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,a=Math.ceil(t.length/12),h(a),console.log(a);case 6:case"end":return e.stop()}},e)})),[w]);Object(n.useEffect)(function(){N()},[N]);var T=Object(n.useCallback)(Object(i.a)(l.a.mark(function e(){var n,r,i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={_limit:p,_page:b},""!==o&&(n.q="".concat(o)),r=a.find(function(e){return e.name===c}),"Author"!==c&&(n.authorId=r.id),i=t.find(function(e){return e.location===u}),"Location"!==u&&(n.locationId=i.id),""!==s&&""!==f&&(n.created_gte="".concat(s),n.created_lte="".concat(f)),e.next=9,d(n);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}},e)})),[a,t,c,u,s,f,o,b]),S=Object(n.useCallback)(Object(i.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:t=e.sent,O(t);case 4:case"end":return e.stop()}},e)})),[T]);return Object(n.useEffect)(function(){S()},[S]),r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"content__box"},_.map(function(e){return r.a.createElement(V,Object.assign({key:e.id},e))})))};var D=function(){var e=j(),t=e.isDarkTheme,a=e.pagesAmount,n=e.page,c=e.setPage;return r.a.createElement(T.b,{className:"pagination__box",isDarkTheme:t,pagesAmount:a,currentPage:n,onChange:function(e){c(e)}})};a(26);var R=function(){var e=j().isDarkTheme;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"".concat(e?"darkTheme":"lightTheme")},r.a.createElement(N,null),r.a.createElement(I,null),r.a.createElement(A,null),r.a.createElement(D,null)))};a(28);u.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null,r.a.createElement(R,null))))},8:function(e,t,a){e.exports=a.p+"static/media/logo.8eed106c.svg"},9:function(e,t,a){e.exports=a.p+"static/media/switcherLightTheme.3d03312b.svg"}},[[12,2,1]]]);
//# sourceMappingURL=main.eb640951.chunk.js.map
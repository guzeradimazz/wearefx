(this.webpackJsonpwearefx=this.webpackJsonpwearefx||[]).push([[0],{22:function(e,t,s){},25:function(e,t){},26:function(e,t,s){},34:function(e,t,s){},54:function(e,t,s){},55:function(e,t,s){},56:function(e,t,s){},57:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){"use strict";s.r(t);var c=s(5),a=s.n(c),i=s(27),n=s.n(i),r=s(10),o=s(8),l=s(7),d=(s(34),s(1)),j=s(2),u=s(3),m=s(4),b=s(14),h=s(0),O=function(e){Object(u.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(d.a)(this,s);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).PointerLockControls=function(e){var t=this;e.rotation.set(0,0,0);var s=new b.f;s.add(e);var c=new b.f;c.position.y=10,c.add(s);var a=Math.PI/2,i=function(e){if(!1!==t.enabled){var i=e.movementX||e.mozMovementX||e.webkitMovementX||0,n=e.movementY||e.mozMovementY||e.webkitMovementY||0;c.rotation.y-=.002*i,s.rotation.x-=.002*n,s.rotation.x=Math.max(-a,Math.min(a,s.rotation.x))}};this.dispose=function(){document.removeEventListener("mousemove",i,!1)},document.addEventListener("mousemove",i,!1),t.enabled=!1,this.getObject=function(){return c},this.getDirection=function(){var e=new b.i(0,0,-1),t=new b.c(0,0,0,"YXZ");return function(a){return t.set(s.rotation.x,c.rotation.y,0),a.copy(e).applyEuler(t),a}}()},e.sceneSetup=function(){var t=e.mount.clientWidth,s=e.mount.clientHeight;e.scene=new b.h,e.camera=new b.g(95,t/s,.1,20),e.camera.position.z=1e-4,e.controls=new e.PointerLockControls(e.camera),e.controls.enabled=!0,e.scene.add(e.controls.getObject()),e.controls.getObject().position.set(0,0,0),e.renderer=new b.j,e.renderer.setSize(t,s),e.renderer.setClearColor(0),e.mount.appendChild(e.renderer.domElement)},e.addCustomSceneObjects=function(){var t=new b.b(10,10,10,12,12,12),s=new b.e({color:1383969,wireframe:!0});e.cube=new b.d(t,s),e.scene.add(e.cube);var c=new b.a(16777215);e.scene.add(c)},e.startAnimationLoop=function(){e.renderer.render(e.scene,e.camera),e.requestID=window.requestAnimationFrame(e.startAnimationLoop)},e.handleWindowResize=function(){var t=e.mount.clientWidth,s=e.mount.clientHeight;e.renderer.setSize(t,s),e.camera.aspect=t/s,e.camera.updateProjectionMatrix()},e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.sceneSetup(),this.addCustomSceneObjects(),this.startAnimationLoop(),window.addEventListener("resize",this.handleWindowResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowResize),window.cancelAnimationFrame(this.requestID),this.controls.dispose()}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"".concat(this.props.showCube," cube"),ref:function(t){return e.mount=t}})}}]),s}(c.Component),v=s(17),x=s(28),f=s.n(x),p=(s(52),s(53),function(e){var t=e.title,s=e.paragraph,c=e.current;return Object(h.jsxs)("div",{className:"swiper-item",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:t}),Object(h.jsx)("p",{children:s})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:c}),"/06"]})]})}),N=function(e){Object(u.a)(s,e);var t=Object(m.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(f.a,Object(v.a)(Object(v.a)({},{infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:[Object(h.jsx)(p,{title:"Puma Ukraine",paragraph:"Granding, VFX, motion",current:1}),Object(h.jsx)(p,{title:"Puma Ukraine",paragraph:"Granding, VFX, motion",current:2}),Object(h.jsx)(p,{title:"Puma Ukraine",paragraph:"Granding, VFX, motion",current:3}),Object(h.jsx)(p,{title:"Puma Ukraine",paragraph:"Granding, VFX, motion",current:4}),Object(h.jsx)(p,{title:"Puma Ukraine",paragraph:"Granding, VFX, motion",current:5}),Object(h.jsx)(p,{title:"Puma Ukraine",paragraph:"Granding, VFX, motion",current:6})]}))})}}]),s}(c.Component),y=(s(25),function(e){var t=e.setisMc,s=e.isMc,a=e.isPuma,i=e.setisPuma,n=e.isFlint,o=e.setisFlint,d=e.isBig,j=e.setisBig,u=e.isPm,m=e.setisPm,b=e.isNavi,v=e.setisNavi,x=e.isClicked,f=e.canvases,p=e.isCanvasesHidded,y=e.isCasesEntered,g=function(){f.map((function(e){return e.classList.add("displayNone")}))},k=function(){f.map((function(e){return e.classList.remove("displayNone")}))};Object(c.useEffect)((function(){p?g():k()}),[p,g,k]),Object(c.useEffect)((function(){!y&&p?f[0].classList.add("displayNone"):f[0].classList.remove("displayNone")}),[y,p]);var B=Object(c.useState)(!1),w=Object(l.a)(B,2),C=w[0],_=w[1],L=Object(c.useState)(!1),S=Object(l.a)(L,2),q=S[0],E=S[1],H=Object(c.useState)(!1),I=Object(l.a)(H,2),A=I[0],P=I[1],F=Object(c.useState)(!1),M=Object(l.a)(F,2),X=M[0],T=M[1],V=Object(c.useState)(!1),W=Object(l.a)(V,2),D=W[0],z=W[1],R=Object(c.useState)(!1),G=Object(l.a)(R,2),U=G[0],Y=G[1],J=Object(c.useState)(""),K=Object(l.a)(J,2),Z=K[0],Q=K[1],$=Object(c.useState)(""),ee=Object(l.a)($,2),te=ee[0],se=ee[1],ce=Object(c.useState)(""),ae=Object(l.a)(ce,2),ie=ae[0],ne=ae[1],re=Object(c.useState)(""),oe=Object(l.a)(re,2),le=oe[0],de=oe[1],je=Object(c.useState)(""),ue=Object(l.a)(je,2),me=ue[0],be=ue[1],he=Object(c.useState)(""),Oe=Object(l.a)(he,2),ve=Oe[0],xe=Oe[1],fe=Object(c.useState)(""),pe=Object(l.a)(fe,2),Ne=pe[0],ye=pe[1];Object(c.useEffect)((function(){C?(t("black"),se("mcBack"),Q("displayNone")):(t(""),se(""),Q(""))}),[C,s]),Object(c.useEffect)((function(){q?(i("black"),ne("pumaBack"),Q("displayNone")):(i(""),ne(""),Q(""))}),[q,a]),Object(c.useEffect)((function(){A?(o("black"),de("flintBack"),Q("displayNone")):(o(""),de(""),Q(""))}),[A,n]),Object(c.useEffect)((function(){X?(j("black"),be("bigBack"),Q("displayNone")):(j(""),be(""),Q(""))}),[X,d]),Object(c.useEffect)((function(){D?(m("black"),xe("pmBack"),Q("displayNone")):(m(""),xe(""),Q(""))}),[D,u]),Object(c.useEffect)((function(){U?(v("black"),ye("naviBack"),Q("displayNone")):(v(""),ye(""),Q(""))}),[U,b]);var ge=[{title:"McDonald's",id:1,className:"mcDonalds"},{title:"Puma",id:2,className:"puma"},{title:"Flint",id:3,className:"flint"},{title:"Little big",id:4,className:"littleBig"},{title:"Parimatch",id:5,className:"parimatch"},{title:"Navi",id:6,className:"navi"}];return x?Object(h.jsxs)("div",{className:"".concat(te," ").concat(ie," ").concat(le," ").concat(me," ").concat(ve," ").concat(Ne," casesLayout"),children:[Object(h.jsx)(N,{}),Object(h.jsx)(O,{showCube:"".concat(Z)}),Object(h.jsxs)("div",{className:"casesTextBlock",children:[Object(h.jsx)("div",{className:"casesArrow"}),Object(h.jsx)("p",{children:"We\u2019re always looking the truth about the brand we work with and tell it naturaly and gorgeous, like no one else before."})]}),Object(h.jsxs)("div",{className:C?"casesMain":" displayNone",children:[Object(h.jsx)("p",{children:"McDonald's"}),Object(h.jsx)("p",{children:"Granding, VFX, motion"})]}),Object(h.jsxs)("div",{className:q?"casesMain":" displayNone",children:[Object(h.jsx)("p",{children:"Puma Ukraine"}),Object(h.jsx)("p",{children:"VFX, motion"})]}),Object(h.jsxs)("div",{className:A?"casesMain":" displayNone",children:[Object(h.jsx)("p",{children:"Flint"}),Object(h.jsx)("p",{children:"Granding, VFX, motion"})]}),Object(h.jsxs)("div",{className:X?"casesMain":" displayNone",children:[Object(h.jsx)("p",{children:"Little big"}),Object(h.jsx)("p",{children:"Granding, VFX, motion"})]}),Object(h.jsxs)("div",{className:D?"casesMain":" displayNone",children:[Object(h.jsx)("p",{children:"Parimatch"}),Object(h.jsx)("p",{children:"Granding, VFX, motion"})]}),Object(h.jsxs)("div",{className:U?"casesMain":" displayNone",children:[Object(h.jsx)("p",{children:"Navi"}),Object(h.jsx)("p",{children:"Granding, VFX, motion"})]}),Object(h.jsxs)("div",{className:"casesArray",children:[Object(h.jsx)("div",{onMouseEnter:function(){_(!0)},onMouseLeave:function(){_(!1)},className:ge[0].className,children:ge[0].title}),Object(h.jsx)("div",{onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)},className:ge[1].className,children:ge[1].title}),Object(h.jsx)("div",{onMouseEnter:function(){P(!0)},onMouseLeave:function(){P(!1)},className:ge[2].className,children:ge[2].title}),Object(h.jsx)("div",{onMouseEnter:function(){T(!0)},onMouseLeave:function(){T(!1)},className:ge[3].className,children:ge[3].title}),Object(h.jsx)("div",{onMouseEnter:function(){z(!0)},onMouseLeave:function(){z(!1)},className:ge[4].className,children:ge[4].title}),Object(h.jsx)("div",{onMouseEnter:function(){Y(!0)},onMouseLeave:function(){Y(!1)},className:ge[5].className,children:ge[5].title})]}),Object(h.jsx)(r.b,{to:"/cases",children:Object(h.jsx)("div",{className:"casesBtn gradientBtn",children:Object(h.jsxs)("p",{children:["Explore",Object(h.jsx)("br",{}),"all",Object(h.jsx)("br",{}),"cases"]})})})]}):null}),g=(s(54),function(e){var t=e.isClicked,s=e.canvases,a=e.isCanvasesHidded,i=e.isHireEntered;return Object(c.useEffect)((function(){a?s.map((function(e){return e.classList.add("displayNone")})):s.map((function(e){return e.classList.remove("displayNone")}))}),[a]),Object(c.useEffect)((function(){!i&&a?s[2].classList.add("displayNone"):s[2].classList.remove("displayNone")}),[i]),t?Object(h.jsxs)("div",{className:"hireLayout",children:[Object(h.jsx)(O,{}),Object(h.jsxs)("div",{className:"hireBLock",children:[Object(h.jsxs)("div",{className:"hireBLock__left",children:[Object(h.jsxs)("div",{className:"hireBLock__left__top",children:[Object(h.jsx)("a",{href:"#",children:"Instagram"}),Object(h.jsx)("a",{href:"#",children:"Facebook"}),Object(h.jsx)("a",{href:"#",children:"behance"})]}),Object(h.jsxs)("div",{className:"hireBLock__left__middle",children:[Object(h.jsx)("p",{children:"All contents of this website are the property oF wearefx STUDIO. No part of this site, including all text and images, may be reproduced in any form without the prior written consent oF wearefx STUDIO \xa92021"}),Object(h.jsx)("div",{className:"arrowToTop"})]}),Object(h.jsxs)("h3",{className:"hireBLock__left__bottom",children:["We\u2019re curious how we can",Object(h.jsx)("br",{}),"help, get in touch \ud83d\udc4b"]})]}),Object(h.jsxs)("div",{className:"hireBLock__right",children:[Object(h.jsxs)("div",{className:"hireBLock__right__top",children:[Object(h.jsxs)("p",{children:["Wearefx \xa9 2021 by",Object(h.jsxs)("a",{className:"violet_on_hover",href:"#",children:[" ","Br\u0101h lab \ufe64"]})]}),Object(h.jsx)("a",{className:"violet_on_hover",href:"#",children:"Privacy Policy \ufe64"})]}),Object(h.jsxs)("div",{className:"hireBLock__right__middle",children:[Object(h.jsx)("p",{children:"For general inquiries & new projects "}),Object(h.jsx)("h3",{children:"contact@wearefx.xyz"})]}),Object(h.jsxs)("div",{className:"hireBLock__right__bottom",children:[Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsx)("p",{children:"Studio manager"}),Object(h.jsx)("p",{children:"Alex Dysenko"}),Object(h.jsxs)("div",{className:"contact__tel",children:[Object(h.jsx)("p",{children:"a@wearefx.xyz"}),Object(h.jsx)("a",{href:"tel:+380935925000",children:"+380935925000"})]})]}),Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsx)("p",{children:"Studio manager"}),Object(h.jsx)("p",{children:"Stas Ravsyi"}),Object(h.jsxs)("div",{className:"contact__tel",children:[Object(h.jsx)("p",{children:"s@wearefx.xyz"}),Object(h.jsx)("a",{href:"tel:+380636312065",children:"+380636312065"})]})]})]})]})]}),Object(h.jsx)(r.b,{to:"/hire",children:Object(h.jsx)("div",{className:"hireBtn gradientBtn",children:Object(h.jsxs)("p",{children:["chat with us",Object(h.jsx)("br",{})," in telegram"]})})})]}):null}),k=s(9),B=(s(55),s(15)),w=s.n(B),C=a.a.createContext("cursorContext"),_=[!1,"pointer","right","left"],L=function(e){var t=e.children,s=e.hoveredCursor,a=e.hoveredCursor1,i=e.hoveredCursor2,n=e.classNameTest,r=Object(c.useState)({x:0,y:0}),o=Object(l.a)(r,2),d=o[0],j=o[1],u=Object(c.useState)(!0),m=Object(l.a)(u,2),b=m[0],O=m[1],v=Object(c.useState)(!1),x=Object(l.a)(v,2),f=x[0],p=x[1],N=Object(c.useState)("hoveredCursorClass"),y=Object(l.a)(N,2),g=y[0],B=(y[1],function(e){var t=e.pageX,s=e.pageY;j({x:t,y:s})});Object(c.useEffect)((function(){return document.addEventListener("mousemove",B),function(){document.removeEventListener("mousemove",B)}}));var L=d.x,S=d.y;return Object(c.useEffect)((function(){p(!!s||(!!a||!!i))}),[s,a,i,n,g]),Object(h.jsxs)(C.Provider,{value:{onCursor:function(e){e=_.includes(e)&&e||!1,O(e)},onHideCursor:function(){setTimeout((function(){O(!0)}),300)},onVisibleCursor:function(){return O(!0)}},children:[Object(h.jsx)("ins",{className:f?w()(b&&" ".concat(g," movable"),Object(k.a)({active:!!b},"cursor-".concat(b),!!b)):w()(b&&"  movable ",Object(k.a)({active:!!b},"cursor-".concat(b),!!b)),style:{left:"".concat(L,"px"),top:"".concat(S,"px")}}),t]})},S=(s(56),Object(c.forwardRef)((function(e,t){var s=e.title,a=e.className,i=e.isHovered,n=e.onClick,r=e.isClicked,o=e.canvas,d=Object(c.useState)(i),j=Object(l.a)(d,2),u=j[0],m=j[1];return Object(c.useEffect)((function(){m(!!i)}),[i]),Object(c.useEffect)((function(){u?o.classList.add("displayNone"):o.classList.remove("displayNone")}),[u]),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{onClick:function(){return n()},ref:t,className:"".concat(a," MainPageButton"),children:[i&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{className:"first__dot"}),Object(h.jsx)("span",{className:"second__dot"}),Object(h.jsx)("span",{className:"third__dot"})]}),r?" ":s]})})}))),q=(s(57),s(58),function(e){var t=e.isClicked,s=e.canvases,a=e.isCanvasesHidded,i=e.isStoryEntered,n=function(){s.map((function(e){return e.classList.add("displayNone")}))},o=function(){s.map((function(e){return e.classList.remove("displayNone")}))};return Object(c.useEffect)((function(){a?n():o()}),[a,n,o]),Object(c.useEffect)((function(){!i&&a?s[1].classList.add("displayNone"):s[1].classList.remove("displayNone")}),[i,a]),t?Object(h.jsxs)("div",{className:"storyLayout",children:[Object(h.jsx)(O,{}),Object(h.jsxs)("div",{className:"storyBlock",children:[Object(h.jsx)("h3",{children:"We are full-service experiential VFX production studio based in Ukraine inspired by the creative potential of emerging technologies. \ud83d\ude0e"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("a",{href:"#",children:"our cases \ufe64"}),Object(h.jsx)("a",{href:"#",children:"hire us \ufe64"}),Object(h.jsx)("div",{className:"casesArrow"}),Object(h.jsx)("p",{children:"As a wide collective of highly skilled creatives, we vizualize any content on any screen and any space. Create CG and VFX for Advertising, TV, Print, digital, series, short and now long format films, games, VR and AR experiences."}),Object(h.jsx)("p",{children:"A deeply collaborative approach and respect for every aspect and role in the creation process stands at our core."})]})]}),Object(h.jsx)(r.b,{to:"/story",children:Object(h.jsx)("div",{className:"storyBtn gradientBtn",children:Object(h.jsxs)("p",{children:["View our",Object(h.jsx)("br",{}),"expertise &",Object(h.jsx)("br",{}),"technologies"]})})})]}):null}),E=s(29),H=s.n(E),I=(s(59),function(e){var t=e.isClicked,s=Object(c.useRef)(null);return Object(c.useEffect)((function(){if(t)return null;var e=new H.a(s.current,{strings:["Welcome to WeareFX, creative studio with big ideas","Where beauty and function are crafted together","Working across all media channels & platforms"],startDelay:1e3,typeSpeed:24,backSpeed:24,backDelay:1e3,loop:!0,showBlink:!0});return function(){return e.destroy()}}),[t]),Object(h.jsx)("div",{className:"typing__text",children:Object(h.jsx)("span",{className:"typing__text",ref:s})})}),A=(s(60),s(61),s.p+"static/media/videoPower.46fefcbf.mp4"),P=function(e){e.width=e.clientWidth,e.height=e.clientHeight},F=function(e){var t=e.is1BtnHovered,s=e.is2BtnHovered,a=e.is3BtnHovered,i=e.setIs3BtnHovered,n=e.setIs2BtnHovered,r=e.setIs1BtnHovered,o=Object(c.useState)(""),d=Object(l.a)(o,2),j=d[0],u=d[1],m=Object(c.useState)(""),b=Object(l.a)(m,2),O=b[0],v=b[1],x=Object(c.useState)(""),f=Object(l.a)(x,2),p=f[0],N=f[1],k=Object(c.useState)(""),B=Object(l.a)(k,2),w=B[0],C=B[1],_=Object(c.useState)(""),L=Object(l.a)(_,2),E=L[0],H=L[1],F=Object(c.useState)(""),M=Object(l.a)(F,2),X=M[0],T=M[1],V=Object(c.useState)([]),W=Object(l.a)(V,2),D=W[0],z=W[1],R=Object(c.useRef)(null),G=Object(c.useRef)(null),U=Object(c.useRef)(null),Y=document.getElementById("overlay1"),J=document.getElementById("overlay2"),K=document.getElementById("overlay3"),Z=Object(c.useState)(!1),Q=Object(l.a)(Z,2),$=Q[0],ee=Q[1],te=Object(c.useState)(!1),se=Object(l.a)(te,2),ce=se[0],ae=se[1],ie=Object(c.useState)(!1),ne=Object(l.a)(ie,2),re=ne[0],oe=ne[1],le=Object(c.useState)(!1),de=Object(l.a)(le,2),je=de[0],ue=de[1],me=Object(c.useState)(!1),be=Object(l.a)(me,2),he=be[0],Oe=be[1],ve=Object(c.useState)(!1),xe=Object(l.a)(ve,2),fe=xe[0],pe=xe[1],Ne=Object(c.useState)(!1),ye=Object(l.a)(Ne,2),ge=ye[0],ke=ye[1],Be=function(){r(!0),ae(!0),Y.classList.add("displayNone")},we=function(){ae(!1),Y.classList.remove("displayNone"),r(!1)},Ce=function(){ue(!0),J.classList.add("displayNone"),n(!0)},_e=function(){ue(!1),J.classList.remove("displayNone"),n(!1)},Le=function(){pe(!0),K.classList.add("displayNone"),i(!0)},Se=function(){pe(!1),K.classList.remove("displayNone"),i(!1)};function qe(e,t,s){var c=e.getContext("2d");requestAnimationFrame((function(){c.clearRect(0,0,e.width,e.height);var a=s.x-window.scrollX,i=s.y-window.scrollY;!function(e,t,s){var c=e.createLinearGradient(t.x,t.y,s.x,s.y);ce||je||fe?(c.addColorStop(0,"rgba(255, 255, 255, 0)"),c.addColorStop(.4,"rgba(255, 255, 255, 0.2)"),c.addColorStop(.5,"rgba(255, 255, 255, 0.9)"),c.addColorStop(1,"rgba(255, 255, 255, 0)")):(c.addColorStop(0,"rgba(255, 255, 255, 0)"),c.addColorStop(.4,"rgba(255, 255, 255, 0.2)"),c.addColorStop(.5,"white"),c.addColorStop(1,"rgba(255, 255, 255)")),e.strokeStyle=c,e.lineWidth=1,e.beginPath(),e.moveTo(t.x,t.y),ce&&e.lineTo(s.x+4,s.y-17),je&&e.lineTo(s.x-30,s.y+12),fe?e.lineTo(s.x+40,s.y+12):e.lineTo(s.x,s.y),e.stroke()}(c,{x:a,y:i},t)}))}var Ee=function(e){D.length&&(qe(Y,{x:e.clientX,y:e.clientY-10},D[0]),qe(J,{x:e.clientX-9,y:e.clientY+4},D[1]),qe(K,{x:e.clientX+8,y:e.clientY+4},D[2]))};Object(c.useEffect)((function(){var e,t,s;(P(Y),P(J),P(K),R.current.addEventListener("mouseover",Be),R.current.addEventListener("mouseleave",we),G.current.addEventListener("mouseover",Ce),G.current.addEventListener("mouseleave",_e),U.current.addEventListener("mouseover",Le),U.current.addEventListener("mouseleave",Se),D.length)||z([null===(e=R.current)||void 0===e?void 0:e.getBoundingClientRect(),null===(t=G.current)||void 0===t?void 0:t.getBoundingClientRect(),null===(s=U.current)||void 0===s?void 0:s.getBoundingClientRect()]);return window.addEventListener("mousemove",Ee),function(){window.removeEventListener("mousemove",Ee);try{R.current.removeEventListener("mouseover",Be),R.current.removeEventListener("mouseleave",we),G.current.removeEventListener("mouseover",Ce),G.current.removeEventListener("mouseleave",_e),U.current.removeEventListener("mouseover",Le),U.current.removeEventListener("mouseleave",Se)}catch(e){console.error(e)}}}),[D.length,t,s,a,Be,we,Ce,_e,Le,Se]);return Object(h.jsxs)("div",{children:[Object(h.jsx)("video",{className:"showreel",autoPlay:!0,loop:!0,muted:!0,children:Object(h.jsx)("source",{src:A,type:"video/mp4"})}),Object(h.jsx)("div",{className:"showreel__mobile"}),Object(h.jsx)("div",{className:"toner"}),Object(h.jsxs)("div",{children:[Object(h.jsx)(S,{canvas:Y,onClick:function(){ke(!ge),ee(!$)},isHovered:ce,title:"cases",isClicked:$,className:$?"clickedCases firstCircle ":"firstCircle",ref:R}),Object(h.jsx)(S,{canvas:J,onClick:function(){ke(!ge),oe(!re)},isHovered:s,title:"story",ref:G,isClicked:re,className:re?"clickedStory secondCircle":"secondCircle"}),Object(h.jsx)(S,{canvas:K,onClick:function(){ke(!ge),Oe(!he)},isHovered:a,title:"hire us",ref:U,isClicked:he,className:he?"clickedHire thirdCircle":"thirdCircle",x:!0}),Object(h.jsx)(y,{isMc:j,setisMc:u,isPuma:O,setisPuma:v,isFlint:p,setisFlint:N,isBig:w,setisBig:C,isPm:E,setisPm:H,isNavi:X,setisNavi:T,isCasesEntered:ce,isCanvasesHidded:ge,canvases:[Y,J,K],isClicked:$}),Object(h.jsx)(q,{isStoryEntered:je,isCanvasesHidded:ge,canvases:[Y,J,K],isClicked:re}),Object(h.jsx)(g,{isHireEntered:fe,isCanvasesHidded:ge,canvases:[Y,J,K],isClicked:he,setIsClicked:Oe}),Object(h.jsxs)("div",{className:" ".concat(j," ").concat(O," ").concat(p," ").concat(w," ").concat(E," ").concat(X," main"),children:[Object(h.jsxs)("div",{className:"main__top",children:[Object(h.jsx)(I,{isClicked:$}),Object(h.jsx)("div",{className:"main__logo"})]}),Object(h.jsx)("div",{className:"main__bottom",children:Object(h.jsx)("div",{className:"main__bottom__video",children:Object(h.jsx)("div",{className:"progress-done"})})})]})]})]})};s(62);var M=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(!1),n=Object(l.a)(i,2),r=n[0],o=n[1],d=Object(c.useState)(!1),j=Object(l.a)(d,2),u=j[0],m=j[1];return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(L,{classNameTest:" ",hoveredCursor:s,hoveredCursor1:r,hoveredCursor2:u,children:Object(h.jsx)(F,{setIs1BtnHovered:a,setIs2BtnHovered:o,setIs3BtnHovered:m,is1BtnHovered:s,is2BtnHovered:r,is3BtnHovered:u})})})},X=(s(63),s(22),s(64),function(e){var t=e.state,s=e.setState;return Object(h.jsxs)("div",{className:"cases-page-slider",children:[Object(h.jsxs)("p",{className:"current-page",children:[Object(h.jsx)("p",{children:t}),"/2"]}),Object(h.jsxs)("div",{className:"slider-buttons",children:[Object(h.jsx)("div",{onClick:function(){if(2!==t)return t;s((function(e){return e-1}))},className:"slider-back"}),Object(h.jsx)("div",{onClick:function(){if(1!==t)return t;s((function(e){return e+1}))},className:"slider-next"})]})]})}),T=function(){var e=Object(c.useState)(1),t=Object(l.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(""),n=Object(l.a)(i,2),o=n[0],d=n[1],j=Object(c.useState)([]),u=Object(l.a)(j,2),m=u[0],b=u[1];Object(c.useEffect)((function(){document.getElementById("overlay1").classList.add("displayNone"),document.getElementById("overlay2").classList.add("displayNone"),document.getElementById("overlay3").classList.add("displayNone")}),[]);var v=[{id:1,title:"McDonald's",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-MC",page:1},{id:2,title:"Puma",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Puma",page:1},{id:3,title:"Flint",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Flint",page:1},{id:4,title:"Little big",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-big",page:1},{id:5,title:"Parimatch",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Pm",page:1},{id:6,title:"Navi",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Navi",page:1},{id:7,title:"Tvorchi",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Tvorchi",page:1},{id:8,title:"Bond Delivery",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Bond",page:1},{id:9,title:"Puma X FC Shaktar",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Shaktar",page:1},{id:10,title:"Kite",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Kite",page:1},{id:11,title:"Chipsters",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Chipsters",page:1},{id:12,title:"Hushme",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-item",page:1},{id:13,title:"test test",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-item",page:2},{id:14,title:"test test",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-item",page:2},{id:15,title:"test test",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-item",page:2},{id:15,title:"test test",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-item",page:2}];return Object(c.useEffect)((function(){b(v.filter((function(e){return e.page===s})))}),[s,b,v]),Object(h.jsx)(L,{children:Object(h.jsxs)("div",{className:"cases-page",children:[Object(h.jsx)(O,{}),Object(h.jsxs)("div",{className:"".concat(o),children:[Object(h.jsxs)("div",{className:"story-header",children:[Object(h.jsxs)("div",{className:"header-left",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"our"}),Object(h.jsx)("h1",{children:"cases"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(r.b,{to:"/story",children:"our story"}),Object(h.jsx)(r.b,{to:"/hire",children:"hire us"})]})]}),Object(h.jsx)("div",{className:"header-right"})]}),Object(h.jsx)("div",{className:"cases-Array",children:m.map((function(e){return Object(h.jsx)("div",{onMouseEnter:function(){d(e.casesArrayItemBack)},onMouseLeave:function(){d("")},className:e.isHovered?"".concat(e.personalClass," casesArrayItem"):"casesArrayItem",children:e.title},e.id)}))}),Object(h.jsx)(X,{state:s,setState:a}),Object(h.jsxs)("div",{className:"casesTextBlock",children:[Object(h.jsx)("div",{className:"casesArrow"}),Object(h.jsx)("p",{children:"We\u2019re always looking the truth about the brand we work with and tell it naturaly and gorgeous, like no one else before."})]}),Object(h.jsx)("div",{className:"casesBtn gradientBtn",children:Object(h.jsxs)("p",{children:["We\u2019re",Object(h.jsx)("br",{}),"ready",Object(h.jsx)("br",{}),"Hire us"]})})]})]})})},V=(s(65),function(){return Object(c.useEffect)((function(){document.getElementById("overlay1").classList.add("displayNone"),document.getElementById("overlay2").classList.add("displayNone"),document.getElementById("overlay3").classList.add("displayNone")}),[]),Object(h.jsx)(L,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{}),Object(h.jsxs)("div",{className:"story-header",children:[Object(h.jsxs)("div",{className:"header-left",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Hire"}),Object(h.jsx)("h1",{children:"us"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(r.b,{to:"/cases",children:"Cases"}),Object(h.jsx)(r.b,{to:"/hire",children:"our story"})]})]}),Object(h.jsx)("div",{className:"header-right"})]}),Object(h.jsxs)("div",{className:"hireBLock",children:[Object(h.jsxs)("div",{className:"hireBLock__left",children:[Object(h.jsxs)("div",{className:"hireBLock__left__top",children:[Object(h.jsx)("a",{href:"#",children:"Instagram"}),Object(h.jsx)("a",{href:"#",children:"Facebook"}),Object(h.jsx)("a",{href:"#",children:"behance"})]}),Object(h.jsxs)("div",{className:"hireBLock__left__middle",children:[Object(h.jsx)("p",{children:"All contents of this website are the property oF wearefx STUDIO. No part of this site, including all text and images, may be reproduced in any form without the prior written consent oF wearefx STUDIO \xa92021"}),Object(h.jsx)("div",{className:"arrowToTop"})]}),Object(h.jsxs)("h3",{className:"hireBLock__left__bottom",children:["We\u2019re curious how we can",Object(h.jsx)("br",{}),"help, get in touch \ud83d\udc4b"]})]}),Object(h.jsxs)("div",{className:"hireBLock__right",children:[Object(h.jsxs)("div",{className:"hireBLock__right__top",children:[Object(h.jsxs)("p",{children:["Wearefx \xa9 2021 by",Object(h.jsxs)("a",{className:"violet_on_hover",href:"#",children:[" ","Br\u0101h lab"]})]}),Object(h.jsx)("a",{className:"violet_on_hover",to:"/wearefx",children:"Privacy Policy"})]}),Object(h.jsxs)("div",{className:"hireBLock__right__middle",children:[Object(h.jsx)("p",{children:"For general inquiries & new projects "}),Object(h.jsx)("h3",{children:"contact@wearefx.xyz"})]}),Object(h.jsxs)("div",{className:"hireBLock__right__bottom",children:[Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsx)("p",{children:"Studio manager"}),Object(h.jsx)("p",{children:"Alex Dysenko"}),Object(h.jsxs)("div",{className:"contact__tel",children:[Object(h.jsx)("p",{children:"a@wearefx.xyz"}),Object(h.jsx)("a",{href:"tel:+380935925000",children:"+380935925000"})]})]}),Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsx)("p",{children:"Studio manager"}),Object(h.jsx)("p",{children:"Stas Ravsyi"}),Object(h.jsxs)("div",{className:"contact__tel",children:[Object(h.jsx)("p",{children:"s@wearefx.xyz"}),Object(h.jsx)("a",{href:"tel:+380636312065",children:"+380636312065"})]})]})]})]})]}),Object(h.jsx)("div",{className:"casesBtn gradientBtn",children:Object(h.jsxs)("p",{children:["chat with us",Object(h.jsx)("br",{}),"in telegram"]})}),Object(h.jsx)(r.b,{to:"/wearefx",children:Object(h.jsx)("div",{className:"hireBtnViolet"})})]})})}),W=(s(66),s(67),function(){return Object(h.jsxs)("div",{className:"story-main",children:[Object(h.jsxs)("div",{className:"story-header",children:[Object(h.jsxs)("div",{className:"header-left",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"our"}),Object(h.jsx)("h1",{children:"story"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(r.b,{to:"/cases",children:"Cases"}),Object(h.jsx)(r.b,{to:"/hire",children:"hire us"})]})]}),Object(h.jsx)("div",{className:"header-right"})]}),Object(h.jsxs)("div",{className:"story-main-content",children:[Object(h.jsx)("p",{children:"Specialized in high end CG and VFX for Advertising, TV, Print, digital, series, short and now long format films since its launch, WeareFX has consistently evolved their processes as VFX specialists with a strong emphasis on art direction, design and technique development."}),Object(h.jsxs)("p",{children:["Wearefx\u2019s fully equipped and growing Ukraine based studio is accompanied with a host of talents, including experienced lead 3D Project Managers, 3D VFX artists, animators, lead lighting and 3D renderers. Their dedicated compositing teams include specialized Flame Artists, Shoot Supervisors and a host of in house, and After Effects compositors."," "]}),Object(h.jsx)("p",{children:"Our\u2019s services include Autodesk Smoke, Flame, DaVinci Resolve, Adobe Premiere Pro and Avid Media Composer suites."})]})]})}),D=(s(26),function(){return Object(h.jsxs)("div",{className:"story-footer",children:[Object(h.jsxs)("div",{className:"story-footer-left",children:[Object(h.jsx)("a",{href:"#",children:"Home"}),Object(h.jsx)("a",{href:"#",children:"Cases"}),Object(h.jsx)("a",{href:"#",children:"Our story"}),Object(h.jsx)("a",{href:"#",children:"Hire us"})]}),Object(h.jsx)("div",{className:"story-footer-middle"}),Object(h.jsxs)("div",{className:"story-footer-right",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Wearefx \xa9 2021 by "}),Object(h.jsx)("p",{className:"violet_on_hover",children:" Br\u0101h lab \ufe64"})]}),Object(h.jsx)("p",{className:"violet_on_hover",children:"Privacy Policy \ufe64"})]})]})}),z=function(){return Object(h.jsxs)("div",{className:"story-bottom",children:[Object(h.jsx)("div",{className:"story-ellipse"}),Object(h.jsx)("div",{className:"story-main-content",children:Object(h.jsx)("p",{children:"We pushing the boundaries of visual effects and work with our clients to innovate in the real world."})}),Object(h.jsx)("div",{className:"story-bottom-marquee",children:Object(h.jsxs)("div",{className:"marquee-div",children:[Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{className:"marquee-img marquee-1"}),Object(h.jsx)("div",{className:"marquee-img marquee-2"}),Object(h.jsx)("div",{className:"marquee-img marquee-3"}),Object(h.jsx)("div",{className:"marquee-img marquee-4"}),Object(h.jsx)("div",{className:"marquee-img marquee-5"}),Object(h.jsx)("div",{className:"marquee-img marquee-6"}),Object(h.jsx)("div",{className:"marquee-img marquee-7"}),Object(h.jsx)("div",{className:"marquee-img marquee-8"})]}),Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{className:"marquee-img marquee-1"}),Object(h.jsx)("div",{className:"marquee-img marquee-2"}),Object(h.jsx)("div",{className:"marquee-img marquee-3"}),Object(h.jsx)("div",{className:"marquee-img marquee-4"}),Object(h.jsx)("div",{className:"marquee-img marquee-5"}),Object(h.jsx)("div",{className:"marquee-img marquee-6"}),Object(h.jsx)("div",{className:"marquee-img marquee-7"}),Object(h.jsx)("div",{className:"marquee-img marquee-8"})]})]})}),Object(h.jsx)("div",{className:"story-bottom-marquee-reverse",children:Object(h.jsxs)("div",{className:"marquee-div-reverse",children:[Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{className:"marquee-img-reverse marquee-10"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-20"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-30"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-40"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-50"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-60"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-70"})]}),Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{className:"marquee-img-reverse marquee-10"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-20"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-30"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-40"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-50"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-60"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-70"})]})]})}),Object(h.jsx)(D,{})]})},R=(s(68),function(){return Object(c.useEffect)((function(){document.getElementById("overlay1").classList.add("displayNone"),document.getElementById("overlay2").classList.add("displayNone"),document.getElementById("overlay3").classList.add("displayNone")}),[]),Object(h.jsx)(L,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(W,{}),Object(h.jsx)(z,{})]})})});s(69);n.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(r.a,{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/wearefx",element:Object(h.jsx)(M,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/story",element:Object(h.jsx)(R,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/cases",element:Object(h.jsx)(T,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/hire",element:Object(h.jsx)(V,{})})]})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.07f21b51.chunk.js.map
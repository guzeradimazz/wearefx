(this.webpackJsonpwearefx=this.webpackJsonpwearefx||[]).push([[0],{25:function(e,t,s){},27:function(e,t){},28:function(e,t,s){},32:function(e,t,s){},41:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},94:function(e,t,s){},95:function(e,t,s){},96:function(e,t,s){},97:function(e,t,s){},98:function(e,t,s){},99:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),i=s(33),n=s.n(i),r=s(10),o=s(8),l=s(7),d=(s(41),s(1)),j=s(3),u=s(4),m=s(5),b=s(17),h=s(0),O=function(e){Object(u.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(d.a)(this,s);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).PointerLockControls=function(e){var t=this;e.rotation.set(0,0,0);var s=new b.f;s.add(e);var c=new b.f;c.position.y=10,c.add(s);var a=Math.PI/2,i=function(e){if(!1!==t.enabled){var i=e.movementX||e.mozMovementX||e.webkitMovementX||0,n=e.movementY||e.mozMovementY||e.webkitMovementY||0;c.rotation.y-=.002*i,s.rotation.x-=.002*n,s.rotation.x=Math.max(-a,Math.min(a,s.rotation.x))}};this.dispose=function(){document.removeEventListener("mousemove",i,!1)},document.addEventListener("mousemove",i,!1),t.enabled=!1,this.getObject=function(){return c},this.getDirection=function(){var e=new b.i(0,0,-1),t=new b.c(0,0,0,"YXZ");return function(a){return t.set(s.rotation.x,c.rotation.y,0),a.copy(e).applyEuler(t),a}}()},e.sceneSetup=function(){var t=e.mount.clientWidth,s=e.mount.clientHeight;e.scene=new b.h,e.camera=new b.g(95,t/s,.1,20),e.camera.position.z=1e-4,e.controls=new e.PointerLockControls(e.camera),e.controls.enabled=!0,e.scene.add(e.controls.getObject()),e.controls.getObject().position.set(0,0,0),e.renderer=new b.j,e.renderer.setSize(t,s),e.renderer.setClearColor(0),e.mount.appendChild(e.renderer.domElement)},e.addCustomSceneObjects=function(){var t=new b.b(10,10,10,12,12,12),s=new b.e({color:1383969,wireframe:!0});e.cube=new b.d(t,s),e.scene.add(e.cube);var c=new b.a(16777215);e.scene.add(c)},e.startAnimationLoop=function(){e.renderer.render(e.scene,e.camera),e.requestID=window.requestAnimationFrame(e.startAnimationLoop)},e.handleWindowResize=function(){var t=e.mount.clientWidth,s=e.mount.clientHeight;e.renderer.setSize(t,s),e.camera.aspect=t/s,e.camera.updateProjectionMatrix()},e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.sceneSetup(),this.addCustomSceneObjects(),this.startAnimationLoop(),window.addEventListener("resize",this.handleWindowResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowResize),window.cancelAnimationFrame(this.requestID),this.controls.dispose()}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"".concat(this.props.showCube," cube"),ref:function(t){return e.mount=t}})}}]),s}(c.Component),v=s(16),x=s(34),f=s.n(x),p=(s(59),s(60),function(e){var t=e.title,s=e.paragraph,c=e.current;return Object(h.jsxs)("div",{className:"swiper-item",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:t}),Object(h.jsx)("p",{children:s})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:c}),"/06"]})]})}),N=function(e){Object(u.a)(s,e);var t=Object(m.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(f.a,Object(v.a)(Object(v.a)({},{infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:[Object(h.jsx)(p,{title:"Puma Ukraine",paragraph:"Granding, VFX, motion",current:1}),Object(h.jsx)(p,{title:"Puma Ukraine",paragraph:"Granding, VFX, motion",current:2}),Object(h.jsx)(p,{title:"Puma Ukraine",paragraph:"Granding, VFX, motion",current:3}),Object(h.jsx)(p,{title:"Puma Ukraine",paragraph:"Granding, VFX, motion",current:4}),Object(h.jsx)(p,{title:"Puma Ukraine",paragraph:"Granding, VFX, motion",current:5}),Object(h.jsx)(p,{title:"Puma Ukraine",paragraph:"Granding, VFX, motion",current:6})]}))})}}]),s}(c.Component),y=(s(27),function(e){var t=e.setisMc,s=e.isMc,a=e.isPuma,i=e.setisPuma,n=e.isFlint,o=e.setisFlint,d=e.isBig,j=e.setisBig,u=e.isPm,m=e.setisPm,b=e.isNavi,v=e.setisNavi,x=e.isClicked,f=e.canvases,p=e.isCanvasesHidded,y=e.isCasesEntered,g=function(){f.map((function(e){return e.classList.add("displayNone")}))},k=function(){f.map((function(e){return e.classList.remove("displayNone")}))};Object(c.useEffect)((function(){p?g():k()}),[p,g,k]),Object(c.useEffect)((function(){!y&&p?f[0].classList.add("displayNone"):f[0].classList.remove("displayNone")}),[y,p]);var B=Object(c.useState)(!1),w=Object(l.a)(B,2),C=w[0],_=w[1],S=Object(c.useState)(!1),L=Object(l.a)(S,2),E=L[0],q=L[1],H=Object(c.useState)(!1),P=Object(l.a)(H,2),I=P[0],A=P[1],F=Object(c.useState)(!1),M=Object(l.a)(F,2),X=M[0],T=M[1],V=Object(c.useState)(!1),W=Object(l.a)(V,2),D=W[0],z=W[1],R=Object(c.useState)(!1),G=Object(l.a)(R,2),U=G[0],Y=G[1],J=Object(c.useState)(""),K=Object(l.a)(J,2),Z=K[0],Q=K[1],$=Object(c.useState)(""),ee=Object(l.a)($,2),te=ee[0],se=ee[1],ce=Object(c.useState)(""),ae=Object(l.a)(ce,2),ie=ae[0],ne=ae[1],re=Object(c.useState)(""),oe=Object(l.a)(re,2),le=oe[0],de=oe[1],je=Object(c.useState)(""),ue=Object(l.a)(je,2),me=ue[0],be=ue[1],he=Object(c.useState)(""),Oe=Object(l.a)(he,2),ve=Oe[0],xe=Oe[1],fe=Object(c.useState)(""),pe=Object(l.a)(fe,2),Ne=pe[0],ye=pe[1];Object(c.useEffect)((function(){C?(t("black"),se("mcBack"),Q("displayNone")):(t(""),se(""),Q(""))}),[C,s]),Object(c.useEffect)((function(){E?(i("black"),ne("pumaBack"),Q("displayNone")):(i(""),ne(""),Q(""))}),[E,a]),Object(c.useEffect)((function(){I?(o("black"),de("flintBack"),Q("displayNone")):(o(""),de(""),Q(""))}),[I,n]),Object(c.useEffect)((function(){X?(j("black"),be("bigBack"),Q("displayNone")):(j(""),be(""),Q(""))}),[X,d]),Object(c.useEffect)((function(){D?(m("black"),xe("pmBack"),Q("displayNone")):(m(""),xe(""),Q(""))}),[D,u]),Object(c.useEffect)((function(){U?(v("black"),ye("naviBack"),Q("displayNone")):(v(""),ye(""),Q(""))}),[U,b]);var ge=[{title:"McDonald's",id:1,className:"mcDonalds"},{title:"Puma",id:2,className:"puma"},{title:"Flint",id:3,className:"flint"},{title:"Little big",id:4,className:"littleBig"},{title:"Parimatch",id:5,className:"parimatch"},{title:"Navi",id:6,className:"navi"}];return x?Object(h.jsxs)("div",{className:"".concat(te," ").concat(ie," ").concat(le," ").concat(me," ").concat(ve," ").concat(Ne," casesLayout"),children:[Object(h.jsx)(N,{}),Object(h.jsx)(O,{showCube:"".concat(Z)}),Object(h.jsxs)("div",{className:"casesTextBlock",children:[Object(h.jsx)("div",{className:"casesArrow"}),Object(h.jsx)("p",{children:"We\u2019re always looking the truth about the brand we work with and tell it naturaly and gorgeous, like no one else before."})]}),Object(h.jsxs)("div",{className:C?"casesMain":" displayNone",children:[Object(h.jsx)("p",{children:"McDonald's"}),Object(h.jsx)("p",{children:"Granding, VFX, motion"})]}),Object(h.jsxs)("div",{className:E?"casesMain":" displayNone",children:[Object(h.jsx)("p",{children:"Puma Ukraine"}),Object(h.jsx)("p",{children:"VFX, motion"})]}),Object(h.jsxs)("div",{className:I?"casesMain":" displayNone",children:[Object(h.jsx)("p",{children:"Flint"}),Object(h.jsx)("p",{children:"Granding, VFX, motion"})]}),Object(h.jsxs)("div",{className:X?"casesMain":" displayNone",children:[Object(h.jsx)("p",{children:"Little big"}),Object(h.jsx)("p",{children:"Granding, VFX, motion"})]}),Object(h.jsxs)("div",{className:D?"casesMain":" displayNone",children:[Object(h.jsx)("p",{children:"Parimatch"}),Object(h.jsx)("p",{children:"Granding, VFX, motion"})]}),Object(h.jsxs)("div",{className:U?"casesMain":" displayNone",children:[Object(h.jsx)("p",{children:"Navi"}),Object(h.jsx)("p",{children:"Granding, VFX, motion"})]}),Object(h.jsxs)("div",{className:"casesArray",children:[Object(h.jsx)("div",{onMouseEnter:function(){_(!0)},onMouseLeave:function(){_(!1)},className:ge[0].className,children:ge[0].title}),Object(h.jsx)("div",{onMouseEnter:function(){q(!0)},onMouseLeave:function(){q(!1)},className:ge[1].className,children:ge[1].title}),Object(h.jsx)("div",{onMouseEnter:function(){A(!0)},onMouseLeave:function(){A(!1)},className:ge[2].className,children:ge[2].title}),Object(h.jsx)("div",{onMouseEnter:function(){T(!0)},onMouseLeave:function(){T(!1)},className:ge[3].className,children:ge[3].title}),Object(h.jsx)("div",{onMouseEnter:function(){z(!0)},onMouseLeave:function(){z(!1)},className:ge[4].className,children:ge[4].title}),Object(h.jsx)("div",{onMouseEnter:function(){Y(!0)},onMouseLeave:function(){Y(!1)},className:ge[5].className,children:ge[5].title})]}),Object(h.jsx)(r.b,{to:"/cases",children:Object(h.jsx)("div",{className:"casesBtn gradientBtn",children:Object(h.jsxs)("p",{children:["Explore",Object(h.jsx)("br",{}),"all",Object(h.jsx)("br",{}),"cases"]})})})]}):null}),g=(s(61),function(e){var t=e.isClicked,s=e.canvases,a=e.isCanvasesHidded,i=e.isHireEntered;return Object(c.useEffect)((function(){a?s.map((function(e){return e.classList.add("displayNone")})):s.map((function(e){return e.classList.remove("displayNone")}))}),[a]),Object(c.useEffect)((function(){!i&&a?s[2].classList.add("displayNone"):s[2].classList.remove("displayNone")}),[i]),t?Object(h.jsxs)("div",{className:"hireLayout",children:[Object(h.jsx)(O,{}),Object(h.jsxs)("div",{className:"hireBLock",children:[Object(h.jsxs)("div",{className:"hireBLock__left",children:[Object(h.jsxs)("div",{className:"hireBLock__left__top",children:[Object(h.jsx)("a",{href:"#",children:"Instagram"}),Object(h.jsx)("a",{href:"#",children:"Facebook"}),Object(h.jsx)("a",{href:"#",children:"behance"})]}),Object(h.jsxs)("div",{className:"hireBLock__left__middle",children:[Object(h.jsx)("p",{children:"All contents of this website are the property oF wearefx STUDIO. No part of this site, including all text and images, may be reproduced in any form without the prior written consent oF wearefx STUDIO \xa92021"}),Object(h.jsx)("div",{className:"arrowToTop"})]}),Object(h.jsxs)("h3",{className:"hireBLock__left__bottom",children:["We\u2019re curious how we can",Object(h.jsx)("br",{}),"help, get in touch \ud83d\udc4b"]})]}),Object(h.jsxs)("div",{className:"hireBLock__right",children:[Object(h.jsxs)("div",{className:"hireBLock__right__top",children:[Object(h.jsxs)("p",{children:["Wearefx \xa9 2021 by",Object(h.jsxs)("a",{className:"violet_on_hover",href:"#",children:[" ","Br\u0101h lab \ufe64"]})]}),Object(h.jsx)("a",{className:"violet_on_hover",href:"#",children:"Privacy Policy \ufe64"})]}),Object(h.jsxs)("div",{className:"hireBLock__right__middle",children:[Object(h.jsx)("p",{children:"For general inquiries & new projects "}),Object(h.jsx)("h3",{children:"contact@wearefx.xyz"})]}),Object(h.jsxs)("div",{className:"hireBLock__right__bottom",children:[Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsx)("p",{children:"Studio manager"}),Object(h.jsx)("p",{children:"Alex Dysenko"}),Object(h.jsxs)("div",{className:"contact__tel",children:[Object(h.jsx)("p",{children:"a@wearefx.xyz"}),Object(h.jsx)("a",{href:"tel:+380935925000",children:"+380935925000"})]})]}),Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsx)("p",{children:"Studio manager"}),Object(h.jsx)("p",{children:"Stas Ravsyi"}),Object(h.jsxs)("div",{className:"contact__tel",children:[Object(h.jsx)("p",{children:"s@wearefx.xyz"}),Object(h.jsx)("a",{href:"tel:+380636312065",children:"+380636312065"})]})]})]})]})]}),Object(h.jsx)(r.b,{to:"/hire",children:Object(h.jsx)("div",{className:"hireBtn gradientBtn",children:Object(h.jsxs)("p",{children:["chat with us",Object(h.jsx)("br",{})," in telegram"]})})})]}):null}),k=s(9),B=(s(62),s(18)),w=s.n(B),C=a.a.createContext("cursorContext"),_=[!1,"pointer","right","left"],S=function(e){var t=e.children,s=e.hoveredCursor,a=e.hoveredCursor1,i=e.hoveredCursor2,n=e.classNameTest,r=Object(c.useState)({x:0,y:0}),o=Object(l.a)(r,2),d=o[0],j=o[1],u=Object(c.useState)(!0),m=Object(l.a)(u,2),b=m[0],O=m[1],v=Object(c.useState)(!1),x=Object(l.a)(v,2),f=x[0],p=x[1],N=Object(c.useState)("hoveredCursorClass"),y=Object(l.a)(N,2),g=y[0],B=(y[1],Object(c.useState)(n)),S=Object(l.a)(B,2),L=(S[0],S[1],function(e){var t=e.pageX,s=e.pageY;j({x:t,y:s})});Object(c.useEffect)((function(){return document.addEventListener("mousemove",L),function(){document.removeEventListener("mousemove",L)}}));var E=d.x,q=d.y;return Object(c.useEffect)((function(){p(!!s||(!!a||!!i))}),[s,a,i,g]),Object(h.jsxs)(C.Provider,{value:{onCursor:function(e){e=_.includes(e)&&e||!1,O(e)},onHideCursor:function(){setTimeout((function(){O(!0)}),300)},onVisibleCursor:function(){return O(!0)}},children:[Object(h.jsx)("ins",{className:f?w()(b&&" ".concat(g,"  movable"),Object(k.a)({active:!!b},"cursor-".concat(b),!!b)):w()(b&&" movable ",Object(k.a)({active:!!b},"cursor-".concat(b),!!b)),style:{left:"".concat(E,"px"),top:"".concat(q,"px")}}),t]})},L=(s(63),Object(c.forwardRef)((function(e,t){var s=e.title,a=e.className,i=e.isHovered,n=e.onClick,r=e.isClicked,o=e.canvas,d=Object(c.useState)(i),j=Object(l.a)(d,2),u=j[0],m=j[1];return Object(c.useEffect)((function(){m(!!i)}),[i]),Object(c.useEffect)((function(){u?o.classList.add("displayNone"):o.classList.remove("displayNone")}),[u]),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{onClick:function(){return n()},ref:t,className:"".concat(a," MainPageButton"),children:[i&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{className:"first__dot"}),Object(h.jsx)("span",{className:"second__dot"}),Object(h.jsx)("span",{className:"third__dot"})]}),r?" ":s]})})}))),E=(s(64),s(65),function(e){var t=e.isClicked,s=e.canvases,a=e.isCanvasesHidded,i=e.isStoryEntered,n=function(){s.map((function(e){return e.classList.add("displayNone")}))},o=function(){s.map((function(e){return e.classList.remove("displayNone")}))};return Object(c.useEffect)((function(){a?n():o()}),[a,n,o]),Object(c.useEffect)((function(){!i&&a?s[1].classList.add("displayNone"):s[1].classList.remove("displayNone")}),[i,a]),t?Object(h.jsxs)("div",{className:"storyLayout",children:[Object(h.jsx)(O,{}),Object(h.jsxs)("div",{className:"storyBlock",children:[Object(h.jsx)("h3",{children:"We are full-service experiential VFX production studio based in Ukraine inspired by the creative potential of emerging technologies. \ud83d\ude0e"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("a",{href:"#",children:"our cases \ufe64"}),Object(h.jsx)("a",{href:"#",children:"hire us \ufe64"}),Object(h.jsx)("div",{className:"casesArrow"}),Object(h.jsx)("p",{children:"As a wide collective of highly skilled creatives, we vizualize any content on any screen and any space. Create CG and VFX for Advertising, TV, Print, digital, series, short and now long format films, games, VR and AR experiences."}),Object(h.jsx)("p",{children:"A deeply collaborative approach and respect for every aspect and role in the creation process stands at our core."})]})]}),Object(h.jsx)(r.b,{to:"/story",children:Object(h.jsx)("div",{className:"storyBtn gradientBtn",children:Object(h.jsxs)("p",{children:["View our",Object(h.jsx)("br",{}),"expertise &",Object(h.jsx)("br",{}),"technologies"]})})})]}):null}),q=s(35),H=s.n(q),P=(s(66),function(e){var t=e.isClicked,s=Object(c.useRef)(null);return Object(c.useEffect)((function(){if(t)return null;var e=new H.a(s.current,{strings:["Welcome to WeareFX, creative studio with big ideas","Where beauty and function are crafted together","Working across all media channels & platforms"],startDelay:1e3,typeSpeed:24,backSpeed:24,backDelay:1e3,loop:!0,showBlink:!0});return function(){return e.destroy()}}),[t]),Object(h.jsx)("div",{className:"typing__text",children:Object(h.jsx)("span",{className:"typing__text",ref:s})})}),I=(s(67),s(68),s.p+"static/media/videoPower.46fefcbf.mp4"),A=function(e){e.width=e.clientWidth,e.height=e.clientHeight},F=function(e){var t=e.is1BtnHovered,s=e.is2BtnHovered,a=e.is3BtnHovered,i=e.setIs3BtnHovered,n=e.setIs2BtnHovered,o=e.setIs1BtnHovered,d=Object(c.useState)(""),j=Object(l.a)(d,2),u=j[0],m=j[1],b=Object(c.useState)(""),O=Object(l.a)(b,2),v=O[0],x=O[1],f=Object(c.useState)(""),p=Object(l.a)(f,2),N=p[0],k=p[1],B=Object(c.useState)(""),w=Object(l.a)(B,2),C=w[0],_=w[1],S=Object(c.useState)(""),q=Object(l.a)(S,2),H=q[0],F=q[1],M=Object(c.useState)(""),X=Object(l.a)(M,2),T=X[0],V=X[1],W=Object(c.useState)([]),D=Object(l.a)(W,2),z=D[0],R=D[1],G=Object(c.useRef)(null),U=Object(c.useRef)(null),Y=Object(c.useRef)(null),J=document.getElementById("overlay1"),K=document.getElementById("overlay2"),Z=document.getElementById("overlay3"),Q=Object(c.useState)(!1),$=Object(l.a)(Q,2),ee=$[0],te=$[1],se=Object(c.useState)(!1),ce=Object(l.a)(se,2),ae=ce[0],ie=ce[1],ne=Object(c.useState)(!1),re=Object(l.a)(ne,2),oe=re[0],le=re[1],de=Object(c.useState)(!1),je=Object(l.a)(de,2),ue=je[0],me=je[1],be=Object(c.useState)(!1),he=Object(l.a)(be,2),Oe=he[0],ve=he[1],xe=Object(c.useState)(!1),fe=Object(l.a)(xe,2),pe=fe[0],Ne=fe[1],ye=Object(c.useState)(!1),ge=Object(l.a)(ye,2),ke=ge[0],Be=ge[1],we=function(){o(!0),ie(!0),J.classList.add("displayNone")},Ce=function(){ie(!1),J.classList.remove("displayNone"),o(!1)},_e=function(){me(!0),K.classList.add("displayNone"),n(!0)},Se=function(){me(!1),K.classList.remove("displayNone"),n(!1)},Le=function(){Ne(!0),Z.classList.add("displayNone"),i(!0)},Ee=function(){Ne(!1),Z.classList.remove("displayNone"),i(!1)};function qe(e,t,s){var c=e.getContext("2d");requestAnimationFrame((function(){c.clearRect(0,0,e.width,e.height);var a=s.x-window.scrollX,i=s.y-window.scrollY;!function(e,t,s){var c=e.createLinearGradient(t.x,t.y,s.x,s.y);ae||ue||pe?(c.addColorStop(0,"rgba(255, 255, 255, 0)"),c.addColorStop(.4,"rgba(255, 255, 255, 0.2)"),c.addColorStop(.5,"rgba(255, 255, 255, 0.9)"),c.addColorStop(1,"rgba(255, 255, 255, 0)")):(c.addColorStop(0,"rgba(255, 255, 255, 0)"),c.addColorStop(.4,"rgba(255, 255, 255, 0.2)"),c.addColorStop(.5,"white"),c.addColorStop(1,"rgba(255, 255, 255)")),e.strokeStyle=c,e.lineWidth=1,e.beginPath(),e.moveTo(t.x,t.y),ae&&e.lineTo(s.x+4,s.y-17),ue&&e.lineTo(s.x-30,s.y+12),pe?e.lineTo(s.x+40,s.y+12):e.lineTo(s.x,s.y),e.stroke()}(c,{x:a,y:i},t)}))}var He=function(e){z.length&&(qe(J,{x:e.clientX,y:e.clientY-10},z[0]),qe(K,{x:e.clientX-9,y:e.clientY+4},z[1]),qe(Z,{x:e.clientX+8,y:e.clientY+4},z[2]))};Object(c.useEffect)((function(){var e,t,s;(A(J),A(K),A(Z),G.current.addEventListener("mouseover",we),G.current.addEventListener("mouseleave",Ce),U.current.addEventListener("mouseover",_e),U.current.addEventListener("mouseleave",Se),Y.current.addEventListener("mouseover",Le),Y.current.addEventListener("mouseleave",Ee),z.length)||R([null===(e=G.current)||void 0===e?void 0:e.getBoundingClientRect(),null===(t=U.current)||void 0===t?void 0:t.getBoundingClientRect(),null===(s=Y.current)||void 0===s?void 0:s.getBoundingClientRect()]);return window.addEventListener("mousemove",He),function(){window.removeEventListener("mousemove",He);try{G.current.removeEventListener("mouseover",we),G.current.removeEventListener("mouseleave",Ce),U.current.removeEventListener("mouseover",_e),U.current.removeEventListener("mouseleave",Se),Y.current.removeEventListener("mouseover",Le),Y.current.removeEventListener("mouseleave",Ee)}catch(e){console.error(e)}}}),[z.length,t,s,a,we,Ce,_e,Se,Le,Ee]);return Object(h.jsxs)("div",{children:[Object(h.jsx)("video",{className:"showreel",autoPlay:!0,loop:!0,muted:!0,children:Object(h.jsx)("source",{src:I,type:"video/mp4"})}),Object(h.jsx)("div",{className:"showreel__mobile"}),Object(h.jsx)("div",{className:"toner"}),Object(h.jsxs)("div",{children:[Object(h.jsx)(r.b,{to:"/pesonal",children:"VIDEO"}),Object(h.jsx)(L,{canvas:J,onClick:function(){Be(!ke),te(!ee)},isHovered:ae,title:"cases",isClicked:ee,className:ee?"clickedCases firstCircle ":"firstCircle",ref:G}),Object(h.jsx)(L,{canvas:K,onClick:function(){Be(!ke),le(!oe)},isHovered:s,title:"story",ref:U,isClicked:oe,className:oe?"clickedStory secondCircle":"secondCircle"}),Object(h.jsx)(L,{canvas:Z,onClick:function(){Be(!ke),ve(!Oe)},isHovered:a,title:"hire us",ref:Y,isClicked:Oe,className:Oe?"clickedHire thirdCircle":"thirdCircle",x:!0}),Object(h.jsx)(y,{isMc:u,setisMc:m,isPuma:v,setisPuma:x,isFlint:N,setisFlint:k,isBig:C,setisBig:_,isPm:H,setisPm:F,isNavi:T,setisNavi:V,isCasesEntered:ae,isCanvasesHidded:ke,canvases:[J,K,Z],isClicked:ee}),Object(h.jsx)(E,{isStoryEntered:ue,isCanvasesHidded:ke,canvases:[J,K,Z],isClicked:oe}),Object(h.jsx)(g,{isHireEntered:pe,isCanvasesHidded:ke,canvases:[J,K,Z],isClicked:Oe,setIsClicked:ve}),Object(h.jsxs)("div",{className:" ".concat(u," ").concat(v," ").concat(N," ").concat(C," ").concat(H," ").concat(T," main"),children:[Object(h.jsxs)("div",{className:"main__top",children:[Object(h.jsx)(P,{isClicked:ee}),Object(h.jsx)("div",{className:"main__logo"})]}),Object(h.jsx)("div",{className:"main__bottom",children:Object(h.jsx)("div",{className:"main__bottom__video",children:Object(h.jsx)("div",{className:"progress-done"})})})]})]})]})};s(69);var M=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(!1),n=Object(l.a)(i,2),r=n[0],o=n[1],d=Object(c.useState)(!1),j=Object(l.a)(d,2),u=j[0],m=j[1];return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(S,{classNameTest:" ",hoveredCursor:s,hoveredCursor1:r,hoveredCursor2:u,children:Object(h.jsx)(F,{setIs1BtnHovered:a,setIs2BtnHovered:o,setIs3BtnHovered:m,is1BtnHovered:s,is2BtnHovered:r,is3BtnHovered:u})})})},X=(s(70),s(25),s(71),function(e){var t=e.state,s=e.setState;return Object(h.jsxs)("div",{className:"cases-page-slider",children:[Object(h.jsxs)("p",{className:"current-page",children:[Object(h.jsx)("p",{children:t}),"/2"]}),Object(h.jsxs)("div",{className:"slider-buttons",children:[Object(h.jsx)("div",{onClick:function(){if(2!==t)return t;s((function(e){return e-1}))},className:"slider-back"}),Object(h.jsx)("div",{onClick:function(){if(1!==t)return t;s((function(e){return e+1}))},className:"slider-next"})]})]})}),T=function(){var e=Object(c.useState)(1),t=Object(l.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(""),n=Object(l.a)(i,2),o=n[0],d=n[1],j=Object(c.useState)([]),u=Object(l.a)(j,2),m=u[0],b=u[1];Object(c.useEffect)((function(){document.getElementById("overlay1").classList.add("displayNone"),document.getElementById("overlay2").classList.add("displayNone"),document.getElementById("overlay3").classList.add("displayNone")}),[]);var v=[{id:1,title:"McDonald's",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-MC",page:1},{id:2,title:"Puma",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Puma",page:1},{id:3,title:"Flint",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Flint",page:1},{id:4,title:"Little big",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-big",page:1},{id:5,title:"Parimatch",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Pm",page:1},{id:6,title:"Navi",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Navi",page:1},{id:7,title:"Tvorchi",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Tvorchi",page:1},{id:8,title:"Bond Delivery",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Bond",page:1},{id:9,title:"Puma X FC Shaktar",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Shaktar",page:1},{id:10,title:"Kite",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Kite",page:1},{id:11,title:"Chipsters",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Chipsters",page:1},{id:12,title:"Hushme",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-item",page:1},{id:13,title:"test test",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-item",page:2},{id:14,title:"test test",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-item",page:2},{id:15,title:"test test",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-item",page:2},{id:15,title:"test test",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-item",page:2}];return Object(c.useEffect)((function(){b(v.filter((function(e){return e.page===s})))}),[s,b,v]),Object(h.jsx)(S,{children:Object(h.jsxs)("div",{className:"cases-page",children:[Object(h.jsx)(O,{}),Object(h.jsxs)("div",{className:"".concat(o),children:[Object(h.jsxs)("div",{className:"story-header",children:[Object(h.jsxs)("div",{className:"header-left",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"our"}),Object(h.jsx)("h1",{children:"cases"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(r.b,{to:"/story",children:"our story"}),Object(h.jsx)(r.b,{to:"/hire",children:"hire us"})]})]}),Object(h.jsx)("div",{className:"header-right"})]}),Object(h.jsx)("div",{className:"cases-Array",children:m.map((function(e){return Object(h.jsx)("div",{onMouseEnter:function(){d(e.casesArrayItemBack)},onMouseLeave:function(){d("")},className:e.isHovered?"".concat(e.personalClass," casesArrayItem"):"casesArrayItem",children:e.title},e.id)}))}),Object(h.jsx)(X,{state:s,setState:a}),Object(h.jsxs)("div",{className:"casesTextBlock",children:[Object(h.jsx)("div",{className:"casesArrow"}),Object(h.jsx)("p",{children:"We\u2019re always looking the truth about the brand we work with and tell it naturaly and gorgeous, like no one else before."})]}),Object(h.jsx)("div",{className:"casesBtn gradientBtn",children:Object(h.jsxs)("p",{children:["We\u2019re",Object(h.jsx)("br",{}),"ready",Object(h.jsx)("br",{}),"Hire us"]})})]})]})})},V=(s(72),function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"personal-header",children:[Object(h.jsxs)("div",{className:"personal-left",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"our"}),Object(h.jsx)("h1",{children:"cases"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(r.b,{className:"link",to:"/story",children:"our story"}),Object(h.jsx)(r.b,{className:"link",to:"/hire",children:"hire us"})]})]}),Object(h.jsx)("div",{className:"personal-right"})]}),Object(h.jsx)("h1",{className:"header-title",children:"NAVI X PUMA. OBSESSED WE."}),Object(h.jsx)("h6",{className:"header-desc",children:"Granding, VFX, motion, production"})]})}),W=(s(28),s(36)),D=s.n(W),z=s.p+"static/media/videoPower.46fefcbf.mp4",R=function(e){var t=e.handlePlay,s=e.playing,c=e.muted,a=e.handleMuted,i=e.loadedSeconds,n=e.playedSeconds,r=e.handleProgressTrack;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"video-controls",children:[Object(h.jsxs)("div",{className:"video-text",children:[Object(h.jsx)("div",{className:"casesArrow"}),Object(h.jsx)("p",{children:"Scroll down to view details"})]}),Object(h.jsxs)("div",{className:"video-center",children:[Object(h.jsx)("input",{type:"range",value:n,max:i,min:0,step:1,onChange:function(){return r()}}),Object(h.jsxs)("div",{className:"play-mute",children:[Object(h.jsx)("button",{className:"play-btn",onClick:function(){return t()},children:s?"Pause":"Play"}),Object(h.jsx)("button",{className:"muted-btn",onClick:function(){return a()},children:c?"unmute":"mute"})]})]}),Object(h.jsx)("div",{className:"hide-controls",children:"Hide elements"})]})})},G=function(){var e=Object(c.useState)({playing:!1,muted:!1,loadedSeconds:1,playedSeconds:0}),t=Object(l.a)(e,2),s=t[0],a=t[1],i=Object(c.useRef)(),n=s.playing,r=s.muted,o=s.loadedSeconds,d=s.playedSeconds;return Object(h.jsxs)("div",{className:"video-object",children:[Object(h.jsx)("div",{className:"video-toner"}),Object(h.jsx)(D.a,{className:"video-video",width:"100vw",height:"100vh",playing:n,url:z,muted:r,ref:i,onProgress:function(e){a(Object(v.a)(Object(v.a)({},s),e))}}),Object(h.jsx)(R,{playing:n,handlePlay:function(){a(Object(v.a)(Object(v.a)({},s),{},{playing:!s.playing}))},muted:r,handleMuted:function(){a(Object(v.a)(Object(v.a)({},s),{},{muted:!s.muted}))},loadedSeconds:o,playedSeconds:d,handleProgressTrack:function(){}})]})},U=function(){return Object(h.jsx)(S,{children:Object(h.jsxs)("div",{className:"personal-page",children:[Object(h.jsx)(V,{}),Object(h.jsx)(G,{})]})})},Y=(s(94),function(){return Object(c.useEffect)((function(){document.getElementById("overlay1").classList.add("displayNone"),document.getElementById("overlay2").classList.add("displayNone"),document.getElementById("overlay3").classList.add("displayNone")}),[]),Object(h.jsx)(S,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{}),Object(h.jsxs)("div",{className:"story-header",children:[Object(h.jsxs)("div",{className:"header-left",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Hire"}),Object(h.jsx)("h1",{children:"us"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(r.b,{to:"/cases",children:"Cases"}),Object(h.jsx)(r.b,{to:"/hire",children:"our story"})]})]}),Object(h.jsx)("div",{className:"header-right"})]}),Object(h.jsxs)("div",{className:"hireBLock",children:[Object(h.jsxs)("div",{className:"hireBLock__left",children:[Object(h.jsxs)("div",{className:"hireBLock__left__top",children:[Object(h.jsx)("a",{href:"#",children:"Instagram"}),Object(h.jsx)("a",{href:"#",children:"Facebook"}),Object(h.jsx)("a",{href:"#",children:"behance"})]}),Object(h.jsxs)("div",{className:"hireBLock__left__middle",children:[Object(h.jsx)("p",{children:"All contents of this website are the property oF wearefx STUDIO. No part of this site, including all text and images, may be reproduced in any form without the prior written consent oF wearefx STUDIO \xa92021"}),Object(h.jsx)("div",{className:"arrowToTop"})]}),Object(h.jsxs)("h3",{className:"hireBLock__left__bottom",children:["We\u2019re curious how we can",Object(h.jsx)("br",{}),"help, get in touch \ud83d\udc4b"]})]}),Object(h.jsxs)("div",{className:"hireBLock__right",children:[Object(h.jsxs)("div",{className:"hireBLock__right__top",children:[Object(h.jsxs)("p",{children:["Wearefx \xa9 2021 by",Object(h.jsxs)("a",{className:"violet_on_hover",href:"#",children:[" ","Br\u0101h lab"]})]}),Object(h.jsx)("a",{className:"violet_on_hover",to:"/wearefx",children:"Privacy Policy"})]}),Object(h.jsxs)("div",{className:"hireBLock__right__middle",children:[Object(h.jsx)("p",{children:"For general inquiries & new projects "}),Object(h.jsx)("h3",{children:"contact@wearefx.xyz"})]}),Object(h.jsxs)("div",{className:"hireBLock__right__bottom",children:[Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsx)("p",{children:"Studio manager"}),Object(h.jsx)("p",{children:"Alex Dysenko"}),Object(h.jsxs)("div",{className:"contact__tel",children:[Object(h.jsx)("p",{children:"a@wearefx.xyz"}),Object(h.jsx)("a",{href:"tel:+380935925000",children:"+380935925000"})]})]}),Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsx)("p",{children:"Studio manager"}),Object(h.jsx)("p",{children:"Stas Ravsyi"}),Object(h.jsxs)("div",{className:"contact__tel",children:[Object(h.jsx)("p",{children:"s@wearefx.xyz"}),Object(h.jsx)("a",{href:"tel:+380636312065",children:"+380636312065"})]})]})]})]})]}),Object(h.jsx)("div",{className:"casesBtn gradientBtn",children:Object(h.jsxs)("p",{children:["chat with us",Object(h.jsx)("br",{}),"in telegram"]})}),Object(h.jsx)(r.b,{to:"/wearefx",children:Object(h.jsx)("div",{className:"hireBtnViolet"})})]})})}),J=(s(95),s(96),function(){return Object(h.jsxs)("div",{className:"story-main",children:[Object(h.jsxs)("div",{className:"story-header",children:[Object(h.jsxs)("div",{className:"header-left",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"our"}),Object(h.jsx)("h1",{children:"story"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(r.b,{to:"/cases",children:"Cases"}),Object(h.jsx)(r.b,{to:"/hire",children:"hire us"})]})]}),Object(h.jsx)("div",{className:"header-right"})]}),Object(h.jsxs)("div",{className:"story-main-content",children:[Object(h.jsx)("p",{children:"Specialized in high end CG and VFX for Advertising, TV, Print, digital, series, short and now long format films since its launch, WeareFX has consistently evolved their processes as VFX specialists with a strong emphasis on art direction, design and technique development."}),Object(h.jsxs)("p",{children:["Wearefx\u2019s fully equipped and growing Ukraine based studio is accompanied with a host of talents, including experienced lead 3D Project Managers, 3D VFX artists, animators, lead lighting and 3D renderers. Their dedicated compositing teams include specialized Flame Artists, Shoot Supervisors and a host of in house, and After Effects compositors."," "]}),Object(h.jsx)("p",{children:"Our\u2019s services include Autodesk Smoke, Flame, DaVinci Resolve, Adobe Premiere Pro and Avid Media Composer suites."})]})]})}),K=(s(32),function(){return Object(h.jsxs)("div",{className:"story-footer",children:[Object(h.jsxs)("div",{className:"story-footer-left",children:[Object(h.jsx)("a",{href:"#",children:"Home"}),Object(h.jsx)("a",{href:"#",children:"Cases"}),Object(h.jsx)("a",{href:"#",children:"Our story"}),Object(h.jsx)("a",{href:"#",children:"Hire us"})]}),Object(h.jsx)("div",{className:"story-footer-middle"}),Object(h.jsxs)("div",{className:"story-footer-right",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Wearefx \xa9 2021 by "}),Object(h.jsx)("p",{className:"violet_on_hover",children:" Br\u0101h lab \ufe64"})]}),Object(h.jsx)("p",{className:"violet_on_hover",children:"Privacy Policy \ufe64"})]})]})}),Z=function(){return Object(h.jsxs)("div",{className:"story-bottom",children:[Object(h.jsx)("div",{className:"story-ellipse"}),Object(h.jsx)("div",{className:"story-main-content",children:Object(h.jsx)("p",{children:"We pushing the boundaries of visual effects and work with our clients to innovate in the real world."})}),Object(h.jsx)("div",{className:"story-bottom-marquee",children:Object(h.jsxs)("div",{className:"marquee-div",children:[Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{className:"marquee-img marquee-1"}),Object(h.jsx)("div",{className:"marquee-img marquee-2"}),Object(h.jsx)("div",{className:"marquee-img marquee-3"}),Object(h.jsx)("div",{className:"marquee-img marquee-4"}),Object(h.jsx)("div",{className:"marquee-img marquee-5"}),Object(h.jsx)("div",{className:"marquee-img marquee-6"}),Object(h.jsx)("div",{className:"marquee-img marquee-7"}),Object(h.jsx)("div",{className:"marquee-img marquee-8"})]}),Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{className:"marquee-img marquee-1"}),Object(h.jsx)("div",{className:"marquee-img marquee-2"}),Object(h.jsx)("div",{className:"marquee-img marquee-3"}),Object(h.jsx)("div",{className:"marquee-img marquee-4"}),Object(h.jsx)("div",{className:"marquee-img marquee-5"}),Object(h.jsx)("div",{className:"marquee-img marquee-6"}),Object(h.jsx)("div",{className:"marquee-img marquee-7"}),Object(h.jsx)("div",{className:"marquee-img marquee-8"})]})]})}),Object(h.jsx)("div",{className:"story-bottom-marquee-reverse",children:Object(h.jsxs)("div",{className:"marquee-div-reverse",children:[Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{className:"marquee-img-reverse marquee-10"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-20"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-30"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-40"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-50"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-60"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-70"})]}),Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{className:"marquee-img-reverse marquee-10"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-20"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-30"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-40"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-50"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-60"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-70"})]})]})}),Object(h.jsx)(K,{})]})},Q=(s(97),function(){return Object(c.useEffect)((function(){document.getElementById("overlay1").classList.add("displayNone"),document.getElementById("overlay2").classList.add("displayNone"),document.getElementById("overlay3").classList.add("displayNone")}),[]),Object(h.jsx)(S,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(J,{}),Object(h.jsx)(Z,{})]})})});s(98);n.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(r.a,{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/wearefx",element:Object(h.jsx)(M,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/story",element:Object(h.jsx)(Q,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/cases",element:Object(h.jsx)(T,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/hire",element:Object(h.jsx)(Y,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/pesonal",element:Object(h.jsx)(U,{})})]})})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.7fe21264.chunk.js.map
(this.webpackJsonpwearefx=this.webpackJsonpwearefx||[]).push([[0],Array(21).concat([function(e,t,s){},,,,,,,function(e,t,s){},,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(5),i=s.n(c),a=s(22),n=s.n(a),r=s(19),o=s(8),l=s(7),d=(s(28),s(0)),j=(s(30),s(18),s(1)),u=s(2),m=s(3),b=s(4),h=s(13),O=function(e){Object(m.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(j.a)(this,s);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).PointerLockControls=function(e){var t=this;e.rotation.set(0,0,0);var s=new h.f;s.add(e);var c=new h.f;c.position.y=10,c.add(s);var i=Math.PI/2,a=function(e){if(!1!==t.enabled){var a=e.movementX||e.mozMovementX||e.webkitMovementX||0,n=e.movementY||e.mozMovementY||e.webkitMovementY||0;c.rotation.y-=.002*a,s.rotation.x-=.002*n,s.rotation.x=Math.max(-i,Math.min(i,s.rotation.x))}};this.dispose=function(){document.removeEventListener("mousemove",a,!1)},document.addEventListener("mousemove",a,!1),t.enabled=!1,this.getObject=function(){return c},this.getDirection=function(){var e=new h.i(0,0,-1),t=new h.c(0,0,0,"YXZ");return function(i){return t.set(s.rotation.x,c.rotation.y,0),i.copy(e).applyEuler(t),i}}()},e.sceneSetup=function(){var t=e.mount.clientWidth,s=e.mount.clientHeight;e.scene=new h.h,e.camera=new h.g(95,t/s,.1,20),e.camera.position.z=1e-4,e.controls=new e.PointerLockControls(e.camera),e.controls.enabled=!0,e.scene.add(e.controls.getObject()),e.controls.getObject().position.set(0,0,0),e.renderer=new h.j,e.renderer.setSize(t,s),e.renderer.setClearColor(0),e.mount.appendChild(e.renderer.domElement)},e.addCustomSceneObjects=function(){var t=new h.b(10,10,10,12,12,12),s=new h.e({color:1383969,wireframe:!0});e.cube=new h.d(t,s),e.scene.add(e.cube);var c=new h.a(16777215);e.scene.add(c)},e.startAnimationLoop=function(){e.renderer.render(e.scene,e.camera),e.requestID=window.requestAnimationFrame(e.startAnimationLoop)},e.handleWindowResize=function(){var t=e.mount.clientWidth,s=e.mount.clientHeight;e.renderer.setSize(t,s),e.camera.aspect=t/s,e.camera.updateProjectionMatrix()},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.sceneSetup(),this.addCustomSceneObjects(),this.startAnimationLoop(),window.addEventListener("resize",this.handleWindowResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowResize),window.cancelAnimationFrame(this.requestID),this.controls.dispose()}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"".concat(this.props.showCube," cube"),ref:function(t){return e.mount=t}})}}]),s}(c.Component),v=function(e){var t=e.setisMc,s=e.isMc,i=e.isPuma,a=e.setisPuma,n=e.isFlint,r=e.setisFlint,o=e.isBig,j=e.setisBig,u=e.isPm,m=e.setisPm,b=e.isNavi,h=e.setisNavi,v=e.isClicked,x=e.canvases,f=e.isCanvasesHidded,p=e.isCasesEntered,N=function(){x.map((function(e){return e.classList.add("displayNone")}))},y=function(){x.map((function(e){return e.classList.remove("displayNone")}))};Object(c.useEffect)((function(){f?N():y()}),[f,N,y]),Object(c.useEffect)((function(){!p&&f?x[0].classList.add("displayNone"):x[0].classList.remove("displayNone")}),[p,f]);var g=Object(c.useState)(!1),w=Object(l.a)(g,2),_=w[0],C=w[1],k=Object(c.useState)(!1),L=Object(l.a)(k,2),S=L[0],q=L[1],E=Object(c.useState)(!1),B=Object(l.a)(E,2),M=B[0],P=B[1],H=Object(c.useState)(!1),F=Object(l.a)(H,2),A=F[0],W=F[1],I=Object(c.useState)(!1),X=Object(l.a)(I,2),T=X[0],D=X[1],z=Object(c.useState)(!1),V=Object(l.a)(z,2),R=V[0],Y=V[1],U=Object(c.useState)(""),G=Object(l.a)(U,2),J=G[0],K=G[1],Z=Object(c.useState)(""),Q=Object(l.a)(Z,2),$=Q[0],ee=Q[1],te=Object(c.useState)(""),se=Object(l.a)(te,2),ce=se[0],ie=se[1],ae=Object(c.useState)(""),ne=Object(l.a)(ae,2),re=ne[0],oe=ne[1],le=Object(c.useState)(""),de=Object(l.a)(le,2),je=de[0],ue=de[1],me=Object(c.useState)(""),be=Object(l.a)(me,2),he=be[0],Oe=be[1],ve=Object(c.useState)(""),xe=Object(l.a)(ve,2),fe=xe[0],pe=xe[1];Object(c.useEffect)((function(){_?(t("black"),ee("mcBack"),K("displayNone")):(t(""),ee(""),K(""))}),[_,s]),Object(c.useEffect)((function(){S?(a("black"),ie("pumaBack"),K("displayNone")):(a(""),ie(""),K(""))}),[S,i]),Object(c.useEffect)((function(){M?(r("black"),oe("flintBack"),K("displayNone")):(r(""),oe(""),K(""))}),[M,n]),Object(c.useEffect)((function(){A?(j("black"),ue("bigBack"),K("displayNone")):(j(""),ue(""),K(""))}),[A,o]),Object(c.useEffect)((function(){T?(m("black"),Oe("pmBack"),K("displayNone")):(m(""),Oe(""),K(""))}),[T,u]),Object(c.useEffect)((function(){R?(h("black"),pe("naviBack"),K("displayNone")):(h(""),pe(""),K(""))}),[R,b]);var Ne=[{title:"McDonald's",id:1,className:"mcDonalds"},{title:"Puma",id:2,className:"puma"},{title:"Flint",id:3,className:"flint"},{title:"Little big",id:4,className:"littleBig"},{title:"Parimatch",id:5,className:"parimatch"},{title:"Navi",id:6,className:"navi"}];return v?Object(d.jsxs)("div",{className:"".concat($," ").concat(ce," ").concat(re," ").concat(je," ").concat(he," ").concat(fe," noise animate__animated animate__slideInUp casesLayout"),children:[Object(d.jsx)(O,{showCube:"".concat(J)}),Object(d.jsxs)("div",{className:"casesTextBlock",children:[Object(d.jsx)("div",{className:"casesArrow"}),Object(d.jsx)("p",{children:"We\u2019re always looking the truth about the brand we work with and tell it naturaly and gorgeous, like no one else before."})]}),Object(d.jsxs)("div",{className:_?"casesMain":" displayNone",children:[Object(d.jsx)("p",{children:"McDonald's"}),Object(d.jsx)("p",{children:"Granding, VFX, motion"})]}),Object(d.jsxs)("div",{className:S?"casesMain":" displayNone",children:[Object(d.jsx)("p",{children:"Puma Ukraine"}),Object(d.jsx)("p",{children:"VFX, motion"})]}),Object(d.jsxs)("div",{className:M?"casesMain":" displayNone",children:[Object(d.jsx)("p",{children:"Flint"}),Object(d.jsx)("p",{children:"Granding, VFX, motion"})]}),Object(d.jsxs)("div",{className:A?"casesMain":" displayNone",children:[Object(d.jsx)("p",{children:"Little big"}),Object(d.jsx)("p",{children:"Granding, VFX, motion"})]}),Object(d.jsxs)("div",{className:T?"casesMain":" displayNone",children:[Object(d.jsx)("p",{children:"Parimatch"}),Object(d.jsx)("p",{children:"Granding, VFX, motion"})]}),Object(d.jsxs)("div",{className:R?"casesMain":" displayNone",children:[Object(d.jsx)("p",{children:"Navi"}),Object(d.jsx)("p",{children:"Granding, VFX, motion"})]}),Object(d.jsxs)("div",{className:"casesArray",children:[Object(d.jsx)("div",{onMouseEnter:function(){C(!0)},onMouseLeave:function(){C(!1)},className:Ne[0].className,children:Ne[0].title}),Object(d.jsx)("div",{onMouseEnter:function(){q(!0)},onMouseLeave:function(){q(!1)},className:Ne[1].className,children:Ne[1].title}),Object(d.jsx)("div",{onMouseEnter:function(){P(!0)},onMouseLeave:function(){P(!1)},className:Ne[2].className,children:Ne[2].title}),Object(d.jsx)("div",{onMouseEnter:function(){W(!0)},onMouseLeave:function(){W(!1)},className:Ne[3].className,children:Ne[3].title}),Object(d.jsx)("div",{onMouseEnter:function(){D(!0)},onMouseLeave:function(){D(!1)},className:Ne[4].className,children:Ne[4].title}),Object(d.jsx)("div",{onMouseEnter:function(){Y(!0)},onMouseLeave:function(){Y(!1)},className:Ne[5].className,children:Ne[5].title})]}),Object(d.jsx)("div",{className:"casesBtn gradientBtn",children:Object(d.jsxs)("p",{children:["Explore",Object(d.jsx)("br",{}),"all",Object(d.jsx)("br",{}),"cases"]})})]}):null},x=s(9),f=(s(32),s(20)),p=s.n(f),N=i.a.createContext("cursorContext"),y=[!1,"pointer","right","left"],g=function(e){var t=e.children,s=e.hoveredCursor,i=e.hoveredCursor1,a=e.hoveredCursor2,n=Object(c.useState)({x:0,y:0}),r=Object(l.a)(n,2),o=r[0],j=r[1],u=Object(c.useState)(!0),m=Object(l.a)(u,2),b=m[0],h=m[1],O=function(e){var t=e.pageX,s=e.pageY;j({x:t,y:s})};Object(c.useEffect)((function(){return document.addEventListener("mousemove",O),function(){document.removeEventListener("mousemove",O)}}));var v=o.x,f=o.y;return Object(d.jsxs)(N.Provider,{value:{onCursor:function(e){e=y.includes(e)&&e||!1,h(e)},onHideCursor:function(){setTimeout((function(){h(!1)}),400)},onVisibleCursor:function(){return h(!0)}},className:s?"hoveredCursor":"",children:[Object(d.jsx)("ins",{className:s||i||a?p()(b&&"hoveredCursor movable",Object(x.a)({active:!!b},"cursor-".concat(b),!!b)):p()(b&&"movable",Object(x.a)({active:!!b},"cursor-".concat(b),!!b)),style:{left:"".concat(v,"px"),top:"".concat(f,"px")}}),t]})},w=(s(33),function(e){var t=e.isClicked,s=e.canvases,i=e.isCanvasesHidded,a=e.isHireEntered;return Object(c.useEffect)((function(){i?s.map((function(e){return e.classList.add("displayNone")})):s.map((function(e){return e.classList.remove("displayNone")}))}),[i]),Object(c.useEffect)((function(){!a&&i?s[2].classList.add("displayNone"):s[2].classList.remove("displayNone")}),[a]),t?Object(d.jsxs)("div",{className:"hireLayout noise",children:[Object(d.jsx)(O,{}),Object(d.jsxs)("div",{className:"hireBLock",children:[Object(d.jsxs)("div",{className:"hireBLock__left",children:[Object(d.jsxs)("div",{className:"hireBLock__left__top",children:[Object(d.jsx)("a",{href:"#",children:"Instagram"}),Object(d.jsx)("a",{href:"#",children:"Facebook"}),Object(d.jsx)("a",{href:"#",children:"behance"})]}),Object(d.jsxs)("div",{className:"hireBLock__left__middle",children:[Object(d.jsx)("p",{children:"All contents of this website are the property oF wearefx STUDIO. No part of this site, including all text and images, may be reproduced in any form without the prior written consent oF wearefx STUDIO \xa92021"}),Object(d.jsx)("div",{className:"arrowToTop"})]}),Object(d.jsxs)("h3",{className:"hireBLock__left__bottom",children:["We\u2019re curious how we can",Object(d.jsx)("br",{}),"help, get in touch \ud83d\udc4b"]})]}),Object(d.jsxs)("div",{className:"hireBLock__right",children:[Object(d.jsxs)("div",{className:"hireBLock__right__top",children:[Object(d.jsxs)("p",{children:["Wearefx \xa9 2021 by",Object(d.jsx)("a",{className:"violet_on_hover",href:"#",children:" Br\u0101h lab \ufe64"})]}),Object(d.jsx)("a",{className:"violet_on_hover",href:"#",children:"Privacy Policy \ufe64"})]}),Object(d.jsxs)("div",{className:"hireBLock__right__middle",children:[Object(d.jsx)("p",{children:"For general inquiries & new projects "}),Object(d.jsx)("h3",{children:"contact@wearefx.xyz"})]}),Object(d.jsxs)("div",{className:"hireBLock__right__bottom",children:[Object(d.jsxs)("div",{className:"contact",children:[Object(d.jsx)("p",{children:"Studio manager"}),Object(d.jsx)("p",{children:"Alex Dysenko"}),Object(d.jsxs)("div",{className:"contact__tel",children:[Object(d.jsx)("p",{children:"a@wearefx.xyz"}),Object(d.jsx)("a",{href:"tel:+380935925000",children:"+380935925000"})]})]}),Object(d.jsxs)("div",{className:"contact",children:[Object(d.jsx)("p",{children:"Studio manager"}),Object(d.jsx)("p",{children:"Stas Ravsyi"}),Object(d.jsxs)("div",{className:"contact__tel",children:[Object(d.jsx)("p",{children:"s@wearefx.xyz"}),Object(d.jsx)("a",{href:"tel:+380636312065",children:"+380636312065"})]})]})]})]})]}),Object(d.jsx)("div",{className:"hireBtn gradientBtn",children:Object(d.jsxs)("p",{children:["chat with us",Object(d.jsx)("br",{})," in telegram"]})})]}):null}),_=(s(34),Object(c.forwardRef)((function(e,t){var s=e.title,i=e.className,a=e.isHovered,n=e.onClick,r=e.isClicked,o=e.canvas,l=function(){var e=Object(c.useContext)(N);if(!e)throw new Error("cursor context cannot be used outside Provider");return e}(),j=l.onHideCursor,u=l.onVisibleCursor;return Object(c.useEffect)((function(){a?(j(),o.classList.add("displayNone")):u()}),[a]),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{onClick:function(){return n()},ref:t,className:"".concat(i," MainPageButton"),children:[!r&&a&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"first__dot"}),Object(d.jsx)("span",{className:"second__dot"}),Object(d.jsx)("span",{className:"third__dot"})]}),r?" ":s]})})}))),C=(s(35),function(e){var t=e.isClicked,s=e.canvases,i=e.isCanvasesHidded,a=e.isStoryEntered,n=function(){s.map((function(e){return e.classList.add("displayNone")}))},r=function(){s.map((function(e){return e.classList.remove("displayNone")}))};return Object(c.useEffect)((function(){i?n():r()}),[i,n,r]),Object(c.useEffect)((function(){!a&&i?s[1].classList.add("displayNone"):s[1].classList.remove("displayNone")}),[a,i]),t?Object(d.jsxs)("div",{className:"storyLayout noise",children:[Object(d.jsx)(O,{}),Object(d.jsxs)("div",{className:"storyBlock",children:[Object(d.jsx)("h3",{children:"We are full-service experiential VFX production studio based in Ukraine inspired by the creative potential of emerging technologies. \ud83d\ude0e"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("a",{href:"#",children:"our cases \ufe64"}),Object(d.jsx)("a",{href:"#",children:"hire us \ufe64"}),Object(d.jsx)("div",{className:"casesArrow"}),Object(d.jsx)("p",{children:"As a wide collective of highly skilled creatives, we vizualize any content on any screen and any space. Create CG and VFX for Advertising, TV, Print, digital, series, short and now long format films, games, VR and AR experiences."}),Object(d.jsx)("p",{children:"A deeply collaborative approach and respect for every aspect and role in the creation process stands at our core."})]})]}),Object(d.jsx)("div",{className:"storyBtn gradientBtn",children:Object(d.jsxs)("p",{children:["View our",Object(d.jsx)("br",{}),"expertise &",Object(d.jsx)("br",{}),"technologies"]})})]}):null}),k=s(23),L=s.n(k),S=(s(36),function(){var e=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t=new L.a(e.current,{strings:["Welcome to WeareFX, creative studio with big ideas","Where beauty and function are crafted together","Working across all media channels & platforms"],startDelay:1e3,typeSpeed:24,backSpeed:24,backDelay:1e3,loop:!0,showBlink:!0});return function(){return t.destroy()}}),[]),Object(d.jsx)("div",{className:"typing__text",children:Object(d.jsx)("span",{className:"typing__text",ref:e})})}),q=(s(37),s.p+"static/media/videoPower.2ce540cb.mp4"),E=function(e){e.width=e.clientWidth,e.height=e.clientHeight},B=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),s=t[0],i=t[1],a=Object(c.useState)(""),n=Object(l.a)(a,2),r=n[0],o=n[1],j=Object(c.useState)(""),u=Object(l.a)(j,2),m=u[0],b=u[1],h=Object(c.useState)(""),O=Object(l.a)(h,2),x=O[0],f=O[1],p=Object(c.useState)(""),N=Object(l.a)(p,2),y=N[0],k=N[1],L=Object(c.useState)(""),B=Object(l.a)(L,2),M=B[0],P=B[1],H=Object(c.useState)([]),F=Object(l.a)(H,2),A=F[0],W=F[1],I=Object(c.useState)(!1),X=Object(l.a)(I,2),T=X[0],D=X[1],z=Object(c.useState)(!1),V=Object(l.a)(z,2),R=V[0],Y=V[1],U=Object(c.useState)(!1),G=Object(l.a)(U,2),J=G[0],K=G[1],Z=Object(c.useRef)(null),Q=Object(c.useRef)(null),$=Object(c.useRef)(null),ee=document.getElementById("overlay1"),te=document.getElementById("overlay2"),se=document.getElementById("overlay3"),ce=Object(c.useState)(!1),ie=Object(l.a)(ce,2),ae=ie[0],ne=ie[1],re=Object(c.useState)(!1),oe=Object(l.a)(re,2),le=oe[0],de=oe[1],je=Object(c.useState)(!1),ue=Object(l.a)(je,2),me=ue[0],be=ue[1],he=Object(c.useState)(!1),Oe=Object(l.a)(he,2),ve=Oe[0],xe=Oe[1],fe=Object(c.useState)(!1),pe=Object(l.a)(fe,2),Ne=pe[0],ye=pe[1],ge=Object(c.useState)(!1),we=Object(l.a)(ge,2),_e=we[0],Ce=we[1],ke=Object(c.useState)(!1),Le=Object(l.a)(ke,2),Se=Le[0],qe=Le[1],Ee=function(){D(!0),de(!0),ee.classList.add("displayNone")},Be=function(){de(!1),ee.classList.remove("displayNone"),D(!1)},Me=function(){xe(!0),te.classList.add("displayNone"),Y(!0)},Pe=function(){xe(!1),te.classList.remove("displayNone"),Y(!1)},He=function(){Ce(!0),se.classList.add("displayNone"),K(!0)},Fe=function(){Ce(!1),se.classList.remove("displayNone"),K(!1)};function Ae(e,t,s){var c=e.getContext("2d");requestAnimationFrame((function(){c.clearRect(0,0,e.width,e.height);var i=s.x-window.scrollX,a=s.y-window.scrollY;!function(e,t,s){var c=e.createLinearGradient(t.x,t.y,s.x,s.y);c.addColorStop(0,"rgba(255, 255, 255, 0)"),c.addColorStop(.4,"rgba(255, 255, 255, 0.2)"),c.addColorStop(.5,"white"),c.addColorStop(1,"rgba(255, 255, 255, 0)"),e.strokeStyle=c,e.lineWidth=1,e.beginPath(),e.moveTo(t.x,t.y),T?e.lineTo(A[0].x,A[0].y-15):R?e.lineTo(A[1].x-60,A[1].y+20):J?e.lineTo(A[2].x+65,A[2].y+21):e.lineTo(s.x,s.y),e.stroke()}(c,{x:i,y:a},t)}))}var We=function(e){A.length&&(Ae(ee,{x:e.clientX,y:e.clientY},A[0]),Ae(te,{x:e.clientX,y:e.clientY},A[1]),Ae(se,{x:e.clientX,y:e.clientY},A[2]))};Object(c.useEffect)((function(){var e,t,s;(E(ee),E(te),E(se),Z.current.addEventListener("mouseover",Ee),Z.current.addEventListener("mouseleave",Be),Q.current.addEventListener("mouseover",Me),Q.current.addEventListener("mouseleave",Pe),$.current.addEventListener("mouseover",He),$.current.addEventListener("mouseleave",Fe),A.length)||W([null===(e=Z.current)||void 0===e?void 0:e.getBoundingClientRect(),null===(t=Q.current)||void 0===t?void 0:t.getBoundingClientRect(),null===(s=$.current)||void 0===s?void 0:s.getBoundingClientRect()]);return window.addEventListener("mousemove",We),function(){window.removeEventListener("mousemove",We),Z.current.removeEventListener("mouseover",Ee),Z.current.removeEventListener("mouseleave",Be),Q.current.removeEventListener("mouseover",Me),Q.current.removeEventListener("mouseleave",Pe),$.current.removeEventListener("mouseover",He),$.current.removeEventListener("mouseleave",Fe)}}),[A.length,T,R,J,Ee,Be,Me,Pe,He,Fe]);return Object(d.jsxs)(g,{hoveredCursor:T,hoveredCursor1:R,hoveredCursor2:J,children:[Object(d.jsx)("video",{className:"showreel",autoPlay:!0,loop:!0,muted:!0,children:Object(d.jsx)("source",{src:q,type:"video/mp4"})}),Object(d.jsx)("div",{className:"toner"}),Object(d.jsxs)("div",{children:[Object(d.jsx)(_,{canvas:ee,onClick:function(){qe(!Se),ne(!ae)},isHovered:T,title:"cases",isClicked:ae,className:ae?"clickedCases firstCircle ":"firstCircle",ref:Z}),Object(d.jsx)(_,{canvas:te,onClick:function(){qe(!Se),be(!me)},isHovered:R,title:"story",ref:Q,isClicked:me,className:me?"clickedStory secondCircle":"secondCircle"}),Object(d.jsx)(_,{canvas:se,onClick:function(){qe(!Se),ye(!Ne)},isHovered:J,title:"hire us",ref:$,isClicked:Ne,className:Ne?"clickedHire thirdCircle":"thirdCircle",x:!0}),Object(d.jsx)(v,{isMc:s,setisMc:i,isPuma:r,setisPuma:o,isFlint:m,setisFlint:b,isBig:x,setisBig:f,isPm:y,setisPm:k,isNavi:M,setisNavi:P,isCasesEntered:le,isCanvasesHidded:Se,canvases:[ee,te,se],isClicked:ae}),Object(d.jsx)(C,{isStoryEntered:ve,isCanvasesHidded:Se,canvases:[ee,te,se],isClicked:me}),Object(d.jsx)(w,{isHireEntered:_e,isCanvasesHidded:Se,canvases:[ee,te,se],isClicked:Ne,setIsClicked:ye}),Object(d.jsxs)("div",{className:" ".concat(s," ").concat(r," ").concat(m," ").concat(x," ").concat(y," ").concat(M," main"),children:[Object(d.jsxs)("div",{className:"main__top",children:[Object(d.jsx)(S,{}),Object(d.jsx)("div",{className:"main__logo"})]}),Object(d.jsx)("div",{className:"main__bottom",children:Object(d.jsx)("hr",{className:"main__bottom__video"})})]})]})]})};s(38);var M=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),s=(t[0],t[1]);return Object(c.useEffect)((function(){s(!0),setTimeout((function(){s(!1)}),2e3)}),[]),Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(B,{})})},P=(s(39),function(e){var t=e.titleW,s=e.titleY,c=e.storyHeader,i=e.menu1,a=e.menu2;return Object(d.jsxs)("div",{className:"".concat(c," story-header"),children:[Object(d.jsxs)("div",{className:"header-left",children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{children:[t," "]}),Object(d.jsx)("h1",{children:s})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("a",{href:"#",children:i}),Object(d.jsx)("a",{href:"#",children:a})]})]}),Object(d.jsx)("div",{className:"header-right"})]})}),H=(s(40),function(){Object(c.useEffect)((function(){document.getElementById("overlay1").classList.add("displayNone"),document.getElementById("overlay2").classList.add("displayNone"),document.getElementById("overlay3").classList.add("displayNone")}),[]);return Object(d.jsxs)("div",{className:"cases-page noise",children:[Object(d.jsx)(O,{}),Object(d.jsx)(P,{titleW:"our",titleY:"cases",menu1:"our story",menu2:"hire us"}),Object(d.jsx)("div",{className:"cases-Array",children:[{id:1,title:"McDonald's",isShowed:!0,isHovered:!1,personalClass:"hush-MC"},{id:2,title:"Puma",isShowed:!0,isHovered:!1,personalClass:"hush-Puma"},{id:3,title:"Flint",isShowed:!0,isHovered:!1,personalClass:"hush-Flint"},{id:4,title:"Little big",isShowed:!0,isHovered:!1,personalClass:"hush-big"},{id:5,title:"Parimatch",isShowed:!0,isHovered:!1,personalClass:"hush-Pm"},{id:6,title:"Navi",isShowed:!0,isHovered:!1,personalClass:"hush-Navi"},{id:7,title:"Tvorchi",isShowed:!0,isHovered:!1,personalClass:"hush-Tvorchi"},{id:8,title:"Bond Delivery",isShowed:!0,isHovered:!1,personalClass:"hush-Bond"},{id:9,title:"Puma X FC Shaktar",isShowed:!0,isHovered:!1,personalClass:"hush-Shaktar"},{id:10,title:"Kite",isShowed:!0,isHovered:!1,personalClass:"hush-Kite"},{id:11,title:"Chipsters",isShowed:!0,isHovered:!1,personalClass:"hush-Chipsters"},{id:12,title:"Hushme",isShowed:!0,isHovered:!1,personalClass:"hush-item"}].map((function(e){return Object(d.jsx)("div",{className:e.isHovered?"".concat(e.personalClass," casesArrayItem"):"casesArrayItem",children:e.title},e.id)}))}),Object(d.jsxs)("div",{style:{width:"18%"},className:"casesTextBlock",children:[Object(d.jsx)("div",{className:"casesArrow"}),Object(d.jsx)("p",{children:"We\u2019re always looking the truth about the brand we work with and tell it naturaly and gorgeous, like no one else before."})]}),Object(d.jsx)("div",{className:"casesBtn gradientBtn",children:Object(d.jsxs)("p",{children:["We\u2019re",Object(d.jsx)("br",{}),"ready",Object(d.jsx)("br",{}),"Hire us"]})})]})}),F=(s(41),function(){return Object(c.useEffect)((function(){document.getElementById("overlay1").classList.add("displayNone"),document.getElementById("overlay2").classList.add("displayNone"),document.getElementById("overlay3").classList.add("displayNone")}),[]),Object(d.jsxs)("div",{className:"noise",children:[Object(d.jsx)(O,{}),Object(d.jsx)(P,{titleW:"Hire",titleY:"us",menu1:"cases",menu2:"our storyv"}),Object(d.jsxs)("div",{className:"hireBLock",children:[Object(d.jsxs)("div",{className:"hireBLock__left",children:[Object(d.jsxs)("div",{className:"hireBLock__left__top",children:[Object(d.jsx)("a",{href:"#",children:"Instagram"}),Object(d.jsx)("a",{href:"#",children:"Facebook"}),Object(d.jsx)("a",{href:"#",children:"behance"})]}),Object(d.jsxs)("div",{className:"hireBLock__left__middle",children:[Object(d.jsx)("p",{children:"All contents of this website are the property oF wearefx STUDIO. No part of this site, including all text and images, may be reproduced in any form without the prior written consent oF wearefx STUDIO \xa92021"}),Object(d.jsx)("div",{className:"arrowToTop"})]}),Object(d.jsxs)("h3",{className:"hireBLock__left__bottom",children:["We\u2019re curious how we can",Object(d.jsx)("br",{}),"help, get in touch \ud83d\udc4b"]})]}),Object(d.jsxs)("div",{className:"hireBLock__right",children:[Object(d.jsxs)("div",{className:"hireBLock__right__top",children:[Object(d.jsxs)("p",{children:["Wearefx \xa9 2021 by",Object(d.jsx)("a",{href:"#",children:" Br\u0101h lab"})]}),Object(d.jsx)("a",{href:"#",children:"Privacy Policy"})]}),Object(d.jsxs)("div",{className:"hireBLock__right__middle",children:[Object(d.jsx)("p",{children:"For general inquiries & new projects "}),Object(d.jsx)("h3",{children:"contact@wearefx.xyz"})]}),Object(d.jsxs)("div",{className:"hireBLock__right__bottom",children:[Object(d.jsxs)("div",{className:"contact",children:[Object(d.jsx)("p",{children:"Studio manager"}),Object(d.jsx)("p",{children:"Alex Dysenko"}),Object(d.jsxs)("div",{className:"contact__tel",children:[Object(d.jsx)("p",{children:"a@wearefx.xyz"}),Object(d.jsx)("a",{href:"tel:+380935925000",children:"+380935925000"})]})]}),Object(d.jsxs)("div",{className:"contact",children:[Object(d.jsx)("p",{children:"Studio manager"}),Object(d.jsx)("p",{children:"Stas Ravsyi"}),Object(d.jsxs)("div",{className:"contact__tel",children:[Object(d.jsx)("p",{children:"s@wearefx.xyz"}),Object(d.jsx)("a",{href:"tel:+380636312065",children:"+380636312065"})]})]})]})]})]}),Object(d.jsx)("div",{className:"casesBtn gradientBtn",children:Object(d.jsxs)("p",{children:["chat with us",Object(d.jsx)("br",{}),"in telegram"]})})]})}),A=(s(42),s(43),function(){return Object(d.jsxs)("div",{className:"story-main",children:[Object(d.jsx)(P,{titleW:"Our",titleY:"story",menu1:"Cases",menu2:"hire us"}),Object(d.jsxs)("div",{className:"story-main-content",children:[Object(d.jsx)("p",{children:"Specialized in high end CG and VFX for Advertising, TV, Print, digital, series, short and now long format films since its launch, WeareFX has consistently evolved their processes as VFX specialists with a strong emphasis on art direction, design and technique development."}),Object(d.jsx)("p",{children:"Wearefx\u2019s fully equipped and growing Ukraine based studio is accompanied with a host of talents, including experienced lead 3D Project Managers, 3D VFX artists, animators, lead lighting and 3D renderers. Their dedicated compositing teams include specialized Flame Artists, Shoot Supervisors and a host of in house, and After Effects compositors. "}),Object(d.jsx)("p",{children:"Our\u2019s services include Autodesk Smoke, Flame, DaVinci Resolve, Adobe Premiere Pro and Avid Media Composer suites."})]})]})}),W=(s(21),function(){return Object(d.jsxs)("div",{className:"story-footer",children:[Object(d.jsxs)("div",{className:"story-footer-left",children:[Object(d.jsx)("a",{href:"#",children:"Home"}),Object(d.jsx)("a",{href:"#",children:"Cases"}),Object(d.jsx)("a",{href:"#",children:"Our story"}),Object(d.jsx)("a",{href:"#",children:"Hire us"})]}),Object(d.jsx)("div",{className:"story-footer-middle"}),Object(d.jsxs)("div",{className:"story-footer-right",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Wearefx \xa9 2021 by "}),Object(d.jsx)("p",{children:" Br\u0101h lab"})]}),Object(d.jsx)("p",{children:"Privacy Policy"})]})]})}),I=function(){return Object(d.jsxs)("div",{className:"story-bottom",children:[Object(d.jsx)("div",{className:"story-ellipse"}),Object(d.jsx)("div",{className:"story-main-content",children:Object(d.jsx)("p",{children:"We pushing the boundaries of visual effects and work with our clients to innovate in the real world."})}),Object(d.jsx)("div",{className:"story-bottom-marquee",children:Object(d.jsxs)("div",{className:"marquee-div",children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{className:"marquee-img marquee-1"}),Object(d.jsx)("div",{className:"marquee-img marquee-2"}),Object(d.jsx)("div",{className:"marquee-img marquee-3"}),Object(d.jsx)("div",{className:"marquee-img marquee-4"}),Object(d.jsx)("div",{className:"marquee-img marquee-5"}),Object(d.jsx)("div",{className:"marquee-img marquee-6"}),Object(d.jsx)("div",{className:"marquee-img marquee-7"}),Object(d.jsx)("div",{className:"marquee-img marquee-8"})]}),Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{className:"marquee-img marquee-1"}),Object(d.jsx)("div",{className:"marquee-img marquee-2"}),Object(d.jsx)("div",{className:"marquee-img marquee-3"}),Object(d.jsx)("div",{className:"marquee-img marquee-4"}),Object(d.jsx)("div",{className:"marquee-img marquee-5"}),Object(d.jsx)("div",{className:"marquee-img marquee-6"}),Object(d.jsx)("div",{className:"marquee-img marquee-7"}),Object(d.jsx)("div",{className:"marquee-img marquee-8"})]})]})}),Object(d.jsx)("div",{className:"story-bottom-marquee-reverse",children:Object(d.jsxs)("div",{className:"marquee-div-reverse",children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{className:"marquee-img-reverse marquee-10"}),Object(d.jsx)("div",{className:"marquee-img-reverse marquee-20"}),Object(d.jsx)("div",{className:"marquee-img-reverse marquee-30"}),Object(d.jsx)("div",{className:"marquee-img-reverse marquee-40"}),Object(d.jsx)("div",{className:"marquee-img-reverse marquee-50"}),Object(d.jsx)("div",{className:"marquee-img-reverse marquee-60"}),Object(d.jsx)("div",{className:"marquee-img-reverse marquee-70"})]}),Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{className:"marquee-img-reverse marquee-10"}),Object(d.jsx)("div",{className:"marquee-img-reverse marquee-20"}),Object(d.jsx)("div",{className:"marquee-img-reverse marquee-30"}),Object(d.jsx)("div",{className:"marquee-img-reverse marquee-40"}),Object(d.jsx)("div",{className:"marquee-img-reverse marquee-50"}),Object(d.jsx)("div",{className:"marquee-img-reverse marquee-60"}),Object(d.jsx)("div",{className:"marquee-img-reverse marquee-70"})]})]})}),Object(d.jsx)(W,{})]})},X=function(){return Object(c.useEffect)((function(){document.getElementById("overlay1").classList.add("displayNone"),document.getElementById("overlay2").classList.add("displayNone"),document.getElementById("overlay3").classList.add("displayNone")}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)(A,{}),Object(d.jsx)(I,{})]})};s(44);n.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(r.a,{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/wearefx",element:Object(d.jsx)(M,{})}),Object(d.jsx)(o.a,{path:"/story",element:Object(d.jsx)(X,{})}),Object(d.jsx)(o.a,{path:"/cases",element:Object(d.jsx)(H,{})}),Object(d.jsx)(o.a,{path:"/hire",element:Object(d.jsx)(F,{})})]})})}),document.getElementById("root"))}]),[[45,1,2]]]);
//# sourceMappingURL=main.d64c67af.chunk.js.map
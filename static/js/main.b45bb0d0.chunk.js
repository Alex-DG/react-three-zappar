(this.webpackJsonpcra=this.webpackJsonpcra||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var i,r,s=n(3),a=n.n(s),c=n(48),o=n.n(c),h=n(16),u=n(17),d="#61dafb",l="#20232a",f=u.b(i||(i=Object(h.a)(["\n  width: 100%;\n  height: 100%;\n"]))),p=u.a(r||(r=Object(h.a)(["\n  html,\n  body,\n  #root {\n    margin: 0;\n    padding: 0;\n\n    ",";\n\n    font-family: Arial, Helvetica, Arial, sans-serif;\n  }\n\n  .app {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    ",";\n  }\n\n  .link {\n    font-size: bold;\n    color: ",";\n\n    :hover {\n      color: #000;\n    }\n  }\n"])),f,f,l),v=n(29),g=n(0),m=n(1),b=n(8),w=n(12),y=function(){function e(){Object(g.a)(this,e),this.experience=void 0,this.instance=void 0,this.experience=new E,this.setInstance()}return Object(m.a)(e,[{key:"setInstance",value:function(){this.instance=new b.Camera}},{key:"start",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.instance.start(e)}},{key:"update",value:function(){this.experience.renderer&&this.instance.updateFrame(this.experience.renderer.instance)}}]),e}(),x=function(){function e(){Object(g.a)(this,e),this.experience=void 0,this.instance=void 0,this.experience=new E,this.removeDomElement(),this.setInstance()}return Object(m.a)(e,[{key:"removeDomElement",value:function(){var e,t=document.querySelector("canvas");t&&(null===(e=document.getElementById("experience"))||void 0===e||e.removeChild(t))}},{key:"setInstance",value:function(){this.instance=new w.WebGLRenderer({antialias:!0}),this.instance.setSize(this.experience.config.screen.width,this.experience.config.screen.height),this.instance.setPixelRatio(this.experience.config.screen.pixelRatio)}},{key:"resize",value:function(){this.instance.setSize(this.experience.config.screen.width,this.experience.config.screen.height),this.instance.setPixelRatio(this.experience.config.screen.pixelRatio)}},{key:"update",value:function(){this.instance.render(this.experience.scene,this.experience.camera.instance)}}]),e}(),k=n.p+"static/media/faceMeshTemplate.7c10f762.png",j=function(){function e(){Object(g.a)(this,e),this.directionalLight=void 0,this.ambientLight=void 0,this.setLights()}return Object(m.a)(e,[{key:"setLights",value:function(){this.directionalLight=new w.DirectionalLight("white",.8),this.directionalLight.position.set(0,5,0),this.directionalLight.lookAt(0,0,0),this.ambientLight=new w.AmbientLight("white",.4)}}]),e}(),O=function(){function e(){Object(g.a)(this,e),this.experience=void 0,this.lights=void 0,this.faceMaterial=void 0,this.faceBufferGeometry=void 0,this.faceTrackerGroup=void 0,this.faceMeshMesh=void 0,this.experience=new E,this.setLights(),this.setFace(),this.setVisibility()}return Object(m.a)(e,[{key:"setLights",value:function(){this.lights=new j,this.experience.scene.add(this.lights.directionalLight,this.lights.ambientLight)}},{key:"setVisibility",value:function(){var e=this;this.faceTrackerGroup.faceTracker.onVisible.bind((function(){e.faceTrackerGroup.visible=!0})),this.faceTrackerGroup.faceTracker.onNotVisible.bind((function(){e.faceTrackerGroup.visible=!1}))}},{key:"setFace",value:function(){var e=new b.LoadingManager,t=new b.FaceTrackerLoader(e).load();this.faceTrackerGroup=new b.FaceAnchorGroup(this.experience.camera.instance,t),this.experience.scene.add(this.faceTrackerGroup);var n=new b.FaceMeshLoader(e).load();this.faceBufferGeometry=new b.FaceBufferGeometry(n);var i=new w.TextureLoader(e).load(k);i.flipY=!0,this.faceMaterial=new w.MeshStandardMaterial({map:i,transparent:!0}),this.faceMeshMesh=new w.Mesh(this.faceBufferGeometry,this.faceMaterial),this.faceTrackerGroup.add(this.faceMeshMesh)}},{key:"update",value:function(){this.faceBufferGeometry&&this.faceBufferGeometry.updateFromFaceAnchorGroup(this.faceTrackerGroup)}},{key:"destroy",value:function(){!!this.faceMaterial&&!!this.faceBufferGeometry&&!!this.lights&&!!this.experience.scene&&(this.faceMaterial.dispose(),this.faceBufferGeometry.dispose(),this.faceTrackerGroup.remove(this.faceMeshMesh),this.experience.scene.remove(this.lights.directionalLight,this.lights.ambientLight))}}]),e}(),L=function(){function e(){Object(g.a)(this,e),this.face=void 0,this.setFace()}return Object(m.a)(e,[{key:"setFace",value:function(){this.face=new O}},{key:"resize",value:function(){}},{key:"update",value:function(){this.face.update()}},{key:"destroy",value:function(){this.face.destroy()}}]),e}(),M=function e(){if(Object(g.a)(this,e),this.experience=void 0,this.screen=void 0,this.model=void 0,this.controls=void 0,e.instance)return e.instance;e.instance=this,this.experience=new E,this.model={size:.0125};var t=this.experience.targetElement.getBoundingClientRect(),n=t.width||window.innerWidth,i=t.height||window.innerHeight;this.screen={pixelRatio:Math.min(Math.max(window.devicePixelRatio,1),2),width:n,height:i},this.controls={enabled:!0}};M.instance=void 0;var G=function(){function e(t){if(Object(g.a)(this,e),this.isRunning=!1,this.targetElement=void 0,this.config=void 0,this.scene=void 0,this.renderer=void 0,this.camera=void 0,this.world=void 0,b.browserIncompatible())throw b.browserIncompatibleUI(),new Error("Unsupported browser");if(e.instance)return e.instance;e.instance=this,(null===t||void 0===t?void 0:t.targetElement)?(this.targetElement=null===t||void 0===t?void 0:t.targetElement,this.setConfig(),this.setScene(),this.setCamera(),this.setRenderer(),this.setWorld(),this.setResize(),this.isRunning=!0,console.log("Starting experience..."),this.update()):console.warn("Missing 'targetElement' property")}return Object(m.a)(e,[{key:"setWorld",value:function(){this.world=new L}},{key:"setCamera",value:function(){this.camera=new y,this.camera.instance.start(!0),this.scene.background=this.camera.instance.backgroundTexture}},{key:"setConfig",value:function(){this.config=new M}},{key:"setScene",value:function(){this.scene=new w.Scene}},{key:"setResize",value:function(){var e=this;window.addEventListener("resize",(function(){var t=e.targetElement.getBoundingClientRect();e.config.screen.width=t.width||window.innerWidth,e.config.screen.height=t.height||window.innerHeight,e.world.resize(),e.renderer.resize()}))}},{key:"setRenderer",value:function(){this.renderer=new x,this.targetElement.appendChild(this.renderer.instance.domElement),b.glContextSet(this.renderer.instance.getContext())}},{key:"update",value:function(){var e,t,n;this.isRunning&&(null===(e=this.camera)||void 0===e||e.update(),null===(t=this.world)||void 0===t||t.update(),null===(n=this.renderer)||void 0===n||n.update(),requestAnimationFrame(this.update.bind(this)))}},{key:"destroy",value:function(){var e;this.stop(),null===(e=this.world)||void 0===e||e.destroy()}},{key:"stop",value:function(){this.isRunning=!1}}]),e}();G.instance=void 0;var R,T,E=G,C=u.c.div(R||(R=Object(h.a)(["\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n"]))),F=n(10),z=function(){var e=Object(s.useRef)(null),t=Object(s.useRef)();return Object(s.useEffect)((function(){return(null===e||void 0===e?void 0:e.current)&&(t.current=new E({targetElement:e.current})),function(){var e;return null===(e=t.current)||void 0===e?void 0:e.stop()}}),[e]),Object(F.jsx)(C,{id:"experience",ref:e})},B=u.c.button(T||(T=Object(h.a)(["\n  /* Adapt the colors based on primary prop */\n  background: ",";\n  color: ",";\n\n  cursor: pointer;\n\n  :hover {\n    background: ",";\n    color: ",";\n  }\n\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid ",";\n  border-radius: 3px;\n"])),(function(e){return e.primary?d:"transparent"}),(function(e){return e.primary?"#fff":d}),(function(e){return e.primary?"transparent":d}),(function(e){return e.primary?d:"#fff"}),d),S=n(5),I=n.n(S),A=n(15),D=function(){var e=Object(A.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.permissionRequest();case 2:if(!e.sent){e.next=7;break}return e.abrupt("return",t(!0));case 7:b.permissionDeniedUI();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(s.useState)(!1),t=Object(v.a)(e,2),n=t[0],i=t[1];return n?Object(F.jsx)(z,{}):Object(F.jsxs)("div",{className:"app",children:[Object(F.jsx)(B,{onClick:function(){return D(i)},children:"Allow Camera"}),Object(F.jsx)("a",{href:"https://www.zappar.com/",target:"_blank",rel:"noreferrer",className:"link",children:"Zappar: Augmented, Virtual & Mixed Reality Solution"})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),s(e),a(e)}))};o.a.render(Object(F.jsxs)(a.a.StrictMode,{children:[Object(F.jsx)(p,{}),Object(F.jsx)(P,{})]}),document.getElementById("root")),V()}},[[115,1,2]]]);
//# sourceMappingURL=main.b45bb0d0.chunk.js.map
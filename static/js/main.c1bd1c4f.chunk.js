(this.webpackJsonpcra=this.webpackJsonpcra||[]).push([[0],{102:function(e,t,r){"use strict";r.r(t);var n=r(11),i=r.n(n),a=r(42),s=r.n(a),c=(r(48),r(26)),o=r(8),d=r(0),h=r(1),u=r(13),f=r.p+"static/media/faceMeshTemplate.6e15d49f.png",l=new(function(){function e(){if(Object(d.a)(this,e),this.camera=void 0,this.faceTrackerGroup=void 0,this.faceBufferGeometry=void 0,this.renderer=void 0,this.scene=void 0,this.targetElement=void 0,o.browserIncompatible())throw o.browserIncompatibleUI(),new Error("Unsupported browser");this.renderer=new u.WebGLRenderer({antialias:!0}),this.scene=new u.Scene,this.camera=new o.Camera,this.camera.start(!0),this.scene.background=this.camera.backgroundTexture}return Object(h.a)(e,[{key:"setResize",value:function(){var e,t=this;null===(e=this.targetElement)||void 0===e||e.addEventListener("resize",(function(){var e,r,n=(null===(e=t.targetElement)||void 0===e?void 0:e.offsetWidth)||window.innerWidth,i=(null===(r=t.targetElement)||void 0===r?void 0:r.offsetHeight)||window.innerHeight;t.renderer.setSize(n,i)}))}},{key:"setLight",value:function(){var e=new u.DirectionalLight("white",.8);e.position.set(0,5,0),e.lookAt(0,0,0);var t=new u.AmbientLight("white",.4);this.scene.add(e,t)}},{key:"setFace",value:function(){var e=this,t=new o.LoadingManager,r=new o.FaceTrackerLoader(t).load();this.faceTrackerGroup=new o.FaceAnchorGroup(this.camera,r),this.scene.add(this.faceTrackerGroup);var n=new o.FaceMeshLoader(t).load();this.faceBufferGeometry=new o.FaceBufferGeometry(n);var i=new u.TextureLoader(t).load(f);i.flipY=!0;var a=new u.Mesh(this.faceBufferGeometry,new u.MeshStandardMaterial({map:i,transparent:!0}));this.faceTrackerGroup.add(a),this.faceTrackerGroup.faceTracker.onVisible.bind((function(){e.faceTrackerGroup.visible=!0})),this.faceTrackerGroup.faceTracker.onNotVisible.bind((function(){e.faceTrackerGroup.visible=!1}))}},{key:"setRenderer",value:function(){var e;this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),null===(e=this.targetElement)||void 0===e||e.appendChild(this.renderer.domElement),o.glContextSet(this.renderer.getContext())}},{key:"render",value:function(){this.camera.updateFrame(this.renderer),this.faceBufferGeometry.updateFromFaceAnchorGroup(this.faceTrackerGroup),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.render.bind(this))}},{key:"init",value:function(e){if(!e)throw new Error("Missing 'targetElement' property");this.targetElement=e,this.setRenderer(),this.setFace(),this.setLight(),this.setResize(),this.render()}}]),e}()),m=r(12),p=function(){var e=Object(n.useRef)(null);return Object(n.useEffect)((function(){e&&l.init(e.current)}),[e]),Object(m.jsx)("div",{id:"experience",ref:e})},v=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),r=t[0],i=t[1];return r?Object(m.jsx)(p,{}):Object(m.jsx)("div",{className:"splash-screen",children:Object(m.jsx)("button",{onClick:function(){o.permissionRequest().then((function(e){e?i(!0):o.permissionDeniedUI()}))},children:"Allow Camera"})})},w=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,103)).then((function(t){var r=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),i(e),a(e),s(e)}))};s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),w()},48:function(e,t,r){}},[[102,1,2]]]);
//# sourceMappingURL=main.c1bd1c4f.chunk.js.map
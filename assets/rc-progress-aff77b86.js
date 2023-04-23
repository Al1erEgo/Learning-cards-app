import{r as s}from"./react-5cc2acaa.js";import{c as Q}from"./classnames-5c20d0be.js";import{c as Y,b as G,_ as I,h as tt}from"./@babel-9169ff57.js";import{c as et}from"./rc-util-1f458f21.js";var rt={className:"",percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,style:{},trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},at=function(){var t=s.useRef([]),r=s.useRef(null);return s.useEffect(function(){var n=Date.now(),o=!1;t.current.forEach(function(a){if(a){o=!0;var u=a.style;u.transitionDuration=".3s, .3s, .3s, .06s",r.current&&n-r.current<100&&(u.transitionDuration="0s, 0s")}}),o&&(r.current=Date.now())}),t.current},$=0,st=et();function ot(){var e;return st?(e=$,$+=1):e="TEST_OR_SSR",e}const nt=function(e){var t=s.useState(),r=Y(t,2),n=r[0],o=r[1];return s.useEffect(function(){o("rc_progress_".concat(ot()))},[]),e||n};var ct=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function F(e){return+e.replace("%","")}function M(e){var t=e??[];return Array.isArray(t)?t:[t]}var D=100,j=function(t,r,n,o,a,u,E,c,v,k){var p=arguments.length>10&&arguments[10]!==void 0?arguments[10]:0,N=n/100*360*((360-u)/360),W=u===0?0:{bottom:0,top:180,left:90,right:-90}[E],f=(100-o)/100*r;return v==="round"&&o!==100&&(f+=k/2,f>=r&&(f=r-.01)),{stroke:typeof c=="string"?c:void 0,strokeDasharray:"".concat(r,"px ").concat(t),strokeDashoffset:f+p,transform:"rotate(".concat(a+N+W,"deg)"),transformOrigin:"0 0",transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},V=function(t){var r=t.id,n=t.prefixCls,o=t.steps,a=t.strokeWidth,u=t.trailWidth,E=t.gapDegree,c=E===void 0?0:E,v=t.gapPosition,k=t.trailColor,p=t.strokeLinecap,N=t.style,W=t.className,f=t.strokeColor,X=t.percent,Z=G(t,ct),q=nt(r),w="".concat(q,"-gradient"),P=D/2-a/2,b=Math.PI*2*P,R=c>0?90+c/2:-90,m=b*((360-c)/360),A=I(o)==="object"?o:{count:o,space:2},g=A.count,O=A.space,z=j(b,m,0,100,R,c,v,k,p,a),_=M(X),y=M(f),T=y.find(function(i){return i&&I(i)==="object"}),B=at(),H=function(){var l=0;return _.map(function(h,d){var L=y[d]||y[y.length-1],S=L&&I(L)==="object"?"url(#".concat(w,")"):void 0,C=j(b,m,l,h,R,c,v,L,p,a);return l+=h,s.createElement("circle",{key:d,className:"".concat(n,"-circle-path"),r:P,cx:0,cy:0,stroke:S,strokeLinecap:p,strokeWidth:a,opacity:h===0?0:1,style:C,ref:function(x){B[d]=x}})}).reverse()},J=function(){var l=Math.round(g*(_[0]/100)),h=100/g,d=0;return new Array(g).fill(null).map(function(L,S){var C=S<=l-1?y[0]:k,U=C&&I(C)==="object"?"url(#".concat(w,")"):void 0,x=j(b,m,d,h,R,c,v,C,"butt",a,O);return d+=(m-x.strokeDashoffset+O)*100/m,s.createElement("circle",{key:S,className:"".concat(n,"-circle-path"),r:P,cx:0,cy:0,stroke:U,strokeWidth:a,opacity:1,style:x,ref:function(K){B[S]=K}})})};return s.createElement("svg",tt({className:Q("".concat(n,"-circle"),W),viewBox:"".concat(-D/2," ").concat(-D/2," ").concat(D," ").concat(D),style:N,id:r,role:"presentation"},Z),T&&s.createElement("defs",null,s.createElement("linearGradient",{id:w,x1:"100%",y1:"0%",x2:"0%",y2:"0%"},Object.keys(T).sort(function(i,l){return F(i)-F(l)}).map(function(i,l){return s.createElement("stop",{key:l,offset:i,stopColor:T[i]})}))),!g&&s.createElement("circle",{className:"".concat(n,"-circle-trail"),r:P,cx:0,cy:0,stroke:k,strokeLinecap:p,strokeWidth:u||a,style:z}),g?J():H())};V.defaultProps=rt;V.displayName="Circle";export{V as C};

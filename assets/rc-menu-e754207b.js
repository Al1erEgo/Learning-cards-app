import{b as B,a as _,g as Me,d as R,c as A,h as z,k as Pn,l as En,f as Kn,e as Nn,_ as wn}from"./@babel-9169ff57.js";import{c as fe}from"./classnames-5c20d0be.js";import{F as Ae}from"./rc-overflow-586c3e02.js";import{n as _n,m as Ot,o as $e,K as te,C as Dn,x as Ye,w as kt,d as On,v as At,t as kn}from"./rc-util-1f458f21.js";import{r as e}from"./react-5cc2acaa.js";import{r as An}from"./react-dom-a0c8f1a1.js";import{T as $n}from"./rc-trigger-278d3dce.js";import{C as Ln}from"./rc-motion-c6c48dbd.js";var $t=e.createContext(null);function dt(r,t){return r===void 0?null:"".concat(r,"-").concat(t)}function Lt(r){var t=e.useContext($t);return dt(t,r)}var Tn=["children","locked"],J=e.createContext(null);function Fn(r,t){var a=_({},r);return Object.keys(t).forEach(function(o){var n=t[o];n!==void 0&&(a[o]=n)}),a}function Le(r){var t=r.children,a=r.locked,o=B(r,Tn),n=e.useContext(J),l=_n(function(){return Fn(n,o)},[n,o],function(i,u){return!a&&(i[0]!==u[0]||!Ot(i[1],u[1],!0))});return e.createElement(J.Provider,{value:l},t)}var Vn=[],Tt=e.createContext(null);function Ze(){return e.useContext(Tt)}var Ft=e.createContext(Vn);function Te(r){var t=e.useContext(Ft);return e.useMemo(function(){return r!==void 0?[].concat(Me(t),[r]):t},[t,r])}var Vt=e.createContext(null),vt=e.createContext({}),ot=te.LEFT,lt=te.RIGHT,ut=te.UP,Be=te.DOWN,Xe=te.ENTER,Ut=te.ESC,Oe=te.HOME,ke=te.END,Nt=[ut,Be,ot,lt];function Un(r,t,a,o){var n,l,i,u,s="prev",c="next",v="children",E="parent";if(r==="inline"&&o===Xe)return{inlineTrigger:!0};var p=(n={},R(n,ut,s),R(n,Be,c),n),P=(l={},R(l,ot,a?c:s),R(l,lt,a?s:c),R(l,Be,v),R(l,Xe,v),l),m=(i={},R(i,ut,s),R(i,Be,c),R(i,Xe,v),R(i,Ut,E),R(i,ot,a?v:E),R(i,lt,a?E:v),i),b={inline:p,horizontal:P,vertical:m,inlineSub:p,horizontalSub:m,verticalSub:m},M=(u=b["".concat(r).concat(t?"":"Sub")])===null||u===void 0?void 0:u[o];switch(M){case s:return{offset:-1,sibling:!0};case c:return{offset:1,sibling:!0};case E:return{offset:-1,sibling:!1};case v:return{offset:1,sibling:!1};default:return null}}function zn(r){for(var t=r;t;){if(t.getAttribute("data-menu-list"))return t;t=t.parentElement}return null}function Hn(r,t){for(var a=r||document.activeElement;a;){if(t.has(a))return a;a=a.parentElement}return null}function zt(r,t){var a=Dn(r,!0);return a.filter(function(o){return t.has(o)})}function wt(r,t,a){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!r)return null;var n=zt(r,t),l=n.length,i=n.findIndex(function(u){return a===u});return o<0?i===-1?i=l-1:i-=1:o>0&&(i+=1),i=(i+l)%l,n[i]}function Gn(r,t,a,o,n,l,i,u,s,c){var v=e.useRef(),E=e.useRef();E.current=t;var p=function(){$e.cancel(v.current)};return e.useEffect(function(){return function(){p()}},[]),function(P){var m=P.which;if([].concat(Nt,[Xe,Ut,Oe,ke]).includes(m)){var b,M,I,K=function(){b=new Set,M=new Map,I=new Map;var L=l();return L.forEach(function(D){var N=document.querySelector("[data-menu-id='".concat(dt(o,D),"']"));N&&(b.add(N),I.set(N,D),M.set(D,N))}),b};K();var h=M.get(t),f=Hn(h,b),C=I.get(f),d=Un(r,i(C,!0).length===1,a,m);if(!d&&m!==Oe&&m!==ke)return;(Nt.includes(m)||[Oe,ke].includes(m))&&P.preventDefault();var H=function(L){if(L){var D=L,N=L.querySelector("a");N!=null&&N.getAttribute("href")&&(D=N);var ne=I.get(L);u(ne),p(),v.current=$e(function(){E.current===ne&&D.focus()})}};if([Oe,ke].includes(m)||d.sibling||!f){var x;!f||r==="inline"?x=n.current:x=zn(f);var G,W=zt(x,b);m===Oe?G=W[0]:m===ke?G=W[W.length-1]:G=wt(x,b,f,d.offset),H(G)}else if(d.inlineTrigger)s(C);else if(d.offset>0)s(C,!0),p(),v.current=$e(function(){K();var O=f.getAttribute("aria-controls"),L=document.getElementById(O),D=wt(L,b);H(D)},5);else if(d.offset<0){var w=i(C,!0),$=w[w.length-2],ee=M.get($);s($,!1),H(ee)}}c==null||c(P)}}function Wn(r){Promise.resolve().then(r)}var ft="__RC_UTIL_PATH_SPLIT__",_t=function(t){return t.join(ft)},jn=function(t){return t.split(ft)},st="rc-menu-more";function qn(){var r=e.useState({}),t=A(r,2),a=t[1],o=e.useRef(new Map),n=e.useRef(new Map),l=e.useState([]),i=A(l,2),u=i[0],s=i[1],c=e.useRef(0),v=e.useRef(!1),E=function(){v.current||a({})},p=e.useCallback(function(h,f){var C=_t(f);n.current.set(C,h),o.current.set(h,C),c.current+=1;var d=c.current;Wn(function(){d===c.current&&E()})},[]),P=e.useCallback(function(h,f){var C=_t(f);n.current.delete(C),o.current.delete(h)},[]),m=e.useCallback(function(h){s(h)},[]),b=e.useCallback(function(h,f){var C=o.current.get(h)||"",d=jn(C);return f&&u.includes(d[0])&&d.unshift(st),d},[u]),M=e.useCallback(function(h,f){return h.some(function(C){var d=b(C,!0);return d.includes(f)})},[b]),I=function(){var f=Me(o.current.keys());return u.length&&f.push(st),f},K=e.useCallback(function(h){var f="".concat(o.current.get(h)).concat(ft),C=new Set;return Me(n.current.keys()).forEach(function(d){d.startsWith(f)&&C.add(n.current.get(d))}),C},[]);return e.useEffect(function(){return function(){v.current=!0}},[]),{registerPath:p,unregisterPath:P,refreshOverflowKeys:m,isSubPathKey:M,getKeyPath:b,getKeys:I,getSubPathKeys:K}}function ye(r){var t=e.useRef(r);t.current=r;var a=e.useCallback(function(){for(var o,n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(o=t.current)===null||o===void 0?void 0:o.call.apply(o,[t].concat(l))},[]);return r?a:void 0}var Yn=Math.random().toFixed(5).toString().slice(2),Dt=0;function Bn(r){var t=Ye(r,{value:r}),a=A(t,2),o=a[0],n=a[1];return e.useEffect(function(){Dt+=1;var l="".concat(Yn,"-").concat(Dt);n("rc-menu-uuid-".concat(l))},[]),o}function Ht(r,t,a,o){var n=e.useContext(J),l=n.activeKey,i=n.onActive,u=n.onInactive,s={active:l===r};return t||(s.onMouseEnter=function(c){a==null||a({key:r,domEvent:c}),i(r)},s.onMouseLeave=function(c){o==null||o({key:r,domEvent:c}),u(r)}),s}function Gt(r){var t=e.useContext(J),a=t.mode,o=t.rtl,n=t.inlineIndent;if(a!=="inline")return null;var l=r;return o?{paddingRight:l*n}:{paddingLeft:l*n}}function Wt(r){var t=r.icon,a=r.props,o=r.children,n;return typeof t=="function"?n=e.createElement(t,_({},a)):n=t,n||o||null}var Xn=["item"];function Je(r){var t=r.item,a=B(r,Xn);return Object.defineProperty(a,"item",{get:function(){return kt(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),t}}),a}var Jn=["title","attribute","elementRef"],Zn=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],Qn=["active"],er=function(r){Pn(a,r);var t=En(a);function a(){return Kn(this,a),t.apply(this,arguments)}return Nn(a,[{key:"render",value:function(){var n=this.props,l=n.title,i=n.attribute,u=n.elementRef,s=B(n,Jn),c=At(s,["eventKey","popupClassName","popupOffset","onTitleClick"]);return kt(!i,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),e.createElement(Ae.Item,z({},i,{title:typeof l=="string"?l:void 0},c,{ref:u}))}}]),a}(e.Component),tr=e.forwardRef(function(r,t){var a,o=r.style,n=r.className,l=r.eventKey;r.warnKey;var i=r.disabled,u=r.itemIcon,s=r.children,c=r.role,v=r.onMouseEnter,E=r.onMouseLeave,p=r.onClick,P=r.onKeyDown,m=r.onFocus,b=B(r,Zn),M=Lt(l),I=e.useContext(J),K=I.prefixCls,h=I.onItemClick,f=I.disabled,C=I.overflowDisabled,d=I.itemIcon,H=I.selectedKeys,x=I.onActive,G=e.useContext(vt),W=G._internalRenderMenuItem,w="".concat(K,"-item"),$=e.useRef(),ee=e.useRef(),O=f||i,L=On(t,ee),D=Te(l),N=function(T){return{key:l,keyPath:Me(D).reverse(),item:$.current,domEvent:T}},ne=u||d,me=Ht(l,O,v,E),re=me.active,le=B(me,Qn),X=H.includes(l),ue=Gt(D.length),V=function(T){if(!O){var k=N(T);p==null||p(Je(k)),h(k)}},j=function(T){if(P==null||P(T),T.which===te.ENTER){var k=N(T);p==null||p(Je(k)),h(k)}},pe=function(T){x(l),m==null||m(T)},Ce={};r.role==="option"&&(Ce["aria-selected"]=X);var se=e.createElement(er,z({ref:$,elementRef:L,role:c===null?"none":c||"menuitem",tabIndex:i?null:-1,"data-menu-id":C&&M?null:M},b,le,Ce,{component:"li","aria-disabled":i,style:_(_({},ue),o),className:fe(w,(a={},R(a,"".concat(w,"-active"),re),R(a,"".concat(w,"-selected"),X),R(a,"".concat(w,"-disabled"),O),a),n),onClick:V,onKeyDown:j,onFocus:pe}),s,e.createElement(Wt,{props:_(_({},r),{},{isSelected:X}),icon:ne}));return W&&(se=W(se,r,{selected:X})),se});function nr(r,t){var a=r.eventKey,o=Ze(),n=Te(a);return e.useEffect(function(){if(o)return o.registerPath(a,n),function(){o.unregisterPath(a,n)}},[n]),o?null:e.createElement(tr,z({},r,{ref:t}))}const mt=e.forwardRef(nr);var rr=["className","children"],ar=function(t,a){var o=t.className,n=t.children,l=B(t,rr),i=e.useContext(J),u=i.prefixCls,s=i.mode,c=i.rtl;return e.createElement("ul",z({className:fe(u,c&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat(s==="inline"?"inline":"vertical"),o),role:"menu"},l,{"data-menu-list":!0,ref:a}),n)},pt=e.forwardRef(ar);pt.displayName="SubMenuList";var ir=["label","children","key","type"];function Ct(r,t){return kn(r).map(function(a,o){if(e.isValidElement(a)){var n,l,i=a.key,u=(n=(l=a.props)===null||l===void 0?void 0:l.eventKey)!==null&&n!==void 0?n:i,s=u==null;s&&(u="tmp_key-".concat([].concat(Me(t),[o]).join("-")));var c={key:u,eventKey:u};return e.cloneElement(a,c)}return a})}function ct(r){return(r||[]).map(function(t,a){if(t&&wn(t)==="object"){var o=t,n=o.label,l=o.children,i=o.key,u=o.type,s=B(o,ir),c=i??"tmp-".concat(a);return l||u==="group"?u==="group"?e.createElement(qt,z({key:c},s,{title:n}),ct(l)):e.createElement(ht,z({key:c},s,{title:n}),ct(l)):u==="divider"?e.createElement(Yt,z({key:c},s)):e.createElement(mt,z({key:c},s),n)}return null}).filter(function(t){return t})}function or(r,t,a){var o=r;return t&&(o=ct(t)),Ct(o,a)}var oe={adjustX:1,adjustY:1},lr={topLeft:{points:["bl","tl"],overflow:oe,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:oe,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:oe,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:oe,offset:[4,0]}},ur={topLeft:{points:["bl","tl"],overflow:oe,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:oe,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:oe,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:oe,offset:[4,0]}};function jt(r,t,a){if(t)return t;if(a)return a[r]||a.other}var sr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function cr(r){var t=r.prefixCls,a=r.visible,o=r.children,n=r.popup,l=r.popupClassName,i=r.popupOffset,u=r.disabled,s=r.mode,c=r.onVisibleChange,v=e.useContext(J),E=v.getPopupContainer,p=v.rtl,P=v.subMenuOpenDelay,m=v.subMenuCloseDelay,b=v.builtinPlacements,M=v.triggerSubMenuAction,I=v.forceSubMenuRender,K=v.rootClassName,h=v.motion,f=v.defaultMotions,C=e.useState(!1),d=A(C,2),H=d[0],x=d[1],G=p?_(_({},ur),b):_(_({},lr),b),W=sr[s],w=jt(s,h,f),$=e.useRef(w);s!=="inline"&&($.current=w);var ee=_(_({},$.current),{},{leavedClassName:"".concat(t,"-hidden"),removeOnLeave:!1,motionAppear:!0}),O=e.useRef();return e.useEffect(function(){return O.current=$e(function(){x(a)}),function(){$e.cancel(O.current)}},[a]),e.createElement($n,{prefixCls:t,popupClassName:fe("".concat(t,"-popup"),R({},"".concat(t,"-rtl"),p),l,K),stretch:s==="horizontal"?"minWidth":null,getPopupContainer:E,builtinPlacements:G,popupPlacement:W,popupVisible:H,popup:n,popupAlign:i&&{offset:i},action:u?[]:[M],mouseEnterDelay:P,mouseLeaveDelay:m,onPopupVisibleChange:c,forceRender:I,popupMotion:ee},o)}function dr(r){var t=r.id,a=r.open,o=r.keyPath,n=r.children,l="inline",i=e.useContext(J),u=i.prefixCls,s=i.forceSubMenuRender,c=i.motion,v=i.defaultMotions,E=i.mode,p=e.useRef(!1);p.current=E===l;var P=e.useState(!p.current),m=A(P,2),b=m[0],M=m[1],I=p.current?a:!1;e.useEffect(function(){p.current&&M(!1)},[E]);var K=_({},jt(l,c,v));o.length>1&&(K.motionAppear=!1);var h=K.onVisibleChanged;return K.onVisibleChanged=function(f){return!p.current&&!f&&M(!0),h==null?void 0:h(f)},b?null:e.createElement(Le,{mode:l,locked:!p.current},e.createElement(Ln,z({visible:I},K,{forceRender:s,removeOnLeave:!1,leavedClassName:"".concat(u,"-hidden")}),function(f){var C=f.className,d=f.style;return e.createElement(pt,{id:t,className:C,style:d},n)}))}var vr=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],fr=["active"],mr=function(t){var a,o=t.style,n=t.className,l=t.title,i=t.eventKey;t.warnKey;var u=t.disabled,s=t.internalPopupClose,c=t.children,v=t.itemIcon,E=t.expandIcon,p=t.popupClassName,P=t.popupOffset,m=t.onClick,b=t.onMouseEnter,M=t.onMouseLeave,I=t.onTitleClick,K=t.onTitleMouseEnter,h=t.onTitleMouseLeave,f=B(t,vr),C=Lt(i),d=e.useContext(J),H=d.prefixCls,x=d.mode,G=d.openKeys,W=d.disabled,w=d.overflowDisabled,$=d.activeKey,ee=d.selectedKeys,O=d.itemIcon,L=d.expandIcon,D=d.onItemClick,N=d.onOpenChange,ne=d.onActive,me=e.useContext(vt),re=me._internalRenderSubMenuItem,le=e.useContext(Vt),X=le.isSubPathKey,ue=Te(),V="".concat(H,"-submenu"),j=W||u,pe=e.useRef(),Ce=e.useRef(),se=v||O,ae=E||L,T=G.includes(i),k=!w&&T,Fe=X(ee,i),Ve=Ht(i,j,K,h),xe=Ve.active,Se=B(Ve,fr),Re=e.useState(!1),Ue=A(Re,2),Pe=Ue[0],ze=Ue[1],He=function(Y){j||ze(Y)},Z=function(Y){He(!0),b==null||b({key:i,domEvent:Y})},et=function(Y){He(!1),M==null||M({key:i,domEvent:Y})},Ee=e.useMemo(function(){return xe||(x!=="inline"?Pe||X([$],i):!1)},[x,xe,$,Pe,i,X]),Ge=Gt(ue.length),tt=function(Y){j||(I==null||I({key:i,domEvent:Y}),x==="inline"&&N(i,!T))},he=ye(function(Q){m==null||m(Je(Q)),D(Q)}),Ke=function(Y){x!=="inline"&&N(i,Y)},Ne=function(){ne(i)},we=C&&"".concat(C,"-popup"),ge=e.createElement("div",z({role:"menuitem",style:Ge,className:"".concat(V,"-title"),tabIndex:j?null:-1,ref:pe,title:typeof l=="string"?l:null,"data-menu-id":w&&C?null:C,"aria-expanded":k,"aria-haspopup":!0,"aria-controls":we,"aria-disabled":j,onClick:tt,onFocus:Ne},Se),l,e.createElement(Wt,{icon:x!=="horizontal"?ae:null,props:_(_({},t),{},{isOpen:k,isSubMenu:!0})},e.createElement("i",{className:"".concat(V,"-arrow")}))),q=e.useRef(x);if(x!=="inline"&&ue.length>1?q.current="vertical":q.current=x,!w){var be=q.current;ge=e.createElement(cr,{mode:be,prefixCls:V,visible:!s&&k&&x!=="inline",popupClassName:p,popupOffset:P,popup:e.createElement(Le,{mode:be==="horizontal"?"vertical":be},e.createElement(pt,{id:we,ref:Ce},c)),disabled:j,onVisibleChange:Ke},ge)}var ce=e.createElement(Ae.Item,z({role:"none"},f,{component:"li",style:o,className:fe(V,"".concat(V,"-").concat(x),n,(a={},R(a,"".concat(V,"-open"),k),R(a,"".concat(V,"-active"),Ee),R(a,"".concat(V,"-selected"),Fe),R(a,"".concat(V,"-disabled"),j),a)),onMouseEnter:Z,onMouseLeave:et}),ge,!w&&e.createElement(dr,{id:we,open:k,keyPath:ue},c));return re&&(ce=re(ce,t,{selected:Fe,active:Ee,open:k,disabled:j})),e.createElement(Le,{onItemClick:he,mode:x==="horizontal"?"vertical":x,itemIcon:se,expandIcon:ae},ce)};function ht(r){var t=r.eventKey,a=r.children,o=Te(t),n=Ct(a,o),l=Ze();e.useEffect(function(){if(l)return l.registerPath(t,o),function(){l.unregisterPath(t,o)}},[o]);var i;return l?i=n:i=e.createElement(mr,r,n),e.createElement(Ft.Provider,{value:o},i)}var pr=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],Ie=[],Cr=e.forwardRef(function(r,t){var a,o,n=r,l=n.prefixCls,i=l===void 0?"rc-menu":l,u=n.rootClassName,s=n.style,c=n.className,v=n.tabIndex,E=v===void 0?0:v,p=n.items,P=n.children,m=n.direction,b=n.id,M=n.mode,I=M===void 0?"vertical":M,K=n.inlineCollapsed,h=n.disabled,f=n.disabledOverflow,C=n.subMenuOpenDelay,d=C===void 0?.1:C,H=n.subMenuCloseDelay,x=H===void 0?.1:H,G=n.forceSubMenuRender,W=n.defaultOpenKeys,w=n.openKeys,$=n.activeKey,ee=n.defaultActiveFirst,O=n.selectable,L=O===void 0?!0:O,D=n.multiple,N=D===void 0?!1:D,ne=n.defaultSelectedKeys,me=n.selectedKeys,re=n.onSelect,le=n.onDeselect,X=n.inlineIndent,ue=X===void 0?24:X,V=n.motion,j=n.defaultMotions,pe=n.triggerSubMenuAction,Ce=pe===void 0?"hover":pe,se=n.builtinPlacements,ae=n.itemIcon,T=n.expandIcon,k=n.overflowedIndicator,Fe=k===void 0?"...":k,Ve=n.overflowedIndicatorPopupClassName,xe=n.getPopupContainer,Se=n.onClick,Re=n.onOpenChange,Ue=n.onKeyDown;n.openAnimation,n.openTransitionName;var Pe=n._internalRenderMenuItem,ze=n._internalRenderSubMenuItem,He=B(n,pr),Z=e.useMemo(function(){return or(P,p,Ie)},[P,p]),et=e.useState(!1),Ee=A(et,2),Ge=Ee[0],tt=Ee[1],he=e.useRef(),Ke=Bn(b),Ne=m==="rtl",we=Ye(W,{value:w,postState:function(g){return g||Ie}}),ge=A(we,2),q=ge[0],be=ge[1],ce=function(g){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function F(){be(g),Re==null||Re(g)}y?An.flushSync(F):F()},Q=e.useState(q),Y=A(Q,2),Bt=Y[0],Xt=Y[1],nt=e.useRef(!1),Jt=e.useMemo(function(){return(I==="inline"||I==="vertical")&&K?["vertical",K]:[I,!1]},[I,K]),gt=A(Jt,2),We=gt[0],rt=gt[1],bt=We==="inline",Zt=e.useState(We),It=A(Zt,2),ie=It[0],Qt=It[1],en=e.useState(rt),yt=A(en,2),tn=yt[0],nn=yt[1];e.useEffect(function(){Qt(We),nn(rt),nt.current&&(bt?be(Bt):ce(Ie))},[We,rt]);var rn=e.useState(0),Mt=A(rn,2),je=Mt[0],an=Mt[1],at=je>=Z.length-1||ie!=="horizontal"||f;e.useEffect(function(){bt&&Xt(q)},[q]),e.useEffect(function(){return nt.current=!0,function(){nt.current=!1}},[]);var de=qn(),xt=de.registerPath,St=de.unregisterPath,on=de.refreshOverflowKeys,Rt=de.isSubPathKey,ln=de.getKeyPath,un=de.getKeys,sn=de.getSubPathKeys,cn=e.useMemo(function(){return{registerPath:xt,unregisterPath:St}},[xt,St]),dn=e.useMemo(function(){return{isSubPathKey:Rt}},[Rt]);e.useEffect(function(){on(at?Ie:Z.slice(je+1).map(function(S){return S.key}))},[je,at]);var vn=Ye($||ee&&((a=Z[0])===null||a===void 0?void 0:a.key),{value:$}),Pt=A(vn,2),_e=Pt[0],it=Pt[1],fn=ye(function(S){it(S)}),mn=ye(function(){it(void 0)});e.useImperativeHandle(t,function(){return{list:he.current,focus:function(g){var y,F=_e??((y=Z.find(function(Rn){return!Rn.props.disabled}))===null||y===void 0?void 0:y.key);if(F){var U,ve,De;(U=he.current)===null||U===void 0||(ve=U.querySelector("li[data-menu-id='".concat(dt(Ke,F),"']")))===null||ve===void 0||(De=ve.focus)===null||De===void 0||De.call(ve,g)}}}});var pn=Ye(ne||[],{value:me,postState:function(g){return Array.isArray(g)?g:g==null?Ie:[g]}}),Et=A(pn,2),qe=Et[0],Cn=Et[1],hn=function(g){if(L){var y=g.key,F=qe.includes(y),U;N?F?U=qe.filter(function(De){return De!==y}):U=[].concat(Me(qe),[y]):U=[y],Cn(U);var ve=_(_({},g),{},{selectedKeys:U});F?le==null||le(ve):re==null||re(ve)}!N&&q.length&&ie!=="inline"&&ce(Ie)},gn=ye(function(S){Se==null||Se(Je(S)),hn(S)}),Kt=ye(function(S,g){var y=q.filter(function(U){return U!==S});if(g)y.push(S);else if(ie!=="inline"){var F=sn(S);y=y.filter(function(U){return!F.has(U)})}Ot(q,y,!0)||ce(y,!0)}),bn=ye(xe),In=function(g,y){var F=y??!q.includes(g);Kt(g,F)},yn=Gn(ie,_e,Ne,Ke,he,un,ln,it,In,Ue);e.useEffect(function(){tt(!0)},[]);var Mn=e.useMemo(function(){return{_internalRenderMenuItem:Pe,_internalRenderSubMenuItem:ze}},[Pe,ze]),xn=ie!=="horizontal"||f?Z:Z.map(function(S,g){return e.createElement(Le,{key:S.key,overflowDisabled:g>je},S)}),Sn=e.createElement(Ae,z({id:b,ref:he,prefixCls:"".concat(i,"-overflow"),component:"ul",itemComponent:mt,className:fe(i,"".concat(i,"-root"),"".concat(i,"-").concat(ie),c,(o={},R(o,"".concat(i,"-inline-collapsed"),tn),R(o,"".concat(i,"-rtl"),Ne),o),u),dir:m,style:s,role:"menu",tabIndex:E,data:xn,renderRawItem:function(g){return g},renderRawRest:function(g){var y=g.length,F=y?Z.slice(-y):null;return e.createElement(ht,{eventKey:st,title:Fe,disabled:at,internalPopupClose:y===0,popupClassName:Ve},F)},maxCount:ie!=="horizontal"||f?Ae.INVALIDATE:Ae.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(g){an(g)},onKeyDown:yn},He));return e.createElement(vt.Provider,{value:Mn},e.createElement($t.Provider,{value:Ke},e.createElement(Le,{prefixCls:i,rootClassName:u,mode:ie,openKeys:q,rtl:Ne,disabled:h,motion:Ge?V:null,defaultMotions:Ge?j:null,activeKey:_e,onActive:fn,onInactive:mn,selectedKeys:qe,inlineIndent:ue,subMenuOpenDelay:d,subMenuCloseDelay:x,forceSubMenuRender:G,builtinPlacements:se,triggerSubMenuAction:Ce,getPopupContainer:bn,itemIcon:ae,expandIcon:T,onItemClick:gn,onOpenChange:Kt},e.createElement(Vt.Provider,{value:dn},Sn),e.createElement("div",{style:{display:"none"},"aria-hidden":!0},e.createElement(Tt.Provider,{value:cn},Z)))))}),hr=["className","title","eventKey","children"],gr=["children"],br=function(t){var a=t.className,o=t.title;t.eventKey;var n=t.children,l=B(t,hr),i=e.useContext(J),u=i.prefixCls,s="".concat(u,"-item-group");return e.createElement("li",z({role:"presentation"},l,{onClick:function(v){return v.stopPropagation()},className:fe(s,a)}),e.createElement("div",{role:"presentation",className:"".concat(s,"-title"),title:typeof o=="string"?o:void 0},o),e.createElement("ul",{role:"group",className:"".concat(s,"-list")},n))};function qt(r){var t=r.children,a=B(r,gr),o=Te(a.eventKey),n=Ct(t,o),l=Ze();return l?n:e.createElement(br,At(a,["warnKey"]),n)}function Yt(r){var t=r.className,a=r.style,o=e.useContext(J),n=o.prefixCls,l=Ze();return l?null:e.createElement("li",{className:fe("".concat(n,"-item-divider"),t),style:a})}var Qe=Cr;Qe.Item=mt;Qe.SubMenu=ht;Qe.ItemGroup=qt;Qe.Divider=Yt;export{Yt as D,Qe as E,mt as M,ht as S,qt as a,Te as u};

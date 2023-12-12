"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[8426],{51175:function(Pt,De,$){$.d(De,{Z:function(){return p}});var Oe=$(84875),Z=$.n(Oe),C=$(50959),O=$(11145),L=$(54331),l=e=>{const{prefixCls:t,className:n,style:o,size:u,shape:f}=e,i=Z()({[`${t}-lg`]:u==="large",[`${t}-sm`]:u==="small"}),c=Z()({[`${t}-circle`]:f==="circle",[`${t}-square`]:f==="square",[`${t}-round`]:f==="round"}),a=C.useMemo(()=>typeof u=="number"?{width:u,height:u,lineHeight:`${u}px`}:{},[u]);return C.createElement("span",{className:Z()(t,i,c,n),style:Object.assign(Object.assign({},a),o)})},ze=$(10502),Be=$(66050),ve=$(17069);const we=new ze.Keyframes("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),le=e=>({height:e,lineHeight:`${e}px`}),_=e=>Object.assign({width:e},le(e)),X=e=>({background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:we,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),de=e=>Object.assign({width:e*5,minWidth:e*5},le(e)),Fe=e=>{const{skeletonAvatarCls:t,gradientFromColor:n,controlHeight:o,controlHeightLG:u,controlHeightSM:f}=e;return{[`${t}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:n},_(o)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},_(u)),[`${t}${t}-sm`]:Object.assign({},_(f))}},Ne=e=>{const{controlHeight:t,borderRadiusSM:n,skeletonInputCls:o,controlHeightLG:u,controlHeightSM:f,gradientFromColor:i}=e;return{[`${o}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:i,borderRadius:n},de(t)),[`${o}-lg`]:Object.assign({},de(u)),[`${o}-sm`]:Object.assign({},de(f))}},He=e=>Object.assign({width:e},le(e)),Ae=e=>{const{skeletonImageCls:t,imageSizeBase:n,gradientFromColor:o,borderRadiusSM:u}=e;return{[`${t}`]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:o,borderRadius:u},He(n*2)),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},He(n)),{maxWidth:n*4,maxHeight:n*4}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},Se=(e,t,n)=>{const{skeletonButtonCls:o}=e;return{[`${n}${o}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${n}${o}-round`]:{borderRadius:t}}},be=e=>Object.assign({width:e*2,minWidth:e*2},le(e)),We=e=>{const{borderRadiusSM:t,skeletonButtonCls:n,controlHeight:o,controlHeightLG:u,controlHeightSM:f,gradientFromColor:i}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:i,borderRadius:t,width:o*2,minWidth:o*2},be(o))},Se(e,o,n)),{[`${n}-lg`]:Object.assign({},be(u))}),Se(e,u,`${n}-lg`)),{[`${n}-sm`]:Object.assign({},be(f))}),Se(e,f,`${n}-sm`))},Xe=e=>{const{componentCls:t,skeletonAvatarCls:n,skeletonTitleCls:o,skeletonParagraphCls:u,skeletonButtonCls:f,skeletonInputCls:i,skeletonImageCls:c,controlHeight:a,controlHeightLG:h,controlHeightSM:d,gradientFromColor:v,padding:R,marginSM:x,borderRadius:z,titleHeight:E,blockRadius:j,paragraphLiHeight:B,controlHeightXS:M,paragraphMarginTop:T}=e;return{[`${t}`]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:R,verticalAlign:"top",[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:v},_(a)),[`${n}-circle`]:{borderRadius:"50%"},[`${n}-lg`]:Object.assign({},_(h)),[`${n}-sm`]:Object.assign({},_(d))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[`${o}`]:{width:"100%",height:E,background:v,borderRadius:j,[`+ ${u}`]:{marginBlockStart:d}},[`${u}`]:{padding:0,"> li":{width:"100%",height:B,listStyle:"none",background:v,borderRadius:j,"+ li":{marginBlockStart:M}}},[`${u}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${o}, ${u} > li`]:{borderRadius:z}}},[`${t}-with-avatar ${t}-content`]:{[`${o}`]:{marginBlockStart:x,[`+ ${u}`]:{marginBlockStart:T}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},We(e)),Fe(e)),Ne(e)),Ae(e)),[`${t}${t}-block`]:{width:"100%",[`${f}`]:{width:"100%"},[`${i}`]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${o},
        ${u} > li,
        ${n},
        ${f},
        ${i},
        ${c}
      `]:Object.assign({},X(e))}}};var ee=(0,Be.Z)("Skeleton",e=>{const{componentCls:t}=e,n=(0,ve.TS)(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:e.controlHeight*1.5,borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[Xe(n)]},e=>{const{colorFillContent:t,colorFill:n}=e,o=t,u=n;return{color:o,colorGradientEnd:u,gradientFromColor:o,gradientToColor:u,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}},{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),oe=e=>{const{prefixCls:t,className:n,rootClassName:o,active:u,shape:f="circle",size:i="default"}=e,{getPrefixCls:c}=C.useContext(O.E_),a=c("skeleton",t),[h,d]=ee(a),v=(0,L.Z)(e,["prefixCls","className"]),R=Z()(a,`${a}-element`,{[`${a}-active`]:u},n,o,d);return h(C.createElement("div",{className:R},C.createElement(l,Object.assign({prefixCls:`${a}-avatar`,shape:f,size:i},v))))},Ve=e=>{const{prefixCls:t,className:n,rootClassName:o,active:u,block:f=!1,size:i="default"}=e,{getPrefixCls:c}=C.useContext(O.E_),a=c("skeleton",t),[h,d]=ee(a),v=(0,L.Z)(e,["prefixCls"]),R=Z()(a,`${a}-element`,{[`${a}-active`]:u,[`${a}-block`]:f},n,o,d);return h(C.createElement("div",{className:R},C.createElement(l,Object.assign({prefixCls:`${a}-button`,size:i},v))))};const Ge="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z";var Ke=e=>{const{prefixCls:t,className:n,rootClassName:o,style:u,active:f}=e,{getPrefixCls:i}=C.useContext(O.E_),c=i("skeleton",t),[a,h]=ee(c),d=Z()(c,`${c}-element`,{[`${c}-active`]:f},n,o,h);return a(C.createElement("div",{className:d},C.createElement("div",{className:Z()(`${c}-image`,n),style:u},C.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${c}-image-svg`},C.createElement("path",{d:Ge,className:`${c}-image-path`})))))},Ue=e=>{const{prefixCls:t,className:n,rootClassName:o,active:u,block:f,size:i="default"}=e,{getPrefixCls:c}=C.useContext(O.E_),a=c("skeleton",t),[h,d]=ee(a),v=(0,L.Z)(e,["prefixCls"]),R=Z()(a,`${a}-element`,{[`${a}-active`]:u,[`${a}-block`]:f},n,o,d);return h(C.createElement("div",{className:R},C.createElement(l,Object.assign({prefixCls:`${a}-input`,size:i},v))))},Pe=$(97605),Ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},Je=Ie,Qe=$(38782),qe=function(t,n){return C.createElement(Qe.Z,(0,Pe.Z)({},t,{ref:n,icon:Je}))},_e=C.forwardRef(qe),tt=e=>{const{prefixCls:t,className:n,rootClassName:o,style:u,active:f,children:i}=e,{getPrefixCls:c}=C.useContext(O.E_),a=c("skeleton",t),[h,d]=ee(a),v=Z()(a,`${a}-element`,{[`${a}-active`]:f},d,n,o),R=i??C.createElement(_e,null);return h(C.createElement("div",{className:v},C.createElement("div",{className:Z()(`${a}-image`,n),style:u},R)))},nt=$(94718),rt=e=>{const t=c=>{const{width:a,rows:h=2}=e;if(Array.isArray(a))return a[c];if(h-1===c)return a},{prefixCls:n,className:o,style:u,rows:f}=e,i=(0,nt.Z)(Array(f)).map((c,a)=>C.createElement("li",{key:a,style:{width:t(a)}}));return C.createElement("ul",{className:Z()(n,o),style:u},i)},Le=e=>{let{prefixCls:t,className:n,width:o,style:u}=e;return C.createElement("h3",{className:Z()(t,n),style:Object.assign({width:o},u)})};function pe(e){return e&&typeof e=="object"?e:{}}function at(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function r(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}function m(e,t){const n={};return(!e||!t)&&(n.width="61%"),!e&&t?n.rows=3:n.rows=2,n}const s=e=>{const{prefixCls:t,loading:n,className:o,rootClassName:u,style:f,children:i,avatar:c=!1,title:a=!0,paragraph:h=!0,active:d,round:v}=e,{getPrefixCls:R,direction:x,skeleton:z}=C.useContext(O.E_),E=R("skeleton",t),[j,B]=ee(E);if(n||!("loading"in e)){const M=!!c,T=!!a,w=!!h;let F;if(M){const k=Object.assign(Object.assign({prefixCls:`${E}-avatar`},at(T,w)),pe(c));F=C.createElement("div",{className:`${E}-header`},C.createElement(l,Object.assign({},k)))}let N;if(T||w){let k;if(T){const Y=Object.assign(Object.assign({prefixCls:`${E}-title`},r(M,w)),pe(a));k=C.createElement(Le,Object.assign({},Y))}let A;if(w){const Y=Object.assign(Object.assign({prefixCls:`${E}-paragraph`},m(M,T)),pe(h));A=C.createElement(rt,Object.assign({},Y))}N=C.createElement("div",{className:`${E}-content`},k,A)}const J=Z()(E,{[`${E}-with-avatar`]:M,[`${E}-active`]:d,[`${E}-rtl`]:x==="rtl",[`${E}-round`]:v},z==null?void 0:z.className,o,u,B);return j(C.createElement("div",{className:J,style:Object.assign(Object.assign({},z==null?void 0:z.style),f)},F,N))}return typeof i<"u"?i:null};s.Button=Ve,s.Avatar=oe,s.Input=Ue,s.Image=Ke,s.Node=tt;var g=s,p=g},95977:function(Pt,De,$){$.d(De,{Z:function(){return at}});var Oe=$(88028),Z=$(2595),C=$(69947),O=$(41171),L=$(22481),mt=$(51282),l=$(50959),ze=$(10422),Be=$(84875),ve=$.n(Be),we=$(87040),le=l.forwardRef(function(r,m){var s=r.height,g=r.offsetY,p=r.offsetX,e=r.children,t=r.prefixCls,n=r.onInnerResize,o=r.innerProps,u=r.rtl,f=r.extra,i={},c={display:"flex",flexDirection:"column"};if(g!==void 0){var a;i={height:s,position:"relative",overflow:"hidden"},c=(0,Z.Z)((0,Z.Z)({},c),{},(a={transform:"translateY(".concat(g,"px)")},(0,L.Z)(a,u?"marginRight":"marginLeft",-p),(0,L.Z)(a,"position","absolute"),(0,L.Z)(a,"left",0),(0,L.Z)(a,"right",0),(0,L.Z)(a,"top",0),a))}return l.createElement("div",{style:i},l.createElement(we.Z,{onResize:function(d){var v=d.offsetHeight;v&&n&&n()}},l.createElement("div",(0,Oe.Z)({style:c,className:ve()((0,L.Z)({},"".concat(t,"-holder-inner"),t)),ref:m},o),e,f)))});le.displayName="Filler";var _=le,X=$(51537);function de(r,m){var s="touches"in r?r.touches[0]:r;return s[m?"pageX":"pageY"]}var Fe=l.forwardRef(function(r,m){var s,g=r.prefixCls,p=r.rtl,e=r.scrollOffset,t=r.scrollRange,n=r.onStartMove,o=r.onStopMove,u=r.onScroll,f=r.horizontal,i=r.spinSize,c=r.containerSize,a=r.style,h=r.thumbStyle,d=l.useState(!1),v=(0,O.Z)(d,2),R=v[0],x=v[1],z=l.useState(null),E=(0,O.Z)(z,2),j=E[0],B=E[1],M=l.useState(null),T=(0,O.Z)(M,2),w=T[0],F=T[1],N=!p,J=l.useRef(),k=l.useRef(),A=l.useState(!1),Y=(0,O.Z)(A,2),ie=Y[0],te=Y[1],W=l.useRef(),G=function(){clearTimeout(W.current),te(!0),W.current=setTimeout(function(){te(!1)},3e3)},se=t-c||0,ge=c-i||0,ce=se>0,K=l.useMemo(function(){if(e===0||se===0)return 0;var D=e/se;return D*ge},[e,se,ge]),lt=function(P){P.stopPropagation(),P.preventDefault()},he=l.useRef({top:K,dragging:R,pageY:j,startTop:w});he.current={top:K,dragging:R,pageY:j,startTop:w};var Re=function(P){x(!0),B(de(P,f)),F(he.current.top),n(),P.stopPropagation(),P.preventDefault()};l.useEffect(function(){var D=function(ye){ye.preventDefault()},P=J.current,q=k.current;return P.addEventListener("touchstart",D),q.addEventListener("touchstart",Re),function(){P.removeEventListener("touchstart",D),q.removeEventListener("touchstart",Re)}},[]);var Ce=l.useRef();Ce.current=se;var $e=l.useRef();$e.current=ge,l.useEffect(function(){if(R){var D,P=function(ye){var xe=he.current,ot=xe.dragging,me=xe.pageY,it=xe.startTop;if(X.Z.cancel(D),ot){var Ee=de(ye,f)-me,ue=it;!N&&f?ue-=Ee:ue+=Ee;var Te=Ce.current,fe=$e.current,ne=fe?ue/fe:0,V=Math.ceil(ne*Te);V=Math.max(V,0),V=Math.min(V,Te),D=(0,X.Z)(function(){u(V,f)})}},q=function(){x(!1),o()};return window.addEventListener("mousemove",P),window.addEventListener("touchmove",P),window.addEventListener("mouseup",q),window.addEventListener("touchend",q),function(){window.removeEventListener("mousemove",P),window.removeEventListener("touchmove",P),window.removeEventListener("mouseup",q),window.removeEventListener("touchend",q),X.Z.cancel(D)}}},[R]),l.useEffect(function(){G()},[e]),l.useImperativeHandle(m,function(){return{delayHidden:G}});var Q="".concat(g,"-scrollbar"),H={position:"absolute",visibility:ie&&ce?null:"hidden"},U={position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"};return f?(H.height=8,H.left=0,H.right=0,H.bottom=0,U.height="100%",U.width=i,N?U.left=K:U.right=K):(H.width=8,H.top=0,H.bottom=0,N?H.right=0:H.left=0,U.width="100%",U.height=i,U.top=K),l.createElement("div",{ref:J,className:ve()(Q,(s={},(0,L.Z)(s,"".concat(Q,"-horizontal"),f),(0,L.Z)(s,"".concat(Q,"-vertical"),!f),(0,L.Z)(s,"".concat(Q,"-visible"),ie),s)),style:(0,Z.Z)((0,Z.Z)({},H),a),onMouseDown:lt,onMouseMove:G},l.createElement("div",{ref:k,className:ve()("".concat(Q,"-thumb"),(0,L.Z)({},"".concat(Q,"-thumb-moving"),R)),style:(0,Z.Z)((0,Z.Z)({},U),h),onMouseDown:Re}))}),Ne=Fe;function He(r){var m=r.children,s=r.setRef,g=l.useCallback(function(p){s(p)},[]);return l.cloneElement(m,{ref:g})}function Ae(r,m,s,g,p,e,t){var n=t.getKey;return r.slice(m,s+1).map(function(o,u){var f=m+u,i=e(o,f,{style:{width:g}}),c=n(o);return l.createElement(He,{key:c,setRef:function(h){return p(o,h)}},i)})}var Se=$(7821),be=$(21953),We=$(99044),Xe=function(){function r(){(0,be.Z)(this,r),this.maps=void 0,this.id=0,this.maps=Object.create(null)}return(0,We.Z)(r,[{key:"set",value:function(s,g){this.maps[s]=g,this.id+=1}},{key:"get",value:function(s){return this.maps[s]}}]),r}(),ee=Xe;function St(r,m,s){var g=l.useState(0),p=(0,O.Z)(g,2),e=p[0],t=p[1],n=(0,l.useRef)(new Map),o=(0,l.useRef)(new ee),u=(0,l.useRef)();function f(){X.Z.cancel(u.current)}function i(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;f();var h=function(){n.current.forEach(function(v,R){if(v&&v.offsetParent){var x=(0,Se.Z)(v),z=x.offsetHeight;o.current.get(R)!==z&&o.current.set(R,x.offsetHeight)}}),t(function(v){return v+1})};a?h():u.current=(0,X.Z)(h)}function c(a,h){var d=r(a),v=n.current.get(d);h?(n.current.set(d,h),i()):n.current.delete(d),!v!=!h&&(h?m==null||m(a):s==null||s(a))}return(0,l.useEffect)(function(){return f},[]),[c,i,o.current,e]}var oe=$(12334),Ye=$(5353),Ve=10;function Ge(r,m,s,g,p,e,t,n){var o=l.useRef(),u=l.useState(null),f=(0,O.Z)(u,2),i=f[0],c=f[1];return(0,oe.Z)(function(){if(i&&i.times<Ve){if(!r.current){c(function(G){return(0,Z.Z)({},G)});return}e();var a=i.targetAlign,h=i.originAlign,d=i.index,v=i.offset,R=r.current.clientHeight,x=!1,z=a,E=null;if(R){for(var j=a||h,B=0,M=0,T=0,w=Math.min(m.length-1,d),F=0;F<=w;F+=1){var N=p(m[F]);M=B;var J=s.get(N);T=M+(J===void 0?g:J),B=T}for(var k=j==="top"?v:R-v,A=w;A>=0;A-=1){var Y=p(m[A]),ie=s.get(Y);if(ie===void 0){x=!0;break}if(k-=ie,k<=0)break}switch(j){case"top":E=M-v;break;case"bottom":E=T-R+v;break;default:{var te=r.current.scrollTop,W=te+R;M<te?z="top":T>W&&(z="bottom")}}E!==null&&t(E),E!==i.lastTop&&(x=!0)}x&&c(function(G){return(0,Z.Z)((0,Z.Z)({},G),{},{times:G.times+1,targetAlign:z,lastTop:E})})}},[i,r.current]),function(a){if(a==null){n();return}if(X.Z.cancel(o.current),typeof a=="number")t(a);else if(a&&(0,C.Z)(a)==="object"){var h,d=a.align;"index"in a?h=a.index:h=m.findIndex(function(x){return p(x)===a.key});var v=a.offset,R=v===void 0?0:v;c({times:0,index:h,offset:R,originAlign:d})}}}function It(r,m,s,g){var p=s-r,e=m-s,t=Math.min(p,e)*2;if(g<=t){var n=Math.floor(g/2);return g%2?s+n+1:s-n}return p>e?s-(g-e):s+(g-p)}function Ke(r,m,s){var g=r.length,p=m.length,e,t;if(g===0&&p===0)return null;g<p?(e=r,t=m):(e=m,t=r);var n={__EMPTY_ITEM__:!0};function o(h){return h!==void 0?s(h):n}for(var u=null,f=Math.abs(g-p)!==1,i=0;i<t.length;i+=1){var c=o(e[i]),a=o(t[i]);if(c!==a){u=i,f=f||c!==o(t[i+1]);break}}return u===null?null:{index:u,multiple:f}}function bt(r,m,s){var g=l.useState(r),p=(0,O.Z)(g,2),e=p[0],t=p[1],n=l.useState(null),o=(0,O.Z)(n,2),u=o[0],f=o[1];return l.useEffect(function(){var i=Ke(e||[],r||[],m);(i==null?void 0:i.index)!==void 0&&(s==null||s(i.index),f(r[i.index])),t(r)},[r]),[u]}var Ue=(typeof navigator>"u"?"undefined":(0,C.Z)(navigator))==="object"&&/Firefox/i.test(navigator.userAgent),Pe=Ue,Ie=function(r,m){var s=(0,l.useRef)(!1),g=(0,l.useRef)(null);function p(){clearTimeout(g.current),s.current=!0,g.current=setTimeout(function(){s.current=!1},50)}var e=(0,l.useRef)({top:r,bottom:m});return e.current.top=r,e.current.bottom=m,function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=t<0&&e.current.top||t>0&&e.current.bottom;return n&&o?(clearTimeout(g.current),s.current=!1):(!o||s.current)&&p(),!s.current&&o}};function Je(r,m,s,g,p){var e=(0,l.useRef)(0),t=(0,l.useRef)(null),n=(0,l.useRef)(null),o=(0,l.useRef)(!1),u=Ie(m,s);function f(v,R){X.Z.cancel(t.current),e.current+=R,n.current=R,!u(R)&&(Pe||v.preventDefault(),t.current=(0,X.Z)(function(){var x=o.current?10:1;p(e.current*x),e.current=0}))}function i(v,R){p(R,!0),Pe||v.preventDefault()}var c=(0,l.useRef)(null),a=(0,l.useRef)(null);function h(v){if(r){X.Z.cancel(a.current),a.current=(0,X.Z)(function(){c.current=null},2);var R=v.deltaX,x=v.deltaY,z=v.shiftKey,E=R,j=x;(c.current==="sx"||!c.current&&z&&x&&!R)&&(E=x,j=0,c.current="sx");var B=Math.abs(E),M=Math.abs(j);c.current===null&&(c.current=g&&B>M?"x":"y"),c.current==="y"?f(v,j):i(v,E)}}function d(v){r&&(o.current=v.detail===n.current)}return[h,d]}var Qe=14/15;function qe(r,m,s){var g=(0,l.useRef)(!1),p=(0,l.useRef)(0),e=(0,l.useRef)(null),t=(0,l.useRef)(null),n,o=function(c){if(g.current){var a=Math.ceil(c.touches[0].pageY),h=p.current-a;p.current=a,s(h)&&c.preventDefault(),clearInterval(t.current),t.current=setInterval(function(){h*=Qe,(!s(h,!0)||Math.abs(h)<=.1)&&clearInterval(t.current)},16)}},u=function(){g.current=!1,n()},f=function(c){n(),c.touches.length===1&&!g.current&&(g.current=!0,p.current=Math.ceil(c.touches[0].pageY),e.current=c.target,e.current.addEventListener("touchmove",o),e.current.addEventListener("touchend",u))};n=function(){e.current&&(e.current.removeEventListener("touchmove",o),e.current.removeEventListener("touchend",u))},(0,oe.Z)(function(){return r&&m.current.addEventListener("touchstart",f),function(){var i;(i=m.current)===null||i===void 0||i.removeEventListener("touchstart",f),n(),clearInterval(t.current)}},[r])}var _e=20;function et(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=r/m*100;return isNaN(s)&&(s=0),s=Math.max(s,_e),s=Math.min(s,r/2),Math.floor(s)}function tt(r,m,s,g){var p=l.useMemo(function(){return[new Map,[]]},[r,s.id,g]),e=(0,O.Z)(p,2),t=e[0],n=e[1],o=function(f){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:f,c=t.get(f),a=t.get(i);if(c===void 0||a===void 0)for(var h=r.length,d=n.length;d<h;d+=1){var v,R=r[d],x=m(R);t.set(x,d);var z=(v=s.get(x))!==null&&v!==void 0?v:g;if(n[d]=(n[d-1]||0)+z,x===f&&(c=d),x===i&&(a=d),c!==void 0&&a!==void 0)break}return{top:n[c-1]||0,bottom:n[a]}};return o}var nt=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","direction","scrollWidth","component","onScroll","onVirtualScroll","onVisibleChange","innerProps","extraRender","styles"],pt=[],rt={overflowY:"auto",overflowAnchor:"none"};function Rt(r,m){var s=r.prefixCls,g=s===void 0?"rc-virtual-list":s,p=r.className,e=r.height,t=r.itemHeight,n=r.fullHeight,o=n===void 0?!0:n,u=r.style,f=r.data,i=r.children,c=r.itemKey,a=r.virtual,h=r.direction,d=r.scrollWidth,v=r.component,R=v===void 0?"div":v,x=r.onScroll,z=r.onVirtualScroll,E=r.onVisibleChange,j=r.innerProps,B=r.extraRender,M=r.styles,T=(0,mt.Z)(r,nt),w=!!(a!==!1&&e&&t),F=w&&f&&(t*f.length>e||!!d),N=h==="rtl",J=ve()(g,(0,L.Z)({},"".concat(g,"-rtl"),N),p),k=f||pt,A=(0,l.useRef)(),Y=(0,l.useRef)(),ie=(0,l.useState)(0),te=(0,O.Z)(ie,2),W=te[0],G=te[1],se=(0,l.useState)(0),ge=(0,O.Z)(se,2),ce=ge[0],K=ge[1],lt=(0,l.useState)(!1),he=(0,O.Z)(lt,2),Re=he[0],Ce=he[1],$e=function(){Ce(!0)},Q=function(){Ce(!1)},H=l.useCallback(function(S){return typeof c=="function"?c(S):S==null?void 0:S[c]},[c]),U={getKey:H};function D(S){G(function(b){var y;typeof S=="function"?y=S(b):y=S;var I=Ft(y);return A.current.scrollTop=I,I})}var P=(0,l.useRef)({start:0,end:k.length}),q=(0,l.useRef)(),je=bt(k,H),ye=(0,O.Z)(je,1),xe=ye[0];q.current=xe;var ot=St(H,null,null),me=(0,O.Z)(ot,4),it=me[0],Ee=me[1],ue=me[2],Te=me[3],fe=l.useMemo(function(){if(!w)return{scrollHeight:void 0,start:0,end:k.length-1,offset:void 0};if(!F){var S;return{scrollHeight:((S=Y.current)===null||S===void 0?void 0:S.offsetHeight)||0,start:0,end:k.length-1,offset:void 0}}for(var b=0,y,I,ae,Ut=k.length,ke=0;ke<Ut;ke+=1){var Jt=k[ke],Qt=H(Jt),Ht=ue.get(Qt),ht=b+(Ht===void 0?t:Ht);ht>=W&&y===void 0&&(y=ke,I=b),ht>W+e&&ae===void 0&&(ae=ke),b=ht}return y===void 0&&(y=0,I=0,ae=Math.ceil(e/t)),ae===void 0&&(ae=k.length-1),ae=Math.min(ae+1,k.length-1),{scrollHeight:b,start:y,end:ae,offset:I}},[F,w,W,k,Te,e]),ne=fe.scrollHeight,V=fe.start,Me=fe.end,Ct=fe.offset;P.current.start=V,P.current.end=Me;var Lt=l.useState({width:0,height:e}),$t=(0,O.Z)(Lt,2),re=$t[0],jt=$t[1],Tt=function(b){jt(b)},yt=(0,l.useRef)(),xt=(0,l.useRef)(),Dt=l.useMemo(function(){return et(re.width,d)},[re.width,d]),Bt=l.useMemo(function(){return et(re.height,ne)},[re.height,ne]),st=ne-e,ct=(0,l.useRef)(st);ct.current=st;function Ft(S){var b=S;return Number.isNaN(ct.current)||(b=Math.min(b,ct.current)),b=Math.max(b,0),b}var Et=W<=0,Mt=W>=st,At=Ie(Et,Mt),ut=function(){return{x:N?-ce:ce,y:W}},ft=(0,l.useRef)(ut()),vt=(0,Ye.useEvent)(function(){if(z){var S=ut();(ft.current.x!==S.x||ft.current.y!==S.y)&&(z(S),ft.current=S)}});function Zt(S,b){var y=S;b?((0,ze.flushSync)(function(){K(y)}),vt()):D(y)}function Wt(S){var b=S.currentTarget.scrollTop;b!==W&&D(b),x==null||x(S),vt()}var dt=function(b){var y=b,I=d-re.width;return y=Math.max(y,0),y=Math.min(y,I),y},Xt=(0,Ye.useEvent)(function(S,b){b?((0,ze.flushSync)(function(){K(function(y){var I=y+(N?-S:S);return dt(I)})}),vt()):D(function(y){var I=y+S;return I})}),Yt=Je(w,Et,Mt,!!d,Xt),kt=(0,O.Z)(Yt,2),gt=kt[0],Ot=kt[1];qe(w,A,function(S,b){return At(S,b)?!1:(gt({preventDefault:function(){},deltaY:S}),!0)}),(0,oe.Z)(function(){function S(y){w&&y.preventDefault()}var b=A.current;return b.addEventListener("wheel",gt),b.addEventListener("DOMMouseScroll",Ot),b.addEventListener("MozMousePixelScroll",S),function(){b.removeEventListener("wheel",gt),b.removeEventListener("DOMMouseScroll",Ot),b.removeEventListener("MozMousePixelScroll",S)}},[w]),(0,oe.Z)(function(){d&&K(function(S){return dt(S)})},[re.width,d]);var zt=function(){var b,y;(b=yt.current)===null||b===void 0||b.delayHidden(),(y=xt.current)===null||y===void 0||y.delayHidden()},wt=Ge(A,k,ue,t,H,function(){return Ee(!0)},D,zt);l.useImperativeHandle(m,function(){return{getScrollInfo:ut,scrollTo:function(b){function y(I){return I&&(0,C.Z)(I)==="object"&&("left"in I||"top"in I)}y(b)?(b.left!==void 0&&K(dt(b.left)),wt(b.top)):wt(b)}}}),(0,oe.Z)(function(){if(E){var S=k.slice(V,Me+1);E(S,k)}},[V,Me,k]);var Vt=tt(k,H,ue,t),Gt=B==null?void 0:B({start:V,end:Me,virtual:F,offsetX:ce,offsetY:Ct,rtl:N,getSize:Vt}),Kt=Ae(k,V,Me,d,it,i,U),Ze=null;e&&(Ze=(0,Z.Z)((0,L.Z)({},o?"height":"maxHeight",e),rt),w&&(Ze.overflowY="hidden",d&&(Ze.overflowX="hidden"),Re&&(Ze.pointerEvents="none")));var Nt={};return N&&(Nt.dir="rtl"),l.createElement("div",(0,Oe.Z)({style:(0,Z.Z)((0,Z.Z)({},u),{},{position:"relative"}),className:J},Nt,T),l.createElement(we.Z,{onResize:Tt},l.createElement(R,{className:"".concat(g,"-holder"),style:Ze,ref:A,onScroll:Wt,onMouseEnter:zt},l.createElement(_,{prefixCls:g,height:ne,offsetX:ce,offsetY:Ct,scrollWidth:d,onInnerResize:Ee,ref:Y,innerProps:j,rtl:N,extra:Gt},Kt))),F&&ne>e&&l.createElement(Ne,{ref:yt,prefixCls:g,scrollOffset:W,scrollRange:ne,rtl:N,onScroll:Zt,onStartMove:$e,onStopMove:Q,spinSize:Bt,containerSize:re.height,style:M==null?void 0:M.verticalScrollBar,thumbStyle:M==null?void 0:M.verticalScrollBarThumb}),F&&d&&l.createElement(Ne,{ref:xt,prefixCls:g,scrollOffset:ce,scrollRange:d,rtl:N,onScroll:Zt,onStartMove:$e,onStopMove:Q,spinSize:Dt,containerSize:re.width,horizontal:!0,style:M==null?void 0:M.horizontalScrollBar,thumbStyle:M==null?void 0:M.horizontalScrollBarThumb}))}var Le=l.forwardRef(Rt);Le.displayName="List";var pe=Le,at=pe}}]);

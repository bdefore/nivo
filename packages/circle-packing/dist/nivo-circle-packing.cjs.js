"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),o=require("@nivo/core"),r=require("d3-hierarchy"),t=require("lodash/cloneDeep"),i=require("lodash/sortBy"),n=require("@nivo/colors"),l=require("@nivo/tooltip"),a=require("react/jsx-runtime"),u=require("@react-spring/web");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var o=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var t=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(o,r,t.get?t:{enumerable:!0,get:function(){return e[r]}})}})),o.default=e,Object.freeze(o)}var c=s(e),v=d(t),f=d(i);function h(){return h=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},h.apply(this,arguments)}function p(e,o){if(null==e)return{};var r,t,i={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||(i[r]=e[r]);return i}var m,C=function(e){var t,i=e.data,l=e.id,a=e.value,u=e.valueFormat,d=e.width,s=e.height,c=e.padding,h=e.leavesOnly,p=e.colors,m=e.colorBy,C=e.inheritColorFromParent,b=e.childColor,x=o.usePropertyAccessor(l),y=o.usePropertyAccessor(a),g=o.useValueFormatter(u),M=n.useOrdinalColorScale(p,m),k=o.useTheme(),j=n.useInheritedColor(b,k),E=v.default(i),P=r.hierarchy(E).sum(y),I=r.pack().size([d,s]).padding(c)(P),w=h?I.leaves():I.descendants(),F=f.default(w,"depth"),W=null!=(t=P.value)?t:0,R=F.reduce((function(e,o){var r,t=x(o.data),i=o.value,n=100*i/W,l=o.ancestors().map((function(e){return x(e.data)}));o.parent&&(r=e.find((function(e){return e.id===x(o.parent.data)})));var a={id:t,path:l,value:i,percentage:n,formattedValue:u?g(i):n.toFixed(2)+"%",x:o.x,y:o.y,radius:o.r,color:"",data:o.data,depth:o.depth,height:o.height};return C&&r&&a.depth>1?a.color=j(r):a.color=M(a),[].concat(e,[a])}),[]);return R},b=function(o,r,t,i){return e.useMemo((function(){if(!r)return o;var e=o.find((function(e){return e.id===r}));if(!e)return o;var n=Math.min(t,i)/(2*e.radius),l=t/2-e.x*n,a=i/2-e.y*n;return o.map((function(e){return h({},e,{x:e.x*n+l,y:e.y*n+a,radius:e.radius*n})}))}),[o,r,t,i])},x=function(r){var t=r.nodes,i=r.label,l=r.filter,a=r.skipRadius,u=r.textColor,d=o.usePropertyAccessor(i),s=o.useTheme(),c=n.useInheritedColor(u,s),v=e.useMemo((function(){return t.filter((function(e){return e.radius>=a})).map((function(e){return{label:d(e),textColor:c(e),node:e}}))}),[t,a,d,c]);return e.useMemo((function(){return l?v.filter(l):v}),[v,l])},y=function(o,r){var t=r.onMouseEnter,i=r.onMouseMove,n=r.onMouseLeave,l=r.onClick;return e.useMemo((function(){return{onMouseEnter:t?function(e){t(o,e)}:void 0,onMouseMove:i?function(e){i(o,e)}:void 0,onMouseLeave:n?function(e){n(o,e)}:void 0,onClick:l?function(e){l(o,e)}:void 0}}),[o,t,i,n,l])},g=function(r){var t=r.nodes,i=r.canvasEl,n=r.margin,l=e.useMemo((function(){return f.default(t,"height")}),[t]);return e.useCallback((function(e){if(!i.current)return null;var r=o.getRelativeCursor(i.current,e),t=r[0],a=r[1];return l.find((function(e){return o.getDistance(e.x,e.y,t-n.left,a-n.top)<=e.radius}))}),[i,n,l])},M=function(o){var r=o.nodes;return e.useMemo((function(){return{nodes:r}}),[r])},k={id:"id",value:"value",padding:0,leavesOnly:!1,layers:["circles","labels"],colors:{scheme:"nivo"},colorBy:"depth",inheritColorFromParent:!1,childColor:{from:"color",modifiers:[["darker",.3]]},borderWidth:0,borderColor:{from:"color",modifiers:[["darker",.3]]},defs:[],fill:[],enableLabels:!1,label:"id",labelTextColor:{from:"color",modifiers:[["darker",1.6]]},labelsSkipRadius:8,isInteractive:!0,tooltip:function(e){var o=e.id,r=e.formattedValue,t=e.color;return a.jsx(l.BasicTooltip,{id:o,value:r,enableChip:!0,color:t})},animate:!0,motionConfig:"gentle",role:"img",pixelRatio:"undefined"!=typeof window&&null!=(m=window.devicePixelRatio)?m:1},j=function(e){return u.to([e],(function(e){return Math.max(0,e)}))},E=function(r){var t=r.nodes,i=r.borderWidth,d=r.borderColor,s=r.component,v=r.isInteractive,f=r.onMouseEnter,p=r.onMouseMove,m=r.onMouseLeave,C=r.onClick,b=r.tooltip,x=l.useTooltip(),y=x.showTooltipFromEvent,g=x.hideTooltip,M=e.useMemo((function(){if(v)return function(o,r){y(e.createElement(b,o),r),null==f||f(o,r)}}),[v,y,b,f]),k=e.useMemo((function(){if(v)return function(o,r){y(e.createElement(b,o),r),null==p||p(o,r)}}),[v,y,b,p]),E=e.useMemo((function(){if(v)return function(e,o){g(),null==m||m(e,o)}}),[v,g,m]),P=e.useMemo((function(){if(v)return function(e,o){null==C||C(e,o)}}),[v,C]),I=o.useMotionConfig(),w=I.animate,F=I.config,W=o.useTheme(),R=n.useInheritedColor(d,W),L=e.useMemo((function(){return function(e){return{enter:function(o){return{x:o.x,y:o.y,radius:0,color:o.color,borderColor:e(o),opacity:0}},update:function(o){return{x:o.x,y:o.y,radius:o.radius,color:o.color,borderColor:e(o),opacity:1}},leave:function(o){return{x:o.x,y:o.y,radius:0,color:o.color,borderColor:e(o),opacity:0}}}}(R)}),[R]),O=u.useTransition(t,{keys:function(e){return e.id},initial:L.update,from:L.enter,enter:L.update,update:L.update,leave:L.leave,config:F,immediate:!w});return a.jsx(a.Fragment,{children:O((function(e,o){return c.createElement(s,{key:o.id,node:o,style:h({},e,{radius:j(e.radius),borderWidth:i}),onMouseEnter:M,onMouseMove:k,onMouseLeave:E,onClick:P})}))})},P=function(e){var o=e.node,r=e.style,t=e.onMouseEnter,i=e.onMouseMove,n=e.onMouseLeave,l=e.onClick,d=y(o,{onMouseEnter:t,onMouseMove:i,onMouseLeave:n,onClick:l});return a.jsx(u.animated.circle,{cx:r.x,cy:r.y,r:r.radius,fill:o.fill||r.color,stroke:r.borderColor,strokeWidth:r.borderWidth,opacity:r.opacity,onMouseEnter:d.onMouseEnter,onMouseMove:d.onMouseMove,onMouseLeave:d.onMouseLeave,onClick:d.onClick},o.id)},I=function(r){var t=r.nodes,i=r.label,n=r.filter,l=r.skipRadius,d=r.textColor,s=r.component,c=o.useMotionConfig(),v=c.animate,f=c.config,p=x({nodes:t,label:i,filter:n,skipRadius:l,textColor:d}),m=e.useMemo((function(){return{enter:function(e){return{x:e.node.x,y:e.node.y,radius:e.node.radius,textColor:e.textColor,opacity:0}},update:function(e){return{x:e.node.x,y:e.node.y,radius:e.node.radius,textColor:e.textColor,opacity:1}},leave:function(e){return{x:e.node.x,y:e.node.y,radius:e.node.radius,textColor:e.textColor,opacity:0}}}}),[]),C=u.useTransition(p,{keys:function(e){return e.node.id},initial:m.update,from:m.enter,enter:m.update,update:m.update,leave:m.leave,config:f,immediate:!v});return a.jsx(a.Fragment,{children:C((function(o,r){return e.createElement(s,{key:r.node.id,label:r.label,style:h({},o,{radius:j(o.radius)}),node:r.node})}))})},w=function(e){var r=e.node,t=e.label,i=e.style,n=o.useTheme();return a.jsx(u.animated.text,{x:i.x,y:i.y,textAnchor:"middle",dominantBaseline:"central",style:h({},n.labels.text,{fill:i.textColor,opacity:i.opacity,pointerEvents:"none"}),children:t},r.id)},F=["theme","isInteractive","animate","motionConfig","renderWrapper"],W=function(r){var t=r.data,i=r.id,n=void 0===i?k.id:i,l=r.value,u=void 0===l?k.value:l,d=r.valueFormat,s=r.width,c=r.height,v=r.margin,f=r.padding,h=void 0===f?k.padding:f,p=r.leavesOnly,m=void 0===p?k.leavesOnly:p,x=r.colors,y=void 0===x?k.colors:x,g=r.colorBy,j=void 0===g?k.colorBy:g,F=r.inheritColorFromParent,W=void 0===F?k.inheritColorFromParent:F,R=r.childColor,L=void 0===R?k.childColor:R,O=r.borderWidth,T=void 0===O?k.borderWidth:O,S=r.borderColor,B=void 0===S?k.borderColor:S,H=r.circleComponent,q=void 0===H?P:H,D=r.defs,z=void 0===D?k.defs:D,A=r.fill,_=void 0===A?k.fill:A,V=r.enableLabels,K=void 0===V?k.enableLabels:V,N=r.label,Z=void 0===N?k.label:N,G=r.labelsFilter,J=r.labelsSkipRadius,Q=void 0===J?k.labelsSkipRadius:J,U=r.labelTextColor,X=void 0===U?k.labelTextColor:U,Y=r.labelComponent,$=void 0===Y?w:Y,ee=r.layers,oe=void 0===ee?k.layers:ee,re=r.isInteractive,te=r.onMouseEnter,ie=r.onMouseMove,ne=r.onMouseLeave,le=r.onClick,ae=r.tooltip,ue=void 0===ae?k.tooltip:ae,de=r.zoomedId,se=r.role,ce=void 0===se?k.role:se,ve=o.useDimensions(s,c,v),fe=ve.outerWidth,he=ve.outerHeight,pe=ve.margin,me=ve.innerWidth,Ce=ve.innerHeight,be=C({data:t,id:n,value:u,valueFormat:d,width:me,height:Ce,padding:h,leavesOnly:m,colors:y,colorBy:j,inheritColorFromParent:W,childColor:L}),xe=b(be,de,me,Ce),ye=e.useMemo((function(){return o.bindDefs(z,xe,_,{targetKey:"fill"})}),[z,xe,_]),ge={circles:null,labels:null};oe.includes("circles")&&(ge.circles=a.jsx(E,{nodes:xe,borderWidth:T,borderColor:B,isInteractive:re,onMouseEnter:te,onMouseMove:ie,onMouseLeave:ne,onClick:le,component:q,tooltip:ue},"circles")),K&&oe.includes("labels")&&(ge.labels=a.jsx(I,{nodes:xe,label:Z,filter:G,skipRadius:Q,textColor:X,component:$},"labels"));var Me=M({nodes:be});return a.jsx(o.SvgWrapper,{width:fe,height:he,margin:pe,defs:ye,role:ce,children:oe.map((function(o,r){return void 0!==ge[o]?ge[o]:"function"==typeof o?a.jsx(e.Fragment,{children:e.createElement(o,Me)},r):null}))})},R=function(e){var r=e.theme,t=e.isInteractive,i=void 0===t?k.isInteractive:t,n=e.animate,l=void 0===n?k.animate:n,u=e.motionConfig,d=void 0===u?k.motionConfig:u,s=e.renderWrapper,c=p(e,F);return a.jsx(o.Container,{isInteractive:i,animate:l,motionConfig:d,renderWrapper:s,theme:r,children:a.jsx(W,h({isInteractive:i},c))})},L=function(e,o){return u.to([e,o],(function(e,o){return e-o}))},O=function(e){return u.to([e],(function(e){return 2*e}))},T=function(e){var o,r,t=e.node,i=e.style,n=e.onMouseEnter,l=e.onMouseMove,d=e.onMouseLeave,s=e.onClick,c=O(i.radius),v=y(t,{onMouseEnter:n,onMouseMove:l,onMouseLeave:d,onClick:s});return a.jsx(u.animated.div,{style:{position:"absolute",top:L(i.y,i.radius),left:L(i.x,i.radius),height:c,width:c,borderRadius:i.radius,backgroundColor:i.color,borderWidth:(o=i.borderWidth,r=i.radius,u.to([r],(function(e){return Math.min(o,e)}))),borderStyle:"solid",borderColor:i.borderColor,boxSizing:"border-box"},onMouseEnter:v.onMouseEnter,onMouseMove:v.onMouseMove,onMouseLeave:v.onMouseLeave,onClick:v.onClick})},S=function(e){var r=e.node,t=e.label,i=e.style,n=o.useTheme(),l=O(i.radius);return a.jsx(u.animated.div,{style:h({},n.labels.text,{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",top:L(i.y,i.radius),left:L(i.x,i.radius),width:l,height:l,color:i.textColor,opacity:i.opacity,pointerEvents:"none"}),children:t},r.id)},B=["theme","isInteractive","animate","motionConfig"],H=function(r){var t=r.data,i=r.id,n=void 0===i?k.id:i,l=r.value,u=void 0===l?k.value:l,d=r.valueFormat,s=r.width,c=r.height,v=r.margin,f=r.padding,h=void 0===f?k.padding:f,p=r.leavesOnly,m=void 0===p?k.leavesOnly:p,x=r.colors,y=void 0===x?k.colors:x,g=r.colorBy,j=void 0===g?k.colorBy:g,P=r.inheritColorFromParent,w=void 0===P?k.inheritColorFromParent:P,F=r.childColor,W=void 0===F?k.childColor:F,R=r.borderWidth,L=void 0===R?k.borderWidth:R,O=r.borderColor,B=void 0===O?k.borderColor:O,H=r.circleComponent,q=void 0===H?T:H,D=r.enableLabels,z=void 0===D?k.enableLabels:D,A=r.label,_=void 0===A?k.label:A,V=r.labelsFilter,K=r.labelsSkipRadius,N=void 0===K?k.labelsSkipRadius:K,Z=r.labelTextColor,G=void 0===Z?k.labelTextColor:Z,J=r.labelComponent,Q=void 0===J?S:J,U=r.layers,X=void 0===U?k.layers:U,Y=r.isInteractive,$=r.onMouseEnter,ee=r.onMouseMove,oe=r.onMouseLeave,re=r.onClick,te=r.tooltip,ie=void 0===te?k.tooltip:te,ne=r.zoomedId,le=r.role,ae=void 0===le?k.role:le,ue=o.useDimensions(s,c,v),de=ue.outerWidth,se=ue.outerHeight,ce=ue.margin,ve=ue.innerWidth,fe=ue.innerHeight,he=C({data:t,id:n,value:u,valueFormat:d,width:ve,height:fe,padding:h,leavesOnly:m,colors:y,colorBy:j,inheritColorFromParent:w,childColor:W}),pe=b(he,ne,ve,fe),me={circles:null,labels:null};X.includes("circles")&&(me.circles=a.jsx(E,{nodes:pe,borderWidth:L,borderColor:B,isInteractive:Y,onMouseEnter:$,onMouseMove:ee,onMouseLeave:oe,onClick:re,component:q,tooltip:ie},"circles")),z&&X.includes("labels")&&(me.labels=a.jsx(I,{nodes:pe,label:_,filter:V,skipRadius:N,textColor:G,component:Q},"labels"));var Ce=M({nodes:he});return a.jsx("div",{role:ae,style:{position:"relative",overflow:"hidden",width:de,height:se},children:a.jsx("div",{style:{position:"absolute",top:ce.top,left:ce.left},children:X.map((function(o,r){return void 0!==me[o]?me[o]:"function"==typeof o?a.jsx(e.Fragment,{children:e.createElement(o,Ce)},r):null}))})})},q=function(e){var r=e.theme,t=e.isInteractive,i=void 0===t?k.isInteractive:t,n=e.animate,l=void 0===n?k.animate:n,u=e.motionConfig,d=void 0===u?k.motionConfig:u,s=p(e,B);return a.jsx(o.Container,{isInteractive:i,animate:l,motionConfig:d,theme:r,children:a.jsx(H,h({isInteractive:i},s))})},D=["isInteractive","theme"],z=function(r){var t=r.data,i=r.id,u=void 0===i?k.id:i,d=r.value,s=void 0===d?k.value:d,c=r.valueFormat,v=r.width,f=r.height,h=r.margin,p=r.padding,m=void 0===p?k.padding:p,y=r.leavesOnly,M=void 0===y?k.leavesOnly:y,j=r.colors,E=void 0===j?k.colors:j,P=r.colorBy,I=void 0===P?k.colorBy:P,w=r.inheritColorFromParent,F=void 0===w?k.inheritColorFromParent:w,W=r.childColor,R=void 0===W?k.childColor:W,L=r.borderWidth,O=void 0===L?k.borderWidth:L,T=r.borderColor,S=void 0===T?k.borderColor:T,B=r.enableLabels,H=void 0===B?k.enableLabels:B,q=r.label,D=void 0===q?k.label:q,z=r.labelsFilter,A=r.labelsSkipRadius,_=void 0===A?k.labelsSkipRadius:A,V=r.labelTextColor,K=void 0===V?k.labelTextColor:V,N=r.isInteractive,Z=r.onMouseMove,G=r.onClick,J=r.tooltip,Q=void 0===J?k.tooltip:J,U=r.zoomedId,X=r.role,Y=void 0===X?k.role:X,$=r.pixelRatio,ee=void 0===$?k.pixelRatio:$,oe=e.useRef(null),re=o.useTheme(),te=o.useDimensions(v,f,h),ie=te.margin,ne=te.innerWidth,le=te.innerHeight,ae=te.outerWidth,ue=te.outerHeight,de=C({data:t,id:u,value:s,valueFormat:c,width:ne,height:le,padding:m,leavesOnly:M,colors:E,colorBy:I,inheritColorFromParent:F,childColor:R}),se=b(de,U,ne,le),ce=x({nodes:se,label:D,filter:z,skipRadius:_,textColor:K}),ve=n.useInheritedColor(S,re);e.useEffect((function(){if(oe.current){oe.current.width=ae*ee,oe.current.height=ue*ee;var e=oe.current.getContext("2d");e.scale(ee,ee),e.fillStyle=re.background,e.fillRect(0,0,ae,ue),e.save(),e.translate(ie.left,ie.top),se.forEach((function(o){O>0&&(e.strokeStyle=ve(o),e.lineWidth=O),e.beginPath(),e.arc(o.x,o.y,o.radius,0,2*Math.PI),e.fillStyle=o.color,e.fill(),O>0&&e.stroke()})),H&&(e.textAlign="center",e.textBaseline="middle",e.font=re.labels.text.fontSize+"px "+re.labels.text.fontFamily,ce.forEach((function(o){e.fillStyle=o.textColor,e.fillText(""+o.label,o.node.x,o.node.y)})))}}),[oe,ne,le,ae,ue,ie.top,ie.left,re,ee,se,H,ce,O,ve]);var fe=g({nodes:se,canvasEl:oe,margin:ie}),he=l.useTooltip(),pe=he.showTooltipFromEvent,me=he.hideTooltip,Ce=e.useCallback((function(o){var r=fe(o);r?(null==Z||Z(r,o),pe(e.createElement(Q,r),o)):me()}),[fe,pe,Q,me]),be=e.useCallback((function(){me()}),[me]),xe=e.useCallback((function(e){if(G){var o=fe(e);o&&G(o,e)}}),[fe,G]);return a.jsx("canvas",{ref:oe,width:ae*ee,height:ue*ee,style:{width:ae,height:ue,cursor:N?"auto":"normal"},role:Y,onMouseEnter:N?Ce:void 0,onMouseMove:N?Ce:void 0,onMouseLeave:N?be:void 0,onClick:N?xe:void 0})},A=function(e){var r=e.isInteractive,t=void 0===r?k.isInteractive:r,i=e.theme,n=p(e,D);return a.jsx(o.Container,{isInteractive:t,theme:i,children:a.jsx(z,h({isInteractive:t},n))})};exports.CirclePacking=R,exports.CirclePackingCanvas=A,exports.CirclePackingHtml=q,exports.InnerCirclePackingHtml=H,exports.ResponsiveCirclePacking=function(e){return a.jsx(o.ResponsiveWrapper,{children:function(o){var r=o.width,t=o.height;return a.jsx(R,h({width:r,height:t},e))}})},exports.ResponsiveCirclePackingCanvas=function(e){return a.jsx(o.ResponsiveWrapper,{children:function(o){var r=o.width,t=o.height;return a.jsx(A,h({width:r,height:t},e))}})},exports.ResponsiveCirclePackingHtml=function(e){return a.jsx(o.ResponsiveWrapper,{children:function(o){var r=o.width,t=o.height;return a.jsx(q,h({width:r,height:t},e))}})},exports.defaultProps=k,exports.useCirclePacking=C,exports.useCirclePackingLabels=x,exports.useCirclePackingLayerContext=M,exports.useCirclePackingZoom=b,exports.useMouseCircleDetection=g,exports.useNodeMouseHandlers=y;
//# sourceMappingURL=nivo-circle-packing.cjs.js.map

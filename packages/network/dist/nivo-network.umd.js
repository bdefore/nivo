!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("react"),require("@nivo/core"),require("@react-spring/web"),require("react/jsx-runtime"),require("@nivo/tooltip"),require("d3-force"),require("@nivo/colors"),require("@nivo/annotations")):"function"==typeof define&&define.amd?define(["exports","react","@nivo/core","@react-spring/web","react/jsx-runtime","@nivo/tooltip","d3-force","@nivo/colors","@nivo/annotations"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).nivo=e.nivo||{},e.React,e.nivo,e["@react-spring/web"],e["react/jsx-runtime"],e.nivo,e.d3,e.nivo,e.nivo)}(this,(function(e,n,o,i,t,r,d,a,s){"use strict";function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},c.apply(this,arguments)}function l(e,n){if(null==e)return{};var o,i,t={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],n.indexOf(o)>=0||(t[o]=e[o]);return t}var u=n.memo((function(e){var n=e.node,o=e.animated,r=e.onClick,d=e.onMouseEnter,a=e.onMouseMove,s=e.onMouseLeave;return t.jsx(i.animated.circle,{"data-testid":"node."+n.id,transform:i.to([o.x,o.y,o.scale],(function(e,n,o){return"translate("+e+","+n+") scale("+o+")"})),r:i.to([o.size],(function(e){return e/2})),fill:o.color,strokeWidth:o.borderWidth,stroke:o.borderColor,opacity:o.opacity,onClick:r?function(e){return r(n,e)}:void 0,onMouseEnter:d?function(e){return d(n,e)}:void 0,onMouseMove:a?function(e){return a(n,e)}:void 0,onMouseLeave:s?function(e){return s(n,e)}:void 0})})),v=n.memo((function(e){var n=e.link,o=e.animated,r=e.blendMode;return t.jsx(i.animated.line,{"data-testid":"link."+n.id,stroke:o.color,style:{mixBlendMode:r},strokeWidth:n.thickness,strokeLinecap:"round",opacity:o.opacity,x1:o.x1,y1:o.y1,x2:o.x2,y2:o.y2})})),f={layers:["links","nodes","annotations"],linkDistance:30,centeringStrength:1,repulsivity:10,distanceMin:1,distanceMax:1/0,iterations:120,nodeSize:12,activeNodeSize:18,inactiveNodeSize:8,nodeColor:"#000000",nodeBorderWidth:0,nodeBorderColor:{from:"color"},linkThickness:1,linkColor:{from:"source.color"},isInteractive:!0,defaultActiveNodeIds:[],nodeTooltip:function(e){var n=e.node;return t.jsx(r.BasicTooltip,{id:n.id,enableChip:!0,color:n.color})},annotations:[],animate:!0,motionConfig:"gentle",role:"img"},h=c({},f,{nodeComponent:u,linkComponent:v,linkBlendMode:"normal"}),k=c({},f,{renderNode:function(e,n){e.fillStyle=n.color,e.beginPath(),e.arc(n.x,n.y,n.size/2,0,2*Math.PI),e.fill(),n.borderWidth>0&&(e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.stroke())},renderLink:function(e,n){e.strokeStyle=n.color,e.lineWidth=n.thickness,e.beginPath(),e.moveTo(n.source.x,n.source.y),e.lineTo(n.target.x,n.target.y),e.stroke()},pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1}),p=["index"],m=function(e){return n.useMemo((function(){return"function"==typeof e?e:function(){return e}}),[e])},g=function(e){var i=e.center,t=e.nodes,r=e.links,s=e.linkDistance,u=void 0===s?f.linkDistance:s,v=e.centeringStrength,h=void 0===v?f.centeringStrength:v,k=e.repulsivity,g=void 0===k?f.repulsivity:k,C=e.distanceMin,y=void 0===C?f.distanceMin:C,x=e.distanceMax,M=void 0===x?f.distanceMax:x,b=e.iterations,S=void 0===b?f.iterations:b,N=e.nodeSize,z=void 0===N?f.nodeSize:N,I=e.activeNodeSize,W=void 0===I?f.activeNodeSize:I,T=e.inactiveNodeSize,j=void 0===T?f.inactiveNodeSize:T,B=e.nodeColor,w=void 0===B?f.nodeColor:B,A=e.nodeBorderWidth,D=void 0===A?f.nodeBorderWidth:A,E=e.nodeBorderColor,L=void 0===E?f.nodeBorderColor:E,R=e.linkThickness,P=void 0===R?f.linkThickness:R,q=e.linkColor,F=void 0===q?f.linkColor:q,O=e.isInteractive,H=void 0===O?f.isInteractive:O,_=e.defaultActiveNodeIds,G=void 0===_?f.defaultActiveNodeIds:_,J=n.useState(null),K=J[0],Q=J[1],U=n.useState(null),V=U[0],X=U[1],Y=function(e){var o=e.linkDistance,i=e.centeringStrength,t=e.repulsivity,r=e.distanceMin,a=e.distanceMax,s=e.center,c=m(o),l=s[0],u=s[1];return n.useMemo((function(){return{link:d.forceLink().distance((function(e){return c(e.data)})).strength(i),charge:d.forceManyBody().strength(-t).distanceMin(r).distanceMax(a),center:d.forceCenter(l,u)}}),[c,i,t,r,a,l,u])}({linkDistance:u,centeringStrength:h,repulsivity:g,distanceMin:y,distanceMax:M,center:i});n.useEffect((function(){var e=t.map((function(e){return{id:e.id,data:c({},e),index:0,x:0,y:0,vx:0,vy:0}})),n=r.map((function(n){return{data:c({},n),index:0,source:e.find((function(e){return e.id===n.source})),target:e.find((function(e){return e.id===n.target}))}})),o=d.forceSimulation(e).force("link",Y.link.links(n)).force("charge",Y.charge).force("center",Y.center).stop();return o.tick(S),Q(e),X(n),function(){o.stop()}}),[t,r,Y,S,Q,X]);var Z=n.useState(G),$=Z[0],ee=Z[1],ne=function(e){var i=e.size,t=e.activeSize,r=e.inactiveSize,d=e.color,s=e.borderWidth,l=e.borderColor,u=e.isInteractive,v=e.activeNodeIds,f=o.useTheme(),h=m(i),k=m(d),p=m(s),g=a.useInheritedColor(l,f),C=n.useCallback((function(e){var n=k(e.data);return{size:h(e.data),color:n,borderWidth:p(e.data),borderColor:g(c({},e,{color:n}))}}),[h,k,p,g]),y=m(t),x=n.useCallback((function(e){var n=k(e.data);return{size:y(e.data),color:n,borderWidth:p(e.data),borderColor:g(c({},e,{color:n}))}}),[y,k,p,g]),M=m(r),b=n.useCallback((function(e){var n=k(e.data);return{size:M(e.data),color:n,borderWidth:p(e.data),borderColor:g(c({},e,{color:n}))}}),[M,k,p,g]);return n.useCallback((function(e){return u&&0!==v.length?v.includes(e.id)?x(e):b(e):C(e)}),[C,x,b,u,v])}({size:z,activeSize:W,inactiveSize:j,color:w,borderWidth:D,borderColor:L,isInteractive:H,activeNodeIds:$}),oe=n.useMemo((function(){return null===K?null:K.map((function(e){return c({},e,ne(e))}))}),[K,ne]),ie=o.useTheme(),te=m(P),re=a.useInheritedColor(F,ie),de=n.useMemo((function(){return null===V||null===oe?null:V.map((function(e){var n=e.index,o=l(e,p),i={id:o.source.id+"."+o.target.id,data:o.data,index:n,source:oe.find((function(e){return e.id===o.source.id})),target:oe.find((function(e){return e.id===o.target.id}))};return c({},i,{thickness:te(i),color:re(i)})}))}),[V,oe,te,re]);return{nodes:oe,links:de,activeNodeIds:$,setActiveNodeIds:ee}},C=function(e){return{x:e.x,y:e.y}},y=function(e){return{size:e.size,width:e.size,height:e.size}},x=function(e,n){return s.useAnnotations({data:e,annotations:n,getPosition:C,getDimensions:y})},M=function(e){var r=e.links,d=e.linkComponent,a=e.blendMode,s=o.useMotionConfig(),c=s.animate,l=s.config,u=n.useMemo((function(){return[function(e){return{x1:e.source.x,y1:e.source.y,x2:e.source.x,y2:e.source.y,color:e.color,opacity:0}},function(e){return{x1:e.source.x,y1:e.source.y,x2:e.target.x,y2:e.target.y,color:e.color,opacity:1}}]}),[]),v=u[0],f=u[1],h=i.useTransition(r,{keys:function(e){return e.id},initial:f,from:v,enter:f,update:f,expires:!0,config:l,immediate:!c});return t.jsx(t.Fragment,{children:h((function(e,o){return n.createElement(d,{key:o.id,link:o,animated:e,blendMode:a})}))})},b=function(e){var d=e.nodes,a=e.nodeComponent,s=e.onMouseEnter,c=e.onMouseMove,l=e.onMouseLeave,u=e.onClick,v=e.tooltip,f=e.setActiveNodeIds,h=e.isInteractive,k=o.useMotionConfig(),p=k.animate,m=k.config,g=n.useMemo((function(){return[function(e){return{x:e.x,y:e.y,size:e.size,color:e.color,borderWidth:e.borderWidth,borderColor:e.borderColor,scale:0,opacity:0}},function(e){return{x:e.x,y:e.y,size:e.size,color:e.color,borderWidth:e.borderWidth,borderColor:e.borderColor,scale:1,opacity:1}},function(e){return{x:e.x,y:e.y,size:e.size,color:e.color,borderWidth:e.borderWidth,borderColor:e.borderColor,scale:0,opacity:0}}]}),[]),C=g[0],y=g[1],x=g[2],M=i.useTransition(d,{keys:function(e){return e.id},initial:y,from:C,enter:y,update:y,leave:x,config:m,immediate:!p}),b=r.useTooltip(),S=b.showTooltipFromEvent,N=b.hideTooltip,z=n.useCallback((function(e,o){S(n.createElement(v,{node:e}),o),f([e.id]),null==s||s(e,o)}),[S,v,f,s]),I=n.useCallback((function(e,o){S(n.createElement(v,{node:e}),o),null==c||c(e,o)}),[S,v,c]),W=n.useCallback((function(e,n){N(),f([]),null==l||l(e,n)}),[N,f,l]);return t.jsx(t.Fragment,{children:M((function(e,o){return n.createElement(a,{key:o.id,node:o,animated:e,onMouseEnter:h?z:void 0,onMouseMove:h?I:void 0,onMouseLeave:h?W:void 0,onClick:h?u:void 0})}))})},S=function(e){var n=e.nodes,o=e.annotations,i=x(n,o);return t.jsx(t.Fragment,{children:i.map((function(e,n){return t.jsx(s.Annotation,c({},e),n)}))})},N=["isInteractive","animate","motionConfig","theme","renderWrapper"],z=function(e){var i=e.width,r=e.height,d=e.margin,a=e.data,s=a.nodes,c=a.links,l=e.linkDistance,u=void 0===l?h.linkDistance:l,v=e.centeringStrength,f=void 0===v?h.centeringStrength:v,k=e.repulsivity,p=void 0===k?h.repulsivity:k,m=e.distanceMin,C=void 0===m?h.distanceMin:m,y=e.distanceMax,x=void 0===y?h.distanceMax:y,N=e.iterations,z=void 0===N?h.iterations:N,I=e.layers,W=void 0===I?h.layers:I,T=e.nodeComponent,j=void 0===T?h.nodeComponent:T,B=e.nodeSize,w=void 0===B?h.nodeSize:B,A=e.activeNodeSize,D=void 0===A?h.activeNodeSize:A,E=e.inactiveNodeSize,L=void 0===E?h.inactiveNodeSize:E,R=e.nodeColor,P=void 0===R?h.nodeColor:R,q=e.nodeBorderWidth,F=void 0===q?h.nodeBorderWidth:q,O=e.nodeBorderColor,H=void 0===O?h.nodeBorderColor:O,_=e.linkComponent,G=void 0===_?h.linkComponent:_,J=e.linkThickness,K=void 0===J?h.linkThickness:J,Q=e.linkColor,U=void 0===Q?h.linkColor:Q,V=e.linkBlendMode,X=void 0===V?h.linkBlendMode:V,Y=e.annotations,Z=void 0===Y?h.annotations:Y,$=e.isInteractive,ee=void 0===$?h.isInteractive:$,ne=e.defaultActiveNodeIds,oe=void 0===ne?h.defaultActiveNodeIds:ne,ie=e.nodeTooltip,te=void 0===ie?h.nodeTooltip:ie,re=e.onMouseEnter,de=e.onMouseMove,ae=e.onMouseLeave,se=e.onClick,ce=e.role,le=void 0===ce?h.role:ce,ue=e.ariaLabel,ve=e.ariaLabelledBy,fe=e.ariaDescribedBy,he=o.useDimensions(i,r,d),ke=he.margin,pe=he.innerWidth,me=he.innerHeight,ge=he.outerWidth,Ce=he.outerHeight,ye=g({center:[pe/2,me/2],nodes:s,links:c,linkDistance:u,centeringStrength:f,repulsivity:p,distanceMin:C,distanceMax:x,iterations:z,nodeSize:w,activeNodeSize:D,inactiveNodeSize:L,nodeColor:P,nodeBorderWidth:F,nodeBorderColor:H,linkThickness:K,linkColor:U,isInteractive:ee,defaultActiveNodeIds:oe}),xe=ye.nodes,Me=ye.links,be=ye.activeNodeIds,Se=ye.setActiveNodeIds,Ne={links:null,nodes:null,annotations:null};W.includes("links")&&null!==Me&&(Ne.links=t.jsx(M,{links:Me,linkComponent:G,blendMode:X},"links")),W.includes("nodes")&&null!==xe&&(Ne.nodes=t.jsx(b,{nodes:xe,nodeComponent:j,onMouseEnter:re,onMouseMove:de,onMouseLeave:ae,onClick:se,tooltip:te,setActiveNodeIds:Se,isInteractive:ee},"nodes")),W.includes("annotations")&&null!==xe&&(Ne.annotations=t.jsx(S,{nodes:xe,annotations:Z},"annotations"));var ze=n.useMemo((function(){return{nodes:xe||[],links:Me||[],activeNodeIds:be,setActiveNodeIds:Se}}),[xe,Me,be,Se]);return t.jsx(o.SvgWrapper,{width:ge,height:Ce,margin:ke,role:le,ariaLabel:ue,ariaLabelledBy:ve,ariaDescribedBy:fe,children:W.map((function(e,o){var i;return"function"==typeof e?t.jsx(n.Fragment,{children:n.createElement(e,ze)},o):null!=(i=null==Ne?void 0:Ne[e])?i:null}))})},I=function(e){var n=e.isInteractive,i=void 0===n?h.isInteractive:n,r=e.animate,d=void 0===r?h.animate:r,a=e.motionConfig,s=void 0===a?h.motionConfig:a,u=e.theme,v=e.renderWrapper,f=l(e,N);return t.jsx(o.Container,{animate:d,isInteractive:i,motionConfig:s,renderWrapper:v,theme:u,children:t.jsx(z,c({isInteractive:i},f))})},W=["theme","isInteractive","animate","motionConfig","renderWrapper"],T=function(e){var i=e.width,d=e.height,a=e.margin,c=e.pixelRatio,l=void 0===c?k.pixelRatio:c,u=e.data,v=u.nodes,f=u.links,h=e.linkDistance,p=void 0===h?k.linkDistance:h,m=e.centeringStrength,C=void 0===m?k.centeringStrength:m,y=e.repulsivity,M=void 0===y?k.repulsivity:y,b=e.distanceMin,S=void 0===b?k.distanceMin:b,N=e.distanceMax,z=void 0===N?k.distanceMax:N,I=e.iterations,W=void 0===I?k.iterations:I,T=e.layers,j=void 0===T?k.layers:T,B=e.renderNode,w=void 0===B?k.renderNode:B,A=e.nodeSize,D=void 0===A?k.nodeSize:A,E=e.activeNodeSize,L=void 0===E?k.activeNodeSize:E,R=e.inactiveNodeSize,P=void 0===R?k.inactiveNodeSize:R,q=e.nodeColor,F=void 0===q?k.nodeColor:q,O=e.nodeBorderWidth,H=void 0===O?k.nodeBorderWidth:O,_=e.nodeBorderColor,G=void 0===_?k.nodeBorderColor:_,J=e.renderLink,K=void 0===J?k.renderLink:J,Q=e.linkThickness,U=void 0===Q?k.linkThickness:Q,V=e.linkColor,X=void 0===V?k.linkColor:V,Y=e.annotations,Z=void 0===Y?k.annotations:Y,$=e.isInteractive,ee=void 0===$?k.isInteractive:$,ne=e.defaultActiveNodeIds,oe=void 0===ne?k.defaultActiveNodeIds:ne,ie=e.nodeTooltip,te=void 0===ie?k.nodeTooltip:ie,re=e.onClick,de=n.useRef(null),ae=o.useDimensions(i,d,a),se=ae.margin,ce=ae.innerWidth,le=ae.innerHeight,ue=ae.outerWidth,ve=ae.outerHeight,fe=g({center:[ce/2,le/2],nodes:v,links:f,linkDistance:p,centeringStrength:C,repulsivity:M,distanceMin:S,distanceMax:z,iterations:W,nodeSize:D,activeNodeSize:L,inactiveNodeSize:P,nodeColor:F,nodeBorderWidth:H,nodeBorderColor:G,linkThickness:U,linkColor:X,isInteractive:ee,defaultActiveNodeIds:oe}),he=fe.nodes,ke=fe.links,pe=fe.activeNodeIds,me=fe.setActiveNodeIds,ge=x(he,Z),Ce=s.useComputedAnnotations({annotations:ge}),ye=n.useMemo((function(){return{nodes:he||[],links:ke||[],activeNodeIds:pe,setActiveNodeIds:me}}),[he,ke,pe,me]),xe=o.useTheme();n.useEffect((function(){if(null!==de.current){de.current.width=ue*l,de.current.height=ve*l;var e=de.current.getContext("2d");e.scale(l,l),e.fillStyle=xe.background,e.fillRect(0,0,ue,ve),e.translate(se.left,se.top),j.forEach((function(n){"links"===n&&null!==ke?ke.forEach((function(n){return K(e,n)})):"nodes"===n&&null!==he?he.forEach((function(n){return w(e,n)})):"annotations"===n?s.renderAnnotationsToCanvas(e,{annotations:Ce,theme:xe}):"function"==typeof n&&null!==he&&null!==ke&&n(e,ye)}))}}),[de,ue,ve,se.left,se.top,l,j,xe,he,ke,w,K,Ce,ye]);var Me=n.useCallback((function(e){if(de.current&&null!==he){var n=o.getRelativeCursor(de.current,e),i=n[0],t=n[1];return he.find((function(e){return o.getDistance(e.x,e.y,i-se.left,t-se.top)<=e.size/2}))}}),[de,se,he]),be=r.useTooltip(),Se=be.showTooltipFromEvent,Ne=be.hideTooltip,ze=n.useCallback((function(e){var o=Me(e);o?(Se(n.createElement(te,{node:o}),e),me([o.id])):(Ne(),me([]))}),[Me,Se,te,Ne,me]),Ie=n.useCallback((function(){Ne(),me([])}),[Ne,me]),We=n.useCallback((function(e){if(re){var n=Me(e);n&&re(n,e)}}),[Me,re]);return t.jsx("canvas",{ref:de,width:ue*l,height:ve*l,style:{width:ue,height:ve,cursor:ee?"auto":"normal"},onClick:ee?We:void 0,onMouseEnter:ee?ze:void 0,onMouseLeave:ee?Ie:void 0,onMouseMove:ee?ze:void 0})},j=function(e){var n=e.theme,i=e.isInteractive,r=void 0===i?k.isInteractive:i,d=e.animate,a=void 0===d?k.animate:d,s=e.motionConfig,u=void 0===s?k.motionConfig:s,v=e.renderWrapper,f=l(e,W);return t.jsx(o.Container,{isInteractive:r,animate:a,motionConfig:u,theme:n,renderWrapper:v,children:t.jsx(T,c({isInteractive:r},f))})};e.Network=I,e.NetworkCanvas=j,e.ResponsiveNetwork=function(e){return t.jsx(o.ResponsiveWrapper,{children:function(n){var o=n.width,i=n.height;return t.jsx(I,c({width:o,height:i},e))}})},e.ResponsiveNetworkCanvas=function(e){return t.jsx(o.ResponsiveWrapper,{children:function(n){var o=n.width,i=n.height;return t.jsx(j,c({width:o,height:i},e))}})},e.canvasDefaultProps=k,e.commonDefaultProps=f,e.svgDefaultProps=h,e.useNetwork=g,e.useNodeAnnotations=x,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=nivo-network.umd.js.map

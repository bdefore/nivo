!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("@nivo/core"),require("lodash/omit"),require("lodash/cloneDeep"),require("lodash/startCase"),require("d3-hierarchy"),require("@nivo/colors"),require("@nivo/tooltip"),require("@react-spring/web"),require("react/jsx-runtime")):"function"==typeof define&&define.amd?define(["exports","react","@nivo/core","lodash/omit","lodash/cloneDeep","lodash/startCase","d3-hierarchy","@nivo/colors","@nivo/tooltip","@react-spring/web","react/jsx-runtime"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).nivo=e.nivo||{},e.React,e.nivo,e["lodash/omit"],e["lodash/cloneDeep"],e["lodash/startCase"],e.d3,e.nivo,e.nivo,e["@react-spring/web"],e["react/jsx-runtime"])}(this,(function(e,t,o,n,i,a,r,l,d,s,u){"use strict";function b(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=b(n),p=b(i),v=b(a);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},h.apply(this,arguments)}function f(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}var m=function(e,t){return s.to([e,t],(function(e,t){return"translate("+e+","+t+")"}))},L=function(e,t){return s.to([e,t],(function(e,t){return"translate("+e+"px, "+t+"px)"}))},g=function(e,t,o){return s.to([e,t,o],(function(e,t,o){return"translate("+e+","+t+") rotate("+o+")"}))},y=function(e,t,o){return s.to([e,t,o],(function(e,t,o){return"translate("+e+"px,"+t+"px) rotate("+o+"deg)"}))},C=function(e,t,o){return s.to([e,t,o],(function(e,t,o){return"translate("+(e-(0===o?0:5))+"px,"+(t-(0===o?5:0))+"px) rotate("+o+"deg)"}))},x=t.memo((function(e){var t=e.node,n=e.animatedProps,i=e.borderWidth,a=e.enableLabel,r=e.enableParentLabel,l=e.labelSkipSize,d=o.useTheme(),b=a&&t.isLeaf&&(0===l||Math.min(t.width,t.height)>l),c=r&&t.isParent;return u.jsxs(s.animated.g,{transform:m(n.x,n.y),children:[u.jsx(s.animated.rect,{"data-testid":"node."+t.id,width:s.to(n.width,(function(e){return Math.max(e,0)})),height:s.to(n.height,(function(e){return Math.max(e,0)})),fill:t.fill?t.fill:n.color,strokeWidth:i,stroke:t.borderColor,fillOpacity:t.opacity,onMouseEnter:t.onMouseEnter,onMouseMove:t.onMouseMove,onMouseLeave:t.onMouseLeave,onClick:t.onClick}),b&&u.jsx(s.animated.text,{"data-testid":"label."+t.id,textAnchor:"middle",dominantBaseline:"central",style:h({},d.labels.text,{fill:t.labelTextColor,pointerEvents:"none"}),fillOpacity:n.labelOpacity,transform:g(n.labelX,n.labelY,n.labelRotation),children:t.label}),c&&u.jsx(s.animated.text,{"data-testid":"parentLabel."+t.id,dominantBaseline:"central",style:h({},d.labels.text,{fill:t.parentLabelTextColor,pointerEvents:"none"}),fillOpacity:n.parentLabelOpacity,transform:g(n.parentLabelX,n.parentLabelY,n.parentLabelRotation),children:t.parentLabel})]})})),P=t.memo((function(e){var t=e.node;return u.jsx(d.BasicTooltip,{id:t.id,value:t.formattedValue,enableChip:!0,color:t.color})})),M=t.memo((function(e){var t=e.node,n=e.animatedProps,i=e.borderWidth,a=e.enableLabel,r=e.enableParentLabel,l=e.labelSkipSize,d=o.useTheme(),b=a&&t.isLeaf&&(0===l||Math.min(t.width,t.height)>l),c=r&&t.isParent;return u.jsxs(s.animated.div,{"data-testid":"node."+t.id,id:t.path.replace(/[^\w]/gi,"-"),style:{boxSizing:"border-box",position:"absolute",top:0,left:0,transform:L(n.x,n.y),width:n.width,height:n.height,borderWidth:i,borderStyle:"solid",borderColor:t.borderColor,overflow:"hidden"},children:[u.jsx(s.animated.div,{style:{boxSizing:"border-box",position:"absolute",top:0,left:0,opacity:t.opacity,width:n.width,height:n.height,background:n.color},onMouseEnter:t.onMouseEnter,onMouseMove:t.onMouseMove,onMouseLeave:t.onMouseLeave,onClick:t.onClick}),b&&u.jsx(s.animated.span,{"data-testid":"label."+t.id,style:h({},d.labels.text,{position:"absolute",display:"flex",top:-5,left:-5,width:10,height:10,justifyContent:"center",alignItems:"center",whiteSpace:"nowrap",color:t.labelTextColor,transformOrigin:"center center",transform:y(n.labelX,n.labelY,n.labelRotation),opacity:n.labelOpacity,pointerEvents:"none"}),children:t.label}),c&&u.jsx(s.animated.span,{"data-testid":"parentLabel."+t.id,style:h({},d.labels.text,{position:"absolute",display:"flex",justifyContent:"flex-start",alignItems:"center",whiteSpace:"nowrap",width:10,height:10,color:t.parentLabelTextColor,transformOrigin:"top left",transform:C(n.parentLabelX,n.parentLabelY,n.parentLabelRotation),opacity:n.parentLabelOpacity,pointerEvents:"none"}),children:t.parentLabel})]})})),w={layers:["nodes"],identity:"id",value:"value",tile:"squarify",leavesOnly:!1,innerPadding:0,outerPadding:0,colors:{scheme:"nivo"},colorBy:"pathComponents.1",nodeOpacity:.33,enableLabel:!0,label:"formattedValue",labelSkipSize:0,labelTextColor:{from:"color",modifiers:[["darker",1]]},orientLabel:!0,enableParentLabel:!0,parentLabel:"id",parentLabelSize:20,parentLabelPosition:"top",parentLabelPadding:6,parentLabelTextColor:{from:"color",modifiers:[["darker",1]]},borderWidth:1,borderColor:{from:"color",modifiers:[["darker",1]]},isInteractive:!0,tooltip:P,role:"img",animate:!0,motionConfig:"gentle"},T=h({},w,{nodeComponent:x,defs:[],fill:[]}),S=h({},w,{nodeComponent:M}),k=h({},w,{pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1}),O={binary:r.treemapBinary,dice:r.treemapDice,slice:r.treemapSlice,sliceDice:r.treemapSliceDice,squarify:r.treemapSquarify},j=function(e){var n=e.data,i=e.width,a=e.height,d=e.identity,s=void 0===d?w.identity:d,u=e.value,b=void 0===u?w.value:u,f=e.valueFormat,m=e.leavesOnly,L=void 0===m?w.leavesOnly:m,g=e.tile,y=void 0===g?w.tile:g,C=e.innerPadding,x=void 0===C?w.innerPadding:C,P=e.outerPadding,M=void 0===P?w.outerPadding:P,T=e.label,S=void 0===T?w.label:T,k=e.orientLabel,j=void 0===k?w.orientLabel:k,R=e.enableParentLabel,W=void 0===R?w.enableParentLabel:R,I=e.parentLabel,z=void 0===I?w.parentLabel:I,E=e.parentLabelSize,B=void 0===E?w.parentLabelSize:E,D=e.parentLabelPosition,F=void 0===D?w.parentLabelPosition:D,X=e.parentLabelPadding,Y=void 0===X?w.parentLabelPadding:X,q=e.colors,H=void 0===q?w.colors:q,A=e.colorBy,V=void 0===A?w.colorBy:A,N=e.nodeOpacity,_=void 0===N?w.nodeOpacity:N,G=e.borderColor,J=void 0===G?w.borderColor:G,K=e.labelTextColor,Q=void 0===K?w.labelTextColor:K,U=e.parentLabelTextColor,Z=void 0===U?w.parentLabelTextColor:U,$=o.usePropertyAccessor(s),ee=o.usePropertyAccessor(b),te=o.useValueFormatter(f),oe=o.usePropertyAccessor(S),ne=o.usePropertyAccessor(z),ie=function(e){var o=e.width,n=e.height,i=e.tile,a=e.innerPadding,l=e.outerPadding,d=e.enableParentLabel,s=e.parentLabelSize,u=e.parentLabelPosition,b=e.leavesOnly;return t.useMemo((function(){var e=r.treemap().size([o,n]).tile(O[i]).round(!0).paddingInner(a).paddingOuter(l);if(d&&!b){var t=s+2*l;e["padding"+v.default(u)](t)}return e}),[o,n,i,a,l,d,s,u,b])}({width:i,height:a,tile:y,innerPadding:x,outerPadding:M,enableParentLabel:W,parentLabelSize:B,parentLabelPosition:F,leavesOnly:L}),ae=function(e){var o=e.root,n=e.getValue;return t.useMemo((function(){return r.hierarchy(o).sum(n)}),[o,n])}({root:n,getValue:ee}),re=t.useMemo((function(){var e=p.default(ae);return ie(e),L?e.leaves():e.descendants()}),[ae,ie,L]),le=t.useMemo((function(){return re.map((function(e){var t=function(e,t){var o=e.ancestors().map((function(e){return t(e.data)})).reverse();return{path:o.join("."),pathComponents:o}}(e,$),o=t.path,n=t.pathComponents,i={id:$(e.data),path:o,pathComponents:n,data:c.default(e.data,"children"),x:e.x0,y:e.y0,width:e.x1-e.x0,height:e.y1-e.y0,value:e.value,formattedValue:te(e.value),treeDepth:e.depth,treeHeight:e.height,isParent:e.height>0,isLeaf:0===e.height,parentLabelX:0,parentLabelY:0,parentLabelRotation:0};return i.labelRotation=j&&i.height>i.width?-90:0,"top"===F&&(i.parentLabelX=M+Y,i.parentLabelY=M+B/2),"right"===F&&(i.parentLabelX=i.width-M-B/2,i.parentLabelY=i.height-M-Y,i.parentLabelRotation=-90),"bottom"===F&&(i.parentLabelX=M+Y,i.parentLabelY=i.height-M-B/2),"left"===F&&(i.parentLabelX=M+B/2,i.parentLabelY=i.height-M-Y,i.parentLabelRotation=-90),i.label=oe(i),i.parentLabel=ne(i),i}))}),[re,$,te,oe,j,ne,B,F,Y,M]),de=o.useTheme(),se=l.useOrdinalColorScale(H,V),ue=l.useInheritedColor(J,de),be=l.useInheritedColor(Q,de),ce=l.useInheritedColor(Z,de),pe=t.useMemo((function(){return le.map((function(e){var t=h({},e,{color:se(e),opacity:_});return t.borderColor=ue(t),t.labelTextColor=be(t),t.parentLabelTextColor=ce(t),t}))}),[le,se,_,ue,be,ce]);return{hierarchy:ae,nodes:pe,layout:ie}},R=function(e,o){var n=o.isInteractive,i=o.onMouseEnter,a=o.onMouseMove,r=o.onMouseLeave,l=o.onClick,s=o.tooltip,u=d.useTooltip(),b=u.showTooltipFromEvent,c=u.hideTooltip,p=t.useCallback((function(e,o){b(t.createElement(s,{node:e}),o,"left")}),[b,s]),v=t.useCallback((function(e,t){p(e,t),null==i||i(e,t)}),[i,p]),f=t.useCallback((function(e,t){p(e,t),null==a||a(e,t)}),[a,p]),m=t.useCallback((function(e,t){c(),null==r||r(e,t)}),[r,c]),L=t.useCallback((function(e,t){null==l||l(e,t)}),[l]);return t.useMemo((function(){return e.map((function(e){return n?h({},e,{onMouseEnter:function(t){return v(e,t)},onMouseMove:function(t){return f(e,t)},onMouseLeave:function(t){return m(e,t)},onClick:function(t){return L(e,t)}}):e}))}),[n,e,v,f,m,L])},W=function(e){var o=e.nodes;return t.useMemo((function(){return{nodes:o}}),[o])},I=function(e){return{x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,labelX:e.width/2,labelY:e.height/2,labelRotation:e.labelRotation,labelOpacity:1,parentLabelX:e.parentLabelX,parentLabelY:e.parentLabelY,parentLabelRotation:e.parentLabelRotation,parentLabelOpacity:1}},z=function(e){return{x:e.x+e.width/2,y:e.y+e.height/2,width:0,height:0,color:e.color,labelX:0,labelY:0,labelRotation:e.labelRotation,labelOpacity:0,parentLabelX:0,parentLabelY:0,parentLabelRotation:e.parentLabelRotation,parentLabelOpacity:0}},E=t.memo((function(e){var n=e.nodes,i=e.nodeComponent,a=e.borderWidth,r=e.enableLabel,l=e.labelSkipSize,d=e.enableParentLabel,b=e.isInteractive,c=e.onMouseEnter,p=e.onMouseMove,v=e.onMouseLeave,h=e.onClick,f=e.tooltip,m=R(n,{isInteractive:b,onMouseEnter:c,onMouseMove:p,onMouseLeave:v,onClick:h,tooltip:f}),L=o.useMotionConfig(),g=L.animate,y=L.config,C=s.useTransition(m,{keys:function(e){return e.path},initial:I,from:z,enter:I,update:I,leave:z,config:y,immediate:!g});return u.jsx(u.Fragment,{children:C((function(e,o){return t.createElement(i,{key:o.path,node:o,animatedProps:e,borderWidth:a,enableLabel:r,labelSkipSize:l,enableParentLabel:d})}))})})),B=["isInteractive","animate","motionConfig","theme","renderWrapper"],D=function(e){var n=e.data,i=e.identity,a=void 0===i?T.identity:i,r=e.value,l=void 0===r?T.value:r,d=e.valueFormat,s=e.tile,b=void 0===s?T.tile:s,c=e.nodeComponent,p=void 0===c?T.nodeComponent:c,v=e.innerPadding,h=void 0===v?T.innerPadding:v,f=e.outerPadding,m=void 0===f?T.outerPadding:f,L=e.leavesOnly,g=void 0===L?T.leavesOnly:L,y=e.width,C=e.height,x=e.margin,P=e.layers,M=void 0===P?T.layers:P,w=e.colors,S=void 0===w?T.colors:w,k=e.colorBy,O=void 0===k?T.colorBy:k,R=e.nodeOpacity,I=void 0===R?T.nodeOpacity:R,z=e.borderWidth,B=void 0===z?T.borderWidth:z,D=e.borderColor,F=void 0===D?T.borderColor:D,X=e.defs,Y=void 0===X?T.defs:X,q=e.fill,H=void 0===q?T.fill:q,A=e.enableLabel,V=void 0===A?T.enableLabel:A,N=e.label,_=void 0===N?T.label:N,G=e.labelTextColor,J=void 0===G?T.labelTextColor:G,K=e.orientLabel,Q=void 0===K?T.orientLabel:K,U=e.labelSkipSize,Z=void 0===U?T.labelSkipSize:U,$=e.enableParentLabel,ee=void 0===$?T.enableParentLabel:$,te=e.parentLabel,oe=void 0===te?T.parentLabel:te,ne=e.parentLabelSize,ie=void 0===ne?T.parentLabelSize:ne,ae=e.parentLabelPosition,re=void 0===ae?T.parentLabelPosition:ae,le=e.parentLabelPadding,de=void 0===le?T.parentLabelPadding:le,se=e.parentLabelTextColor,ue=void 0===se?T.parentLabelTextColor:se,be=e.isInteractive,ce=void 0===be?T.isInteractive:be,pe=e.onMouseEnter,ve=e.onMouseMove,he=e.onMouseLeave,fe=e.onClick,me=e.tooltip,Le=void 0===me?T.tooltip:me,ge=e.role,ye=e.ariaLabel,Ce=e.ariaLabelledBy,xe=e.ariaDescribedBy,Pe=o.useDimensions(y,C,x),Me=Pe.margin,we=Pe.innerWidth,Te=Pe.innerHeight,Se=Pe.outerWidth,ke=Pe.outerHeight,Oe=j({data:n,identity:a,value:l,valueFormat:d,leavesOnly:g,width:we,height:Te,tile:b,innerPadding:h,outerPadding:m,colors:S,colorBy:O,nodeOpacity:I,borderColor:F,label:_,labelTextColor:J,orientLabel:Q,enableParentLabel:ee,parentLabel:oe,parentLabelSize:ie,parentLabelPosition:re,parentLabelPadding:de,parentLabelTextColor:ue}).nodes,je={nodes:null};M.includes("nodes")&&(je.nodes=u.jsx(E,{nodes:Oe,nodeComponent:p,borderWidth:B,enableLabel:V,labelSkipSize:Z,enableParentLabel:ee,isInteractive:ce,onMouseEnter:pe,onMouseMove:ve,onMouseLeave:he,onClick:fe,tooltip:Le},"nodes"));var Re=W({nodes:Oe}),We=o.bindDefs(Y,Oe,H);return u.jsx(o.SvgWrapper,{width:Se,height:ke,margin:Me,defs:We,role:ge,ariaLabel:ye,ariaLabelledBy:Ce,ariaDescribedBy:xe,children:M.map((function(e,o){var n;return"function"==typeof e?u.jsx(t.Fragment,{children:t.createElement(e,Re)},o):null!=(n=null==je?void 0:je[e])?n:null}))})},F=function(e){var t=e.isInteractive,n=void 0===t?T.isInteractive:t,i=e.animate,a=void 0===i?T.animate:i,r=e.motionConfig,l=void 0===r?T.motionConfig:r,d=e.theme,s=e.renderWrapper,b=f(e,B);return u.jsx(o.Container,{animate:a,isInteractive:n,motionConfig:l,renderWrapper:s,theme:d,children:u.jsx(D,h({isInteractive:n},b))})},X=["isInteractive","animate","motionConfig","theme","renderWrapper"],Y=function(e){var n=e.data,i=e.identity,a=void 0===i?S.identity:i,r=e.value,l=void 0===r?S.value:r,d=e.tile,s=void 0===d?S.tile:d,b=e.nodeComponent,c=void 0===b?S.nodeComponent:b,p=e.valueFormat,v=e.innerPadding,h=void 0===v?S.innerPadding:v,f=e.outerPadding,m=void 0===f?S.outerPadding:f,L=e.leavesOnly,g=void 0===L?S.leavesOnly:L,y=e.width,C=e.height,x=e.margin,P=e.layers,M=void 0===P?T.layers:P,w=e.colors,k=void 0===w?S.colors:w,O=e.colorBy,R=void 0===O?S.colorBy:O,I=e.nodeOpacity,z=void 0===I?S.nodeOpacity:I,B=e.borderWidth,D=void 0===B?S.borderWidth:B,F=e.borderColor,X=void 0===F?S.borderColor:F,Y=e.enableLabel,q=void 0===Y?S.enableLabel:Y,H=e.label,A=void 0===H?S.label:H,V=e.labelTextColor,N=void 0===V?S.labelTextColor:V,_=e.orientLabel,G=void 0===_?S.orientLabel:_,J=e.labelSkipSize,K=void 0===J?S.labelSkipSize:J,Q=e.enableParentLabel,U=void 0===Q?S.enableParentLabel:Q,Z=e.parentLabel,$=void 0===Z?S.parentLabel:Z,ee=e.parentLabelSize,te=void 0===ee?S.parentLabelSize:ee,oe=e.parentLabelPosition,ne=void 0===oe?S.parentLabelPosition:oe,ie=e.parentLabelPadding,ae=void 0===ie?S.parentLabelPadding:ie,re=e.parentLabelTextColor,le=void 0===re?S.parentLabelTextColor:re,de=e.isInteractive,se=void 0===de?S.isInteractive:de,ue=e.onMouseEnter,be=e.onMouseMove,ce=e.onMouseLeave,pe=e.onClick,ve=e.tooltip,he=void 0===ve?S.tooltip:ve,fe=e.role,me=e.ariaLabel,Le=e.ariaLabelledBy,ge=e.ariaDescribedBy,ye=o.useDimensions(y,C,x),Ce=ye.margin,xe=ye.innerWidth,Pe=ye.innerHeight,Me=ye.outerWidth,we=ye.outerHeight,Te=j({data:n,identity:a,value:l,valueFormat:p,leavesOnly:g,width:xe,height:Pe,tile:s,innerPadding:h,outerPadding:m,colors:k,colorBy:R,nodeOpacity:z,borderColor:X,label:A,labelTextColor:N,orientLabel:G,enableParentLabel:U,parentLabel:$,parentLabelSize:te,parentLabelPosition:ne,parentLabelPadding:ae,parentLabelTextColor:le}).nodes,Se={nodes:null};M.includes("nodes")&&(Se.nodes=u.jsx(E,{nodes:Te,nodeComponent:c,borderWidth:D,enableLabel:q,labelSkipSize:K,enableParentLabel:U,isInteractive:se,onMouseEnter:ue,onMouseMove:be,onMouseLeave:ce,onClick:pe,tooltip:he},"nodes"));var ke=W({nodes:Te});return u.jsx("div",{role:fe,"aria-label":me,"aria-labelledby":Le,"aria-describedby":ge,style:{position:"relative",width:Me,height:we},children:u.jsx("div",{style:{position:"absolute",top:Ce.top,left:Ce.left},children:M.map((function(e,o){var n;return"function"==typeof e?u.jsx(t.Fragment,{children:t.createElement(e,ke)},o):null!=(n=null==Se?void 0:Se[e])?n:null}))})})},q=function(e){var t=e.isInteractive,n=void 0===t?S.isInteractive:t,i=e.animate,a=void 0===i?S.animate:i,r=e.motionConfig,l=void 0===r?S.motionConfig:r,d=e.theme,s=e.renderWrapper,b=f(e,X);return u.jsx(o.Container,{animate:a,isInteractive:n,motionConfig:l,renderWrapper:s,theme:d,children:u.jsx(Y,h({isInteractive:n},b))})},H=["theme","isInteractive","animate","motionConfig","renderWrapper"],A=function(e,t,n,i){return e.find((function(e){return o.isCursorInRect(e.x+t.left,e.y+t.top,e.width,e.height,n,i)}))},V=function(e){var n=e.data,i=e.identity,a=void 0===i?k.identity:i,r=e.value,l=void 0===r?k.identity:r,s=e.tile,b=void 0===s?k.tile:s,c=e.valueFormat,p=e.innerPadding,v=void 0===p?k.innerPadding:p,h=e.outerPadding,f=void 0===h?k.outerPadding:h,m=e.leavesOnly,L=void 0===m?k.leavesOnly:m,g=e.width,y=e.height,C=e.margin,x=e.colors,P=void 0===x?k.colors:x,M=e.colorBy,w=void 0===M?k.colorBy:M,T=e.nodeOpacity,S=void 0===T?k.nodeOpacity:T,O=e.borderWidth,R=void 0===O?k.borderWidth:O,W=e.borderColor,I=void 0===W?k.borderColor:W,z=e.enableLabel,E=void 0===z?k.enableLabel:z,B=e.label,D=void 0===B?k.label:B,F=e.labelTextColor,X=void 0===F?k.labelTextColor:F,Y=e.orientLabel,q=void 0===Y?k.orientLabel:Y,H=e.labelSkipSize,V=void 0===H?k.labelSkipSize:H,N=e.isInteractive,_=void 0===N?k.isInteractive:N,G=e.onMouseMove,J=e.onClick,K=e.tooltip,Q=void 0===K?k.tooltip:K,U=e.pixelRatio,Z=void 0===U?k.pixelRatio:U,$=e.role,ee=e.ariaLabel,te=e.ariaLabelledBy,oe=e.ariaDescribedBy,ne=t.useRef(null),ie=o.useDimensions(g,y,C),ae=ie.margin,re=ie.innerWidth,le=ie.innerHeight,de=ie.outerWidth,se=ie.outerHeight,ue=j({data:n,identity:a,value:l,valueFormat:c,leavesOnly:L,width:re,height:le,tile:b,innerPadding:v,outerPadding:f,colors:P,colorBy:w,nodeOpacity:S,borderColor:I,label:D,labelTextColor:X,orientLabel:q,enableParentLabel:!1}).nodes,be=o.useTheme();t.useEffect((function(){if(null!==ne.current){var e=ne.current.getContext("2d");null!==e&&(ne.current.width=de*Z,ne.current.height=se*Z,e.scale(Z,Z),e.fillStyle=be.background,e.fillRect(0,0,de,se),e.translate(ae.left,ae.top),ue.forEach((function(t){e.fillStyle=t.color,e.fillRect(t.x,t.y,t.width,t.height),R>0&&(e.strokeStyle=t.borderColor,e.lineWidth=R,e.strokeRect(t.x,t.y,t.width,t.height))})),E&&(e.textAlign="center",e.textBaseline="middle",e.font=be.labels.text.fontSize+"px "+be.labels.text.fontFamily,ue.forEach((function(t){if(t.isLeaf&&(0===V||Math.min(t.width,t.height)>V)){var n=q&&t.height>t.width;e.save(),e.translate(t.x+t.width/2,t.y+t.height/2),e.rotate(o.degreesToRadians(n?-90:0)),e.fillStyle=t.labelTextColor,e.fillText(""+t.label,0,0),e.restore()}}))))}}),[ne,ue,de,se,re,le,ae,R,E,q,V,be,Z]);var ce=d.useTooltip(),pe=ce.showTooltipFromEvent,ve=ce.hideTooltip,he=t.useCallback((function(e){if(null!==ne.current){var n=o.getRelativeCursor(ne.current,e),i=n[0],a=n[1],r=A(ue,ae,i,a);void 0!==r?(pe(t.createElement(Q,{node:r}),e,"left"),null==G||G(r,e)):ve()}}),[ne,ue,ae,pe,ve,Q,G]),fe=t.useCallback((function(){ve()}),[ve]),me=t.useCallback((function(e){if(null!==ne.current){var t=o.getRelativeCursor(ne.current,e),n=t[0],i=t[1],a=A(ue,ae,n,i);void 0!==a&&(null==J||J(a,e))}}),[ne,ue,ae,J]);return u.jsx("canvas",{ref:ne,width:de*Z,height:se*Z,style:{width:de,height:se},onMouseEnter:_?he:void 0,onMouseMove:_?he:void 0,onMouseLeave:_?fe:void 0,onClick:_?me:void 0,role:$,"aria-label":ee,"aria-labelledby":te,"aria-describedby":oe})},N=function(e){var t=e.theme,n=e.isInteractive,i=void 0===n?k.isInteractive:n,a=e.animate,r=void 0===a?k.animate:a,l=e.motionConfig,d=void 0===l?k.motionConfig:l,s=e.renderWrapper,b=f(e,H);return u.jsx(o.Container,{isInteractive:i,animate:r,motionConfig:d,theme:t,renderWrapper:s,children:u.jsx(V,h({isInteractive:i},b))})};e.ResponsiveTreeMap=function(e){return u.jsx(o.ResponsiveWrapper,{children:function(t){var o=t.width,n=t.height;return u.jsx(F,h({width:o,height:n},e))}})},e.ResponsiveTreeMapCanvas=function(e){return u.jsx(o.ResponsiveWrapper,{children:function(t){var o=t.width,n=t.height;return u.jsx(N,h({width:o,height:n},e))}})},e.ResponsiveTreeMapHtml=function(e){return u.jsx(o.ResponsiveWrapper,{children:function(t){var o=t.width,n=t.height;return u.jsx(q,h({width:o,height:n},e))}})},e.TreeMap=F,e.TreeMapCanvas=N,e.TreeMapHtml=q,e.canvasDefaultProps=k,e.commonDefaultProps=w,e.htmlDefaultProps=S,e.htmlLabelTransform=y,e.htmlNodeTransform=L,e.htmlParentLabelTransform=C,e.svgDefaultProps=T,e.svgLabelTransform=g,e.svgNodeTransform=m,e.tileByType=O,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=nivo-treemap.umd.js.map

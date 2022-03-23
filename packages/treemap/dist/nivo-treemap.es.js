import{memo as e,useMemo as t,useCallback as o,createElement as n,Fragment as i,useRef as a,useEffect as r}from"react";import{useTheme as l,usePropertyAccessor as d,useValueFormatter as b,useMotionConfig as u,Container as p,useDimensions as c,bindDefs as s,SvgWrapper as v,ResponsiveWrapper as h,degreesToRadians as f,getRelativeCursor as L,isCursorInRect as g}from"@nivo/core";import m from"lodash/omit";import y from"lodash/cloneDeep";import C from"lodash/startCase";import{treemapBinary as x,treemapDice as P,treemapSlice as M,treemapSliceDice as w,treemapSquarify as S,treemap as O,hierarchy as k}from"d3-hierarchy";import{useOrdinalColorScale as T,useInheritedColor as W}from"@nivo/colors";import{BasicTooltip as I,useTooltip as z}from"@nivo/tooltip";import{to as B,animated as R,useTransition as E}from"@react-spring/web";import{jsxs as X,jsx as Y,Fragment as F}from"react/jsx-runtime";function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},j.apply(this,arguments)}function D(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}var H=function(e,t){return B([e,t],(function(e,t){return"translate("+e+","+t+")"}))},V=function(e,t){return B([e,t],(function(e,t){return"translate("+e+"px, "+t+"px)"}))},q=function(e,t,o){return B([e,t,o],(function(e,t,o){return"translate("+e+","+t+") rotate("+o+")"}))},A=function(e,t,o){return B([e,t,o],(function(e,t,o){return"translate("+e+"px,"+t+"px) rotate("+o+"deg)"}))},G=function(e,t,o){return B([e,t,o],(function(e,t,o){return"translate("+(e-(0===o?0:5))+"px,"+(t-(0===o?5:0))+"px) rotate("+o+"deg)"}))},J=e((function(e){var t=e.node,o=e.animatedProps,n=e.borderWidth,i=e.enableLabel,a=e.enableParentLabel,r=e.labelSkipSize,d=l(),b=i&&t.isLeaf&&(0===r||Math.min(t.width,t.height)>r),u=a&&t.isParent;return X(R.g,{transform:H(o.x,o.y),children:[Y(R.rect,{"data-testid":"node."+t.id,width:B(o.width,(function(e){return Math.max(e,0)})),height:B(o.height,(function(e){return Math.max(e,0)})),fill:t.fill?t.fill:o.color,strokeWidth:n,stroke:t.borderColor,fillOpacity:t.opacity,onMouseEnter:t.onMouseEnter,onMouseMove:t.onMouseMove,onMouseLeave:t.onMouseLeave,onClick:t.onClick}),b&&Y(R.text,{"data-testid":"label."+t.id,textAnchor:"middle",dominantBaseline:"central",style:j({},d.labels.text,{fill:t.labelTextColor,pointerEvents:"none"}),fillOpacity:o.labelOpacity,transform:q(o.labelX,o.labelY,o.labelRotation),children:t.label}),u&&Y(R.text,{"data-testid":"parentLabel."+t.id,dominantBaseline:"central",style:j({},d.labels.text,{fill:t.parentLabelTextColor,pointerEvents:"none"}),fillOpacity:o.parentLabelOpacity,transform:q(o.parentLabelX,o.parentLabelY,o.parentLabelRotation),children:t.parentLabel})]})})),K=e((function(e){var t=e.node;return Y(I,{id:t.id,value:t.formattedValue,enableChip:!0,color:t.color})})),N=e((function(e){var t=e.node,o=e.animatedProps,n=e.borderWidth,i=e.enableLabel,a=e.enableParentLabel,r=e.labelSkipSize,d=l(),b=i&&t.isLeaf&&(0===r||Math.min(t.width,t.height)>r),u=a&&t.isParent;return X(R.div,{"data-testid":"node."+t.id,id:t.path.replace(/[^\w]/gi,"-"),style:{boxSizing:"border-box",position:"absolute",top:0,left:0,transform:V(o.x,o.y),width:o.width,height:o.height,borderWidth:n,borderStyle:"solid",borderColor:t.borderColor,overflow:"hidden"},children:[Y(R.div,{style:{boxSizing:"border-box",position:"absolute",top:0,left:0,opacity:t.opacity,width:o.width,height:o.height,background:o.color},onMouseEnter:t.onMouseEnter,onMouseMove:t.onMouseMove,onMouseLeave:t.onMouseLeave,onClick:t.onClick}),b&&Y(R.span,{"data-testid":"label."+t.id,style:j({},d.labels.text,{position:"absolute",display:"flex",top:-5,left:-5,width:10,height:10,justifyContent:"center",alignItems:"center",whiteSpace:"nowrap",color:t.labelTextColor,transformOrigin:"center center",transform:A(o.labelX,o.labelY,o.labelRotation),opacity:o.labelOpacity,pointerEvents:"none"}),children:t.label}),u&&Y(R.span,{"data-testid":"parentLabel."+t.id,style:j({},d.labels.text,{position:"absolute",display:"flex",justifyContent:"flex-start",alignItems:"center",whiteSpace:"nowrap",width:10,height:10,color:t.parentLabelTextColor,transformOrigin:"top left",transform:G(o.parentLabelX,o.parentLabelY,o.parentLabelRotation),opacity:o.parentLabelOpacity,pointerEvents:"none"}),children:t.parentLabel})]})})),Q={layers:["nodes"],identity:"id",value:"value",tile:"squarify",leavesOnly:!1,innerPadding:0,outerPadding:0,colors:{scheme:"nivo"},colorBy:"pathComponents.1",nodeOpacity:.33,enableLabel:!0,label:"formattedValue",labelSkipSize:0,labelTextColor:{from:"color",modifiers:[["darker",1]]},orientLabel:!0,enableParentLabel:!0,parentLabel:"id",parentLabelSize:20,parentLabelPosition:"top",parentLabelPadding:6,parentLabelTextColor:{from:"color",modifiers:[["darker",1]]},borderWidth:1,borderColor:{from:"color",modifiers:[["darker",1]]},isInteractive:!0,tooltip:K,role:"img",animate:!0,motionConfig:"gentle"},U=j({},Q,{nodeComponent:J,defs:[],fill:[]}),Z=j({},Q,{nodeComponent:N}),$=j({},Q,{pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1}),_={binary:x,dice:P,slice:M,sliceDice:w,squarify:S},ee=function(e){var o=e.root,n=e.getValue;return t((function(){return k(o).sum(n)}),[o,n])},te=function(e){var o=e.data,n=e.width,i=e.height,a=e.identity,r=void 0===a?Q.identity:a,u=e.value,p=void 0===u?Q.value:u,c=e.valueFormat,s=e.leavesOnly,v=void 0===s?Q.leavesOnly:s,h=e.tile,f=void 0===h?Q.tile:h,L=e.innerPadding,g=void 0===L?Q.innerPadding:L,x=e.outerPadding,P=void 0===x?Q.outerPadding:x,M=e.label,w=void 0===M?Q.label:M,S=e.orientLabel,k=void 0===S?Q.orientLabel:S,I=e.enableParentLabel,z=void 0===I?Q.enableParentLabel:I,B=e.parentLabel,R=void 0===B?Q.parentLabel:B,E=e.parentLabelSize,X=void 0===E?Q.parentLabelSize:E,Y=e.parentLabelPosition,F=void 0===Y?Q.parentLabelPosition:Y,D=e.parentLabelPadding,H=void 0===D?Q.parentLabelPadding:D,V=e.colors,q=void 0===V?Q.colors:V,A=e.colorBy,G=void 0===A?Q.colorBy:A,J=e.nodeOpacity,K=void 0===J?Q.nodeOpacity:J,N=e.borderColor,U=void 0===N?Q.borderColor:N,Z=e.labelTextColor,$=void 0===Z?Q.labelTextColor:Z,te=e.parentLabelTextColor,oe=void 0===te?Q.parentLabelTextColor:te,ne=d(r),ie=d(p),ae=b(c),re=d(w),le=d(R),de=function(e){var o=e.width,n=e.height,i=e.tile,a=e.innerPadding,r=e.outerPadding,l=e.enableParentLabel,d=e.parentLabelSize,b=e.parentLabelPosition,u=e.leavesOnly;return t((function(){var e=O().size([o,n]).tile(_[i]).round(!0).paddingInner(a).paddingOuter(r);if(l&&!u){var t=d+2*r;e["padding"+C(b)](t)}return e}),[o,n,i,a,r,l,d,b,u])}({width:n,height:i,tile:f,innerPadding:g,outerPadding:P,enableParentLabel:z,parentLabelSize:X,parentLabelPosition:F,leavesOnly:v}),be=ee({root:o,getValue:ie}),ue=t((function(){var e=y(be);return de(e),v?e.leaves():e.descendants()}),[be,de,v]),pe=t((function(){return ue.map((function(e){var t=function(e,t){var o=e.ancestors().map((function(e){return t(e.data)})).reverse();return{path:o.join("."),pathComponents:o}}(e,ne),o=t.path,n=t.pathComponents,i={id:ne(e.data),path:o,pathComponents:n,data:m(e.data,"children"),x:e.x0,y:e.y0,width:e.x1-e.x0,height:e.y1-e.y0,value:e.value,formattedValue:ae(e.value),treeDepth:e.depth,treeHeight:e.height,isParent:e.height>0,isLeaf:0===e.height,parentLabelX:0,parentLabelY:0,parentLabelRotation:0};return i.labelRotation=k&&i.height>i.width?-90:0,"top"===F&&(i.parentLabelX=P+H,i.parentLabelY=P+X/2),"right"===F&&(i.parentLabelX=i.width-P-X/2,i.parentLabelY=i.height-P-H,i.parentLabelRotation=-90),"bottom"===F&&(i.parentLabelX=P+H,i.parentLabelY=i.height-P-X/2),"left"===F&&(i.parentLabelX=P+X/2,i.parentLabelY=i.height-P-H,i.parentLabelRotation=-90),i.label=re(i),i.parentLabel=le(i),i}))}),[ue,ne,ae,re,k,le,X,F,H,P]),ce=l(),se=T(q,G),ve=W(U,ce),he=W($,ce),fe=W(oe,ce),Le=t((function(){return pe.map((function(e){var t=j({},e,{color:se(e),opacity:K});return t.borderColor=ve(t),t.labelTextColor=he(t),t.parentLabelTextColor=fe(t),t}))}),[pe,se,K,ve,he,fe]);return{hierarchy:be,nodes:Le,layout:de}},oe=function(e){var o=e.nodes;return t((function(){return{nodes:o}}),[o])},ne=function(e){return{x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,labelX:e.width/2,labelY:e.height/2,labelRotation:e.labelRotation,labelOpacity:1,parentLabelX:e.parentLabelX,parentLabelY:e.parentLabelY,parentLabelRotation:e.parentLabelRotation,parentLabelOpacity:1}},ie=function(e){return{x:e.x+e.width/2,y:e.y+e.height/2,width:0,height:0,color:e.color,labelX:0,labelY:0,labelRotation:e.labelRotation,labelOpacity:0,parentLabelX:0,parentLabelY:0,parentLabelRotation:e.parentLabelRotation,parentLabelOpacity:0}},ae=e((function(e){var i=e.nodes,a=e.nodeComponent,r=e.borderWidth,l=e.enableLabel,d=e.labelSkipSize,b=e.enableParentLabel,p=function(e,i){var a=i.isInteractive,r=i.onMouseEnter,l=i.onMouseMove,d=i.onMouseLeave,b=i.onClick,u=i.tooltip,p=z(),c=p.showTooltipFromEvent,s=p.hideTooltip,v=o((function(e,t){c(n(u,{node:e}),t,"left")}),[c,u]),h=o((function(e,t){v(e,t),null==r||r(e,t)}),[r,v]),f=o((function(e,t){v(e,t),null==l||l(e,t)}),[l,v]),L=o((function(e,t){s(),null==d||d(e,t)}),[d,s]),g=o((function(e,t){null==b||b(e,t)}),[b]);return t((function(){return e.map((function(e){return a?j({},e,{onMouseEnter:function(t){return h(e,t)},onMouseMove:function(t){return f(e,t)},onMouseLeave:function(t){return L(e,t)},onClick:function(t){return g(e,t)}}):e}))}),[a,e,h,f,L,g])}(i,{isInteractive:e.isInteractive,onMouseEnter:e.onMouseEnter,onMouseMove:e.onMouseMove,onMouseLeave:e.onMouseLeave,onClick:e.onClick,tooltip:e.tooltip}),c=u(),s=c.animate,v=c.config,h=E(p,{keys:function(e){return e.path},initial:ne,from:ie,enter:ne,update:ne,leave:ie,config:v,immediate:!s});return Y(F,{children:h((function(e,t){return n(a,{key:t.path,node:t,animatedProps:e,borderWidth:r,enableLabel:l,labelSkipSize:d,enableParentLabel:b})}))})})),re=["isInteractive","animate","motionConfig","theme","renderWrapper"],le=function(e){var t=e.data,o=e.identity,a=void 0===o?U.identity:o,r=e.value,l=void 0===r?U.value:r,d=e.valueFormat,b=e.tile,u=void 0===b?U.tile:b,p=e.nodeComponent,h=void 0===p?U.nodeComponent:p,f=e.innerPadding,L=void 0===f?U.innerPadding:f,g=e.outerPadding,m=void 0===g?U.outerPadding:g,y=e.leavesOnly,C=void 0===y?U.leavesOnly:y,x=e.width,P=e.height,M=e.margin,w=e.layers,S=void 0===w?U.layers:w,O=e.colors,k=void 0===O?U.colors:O,T=e.colorBy,W=void 0===T?U.colorBy:T,I=e.nodeOpacity,z=void 0===I?U.nodeOpacity:I,B=e.borderWidth,R=void 0===B?U.borderWidth:B,E=e.borderColor,X=void 0===E?U.borderColor:E,F=e.defs,j=void 0===F?U.defs:F,D=e.fill,H=void 0===D?U.fill:D,V=e.enableLabel,q=void 0===V?U.enableLabel:V,A=e.label,G=void 0===A?U.label:A,J=e.labelTextColor,K=void 0===J?U.labelTextColor:J,N=e.orientLabel,Q=void 0===N?U.orientLabel:N,Z=e.labelSkipSize,$=void 0===Z?U.labelSkipSize:Z,_=e.enableParentLabel,ee=void 0===_?U.enableParentLabel:_,ne=e.parentLabel,ie=void 0===ne?U.parentLabel:ne,re=e.parentLabelSize,le=void 0===re?U.parentLabelSize:re,de=e.parentLabelPosition,be=void 0===de?U.parentLabelPosition:de,ue=e.parentLabelPadding,pe=void 0===ue?U.parentLabelPadding:ue,ce=e.parentLabelTextColor,se=void 0===ce?U.parentLabelTextColor:ce,ve=e.isInteractive,he=void 0===ve?U.isInteractive:ve,fe=e.onMouseEnter,Le=e.onMouseMove,ge=e.onMouseLeave,me=e.onClick,ye=e.tooltip,Ce=void 0===ye?U.tooltip:ye,xe=e.role,Pe=e.ariaLabel,Me=e.ariaLabelledBy,we=e.ariaDescribedBy,Se=c(x,P,M),Oe=Se.margin,ke=Se.innerWidth,Te=Se.innerHeight,We=Se.outerWidth,Ie=Se.outerHeight,ze=te({data:t,identity:a,value:l,valueFormat:d,leavesOnly:C,width:ke,height:Te,tile:u,innerPadding:L,outerPadding:m,colors:k,colorBy:W,nodeOpacity:z,borderColor:X,label:G,labelTextColor:K,orientLabel:Q,enableParentLabel:ee,parentLabel:ie,parentLabelSize:le,parentLabelPosition:be,parentLabelPadding:pe,parentLabelTextColor:se}).nodes,Be={nodes:null};S.includes("nodes")&&(Be.nodes=Y(ae,{nodes:ze,nodeComponent:h,borderWidth:R,enableLabel:q,labelSkipSize:$,enableParentLabel:ee,isInteractive:he,onMouseEnter:fe,onMouseMove:Le,onMouseLeave:ge,onClick:me,tooltip:Ce},"nodes"));var Re=oe({nodes:ze}),Ee=s(j,ze,H);return Y(v,{width:We,height:Ie,margin:Oe,defs:Ee,role:xe,ariaLabel:Pe,ariaLabelledBy:Me,ariaDescribedBy:we,children:S.map((function(e,t){var o;return"function"==typeof e?Y(i,{children:n(e,Re)},t):null!=(o=null==Be?void 0:Be[e])?o:null}))})},de=function(e){var t=e.isInteractive,o=void 0===t?U.isInteractive:t,n=e.animate,i=void 0===n?U.animate:n,a=e.motionConfig,r=void 0===a?U.motionConfig:a,l=e.theme,d=e.renderWrapper,b=D(e,re);return Y(p,{animate:i,isInteractive:o,motionConfig:r,renderWrapper:d,theme:l,children:Y(le,j({isInteractive:o},b))})},be=function(e){return Y(h,{children:function(t){var o=t.width,n=t.height;return Y(de,j({width:o,height:n},e))}})},ue=["isInteractive","animate","motionConfig","theme","renderWrapper"],pe=function(e){var t=e.data,o=e.identity,a=void 0===o?Z.identity:o,r=e.value,l=void 0===r?Z.value:r,d=e.tile,b=void 0===d?Z.tile:d,u=e.nodeComponent,p=void 0===u?Z.nodeComponent:u,s=e.valueFormat,v=e.innerPadding,h=void 0===v?Z.innerPadding:v,f=e.outerPadding,L=void 0===f?Z.outerPadding:f,g=e.leavesOnly,m=void 0===g?Z.leavesOnly:g,y=e.width,C=e.height,x=e.margin,P=e.layers,M=void 0===P?U.layers:P,w=e.colors,S=void 0===w?Z.colors:w,O=e.colorBy,k=void 0===O?Z.colorBy:O,T=e.nodeOpacity,W=void 0===T?Z.nodeOpacity:T,I=e.borderWidth,z=void 0===I?Z.borderWidth:I,B=e.borderColor,R=void 0===B?Z.borderColor:B,E=e.enableLabel,X=void 0===E?Z.enableLabel:E,F=e.label,j=void 0===F?Z.label:F,D=e.labelTextColor,H=void 0===D?Z.labelTextColor:D,V=e.orientLabel,q=void 0===V?Z.orientLabel:V,A=e.labelSkipSize,G=void 0===A?Z.labelSkipSize:A,J=e.enableParentLabel,K=void 0===J?Z.enableParentLabel:J,N=e.parentLabel,Q=void 0===N?Z.parentLabel:N,$=e.parentLabelSize,_=void 0===$?Z.parentLabelSize:$,ee=e.parentLabelPosition,ne=void 0===ee?Z.parentLabelPosition:ee,ie=e.parentLabelPadding,re=void 0===ie?Z.parentLabelPadding:ie,le=e.parentLabelTextColor,de=void 0===le?Z.parentLabelTextColor:le,be=e.isInteractive,ue=void 0===be?Z.isInteractive:be,pe=e.onMouseEnter,ce=e.onMouseMove,se=e.onMouseLeave,ve=e.onClick,he=e.tooltip,fe=void 0===he?Z.tooltip:he,Le=e.role,ge=e.ariaLabel,me=e.ariaLabelledBy,ye=e.ariaDescribedBy,Ce=c(y,C,x),xe=Ce.margin,Pe=Ce.innerWidth,Me=Ce.innerHeight,we=Ce.outerWidth,Se=Ce.outerHeight,Oe=te({data:t,identity:a,value:l,valueFormat:s,leavesOnly:m,width:Pe,height:Me,tile:b,innerPadding:h,outerPadding:L,colors:S,colorBy:k,nodeOpacity:W,borderColor:R,label:j,labelTextColor:H,orientLabel:q,enableParentLabel:K,parentLabel:Q,parentLabelSize:_,parentLabelPosition:ne,parentLabelPadding:re,parentLabelTextColor:de}).nodes,ke={nodes:null};M.includes("nodes")&&(ke.nodes=Y(ae,{nodes:Oe,nodeComponent:p,borderWidth:z,enableLabel:X,labelSkipSize:G,enableParentLabel:K,isInteractive:ue,onMouseEnter:pe,onMouseMove:ce,onMouseLeave:se,onClick:ve,tooltip:fe},"nodes"));var Te=oe({nodes:Oe});return Y("div",{role:Le,"aria-label":ge,"aria-labelledby":me,"aria-describedby":ye,style:{position:"relative",width:we,height:Se},children:Y("div",{style:{position:"absolute",top:xe.top,left:xe.left},children:M.map((function(e,t){var o;return"function"==typeof e?Y(i,{children:n(e,Te)},t):null!=(o=null==ke?void 0:ke[e])?o:null}))})})},ce=function(e){var t=e.isInteractive,o=void 0===t?Z.isInteractive:t,n=e.animate,i=void 0===n?Z.animate:n,a=e.motionConfig,r=void 0===a?Z.motionConfig:a,l=e.theme,d=e.renderWrapper,b=D(e,ue);return Y(p,{animate:i,isInteractive:o,motionConfig:r,renderWrapper:d,theme:l,children:Y(pe,j({isInteractive:o},b))})},se=function(e){return Y(h,{children:function(t){var o=t.width,n=t.height;return Y(ce,j({width:o,height:n},e))}})},ve=["theme","isInteractive","animate","motionConfig","renderWrapper"],he=function(e,t,o,n){return e.find((function(e){return g(e.x+t.left,e.y+t.top,e.width,e.height,o,n)}))},fe=function(e){var t=e.data,i=e.identity,d=void 0===i?$.identity:i,b=e.value,u=void 0===b?$.identity:b,p=e.tile,s=void 0===p?$.tile:p,v=e.valueFormat,h=e.innerPadding,g=void 0===h?$.innerPadding:h,m=e.outerPadding,y=void 0===m?$.outerPadding:m,C=e.leavesOnly,x=void 0===C?$.leavesOnly:C,P=e.width,M=e.height,w=e.margin,S=e.colors,O=void 0===S?$.colors:S,k=e.colorBy,T=void 0===k?$.colorBy:k,W=e.nodeOpacity,I=void 0===W?$.nodeOpacity:W,B=e.borderWidth,R=void 0===B?$.borderWidth:B,E=e.borderColor,X=void 0===E?$.borderColor:E,F=e.enableLabel,j=void 0===F?$.enableLabel:F,D=e.label,H=void 0===D?$.label:D,V=e.labelTextColor,q=void 0===V?$.labelTextColor:V,A=e.orientLabel,G=void 0===A?$.orientLabel:A,J=e.labelSkipSize,K=void 0===J?$.labelSkipSize:J,N=e.isInteractive,Q=void 0===N?$.isInteractive:N,U=e.onMouseMove,Z=e.onClick,_=e.tooltip,ee=void 0===_?$.tooltip:_,oe=e.pixelRatio,ne=void 0===oe?$.pixelRatio:oe,ie=e.role,ae=e.ariaLabel,re=e.ariaLabelledBy,le=e.ariaDescribedBy,de=a(null),be=c(P,M,w),ue=be.margin,pe=be.innerWidth,ce=be.innerHeight,se=be.outerWidth,ve=be.outerHeight,fe=te({data:t,identity:d,value:u,valueFormat:v,leavesOnly:x,width:pe,height:ce,tile:s,innerPadding:g,outerPadding:y,colors:O,colorBy:T,nodeOpacity:I,borderColor:X,label:H,labelTextColor:q,orientLabel:G,enableParentLabel:!1}).nodes,Le=l();r((function(){if(null!==de.current){var e=de.current.getContext("2d");null!==e&&(de.current.width=se*ne,de.current.height=ve*ne,e.scale(ne,ne),e.fillStyle=Le.background,e.fillRect(0,0,se,ve),e.translate(ue.left,ue.top),fe.forEach((function(t){e.fillStyle=t.color,e.fillRect(t.x,t.y,t.width,t.height),R>0&&(e.strokeStyle=t.borderColor,e.lineWidth=R,e.strokeRect(t.x,t.y,t.width,t.height))})),j&&(e.textAlign="center",e.textBaseline="middle",e.font=Le.labels.text.fontSize+"px "+Le.labels.text.fontFamily,fe.forEach((function(t){if(t.isLeaf&&(0===K||Math.min(t.width,t.height)>K)){var o=G&&t.height>t.width;e.save(),e.translate(t.x+t.width/2,t.y+t.height/2),e.rotate(f(o?-90:0)),e.fillStyle=t.labelTextColor,e.fillText(""+t.label,0,0),e.restore()}}))))}}),[de,fe,se,ve,pe,ce,ue,R,j,G,K,Le,ne]);var ge=z(),me=ge.showTooltipFromEvent,ye=ge.hideTooltip,Ce=o((function(e){if(null!==de.current){var t=L(de.current,e),o=t[0],i=t[1],a=he(fe,ue,o,i);void 0!==a?(me(n(ee,{node:a}),e,"left"),null==U||U(a,e)):ye()}}),[de,fe,ue,me,ye,ee,U]),xe=o((function(){ye()}),[ye]),Pe=o((function(e){if(null!==de.current){var t=L(de.current,e),o=t[0],n=t[1],i=he(fe,ue,o,n);void 0!==i&&(null==Z||Z(i,e))}}),[de,fe,ue,Z]);return Y("canvas",{ref:de,width:se*ne,height:ve*ne,style:{width:se,height:ve},onMouseEnter:Q?Ce:void 0,onMouseMove:Q?Ce:void 0,onMouseLeave:Q?xe:void 0,onClick:Q?Pe:void 0,role:ie,"aria-label":ae,"aria-labelledby":re,"aria-describedby":le})},Le=function(e){var t=e.theme,o=e.isInteractive,n=void 0===o?$.isInteractive:o,i=e.animate,a=void 0===i?$.animate:i,r=e.motionConfig,l=void 0===r?$.motionConfig:r,d=e.renderWrapper,b=D(e,ve);return Y(p,{isInteractive:n,animate:a,motionConfig:l,theme:t,renderWrapper:d,children:Y(fe,j({isInteractive:n},b))})},ge=function(e){return Y(h,{children:function(t){var o=t.width,n=t.height;return Y(Le,j({width:o,height:n},e))}})};export{be as ResponsiveTreeMap,ge as ResponsiveTreeMapCanvas,se as ResponsiveTreeMapHtml,de as TreeMap,Le as TreeMapCanvas,ce as TreeMapHtml,$ as canvasDefaultProps,Q as commonDefaultProps,Z as htmlDefaultProps,A as htmlLabelTransform,V as htmlNodeTransform,G as htmlParentLabelTransform,U as svgDefaultProps,q as svgLabelTransform,H as svgNodeTransform,_ as tileByType};
//# sourceMappingURL=nivo-treemap.es.js.map

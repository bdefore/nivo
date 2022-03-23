"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),i=require("@nivo/core"),r=require("@nivo/arcs"),n=require("@nivo/legends"),t=require("react/jsx-runtime"),a=require("d3-shape"),o=require("@nivo/colors"),s=require("@nivo/tooltip");function d(){return d=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function l(e,i){if(null==e)return{};var r,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],i.indexOf(r)>=0||(t[r]=e[r]);return t}var u,c=function(e){var i=e.width,r=e.height,a=e.legends,o=e.data,s=e.toggleSerie;return t.jsx(t.Fragment,{children:a.map((function(e,a){var l;return t.jsx(n.BoxLegendSvg,d({},e,{containerWidth:i,containerHeight:r,data:null!=(l=e.data)?l:o,toggleSerie:e.toggleSerie?s:void 0}),a)}))})},v={id:"id",value:"value",sortByValue:!1,innerRadius:0,padAngle:0,cornerRadius:0,layers:["arcLinkLabels","arcs","arcLabels","legends"],startAngle:0,endAngle:360,fit:!0,activeInnerRadiusOffset:0,activeOuterRadiusOffset:0,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1]]},enableArcLabels:!0,arcLabel:"formattedValue",arcLabelsSkipAngle:0,arcLabelsRadiusOffset:.5,arcLabelsTextColor:{theme:"labels.text.fill"},enableArcLinkLabels:!0,arcLinkLabel:"id",arcLinkLabelsSkipAngle:0,arcLinkLabelsOffset:0,arcLinkLabelsDiagonalLength:16,arcLinkLabelsStraightLength:24,arcLinkLabelsThickness:1,arcLinkLabelsTextOffset:6,arcLinkLabelsTextColor:{theme:"labels.text.fill"},arcLinkLabelsColor:{theme:"axis.ticks.line.stroke"},colors:{scheme:"nivo"},defs:[],fill:[],isInteractive:!0,animate:!0,motionConfig:"gentle",transitionMode:"innerRadius",tooltip:function(e){var i=e.datum;return t.jsx(s.BasicTooltip,{id:i.id,value:i.formattedValue,enableChip:!0,color:i.color})},legends:[],role:"img",pixelRatio:"undefined"!=typeof window&&null!=(u=window.devicePixelRatio)?u:1},f=["points"],g=function(r){var n=r.data,t=r.id,a=void 0===t?v.id:t,s=r.value,l=void 0===s?v.value:s,u=r.valueFormat,c=r.colors,f=void 0===c?v.colors:c,g=i.usePropertyAccessor(a),L=i.usePropertyAccessor(l),h=i.useValueFormatter(u),b=o.useOrdinalColorScale(f,"id");return e.useMemo((function(){return n.map((function(e){var i,r=g(e),n=L(e),t={id:r,label:null!=(i=e.label)?i:r,hidden:!1,value:n,formattedValue:h(n),data:e};return d({},t,{color:b(t)})}))}),[n,g,L,h,b])},L=function(r){var n=r.data,t=r.startAngle,o=r.endAngle,s=r.innerRadius,l=r.outerRadius,u=r.padAngle,c=r.sortByValue,v=r.activeId,f=r.activeInnerRadiusOffset,g=r.activeOuterRadiusOffset,L=r.hiddenIds,h=e.useMemo((function(){var e=a.pie().value((function(e){return e.value})).startAngle(i.degreesToRadians(t)).endAngle(i.degreesToRadians(o)).padAngle(i.degreesToRadians(u));return c||e.sortValues(null),e}),[t,o,u,c]);return e.useMemo((function(){var e=n.filter((function(e){return!L.includes(e.id)}));return{dataWithArc:h(e).map((function(e){var r=Math.abs(e.endAngle-e.startAngle);return d({},e.data,{arc:{index:e.index,startAngle:e.startAngle,endAngle:e.endAngle,innerRadius:v===e.data.id?s-f:s,outerRadius:v===e.data.id?l+g:l,thickness:l-s,padAngle:e.padAngle,angle:r,angleDeg:i.radiansToDegrees(r)}})})),legendData:n.map((function(e){return d({},e,{hidden:L.includes(e.id)})}))}}),[h,n,L,v,s,f,l,g])},h=function(n){var t=n.data,a=n.width,o=n.height,s=n.innerRadius,u=void 0===s?v.innerRadius:s,c=n.startAngle,g=void 0===c?v.startAngle:c,h=n.endAngle,b=void 0===h?v.endAngle:h,p=n.padAngle,A=void 0===p?v.padAngle:p,k=n.sortByValue,R=void 0===k?v.sortByValue:k,m=n.cornerRadius,x=void 0===m?v.cornerRadius:m,O=n.fit,C=void 0===O?v.fit:O,I=n.activeInnerRadiusOffset,M=void 0===I?v.activeInnerRadiusOffset:I,y=n.activeOuterRadiusOffset,T=void 0===y?v.activeOuterRadiusOffset:y,S=e.useState(null),W=S[0],w=S[1],j=e.useState([]),B=j[0],V=j[1],P=e.useMemo((function(){var e,i=Math.min(a,o)/2,n=i*Math.min(u,1),t=a/2,s=o/2;if(C){var d=r.computeArcBoundingBox(t,s,i,g-90,b-90),c=d.points,v=l(d,f),L=Math.min(a/v.width,o/v.height),h={width:v.width*L,height:v.height*L};h.x=(a-h.width)/2,h.y=(o-h.height)/2,t=(t-v.x)/v.width*v.width*L+h.x,s=(s-v.y)/v.height*v.height*L+h.y,e={box:v,ratio:L,points:c},i*=L,n*=L}return{centerX:t,centerY:s,radius:i,innerRadius:n,debug:e}}),[a,o,u,g,b,C,x]),E=L({data:t,startAngle:g,endAngle:b,innerRadius:P.innerRadius,outerRadius:P.radius,padAngle:A,sortByValue:R,activeId:W,activeInnerRadiusOffset:M,activeOuterRadiusOffset:T,hiddenIds:B}),D=e.useCallback((function(e){V((function(i){return i.indexOf(e)>-1?i.filter((function(i){return i!==e})):[].concat(i,[e])}))}),[]);return d({arcGenerator:r.useArcGenerator({cornerRadius:x,padAngle:i.degreesToRadians(A)}),setActiveId:w,toggleSerie:D},E,P)},b=function(i){var r=i.dataWithArc,n=i.arcGenerator,t=i.centerX,a=i.centerY,o=i.radius,s=i.innerRadius;return e.useMemo((function(){return{dataWithArc:r,arcGenerator:n,centerX:t,centerY:a,radius:o,innerRadius:s}}),[r,n,t,a,o,s])},p=function(i){var n=i.center,a=i.data,o=i.arcGenerator,d=i.borderWidth,l=i.borderColor,u=i.isInteractive,c=i.onClick,v=i.onMouseEnter,f=i.onMouseMove,g=i.onMouseLeave,L=i.setActiveId,h=i.tooltip,b=i.transitionMode,p=s.useTooltip(),A=p.showTooltipFromEvent,k=p.hideTooltip,R=e.useMemo((function(){if(u)return function(e,i){null==c||c(e,i)}}),[u,c]),m=e.useMemo((function(){if(u)return function(i,r){A(e.createElement(h,{datum:i}),r),L(i.id),null==v||v(i,r)}}),[u,A,L,v]),x=e.useMemo((function(){if(u)return function(i,r){A(e.createElement(h,{datum:i}),r),null==f||f(i,r)}}),[u,A,f]),O=e.useMemo((function(){if(u)return function(e,i){k(),L(null),null==g||g(e,i)}}),[u,k,L,g]);return t.jsx(r.ArcsLayer,{center:n,data:a,arcGenerator:o,borderWidth:d,borderColor:l,transitionMode:b,onClick:R,onMouseEnter:m,onMouseMove:x,onMouseLeave:O})},A=["isInteractive","animate","motionConfig","theme","renderWrapper"],k=function(n){var a=n.data,o=n.id,s=void 0===o?v.id:o,d=n.value,l=void 0===d?v.value:d,u=n.valueFormat,f=n.sortByValue,L=void 0===f?v.sortByValue:f,A=n.layers,k=void 0===A?v.layers:A,R=n.startAngle,m=void 0===R?v.startAngle:R,x=n.endAngle,O=void 0===x?v.endAngle:x,C=n.padAngle,I=void 0===C?v.padAngle:C,M=n.fit,y=void 0===M?v.fit:M,T=n.innerRadius,S=void 0===T?v.innerRadius:T,W=n.cornerRadius,w=void 0===W?v.cornerRadius:W,j=n.activeInnerRadiusOffset,B=void 0===j?v.activeInnerRadiusOffset:j,V=n.activeOuterRadiusOffset,P=void 0===V?v.activeOuterRadiusOffset:V,E=n.width,D=n.height,G=n.margin,F=n.colors,q=void 0===F?v.colors:F,H=n.borderWidth,X=void 0===H?v.borderWidth:H,Y=n.borderColor,_=void 0===Y?v.borderColor:Y,z=n.enableArcLabels,N=void 0===z?v.enableArcLabels:z,U=n.arcLabel,J=void 0===U?v.arcLabel:U,K=n.arcLabelsSkipAngle,Q=void 0===K?v.arcLabelsSkipAngle:K,Z=n.arcLabelsTextColor,$=void 0===Z?v.arcLabelsTextColor:Z,ee=n.arcLabelsRadiusOffset,ie=void 0===ee?v.arcLabelsRadiusOffset:ee,re=n.arcLabelsComponent,ne=n.enableArcLinkLabels,te=void 0===ne?v.enableArcLinkLabels:ne,ae=n.arcLinkLabel,oe=void 0===ae?v.arcLinkLabel:ae,se=n.arcLinkLabelsSkipAngle,de=void 0===se?v.arcLinkLabelsSkipAngle:se,le=n.arcLinkLabelsOffset,ue=void 0===le?v.arcLinkLabelsOffset:le,ce=n.arcLinkLabelsDiagonalLength,ve=void 0===ce?v.arcLinkLabelsDiagonalLength:ce,fe=n.arcLinkLabelsStraightLength,ge=void 0===fe?v.arcLinkLabelsStraightLength:fe,Le=n.arcLinkLabelsThickness,he=void 0===Le?v.arcLinkLabelsThickness:Le,be=n.arcLinkLabelsTextOffset,pe=void 0===be?v.arcLinkLabelsTextOffset:be,Ae=n.arcLinkLabelsTextColor,ke=void 0===Ae?v.arcLinkLabelsTextColor:Ae,Re=n.arcLinkLabelsColor,me=void 0===Re?v.arcLinkLabelsColor:Re,xe=n.arcLinkLabelComponent,Oe=n.defs,Ce=void 0===Oe?v.defs:Oe,Ie=n.fill,Me=void 0===Ie?v.fill:Ie,ye=n.isInteractive,Te=void 0===ye?v.isInteractive:ye,Se=n.onClick,We=n.onMouseEnter,we=n.onMouseMove,je=n.onMouseLeave,Be=n.tooltip,Ve=void 0===Be?v.tooltip:Be,Pe=n.transitionMode,Ee=void 0===Pe?v.transitionMode:Pe,De=n.legends,Ge=void 0===De?v.legends:De,Fe=n.role,qe=void 0===Fe?v.role:Fe,He=i.useDimensions(E,D,G),Xe=He.outerWidth,Ye=He.outerHeight,_e=He.margin,ze=He.innerWidth,Ne=He.innerHeight,Ue=g({data:a,id:s,value:l,valueFormat:u,colors:q}),Je=h({data:Ue,width:ze,height:Ne,fit:y,innerRadius:S,startAngle:m,endAngle:O,padAngle:I,sortByValue:L,cornerRadius:w,activeInnerRadiusOffset:B,activeOuterRadiusOffset:P}),Ke=Je.dataWithArc,Qe=Je.legendData,Ze=Je.arcGenerator,$e=Je.centerX,ei=Je.centerY,ii=Je.radius,ri=Je.innerRadius,ni=Je.setActiveId,ti=Je.toggleSerie,ai=i.bindDefs(Ce,Ke,Me),oi={arcLinkLabels:null,arcs:null,arcLabels:null,legends:null};te&&k.includes("arcLinkLabels")&&(oi.arcLinkLabels=t.jsx(r.ArcLinkLabelsLayer,{center:[$e,ei],data:Ke,label:oe,skipAngle:de,offset:ue,diagonalLength:ve,straightLength:ge,strokeWidth:he,textOffset:pe,textColor:ke,linkColor:me,component:xe},"arcLinkLabels")),k.includes("arcs")&&(oi.arcs=t.jsx(p,{center:[$e,ei],data:Ke,arcGenerator:Ze,borderWidth:X,borderColor:_,isInteractive:Te,onClick:Se,onMouseEnter:We,onMouseMove:we,onMouseLeave:je,setActiveId:ni,tooltip:Ve,transitionMode:Ee},"arcs")),N&&k.includes("arcLabels")&&(oi.arcLabels=t.jsx(r.ArcLabelsLayer,{center:[$e,ei],data:Ke,label:J,radiusOffset:ie,skipAngle:Q,textColor:$,transitionMode:Ee,component:re},"arcLabels")),Ge.length>0&&k.includes("legends")&&(oi.legends=t.jsx(c,{width:ze,height:Ne,data:Qe,legends:Ge,toggleSerie:ti},"legends"));var si=b({dataWithArc:Ke,arcGenerator:Ze,centerX:$e,centerY:ei,radius:ii,innerRadius:ri});return t.jsx(i.SvgWrapper,{width:Xe,height:Ye,margin:_e,defs:ai,role:qe,children:k.map((function(i,r){return void 0!==oi[i]?oi[i]:"function"==typeof i?t.jsx(e.Fragment,{children:e.createElement(i,si)},r):null}))})},R=function(e){var r=e.isInteractive,n=void 0===r?v.isInteractive:r,a=e.animate,o=void 0===a?v.animate:a,s=e.motionConfig,u=void 0===s?v.motionConfig:s,c=e.theme,f=e.renderWrapper,g=l(e,A);return t.jsx(i.Container,{animate:o,isInteractive:n,motionConfig:u,renderWrapper:f,theme:c,children:t.jsx(k,d({isInteractive:n},g))})},m=["isInteractive","theme","renderWrapper"],x=function(a){var l=a.data,u=a.id,c=void 0===u?v.id:u,f=a.value,L=void 0===f?v.value:f,b=a.valueFormat,p=a.sortByValue,A=void 0===p?v.sortByValue:p,k=a.startAngle,R=void 0===k?v.startAngle:k,m=a.endAngle,x=void 0===m?v.endAngle:m,O=a.padAngle,C=void 0===O?v.padAngle:O,I=a.fit,M=void 0===I?v.fit:I,y=a.innerRadius,T=void 0===y?v.innerRadius:y,S=a.cornerRadius,W=void 0===S?v.cornerRadius:S,w=a.activeInnerRadiusOffset,j=void 0===w?v.activeInnerRadiusOffset:w,B=a.activeOuterRadiusOffset,V=void 0===B?v.activeOuterRadiusOffset:B,P=a.width,E=a.height,D=a.margin,G=a.pixelRatio,F=void 0===G?1:G,q=a.colors,H=void 0===q?v.colors:q,X=a.borderWidth,Y=void 0===X?v.borderWidth:X,_=a.borderColor,z=void 0===_?v.borderColor:_,N=a.enableArcLabels,U=void 0===N?v.enableArcLabels:N,J=a.arcLabel,K=void 0===J?v.arcLabel:J,Q=a.arcLabelsSkipAngle,Z=void 0===Q?v.arcLabelsSkipAngle:Q,$=a.arcLabelsTextColor,ee=void 0===$?v.arcLabelsTextColor:$,ie=a.arcLabelsRadiusOffset,re=void 0===ie?v.arcLabelsRadiusOffset:ie,ne=a.enableArcLinkLabels,te=void 0===ne?v.enableArcLinkLabels:ne,ae=a.arcLinkLabel,oe=void 0===ae?v.arcLinkLabel:ae,se=a.arcLinkLabelsSkipAngle,de=void 0===se?v.arcLinkLabelsSkipAngle:se,le=a.arcLinkLabelsOffset,ue=void 0===le?v.arcLinkLabelsOffset:le,ce=a.arcLinkLabelsDiagonalLength,ve=void 0===ce?v.arcLinkLabelsDiagonalLength:ce,fe=a.arcLinkLabelsStraightLength,ge=void 0===fe?v.arcLinkLabelsStraightLength:fe,Le=a.arcLinkLabelsThickness,he=void 0===Le?v.arcLinkLabelsThickness:Le,be=a.arcLinkLabelsTextOffset,pe=void 0===be?v.arcLinkLabelsTextOffset:be,Ae=a.arcLinkLabelsTextColor,ke=void 0===Ae?v.arcLinkLabelsTextColor:Ae,Re=a.arcLinkLabelsColor,me=void 0===Re?v.arcLinkLabelsColor:Re,xe=a.isInteractive,Oe=void 0===xe?v.isInteractive:xe,Ce=a.onClick,Ie=a.onMouseMove,Me=a.tooltip,ye=void 0===Me?v.tooltip:Me,Te=a.legends,Se=void 0===Te?v.legends:Te,We=e.useRef(null),we=i.useTheme(),je=i.useDimensions(P,E,D),Be=je.margin,Ve=je.innerWidth,Pe=je.innerHeight,Ee=je.outerWidth,De=je.outerHeight,Ge=g({data:l,id:c,value:L,valueFormat:b,colors:H}),Fe=h({data:Ge,width:Ve,height:Pe,fit:M,innerRadius:T,startAngle:R,endAngle:x,padAngle:C,sortByValue:A,cornerRadius:W,activeInnerRadiusOffset:j,activeOuterRadiusOffset:V}),qe=Fe.dataWithArc,He=Fe.arcGenerator,Xe=Fe.centerX,Ye=Fe.centerY,_e=Fe.radius,ze=Fe.innerRadius,Ne=Fe.setActiveId,Ue=o.useInheritedColor(z,we),Je=r.useArcLabels({data:qe,label:K,skipAngle:Z,offset:re,textColor:ee}),Ke=r.useArcLinkLabels({data:qe,skipAngle:de,offset:ue,diagonalLength:ve,straightLength:ge,label:oe,linkColor:me,textOffset:pe,textColor:ke});e.useEffect((function(){if(We.current){We.current.width=Ee*F,We.current.height=De*F;var e=We.current.getContext("2d");e.scale(F,F),e.fillStyle=we.background,e.fillRect(0,0,Ee,De),e.save(),e.translate(Be.left,Be.top),He.context(e),e.save(),e.translate(Xe,Ye),qe.forEach((function(i){e.beginPath(),e.fillStyle=i.color,e.strokeStyle=Ue(i),e.lineWidth=Y,He(i.arc),e.fill(),Y>0&&e.stroke()})),!0===te&&r.drawCanvasArcLinkLabels(e,Ke,we,he),!0===U&&r.drawCanvasArcLabels(e,Je,we),e.restore(),Se.forEach((function(i){n.renderLegendToCanvas(e,d({},i,{data:qe,containerWidth:Ve,containerHeight:Pe,theme:we}))}))}}),[We,Ve,Pe,Ee,De,Be.top,Be.left,F,Xe,Ye,He,qe,Ue,U,Je,te,Ke,he,Se,we]);var Qe=e.useMemo((function(){return qe.map((function(e){return d({id:e.id},e.arc)}))}),[qe]),Ze=function(e){if(!We.current)return null;var n=i.getRelativeCursor(We.current,e),t=n[0],a=n[1],o=r.findArcUnderCursor(Be.left+Xe,Be.top+Ye,_e,ze,Qe,t,a);return o?qe.find((function(e){return e.id===o.id})):null},$e=s.useTooltip(),ei=$e.showTooltipFromEvent,ii=$e.hideTooltip,ri=function(i){var r=Ze(i);r?(null==Ie||Ie(r,i),Ne(r.id),ei(e.createElement(ye,{datum:r}),i)):(Ne(null),ii())};return t.jsx("canvas",{ref:We,width:Ee*F,height:De*F,style:{width:Ee,height:De,cursor:Oe?"auto":"normal"},onMouseEnter:Oe?ri:void 0,onMouseMove:Oe?ri:void 0,onMouseLeave:Oe?function(){ii()}:void 0,onClick:Oe?function(e){if(Ce){var i=Ze(e);i&&Ce(i,e)}}:void 0})},O=function(e){var r=e.isInteractive,n=void 0===r?v.isInteractive:r,a=e.theme,o=e.renderWrapper,s=l(e,m);return t.jsx(i.Container,{isInteractive:n,renderWrapper:o,theme:a,children:t.jsx(x,d({isInteractive:n},s))})};exports.Pie=R,exports.PieCanvas=O,exports.ResponsivePie=function(e){return t.jsx(i.ResponsiveWrapper,{children:function(i){var r=i.width,n=i.height;return t.jsx(R,d({width:r,height:n},e))}})},exports.ResponsivePieCanvas=function(e){return t.jsx(i.ResponsiveWrapper,{children:function(i){var r=i.width,n=i.height;return t.jsx(O,d({width:r,height:n},e))}})},exports.defaultProps=v,exports.useNormalizedData=g,exports.usePie=function(n){var t=n.data,a=n.radius,o=n.innerRadius,s=n.startAngle,l=void 0===s?v.startAngle:s,u=n.endAngle,c=void 0===u?v.endAngle:u,f=n.padAngle,g=void 0===f?v.padAngle:f,h=n.sortByValue,b=void 0===h?v.sortByValue:h,p=n.cornerRadius,A=void 0===p?v.cornerRadius:p,k=n.activeInnerRadiusOffset,R=void 0===k?v.activeInnerRadiusOffset:k,m=n.activeOuterRadiusOffset,x=void 0===m?v.activeOuterRadiusOffset:m,O=e.useState(null),C=O[0],I=O[1],M=e.useState([]),y=M[0],T=M[1],S=L({data:t,startAngle:l,endAngle:c,innerRadius:o,outerRadius:a,padAngle:g,sortByValue:b,activeId:C,activeInnerRadiusOffset:R,activeOuterRadiusOffset:x,hiddenIds:y}),W=e.useCallback((function(e){T((function(i){return i.indexOf(e)>-1?i.filter((function(i){return i!==e})):[].concat(i,[e])}))}),[]);return d({},S,{arcGenerator:r.useArcGenerator({cornerRadius:A,padAngle:i.degreesToRadians(g)}),setActiveId:I,toggleSerie:W})},exports.usePieArcs=L,exports.usePieFromBox=h,exports.usePieLayerContext=b;
//# sourceMappingURL=nivo-pie.cjs.js.map

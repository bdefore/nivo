"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("@nivo/core"),o=require("@nivo/arcs"),t=require("@nivo/tooltip"),n=require("react/jsx-runtime"),i=require("d3-hierarchy"),a=require("lodash/cloneDeep"),l=require("lodash/sortBy"),s=require("@nivo/colors");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=c(a),d=c(l);function v(){return v=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},v.apply(this,arguments)}var f={id:"id",value:"value",cornerRadius:0,layers:["arcs","arcLabels"],colors:{scheme:"nivo"},colorBy:"id",inheritColorFromParent:!0,childColor:{from:"color"},borderWidth:1,borderColor:"white",enableArcLabels:!1,arcLabel:"formattedValue",arcLabelsRadiusOffset:.5,arcLabelsSkipAngle:0,arcLabelsTextColor:{theme:"labels.text.fill"},animate:!0,motionConfig:"gentle",transitionMode:"innerRadius",isInteractive:!0,defs:[],fill:[],tooltip:function(e){var r=e.id,o=e.formattedValue,i=e.color;return n.jsx(t.BasicTooltip,{id:r,value:o,enableChip:!0,color:i})},role:"img"},h=function(t){var n=t.data,a=t.id,l=void 0===a?f.id:a,c=t.value,v=void 0===c?f.value:c,h=t.valueFormat,p=t.radius,m=t.cornerRadius,b=void 0===m?f.cornerRadius:m,C=t.colors,M=void 0===C?f.colors:C,g=t.colorBy,y=void 0===g?f.colorBy:g,L=t.inheritColorFromParent,x=void 0===L?f.inheritColorFromParent:L,j=t.childColor,R=void 0===j?f.childColor:j,A=r.useTheme(),F=s.useOrdinalColorScale(M,y),W=s.useInheritedColor(R,A),I=r.usePropertyAccessor(l),P=r.usePropertyAccessor(v),q=r.useValueFormatter(h),O=e.useMemo((function(){var e,r=u.default(n),o=i.hierarchy(r).sum(P),t=i.partition().size([2*Math.PI,p*p])(o).descendants().slice(1),a=null!=(e=o.value)?e:0;return d.default(t,"depth").reduce((function(e,r){var o,t=I(r.data),n=r.value,i=100*n/a,l=r.ancestors().map((function(e){return I(e.data)})),s={startAngle:r.x0,endAngle:r.x1,innerRadius:Math.sqrt(r.y0),outerRadius:Math.sqrt(r.y1)};r.parent&&(o=e.find((function(e){return e.id===I(r.parent.data)})));var c={id:t,path:l,value:n,percentage:i,formattedValue:h?q(n):i.toFixed(2)+"%",color:"",arc:s,data:r.data,depth:r.depth,height:r.height};return x&&o&&c.depth>1?c.color=W(o,c):c.color=F(c),[].concat(e,[c])}),[])}),[n,p,P,I,h,q,F,x,W]);return{arcGenerator:o.useArcGenerator({cornerRadius:b}),nodes:O}},p=function(r){var o=r.nodes,t=r.arcGenerator,n=r.centerX,i=r.centerY,a=r.radius;return e.useMemo((function(){return{nodes:o,arcGenerator:t,centerX:n,centerY:i,radius:a}}),[o,t,n,i,a])},m=function(r){var i=r.center,a=r.data,l=r.arcGenerator,s=r.borderWidth,c=r.borderColor,u=r.isInteractive,d=r.onClick,v=r.onMouseEnter,f=r.onMouseMove,h=r.onMouseLeave,p=r.tooltip,m=r.transitionMode,b=t.useTooltip(),C=b.showTooltipFromEvent,M=b.hideTooltip,g=e.useMemo((function(){if(u)return function(e,r){null==d||d(e,r)}}),[u,d]),y=e.useMemo((function(){if(u)return function(r,o){C(e.createElement(p,r),o),null==v||v(r,o)}}),[u,C,p,v]),L=e.useMemo((function(){if(u)return function(r,o){C(e.createElement(p,r),o),null==f||f(r,o)}}),[u,C,p,f]),x=e.useMemo((function(){if(u)return function(e,r){M(),null==h||h(e,r)}}),[u,M,h]);return n.jsx(o.ArcsLayer,{center:i,data:a,arcGenerator:l,borderWidth:s,borderColor:c,transitionMode:m,onClick:g,onMouseEnter:y,onMouseMove:L,onMouseLeave:x})},b=["isInteractive","animate","motionConfig","theme","renderWrapper"],C=function(t){var i=t.data,a=t.id,l=void 0===a?f.id:a,s=t.value,c=void 0===s?f.value:s,u=t.valueFormat,d=t.cornerRadius,v=void 0===d?f.cornerRadius:d,b=t.layers,C=void 0===b?f.layers:b,M=t.colors,g=void 0===M?f.colors:M,y=t.colorBy,L=void 0===y?f.colorBy:y,x=t.inheritColorFromParent,j=void 0===x?f.inheritColorFromParent:x,R=t.childColor,A=void 0===R?f.childColor:R,F=t.borderWidth,W=void 0===F?f.borderWidth:F,I=t.borderColor,P=void 0===I?f.borderColor:I,q=t.margin,O=t.width,k=t.height,G=t.enableArcLabels,S=void 0===G?f.enableArcLabels:G,B=t.arcLabel,E=void 0===B?f.arcLabel:B,T=t.arcLabelsRadiusOffset,w=void 0===T?f.arcLabelsRadiusOffset:T,X=t.arcLabelsSkipAngle,Y=void 0===X?f.arcLabelsSkipAngle:X,V=t.arcLabelsTextColor,D=void 0===V?f.arcLabelsTextColor:V,K=t.arcLabelsComponent,H=t.defs,_=void 0===H?f.defs:H,z=t.fill,J=void 0===z?f.fill:z,N=t.transitionMode,Q=void 0===N?f.transitionMode:N,U=t.isInteractive,Z=void 0===U?f.isInteractive:U,$=t.onClick,ee=t.onMouseEnter,re=t.onMouseLeave,oe=t.onMouseMove,te=t.tooltip,ne=void 0===te?f.tooltip:te,ie=t.role,ae=void 0===ie?f.role:ie,le=r.useDimensions(O,k,q),se=le.innerHeight,ce=le.innerWidth,ue=le.margin,de=le.outerHeight,ve=le.outerWidth,fe=e.useMemo((function(){return{radius:Math.min(ce,se)/2,centerX:ce/2,centerY:se/2}}),[se,ce]),he=fe.centerX,pe=fe.centerY,me=fe.radius,be=h({data:i,id:l,value:c,valueFormat:u,radius:me,cornerRadius:v,colors:g,colorBy:L,inheritColorFromParent:j,childColor:A}),Ce=be.arcGenerator,Me=be.nodes,ge=r.bindDefs(_,Me,J,{dataKey:".",colorKey:"color",targetKey:"fill"}),ye={arcs:null,arcLabels:null};C.includes("arcs")&&(ye.arcs=n.jsx(m,{center:[he,pe],data:Me,arcGenerator:Ce,borderWidth:W,borderColor:P,transitionMode:Q,isInteractive:Z,tooltip:ne,onClick:$,onMouseEnter:ee,onMouseLeave:re,onMouseMove:oe},"arcs")),S&&C.includes("arcLabels")&&(ye.arcLabels=n.jsx(o.ArcLabelsLayer,{center:[he,pe],data:Me,label:E,radiusOffset:w,skipAngle:Y,textColor:D,transitionMode:Q,component:K},"arcLabels"));var Le=p({nodes:Me,arcGenerator:Ce,centerX:he,centerY:pe,radius:me});return n.jsx(r.SvgWrapper,{width:ve,height:de,defs:ge,margin:ue,role:ae,children:C.map((function(r,o){return void 0!==ye[r]?ye[r]:"function"==typeof r?n.jsx(e.Fragment,{children:e.createElement(r,Le)},o):null}))})},M=function(e){var o=e.isInteractive,t=void 0===o?f.isInteractive:o,i=e.animate,a=void 0===i?f.animate:i,l=e.motionConfig,s=void 0===l?f.motionConfig:l,c=e.theme,u=e.renderWrapper,d=function(e,r){if(null==e)return{};var o,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,b);return n.jsx(r.Container,{isInteractive:t,animate:a,motionConfig:s,theme:c,renderWrapper:u,children:n.jsx(C,v({isInteractive:t},d))})};exports.ResponsiveSunburst=function(e){return n.jsx(r.ResponsiveWrapper,{children:function(r){var o=r.width,t=r.height;return n.jsx(M,v({width:o,height:t},e))}})},exports.Sunburst=M,exports.defaultProps=f,exports.useSunburst=h,exports.useSunburstLayerContext=p;
//# sourceMappingURL=nivo-sunburst.cjs.js.map

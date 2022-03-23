!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("@nivo/tooltip"),require("react/jsx-runtime"),require("react"),require("@nivo/core"),require("@nivo/arcs"),require("@nivo/legends"),require("@nivo/polar-axes"),require("d3-scale"),require("d3-shape"),require("@nivo/colors"),require("@nivo/scales")):"function"==typeof define&&define.amd?define(["exports","@nivo/tooltip","react/jsx-runtime","react","@nivo/core","@nivo/arcs","@nivo/legends","@nivo/polar-axes","d3-scale","d3-shape","@nivo/colors","@nivo/scales"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).nivo=e.nivo||{},e.nivo,e["react/jsx-runtime"],e.React,e.nivo,e.nivo,e.nivo,e.nivo,e.d3,e.d3,e.nivo,e.nivo)}(this,(function(e,r,a,n,i,o,t,l,s,d,u,c){"use strict";function v(){return v=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},v.apply(this,arguments)}var g={maxValue:"auto",layers:["grid","tracks","bars","labels","legends"],startAngle:0,endAngle:270,innerRadius:.3,padding:.2,padAngle:0,cornerRadius:0,enableTracks:!0,tracksColor:"rgba(0, 0, 0, .15)",enableRadialGrid:!0,enableCircularGrid:!0,radialAxisStart:{},radialAxisEnd:null,circularAxisInner:null,circularAxisOuter:{},colors:{scheme:"nivo"},borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1]]},enableLabels:!1,label:"formattedValue",labelsSkipAngle:10,labelsRadiusOffset:.5,labelsTextColor:{theme:"labels.text.fill"},isInteractive:!0,tooltip:function(e){var n=e.bar;return a.jsx(r.BasicTooltip,{enableChip:!0,id:a.jsxs("span",{children:[n.category," - ",n.groupId]}),value:n.formattedValue,color:n.color})},legends:[],defs:[],fill:[],animate:!0,motionConfig:"gentle",transitionMode:"centerRadius",renderWrapper:!0},f=v({},g),p=function(e){var r=e.data,a=e.maxValue,o=void 0===a?f.maxValue:a,t=e.valueFormat,l=e.startAngle,v=void 0===l?g.startAngle:l,p=e.endAngle,b=void 0===p?g.endAngle:p,m=e.innerRadiusRatio,h=void 0===m?g.innerRadius:m,x=e.padding,A=void 0===x?g.padding:x,R=e.padAngle,M=void 0===R?g.padAngle:R,y=e.cornerRadius,C=void 0===y?g.cornerRadius:y,k=e.width,j=e.height,L=e.colors,S=void 0===L?g.colors:L,G=e.tracksColor,I=void 0===G?g.tracksColor:G,T=n.useMemo((function(){return[k/2,j/2]}),[k,j]),W=Math.min.apply(Math,T),E=W*Math.min(h,1),O=u.useOrdinalColorScale(S,"category"),V=n.useMemo((function(){var e={serieIds:[],categories:[],groups:[],maxValue:0};return r.forEach((function(r){e.serieIds.push(r.id);var a=0;r.data.forEach((function(r){e.categories.includes(r.x)||e.categories.push(r.x),a+=r.y})),e.groups.push({id:r.id,total:a,data:r.data})})),e.maxValue="auto"===o?Math.max.apply(Math,e.groups.map((function(e){return e.total}))):o,e}),[r,o]),q=V.serieIds,w=V.categories,B=V.groups,D=V.maxValue,F=n.useMemo((function(){return c.castLinearScale(s.scaleLinear().domain([0,D]).range([v,b]))}),[D,v,b]),P=n.useMemo((function(){return c.castBandScale(s.scaleBand().domain(q).range([E,W]).padding(A))}),[q,W,E,A]),H=n.useMemo((function(){return d.arc().startAngle((function(e){return e.startAngle})).endAngle((function(e){return e.endAngle})).innerRadius((function(e){return e.innerRadius})).outerRadius((function(e){return e.outerRadius})).cornerRadius(C).padAngle(i.degreesToRadians(M))}),[C,M]),K=i.useValueFormatter(t),_=n.useMemo((function(){var e=[];return B.forEach((function(r){var a=0,n=P(r.id),o=n+P.bandwidth();r.data.forEach((function(t){var l=a+t.y,s={id:r.id+"."+t.x,data:t,groupId:r.id,category:t.x,value:t.y,formattedValue:K(t.y),color:"",stackedValue:l,arc:{startAngle:i.degreesToRadians(F(a)),endAngle:i.degreesToRadians(F(l)),innerRadius:n,outerRadius:o}};s.color=O(s),a+=t.y,e.push(s)}))})),e}),[B,P,F,O,K]),z=i.degreesToRadians(v),J=i.degreesToRadians(b),N=n.useMemo((function(){return c.getScaleTicks(P).map((function(e){var r=P(e);return{id:e,color:I,arc:{startAngle:z,endAngle:J,innerRadius:r,outerRadius:r+P.bandwidth()}}}))}),[P,z,J,I]),Q=n.useMemo((function(){return w.map((function(e){var r=_.find((function(r){return r.category===e})),a=r?r.color:void 0;return{id:e,label:e,color:a}}))}),[w,_]),U=n.useMemo((function(){return{center:T,outerRadius:W,innerRadius:E,bars:_,arcGenerator:H,radiusScale:P,valueScale:F}}),[T,W,E,_,H,P,F]);return{center:T,outerRadius:W,innerRadius:E,bars:_,arcGenerator:H,radiusScale:P,valueScale:F,tracks:N,legendData:Q,customLayerProps:U}},b=function(e){var i=e.center,t=e.bars,l=e.borderWidth,s=e.borderColor,d=e.arcGenerator,u=e.isInteractive,c=e.tooltip,v=e.onClick,g=e.onMouseEnter,f=e.onMouseMove,p=e.onMouseLeave,b=e.transitionMode,m=r.useTooltip(),h=m.showTooltipFromEvent,x=m.hideTooltip,A=n.useCallback((function(e,r){null==v||v(e,r)}),[v]),R=n.useCallback((function(e,r){h(n.createElement(c,{bar:e}),r),null==g||g(e,r)}),[h,c,g]),M=n.useCallback((function(e,r){h(n.createElement(c,{bar:e}),r),null==f||f(e,r)}),[h,c,f]),y=n.useCallback((function(e,r){x(),null==p||p(e,r)}),[x,p]);return a.jsx(o.ArcsLayer,{center:i,data:t,arcGenerator:d,borderWidth:l,borderColor:s,transitionMode:b,onClick:u?A:void 0,onMouseEnter:u?R:void 0,onMouseMove:u?M:void 0,onMouseLeave:u?y:void 0})},m=function(e){var r=e.center,n=e.tracks,i=e.arcGenerator,t=e.transitionMode;return a.jsx(o.ArcsLayer,{center:r,data:n,arcGenerator:i,borderWidth:0,borderColor:"none",transitionMode:t})},h=["isInteractive","animate","motionConfig","theme","renderWrapper"],x=function(e){var r=e.data,s=e.maxValue,d=void 0===s?f.maxValue:s,u=e.valueFormat,c=e.startAngle,g=void 0===c?f.startAngle:c,h=e.endAngle,x=void 0===h?f.endAngle:h,A=e.innerRadius,R=void 0===A?f.innerRadius:A,M=e.padding,y=void 0===M?f.padding:M,C=e.padAngle,k=void 0===C?f.padAngle:C,j=e.cornerRadius,L=void 0===j?f.cornerRadius:j,S=e.width,G=e.height,I=e.margin,T=e.layers,W=void 0===T?f.layers:T,E=e.enableTracks,O=void 0===E?f.enableTracks:E,V=e.tracksColor,q=void 0===V?f.tracksColor:V,w=e.enableRadialGrid,B=void 0===w?f.enableRadialGrid:w,D=e.enableCircularGrid,F=void 0===D?f.enableCircularGrid:D,P=e.radialAxisStart,H=void 0===P?f.radialAxisStart:P,K=e.radialAxisEnd,_=void 0===K?f.radialAxisEnd:K,z=e.circularAxisInner,J=void 0===z?f.circularAxisInner:z,N=e.circularAxisOuter,Q=void 0===N?f.circularAxisOuter:N,U=e.colors,X=void 0===U?f.colors:U,Y=e.defs,Z=void 0===Y?f.defs:Y,$=e.fill,ee=void 0===$?f.fill:$,re=e.borderWidth,ae=void 0===re?f.borderWidth:re,ne=e.borderColor,ie=void 0===ne?f.borderColor:ne,oe=e.enableLabels,te=void 0===oe?f.enableLabels:oe,le=e.label,se=void 0===le?f.label:le,de=e.labelsSkipAngle,ue=void 0===de?f.labelsSkipAngle:de,ce=e.labelsRadiusOffset,ve=void 0===ce?f.labelsRadiusOffset:ce,ge=e.labelsTextColor,fe=void 0===ge?f.labelsTextColor:ge,pe=e.isInteractive,be=void 0===pe?f.isInteractive:pe,me=e.tooltip,he=void 0===me?f.tooltip:me,xe=e.onClick,Ae=e.onMouseEnter,Re=e.onMouseMove,Me=e.onMouseLeave,ye=e.transitionMode,Ce=void 0===ye?f.transitionMode:ye,ke=e.legends,je=void 0===ke?f.legends:ke,Le=e.role,Se=e.ariaLabel,Ge=e.ariaLabelledBy,Ie=e.ariaDescribedBy,Te=i.useDimensions(S,G,I),We=Te.margin,Ee=Te.innerWidth,Oe=Te.innerHeight,Ve=Te.outerWidth,qe=Te.outerHeight,we=i.clampArc(g,x),Be=we[0],De=we[1],Fe=p({data:r,maxValue:d,valueFormat:u,startAngle:Be,endAngle:De,innerRadiusRatio:R,padding:y,padAngle:k,cornerRadius:L,width:Ee,height:Oe,colors:X,tracksColor:q}),Pe=Fe.center,He=Fe.innerRadius,Ke=Fe.outerRadius,_e=Fe.bars,ze=Fe.arcGenerator,Je=Fe.radiusScale,Ne=Fe.valueScale,Qe=Fe.tracks,Ue=Fe.legendData,Xe=Fe.customLayerProps,Ye={grid:null,tracks:null,bars:null,labels:null,legends:null};W.includes("grid")&&(Ye.grid=a.jsxs(n.Fragment,{children:[a.jsx(l.PolarGrid,{center:Pe,enableRadialGrid:B,enableCircularGrid:F,angleScale:Ne,radiusScale:Je,startAngle:Be,endAngle:De}),H&&a.jsx(l.RadialAxis,v({type:"start",center:Pe,angle:Math.min(Be,De),scale:Je},H)),_&&a.jsx(l.RadialAxis,v({type:"end",center:Pe,angle:Math.max(Be,De),scale:Je},_)),J&&a.jsx(l.CircularAxis,v({type:"inner",center:Pe,radius:He,startAngle:Be,endAngle:De,scale:Ne},J)),Q&&a.jsx(l.CircularAxis,v({type:"outer",center:Pe,radius:Ke,startAngle:Be,endAngle:De,scale:Ne},Q))]},"grid")),W.includes("tracks")&&O&&(Ye.tracks=a.jsx(m,{center:Pe,tracks:Qe,arcGenerator:ze,transitionMode:Ce},"tracks")),W.includes("bars")&&(Ye.bars=a.jsx(b,{center:Pe,bars:_e,borderWidth:ae,borderColor:ie,arcGenerator:ze,isInteractive:be,tooltip:he,onClick:xe,onMouseEnter:Ae,onMouseMove:Re,onMouseLeave:Me,transitionMode:Ce},"bars")),W.includes("labels")&&te&&(Ye.labels=a.jsx(o.ArcLabelsLayer,{center:Pe,data:_e,label:se,radiusOffset:ve,skipAngle:ue,textColor:fe,transitionMode:Ce},"labels")),W.includes("legends")&&je.length>0&&(Ye.legends=a.jsx(n.Fragment,{children:je.map((function(e,r){return a.jsx(t.BoxLegendSvg,v({},e,{containerWidth:Ee,containerHeight:Oe,data:Ue}),r)}))},"legends"));var Ze=i.bindDefs(Z,_e,ee,{dataKey:"data",targetKey:"fill"});return a.jsx(i.SvgWrapper,{width:Ve,height:qe,margin:We,defs:Ze,role:Le,ariaLabel:Se,ariaLabelledBy:Ge,ariaDescribedBy:Ie,children:W.map((function(e,r){var i;return"function"==typeof e?a.jsx(n.Fragment,{children:n.createElement(e,Xe)},r):null!=(i=null==Ye?void 0:Ye[e])?i:null}))})},A=function(e){var r=e.isInteractive,n=void 0===r?f.isInteractive:r,o=e.animate,t=void 0===o?f.animate:o,l=e.motionConfig,s=void 0===l?f.motionConfig:l,d=e.theme,u=e.renderWrapper,c=function(e,r){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||(i[a]=e[a]);return i}(e,h);return a.jsx(i.Container,{animate:t,isInteractive:n,motionConfig:s,renderWrapper:u,theme:d,children:a.jsx(x,v({isInteractive:n},c))})};e.RadialBar=A,e.ResponsiveRadialBar=function(e){return a.jsx(i.ResponsiveWrapper,{children:function(r){var n=r.width,i=r.height;return a.jsx(A,v({width:n,height:i},e))}})},e.commonDefaultProps=g,e.svgDefaultProps=f,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=nivo-radial-bar.umd.js.map

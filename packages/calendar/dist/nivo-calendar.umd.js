!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@nivo/core"),require("@nivo/legends"),require("react"),require("react/jsx-runtime"),require("@nivo/tooltip"),require("d3-time-format"),require("d3-scale"),require("lodash/range"),require("lodash/memoize"),require("lodash/isDate"),require("d3-time")):"function"==typeof define&&define.amd?define(["exports","@nivo/core","@nivo/legends","react","react/jsx-runtime","@nivo/tooltip","d3-time-format","d3-scale","lodash/range","lodash/memoize","lodash/isDate","d3-time"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).nivo=e.nivo||{},e.nivo,e.nivo,e.React,e["react/jsx-runtime"],e.nivo,e.d3,e.d3,e["lodash/range"],e["lodash/memoize"],e["lodash/isDate"],e.d3)}(this,(function(e,t,o,n,i,r,a,d,l,u,c,s){"use strict";function h(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function m(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var n=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,n.get?n:{enumerable:!0,get:function(){return e[o]}})}})),t.default=e,Object.freeze(t)}var g=m(n),f=h(l),v=h(u),y=h(c);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},p.apply(this,arguments)}function x(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}var b,S=n.memo((function(e){var t=e.years,o=e.legend,n=e.theme;return i.jsx(i.Fragment,{children:t.map((function(e){return i.jsx("text",{transform:"translate("+e.x+","+e.y+") rotate("+e.rotation+")",textAnchor:"middle",style:n.labels.text,children:o(e.year)},e.year)}))})})),w=n.memo((function(e){var t=e.path,o=e.borderWidth,n=e.borderColor;return i.jsx("path",{d:t,style:{fill:"none",strokeWidth:o,stroke:n,pointerEvents:"none"}})})),C=n.memo((function(e){var t=e.months,o=e.legend,n=e.theme;return i.jsx(i.Fragment,{children:t.map((function(e){return i.jsx("text",{transform:"translate("+e.x+","+e.y+") rotate("+e.rotation+")",textAnchor:"middle",style:n.labels.text,children:o(e.year,e.month,e.date)},e.date.toString()+".legend")}))})})),W=n.memo((function(e){var t=e.data,o=e.x,a=e.y,d=e.size,l=e.color,u=e.borderWidth,c=e.borderColor,s=e.isInteractive,h=e.tooltip,m=e.onMouseEnter,f=e.onMouseMove,v=e.onMouseLeave,y=e.onClick,x=e.formatValue,b=r.useTooltip(),S=b.showTooltipFromEvent,w=b.hideTooltip,C=n.useCallback((function(e){if("value"in t){var o=p({},t,{value:x(t.value),data:p({},t.data)});S(g.createElement(h,p({},o)),e),null==m||m(t,e)}}),[S,h,t,m,x]),W=n.useCallback((function(e){if("value"in t){var o=p({},t,{value:x(t.value),data:p({},t.data)});S(g.createElement(h,p({},o)),e),f&&f(t,e)}}),[S,h,t,f,x]),L=n.useCallback((function(e){"value"in t&&(w(),null==v||v(t,e))}),[w,t,v]),M=n.useCallback((function(e){return null==y?void 0:y(t,e)}),[t,y]);return i.jsx("rect",{x:o,y:a,width:d,height:d,style:{fill:l,strokeWidth:u,stroke:c},onMouseEnter:s?C:void 0,onMouseMove:s?W:void 0,onMouseLeave:s?L:void 0,onClick:s?M:void 0})})),L=n.memo((function(e){var t=e.value,o=e.day,n=e.color;return void 0===t||isNaN(Number(t))?null:i.jsx(r.BasicTooltip,{id:o,value:t,color:n,enableChip:!0})})),M=a.timeFormat("%b"),k={colors:["#61cdbb","#97e3d5","#e8c1a0","#f47560"],align:"center",direction:"horizontal",emptyColor:"#fff",minValue:0,maxValue:"auto",yearSpacing:30,yearLegend:function(e){return e},yearLegendPosition:"before",yearLegendOffset:10,monthBorderWidth:2,monthBorderColor:"#000",monthSpacing:0,monthLegend:function(e,t,o){return M(o)},monthLegendPosition:"before",monthLegendOffset:10,daySpacing:0,dayBorderWidth:1,dayBorderColor:"#000",isInteractive:!0,legends:[],tooltip:L},j=p({},k,{role:"img"}),D=p({},k,{pixelRatio:"undefined"!=typeof window&&null!=(b=window.devicePixelRatio)?b:1}),z=p({},j,{dayBorderColor:"#fff",dayRadius:0,square:!0,weekdayLegendOffset:75}),V=function(e,t,o){var n=e.map((function(e){return e.value}));return["auto"===t?Math.min.apply(Math,n):t,"auto"===o?Math.max.apply(Math,n):o]},O=v.default((function(e){var t,o=e.date,n=e.cellSize,i=e.yearIndex,r=e.yearSpacing,a=e.monthSpacing,d=e.daySpacing,l=e.direction,u=e.originX,c=e.originY,h=new Date(o.getFullYear(),o.getMonth()+1,0),m=s.timeWeek.count(s.timeYear(o),o),g=s.timeWeek.count(s.timeYear(h),h),f=o.getDay(),v=h.getDay(),y=u,p=c,x=i*(7*(n+d)+r),b=o.getMonth()*a;"horizontal"===l?(p+=x,y+=b):(p+=b,y+=x);var S={x:y,y:p,width:0,height:0};return"horizontal"===l?(t=["M"+(y+(m+1)*(n+d))+","+(p+f*(n+d)),"H"+(y+m*(n+d))+"V"+(p+7*(n+d)),"H"+(y+g*(n+d))+"V"+(p+(v+1)*(n+d)),"H"+(y+(g+1)*(n+d))+"V"+p,"H"+(y+(m+1)*(n+d))+"Z"].join(""),S.x=y+m*(n+d),S.width=y+(g+1)*(n+d)-S.x,S.height=7*(n+d)):(t=["M"+(y+f*(n+d))+","+(p+(m+1)*(n+d)),"H"+y+"V"+(p+(g+1)*(n+d)),"H"+(y+(v+1)*(n+d))+"V"+(p+g*(n+d)),"H"+(y+7*(n+d))+"V"+(p+m*(n+d)),"H"+(y+f*(n+d))+"Z"].join(""),S.y=p+m*(n+d),S.width=7*(n+d),S.height=p+(g+1)*(n+d)-S.y),{path:t,bbox:S}}),(function(e){var t=e.date,o=e.cellSize,n=e.yearIndex,i=e.yearSpacing,r=e.monthSpacing,a=e.daySpacing,d=e.direction,l=e.originX,u=e.originY;return t.toString()+"."+o+"."+n+"."+i+"."+r+"."+a+"."+d+"."+l+"."+u})),P=a.timeFormat("%Y-%m-%d"),I=function(e){var o,n=e.width,i=e.height,r=e.from,a=e.to,d=e.direction,l=e.yearSpacing,u=e.monthSpacing,c=e.daySpacing,h=e.align,m=y.default(r)?r:new Date(r),g=y.default(a)?a:new Date(a),v=f.default(m.getFullYear(),g.getFullYear()+1),x=Math.max.apply(Math,v.map((function(e){return s.timeWeeks(new Date(e,0,1),new Date(e+1,0,1)).length})))+1,b=function(e){var t,o,n=e.width,i=e.height,r=e.direction,a=e.yearRange,d=e.yearSpacing,l=e.monthSpacing,u=e.daySpacing,c=e.maxWeeks;return"horizontal"===r?(t=(n-12*l-u*c)/c,o=(i-(a.length-1)*d-a.length*(8*u))/(7*a.length)):(t=(n-(a.length-1)*d-a.length*(8*u))/(7*a.length),o=(i-12*l-u*c)/c),Math.min(t,o)}({width:n,height:i,direction:d,yearRange:v,yearSpacing:l,monthSpacing:u,daySpacing:c,maxWeeks:x}),S=b*x+c*x+12*u,w=7*(b+c)*v.length+l*(v.length-1),C="horizontal"===d?S:w,W="horizontal"===d?w:S,L=t.alignBox({x:0,y:0,width:C,height:W},{x:0,y:0,width:n,height:i},h),M=L[0],k=L[1];o="horizontal"===d?function(e,t,o,n){return function(i,r,a,d){return{x:i+s.timeWeek.count(s.timeYear(a),a)*(e+n)+n/2+a.getMonth()*o,y:r+a.getDay()*(e+n)+n/2+d*(t+7*(e+n))}}}(b,l,u,c):function(e,t,o,n){return function(i,r,a,d){var l=s.timeWeek.count(s.timeYear(a),a);return{x:i+a.getDay()*(e+n)+n/2+d*(t+7*(e+n)),y:r+l*(e+n)+n/2+a.getMonth()*o}}}(b,l,u,c);var j=[],D=[],z=[];return v.forEach((function(e,t){var n=new Date(e,0,1),i=new Date(e+1,0,1);z=z.concat(s.timeDays(n,i).map((function(e){return p({date:e,day:P(e),size:b},o(M,k,e,t))})));var r=s.timeMonths(n,i).map((function(e){return p({date:e,year:e.getFullYear(),month:e.getMonth()},O({originX:M,originY:k,date:e,direction:d,yearIndex:t,yearSpacing:l,monthSpacing:u,daySpacing:c,cellSize:b}))}));D=D.concat(r),j.push({year:e,bbox:{x:r[0].bbox.x,y:r[0].bbox.y,width:r[11].bbox.x-r[0].bbox.x+r[11].bbox.width,height:r[11].bbox.y-r[0].bbox.y+r[11].bbox.height}})})),{years:j,months:D,days:z,cellSize:b,calendarWidth:C,calendarHeight:W,originX:M,originY:k}},F=function(e){var t=e.days,o=e.data,n=e.colorScale,i=e.emptyColor;return t.map((function(e){var t=o.find((function(t){return t.day===e.day}));return p({},e,t?{color:n(t.value),data:t,value:t.value}:{color:i})}))},R=function(e){var t=e.years,o=e.direction,n=e.position,i=e.offset;return t.map((function(e){var t=0,r=0,a=0;return"horizontal"===o&&"before"===n?(t=e.bbox.x-i,r=e.bbox.y+e.bbox.height/2,a=-90):"horizontal"===o&&"after"===n?(t=e.bbox.x+e.bbox.width+i,r=e.bbox.y+e.bbox.height/2,a=-90):"vertical"===o&&"before"===n?(t=e.bbox.x+e.bbox.width/2,r=e.bbox.y-i):(t=e.bbox.x+e.bbox.width/2,r=e.bbox.y+e.bbox.height+i),p({},e,{x:t,y:r,rotation:a})}))},T=function(e){var t=e.months,o=e.direction,n=e.position,i=e.offset;return t.map((function(e){var t=0,r=0,a=0;return"horizontal"===o&&"before"===n?(t=e.bbox.x+e.bbox.width/2,r=e.bbox.y-i):"horizontal"===o&&"after"===n?(t=e.bbox.x+e.bbox.width/2,r=e.bbox.y+e.bbox.height+i):"vertical"===o&&"before"===n?(t=e.bbox.x-i,r=e.bbox.y+e.bbox.height/2,a=-90):(t=e.bbox.x+e.bbox.width+i,r=e.bbox.y+e.bbox.height/2,a=-90),p({},e,{x:t,y:r,rotation:a})}))},B=function(e){var t=e.width,o=e.height,i=e.from,r=e.to,a=e.direction,d=e.yearSpacing,l=e.monthSpacing,u=e.daySpacing,c=e.align;return n.useMemo((function(){return I({width:t,height:o,from:i,to:r,direction:a,yearSpacing:d,monthSpacing:l,daySpacing:u,align:c})}),[t,o,i,r,a,d,l,u,c])},E=function(e){var t=e.data,o=e.minValue,i=e.maxValue,r=e.colors,a=e.colorScale;return n.useMemo((function(){if(a)return a;var e=V(t,o,i);return d.scaleQuantize().domain(e).range(r)}),[t,o,i,r,a])},H=function(e){var t=e.years,o=e.direction,i=e.yearLegendPosition,r=e.yearLegendOffset;return n.useMemo((function(){return R({years:t,direction:o,position:i,offset:r})}),[t,o,i,r])},Y=function(e){var t=e.months,o=e.direction,i=e.monthLegendPosition,r=e.monthLegendOffset;return n.useMemo((function(){return T({months:t,direction:o,position:i,offset:r})}),[t,o,i,r])},q=function(e){var t=e.days,o=e.data,i=e.colorScale,r=e.emptyColor;return n.useMemo((function(){return F({days:t,data:o,colorScale:i,emptyColor:r})}),[t,o,i,r])},A=["months","years"],X=["isInteractive","renderWrapper","theme"],_=function(e){var n=e.margin,r=e.width,a=e.height,d=e.align,l=void 0===d?j.align:d,u=e.colors,c=void 0===u?j.colors:u,s=e.colorScale,h=e.data,m=e.direction,g=void 0===m?j.direction:m,f=e.emptyColor,v=void 0===f?j.emptyColor:f,y=e.from,b=e.to,L=e.minValue,M=void 0===L?j.minValue:L,k=e.maxValue,D=void 0===k?j.maxValue:k,z=e.valueFormat,V=e.legendFormat,O=e.yearLegend,P=void 0===O?j.yearLegend:O,I=e.yearLegendOffset,F=void 0===I?j.yearLegendOffset:I,R=e.yearLegendPosition,T=void 0===R?j.yearLegendPosition:R,X=e.yearSpacing,_=void 0===X?j.yearSpacing:X,N=e.monthBorderColor,Z=void 0===N?j.monthBorderColor:N,Q=e.monthBorderWidth,G=void 0===Q?j.monthBorderWidth:Q,J=e.monthLegend,K=void 0===J?j.monthLegend:J,U=e.monthLegendOffset,$=void 0===U?j.monthLegendOffset:U,ee=e.monthLegendPosition,te=void 0===ee?j.monthLegendPosition:ee,oe=e.monthSpacing,ne=void 0===oe?j.monthSpacing:oe,ie=e.dayBorderColor,re=void 0===ie?j.dayBorderColor:ie,ae=e.dayBorderWidth,de=void 0===ae?j.dayBorderWidth:ae,le=e.daySpacing,ue=void 0===le?j.daySpacing:le,ce=e.isInteractive,se=void 0===ce?j.isInteractive:ce,he=e.tooltip,me=void 0===he?j.tooltip:he,ge=e.onClick,fe=e.onMouseEnter,ve=e.onMouseLeave,ye=e.onMouseMove,pe=e.legends,xe=void 0===pe?j.legends:pe,be=e.role,Se=void 0===be?j.role:be,we=t.useTheme(),Ce=t.useDimensions(r,a,n),We=Ce.margin,Le=Ce.innerWidth,Me=Ce.innerHeight,ke=Ce.outerWidth,je=Ce.outerHeight,De=B({width:Le,height:Me,from:y,to:b,direction:g,yearSpacing:_,monthSpacing:ne,daySpacing:ue,align:l}),ze=De.months,Ve=De.years,Oe=x(De,A),Pe=E({data:h,minValue:M,maxValue:D,colors:c,colorScale:s}),Ie=Y({months:ze,direction:g,monthLegendPosition:te,monthLegendOffset:$}),Fe=H({years:Ve,direction:g,yearLegendPosition:T,yearLegendOffset:F}),Re=q({days:Oe.days,data:h,colorScale:Pe,emptyColor:v}),Te=t.useValueFormatter(V),Be=t.useValueFormatter(z);return i.jsxs(t.SvgWrapper,{width:ke,height:je,margin:We,role:Se,children:[Re.map((function(e){return i.jsx(W,{data:e,x:e.x,y:e.y,size:e.size,color:e.color,borderWidth:de,borderColor:re,onMouseEnter:fe,onMouseLeave:ve,onMouseMove:ye,isInteractive:se,tooltip:me,onClick:ge,formatValue:Be},e.date.toString())})),ze.map((function(e){return i.jsx(w,{path:e.path,borderWidth:G,borderColor:Z},e.date.toString())})),i.jsx(C,{months:Ie,legend:K,theme:we}),i.jsx(S,{years:Fe,legend:P,theme:we}),xe.map((function(e,t){var n=Pe.ticks(e.itemCount).map((function(e){return{id:e,label:Te(e),color:Pe(e)}}));return i.jsx(o.BoxLegendSvg,p({},e,{containerWidth:r,containerHeight:a,data:n}),t)}))]})},N=function(e){var o=e.isInteractive,n=void 0===o?j.isInteractive:o,r=e.renderWrapper,a=e.theme,d=x(e,X);return i.jsx(t.Container,{isInteractive:n,renderWrapper:r,theme:a,children:i.jsx(_,p({isInteractive:n},d))})},Z=a.timeFormat("%Y-%m-%d"),Q=function(e){var t,o,n=e.direction,i=e.daySpacing,r=e.offset,a=e.square,d=e.totalDays,l=e.width,u=e.height;"horizontal"===n?(l-=r,t=7,o=Math.ceil(d/7)):(u-=r,o=7,t=Math.ceil(d/7));var c=(u-i*(t+1))/t,s=(l-i*(o+1))/o,h=Math.min(c,s);return{columns:o,rows:t,cellHeight:a?h:c,cellWidth:a?h:s}};var G=function(e){var t=e.direction,o=e.colorScale,n=e.emptyColor,i=e.from,r=e.to,a=e.data,d=e.cellWidth,l=e.cellHeight,u=e.daySpacing,c=e.offset,h=u,m=u;"horizontal"===t?h+=c:m+=c;var g=i||a[0].date,f=r||a[a.length-1].date,v=y.default(g)?g:new Date(g),x=y.default(f)?f:new Date(f),b=s.timeDays(v,x).map((function(e){return{date:e,day:Z(e)}})).map((function(e){var i=a.find((function(t){return t.day===e.day})),r=function(e){var t=e.startDate,o=e.date,n=e.direction,i=s.timeWeek.count(t,o),r=o.getMonth(),a=o.getFullYear(),d=0,l=0;return"horizontal"===n?(d=i,l=o.getDay()):(d=o.getDay(),l=i),{currentColumn:d,year:a,currentRow:l,firstWeek:i,month:r,date:o}}({startDate:v,date:e.date,direction:t}),c=r.currentColumn,g=r.currentRow,f=r.firstWeek,y=r.year,x=r.month,b=r.date,S={x:h+u*c+d*c,y:m+u*g+l*g};return i?p({},i,{coordinates:S,firstWeek:f,month:x,year:y,date:b,color:o(i.value),width:d,height:l}):p({},e,{coordinates:S,firstWeek:f,month:x,year:y,date:b,color:n,width:d,height:l})}));return b},J=function(e){var t=e.cellHeight,o=e.cellWidth,n=e.direction,i=e.daySpacing,r=e.ticks,a=void 0===r?[1,3,5]:r,d=e.arrayOfWeekdays,l=void 0===d?["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]:d,u=o+i,c=t+i;return a.map((function(e){return{value:l[e],rotation:"horizontal"===n?0:-90,y:"horizontal"===n?c*(e+1)-c/3:0,x:"horizontal"===n?0:u*(e+1)-u/3}}))},K=function(e){var t=e.direction,o=e.daySpacing,n=e.days,i=e.cellHeight,r=e.cellWidth;return n.reduce((function(e,n){if(e.weeks.length===n.firstWeek){e.weeks.push(n);var a=n.year+"-"+n.month;if(Object.keys(e.months).includes(a))"horizontal"===t?e.months[a].bbox.width=(n.firstWeek-e.months[a].firstWeek)*(r+o):e.months[a].bbox.height=(n.firstWeek-e.months[a].firstWeek)*(i+o);else{var d={x:0,y:0,width:0,height:0};"horizontal"===t?(d.x=n.coordinates.x-o,d.height=i+o,d.width=r+2*o):(d.y=n.coordinates.y-o,d.height=i+2*o,d.width=r+2*o),e.months[a]={date:n.date,bbox:d,firstWeek:n.firstWeek,month:0,year:0}}}return e}),{months:{},weeks:[]})},U=function(e){var t,o,n=e.from,i=e.to,r=e.data;return t=n?y.default(n)?n:new Date(n):r[0].date,o=n&&i?y.default(i)?i:new Date(i):r[r.length-1].date,t.getDay()+s.timeDay.count(t,o)},$=n.memo((function(e){var t=e.data,o=e.x,a=e.ry,d=void 0===a?5:a,l=e.rx,u=void 0===l?5:l,c=e.y,s=e.width,h=e.height,m=e.color,g=e.borderWidth,f=e.borderColor,v=e.isInteractive,y=e.tooltip,x=e.onMouseEnter,b=e.onMouseMove,S=e.onMouseLeave,w=e.onClick,C=e.formatValue,W=r.useTooltip(),L=W.showTooltipFromEvent,M=W.hideTooltip,k=n.useCallback((function(e){if("value"in t){var o=p({},t,{value:C(t.value)});L(n.createElement(y,p({},o)),e),null==x||x(t,e)}}),[L,y,t,x,C]),j=n.useCallback((function(e){if("value"in t){var o=p({},t,{value:C(t.value)});L(n.createElement(y,p({},o)),e),null==b||b(t,e)}}),[L,y,t,b,C]),D=n.useCallback((function(e){"value"in t&&(M(),null==S||S(t,e))}),[M,t,S]),z=n.useCallback((function(e){return null==w?void 0:w(t,e)}),[t,w]);return i.jsx("rect",{x:o,y:c,rx:u,ry:d,width:s,height:h,style:{fill:m,strokeWidth:g,stroke:f},onMouseEnter:v?k:void 0,onMouseMove:v?j:void 0,onMouseLeave:v?D:void 0,onClick:v?z:void 0})})),ee=["isInteractive","renderWrapper","theme"],te=function(e){var r=e.margin,a=e.width,d=e.height,l=e.square,u=void 0===l?z.square:l,c=e.colors,s=void 0===c?z.colors:c,h=e.colorScale,m=e.emptyColor,g=void 0===m?z.emptyColor:m,f=e.from,v=e.to,y=e.data,x=e.direction,b=void 0===x?z.direction:x,S=e.minValue,w=void 0===S?z.minValue:S,W=e.maxValue,L=void 0===W?z.maxValue:W,M=e.valueFormat,k=e.legendFormat,j=e.monthLegend,D=void 0===j?z.monthLegend:j,V=e.monthLegendOffset,O=void 0===V?z.monthLegendOffset:V,P=e.monthLegendPosition,I=void 0===P?z.monthLegendPosition:P,F=e.weekdayLegendOffset,R=void 0===F?z.weekdayLegendOffset:F,T=e.weekdayTicks,B=e.dayBorderColor,H=void 0===B?z.dayBorderColor:B,q=e.dayBorderWidth,A=void 0===q?z.dayBorderWidth:q,X=e.daySpacing,_=void 0===X?z.daySpacing:X,N=e.dayRadius,Z=void 0===N?z.dayRadius:N,ee=e.isInteractive,te=void 0===ee?z.isInteractive:ee,oe=e.tooltip,ne=void 0===oe?z.tooltip:oe,ie=e.onClick,re=e.onMouseEnter,ae=e.onMouseLeave,de=e.onMouseMove,le=e.legends,ue=void 0===le?z.legends:le,ce=e.role,se=void 0===ce?z.role:ce,he=t.useDimensions(a,d,r),me=he.margin,ge=he.innerWidth,fe=he.innerHeight,ve=he.outerWidth,ye=he.outerHeight,pe=n.useMemo((function(){return y.map((function(e){return p({},e,{date:new Date(e.day+"T00:00:00")})})).sort((function(e,t){return e.day.localeCompare(t.day)}))}),[y]),xe=t.useTheme(),be=E({data:pe,minValue:w,maxValue:L,colors:s,colorScale:h}),Se=U({from:f,to:v,data:pe}),we=Q({square:u,offset:R,totalDays:Se,width:ge,height:fe,daySpacing:_,direction:b}),Ce=we.cellHeight,We=we.cellWidth,Le=G({offset:R,colorScale:be,emptyColor:g,cellHeight:Ce,cellWidth:We,from:f,to:v,data:pe,direction:b,daySpacing:_}),Me=Object.values(K({daySpacing:_,direction:b,cellHeight:Ce,cellWidth:We,days:Le}).months),ke=J({direction:b,cellHeight:Ce,cellWidth:We,daySpacing:_,ticks:T}),je=Y({months:Me,direction:b,monthLegendPosition:I,monthLegendOffset:O}),De=t.useValueFormatter(M),ze=t.useValueFormatter(k);return i.jsxs(t.SvgWrapper,{width:ve,height:ye,margin:me,role:se,children:[ke.map((function(e){return i.jsx("text",{transform:"translate("+e.x+","+e.y+") rotate("+e.rotation+")",textAnchor:"left",style:xe.labels.text,children:e.value},e.value)})),Le.map((function(e){return i.jsx($,{data:e,x:e.coordinates.x,rx:Z,y:e.coordinates.y,ry:Z,width:We,height:Ce,color:e.color,borderWidth:A,borderColor:H,onMouseEnter:re,onMouseLeave:ae,onMouseMove:de,isInteractive:te,tooltip:ne,onClick:ie,formatValue:De},e.date.toString())})),i.jsx(C,{months:je,legend:D,theme:xe}),ue.map((function(e,t){var n=be.ticks(e.itemCount).map((function(e){return{id:e,label:ze(e),color:be(e)}}));return i.jsx(o.BoxLegendSvg,p({},e,{containerWidth:a,containerHeight:d,data:n}),t)}))]})},oe=function(e){var o=e.isInteractive,n=void 0===o?z.isInteractive:o,r=e.renderWrapper,a=e.theme,d=x(e,ee);return i.jsx(t.Container,{isInteractive:n,renderWrapper:r,theme:a,children:i.jsx(te,p({isInteractive:n},d))})},ne=["months","years"],ie=["isInteractive","renderWrapper","theme"],re=function(e,o,n,i,r,a){var d=t.getRelativeCursor(o,e),l=d[0],u=d[1];return n.find((function(e){return"value"in e&&t.isCursorInRect(e.x+a.left-r/2,e.y+a.top-r/2,i+r,i+r,l,u)}))},ae=n.memo((function(e){var a=e.margin,d=e.width,l=e.height,u=e.pixelRatio,c=void 0===u?D.pixelRatio:u,s=e.align,h=void 0===s?D.align:s,m=e.colors,f=void 0===m?D.colors:m,v=e.colorScale,y=e.data,b=e.direction,S=void 0===b?D.direction:b,w=e.emptyColor,C=void 0===w?D.emptyColor:w,W=e.from,L=e.to,M=e.minValue,k=void 0===M?D.minValue:M,j=e.maxValue,z=void 0===j?D.maxValue:j,V=e.valueFormat,O=e.legendFormat,P=e.yearLegend,I=void 0===P?D.yearLegend:P,F=e.yearLegendOffset,R=void 0===F?D.yearLegendOffset:F,T=e.yearLegendPosition,A=void 0===T?D.yearLegendPosition:T,X=e.yearSpacing,_=void 0===X?D.yearSpacing:X,N=e.monthLegend,Z=void 0===N?D.monthLegend:N,Q=e.monthLegendOffset,G=void 0===Q?D.monthLegendOffset:Q,J=e.monthLegendPosition,K=void 0===J?D.monthLegendPosition:J,U=e.monthSpacing,$=void 0===U?D.monthSpacing:U,ee=e.dayBorderColor,te=void 0===ee?D.dayBorderColor:ee,oe=e.dayBorderWidth,ie=void 0===oe?D.dayBorderWidth:oe,ae=e.daySpacing,de=void 0===ae?D.daySpacing:ae,le=e.isInteractive,ue=void 0===le?D.isInteractive:le,ce=e.tooltip,se=void 0===ce?D.tooltip:ce,he=e.onClick,me=e.onMouseEnter,ge=e.onMouseLeave,fe=e.onMouseMove,ve=e.legends,ye=void 0===ve?D.legends:ve,pe=n.useRef(null),xe=t.useDimensions(d,l,a),be=xe.innerWidth,Se=xe.innerHeight,we=xe.outerWidth,Ce=xe.outerHeight,We=xe.margin,Le=B({width:be,height:Se,from:W,to:L,direction:S,yearSpacing:_,monthSpacing:$,daySpacing:de,align:h}),Me=Le.months,ke=Le.years,je=x(Le,ne),De=E({data:y,minValue:k,maxValue:z,colors:f,colorScale:v}),ze=Y({months:Me,direction:S,monthLegendPosition:K,monthLegendOffset:G}),Ve=H({years:ke,direction:S,yearLegendPosition:A,yearLegendOffset:R}),Oe=q({days:je.days,data:y,colorScale:De,emptyColor:C}),Pe=n.useState(null),Ie=Pe[0],Fe=Pe[1],Re=t.useTheme(),Te=t.useValueFormatter(V),Be=t.useValueFormatter(O),Ee=r.useTooltip(),He=Ee.showTooltipFromEvent,Ye=Ee.hideTooltip;n.useEffect((function(){var e;if(pe.current){pe.current.width=we*c,pe.current.height=Ce*c;var n=pe.current.getContext("2d");n&&(n.scale(c,c),n.fillStyle=Re.background,n.fillRect(0,0,we,Ce),n.translate(We.left,We.top),Oe.forEach((function(e){n.fillStyle=e.color,ie>0&&(n.strokeStyle=te,n.lineWidth=ie),n.beginPath(),n.rect(e.x,e.y,e.size,e.size),n.fill(),ie>0&&n.stroke()})),n.textAlign="center",n.textBaseline="middle",n.fillStyle=null!=(e=Re.labels.text.fill)?e:"",n.font=Re.labels.text.fontSize+"px "+Re.labels.text.fontFamily,ze.forEach((function(e){n.save(),n.translate(e.x,e.y),n.rotate(t.degreesToRadians(e.rotation)),n.fillText(String(Z(e.year,e.month,e.date)),0,0),n.restore()})),Ve.forEach((function(e){n.save(),n.translate(e.x,e.y),n.rotate(t.degreesToRadians(e.rotation)),n.fillText(String(I(e.year)),0,0),n.restore()})),ye.forEach((function(e){var t=De.ticks(e.itemCount).map((function(e){return{id:e,label:Be(e),color:De(e)}}));o.renderLegendToCanvas(n,p({},e,{data:t,containerWidth:be,containerHeight:Se,theme:Re}))})))}}),[pe,Se,be,we,Ce,c,We,Oe,te,ie,v,I,Ve,Z,ze,ye,Re,Be,De]);var qe=n.useCallback((function(e){if(pe.current){var t=re(e,pe.current,Oe,Oe[0].size,ie,We);if(t){if(Fe(t),!("value"in t))return;var o=p({},t,{value:Te(t.value),data:p({},t.data)});He(g.createElement(se,p({},o)),e),!Ie&&(null==me||me(t,e)),null==fe||fe(t,e),Ie&&(null==ge||ge(t,e))}else Ye(),t&&(null==ge||ge(t,e))}}),[pe,Ie,We,Oe,Fe,Te,ie,He,Ye,me,fe,ge,se]),Ae=n.useCallback((function(){Fe(null),Ye()}),[Fe,Ye]),Xe=n.useCallback((function(e){if(he&&pe.current){var t=re(e,pe.current,Oe,Oe[0].size,de,We);t&&he(t,e)}}),[pe,de,We,Oe,he]);return i.jsx("canvas",{ref:pe,width:we*c,height:Ce*c,style:{width:we,height:Ce},onMouseEnter:ue?qe:void 0,onMouseMove:ue?qe:void 0,onMouseLeave:ue?Ae:void 0,onClick:ue?Xe:void 0})})),de=function(e){var o=e.isInteractive,n=void 0===o?D.isInteractive:o,r=e.renderWrapper,a=e.theme,d=x(e,ie);return i.jsx(t.Container,{isInteractive:n,renderWrapper:r,theme:a,children:i.jsx(ae,p({isInteractive:n},d))})};e.Calendar=N,e.CalendarCanvas=de,e.ResponsiveCalendar=function(e){return i.jsx(t.ResponsiveWrapper,{children:function(t){var o=t.width,n=t.height;return i.jsx(N,p({width:o,height:n},e))}})},e.ResponsiveCalendarCanvas=function(e){return i.jsx(t.ResponsiveWrapper,{children:function(t){var o=t.width,n=t.height;return i.jsx(de,p({width:o,height:n},e))}})},e.ResponsiveTimeRange=function(e){return i.jsx(t.ResponsiveWrapper,{children:function(t){var o=t.width,n=t.height;return i.jsx(oe,p({width:o,height:n},e))}})},e.TimeRange=oe,e.bindDaysData=F,e.calendarCanvasDefaultProps=D,e.calendarDefaultProps=j,e.computeCellPositions=G,e.computeCellSize=Q,e.computeDomain=V,e.computeLayout=I,e.computeMonthLegendPositions=T,e.computeMonthLegends=K,e.computeTotalDays=U,e.computeWeekdays=J,e.computeYearLegendPositions=R,e.timeRangeDefaultProps=z,e.useCalendarLayout=B,e.useColorScale=E,e.useDays=q,e.useMonthLegends=Y,e.useYearLegends=H,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=nivo-calendar.umd.js.map

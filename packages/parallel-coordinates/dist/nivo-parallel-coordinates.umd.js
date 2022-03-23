!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@nivo/core"),require("@nivo/axes"),require("prop-types"),require("@nivo/colors"),require("react"),require("d3-shape"),require("d3-scale"),require("@react-spring/web"),require("@nivo/tooltip"),require("react/jsx-runtime")):"function"==typeof define&&define.amd?define(["exports","@nivo/core","@nivo/axes","prop-types","@nivo/colors","react","d3-shape","d3-scale","@react-spring/web","@nivo/tooltip","react/jsx-runtime"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).nivo=e.nivo||{},e.nivo,e.nivo,e.PropTypes,e.nivo,e.React,e.d3,e.d3,e["@react-spring/web"],e.nivo,e["react/jsx-runtime"])}(this,(function(e,t,i,a,r,n,o,l,u,s,d){"use strict";function f(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=f(a);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},p.apply(this,arguments)}var h={key:c.default.string.isRequired,ticksPosition:c.default.oneOf(["before","after"]),tickSize:c.default.number,tickPadding:c.default.number,tickRotation:c.default.number,format:c.default.oneOfType([c.default.func,c.default.string]),legend:c.default.node,legendPosition:c.default.oneOf(["start","middle","end"]),legendOffset:c.default.number},y={data:c.default.arrayOf(c.default.object).isRequired,variables:c.default.arrayOf(c.default.oneOfType([c.default.shape(p({},h,{key:c.default.string.isRequired,type:c.default.oneOf(["point"]).isRequired,padding:c.default.number,values:c.default.arrayOf(c.default.oneOfType([c.default.string,c.default.number])),tickValues:c.default.arrayOf(c.default.oneOfType([c.default.string,c.default.number]))})),c.default.shape(p({},h,{type:c.default.oneOf(["linear"]).isRequired,min:c.default.oneOfType([c.default.number,c.default.oneOf(["auto"])]),max:c.default.oneOfType([c.default.number,c.default.oneOf(["auto"])]),tickValues:c.default.oneOfType([c.default.number,c.default.arrayOf(c.default.number)])}))])).isRequired,layout:c.default.oneOf(["horizontal","vertical"]).isRequired,curve:t.lineCurvePropType.isRequired,strokeWidth:c.default.number.isRequired,lineOpacity:c.default.number.isRequired,axesPlan:c.default.oneOf(["foreground","background"]).isRequired,axesTicksPosition:c.default.oneOf(["before","after"]).isRequired,colors:r.ordinalColorsPropType.isRequired},v=p({},y,{role:c.default.string.isRequired}),g={layout:"horizontal",curve:"linear",colors:{scheme:"yellow_orange_red"},strokeWidth:2,lineOpacity:.35,axesPlan:"foreground",axesTicksPosition:"after",animate:!0,motionConfig:"gentle"},m=p({},g,{role:"img"}),b=function(e){var i=e.width,a=e.height,u=e.data,s=e.variables,d=e.layout,f=e.colors,c=e.curve,h=r.useOrdinalColorScale(f,"index"),y=n.useMemo((function(){return o.line().x((function(e){return e.x})).y((function(e){return e.y})).curve(t.curveFromProp(c))}),[c]),v=n.useMemo((function(){return function(e){var t=e.width,i=e.height,a=e.data,r=e.variables,n=e.layout,o=l.scalePoint().range("horizontal"===n?[0,t]:[i,0]).domain(r.map((function(e){return e.key}))),u="horizontal"===n?[i,0]:[0,t],s=r.map((function(e){var t,i=new Set;if(a.forEach((function(t){return i.add(t[e.key])})),"linear"===e.type){var r=void 0!==e.min&&"auto"!==e.min?e.min:Math.min.apply(Math,Array.from(i)),n=void 0!==e.max&&"auto"!==e.max?e.max:Math.max.apply(Math,Array.from(i));t=l.scaleLinear().rangeRound(u).domain([r,n])}return"point"===e.type&&(t=l.scalePoint().range(u).domain(e.values||i),void 0!==e.padding&&t.padding(e.padding)),p({},e,{scale:t,values:Array.from(i)})})),d=a.map((function(e,t){var i=s.map((function(t){return{x:"horizontal"===n?o(t.key):t.scale(e[t.key]),y:"horizontal"===n?t.scale(e[t.key]):o(t.key)}}));return p({index:t},e,{points:i})}));return{variablesScale:o,variablesWithScale:s,dataWithPoints:d}}({width:i,height:a,data:u,variables:s,layout:d})}),[i,a,u,s,d]);return{variablesScale:v.variablesScale,variablesWithScale:v.variablesWithScale,dataWithPoints:v.dataWithPoints,getLineColor:h,lineGenerator:y}},k=function(e){var t=e.data,i=e.variables;return d.jsx(s.TableTooltip,{rows:i.map((function(e){return[e.key,d.jsx("strong",{children:t[e.key]})]}))})};k.propTypes={data:c.default.object.isRequired,variables:c.default.arrayOf(c.default.shape({key:c.default.oneOfType([c.default.string,c.default.number]).isRequired})).isRequired};var x=n.memo(k),P=function(e){var i=e.data,a=e.variables,r=e.lineGenerator,o=e.points,l=e.strokeWidth,f=e.color,c=e.opacity,p=s.useTooltip(),h=p.showTooltipFromEvent,y=p.hideTooltip,v=n.useCallback((function(e){h(d.jsx(x,{data:i,variables:a}),e)}),[i,a]),g=t.useMotionConfig(),m=g.animate,b=g.config,k=t.useAnimatedPath(r(o)),P=u.useSpring({color:f,opacity:c,config:b,immediate:!m});return d.jsx(u.animated.path,{d:k,stroke:P.color,strokeWidth:l,strokeLinecap:"round",opacity:P.opacity,fill:"none",onMouseEnter:v,onMouseMove:v,onMouseLeave:y})};P.propTypes={data:c.default.object.isRequired,variables:c.default.arrayOf(c.default.shape({key:c.default.oneOfType([c.default.string,c.default.number]).isRequired})).isRequired,lineGenerator:c.default.func.isRequired,points:c.default.arrayOf(c.default.shape({x:c.default.number.isRequired,y:c.default.number.isRequired})).isRequired,strokeWidth:c.default.number.isRequired,color:c.default.string.isRequired,opacity:c.default.number.isRequired};var R=n.memo(P),q=function(e){var a=e.data,r=e.variables,n=e.layout,o=e.width,l=e.height,u=e.margin,s=e.axesPlan,f=e.axesTicksPosition,c=e.strokeWidth,p=e.lineOpacity,h=e.curve,y=e.colors,v=e.role,g=t.useDimensions(o,l,u),m=g.margin,k=g.innerWidth,x=g.innerHeight,P=g.outerWidth,q=g.outerHeight,O=b({width:k,height:x,data:a,variables:r,layout:n,colors:y,curve:h}),T=O.variablesScale,w=O.variablesWithScale,W=O.dataWithPoints,j=O.lineGenerator,C=O.getLineColor,S=w.map((function(e){return d.jsx(i.Axis,{axis:"horizontal"===n?"y":"x",length:"horizontal"===n?x:k,x:"horizontal"===n?T(e.key):0,y:"horizontal"===n?0:T(e.key),scale:e.scale,ticksPosition:e.ticksPosition||f,tickValues:e.tickValues,tickSize:e.tickSize,tickPadding:e.tickPadding,tickRotation:e.tickRotation,format:e.tickFormat,legend:e.legend,legendPosition:e.legendPosition,legendOffset:e.legendOffset},e.key)}));return d.jsxs(t.SvgWrapper,{width:P,height:q,margin:m,role:v,children:["background"===s&&S,W.map((function(e){return d.jsx(R,{data:e,variables:r,lineGenerator:j,points:e.points,strokeWidth:c,opacity:p,color:C(e)},e.index)})),"foreground"===s&&S]})};q.propTypes=v;var O=t.withContainer(q);O.defaultProps=m;var T=function(e){var a=e.data,r=e.layout,o=e.variables,l=e.width,u=e.height,s=e.margin,f=e.curve,c=e.colors,p=e.lineOpacity,h=e.strokeWidth,y=e.axesTicksPosition,v=e.pixelRatio,g=n.useRef(null),m=t.useDimensions(l,u,s),k=m.margin,x=m.innerWidth,P=m.innerHeight,R=m.outerWidth,q=m.outerHeight,O=b({width:x,height:P,data:a,variables:o,layout:r,colors:c,curve:f}),T=O.variablesScale,w=O.variablesWithScale,W=O.dataWithPoints,j=O.lineGenerator,C=O.getLineColor,S=t.useTheme();return n.useEffect((function(){g.current.width=R*v,g.current.height=q*v;var e=g.current.getContext("2d");e.scale(v,v),e.fillStyle=S.background,e.fillRect(0,0,R,q),e.translate(k.left,k.top),j.context(e),W.forEach((function(t){e.save(),e.globalAlpha=p,e.beginPath(),j(t.points),e.strokeStyle=C(t),e.lineWidth=h,e.stroke(),e.restore()})),w.map((function(t){i.renderAxisToCanvas(e,{axis:"horizontal"===r?"y":"x",scale:t.scale,x:"horizontal"===r?T(t.key):0,y:"horizontal"===r?0:T(t.key),length:"horizontal"===r?P:x,ticksPosition:y,theme:S})}))}),[g,R,q,x,P,k,j,C,p,h,W,w,r,y,S,v]),d.jsx("canvas",{ref:g,width:R*v,height:q*v,style:{width:R,height:q}})};T.propTypes=p({},y,{pixelRatio:c.default.number.isRequired});var w=t.withContainer(T);w.defaultProps=p({},g,{pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1});e.ParallelCoordinates=O,e.ParallelCoordinatesCanvas=w,e.ResponsiveParallelCoordinates=function(e){return d.jsx(t.ResponsiveWrapper,{children:function(t){var i=t.width,a=t.height;return d.jsx(O,p({width:i,height:a},e))}})},e.ResponsiveParallelCoordinatesCanvas=function(e){return d.jsx(t.ResponsiveWrapper,{children:function(t){var i=t.width,a=t.height;return d.jsx(w,p({width:i,height:a},e))}})},e.commonDefaultProps=g,e.commonPropTypes=y,e.svgDefaultProps=m,e.svgPropTypes=v,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=nivo-parallel-coordinates.umd.js.map

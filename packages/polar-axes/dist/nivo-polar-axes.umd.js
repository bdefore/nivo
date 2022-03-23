!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react"),require("@react-spring/web"),require("@nivo/core"),require("@nivo/scales"),require("@nivo/arcs"),require("react/jsx-runtime")):"function"==typeof define&&define.amd?define(["exports","react","@react-spring/web","@nivo/core","@nivo/scales","@nivo/arcs","react/jsx-runtime"],e):e((n="undefined"!=typeof globalThis?globalThis:n||self).nivo=n.nivo||{},n.React,n["@react-spring/web"],n.nivo,n.nivo,n.nivo,n["react/jsx-runtime"])}(this,(function(n,e,t,i,a,r,o){"use strict";function c(){return c=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},c.apply(this,arguments)}var u=function(n){var e=n.label,a=n.animated,r=i.useTheme();return o.jsxs(t.animated.g,{opacity:a.opacity,children:[o.jsx(t.animated.line,{x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2,style:r.axis.ticks.line}),o.jsx(t.animated.text,{dx:a.textX,dy:a.textY,dominantBaseline:"central",style:r.axis.ticks.text,textAnchor:"middle",children:e})]})},s=function(n,e,t){var a=i.positionFromAngle(i.degreesToRadians(n),e),r=i.positionFromAngle(i.degreesToRadians(n),t);return{x1:a.x,y1:a.y,x2:r.x,y2:r.y}},l=function(n,e){var t=i.positionFromAngle(i.degreesToRadians(n),e);return{textX:t.x,textY:t.y}},d=function(n){var r=n.scale,u=n.innerRadius,s=n.outerRadius,l=i.useTheme(),d=e.useMemo((function(){return a.getScaleTicks(r).map((function(n,e){return{id:e,angle:r(n)-90}}))}),[r]),g=i.useMotionConfig(),f=g.animate,m=g.config,y=t.useTransition(d,{keys:function(n){return n.id},initial:function(n){return{angle:n.angle,opacity:1}},from:function(n){return{angle:n.angle,opacity:0}},enter:function(n){return{angle:n.angle,opacity:1}},update:function(n){return{angle:n.angle,opacity:1}},leave:function(n){return{angle:n.angle,opacity:0}},config:m,immediate:!f});return o.jsx(o.Fragment,{children:y((function(n,e){return o.jsx(t.animated.g,{transform:n.angle.to((function(n){return"rotate("+n+")"})),opacity:n.opacity,children:o.jsx("line",c({x1:u,x2:s},l.grid.line))},e.id)}))})},g=function(n){var u=n.scale,s=n.startAngle,l=n.endAngle,d=i.useTheme(),g=s-90,f=l-90,m=e.useMemo((function(){return a.getScaleTicks(u).map((function(n,e){var t=u(n);return"bandwidth"in u&&(t+=u.bandwidth()/2),{id:e,radius:t}}))}),[u]),y=i.useMotionConfig(),p=y.animate,x=y.config,h=t.useTransition(m,{keys:function(n){return n.id},initial:function(n){return{radius:n.radius,startAngle:g,endAngle:f,opacity:1}},from:function(n){return{radius:n.radius,startAngle:g,endAngle:f,opacity:0}},enter:function(n){return{radius:n.radius,startAngle:g,endAngle:f,opacity:1}},update:function(n){return{radius:n.radius,startAngle:g,endAngle:f,opacity:1}},leave:function(n){return{radius:n.radius,startAngle:g,endAngle:f,opacity:0}},config:x,immediate:!p});return o.jsx(o.Fragment,{children:h((function(n,e){return o.jsx(r.ArcLine,c({animated:n},d.grid.line,{strokeOpacity:n.opacity,fill:"none"}),e.id)}))})},f=function(n){var e=n.label,a=n.textAnchor,r=n.animated,c=i.useTheme();return o.jsxs(t.animated.g,{opacity:r.opacity,transform:t.to([r.y,r.rotation],(function(n,e){return"translate("+n+", 0) rotate("+e+")"})),children:[o.jsx(t.animated.line,{x2:r.length,style:c.axis.ticks.line}),o.jsx(t.animated.text,{dx:r.textX,textAnchor:a,dominantBaseline:"central",style:c.axis.ticks.text,children:e})]})};n.CircularAxis=function(n){var d=n.type,g=n.center,f=void 0===g?[0,0]:g,m=n.radius,y=n.startAngle,p=n.endAngle,x=n.scale,h=n.tickSize,v=void 0===h?5:h,A=n.tickPadding,k=void 0===A?12:A,j=n.tickComponent,b=void 0===j?u:j,T=y-90,M=p-90,R=i.useTheme(),S=i.useMotionConfig(),X=S.animate,w=S.config,C=t.useSpring({radius:m,startAngle:T,endAngle:M,opacity:1,immediate:!X,config:w}),q=e.useMemo((function(){return a.getScaleTicks(x).map((function(n,e){return{key:e,label:n,angle:x(n)-90}}))}),[x]),F="inner"===d?m-v:m+v,O="inner"===d?F-k:F+k,P=t.useTransition(q,{keys:function(n){return n.key},initial:function(n){return c({},s(n.angle,m,F),l(n.angle,O),{opacity:1})},from:function(n){return c({},s(n.angle,m,F),l(n.angle,O),{opacity:0})},enter:function(n){return c({},s(n.angle,m,F),l(n.angle,O),{opacity:1})},update:function(n){return c({},s(n.angle,m,F),l(n.angle,O),{opacity:1})},leave:function(n){return c({},s(n.angle,m,F),l(n.angle,O),{opacity:0})},immediate:!X,config:w});return o.jsxs("g",{transform:"translate("+f[0]+", "+f[1]+")",children:[o.jsx(r.ArcLine,c({animated:C},R.axis.domain.line,{fill:"none"})),P((function(n,t){return e.createElement(b,{key:t.key,label:t.label,animated:n})}))]})},n.PolarGrid=function(n){var e=n.center,t=n.enableRadialGrid,i=n.enableCircularGrid,a=n.angleScale,r=n.radiusScale,c=n.startAngle,u=n.endAngle,s=Math.min.apply(Math,r.range()),l=Math.max.apply(Math,r.range());return o.jsxs("g",{transform:"translate("+e[0]+","+e[1]+")",children:[t&&o.jsx(d,{scale:a,innerRadius:s,outerRadius:l}),i&&o.jsx(g,{scale:r,startAngle:c,endAngle:u})]})},n.RadialAxis=function(n){var r,c,u,s,l=n.type,d=n.center,g=n.angle,m=n.scale,y=n.tickSize,p=void 0===y?5:y,x=n.tickPadding,h=void 0===x?5:x,v=n.tickRotation,A=void 0===v?0:v,k=n.tickComponent,j=void 0===k?f:k,b=i.normalizeAngle(g);"start"===l?(s=90+A,b<=90?(u=(c=-p)-h,r="end"):b<270?(u=(c=p)+h,r="start",s-=180):(u=(c=-p)-h,r="end")):(s=90+A,b<90?(u=(c=p)+h,r="start"):b<270?(u=(c=-p)-h,r="end",s-=180):(u=(c=p)+h,r="start"));var T=e.useMemo((function(){return a.getScaleTicks(m).map((function(n,e){var t=m(n);return"bandwidth"in m&&(t+=m.bandwidth()/2),{key:e,label:n,position:t}}))}),[m]),M=i.useMotionConfig(),R=M.animate,S=M.config,X=t.useSpring({rotation:g-90,immediate:!R,config:S}),w=t.useTransition(T,{keys:function(n){return n.key},initial:function(n){return{y:n.position,textX:u,rotation:s,length:c,opacity:1}},from:function(n){return{y:n.position,textX:u,rotation:s,length:c,opacity:0}},enter:function(n){return{y:n.position,textX:u,rotation:s,length:c,opacity:1}},update:function(n){return{y:n.position,textX:u,rotation:s,length:c,opacity:1}},leave:function(n){return{y:n.position,textX:u,rotation:s,length:c,opacity:0}},immediate:!R,config:S});return o.jsx("g",{transform:"translate("+d[0]+", "+d[1]+")",children:o.jsx(t.animated.g,{transform:X.rotation.to((function(n){return"rotate("+n+")"})),children:w((function(n,t){return e.createElement(j,{key:t.key,label:t.label,y:t.position,textX:u,rotation:s,length:c,textAnchor:r,animated:n})}))})})},Object.defineProperty(n,"__esModule",{value:!0})}));
//# sourceMappingURL=nivo-polar-axes.umd.js.map

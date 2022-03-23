import*as t from"react";import{memo as e,useMemo as i,createElement as n}from"react";import{animated as r,useSpring as a,useTransition as o}from"@react-spring/web";import{textPropsByEngine as l,useTheme as s,useMotionConfig as c,degreesToRadians as f}from"@nivo/core";import{timeFormat as x}from"d3-time-format";import{format as u}from"d3-format";import{getScaleTicks as d,centerScale as m}from"@nivo/scales";import{jsxs as y,jsx as g,Fragment as k}from"react/jsx-runtime";import h from"prop-types";function v(){return v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},v.apply(this,arguments)}var p=function(t){var e,i=t.axis,n=t.scale,r=t.ticksPosition,a=t.tickValues,o=t.tickSize,s=t.tickPadding,c=t.tickRotation,f=t.engine,x=void 0===f?"svg":f,u=d(n,a),y=l[x],g="bandwidth"in n?m(n):n,k={lineX:0,lineY:0},h={textX:0,textY:0},p="object"==typeof document&&"rtl"===document.dir,b=y.align.center,P=y.baseline.center;return"x"===i?(e=function(t){var e;return{x:null!=(e=g(t))?e:0,y:0}},k.lineY=o*("after"===r?1:-1),h.textY=(o+s)*("after"===r?1:-1),P="after"===r?y.baseline.top:y.baseline.bottom,0===c?b=y.align.center:"after"===r&&c<0||"before"===r&&c>0?(b=y.align[p?"left":"right"],P=y.baseline.center):("after"===r&&c>0||"before"===r&&c<0)&&(b=y.align[p?"right":"left"],P=y.baseline.center)):(e=function(t){var e;return{x:0,y:null!=(e=g(t))?e:0}},k.lineX=o*("after"===r?1:-1),h.textX=(o+s)*("after"===r?1:-1),b="after"===r?y.align.left:y.align.right),{ticks:u.map((function(t){return v({key:t instanceof Date?""+t.valueOf():""+t,value:t},e(t),k,h)})),textAlign:b,textBaseline:P}},b=function(t,e){if(void 0===t||"function"==typeof t)return t;if("time"===e.type){var i=x(t);return function(t){return i(t instanceof Date?t:new Date(t))}}return u(t)},P=function(t){var e,i=t.width,n=t.height,r=t.scale,a=t.axis,o=t.values,l=(e=o,Array.isArray(e)?o:void 0)||d(r,o),s="bandwidth"in r?m(r):r,c="x"===a?l.map((function(t){var e,i;return{key:t instanceof Date?""+t.valueOf():""+t,x1:null!=(e=s(t))?e:0,x2:null!=(i=s(t))?i:0,y1:0,y2:n}})):l.map((function(t){var e,n;return{key:t instanceof Date?""+t.valueOf():""+t,x1:0,x2:i,y1:null!=(e=s(t))?e:0,y2:null!=(n=s(t))?n:0}}));return c},S=e((function(t){var e,n=t.value,a=t.format,o=t.lineX,l=t.lineY,c=t.onClick,f=t.textBaseline,x=t.textAnchor,u=t.animatedProps,d=s(),m=null!=(e=null==a?void 0:a(n))?e:n,k=i((function(){var t={opacity:u.opacity};return c?{style:v({},t,{cursor:"pointer"}),onClick:function(t){return c(t,m)}}:{style:t}}),[u.opacity,c,m]);return y(r.g,v({transform:u.transform},k,{children:[g("line",{x1:0,x2:o,y1:0,y2:l,style:d.axis.ticks.line}),g(r.text,{dominantBaseline:f,textAnchor:x,transform:u.textTransform,style:d.axis.ticks.text,children:m})]}))})),T=e((function(e){var n=e.axis,l=e.scale,f=e.x,x=void 0===f?0:f,u=e.y,d=void 0===u?0:u,m=e.length,k=e.ticksPosition,h=e.tickValues,P=e.tickSize,T=void 0===P?5:P,O=e.tickPadding,w=void 0===O?5:O,A=e.tickRotation,X=void 0===A?0:A,Y=e.format,W=e.renderTick,B=void 0===W?S:W,z=e.legend,V=e.legendPosition,C=void 0===V?"end":V,D=e.legendOffset,R=void 0===D?0:D,j=e.onClick,E=e.ariaHidden,q=s(),F=i((function(){return b(Y,l)}),[Y,l]),H=p({axis:n,scale:l,ticksPosition:k,tickValues:h,tickSize:T,tickPadding:w,tickRotation:X}),N=H.ticks,I=H.textAlign,G=H.textBaseline,J=null;if(void 0!==z){var K,L=0,M=0,Q=0;"y"===n?(Q=-90,L=R,"start"===C?(K="start",M=m):"middle"===C?(K="middle",M=m/2):"end"===C&&(K="end")):(M=R,"start"===C?K="start":"middle"===C?(K="middle",L=m/2):"end"===C&&(K="end",L=m)),J=g("text",{transform:"translate("+L+", "+M+") rotate("+Q+")",textAnchor:K,style:v({dominantBaseline:"central"},q.axis.legend.text),children:z})}var U=c(),Z=U.animate,$=U.config,_=a({transform:"translate("+x+","+d+")",lineX2:"x"===n?m:0,lineY2:"x"===n?0:m,config:$,immediate:!Z}),tt=o(N,{keys:function(t){return t.key},initial:function(t){return{opacity:1,transform:"translate("+t.x+","+t.y+")",textTransform:"translate("+t.textX+","+t.textY+") rotate("+X+")"}},from:function(t){return{opacity:0,transform:"translate("+t.x+","+t.y+")",textTransform:"translate("+t.textX+","+t.textY+") rotate("+X+")"}},enter:function(t){return{opacity:1,transform:"translate("+t.x+","+t.y+")",textTransform:"translate("+t.textX+","+t.textY+") rotate("+X+")"}},update:function(t){return{opacity:1,transform:"translate("+t.x+","+t.y+")",textTransform:"translate("+t.textX+","+t.textY+") rotate("+X+")"}},leave:{opacity:0},config:$,immediate:!Z});return y(r.g,{transform:_.transform,"aria-hidden":E,children:[tt((function(e,i,n,r){return t.createElement(B,v({tickIndex:r,format:F,rotate:X,textBaseline:G,textAnchor:I,animatedProps:e},i,j?{onClick:j}:{}))})),g(r.line,{style:q.axis.domain.line,x1:0,x2:_.lineX2,y1:0,y2:_.lineY2}),J]})})),O={ticksPosition:h.oneOf(["before","after"]),tickValues:h.oneOfType([h.number,h.arrayOf(h.oneOfType([h.number,h.string,h.instanceOf(Date)])),h.string]),tickSize:h.number,tickPadding:h.number,tickRotation:h.number,format:h.oneOfType([h.func,h.string]),renderTick:h.func,legend:h.node,legendPosition:h.oneOf(["start","middle","end"]),legendOffset:h.number,ariaHidden:h.bool},w=h.shape(O),A=["top","right","bottom","left"],X=e((function(t){var e=t.xScale,i=t.yScale,n=t.width,r=t.height,a={top:t.top,right:t.right,bottom:t.bottom,left:t.left};return g(k,{children:A.map((function(t){var o=a[t];if(!o)return null;var l="top"===t||"bottom"===t;return g(T,v({},o,{axis:l?"x":"y",x:"right"===t?n:0,y:"bottom"===t?r:0,scale:l?e:i,length:l?n:r,ticksPosition:"top"===t||"left"===t?"before":"after"}),t)}))})})),Y=e((function(t){var e=t.animatedProps,i=s();return g(r.line,v({},e,i.grid.line))})),W=e((function(t){var e=t.lines,i=c(),r=i.animate,a=i.config,l=o(e,{keys:function(t){return t.key},initial:function(t){return{opacity:1,x1:t.x1,x2:t.x2,y1:t.y1,y2:t.y2}},from:function(t){return{opacity:0,x1:t.x1,x2:t.x2,y1:t.y1,y2:t.y2}},enter:function(t){return{opacity:1,x1:t.x1,x2:t.x2,y1:t.y1,y2:t.y2}},update:function(t){return{opacity:1,x1:t.x1,x2:t.x2,y1:t.y1,y2:t.y2}},leave:{opacity:0},config:a,immediate:!r});return g("g",{children:l((function(t,e){return n(Y,v({},e,{key:e.key,animatedProps:t}))}))})})),B=e((function(t){var e=t.width,n=t.height,r=t.xScale,a=t.yScale,o=t.xValues,l=t.yValues,s=i((function(){return!!r&&P({width:e,height:n,scale:r,axis:"x",values:o})}),[r,o,e,n]),c=i((function(){return!!a&&P({width:e,height:n,scale:a,axis:"y",values:l})}),[n,e,a,l]);return y(k,{children:[s&&g(W,{lines:s}),c&&g(W,{lines:c})]})})),z=function(t,e){var i,n=e.axis,r=e.scale,a=e.x,o=void 0===a?0:a,l=e.y,s=void 0===l?0:l,c=e.length,x=e.ticksPosition,u=e.tickValues,d=e.tickSize,m=void 0===d?5:d,y=e.tickPadding,g=void 0===y?5:y,k=e.tickRotation,h=void 0===k?0:k,v=e.format,b=e.legend,P=e.legendPosition,S=void 0===P?"end":P,T=e.legendOffset,O=void 0===T?0:T,w=e.theme,A=p({axis:n,scale:r,ticksPosition:x,tickValues:u,tickSize:m,tickPadding:g,tickRotation:h,engine:"canvas"}),X=A.ticks,Y=A.textAlign,W=A.textBaseline;t.save(),t.translate(o,s),t.textAlign=Y,t.textBaseline=W,t.font=(w.axis.ticks.text.fontWeight?w.axis.ticks.text.fontWeight+" ":"")+w.axis.ticks.text.fontSize+"px "+w.axis.ticks.text.fontFamily,(null!=(i=w.axis.domain.line.strokeWidth)?i:0)>0&&(t.lineWidth=Number(w.axis.domain.line.strokeWidth),t.lineCap="square",w.axis.domain.line.stroke&&(t.strokeStyle=w.axis.domain.line.stroke),t.beginPath(),t.moveTo(0,0),t.lineTo("x"===n?c:0,"x"===n?0:c),t.stroke());var B="function"==typeof v?v:function(t){return""+t};if(X.forEach((function(e){var i;(null!=(i=w.axis.ticks.line.strokeWidth)?i:0)>0&&(t.lineWidth=Number(w.axis.ticks.line.strokeWidth),t.lineCap="square",w.axis.ticks.line.stroke&&(t.strokeStyle=w.axis.ticks.line.stroke),t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(e.x+e.lineX,e.y+e.lineY),t.stroke());var n=B(e.value);t.save(),t.translate(e.x+e.textX,e.y+e.textY),t.rotate(f(h)),w.axis.ticks.text.fill&&(t.fillStyle=w.axis.ticks.text.fill),t.fillText(String(n),0,0),t.restore()})),void 0!==b){var z=0,V=0,C=0,D="center";"y"===n?(C=-90,z=O,"start"===S?(D="start",V=c):"middle"===S?(D="center",V=c/2):"end"===S&&(D="end")):(V=O,"start"===S?D="start":"middle"===S?(D="center",z=c/2):"end"===S&&(D="end",z=c)),t.translate(z,V),t.rotate(f(C)),t.font=(w.axis.legend.text.fontWeight?w.axis.legend.text.fontWeight+" ":"")+w.axis.legend.text.fontSize+"px "+w.axis.legend.text.fontFamily,w.axis.legend.text.fill&&(t.fillStyle=w.axis.legend.text.fill),t.textAlign=D,t.textBaseline="middle",t.fillText(b,0,0)}t.restore()},V=function(t,e){var i=e.xScale,n=e.yScale,r=e.width,a=e.height,o=e.top,l=e.right,s=e.bottom,c=e.left,f=e.theme,x={top:o,right:l,bottom:s,left:c};A.forEach((function(e){var o=x[e];if(!o)return null;var l="top"===e||"bottom"===e,s="top"===e||"left"===e?"before":"after",c=l?i:n,u=b(o.format,c);z(t,v({},o,{axis:l?"x":"y",x:"right"===e?r:0,y:"bottom"===e?a:0,scale:c,format:u,length:l?r:a,ticksPosition:s,theme:f}))}))},C=function(t,e){var i=e.width,n=e.height,r=e.scale,a=e.axis,o=e.values;P({width:i,height:n,scale:r,axis:a,values:o}).forEach((function(e){t.beginPath(),t.moveTo(e.x1,e.y1),t.lineTo(e.x2,e.y2),t.stroke()}))};export{X as Axes,T as Axis,S as AxisTick,B as Grid,Y as GridLine,W as GridLines,w as axisPropType,O as axisPropTypes,A as positions,V as renderAxesToCanvas,z as renderAxisToCanvas,C as renderGridLinesToCanvas};
//# sourceMappingURL=nivo-axes.es.js.map

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("react"),require("lodash/omit"),require("lodash/isNumber"),require("lodash/filter"),require("@nivo/core"),require("@react-spring/web"),require("react/jsx-runtime")):"function"==typeof define&&define.amd?define(["exports","react","lodash/omit","lodash/isNumber","lodash/filter","@nivo/core","@react-spring/web","react/jsx-runtime"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).nivo=t.nivo||{},t.React,t["lodash/omit"],t["lodash/isNumber"],t["lodash/filter"],t.nivo,t["@react-spring/web"],t["react/jsx-runtime"])}(this,(function(t,n,e,i,o,a,s,r){"use strict";function u(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var l=u(e),d=u(i),h=u(o);function c(){return c=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},c.apply(this,arguments)}var f={dotSize:4,noteWidth:120,noteTextOffset:8,animate:!0,motionStiffness:90,motionDamping:13},x=function(t){var e=typeof t;return n.isValidElement(t)||"string"===e||"function"===e||"object"===e},m=function(t){var n=typeof t;return"string"===n||"function"===n},y=function(t){return"circle"===t.type},g=function(t){return"dot"===t.type},p=function(t){return"rect"===t.type},k=function(t){var n=t.data,e=t.annotations,i=t.getPosition,o=t.getDimensions;return e.reduce((function(t,e){var a=e.offset||0;return[].concat(t,h.default(n,e.match).map((function(t){var n=i(t),s=o(t);return(y(e)||p(e))&&(s.size=s.size+2*a,s.width=s.width+2*a,s.height=s.height+2*a),c({},l.default(e,["match","offset"]),n,s,{size:e.size||s.size,datum:t})})))}),[])},v=function(t,n,e,i){var o=Math.atan2(i-n,e-t);return a.absoluteAngleDegrees(a.radiansToDegrees(o))},b=function(t){var n,e,i=t.x,o=t.y,s=t.noteX,r=t.noteY,u=t.noteWidth,l=void 0===u?f.noteWidth:u,h=t.noteTextOffset,c=void 0===h?f.noteTextOffset:h;if(d.default(s))n=i+s;else{if(void 0===s.abs)throw new Error("noteX should be either a number or an object containing an 'abs' property");n=s.abs}if(d.default(r))e=o+r;else{if(void 0===r.abs)throw new Error("noteY should be either a number or an object containing an 'abs' property");e=r.abs}var x=i,m=o,g=v(i,o,n,e);if(y(t)){var k=a.positionFromAngle(a.degreesToRadians(g),t.size/2);x+=k.x,m+=k.y}if(p(t)){var b=Math.round((g+90)/45)%8;0===b&&(m-=t.height/2),1===b&&(x+=t.width/2,m-=t.height/2),2===b&&(x+=t.width/2),3===b&&(x+=t.width/2,m+=t.height/2),4===b&&(m+=t.height/2),5===b&&(x-=t.width/2,m+=t.height/2),6===b&&(x-=t.width/2),7===b&&(x-=t.width/2,m-=t.height/2)}var W=n,j=n;return(g+90)%360>180?(W-=l,j-=l):j+=l,{points:[[x,m],[n,e],[j,e]],text:[W,e-c],angle:g+90}},W=function(t){return n.useMemo((function(){return b(t)}),[t])},j=function(t){var e=t.datum,i=t.x,o=t.y,u=t.note,d=a.useTheme(),h=a.useMotionConfig(),f=h.animate,x=h.config,m=s.useSpring({x:i,y:o,config:x,immediate:!f});return"function"==typeof u?n.createElement(u,{x:i,y:o,datum:e}):r.jsxs(r.Fragment,{children:[d.annotations.text.outlineWidth>0&&r.jsx(s.animated.text,{x:m.x,y:m.y,style:c({},d.annotations.text,{strokeLinejoin:"round",strokeWidth:2*d.annotations.text.outlineWidth,stroke:d.annotations.text.outlineColor}),children:u}),r.jsx(s.animated.text,{x:m.x,y:m.y,style:l.default(d.annotations.text,["outlineWidth","outlineColor"]),children:u})]})},w=function(t){var e=t.points,i=t.isOutline,o=void 0!==i&&i,u=a.useTheme(),l=n.useMemo((function(){var t=e[0];return e.slice(1).reduce((function(t,n){return t+" L"+n[0]+","+n[1]}),"M"+t[0]+","+t[1])}),[e]),d=a.useAnimatedPath(l);if(o&&u.annotations.link.outlineWidth<=0)return null;var h=c({},u.annotations.link);return o&&(h.strokeLinecap="square",h.strokeWidth=u.annotations.link.strokeWidth+2*u.annotations.link.outlineWidth,h.stroke=u.annotations.link.outlineColor,h.opacity=u.annotations.link.outlineOpacity),r.jsx(s.animated.path,{fill:"none",d:d,style:h})},C=function(t){var n=t.x,e=t.y,i=t.size,o=a.useTheme(),u=a.useMotionConfig(),l=u.animate,d=u.config,h=s.useSpring({x:n,y:e,radius:i/2,config:d,immediate:!l});return r.jsxs(r.Fragment,{children:[o.annotations.outline.outlineWidth>0&&r.jsx(s.animated.circle,{cx:h.x,cy:h.y,r:h.radius,style:c({},o.annotations.outline,{fill:"none",strokeWidth:o.annotations.outline.strokeWidth+2*o.annotations.outline.outlineWidth,stroke:o.annotations.outline.outlineColor,opacity:o.annotations.outline.outlineOpacity})}),r.jsx(s.animated.circle,{cx:h.x,cy:h.y,r:h.radius,style:o.annotations.outline})]})},z=function(t){var n=t.x,e=t.y,i=t.size,o=void 0===i?f.dotSize:i,u=a.useTheme(),l=a.useMotionConfig(),d=l.animate,h=l.config,x=s.useSpring({x:n,y:e,radius:o/2,config:h,immediate:!d});return r.jsxs(r.Fragment,{children:[u.annotations.outline.outlineWidth>0&&r.jsx(s.animated.circle,{cx:x.x,cy:x.y,r:x.radius,style:c({},u.annotations.outline,{fill:"none",strokeWidth:2*u.annotations.outline.outlineWidth,stroke:u.annotations.outline.outlineColor,opacity:u.annotations.outline.outlineOpacity})}),r.jsx(s.animated.circle,{cx:x.x,cy:x.y,r:x.radius,style:u.annotations.symbol})]})},P=function(t){var n=t.x,e=t.y,i=t.width,o=t.height,u=t.borderRadius,l=void 0===u?6:u,d=a.useTheme(),h=a.useMotionConfig(),f=h.animate,x=h.config,m=s.useSpring({x:n-i/2,y:e-o/2,width:i,height:o,config:x,immediate:!f});return r.jsxs(r.Fragment,{children:[d.annotations.outline.outlineWidth>0&&r.jsx(s.animated.rect,{x:m.x,y:m.y,rx:l,ry:l,width:m.width,height:m.height,style:c({},d.annotations.outline,{fill:"none",strokeWidth:d.annotations.outline.strokeWidth+2*d.annotations.outline.outlineWidth,stroke:d.annotations.outline.outlineColor,opacity:d.annotations.outline.outlineOpacity})}),r.jsx(s.animated.rect,{x:m.x,y:m.y,rx:l,ry:l,width:m.width,height:m.height,style:d.annotations.outline})]})},S=function(t,n){n.forEach((function(n,e){var i=n[0],o=n[1];0===e?t.moveTo(i,o):t.lineTo(i,o)}))};t.Annotation=function(t){var n=t.datum,e=t.x,i=t.y,o=t.note,a=W(t);if(!x(o))throw new Error("note should be a valid react element");return r.jsxs(r.Fragment,{children:[r.jsx(w,{points:a.points,isOutline:!0}),y(t)&&r.jsx(C,{x:e,y:i,size:t.size}),g(t)&&r.jsx(z,{x:e,y:i,size:t.size}),p(t)&&r.jsx(P,{x:e,y:i,width:t.width,height:t.height,borderRadius:t.borderRadius}),r.jsx(w,{points:a.points}),r.jsx(j,{datum:n,x:a.text[0],y:a.text[1],note:o})]})},t.bindAnnotations=k,t.computeAnnotation=b,t.defaultProps=f,t.getLinkAngle=v,t.isCanvasNote=m,t.isCircleAnnotation=y,t.isDotAnnotation=g,t.isRectAnnotation=p,t.isSvgNote=x,t.renderAnnotationsToCanvas=function(t,n){var e=n.annotations,i=n.theme;0!==e.length&&(t.save(),e.forEach((function(n){if(!m(n.note))throw new Error("note is invalid for canvas implementation");i.annotations.link.outlineWidth>0&&(t.lineCap="square",t.strokeStyle=i.annotations.link.outlineColor,t.lineWidth=i.annotations.link.strokeWidth+2*i.annotations.link.outlineWidth,t.beginPath(),S(t,n.computed.points),t.stroke(),t.lineCap="butt"),y(n)&&i.annotations.outline.outlineWidth>0&&(t.strokeStyle=i.annotations.outline.outlineColor,t.lineWidth=i.annotations.outline.strokeWidth+2*i.annotations.outline.outlineWidth,t.beginPath(),t.arc(n.x,n.y,n.size/2,0,2*Math.PI),t.stroke()),g(n)&&i.annotations.symbol.outlineWidth>0&&(t.strokeStyle=i.annotations.symbol.outlineColor,t.lineWidth=2*i.annotations.symbol.outlineWidth,t.beginPath(),t.arc(n.x,n.y,n.size/2,0,2*Math.PI),t.stroke()),p(n)&&i.annotations.outline.outlineWidth>0&&(t.strokeStyle=i.annotations.outline.outlineColor,t.lineWidth=i.annotations.outline.strokeWidth+2*i.annotations.outline.outlineWidth,t.beginPath(),t.rect(n.x-n.width/2,n.y-n.height/2,n.width,n.height),t.stroke()),t.strokeStyle=i.annotations.link.stroke,t.lineWidth=i.annotations.link.strokeWidth,t.beginPath(),S(t,n.computed.points),t.stroke(),y(n)&&(t.strokeStyle=i.annotations.outline.stroke,t.lineWidth=i.annotations.outline.strokeWidth,t.beginPath(),t.arc(n.x,n.y,n.size/2,0,2*Math.PI),t.stroke()),g(n)&&(t.fillStyle=i.annotations.symbol.fill,t.beginPath(),t.arc(n.x,n.y,n.size/2,0,2*Math.PI),t.fill()),p(n)&&(t.strokeStyle=i.annotations.outline.stroke,t.lineWidth=i.annotations.outline.strokeWidth,t.beginPath(),t.rect(n.x-n.width/2,n.y-n.height/2,n.width,n.height),t.stroke()),"function"==typeof n.note?n.note(t,{datum:n.datum,x:n.computed.text[0],y:n.computed.text[1],theme:i}):(t.font=i.annotations.text.fontSize+"px "+i.annotations.text.fontFamily,t.textAlign="left",t.textBaseline="alphabetic",t.fillStyle=i.annotations.text.fill,t.strokeStyle=i.annotations.text.outlineColor,t.lineWidth=2*i.annotations.text.outlineWidth,i.annotations.text.outlineWidth>0&&(t.lineJoin="round",t.strokeText(n.note,n.computed.text[0],n.computed.text[1]),t.lineJoin="miter"),t.fillText(n.note,n.computed.text[0],n.computed.text[1]))})),t.restore())},t.useAnnotations=function(t){var e=t.data,i=t.annotations,o=t.getPosition,a=t.getDimensions;return n.useMemo((function(){return k({data:e,annotations:i,getPosition:o,getDimensions:a})}),[e,i,o,a])},t.useComputedAnnotation=W,t.useComputedAnnotations=function(t){var e=t.annotations;return n.useMemo((function(){return e.map((function(t){return c({},t,{computed:b(c({},t))})}))}),[e])},Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=nivo-annotations.umd.js.map

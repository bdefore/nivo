"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react/jsx-runtime"),e=require("d3-scale"),i=require("@nivo/core"),n=require("@nivo/colors"),o=require("react"),r=require("prop-types");function l(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}function a(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach((function(i){if("default"!==i){var n=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(e,i,n.get?n:{enumerable:!0,get:function(){return t[i]}})}})),e.default=t,Object.freeze(e)}var s=a(o),d=l(r),c=function(e){var i=e.x,n=e.y,o=e.size,r=e.fill,l=e.opacity,a=void 0===l?1:l,s=e.borderWidth,d=void 0===s?0:s,c=e.borderColor,u=void 0===c?"transparent":c;return t.jsx("circle",{r:o/2,cx:i+o/2,cy:n+o/2,fill:r,opacity:a,strokeWidth:d,stroke:u,style:{pointerEvents:"none"}})},u=function(e){var i=e.x,n=e.y,o=e.size,r=e.fill,l=e.opacity,a=void 0===l?1:l,s=e.borderWidth,d=void 0===s?0:s,c=e.borderColor,u=void 0===c?"transparent":c;return t.jsx("g",{transform:"translate("+i+","+n+")",children:t.jsx("path",{d:"\n                    M"+o/2+" 0\n                    L"+.8*o+" "+o/2+"\n                    L"+o/2+" "+o+"\n                    L"+.2*o+" "+o/2+"\n                    L"+o/2+" 0\n                ",fill:r,opacity:a,strokeWidth:d,stroke:u,style:{pointerEvents:"none"}})})},g=function(e){var i=e.x,n=e.y,o=e.size,r=e.fill,l=e.opacity,a=void 0===l?1:l,s=e.borderWidth,d=void 0===s?0:s,c=e.borderColor,u=void 0===c?"transparent":c;return t.jsx("rect",{x:i,y:n,fill:r,opacity:a,strokeWidth:d,stroke:u,width:o,height:o,style:{pointerEvents:"none"}})},h=function(e){var i=e.x,n=e.y,o=e.size,r=e.fill,l=e.opacity,a=void 0===l?1:l,s=e.borderWidth,d=void 0===s?0:s,c=e.borderColor,u=void 0===c?"transparent":c;return t.jsx("g",{transform:"translate("+i+","+n+")",children:t.jsx("path",{d:"\n                M"+o/2+" 0\n                L"+o+" "+o+"\n                L0 "+o+"\n                L"+o/2+" 0\n            ",fill:r,opacity:a,strokeWidth:d,stroke:u,style:{pointerEvents:"none"}})})};function f(){return f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},f.apply(this,arguments)}var m={length:200,thickness:16,direction:"row",tickPosition:"after",tickSize:4,tickSpacing:3,tickOverlap:!1,tickFormat:function(t){return""+t},titleAlign:"start",titleOffset:4},p={top:0,right:0,bottom:0,left:0},v=function(t){var e,i=t.direction,n=t.itemsSpacing,o=t.padding,r=t.itemCount,l=t.itemWidth,a=t.itemHeight;if("number"!=typeof o&&("object"!=typeof(e=o)||Array.isArray(e)||null===e))throw new Error("Invalid property padding, must be one of: number, object");var s="number"==typeof o?{top:o,right:o,bottom:o,left:o}:f({},p,o),d=s.left+s.right,c=s.top+s.bottom,u=l+d,g=a+c,h=(r-1)*n;return"row"===i?u=l*r+h+d:"column"===i&&(g=a*r+h+c),{width:u,height:g,padding:s}},x=function(t){var e=t.anchor,i=t.translateX,n=t.translateY,o=t.containerWidth,r=t.containerHeight,l=t.width,a=t.height,s=i,d=n;switch(e){case"top":s+=(o-l)/2;break;case"top-right":s+=o-l;break;case"right":s+=o-l,d+=(r-a)/2;break;case"bottom-right":s+=o-l,d+=r-a;break;case"bottom":s+=(o-l)/2,d+=r-a;break;case"bottom-left":d+=r-a;break;case"left":d+=(r-a)/2;break;case"center":s+=(o-l)/2,d+=(r-a)/2}return{x:s,y:d}},y=function(t){var e,i,n,o,r,l,a=t.direction,s=t.justify,d=t.symbolSize,c=t.symbolSpacing,u=t.width,g=t.height;switch(a){case"left-to-right":e=0,i=(g-d)/2,o=g/2,l="central",s?(n=u,r="end"):(n=d+c,r="start");break;case"right-to-left":e=u-d,i=(g-d)/2,o=g/2,l="central",s?(n=0,r="start"):(n=u-d-c,r="end");break;case"top-to-bottom":e=(u-d)/2,i=0,n=u/2,r="middle",s?(o=g,l="alphabetic"):(o=d+c,l="text-before-edge");break;case"bottom-to-top":e=(u-d)/2,i=g-d,n=u/2,r="middle",s?(o=0,l="text-before-edge"):(o=g-d-c,l="alphabetic")}return{symbolX:e,symbolY:i,labelX:n,labelY:o,labelAnchor:r,labelAlignment:l}},b=function(t){var o,r=t.scale,l=t.ticks,a=t.length,s=void 0===a?m.length:a,d=t.thickness,c=void 0===d?m.thickness:d,u=t.direction,g=void 0===u?m.direction:u,h=t.tickPosition,f=void 0===h?m.tickPosition:h,p=t.tickSize,v=void 0===p?m.tickSize:p,x=t.tickSpacing,y=void 0===x?m.tickSpacing:x,b=t.tickOverlap,k=void 0===b?m.tickOverlap:b,S=t.tickFormat,C=void 0===S?m.tickFormat:S,j=t.title,A=t.titleAlign,O=void 0===A?m.titleAlign:A,W=t.titleOffset,z=void 0===W?m.titleOffset:W,B="column"===g?[].concat(r.domain()).reverse():r.domain(),w=e.scaleLinear().domain(B);2===B.length?w.range([0,s]):3===B.length&&w.range([0,s/2,s]),o="thresholds"in r?[B[0]].concat(r.thresholds(),[B[1]]):Array.isArray(l)?l:r.ticks(l);var X,Y,L,H,T,E,M=n.computeContinuousColorScaleColorStops(r,32),q=i.getValueFormatter(C),F=[],P=0,R=0;if("row"===g){var D,V,_;X=s,Y=c,R=1;var G;T=0,L="start"===O?0:"middle"===O?s/2:s,"before"===f?(D=-v,V=k?c:0,_=-v-y,G="alphabetic",H=c+z,E="hanging"):(D=k?0:c,_=(V=c+v)+y,G="hanging",H=-z,E="alphabetic"),o.forEach((function(t){var e=w(t);F.push({x1:e,y1:D,x2:e,y2:V,text:q(t),textX:e,textY:_,textHorizontalAlign:"middle",textVerticalAlign:G})}))}else{var I,N,Q,J;X=c,Y=s,P=1;T=-90,H="start"===O?s:"middle"===O?s/2:0,"before"===f?(N=k?c:0,Q=(I=-v)-y,J="end",L=c+z,E="hanging"):(I=k?0:c,Q=(N=c+v)+y,J="start",L=-z,E="alphabetic"),o.forEach((function(t){var e=w(t);F.push({x1:I,y1:e,x2:N,y2:e,text:q(t),textX:Q,textY:e,textHorizontalAlign:J,textVerticalAlign:"central"})}))}return{width:X,height:Y,gradientX1:0,gradientY1:P,gradientX2:R,gradientY2:0,colorStops:M,ticks:F,titleText:j,titleX:L,titleY:H,titleRotation:T,titleHorizontalAlign:O,titleVerticalAlign:E}},k=function(e){var n=e.scale,r=e.ticks,l=e.length,a=void 0===l?m.length:l,s=e.thickness,d=void 0===s?m.thickness:s,c=e.direction,u=void 0===c?m.direction:c,g=e.tickPosition,h=void 0===g?m.tickPosition:g,p=e.tickSize,v=void 0===p?m.tickSize:p,x=e.tickSpacing,y=void 0===x?m.tickSpacing:x,k=e.tickOverlap,S=void 0===k?m.tickOverlap:k,C=e.tickFormat,j=void 0===C?m.tickFormat:C,A=e.title,O=e.titleAlign,W=void 0===O?m.titleAlign:O,z=e.titleOffset,B=b({scale:n,ticks:r,length:a,thickness:d,direction:u,tickPosition:h,tickSize:v,tickSpacing:y,tickOverlap:S,tickFormat:j,title:A,titleAlign:W,titleOffset:void 0===z?m.titleOffset:z}),w=B.width,X=B.height,Y=B.gradientX1,L=B.gradientY1,H=B.gradientX2,T=B.gradientY2,E=B.ticks,M=B.colorStops,q=B.titleText,F=B.titleX,P=B.titleY,R=B.titleRotation,D=B.titleVerticalAlign,V=B.titleHorizontalAlign,_=i.useTheme(),G="ContinuousColorsLegendSvgGradient."+u+"."+M.map((function(t){return t.offset})).join("_");return t.jsxs("g",{children:[t.jsx("defs",{children:t.jsx("linearGradient",{id:G,x1:Y,y1:L,x2:H,y2:T,children:M.map((function(e){return t.jsx("stop",f({},e))}))})}),q&&t.jsx("text",{transform:"translate("+F+", "+P+") rotate("+R+")",textAnchor:V,dominantBaseline:D,style:_.legends.title.text,children:q}),t.jsx("rect",{width:w,height:X,fill:"url(#"+G}),E.map((function(e,i){return t.jsxs(o.Fragment,{children:[t.jsx("line",{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,style:_.legends.ticks.line}),t.jsx("text",{x:e.textX,y:e.textY,textAnchor:e.textHorizontalAlign,dominantBaseline:e.textVerticalAlign,style:_.legends.ticks.text,children:e.text})]},i)}))]})},S=["containerWidth","containerHeight","anchor","translateX","translateY","length","thickness","direction"],C={circle:c,diamond:u,square:g,triangle:h},j=function(e){var n,r,l,a,d,c,u,g,h,m,p,v=e.x,x=e.y,b=e.width,k=e.height,S=e.data,j=e.direction,A=void 0===j?"left-to-right":j,O=e.justify,W=void 0!==O&&O,z=e.textColor,B=e.background,w=void 0===B?"transparent":B,X=e.opacity,Y=void 0===X?1:X,L=e.symbolShape,H=void 0===L?"square":L,T=e.symbolSize,E=void 0===T?16:T,M=e.symbolSpacing,q=void 0===M?8:M,F=e.symbolBorderWidth,P=void 0===F?0:F,R=e.symbolBorderColor,D=void 0===R?"transparent":R,V=e.onClick,_=e.onMouseEnter,G=e.onMouseLeave,I=e.toggleSerie,N=e.effects,Q=o.useState({}),J=Q[0],K=Q[1],U=i.useTheme(),Z=o.useCallback((function(t){if(N){var e=N.filter((function(t){return"hover"===t.on})).reduce((function(t,e){return f({},t,e.style)}),{});K(e)}null==_||_(S,t)}),[_,S,N]),$=o.useCallback((function(t){if(N){var e=N.filter((function(t){return"hover"!==t.on})).reduce((function(t,e){return f({},t,e.style)}),{});K(e)}null==G||G(S,t)}),[G,S,N]),tt=y({direction:A,justify:W,symbolSize:null!=(n=J.symbolSize)?n:E,symbolSpacing:q,width:b,height:k}),et=tt.symbolX,it=tt.symbolY,nt=tt.labelX,ot=tt.labelY,rt=tt.labelAnchor,lt=tt.labelAlignment,at=[V,_,G,I].some((function(t){return void 0!==t})),st="function"==typeof H?H:C[H];return t.jsxs("g",{transform:"translate("+v+","+x+")",style:{opacity:null!=(r=J.itemOpacity)?r:Y},children:[t.jsx("rect",{width:b,height:k,fill:null!=(l=J.itemBackground)?l:w,style:{cursor:at?"pointer":"auto"},onClick:function(t){null==V||V(S,t),null==I||I(S.id)},onMouseEnter:Z,onMouseLeave:$}),s.createElement(st,f({id:S.id,x:et,y:it,size:null!=(a=J.symbolSize)?a:E,fill:null!=(d=null!=(c=S.fill)?c:S.color)?d:"black",borderWidth:null!=(u=J.symbolBorderWidth)?u:P,borderColor:null!=(g=J.symbolBorderColor)?g:D},S.hidden?U.legends.hidden.symbol:void 0)),t.jsx("text",{textAnchor:rt,style:f({},U.legends.text,{fill:null!=(h=null!=(m=null!=(p=J.itemTextColor)?p:z)?m:U.legends.text.fill)?h:"black",dominantBaseline:lt,pointerEvents:"none",userSelect:"none"},S.hidden?U.legends.hidden.text:void 0),x:nt,y:ot,children:S.label})]})},A=function(e){var i=e.data,n=e.x,o=e.y,r=e.direction,l=e.padding,a=void 0===l?0:l,s=e.justify,d=e.effects,c=e.itemWidth,u=e.itemHeight,g=e.itemDirection,h=void 0===g?"left-to-right":g,f=e.itemsSpacing,m=void 0===f?0:f,p=e.itemTextColor,x=e.itemBackground,y=void 0===x?"transparent":x,b=e.itemOpacity,k=void 0===b?1:b,S=e.symbolShape,C=e.symbolSize,A=e.symbolSpacing,O=e.symbolBorderWidth,W=e.symbolBorderColor,z=e.onClick,B=e.onMouseEnter,w=e.onMouseLeave,X=e.toggleSerie,Y=v({itemCount:i.length,itemWidth:c,itemHeight:u,itemsSpacing:m,direction:r,padding:a}).padding,L="row"===r?c+m:0,H="column"===r?u+m:0;return t.jsx("g",{transform:"translate("+n+","+o+")",children:i.map((function(e,i){return t.jsx(j,{data:e,x:i*L+Y.left,y:i*H+Y.top,width:c,height:u,direction:h,justify:s,effects:d,textColor:p,background:y,opacity:k,symbolShape:S,symbolSize:C,symbolSpacing:A,symbolBorderWidth:O,symbolBorderColor:W,onClick:z,onMouseEnter:B,onMouseLeave:w,toggleSerie:X},i)}))})},O={start:"left",middle:"center",end:"right"},W={data:d.default.arrayOf(d.default.object),anchor:d.default.oneOf(["top","top-right","right","bottom-right","bottom","bottom-left","left","top-left","center"]).isRequired,translateX:d.default.number,translateY:d.default.number,direction:d.default.oneOf(["row","column"]).isRequired,itemsSpacing:d.default.number,itemWidth:d.default.number.isRequired,itemHeight:d.default.number.isRequired,itemDirection:d.default.oneOf(["left-to-right","right-to-left","top-to-bottom","bottom-to-top"]),itemTextColor:d.default.string,itemBackground:d.default.string,itemOpacity:d.default.number,symbolShape:d.default.oneOfType([d.default.oneOf(["circle","diamond","square","triangle"]),d.default.func]),symbolSize:d.default.number,symbolSpacing:d.default.number,symbolBorderWidth:d.default.number,symbolBorderColor:d.default.string,onClick:d.default.func,onMouseEnter:d.default.func,onMouseLeave:d.default.func,effects:d.default.arrayOf(d.default.shape({on:d.default.oneOfType([d.default.oneOf(["hover"])]).isRequired,style:d.default.shape({itemTextColor:d.default.string,itemBackground:d.default.string,itemOpacity:d.default.number,symbolSize:d.default.number,symbolBorderWidth:d.default.number,symbolBorderColor:d.default.string}).isRequired}))};exports.AnchoredContinuousColorsLegendSvg=function(e){var i,n,o=e.containerWidth,r=e.containerHeight,l=e.anchor,a=e.translateX,s=void 0===a?0:a,d=e.translateY,c=void 0===d?0:d,u=e.length,g=void 0===u?m.length:u,h=e.thickness,p=void 0===h?m.thickness:h,v=e.direction,y=void 0===v?m.direction:v,b=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(e,S);"row"===y?(i=g,n=p):(i=p,n=g);var C=x({anchor:l,translateX:s,translateY:c,containerWidth:o,containerHeight:r,width:i,height:n}),j=C.x,A=C.y;return t.jsx("g",{transform:"translate("+j+", "+A+")",children:t.jsx(k,f({length:g,thickness:p,direction:y},b))})},exports.BoxLegendSvg=function(e){var i=e.data,n=e.containerWidth,o=e.containerHeight,r=e.translateX,l=void 0===r?0:r,a=e.translateY,s=void 0===a?0:a,d=e.anchor,c=e.direction,u=e.padding,g=void 0===u?0:u,h=e.justify,f=e.itemsSpacing,m=void 0===f?0:f,p=e.itemWidth,y=e.itemHeight,b=e.itemDirection,k=e.itemTextColor,S=e.itemBackground,C=e.itemOpacity,j=e.symbolShape,O=e.symbolSize,W=e.symbolSpacing,z=e.symbolBorderWidth,B=e.symbolBorderColor,w=e.onClick,X=e.onMouseEnter,Y=e.onMouseLeave,L=e.toggleSerie,H=e.effects,T=v({itemCount:i.length,itemsSpacing:m,itemWidth:p,itemHeight:y,direction:c,padding:g}),E=T.width,M=T.height,q=x({anchor:d,translateX:l,translateY:s,containerWidth:n,containerHeight:o,width:E,height:M}),F=q.x,P=q.y;return t.jsx(A,{data:i,x:F,y:P,direction:c,padding:g,justify:h,effects:H,itemsSpacing:m,itemWidth:p,itemHeight:y,itemDirection:b,itemTextColor:k,itemBackground:S,itemOpacity:C,symbolShape:j,symbolSize:O,symbolSpacing:W,symbolBorderWidth:z,symbolBorderColor:B,onClick:w,onMouseEnter:X,onMouseLeave:Y,toggleSerie:"boolean"==typeof L?void 0:L})},exports.ContinuousColorsLegendSvg=k,exports.LegendPropShape=W,exports.LegendSvg=A,exports.LegendSvgItem=j,exports.SymbolCircle=c,exports.SymbolDiamond=u,exports.SymbolSquare=g,exports.SymbolTriangle=h,exports.computeContinuousColorsLegend=b,exports.computeDimensions=v,exports.computeItemLayout=y,exports.computePositionFromAnchor=x,exports.continuousColorsLegendDefaults=m,exports.renderContinuousColorLegendToCanvas=function(t,e){var n=e.containerWidth,o=e.containerHeight,r=e.anchor,l=e.translateX,a=void 0===l?0:l,s=e.translateY,d=void 0===s?0:s,c=e.scale,u=e.length,g=void 0===u?m.length:u,h=e.thickness,f=void 0===h?m.thickness:h,p=e.direction,v=void 0===p?m.direction:p,y=e.ticks,k=e.tickPosition,S=void 0===k?m.tickPosition:k,C=e.tickSize,j=void 0===C?m.tickSize:C,A=e.tickSpacing,O=void 0===A?m.tickSpacing:A,W=e.tickOverlap,z=void 0===W?m.tickOverlap:W,B=e.tickFormat,w=void 0===B?m.tickFormat:B,X=e.title,Y=e.titleAlign,L=void 0===Y?m.titleAlign:Y,H=e.titleOffset,T=void 0===H?m.titleOffset:H,E=e.theme,M=b({scale:c,ticks:y,length:g,thickness:f,direction:v,tickPosition:S,tickSize:j,tickSpacing:O,tickOverlap:z,tickFormat:w,title:X,titleAlign:L,titleOffset:T}),q=M.width,F=M.height,P=M.gradientX1,R=M.gradientY1,D=M.gradientX2,V=M.gradientY2,_=M.colorStops,G=M.ticks,I=M.titleText,N=M.titleX,Q=M.titleY,J=M.titleRotation,K=M.titleVerticalAlign,U=M.titleHorizontalAlign,Z=x({anchor:r,translateX:a,translateY:d,containerWidth:n,containerHeight:o,width:q,height:F}),$=Z.x,tt=Z.y,et={font:t.font,textAlign:t.textAlign,textBaseline:t.textBaseline};t.save(),t.translate($,tt);var it=t.createLinearGradient(P*q,R*F,D*q,V*F);_.forEach((function(t){it.addColorStop(t.offset,t.stopColor)})),t.fillStyle=it,t.fillRect(0,0,q,F),t.font=(E.legends.ticks.text.fontWeight?E.legends.ticks.text.fontWeight+" ":"")+E.legends.ticks.text.fontSize+"px "+E.legends.ticks.text.fontFamily,G.forEach((function(e){var i;(null!=(i=E.legends.ticks.line.strokeWidth)?i:0)>0&&(t.lineWidth=Number(E.axis.ticks.line.strokeWidth),E.axis.ticks.line.stroke&&(t.strokeStyle=E.axis.ticks.line.stroke),t.lineCap="square",t.beginPath(),t.moveTo(e.x1,e.y1),t.lineTo(e.x2,e.y2),t.stroke()),E.legends.ticks.text.fill&&(t.fillStyle=E.legends.ticks.text.fill),t.textAlign="middle"===e.textHorizontalAlign?"center":e.textHorizontalAlign,t.textBaseline="central"===e.textVerticalAlign?"middle":e.textVerticalAlign,t.fillText(e.text,e.textX,e.textY)})),I&&(t.save(),t.translate(N,Q),t.rotate(i.degreesToRadians(J)),t.font=(E.legends.title.text.fontWeight?E.legends.title.text.fontWeight+" ":"")+E.legends.title.text.fontSize+"px "+E.legends.title.text.fontFamily,E.legends.title.text.fill&&(t.fillStyle=E.legends.title.text.fill),t.textAlign="middle"===U?"center":U,t.textBaseline=K,t.fillText(I,0,0),t.restore()),t.restore(),t.font=et.font,t.textAlign=et.textAlign,t.textBaseline=et.textBaseline},exports.renderLegendToCanvas=function(t,e){var i=e.data,n=e.containerWidth,o=e.containerHeight,r=e.translateX,l=void 0===r?0:r,a=e.translateY,s=void 0===a?0:a,d=e.anchor,c=e.direction,u=e.padding,g=void 0===u?0:u,h=e.justify,f=void 0!==h&&h,m=e.itemsSpacing,p=void 0===m?0:m,b=e.itemWidth,k=e.itemHeight,S=e.itemDirection,C=void 0===S?"left-to-right":S,j=e.itemTextColor,A=e.symbolSize,W=void 0===A?16:A,z=e.symbolSpacing,B=void 0===z?8:z,w=e.theme,X=v({itemCount:i.length,itemWidth:b,itemHeight:k,itemsSpacing:p,direction:c,padding:g}),Y=X.width,L=X.height,H=X.padding,T=x({anchor:d,translateX:l,translateY:s,containerWidth:n,containerHeight:o,width:Y,height:L}),E=T.x,M=T.y,q="row"===c?b+p:0,F="column"===c?k+p:0;t.save(),t.translate(E,M),t.font=w.legends.text.fontSize+"px "+(w.legends.text.fontFamily||"sans-serif"),i.forEach((function(e,i){var n,o,r=i*q+H.left,l=i*F+H.top,a=y({direction:C,justify:f,symbolSize:W,symbolSpacing:B,width:b,height:k}),s=a.symbolX,d=a.symbolY,c=a.labelX,u=a.labelY,g=a.labelAnchor,h=a.labelAlignment;t.fillStyle=null!=(n=e.color)?n:"black",t.fillRect(r+s,l+d,W,W),t.textAlign=O[g],"central"===h&&(t.textBaseline="middle"),t.fillStyle=null!=(o=null!=j?j:w.legends.text.fill)?o:"black",t.fillText(String(e.label),r+c,l+u)})),t.restore()},exports.useQuantizeColorScaleLegendData=function(t){var e=t.scale,i=t.domain,n=t.reverse,r=void 0!==n&&n,l=t.valueFormat,a=void 0===l?function(t){return t}:l,s=t.separator,d=void 0===s?" - ":s;return o.useMemo((function(){var t=(null!=i?i:e.range()).map((function(t,i){var n=e.invertExtent(t),o=n[0],r=n[1];return{id:t,index:i,extent:[o,r],label:""+a(o)+d+a(r),value:e(o),color:t}}));return r&&t.reverse(),t}),[i,e,r,d,a])};
//# sourceMappingURL=nivo-legends.cjs.js.map

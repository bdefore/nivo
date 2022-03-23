import{createContext as e,useMemo as r,useContext as t,useRef as i,useEffect as n,useState as o,cloneElement as a,useCallback as s,memo as l,createElement as d,Component as u}from"react";import f from"prop-types";import{TooltipProvider as c,Tooltip as p,useTooltipHandlers as h,TooltipActionsContext as g,TooltipStateContext as m}from"@nivo/tooltip";import b from"lodash/merge";import y from"lodash/get";import v from"lodash/set";import{interpolateString as R}from"d3-interpolate";import{config as q,useSpring as k,to as _,animated as w}from"@react-spring/web";import x from"lodash/isString";import{jsx as O,jsxs as C}from"react/jsx-runtime";import W from"lodash/last";import S from"lodash/isArray";import{scaleQuantize as z,scaleOrdinal as P,scaleSequential as T}from"d3-scale";import{schemeBrBG as M,schemePRGn as j,schemePiYG as D,schemePuOr as G,schemeRdBu as B,schemeRdGy as L,schemeRdYlBu as I,schemeRdYlGn as Y,schemeSpectral as A,schemeBlues as F,schemeGreens as E,schemeGreys as U,schemeOranges as X,schemePurples as K,schemeReds as H,schemeBuGn as N,schemeBuPu as V,schemeGnBu as J,schemeOrRd as Q,schemePuBuGn as Z,schemePuBu as $,schemePuRd as ee,schemeRdPu as re,schemeYlGnBu as te,schemeYlGn as ie,schemeYlOrBr as ne,schemeYlOrRd as oe,schemeCategory10 as ae,schemeAccent as se,schemeDark2 as le,schemePaired as de,schemePastel1 as ue,schemePastel2 as fe,schemeSet1 as ce,schemeSet2 as pe,schemeSet3 as he,interpolateBrBG as ge,interpolatePRGn as me,interpolatePiYG as be,interpolatePuOr as ye,interpolateRdBu as ve,interpolateRdGy as Re,interpolateRdYlBu as qe,interpolateRdYlGn as ke,interpolateSpectral as _e,interpolateBlues as we,interpolateGreens as xe,interpolateGreys as Oe,interpolateOranges as Ce,interpolatePurples as We,interpolateReds as Se,interpolateViridis as ze,interpolateInferno as Pe,interpolateMagma as Te,interpolatePlasma as Me,interpolateWarm as je,interpolateCool as De,interpolateCubehelixDefault as Ge,interpolateBuGn as Be,interpolateBuPu as Le,interpolateGnBu as Ie,interpolateOrRd as Ye,interpolatePuBuGn as Ae,interpolatePuBu as Fe,interpolatePuRd as Ee,interpolateRdPu as Ue,interpolateYlGnBu as Xe,interpolateYlGn as Ke,interpolateYlOrBr as He,interpolateYlOrRd as Ne,interpolateRainbow as Ve,interpolateSinebow as Je}from"d3-scale-chromatic";import Qe from"lodash/isFunction";import Ze from"lodash/without";import{curveBasis as $e,curveBasisClosed as er,curveBasisOpen as rr,curveBundle as tr,curveCardinal as ir,curveCardinalClosed as nr,curveCardinalOpen as or,curveCatmullRom as ar,curveCatmullRomClosed as sr,curveCatmullRomOpen as lr,curveLinear as dr,curveLinearClosed as ur,curveMonotoneX as fr,curveMonotoneY as cr,curveNatural as pr,curveStep as hr,curveStepAfter as gr,curveStepBefore as mr,stackOrderAscending as br,stackOrderDescending as yr,stackOrderInsideOut as vr,stackOrderNone as Rr,stackOrderReverse as qr,stackOffsetExpand as kr,stackOffsetDiverging as _r,stackOffsetNone as wr,stackOffsetSilhouette as xr,stackOffsetWiggle as Or}from"d3-shape";import{format as Cr}from"d3-format";import{timeFormat as Wr}from"d3-time-format";import{compose as Sr,defaultProps as zr,setPropTypes as Pr,withPropsOnChange as Tr}from"@nivo/recompose";import Mr from"lodash/isEqual";import jr from"lodash/isPlainObject";import Dr from"lodash/pick";function Gr(){return Gr=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Gr.apply(this,arguments)}function Br(e,r){return Br=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},Br(e,r)}function Lr(e,r){if(null==e)return{};var t,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}var Ir={fill:f.string,fontSize:f.number,fontFamily:f.string},Yr=f.shape({domain:f.shape({line:f.shape({stroke:f.string.isRequired,strokeWidth:f.number.isRequired,strokeDasharray:f.string}).isRequired}).isRequired,ticks:f.shape({line:f.shape({stroke:f.string.isRequired,strokeWidth:f.number.isRequired,strokeDasharray:f.string}).isRequired,text:f.shape(Gr({},Ir)).isRequired}).isRequired,legend:f.shape({text:f.shape(Gr({},Ir)).isRequired}).isRequired}),Ar=f.shape({line:f.shape({stroke:f.string.isRequired,strokeWidth:f.number.isRequired,strokeDasharray:f.string}).isRequired}),Fr=f.shape({hidden:f.shape({symbol:f.shape({fill:f.string.isRequired,opacity:f.number}).isRequired,text:f.shape(Gr({},Ir,{opacity:f.number})).isRequired}).isRequired,text:f.shape(Gr({},Ir)).isRequired}),Er=f.shape({text:f.shape(Gr({},Ir)).isRequired}),Ur=f.shape({text:f.shape(Gr({},Ir)).isRequired}),Xr=f.shape({text:f.shape(Gr({},Ir)).isRequired}),Kr=f.shape({line:f.shape({stroke:f.string.isRequired,strokeWidth:f.number.isRequired,strokeDasharray:f.string}).isRequired}),Hr=f.shape({text:f.shape(Gr({},Ir,{outlineWidth:f.number.isRequired,outlineColor:f.string.isRequired})).isRequired,link:f.shape({stroke:f.string.isRequired,strokeWidth:f.number.isRequired,outlineWidth:f.number.isRequired,outlineColor:f.string.isRequired}).isRequired,outline:f.shape({stroke:f.string.isRequired,strokeWidth:f.number.isRequired,outlineWidth:f.number.isRequired,outlineColor:f.string.isRequired}).isRequired,symbol:f.shape({fill:f.string.isRequired,outlineWidth:f.number.isRequired,outlineColor:f.string.isRequired}).isRequired}),Nr=f.shape({background:f.string.isRequired,fontFamily:f.string.isRequired,fontSize:f.number.isRequired,textColor:f.string.isRequired,axis:Yr.isRequired,grid:Ar.isRequired,legends:Fr.isRequired,labels:Er.isRequired,dots:Ur.isRequired,markers:Xr,crosshair:Kr.isRequired,annotations:Hr.isRequired}),Vr={background:"transparent",fontFamily:"sans-serif",fontSize:11,textColor:"#333333",axis:{domain:{line:{stroke:"transparent",strokeWidth:1}},ticks:{line:{stroke:"#777777",strokeWidth:1},text:{}},legend:{text:{fontSize:12}}},grid:{line:{stroke:"#dddddd",strokeWidth:1}},legends:{hidden:{symbol:{fill:"#333333",opacity:.6},text:{fill:"#333333",opacity:.6}},text:{},ticks:{line:{stroke:"#777777",strokeWidth:1},text:{fontSize:10}},title:{text:{}}},labels:{text:{}},markers:{lineColor:"#000000",lineStrokeWidth:1,text:{}},dots:{text:{}},tooltip:{container:{background:"white",color:"inherit",fontSize:"inherit",borderRadius:"2px",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.25)",padding:"5px 9px"},basic:{whiteSpace:"pre",display:"flex",alignItems:"center"},chip:{marginRight:7},table:{},tableCell:{padding:"3px 5px"},tableCellValue:{fontWeight:"bold"}},crosshair:{line:{stroke:"#000000",strokeWidth:1,strokeOpacity:.75,strokeDasharray:"6 6"}},annotations:{text:{fontSize:13,outlineWidth:2,outlineColor:"#ffffff",outlineOpacity:1},link:{stroke:"#000000",strokeWidth:1,outlineWidth:2,outlineColor:"#ffffff",outlineOpacity:1},outline:{fill:"none",stroke:"#000000",strokeWidth:2,outlineWidth:2,outlineColor:"#ffffff",outlineOpacity:1},symbol:{fill:"#000000",outlineWidth:2,outlineColor:"#ffffff",outlineOpacity:1}}},Jr=["axis.ticks.text","axis.legend.text","legends.title.text","legends.text","legends.ticks.text","legends.title.text","labels.text","dots.text","markers.text","annotations.text"],Qr=function(e,r){var t=b({},e,r);return Jr.forEach((function(e){void 0===y(t,e+".fontFamily")&&v(t,e+".fontFamily",t.fontFamily),void 0===y(t,e+".fontSize")&&v(t,e+".fontSize",t.fontSize),void 0===y(t,e+".fill")&&v(t,e+".fill",t.textColor)})),t},Zr=e(),$r=function(e){var t=e.children,i=e.animate,n=e.stiffness,o=e.damping,a=e.config,s=r((function(){var e=x(a)?q[a]:a;return{animate:i,springConfig:{stiffness:n,damping:o},config:e}}),[i,n,o,a]);return O(Zr.Provider,{value:s,children:t})},et={animate:f.bool,motionStiffness:f.number,motionDamping:f.number,motionConfig:f.oneOfType([f.oneOf(Object.keys(q)),f.shape({mass:f.number,tension:f.number,friction:f.number,clamp:f.bool,precision:f.number,velocity:f.number,duration:f.number,easing:f.func})])};$r.propTypes={children:f.node.isRequired,animate:et.animate,stiffness:et.motionStiffness,damping:et.motionDamping,config:et.motionConfig};var rt={animate:!0,stiffness:90,damping:15,config:"default"};$r.defaultProps=rt;var tt=function(){return t(Zr)},it=function(e){var t=tt(),o=t.animate,a=t.config,s=function(e){var r=i();return n((function(){r.current=e}),[e]),r.current}(e),l=r((function(){return R(s,e)}),[s,e]),d=k({from:{value:0},to:{value:1},reset:!0,config:a,immediate:!o}).value;return _(d,l)},nt={nivo:["#d76445","#f47560","#e8c1a0","#97e3d5","#61cdbb","#00b0a7"],BrBG:W(M),PRGn:W(j),PiYG:W(D),PuOr:W(G),RdBu:W(B),RdGy:W(L),RdYlBu:W(I),RdYlGn:W(Y),spectral:W(A),blues:W(F),greens:W(E),greys:W(U),oranges:W(X),purples:W(K),reds:W(H),BuGn:W(N),BuPu:W(V),GnBu:W(J),OrRd:W(Q),PuBuGn:W(Z),PuBu:W($),PuRd:W(ee),RdPu:W(re),YlGnBu:W(te),YlGn:W(ie),YlOrBr:W(ne),YlOrRd:W(oe)},ot=Object.keys(nt),at=function(e){if(Qe(e)){if(!Qe(e.domain))throw new Error("Provided colors should be a valid quantize scale providing a 'domain()' function");return e}if(nt[e])return z().range(nt[e]);if(S(e))return z().range(e);throw new Error("Unable to guess quantize color scale from '"+e+"',\nmust be a function or one of:\n'"+ot.join("', '")+"'")},st={nivo:["#e8c1a0","#f47560","#f1e15b","#e8a838","#61cdbb","#97e3d5"],category10:ae,accent:se,dark2:le,paired:de,pastel1:ue,pastel2:fe,set1:ce,set2:pe,set3:he,brown_blueGreen:W(M),purpleRed_green:W(j),pink_yellowGreen:W(D),purple_orange:W(G),red_blue:W(B),red_grey:W(L),red_yellow_blue:W(I),red_yellow_green:W(Y),spectral:W(A),blues:W(F),greens:W(E),greys:W(U),oranges:W(X),purples:W(K),reds:W(H),blue_green:W(N),blue_purple:W(V),green_blue:W(J),orange_red:W(Q),purple_blue_green:W(Z),purple_blue:W($),purple_red:W(ee),red_purple:W(re),yellow_green_blue:W(te),yellow_green:W(ie),yellow_orange_brown:W(ne),yellow_orange_red:W(oe)},lt=["nivo","category10","accent","dark2","paired","pastel1","pastel2","set1","set2","set3","brown_blueGreen","purpleRed_green","pink_yellowGreen","purple_orange","red_blue","red_grey","red_yellow_blue","red_yellow_green","spectral","blues","greens","greys","oranges","purples","reds","blue_green","blue_purple","green_blue","orange_red","purple_blue_green","purple_blue","purple_red","red_purple","yellow_green_blue","yellow_green","yellow_orange_brown","yellow_orange_red"],dt={brown_blueGreen:ge,purpleRed_green:me,pink_yellowGreen:be,purple_orange:ye,red_blue:ve,red_grey:Re,red_yellow_blue:qe,red_yellow_green:ke,spectral:_e,blues:we,greens:xe,greys:Oe,oranges:Ce,purples:We,reds:Se,viridis:ze,inferno:Pe,magma:Te,plasma:Me,warm:je,cool:De,cubehelixDefault:Ge,blue_green:Be,blue_purple:Le,green_blue:Ie,orange_red:Ye,purple_blue_green:Ae,purple_blue:Fe,purple_red:Ee,red_purple:Ue,yellow_green_blue:Xe,yellow_green:Ke,yellow_orange_brown:He,yellow_orange_red:Ne,rainbow:Ve,sinebow:Je},ut=["brown_blueGreen","purpleRed_green","pink_yellowGreen","purple_orange","red_blue","red_grey","red_yellow_blue","red_yellow_green","spectral","blues","greens","greys","oranges","purples","reds","viridis","inferno","magma","plasma","warm","cool","cubehelixDefault","blue_green","blue_purple","green_blue","orange_red","purple_blue_green","purple_blue","purple_red","red_purple","yellow_green_blue","yellow_green","yellow_orange_brown","yellow_orange_red","rainbow","sinebow"],ft=function(){return P(["#e8c1a0","#f47560","#f1e15b","#e8a838","#61cdbb","#97e3d5"])},ct=function(e,r){if(x(e)){var t=st[e];if(void 0!==t){var i=P(t);return i.type="ordinal",i}if(void 0!==r&&0===e.indexOf("seq:")){var n=dt[e.slice(4)];if(void 0!==n){var o=T(n).domain(r.domain());return o.type="sequential",o}}}if(S(e)){var a=P(e);return a.type="ordinal",a}return function(){return e}},pt=f.oneOfType([f.oneOf(ot),f.func,f.arrayOf(f.string)]),ht={basis:$e,basisClosed:er,basisOpen:rr,bundle:tr,cardinal:ir,cardinalClosed:nr,cardinalOpen:or,catmullRom:ar,catmullRomClosed:sr,catmullRomOpen:lr,linear:dr,linearClosed:ur,monotoneX:fr,monotoneY:cr,natural:pr,step:hr,stepAfter:gr,stepBefore:mr},gt=Object.keys(ht),mt=f.oneOf(gt),bt=gt.filter((function(e){return e.endsWith("Closed")})),yt=Ze(gt,"bundle","basisClosed","basisOpen","cardinalClosed","cardinalOpen","catmullRomClosed","catmullRomOpen","linearClosed"),vt=Ze(gt,"bundle","basisClosed","basisOpen","cardinalClosed","cardinalOpen","catmullRomClosed","catmullRomOpen","linearClosed"),Rt=f.oneOf(vt),qt=function(e){if(!ht[e])throw new TypeError("'"+e+"', is not a valid curve interpolator identifier.");return ht[e]},kt={defs:f.arrayOf(f.shape({id:f.string.isRequired})).isRequired,fill:f.arrayOf(f.shape({id:f.string.isRequired,match:f.oneOfType([f.oneOf(["*"]),f.object,f.func]).isRequired})).isRequired},_t={ascending:br,descending:yr,insideOut:vr,none:Rr,reverse:qr},wt=Object.keys(_t),xt=f.oneOf(wt),Ot=function(e){return _t[e]},Ct={expand:kr,diverging:_r,none:wr,silhouette:xr,wiggle:Or},Wt=Object.keys(Ct),St=f.oneOf(Wt),zt=function(e){return Ct[e]},Pt=f.shape({top:f.number,right:f.number,bottom:f.number,left:f.number}).isRequired,Tt=["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Mt=f.oneOf(Tt),jt=function(e){return r((function(){return qt(e)}),[e])},Dt=!0,Gt=90,Bt=15,Lt=ft,It=P(he),Yt={top:0,right:0,bottom:0,left:0},At=function(e,t,i){return void 0===i&&(i={}),r((function(){var r=Gr({},Yt,i);return{margin:r,innerWidth:e-r.left-r.right,innerHeight:t-r.top-r.bottom,outerWidth:e,outerHeight:t}}),[e,t,i.top,i.right,i.bottom,i.left])},Ft=function(){var e=i(null),r=o({left:0,top:0,width:0,height:0}),t=r[0],a=r[1],s=o((function(){return"undefined"!=typeof window?new ResizeObserver((function(e){var r=e[0];return a(r.contentRect)})):null}))[0];return n((function(){return e.current&&null!==s&&s.observe(e.current),function(){null!==s&&s.disconnect()}}),[]),[e,t]},Et=function(e){return r((function(){return Qr(Vr,e)}),[e])},Ut=function(e){return"function"==typeof e?e:"string"==typeof e?0===e.indexOf("time:")?Wr(e.slice("5")):Cr(e):function(e){return""+e}},Xt=function(e){return r((function(){return Ut(e)}),[e])},Kt=e(),Ht={},Nt=function(e){var r=e.theme,t=void 0===r?Ht:r,i=e.children,n=Et(t);return O(Kt.Provider,{value:n,children:i})};Nt.propTypes={children:f.node.isRequired,theme:f.object};var Vt=function(){return t(Kt)},Jt=function(e){var r=e.children,t=e.condition,i=e.wrapper;return t?a(i,{},r):r};Jt.propTypes={children:f.node.isRequired,condition:f.bool.isRequired,wrapper:f.element.isRequired};var Qt={position:"relative"},Zt=function(e){var r=e.children,t=e.theme,n=e.renderWrapper,o=void 0===n||n,a=e.isInteractive,s=void 0===a||a,l=e.animate,d=e.motionStiffness,u=e.motionDamping,f=e.motionConfig,h=i(null);return O(Nt,{theme:t,children:O($r,{animate:l,stiffness:d,damping:u,config:f,children:O(c,{container:h,children:C(Jt,{condition:o,wrapper:O("div",{style:Qt,ref:h}),children:[r,s&&O(p,{})]})})})})};Zt.propTypes={children:f.element.isRequired,isInteractive:f.bool,renderWrapper:f.bool,theme:f.object,animate:f.bool,motionStiffness:f.number,motionDamping:f.number,motionConfig:f.string};var $t=function(){},ei={position:"relative"},ri=function(e){var t=e.children,n=e.theme,o=e.isInteractive,a=void 0===o||o,l=e.renderWrapper,d=void 0===l||l,u=e.animate,f=e.motionStiffness,c=e.motionDamping,b=e.motionConfig,y=i(null),v=h(y),R=v.actions,q=v.state,k=s((function(e,r){return R.showTooltipFromEvent(e,r)}),[R.showTooltipFromEvent]),_=r((function(){return{showTooltip:a?k:$t,hideTooltip:a?R.hideTooltip:$t}}),[R.hideTooltip,a,k]);return O(Nt,{theme:n,children:O($r,{animate:u,stiffness:f,damping:c,config:b,children:O(g.Provider,{value:R,children:O(m.Provider,{value:q,children:C(Jt,{condition:d,wrapper:O("div",{style:ei,ref:y}),children:[t(_),a&&O(p,{})]})})})})})};ri.propTypes={children:f.func.isRequired,isInteractive:f.bool,renderWrapper:f.bool,theme:f.object.isRequired,animate:f.bool.isRequired,motionStiffness:f.number,motionDamping:f.number,motionConfig:f.string};var ti=function(e){var r=e.children,t=Ft(),i=t[0],n=t[1],o=n.width>0&&n.height>0;return O("div",{ref:i,style:{width:"100%",height:"100%"},children:o&&r({width:n.width,height:n.height})})};ti.propTypes={children:f.func.isRequired};var ii=["id","colors"],ni=function(e){var r=e.id,t=e.colors,i=Lr(e,ii);return O("linearGradient",Gr({id:r,x1:0,x2:0,y1:0,y2:1},i,{children:t.map((function(e){var r=e.offset,t=e.color,i=e.opacity;return O("stop",{offset:r+"%",stopColor:t,stopOpacity:void 0!==i?i:1},r)}))}))};ni.propTypes={id:f.string.isRequired,colors:f.arrayOf(f.shape({offset:f.number.isRequired,color:f.string.isRequired,opacity:f.number})).isRequired,gradientTransform:f.string};var oi=function(e,r,t){return void 0===t&&(t={}),Gr({id:e,type:"linearGradient",colors:r},t)},ai={linearGradient:ni},si=l((function(e){var r=e.id,t=e.background,i=e.color,n=e.size,o=e.padding,a=e.stagger,s=n+o,l=n/2,d=o/2;return!0===a&&(s=2*n+2*o),C("pattern",{id:r,width:s,height:s,patternUnits:"userSpaceOnUse",children:[O("rect",{width:s,height:s,fill:t}),O("circle",{cx:d+l,cy:d+l,r:l,fill:i}),a&&O("circle",{cx:1.5*o+n+l,cy:1.5*o+n+l,r:l,fill:i})]})}));si.displayName="PatternDots",si.propTypes={id:f.string.isRequired,color:f.string.isRequired,background:f.string.isRequired,size:f.number.isRequired,padding:f.number.isRequired,stagger:f.bool.isRequired},si.defaultProps={color:"#000000",background:"#ffffff",size:4,padding:4,stagger:!1};var li=function(e,r){return void 0===r&&(r={}),Gr({id:e,type:"patternDots"},r)},di=2*Math.PI,ui=function(e){return e*Math.PI/180},fi=function(e){return 180*e/Math.PI},ci=function(e){return e.startAngle+(e.endAngle-e.startAngle)/2},pi=function(e,r){return{x:Math.cos(e)*r,y:Math.sin(e)*r}},hi=function(e){var r=e%360;return r<0&&(r+=360),r},gi=function(e){return e-di*Math.floor((e+Math.PI)/di)},mi=function(e){return e<0?360- -e%360:e%360},bi=function(e,r,t){void 0===t&&(t=360);var i=r;return Math.abs(r-e)>t&&(i=e+(r>e?t:-t)),[e,i]},yi={svg:{align:{left:"start",center:"middle",right:"end",start:"start",middle:"middle",end:"end"},baseline:{top:"text-before-edge",center:"central",bottom:"alphabetic"}},canvas:{align:{left:"left",center:"center",right:"right",start:"left",middle:"center",end:"right"},baseline:{top:"top",center:"middle",bottom:"bottom"}}},vi=function(e,r,t,i){void 0===i&&(i="svg");var n=yi[i],o=pi(r-Math.PI/2,e),a=o.x,s=o.y,l=fi(r),d=n.align.center,u=n.baseline.bottom;return t>0?(d=n.align.right,u=n.baseline.center):t<0&&(d=n.align.left,u=n.baseline.center),0!==t&&l>180&&(l-=180,d=d===n.align.right?n.align.left:n.align.right),{x:a,y:s,rotate:l+=t,align:d,baseline:u}},Ri=l((function(e){var r=e.id,t=e.spacing,i=e.rotation,n=e.background,o=e.color,a=e.lineWidth,s=Math.round(i)%360,l=Math.abs(t);s>180?s-=360:s>90?s-=180:s<-180?s+=360:s<-90&&(s+=180);var d,u=l,f=l;return 0===s?d="\n                M 0 0 L "+u+" 0\n                M 0 "+f+" L "+u+" "+f+"\n            ":90===s?d="\n                M 0 0 L 0 "+f+"\n                M "+u+" 0 L "+u+" "+f+"\n            ":(u=Math.abs(l/Math.sin(ui(s))),f=l/Math.sin(ui(90-s)),d=s>0?"\n                    M 0 "+-f+" L "+2*u+" "+f+"\n                    M "+-u+" "+-f+" L "+u+" "+f+"\n                    M "+-u+" 0 L "+u+" "+2*f+"\n                ":"\n                    M "+-u+" "+f+" L "+u+" "+-f+"\n                    M "+-u+" "+2*f+" L "+2*u+" "+-f+"\n                    M 0 "+2*f+" L "+2*u+" 0\n                "),C("pattern",{id:r,width:u,height:f,patternUnits:"userSpaceOnUse",children:[O("rect",{width:u,height:f,fill:n,stroke:"rgba(255, 0, 0, 0.1)",strokeWidth:0}),O("path",{d:d,strokeWidth:a,stroke:o,strokeLinecap:"square"})]})}));Ri.displayName="PatternLines",Ri.propTypes={id:f.string.isRequired,spacing:f.number.isRequired,rotation:f.number.isRequired,background:f.string.isRequired,color:f.string.isRequired,lineWidth:f.number.isRequired},Ri.defaultProps={spacing:5,rotation:0,color:"#000000",background:"#ffffff",lineWidth:2};var qi=function(e,r){return void 0===r&&(r={}),Gr({id:e,type:"patternLines"},r)},ki=l((function(e){var r=e.id,t=e.background,i=e.color,n=e.size,o=e.padding,a=e.stagger,s=n+o,l=o/2;return!0===a&&(s=2*n+2*o),C("pattern",{id:r,width:s,height:s,patternUnits:"userSpaceOnUse",children:[O("rect",{width:s,height:s,fill:t}),O("rect",{x:l,y:l,width:n,height:n,fill:i}),a&&O("rect",{x:1.5*o+n,y:1.5*o+n,width:n,height:n,fill:i})]})}));ki.displayName="PatternSquares",ki.propTypes={id:f.string.isRequired,color:f.string.isRequired,background:f.string.isRequired,size:f.number.isRequired,padding:f.number.isRequired,stagger:f.bool.isRequired},ki.defaultProps={color:"#000000",background:"#ffffff",size:4,padding:4,stagger:!1};var _i=function(e,r){return void 0===r&&(r={}),Gr({id:e,type:"patternSquares"},r)},wi={patternDots:si,patternLines:Ri,patternSquares:ki},xi=["type"],Oi=Gr({},ai,wi),Ci=function(e){var r=e.defs;return!r||r.length<1?null:O("defs",{"aria-hidden":!0,children:r.map((function(e){var r=e.type,t=Lr(e,xi);return Oi[r]?d(Oi[r],Gr({key:t.id},t)):null}))})};Ci.propTypes={defs:f.arrayOf(f.shape({type:f.oneOf(Object.keys(Oi)).isRequired,id:f.string.isRequired}))};var Wi=l(Ci),Si=function(e){var r=e.width,t=e.height,i=e.margin,n=e.defs,o=e.children,a=e.role,s=e.ariaLabel,l=e.ariaLabelledBy,d=e.ariaDescribedBy,u=e.isFocusable,f=Vt();return C("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:t,role:a,"aria-label":s,"aria-labelledby":l,"aria-describedby":d,focusable:u,tabIndex:u?0:void 0,children:[O(Wi,{defs:n}),O("rect",{width:r,height:t,fill:f.background}),O("g",{transform:"translate("+i.left+","+i.top+")",children:o})]})};Si.propTypes={width:f.number.isRequired,height:f.number.isRequired,margin:f.shape({top:f.number.isRequired,left:f.number.isRequired}).isRequired,defs:f.array,children:f.oneOfType([f.arrayOf(f.node),f.node]).isRequired,role:f.string,isFocusable:f.bool,ariaLabel:f.string,ariaLabelledBy:f.string,ariaDescribedBy:f.string};var zi=function(e){var r=e.size,t=e.color,i=e.borderWidth,n=e.borderColor;return O("circle",{r:r/2,fill:t,stroke:n,strokeWidth:i,style:{pointerEvents:"none"}})};zi.propTypes={size:f.number.isRequired,color:f.string.isRequired,borderWidth:f.number.isRequired,borderColor:f.string.isRequired};var Pi=l(zi),Ti=function(e){var r=e.x,t=e.y,i=e.symbol,n=void 0===i?Pi:i,o=e.size,a=e.datum,s=e.color,l=e.borderWidth,u=e.borderColor,f=e.label,c=e.labelTextAnchor,p=void 0===c?"middle":c,h=e.labelYOffset,g=void 0===h?-12:h,m=Vt(),b=tt(),y=b.animate,v=b.config,R=k({transform:"translate("+r+", "+t+")",config:v,immediate:!y});return C(w.g,{transform:R.transform,style:{pointerEvents:"none"},children:[d(n,{size:o,color:s,datum:a,borderWidth:l,borderColor:u}),f&&O("text",{textAnchor:p,y:g,style:m.dots.text,children:f})]})};Ti.propTypes={x:f.number.isRequired,y:f.number.isRequired,datum:f.object.isRequired,size:f.number.isRequired,color:f.string.isRequired,borderWidth:f.number.isRequired,borderColor:f.string.isRequired,symbol:f.oneOfType([f.func,f.object]),label:f.oneOfType([f.string,f.number]),labelTextAnchor:f.oneOf(["start","middle","end"]),labelYOffset:f.number};var Mi=l(Ti),ji=function(e){var r=e.width,t=e.height,i=e.axis,n=e.scale,o=e.value,a=e.lineStyle,s=e.textStyle,l=e.legend,d=e.legendPosition,u=e.legendOffsetX,f=e.legendOffsetY,c=e.legendOrientation,p=Vt(),h=0,g=0,m=0,b=0;"y"===i?(m=n(o),g=r):(h=n(o),b=t);var y=null;if(l){var v=function(e){var r=e.axis,t=e.width,i=e.height,n=e.position,o=e.offsetX,a=e.offsetY,s=e.orientation,l=0,d=0,u="vertical"===s?-90:0,f="start";if("x"===r)switch(n){case"top-left":l=-o,d=a,f="end";break;case"top":d=-a,f="horizontal"===s?"middle":"start";break;case"top-right":l=o,d=a,f="horizontal"===s?"start":"end";break;case"right":l=o,d=i/2,f="horizontal"===s?"start":"middle";break;case"bottom-right":l=o,d=i-a,f="start";break;case"bottom":d=i+a,f="horizontal"===s?"middle":"end";break;case"bottom-left":d=i-a,l=-o,f="horizontal"===s?"end":"start";break;case"left":l=-o,d=i/2,f="horizontal"===s?"end":"middle"}else switch(n){case"top-left":l=o,d=-a,f="start";break;case"top":l=t/2,d=-a,f="horizontal"===s?"middle":"start";break;case"top-right":l=t-o,d=-a,f="horizontal"===s?"end":"start";break;case"right":l=t+o,f="horizontal"===s?"start":"middle";break;case"bottom-right":l=t-o,d=a,f="end";break;case"bottom":l=t/2,d=a,f="horizontal"===s?"middle":"end";break;case"bottom-left":l=o,d=a,f="horizontal"===s?"start":"end";break;case"left":l=-o,f="horizontal"===s?"end":"middle"}return{x:l,y:d,rotation:u,textAnchor:f}}({axis:i,width:r,height:t,position:d,offsetX:u,offsetY:f,orientation:c});y=O("text",{transform:"translate("+v.x+", "+v.y+") rotate("+v.rotation+")",textAnchor:v.textAnchor,dominantBaseline:"central",style:s,children:l})}return C("g",{transform:"translate("+h+", "+m+")",children:[O("line",{x1:0,x2:g,y1:0,y2:b,stroke:p.markers.lineColor,strokeWidth:p.markers.lineStrokeWidth,style:a}),y]})};ji.propTypes={width:f.number.isRequired,height:f.number.isRequired,axis:f.oneOf(["x","y"]).isRequired,scale:f.func.isRequired,value:f.oneOfType([f.number,f.string,f.instanceOf(Date)]).isRequired,lineStyle:f.object,textStyle:f.object,legend:f.string,legendPosition:f.oneOf(["top-left","top","top-right","right","bottom-right","bottom","bottom-left","left"]),legendOffsetX:f.number.isRequired,legendOffsetY:f.number.isRequired,legendOrientation:f.oneOf(["horizontal","vertical"]).isRequired},ji.defaultProps={legendPosition:"top-right",legendOffsetX:14,legendOffsetY:14,legendOrientation:"horizontal"};var Di=l(ji),Gi=function(e){var r=e.markers,t=e.width,i=e.height,n=e.xScale,o=e.yScale;return r&&0!==r.length?r.map((function(e,r){return O(Di,Gr({},e,{width:t,height:i,scale:"y"===e.axis?o:n}),r)})):null};Gi.propTypes={width:f.number.isRequired,height:f.number.isRequired,xScale:f.func.isRequired,yScale:f.func.isRequired,markers:f.arrayOf(f.shape({axis:f.oneOf(["x","y"]).isRequired,value:f.oneOfType([f.number,f.string,f.instanceOf(Date)]).isRequired,lineStyle:f.object,textStyle:f.object}))};var Bi=l(Gi),Li=function(){return Sr(zr({margin:Yt}),Pr({width:f.number.isRequired,height:f.number.isRequired,margin:Pt}),Tr((function(e,r){return e.width!==r.width||e.height!==r.height||!Mr(e.margin,r.margin)}),(function(e){var r=Object.assign({},Yt,e.margin);return{margin:r,width:e.width-r.left-r.right,height:e.height-r.top-r.bottom,outerWidth:e.width,outerHeight:e.height}})))},Ii=function(){return Sr(Pr(et),zr({animate:true,motionDamping:15,motionStiffness:90}))},Yi=function(e){var r,t=void 0===e?{}:e,i=t.srcKey,n=void 0===i?"theme":i,o=t.destKey,a=void 0===o?"theme":o;return Sr(Pr(((r={})[n]=f.object,r)),Tr([n],(function(e){var r;return(r={})[a]=Qr(Vr,e[n]),r})))},Ai=["theme","renderWrapper","animate","motionStiffness","motionDamping","motionConfig"],Fi=function(e){return function(r){var t,i;function n(){return r.apply(this,arguments)||this}return i=r,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,Br(t,i),n.prototype.render=function(){var r=this.props,t=r.theme,i=r.renderWrapper,n=r.animate,o=r.motionStiffness,a=r.motionDamping,s=r.motionConfig,l=Lr(r,Ai);return O(Zt,{theme:t,renderWrapper:i,isInteractive:l.isInteractive,animate:n,motionStiffness:o,motionDamping:a,motionConfig:s,children:O(e,Gr({},l))})},n}(u)},Ei=function(e,r){var t,i=Qe(e)?e:function(r){return y(r,e)};return r&&(t=Qe(r)?r:Cr(r)),t?function(e){return t(i(e))}:i},Ui=function(e){return Qe(e)?e:function(r){return y(r,e)}},Xi=function(e){return r((function(){return Ui(e)}),[e])},Ki=["center","top-left","top","top-right","right","bottom-right","bottom","bottom-left","left"],Hi=function(e,r,t){var i=r.width-e.width,n=r.height-e.height,o=0,a=0;return"center"===t&&(o=i/2,a=n/2),"top"===t&&(o=i/2),"top-right"===t&&(o=i),"right"===t&&(o=i,a=n/2),"bottom-right"===t&&(o=i,a=n),"bottom"===t&&(o=i/2,a=n),"bottom-left"===t&&(a=n),"left"===t&&(a=n/2),[o,a]},Ni=function(e,r,t,i){var n=t-e,o=i-r;return n*=n,o*=o,Math.sqrt(n+o)},Vi=function(e,r,t,i){var n=Math.atan2(i-r,t-e)-Math.PI/2;return n>0?n:2*Math.PI+n},Ji=function(e,r,t,i,n,o){return e<=n&&n<=e+t&&r<=o&&o<=r+i},Qi=function(e,r){var t=r.clientX,i=r.clientY,n=e.getBoundingClientRect();return[t-n.left,i-n.top]},Zi=Object.keys(ai),$i=Object.keys(wi),en=function(e,r,t){if("*"===e)return!0;if(Qe(e))return e(r);if(jr(e)){var i=t?y(r,t):r;return Mr(Dr(i,Object.keys(e)),e)}return!1},rn=function(e,r,t,i){var n=void 0===i?{}:i,o=n.dataKey,a=n.colorKey,s=void 0===a?"color":a,l=n.targetKey,d=void 0===l?"fill":l,u=[],f={};return e.length&&r.length&&(u=[].concat(e),r.forEach((function(r){for(var i=function(i){var n=t[i],a=n.id,l=n.match;if(en(l,r,o)){var c=e.find((function(e){return e.id===a}));if(c)if($i.includes(c.type))if("inherit"===c.background||"inherit"===c.color){var p=y(r,s),h=c.background,g=c.color,m=a;"inherit"===c.background&&(m=m+".bg."+p,h=p),"inherit"===c.color&&(m=m+".fg."+p,g=p),v(r,d,"url(#"+m+")"),f[m]||(u.push(Gr({},c,{id:m,background:h,color:g})),f[m]=1)}else v(r,d,"url(#"+a+")");else if(Zi.includes(c.type)){if(c.colors.map((function(e){return e.color})).includes("inherit")){var b=y(r,s),R=a,q=Gr({},c,{colors:c.colors.map((function(e,r){return"inherit"!==e.color?e:(R=R+"."+r+"."+b,Gr({},e,{color:"inherit"===e.color?b:e.color}))}))});q.id=R,v(r,d,"url(#"+R+")"),f[R]||(u.push(q),f[R]=1)}else v(r,d,"url(#"+a+")")}return"break"}},n=0;n<t.length;n++){if("break"===i(n))break}}))),u};export{Bi as CartesianMarkers,Di as CartesianMarkersItem,Zt as Container,Wi as Defs,Mi as DotsItem,ri as LegacyContainer,ni as LinearGradient,$r as MotionConfigProvider,si as PatternDots,Ri as PatternLines,ki as PatternSquares,ti as ResponsiveWrapper,Si as SvgWrapper,di as TWO_PI,Nt as ThemeProvider,hi as absoluteAngleDegrees,gi as absoluteAngleRadians,Hi as alignBox,Hr as annotationsPropType,yt as areaCurvePropKeys,Yr as axisThemePropType,rn as bindDefs,Mt as blendModePropType,Tt as blendModes,Ki as boxAlignments,bi as clampArc,bt as closedCurvePropKeys,ut as colorInterpolatorIds,dt as colorInterpolators,lt as colorSchemeIds,Kr as crosshairPropType,qt as curveFromProp,gt as curvePropKeys,ht as curvePropMapping,mt as curvePropType,Dt as defaultAnimate,Lt as defaultCategoricalColors,It as defaultColorRange,Yt as defaultMargin,Bt as defaultMotionDamping,Gt as defaultMotionStiffness,Vr as defaultTheme,kt as defsPropTypes,ui as degreesToRadians,Ur as dotsThemePropType,Qr as extendDefaultTheme,Vi as getAngle,ct as getColorScale,Ni as getDistance,Ei as getLabelGenerator,vi as getPolarLabelProps,Ui as getPropertyAccessor,Qi as getRelativeCursor,Ut as getValueFormatter,ai as gradientTypes,Ar as gridThemePropType,at as guessQuantizeColorScale,Ji as isCursorInRect,en as isMatchingDef,Er as labelsThemePropType,Fr as legendsThemePropType,vt as lineCurvePropKeys,Rt as lineCurvePropType,oi as linearGradientDef,Pt as marginPropType,Xr as markersThemePropType,ci as midAngle,Zr as motionConfigContext,rt as motionDefaultProps,et as motionPropTypes,ft as nivoCategoricalColors,$t as noop,mi as normalizeAngle,li as patternDotsDef,qi as patternLinesDef,_i as patternSquaresDef,wi as patternTypes,pi as positionFromAngle,pt as quantizeColorScalePropType,nt as quantizeColorScales,ot as quantizeColorScalesKeys,fi as radiansToDegrees,zt as stackOffsetFromProp,Wt as stackOffsetPropKeys,Ct as stackOffsetPropMapping,St as stackOffsetPropType,Ot as stackOrderFromProp,wt as stackOrderPropKeys,_t as stackOrderPropMapping,xt as stackOrderPropType,yi as textPropsByEngine,Kt as themeContext,Nr as themePropType,it as useAnimatedPath,jt as useCurveInterpolation,At as useDimensions,Ft as useMeasure,tt as useMotionConfig,Et as usePartialTheme,Xi as usePropertyAccessor,Vt as useTheme,Xt as useValueFormatter,Fi as withContainer,Li as withDimensions,Ii as withMotion,Yi as withTheme};
//# sourceMappingURL=nivo-core.es.js.map

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lodash/uniq"),require("lodash/uniqBy"),require("lodash/sortBy"),require("lodash/last"),require("lodash/isDate"),require("d3-time-format"),require("d3-scale"),require("d3-time")):"function"==typeof define&&define.amd?define(["exports","lodash/uniq","lodash/uniqBy","lodash/sortBy","lodash/last","lodash/isDate","d3-time-format","d3-scale","d3-time"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).nivo=e.nivo||{},e["lodash/uniq"],e["lodash/uniqBy"],e["lodash/sortBy"],e["lodash/last"],e["lodash/isDate"],e.d3,e.d3,e.d3)}(this,(function(e,t,n,a,r,i,o,u,c){"use strict";function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=s(t),l=s(n),f=s(a),m=s(r),v=s(i);function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y.apply(this,arguments)}var h=[function(e){return e.setMilliseconds(0)},function(e){return e.setSeconds(0)},function(e){return e.setMinutes(0)},function(e){return e.setHours(0)},function(e){return e.setDate(1)},function(e){return e.setMonth(0)}],p={millisecond:[],second:h.slice(0,1),minute:h.slice(0,2),hour:h.slice(0,3),day:h.slice(0,4),month:h.slice(0,5),year:h.slice(0,6)},g=function(e){return function(t){return p[e].forEach((function(e){e(t)})),t}},x=function(e){var t=e.format,n=void 0===t?"native":t,a=e.precision,r=void 0===a?"millisecond":a,i=e.useUTC,u=void 0===i||i,c=g(r);return function(e){if(void 0===e)return e;if("native"===n||e instanceof Date)return c(e);var t=u?o.utcParse(n):o.timeParse(n);return c(t(e))}},S=function(e,t,n,a){var r,i,o,c,s=e.min,d=void 0===s?0:s,l=e.max,f=void 0===l?"auto":l,m=e.stacked,v=void 0!==m&&m,y=e.reverse,h=void 0!==y&&y,p=e.clamp,g=void 0!==p&&p,x=e.nice,S=void 0!==x&&x;"auto"===d?r=!0===v?null!=(i=t.minStacked)?i:0:t.min:r=d;"auto"===f?o=!0===v?null!=(c=t.maxStacked)?c:0:t.max:o=f;var k=u.scaleLinear().rangeRound("x"===a?[0,n]:[n,0]).domain(h?[o,r]:[r,o]).clamp(g);return!0===S?k.nice():"number"==typeof S&&k.nice(S),T(k,v)},T=function(e,t){void 0===t&&(t=!1);var n=e;return n.type="linear",n.stacked=t,n},k=function(e,t,n){var a=u.scalePoint().range([0,n]).domain(t.all);return a.type="point",a},M=function(e,t,n,a){var r=e.round,i=void 0===r||r,o=u.scaleBand().range("x"===a?[0,n]:[n,0]).domain(t.all).round(i);return b(o)},b=function(e){var t=e;return t.type="band",t},w=function(e,t,n){var a,r,i=e.format,o=void 0===i?"native":i,c=e.precision,s=void 0===c?"millisecond":c,d=e.min,l=void 0===d?"auto":d,f=e.max,m=void 0===f?"auto":f,v=e.useUTC,y=void 0===v||v,h=e.nice,p=void 0!==h&&h,g=x({format:o,precision:s,useUTC:y});a="auto"===l?g(t.min):"native"!==o?g(l):l,r="auto"===m?g(t.max):"native"!==o?g(m):m;var S=y?u.scaleUtc():u.scaleTime();S.range([0,n]),a&&r&&S.domain([a,r]),!0===p?S.nice():"object"!=typeof p&&"number"!=typeof p||S.nice(p);var T=S;return T.type="time",T.useUTC=y,T},E=function(e,t,n,a){var r,i=e.base,o=void 0===i?10:i,c=e.min,s=void 0===c?"auto":c,d=e.max,l=void 0===d?"auto":d;if(t.all.some((function(e){return 0===e})))throw new Error("a log scale domain must not include or cross zero");var f,m,v=!1;if(t.all.filter((function(e){return null!=e})).forEach((function(e){v||(void 0===r?r=Math.sign(e):Math.sign(e)!==r&&(v=!0))})),v)throw new Error("a log scale domain must be strictly-positive or strictly-negative");f="auto"===s?t.min:s,m="auto"===l?t.max:l;var y=u.scaleLog().domain([f,m]).rangeRound("x"===a?[0,n]:[n,0]).base(o).nice();return y.type="log",y},q=function(e,t,n,a){var r,i,o=e.constant,c=void 0===o?1:o,s=e.min,d=void 0===s?"auto":s,l=e.max,f=void 0===l?"auto":l,m=e.reverse,v=void 0!==m&&m;r="auto"===d?t.min:d,i="auto"===f?t.max:f;var y=u.scaleSymlog().constant(c).rangeRound("x"===a?[0,n]:[n,0]).nice();!0===v?y.domain([i,r]):y.domain([r,i]);var h=y;return h.type="symlog",h},D=function(e){return"x"===e?"y":"x"},C=function(e,t){return e===t},B=function(e,t){return e.getTime()===t.getTime()};function U(e,t,n,a){switch(e.type){case"linear":return S(e,t,n,a);case"point":return k(0,t,n);case"band":return M(e,t,n,a);case"time":return w(e,t,n);case"log":return E(e,t,n,a);case"symlog":return q(e,t,n,a);default:throw new Error("invalid scale spec")}}var P=function(e,t,n){var a;if("stacked"in n&&n.stacked){var r=e.data["x"===t?"xStacked":"yStacked"];return null==r?null:n(r)}return null!=(a=n(e.data[t]))?a:null},j=function(e,t,n){return{x:O(e,"x",t),y:O(e,"y",n)}},O=function(e,t,n,a){var r=void 0===a?{}:a,i=r.getValue,o=void 0===i?function(e){return e.data[t]}:i,u=r.setValue,c=void 0===u?function(e,n){e.data[t]=n}:u;if("linear"===n.type)e.forEach((function(e){e.data.forEach((function(e){var t=o(e);t&&c(e,parseFloat(String(t)))}))}));else if("time"===n.type&&"native"!==n.format){var s=x(n);e.forEach((function(e){e.data.forEach((function(e){var t=o(e);t&&c(e,s(t))}))}))}var v=[];switch(e.forEach((function(e){e.data.forEach((function(e){v.push(o(e))}))})),n.type){case"linear":var y=f.default(d.default(v).filter((function(e){return null!==e})),(function(e){return e}));return{all:y,min:Math.min.apply(Math,y),max:Math.max.apply(Math,y)};case"time":var h=l.default(v,(function(e){return e.getTime()})).slice(0).sort((function(e,t){return t.getTime()-e.getTime()})).reverse();return{all:h,min:h[0],max:m.default(h)};default:var p=d.default(v);return{all:p,min:p[0],max:m.default(p)}}},A=function(e,t,n){var a=D(e),r=[];t[a].all.forEach((function(t){var i=v.default(t)?B:C,o=[];n.forEach((function(n){var u=n.data.find((function(e){return i(e.data[a],t)})),c=null,s=null;if(void 0!==u){if(null!==(c=u.data[e])){var d=m.default(o);void 0===d?s=c:null!==d&&(s=d+c)}u.data["x"===e?"xStacked":"yStacked"]=s}o.push(s),null!==s&&r.push(s)}))})),t[e].minStacked=Math.min.apply(Math,r),t[e].maxStacked=Math.max.apply(Math,r)},F=function(e,t){return A("x",e,t)},H=function(e,t){return A("y",e,t)},L=c.timeInterval((function(e){return e.setHours(0,0,0,0)}),(function(e,t){return e.setDate(e.getDate()+t)}),(function(e,t){return(t.getTime()-e.getTime())/864e5}),(function(e){return Math.floor(e.getTime()/864e5)})),V=c.timeInterval((function(e){return e.setUTCHours(0,0,0,0)}),(function(e,t){return e.setUTCDate(e.getUTCDate()+t)}),(function(e,t){return(t.getTime()-e.getTime())/864e5}),(function(e){return Math.floor(e.getTime()/864e5)})),R={millisecond:[c.timeMillisecond,c.utcMillisecond],second:[c.timeSecond,c.utcSecond],minute:[c.timeMinute,c.utcMinute],hour:[c.timeHour,c.utcHour],day:[L,V],week:[c.timeWeek,c.utcWeek],sunday:[c.timeSunday,c.utcSunday],monday:[c.timeMonday,c.utcMonday],tuesday:[c.timeTuesday,c.utcTuesday],wednesday:[c.timeWednesday,c.utcWednesday],thursday:[c.timeThursday,c.utcThursday],friday:[c.timeFriday,c.utcFriday],saturday:[c.timeSaturday,c.utcSaturday],month:[c.timeMonth,c.utcMonth],year:[c.timeYear,c.utcYear]},W=Object.keys(R),Y=new RegExp("^every\\s*(\\d+)?\\s*("+W.join("|")+")s?$","i");e.castBandScale=b,e.castLinearScale=T,e.castPointScale=function(e){var t=e;return t.type="point",t},e.centerScale=function(e){var t=e.bandwidth();if(0===t)return e;var n=t/2;return e.round()&&(n=Math.round(n)),function(t){var a;return(null!=(a=e(t))?a:0)+n}},e.compareDateValues=B,e.compareValues=C,e.computeScale=U,e.computeXYScalesForSeries=function(e,t,n,a,r){var i=e.map((function(e){return function(e){return y({},e,{data:e.data.map((function(e){return{data:y({},e)}}))})}(e)})),o=j(i,t,n);"stacked"in t&&!0===t.stacked&&F(o,i),"stacked"in n&&!0===n.stacked&&H(o,i);var u=U(t,o.x,a,"x"),c=U(n,o.y,r,"y"),s=i.map((function(e){return y({},e,{data:e.data.map((function(e){return y({},e,{position:{x:P(e,"x",u),y:P(e,"y",c)}})}))})}));return y({},o,{series:s,xScale:u,yScale:c})},e.createBandScale=M,e.createDateNormalizer=x,e.createLinearScale=S,e.createLogScale=E,e.createPointScale=k,e.createPrecisionMethod=g,e.createSymlogScale=q,e.createTimeScale=w,e.generateSeriesAxis=O,e.generateSeriesXY=j,e.getOtherAxis=D,e.getScaleTicks=function(e,t){if(Array.isArray(t))return t;if("string"==typeof t&&"useUTC"in e){var n=t.match(Y);if(n){var a=n[1],r=n[2],i=R[r][e.useUTC?1:0];if("day"===r){var o,u,c=e.domain(),s=c[0],d=c[1],l=new Date(d);return l.setDate(l.getDate()+1),null!=(o=null==(u=i.every(Number(null!=a?a:1)))?void 0:u.range(s,l))?o:[]}if(void 0===a)return e.ticks(i);var f=i.every(Number(a));if(f)return e.ticks(f)}throw new Error("Invalid tickValues: "+t)}if("ticks"in e){if(void 0===t)return e.ticks();if("number"==typeof(m=t)&&isFinite(m)&&Math.floor(m)===m)return e.ticks(t)}var m;return e.domain()},e.precisionCutOffs=h,e.precisionCutOffsByType=p,e.stackAxis=A,e.timePrecisions=["millisecond","second","minute","hour","day","month","year"],Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=nivo-scales.umd.js.map

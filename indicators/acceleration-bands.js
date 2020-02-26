/*
 Highstock JS v8.0.0 (2020-02-26)

 Indicator series type for Highstock

 (c) 2010-2019 Daniel Studencki

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/acceleration-bands",["highcharts","highcharts/modules/stock"],function(e){a(e);a.Highcharts=e;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function e(a,b,e,k){a.hasOwnProperty(b)||(a[b]=k.apply(null,e))}a=a?a._modules:{};e(a,"mixins/multipe-lines.js",[a["parts/Globals.js"],a["parts/Utilities.js"]],function(a,b){var e=
b.defined,k=b.error,w=b.merge,h=a.each,l=a.seriesTypes.sma;return{pointArrayMap:["top","bottom"],pointValKey:"top",linesApiNames:["bottomLine"],getTranslatedLinesNames:function(g){var a=[];h(this.pointArrayMap,function(c){c!==g&&a.push("plot"+c.charAt(0).toUpperCase()+c.slice(1))});return a},toYData:function(g){var a=[];h(this.pointArrayMap,function(c){a.push(g[c])});return a},translate:function(){var g=this,a=g.pointArrayMap,b=[],e;b=g.getTranslatedLinesNames();l.prototype.translate.apply(g,arguments);
h(g.points,function(c){h(a,function(a,l){e=c[a];null!==e&&(c[b[l]]=g.yAxis.toPixels(e,!0))})})},drawGraph:function(){var a=this,c=a.linesApiNames,b=a.points,x=b.length,m=a.options,y=a.graph,u={options:{gapSize:m.gapSize}},p=[],v=a.getTranslatedLinesNames(a.pointValKey),n;h(v,function(a,c){for(p[c]=[];x--;)n=b[x],p[c].push({x:n.x,plotX:n.plotX,plotY:n[a],isNull:!e(n[a])});x=b.length});h(c,function(d,c){p[c]?(a.points=p[c],m[d]?a.options=w(m[d].styles,u):k('Error: "There is no '+d+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),
a.graph=a["graph"+d],l.prototype.drawGraph.call(a),a["graph"+d]=a.graph):k('Error: "'+d+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});a.points=b;a.options=m;a.graph=y;l.prototype.drawGraph.call(a)}}});e(a,"indicators/acceleration-bands.src.js",[a["parts/Globals.js"],a["parts/Utilities.js"],a["mixins/multipe-lines.js"]],function(a,b,e){var k=b.correctFloat,w=b.merge;b=b.seriesType;var h=a.seriesTypes.sma;b("abands","sma",{params:{period:20,
factor:.001,index:3},lineWidth:1,topLine:{styles:{lineWidth:1}},bottomLine:{styles:{lineWidth:1}},dataGrouping:{approximation:"averages"}},w(e,{pointArrayMap:["top","middle","bottom"],pointValKey:"middle",nameBase:"Acceleration Bands",nameComponents:["period","factor"],linesApiNames:["topLine","bottomLine"],getValues:function(a,b){var c=b.period,e=b.factor;b=b.index;var g=a.xData,m=(a=a.yData)?a.length:0,l=[],u=[],p=[],v=[],n=[],d;if(!(m<c)){for(d=0;d<=m;d++){if(d<m){var f=a[d][2];var q=a[d][1];var t=
e;f=k(q-f)/(k(q+f)/2)*1E3*t;l.push(a[d][1]*k(1+2*f));u.push(a[d][2]*k(1-2*f))}if(d>=c){f=g.slice(d-c,d);var r=a.slice(d-c,d);t=h.prototype.getValues.call(this,{xData:f,yData:l.slice(d-c,d)},{period:c});q=h.prototype.getValues.call(this,{xData:f,yData:u.slice(d-c,d)},{period:c});r=h.prototype.getValues.call(this,{xData:f,yData:r},{period:c,index:b});f=r.xData[0];t=t.yData[0];q=q.yData[0];r=r.yData[0];p.push([f,t,r,q]);v.push(f);n.push([t,r,q])}}return{values:p,xData:v,yData:n}}}}));""});e(a,"masters/indicators/acceleration-bands.src.js",
[],function(){})});
//# sourceMappingURL=acceleration-bands.js.map
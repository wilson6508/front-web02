(function(t){function e(e){for(var n,s,u=e[0],o=e[1],l=e[2],d=0,f=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,u=1;u<a.length;u++){var o=a[u];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/front-web02/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"452c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("db4d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],s=(a("034f"),a("b0a0"),a("2877")),u={},o=Object(s["a"])(u,r,i,!1,null,null,null),l=o.exports,c=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"background-color":"#c4d79b"}},[a("b-navbar",{attrs:{type:"dark",variant:"dark"}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"/PieChart"}},[t._v("圓餅圖")]),a("b-nav-item",{attrs:{href:"#"}},[t._v("長條圖")]),a("b-nav-item",{attrs:{href:"#"}},[t._v("Home")])],1)],1),a("div",{staticStyle:{padding:"50px"}},[a("PieChart")],1)],1)},f=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-card",{attrs:{header:"點圖表右上下載"}},[a("b-row",[a("b-col",{attrs:{cols:"6"}},[a("Highcharts",{attrs:{options:t.displayChart}})],1),a("b-col",{attrs:{cols:"6"}},[a("b-table",{attrs:{id:"my-table",items:t.items,fields:t.fields,striped:!1,"head-variant":"light",responsive:"lg"},scopedSlots:t._u([{key:"cell(name)",fn:function(e){return[a("b-form-input",{model:{value:e.item.name,callback:function(a){t.$set(e.item,"name",a)},expression:"row.item.name"}})]}},{key:"cell(y)",fn:function(e){return[a("b-form-input",{attrs:{type:"number"},model:{value:e.item.y,callback:function(a){t.$set(e.item,"y",t._n(a))},expression:"row.item.y"}})]}},{key:"cell(action)",fn:function(e){return[a("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(a){return t.deleteItem(e.item)}}},[t._v("刪除")])]}}])}),a("span",[t._v("圖表標題 : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chartOptions.title.text,expression:"chartOptions.title.text"}],domProps:{value:t.chartOptions.title.text},on:{input:function(e){e.target.composing||t.$set(t.chartOptions.title,"text",e.target.value)}}}),a("b-button",{staticStyle:{float:"right"},attrs:{variant:"primary",size:"sm"},on:{click:function(e){return t.addItem()}}},[t._v("添加項目")])],1)],1)],1)],1)},h=[],m=a("b85c"),b=(a("a434"),a("4452")),v=a("ea7f"),y=a.n(v),g=a("0319"),x=a.n(g);x()(y.a);var w={components:{Highcharts:b["Chart"]},data:function(){return{displayChart:{},chartOptions:{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:""},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},accessibility:{point:{valueSuffix:"%"}},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.percentage:.1f} %"}}},series:[{name:"Brands",colorByPoint:!0,data:[]}]},fields:[{key:"name",label:"項目",class:"text-center",thStyle:"width: 30rem"},{key:"y",label:"數值",class:"text-center",thStyle:"width: 30rem"},{key:"action",label:"增減項目",class:"text-center",thStyle:"width: 20rem"}],items:[{id:1,name:"金融股",y:15},{id:2,name:"ABC123",y:20},{id:3,name:"車用電子",y:30},{id:4,name:"傳產",y:40}],idNumber:5}},mounted:function(){this.setChartValue(),this.processChart()},updated:function(){this.setChartValue(),this.processChart()},methods:{setChartValue:function(){this.chartOptions.series[0].data=[];var t,e=Object(m["a"])(this.items);try{for(e.s();!(t=e.n()).done;){var a=t.value;this.chartOptions.series[0].data.push(a)}}catch(n){e.e(n)}finally{e.f()}},processChart:function(){var t=this.chartOptions.chart.type,e=this.getExportChartWidth(t);this.displayChart=this.getChart(this.chartOptions,e)},addItem:function(){this.items.push({id:this.idNumber,name:"項目".concat(this.idNumber),y:0}),this.idNumber++},deleteItem:function(t){var e=this.items.indexOf(t);this.items.splice(e,1)}}},O=w,k=Object(s["a"])(O,p,h,!1,null,null,null),C=k.exports,_={components:{PieChart:C}},S=_,P=(a("cccb"),Object(s["a"])(S,d,f,!1,null,null,null)),j=P.exports;n["default"].use(c["a"]);var $=[{path:"/",name:"Home",component:j,meta:{title:"首頁"}}],B=new c["a"]({mode:"history",base:"/front-web02/",routes:$}),I=B,N=a("2f62");n["default"].use(N["a"]);var E=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}}),H=a("8937"),M=a.n(H);x()(y.a),M()(y.a);var W={methods:{getExportChartWidth:function(t){var e=0;switch(t){case"column":e=700;break;case"pie":e=700;break;default:e=1400}return e},getChart:function(t,e){return t.exporting={sourceWidth:e,buttons:{contextButton:{menuItems:[{text:"下載PNG圖檔",onclick:function(){this.exportChartLocal()}}]}}},t.navigation={menuStyle:{padding:"0px"},menuItemStyle:{padding:"5px"}},t.credits={enabled:!1},t}}},T=a("8c60"),V=a("40aa"),z=a("521d"),J=a("dbbe"),L=a("3968"),A=a("331b"),F=a("700c"),G=a("b519"),q=a("3d31"),D=a("cbd0"),K=a("498a"),Q=a("1f1a"),R=a("d435"),U=a("31de"),X=a("f9bc"),Y=a("ad5f"),Z=a("f7ca"),tt=a("1073"),et=a("0025"),at=a("9ae9"),nt=a("7049"),rt=a("b1fc"),it=a("89bf"),st=a("a7e2"),ut=a("c015"),ot=a("d047"),lt=a("a166");a("f9e3"),a("2dd8");n["default"].use(T["a"]),n["default"].use(V["a"]),n["default"].use(z["a"]),n["default"].use(J["a"]),n["default"].use(L["a"]),n["default"].use(A["a"]),n["default"].use(F["a"]),n["default"].use(G["a"]),n["default"].use(q["a"]),n["default"].use(D["a"]),n["default"].use(K["a"]),n["default"].use(Q["a"]),n["default"].use(R["a"]),n["default"].use(U["a"]),n["default"].use(X["a"]),n["default"].use(Y["a"]),n["default"].use(Z["a"]),n["default"].use(tt["a"]),n["default"].use(et["a"]),n["default"].use(at["a"]),n["default"].use(nt["a"]),n["default"].use(rt["a"]),n["default"].use(it["a"]),n["default"].use(st["a"]),n["default"].use(ut["a"]),n["default"].use(ot["a"]),n["default"].use(lt["a"]),n["default"].mixin(W),n["default"].config.productionTip=!1,new n["default"]({router:I,store:E,render:function(t){return t(l)}}).$mount("#app")},"5ced":function(t,e,a){},"85ec":function(t,e,a){},b0a0:function(t,e,a){"use strict";a("452c")},cccb:function(t,e,a){"use strict";a("5ced")}});
//# sourceMappingURL=app.5a09f759.js.map
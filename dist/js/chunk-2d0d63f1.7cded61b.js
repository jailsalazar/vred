(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d63f1"],{7277:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{md12:"",lg12:""}},[e("material-card",{attrs:{color:"orange",title:"Treatment Progress"}},[e("v-data-table",{attrs:{headers:t.headers,items:t.items,"hide-actions":""},scopedSlots:t._u([{key:"headerCell",fn:function(a){var s=a.header;return[e("span",{staticClass:"font-weight-light text-warning text--darken-3",domProps:{textContent:t._s(s.text)}})]}},{key:"items",fn:function(a){var s=a.index,i=a.item;return[e("td",[t._v(t._s(s+1))]),e("td",[t._v(t._s(i.name))]),e("td",{staticClass:"text-xs-right"},[t._v(t._s(i.salary))]),e("td",{staticClass:"text-xs-right"},[t._v(t._s(i.city))])]}}])})],1)],1)],1)],1)},i=[],r={data:function(){return{dailySalesChart:{data:{labels:["M","T","W","T","F","S","S"],series:[[12,17,7,17,23,18,38]]},options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:0,high:50,chartPadding:{top:0,right:0,bottom:0,left:0}}},dataCompletedTasksChart:{data:{labels:["12am","3pm","6pm","9pm","12pm","3am","6am","9am"],series:[[230,750,450,300,280,240,200,190]]},options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:0,high:1e3,chartPadding:{top:0,right:0,bottom:0,left:0}}},emailsSubscriptionChart:{data:{labels:["Ja","Fe","Ma","Ap","Mai","Ju","Jul","Au","Se","Oc","No","De"],series:[[542,443,320,780,553,453,326,434,568,610,756,895]]},options:{axisX:{showGrid:!1},low:0,high:1e3,chartPadding:{top:0,right:5,bottom:0,left:0}},responsiveOptions:[["screen and (max-width: 640px)",{seriesBarDistance:5,axisX:{labelInterpolationFnc:function(t){return t[0]}}}]]},headers:[{sortable:!1,text:"ID",value:"id"},{sortable:!1,text:"Scenario",value:"name"},{sortable:!1,text:"Date",value:"salary",align:"right"},{sortable:!1,text:"Duration",value:"city",align:"right"}],items:[{name:"Simple Foods",city:"---",salary:"Feburary 21, 2019"},{name:"Complex Foods",city:"---",salary:"Feburary 25, 2019"}],tabs:0,list:{0:!1,1:!1,2:!1}}},methods:{complete:function(t){this.list[t]=!this.list[t]}}},n=r,l=e("2877"),o=Object(l["a"])(n,s,i,!1,null,null,null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0d63f1.7cded61b.js.map
(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],d=0,b=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&b.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(b.length)b.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"003d":function(t,e,a){},"034f":function(t,e,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},1695:function(t,e,a){"use strict";var n=a("41f9"),s=a.n(n);s.a},"22b8":function(t,e,a){"use strict";var n=a("c0c8"),s=a.n(n);s.a},"326e":function(t,e,a){},"39ce":function(t,e,a){},"41f9":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),a("p",{staticClass:"credit"},[t._v("© Created by Jacob Kreynin 2020")])],1)},r=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),o=a("bc3a"),c=a.n(o),l="/",u={Authorization:"Basic ".concat(localStorage.getItem("token"))};function d(){return c()({method:"get",url:l+"api/tables/",headers:u})}function b(t,e){return c()({method:"get",url:l+"api/tables/".concat(t,"/").concat(e),headers:u})}function f(){return c()({method:"get",url:l+"api/tags/",headers:u})}function p(){return c()({method:"get",url:l+"api/refresh",headers:u})}function h(t){return c()({method:"put",data:t,url:l+"api/table",headers:u})}function m(t){return c()({method:"post",data:t,url:l+"login"})}var g=a("2f62");function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function O(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var y={name:"app",data:function(){return{componentKey:0,busy:!1}},methods:O({},Object(g["b"])("tables",["loadTables","loadTags"]),{},Object(g["d"])("tables",{setReadMode:"SET_READ_MODE"}),{backToDefault:function(){this.setReadMode(!1)},refreshTables:function(){var t=this;this.busy=!0,p().then((function(){t.loadTables(),t.loadTags(),t.componentKey+=1,t.busy=!1,t.$toasted.show("Refreshed Successfully!",{icon:"fa-check",className:"customSuccessToast"})})).catch((function(){t.$toasted.show("Could not synchronize tables"),t.busy=!1}))}})},T=y,w=(a("034f"),a("c051"),a("2877")),C=Object(w["a"])(T,s,r,!1,null,"3d61dd74",null),_=C.exports,j=(a("7f7f"),a("8c4f")),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#/"},on:{click:t.backToDefault}},[a("i",{staticClass:"fas fa-database"}),t._v("DB Docs\n    ")]),a("div",{staticClass:"nav navbar-nav navbar-right"},[a("div",{staticClass:"btn-nav"},[a("button",{staticClass:"action-btn",attrs:{type:"button",disabled:t.busy},on:{click:t.refreshTables}},[a("i",{staticClass:"fas fa-sync",class:{"fa-spin":t.busy}})])])])]),a("div",{key:t.componentKey,staticClass:"container"},[a("router-view")],1)])},x=[];function S(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function k(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?S(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var D={name:"Home",components:{},data:function(){return{componentKey:0,busy:!1}},methods:k({},Object(g["b"])("tables",["loadTables","loadTags"]),{},Object(g["d"])("tables",{setReadMode:"SET_READ_MODE"}),{backToDefault:function(){this.setReadMode(!1)},refreshTables:function(){var t=this;this.busy=!0,p().then((function(){t.loadTables(),t.loadTags(),t.componentKey+=1,t.busy=!1,t.$toasted.show("Synchronized Successfully!",{icon:"fa-check",className:"customSuccessToast"})})).catch((function(){t.$toasted.show("Could not synchronize tables"),t.busy=!1}))}})},P=D,M=(a("8b71"),Object(w["a"])(P,E,x,!1,null,null,null)),R=M.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return 0!=Object.keys(this.pageTable).length?a("div",{staticClass:"card",class:{cardInEdit:t.isInEdit}},[t.loading?a("div",{staticClass:"card-body"},[a("spinner",{staticClass:"spinner"})],1):a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex justify-content-between"},[a("div",{staticClass:"header"},[a("h6",{staticClass:"schema"},[t._v(t._s(t.pageTable.schema))]),a("h3",{staticClass:"card-title"},[t._v("\n          "+t._s(t.pageTable.name)+"\n          "),t._l(t.tags,(function(e){return a("span",{key:e,staticClass:"badge",class:t.tagsClass},[t._v("\n            "+t._s(e)+"\n          ")])}))],2),a("h5",{staticClass:"card-subtitle mb-2 text-muted",class:t.descClass},[t._v(t._s(t.desc))]),t.isInEdit?a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.pageTable.add_desc,expression:"pageTable.add_desc"}],staticClass:"form-control",attrs:{placeholder:"You can use Markdown!",rows:"2"},domProps:{value:t.pageTable.add_desc},on:{input:function(e){e.target.composing||t.$set(t.pageTable,"add_desc",e.target.value)}}}):a("vue-markdown",{staticClass:"card-text",attrs:{source:t.pageTable.add_desc}})],1),a("button",{staticClass:"btn btn-circle",class:t.isInEdit?"btn-primary":"btn-light",attrs:{type:"button"},on:{click:t.editOrSave}},[a("i",{staticClass:"fas",class:t.buttonIconClass})])]),a("h6",{staticClass:"sectionHeader",on:{click:function(e){t.showColumns=!t.showColumns}}},[a("i",{staticClass:"fas toggleSecion",class:t.showColumns?"fa-caret-down":"fa-caret-right"}),t._v("\n      Columns\n    ")]),a("transition",{attrs:{name:"table"}},[a("table",{directives:[{name:"show",rawName:"v-show",value:t.showColumns,expression:"showColumns"}],staticClass:"table table-sm table-bordered"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Column name")]),a("th",{attrs:{scope:"col"}},[t._v("Type")]),a("th",{staticStyle:{"text-align":"center"},attrs:{scope:"col"}},[t._v("Description")])])]),a("tbody",t._l(t.pageTable.columns,(function(e){return a("tr",[a("td",[a("strong",{class:t.columnNameClass(e.name)},[t._v(t._s(e.name))]),e.constraint_types?a("span",t._l(e.constraint_types,(function(e){return a("i",{key:e,staticClass:"key fas",class:t.keyClass(e),attrs:{title:e}})})),0):t._e()]),a("td",[t._v(t._s(e.type))]),t.isInEdit?a("td",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.desc,expression:"column.desc"}],staticClass:"form-control",attrs:{rows:"2"},domProps:{value:e.desc},on:{input:function(a){a.target.composing||t.$set(e,"desc",a.target.value)}}})]):a("td",{staticClass:"desc",staticStyle:{"text-align":"right"}},[a("p",[t._v(t._s(e.desc))])])])})),0)])])],1),t.listMode||t.loading?t._e():a("div",{staticClass:"card-footer text-muted"},[t._m(0)])]):t._e()},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"btn btn-light",attrs:{href:"#/"}},[a("i",{staticClass:"fas fa-arrow-left"}),t._v("\n      Back\n    ")])}],L=(a("6762"),a("2fdb"),a("96cf"),a("3b8d")),F=a("9ce6"),$=a.n(F),N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[t._v("Loading...")])])])}],U={name:"Spinner",data:function(){return{}}},G=U,K=(a("c801"),Object(w["a"])(G,N,B,!1,null,"4374f298",null)),z=K.exports;function q(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function H(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?q(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):q(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var Y={name:"TableDoc",data:function(){return{isInEdit:!1,busy:!1,loading:!1,showColumns:!0}},components:{VueMarkdown:$.a,Spinner:z},props:{listMode:{type:Boolean,default:!1},name:String,schema:String,table:Object},created:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.listMode){t.next=12;break}return this.loading=!0,t.prev=2,t.next=5,this.loadSingleTable({name:this.name,schema:this.schema});case 5:this.loading=!1,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](2),this.$toasted.show("Could not load table data"),this.loading=!1;case 12:case"end":return t.stop()}}),t,this,[[2,8]])})));function e(){return t.apply(this,arguments)}return e}(),computed:H({},Object(g["e"])("tables",["currTable","filterText"]),{pageTable:function(){return this.listMode?this.table:this.currTable},desc:function(){return""==this.pageTable.desc?"אין תיאור זמין...":this.pageTable.desc},tags:function(){var t=["No tags"];try{return 0==this.pageTable.tags.length?t:this.pageTable.tags}catch(e){return t}},descClass:function(){return""==this.pageTable.desc?"noDesc":""},tagsClass:function(){var t="noTags";try{return 0==this.pageTable.tags.length?t:""}catch(e){return t}},buttonIconClass:function(){return this.isInEdit?this.busy?"fa-spinner fa-pulse":"fa-save":"fa-pen"}}),methods:H({},Object(g["b"])("tables",["updateTable","loadSingleTable"]),{editOrSave:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.isInEdit){t.next=15;break}return e=Object.assign({},this.pageTable),t.prev=2,this.busy=!0,t.next=6,this.updateTable({table:e});case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),this.$toasted.show("Could not save changes");case 11:this.busy=!1,this.isInEdit=!1,t.next=16;break;case 15:this.isInEdit=!0;case 16:case"end":return t.stop()}}),t,this,[[2,8]])})));function e(){return t.apply(this,arguments)}return e}(),columnNameClass:function(t){return this.listMode&&""!=this.filterText&&t.includes(this.filterText)?"highlight":""},keyClass:function(t){switch(t){case"PRIMARY KEY":return"pk fa-key";case"UNIQUE":return"unique fa-fingerprint";case"FOREIGN KEY":return"fk fa-key";default:return""}}})},J=Y,X=(a("c46a"),Object(w["a"])(J,A,I,!1,null,"0672de0c",null)),Q=X.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Alert"),a("Filters"),a("Tables")],1)},W=[],Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row filters"},[a("div",{staticClass:"col-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filterTextData,expression:"filterTextData"}],staticClass:"form-control",attrs:{id:"search",type:"text",placeholder:"Search..."},domProps:{value:t.filterTextData},on:{input:function(e){e.target.composing||(t.filterTextData=e.target.value)}}})]),a("div",{staticClass:"col-6"},[a("multiselect",{attrs:{id:"multiple",multiple:!0,options:t.tags,placeholder:"Filter by tags..."},model:{value:t.filterTagsData,callback:function(e){t.filterTagsData=e},expression:"filterTagsData"}})],1),a("div",{staticClass:"col-1"},[a("div",{staticClass:"btn-group mr-2 btn-group-sm",attrs:{role:"group","aria-label":"Basic example"}},[a("button",{staticClass:"btn",class:t.readMode?"btn-disabled":"btn-enabled",attrs:{type:"button"},on:{click:t.toggleReadMode}},[a("i",{staticClass:"fas fa-th"})]),a("button",{staticClass:"btn",class:t.readMode?"btn-enabled":"btn-disabled",attrs:{type:"button"},on:{click:t.toggleReadMode}},[a("i",{staticClass:"fas fa-book"})])])])])},tt=[];function et(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function at(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?et(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):et(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var nt={name:"Filters",data:function(){return{}},created:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.loadTags();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),this.$toasted.show("Could not load tags");case 8:case"end":return t.stop()}}),t,this,[[0,5]])})));function e(){return t.apply(this,arguments)}return e}(),computed:at({},Object(g["e"])("tables",["filterText","filterTags","readMode","tags"]),{filterTextData:{get:function(){return this.filterText},set:function(t){this.setFilterText(t)}},filterTagsData:{get:function(){return this.filterTags},set:function(t){this.setFilterTags(t)}}}),methods:at({},Object(g["b"])("tables",["loadTags"]),{},Object(g["d"])("tables",{setFilterText:"SET_FILTER_TEXT",setFilterTags:"SET_FILTER_TAGS",setReadMode:"SET_READ_MODE",setLoadMoreCounter:"SET_LOAD_MORE_COUNTER"}),{toggleReadMode:function(){this.setReadMode(!this.readMode),this.setLoadMoreCounter(0)}})},st=nt,rt=(a("60bc"),a("1695"),Object(w["a"])(st,Z,tt,!1,null,null,null)),it=rt.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"10"}},[t.spin?a("spinner"):t._e(),t.readMode?t._l(t.trimmedTables,(function(t){return a("div",{key:t.schema+t.name},[a("table-doc",{attrs:{table:t,listMode:!0}})],1)})):a("div",{staticClass:"row"},t._l(t.trimmedTables,(function(t){return a("div",{key:t.schema+t.name,staticClass:"col-4"},[a("table-card",{attrs:{table:t}})],1)})),0)],2)},ct=[],lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card h-100",class:{cardInEdit:t.isInEdit}},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex justify-content-between",staticStyle:{"flex-wrap":"wrap"}},[a("div",{staticClass:"tableDetails"},[a("h6",{staticClass:"schema"},[t._v(t._s(t.table.schema))]),a("router-link",{staticClass:"link",attrs:{to:{name:"table",params:{name:this.table.name,schema:this.table.schema}}}},[a("h5",{staticClass:"tableName",style:{fontSize:t.fontSize+"px"}},[t._v(t._s(t.table.name))])])],1),t.isInEdit?t._e():a("button",{staticClass:"btn btn-circle btn-light",attrs:{type:"button"},on:{click:function(e){t.isInEdit=!0}}},[a("i",{staticClass:"fas fa-pen"})])]),t.isInEdit?a("input",{directives:[{name:"model",rawName:"v-model",value:t.mutableDesc,expression:"mutableDesc"}],staticClass:"form-control",domProps:{value:t.mutableDesc},on:{input:function(e){e.target.composing||(t.mutableDesc=e.target.value)}}}):a("p",{staticClass:"card-text",class:t.descClass},[t._v(t._s(t.desc))]),t.isInEdit?a("multiselect",{staticClass:"tagsSelect",attrs:{id:"multiple",multiple:!0,options:t.options,placeholder:"Add tags"},model:{value:t.mutableTags,callback:function(e){t.mutableTags=e},expression:"mutableTags"}}):a("div",{staticClass:"tags"},t._l(t.tags,(function(e){return a("span",{staticClass:"badge",class:t.tagsClass},[t._v("\n        "+t._s(e)+"\n      ")])})),0),t.isInEdit?a("button",{staticClass:"btn btn-primary btn-sm save-btn",attrs:{type:"button"},on:{click:t.save}},[a("i",{staticClass:"fas",class:t.busy?"fa-spinner fa-pulse":"fa-save"}),t._v("\n      Save\n    ")]):t._e()],1)])},ut=[];function dt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function bt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?dt(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):dt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var ft={name:"TableCard",data:function(){return{isInEdit:!1,mutableDesc:this.table.desc,mutableTags:this.table.tags,options:["Read","Write","TBManager"],busy:!1}},props:{table:Object},computed:{fontSize:function(){return this.table.name.length>20?15:19},desc:function(){return""==this.table.desc?"אין תיאור זמין...":this.mutableDesc},tags:function(){return 0==this.table.tags.length?["No tags"]:this.table.tags},descClass:function(){return""==this.table.desc?"noDesc":""},tagsClass:function(){return 0==this.table.tags.length?"noTags":""}},methods:bt({},Object(g["b"])("tables",["updateTable"]),{save:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=Object.assign({},this.table),e.desc=this.mutableDesc,e.tags=this.mutableTags,t.prev=3,this.busy=!0,t.next=7,this.updateTable({table:e});case 7:t.next=14;break;case 9:t.prev=9,t.t0=t["catch"](3),this.$toasted.show("Could not save changes"),this.mutableDesc=this.table.desc,this.mutableTags=this.table.tags;case 14:this.busy=!1,this.isInEdit=!1;case 16:case"end":return t.stop()}}),t,this,[[3,9]])})));function e(){return t.apply(this,arguments)}return e}()})},pt=ft,ht=(a("70fa"),Object(w["a"])(pt,lt,ut,!1,null,"f59898b8",null)),mt=ht.exports;function gt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function vt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?gt(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):gt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var Ot={name:"Tables",data:function(){return{spin:!1,isExecuted:!1,busy:!1}},components:{TableCard:mt,Spinner:z,TableDoc:Q},computed:vt({},Object(g["c"])("tables",["filteredTables","initResultsAmount","loadMoreAmount"]),{},Object(g["e"])("tables",["readMode","loadMoreCounter"]),{trimmedTables:function(){return this.filteredTables.slice(0,this.initResultsAmount+this.loadMoreAmount*this.loadMoreCounter)}}),created:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.spin=!0,t.prev=1,t.next=4,this.loadTables();case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](1),this.$toasted.show("Could not load tables");case 9:this.spin=!1;case 10:case"end":return t.stop()}}),t,this,[[1,6]])})));function e(){return t.apply(this,arguments)}return e}(),methods:vt({},Object(g["b"])("tables",["loadTables"]),{},Object(g["d"])("tables",{setloadMoreCounter:"SET_LOAD_MORE_COUNTER"}),{loadMore:function(){var t=this;this.filteredTables.length>this.initResultsAmount&&(this.busy=!0,setTimeout((function(){var e=t.loadMoreCounter+1;t.setloadMoreCounter(e),t.busy=!1}),500))}})},yt=Ot,Tt=(a("5abf"),Object(w["a"])(yt,ot,ct,!1,null,"6e74924f",null)),wt=Tt.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.visible?a("div",[a("div",{staticClass:"alert alert-dismissible fade show",attrs:{role:"alert"}},[a("i",{staticClass:"far",class:t.icon}),a("strong",[t._v(t._s(t.coverage)+"% coverage ("+t._s(t.haveDocs)+"/"+t._s(t.total)+")")]),a("a",{staticClass:"btn btn-light btn-sm",domProps:{innerHTML:t._s(t.actionText)},on:{click:function(e){return t.setUndocFilter(!t.undocFilterActive)}}}),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:function(e){t.visible=!1}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"progress",staticStyle:{height:"5px"}},[a("div",{staticClass:"progress-bar",class:t.color,style:{width:t.coverage+"%"},attrs:{role:"progressbar","aria-valuenow":t.coverage,"aria-valuemin":"0","aria-valuemax":"100"}})]),a("br")]):t._e()},_t=[];function jt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function Et(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?jt(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):jt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var xt={name:"Alert",data:function(){return{visible:!0}},computed:Et({},Object(g["e"])("tables",["undocFilterActive"]),{},Object(g["c"])("tables",["coverage","total","haveDocs"]),{color:function(){switch(this.quality()){case"Bad":return"bg-danger";case"Meh":return"bg-warning";case"Good":return"bg-success";default:return""}},icon:function(){switch(this.quality()){case"Bad":return"fa-angry";case"Meh":return"fa-meh";case"Good":return"fa-smile";default:return""}},actionText:function(){return this.undocFilterActive?"Show <b>all tables</b>":"Show tables with <b>no docs</b>"}}),methods:Et({},Object(g["d"])("tables",{setUndocFilter:"SET_UNDOC_FILTER"}),{quality:function(){return this.coverage>=80?"Good":this.coverage<80&&this.coverage>60?"Meh":"Bad"}})},St=xt,kt=(a("22b8"),Object(w["a"])(St,Ct,_t,!1,null,"7ebdc292",null)),Dt=kt.exports,Pt={name:"TablesFeed",components:{Filters:it,Tables:wt,Alert:Dt}},Mt=Pt,Rt=Object(w["a"])(Mt,V,W,!1,null,null,null),At=Rt.exports,It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-sm"},[a("div",{staticClass:"back1"}),a("div",{staticClass:"back2"}),a("div",{staticClass:"back3"}),a("div",{staticClass:"logincard",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login()}}},[t._m(0),a("hr"),a("div",{staticClass:"form-group",staticStyle:{display:"inline-block"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"rounded-input",class:{"danger-input":!this.username&&this.triedLogin},attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),!this.username&&this.triedLogin?a("i",{staticClass:"fa fa-exclamation-circle erroricon"}):t._e()]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],staticClass:"rounded-input",class:{"danger-input":!this.pass&&this.triedLogin},attrs:{type:"password",placeholder:"Password"},domProps:{value:t.pass},on:{input:function(e){e.target.composing||(t.pass=e.target.value)}}}),!this.pass&&this.triedLogin?a("i",{staticClass:"fa fa-exclamation-circle erroricon"}):t._e()]),a("button",{staticClass:"loginbtn",on:{click:t.login}},[t._v("Let's Go!")]),t.wrong?a("div",{staticClass:"wrong"},[a("center",[a("i",{staticClass:"fas fa-exclamation-circle"}),t._v(" Oops... wrong username or password\n      ")])],1):t._e()])])},Lt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"title"},[a("i",{staticClass:"fa fa-database"}),t._v("\n      DB Docs\n    ")])}],Ft={name:"Home",data:function(){return{username:"",pass:"",wrong:!1,triedLogin:!1}},watch:{username:function(t,e){this.wrong=!1},pass:function(t,e){this.wrong=!1}},methods:{login:function(){var t=this;this.triedLogin=!0,this.username&&this.pass&&m({name:this.username,pass:this.pass}).then((function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("user",t.username),t.$router.push({name:"tablefeed"})})).catch((function(){t.wrong=!0}))}}},$t=Ft,Nt=(a("be9e"),Object(w["a"])($t,It,Lt,!1,null,"b8c453aa",null)),Bt=Nt.exports,Ut=[{path:"/",component:R,name:"home",children:[{path:"",component:At,name:"tablefeed"},{path:"/table/:schema/:name",component:Q,props:!0,name:"table"}]},{path:"/login",component:Bt,name:"login",beforeEnter:function(t,e,a){localStorage.getItem("user")?a({name:"home"}):a()}}],Gt=new j["a"]({routes:Ut,linkExactActiveClass:"active"});Gt.beforeEach((function(t,e,a){"login"===t.name||localStorage.getItem("user")?a():a({name:"login"})}));var Kt=Gt,zt=(a("20d6"),{filterText:"",filterTags:[],readMode:!1,currTable:{},tables:[],tags:[],loadMoreCounter:0,alert:"",undocFilterActive:!1}),qt={filteredTables:function(t){var e=t.filterText.toLowerCase(),a=t.tables.filter((function(a){return(a.name.toLowerCase().includes(e)||a.desc.toLowerCase().includes(e)||t.readMode&&a.columns.map((function(t){return t.name.toLowerCase()})).filter((function(t){return t.includes(e)})).length>0)&&t.filterTags.every((function(t){return a.tags.includes(t)}))}));return t.undocFilterActive?a.filter((function(t){return""==t.desc||0==t.tags.length})):a},tableByID:function(t){return function(e,a){return t.tables.filter((function(t){return t.name==e&&t.schema==a}))[0]}},haveDocs:function(t){return t.tables.filter((function(t){return""!=t.desc&&t.tags.length>0})).length},total:function(t){return t.tables.length},coverage:function(t,e){var a=e.total?e.total:1;return parseFloat((100*Math.round(e.haveDocs)/Math.round(a)).toFixed(1))},initResultsAmount:function(t){return t.readMode?3:18},loadMoreAmount:function(t){return t.readMode?2:9}},Ht={loadTables:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,d();case 3:n=t.sent,a("SET_TABLES",n.data);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),loadTags:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,f();case 3:n=t.sent,a("SET_TAGS",n.data);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),loadSingleTable:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(e,a){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,b(a.schema,a.name);case 3:s=t.sent,n("SET_CURR_TABLE",s.data);case 5:case"end":return t.stop()}}),t)})));function e(e,a){return t.apply(this,arguments)}return e}(),updateTable:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(e,a){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,h(a.table);case 3:n("SET_TABLE",a.table);case 4:case"end":return t.stop()}}),t)})));function e(e,a){return t.apply(this,arguments)}return e}()},Yt={SET_TABLES:function(t,e){t.tables=e},SET_LOAD_MORE_COUNTER:function(t,e){t.loadMoreCounter=e},SET_TAGS:function(t,e){t.tags=e},SET_FILTER_TEXT:function(t,e){t.filterText=e},SET_FILTER_TAGS:function(t,e){t.filterTags=e},SET_READ_MODE:function(t,e){t.readMode=e},SET_CURR_TABLE:function(t,e){t.currTable=e},SET_UNDOC_FILTER:function(t,e){t.undocFilterActive=e},SET_TABLE:function(t,e){var a=t.tables.findIndex((function(t){return t.name==e.name}));n["a"].set(t.tables,a,e)}},Jt={namespaced:!0,state:zt,getters:qt,actions:Ht,mutations:Yt};n["a"].use(g["a"]);var Xt=new g["a"].Store({modules:{tables:Jt}}),Qt=(a("ab8b"),a("becf"),a("8e5f")),Vt=a.n(Qt),Wt=a("487a"),Zt=a.n(Wt),te=a("a65d"),ee=a.n(te);n["a"].use(ee.a,{iconPack:"fontawesome",position:"bottom-right",icon:"fa-exclamation-circle",className:"customToast",duration:5e3,closeOnSwipe:!1}),n["a"].use(Zt.a),n["a"].component("multiselect",Vt.a),n["a"].config.productionTip=!1,n["a"].use(j["a"]),new n["a"]({router:Kt,store:Xt,render:function(t){return t(_)}}).$mount("#app")},"5abf":function(t,e,a){"use strict";var n=a("6b95"),s=a.n(n);s.a},"64a9":function(t,e,a){},"6b95":function(t,e,a){},"70fa":function(t,e,a){"use strict";var n=a("9ed8"),s=a.n(n);s.a},"8b71":function(t,e,a){"use strict";var n=a("e3a2"),s=a.n(n);s.a},"97f6":function(t,e,a){},"9ed8":function(t,e,a){},be9e:function(t,e,a){"use strict";var n=a("003d"),s=a.n(n);s.a},c051:function(t,e,a){"use strict";var n=a("326e"),s=a.n(n);s.a},c0c8:function(t,e,a){},c46a:function(t,e,a){"use strict";var n=a("97f6"),s=a.n(n);s.a},c801:function(t,e,a){"use strict";var n=a("39ce"),s=a.n(n);s.a},e3a2:function(t,e,a){}});
//# sourceMappingURL=app.497bed3c.js.map
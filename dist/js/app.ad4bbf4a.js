(function(e){function t(t){for(var n,i,c=t[0],s=t[1],r=t[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,r||[]),l()}function l(){for(var e,t=0;t<o.length;t++){for(var l=o[t],n=!0,c=1;c<l.length;c++){var s=l[c];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=l[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var l=n[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,i),l.l=!0,l.exports}i.m=e,i.c=n,i.d=function(e,t,l){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(l,n,function(t){return e[t]}.bind(null,n));return l},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var r=0;r<c.length;r++)t(c[r]);var p=s;o.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d7")},"56d7":function(e,t,l){"use strict";l.r(t);l("e260"),l("e6cf"),l("cca6"),l("a79d");var n,a,o=l("2b0e"),i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"app"}},[l("el-container",{staticStyle:{height:"100vh"}},[l("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"300px"}},[l("components-list")],1),l("el-container",{staticClass:"preview"},[l("el-header",{staticClass:"btn-bar"},[l("el-button",{attrs:{type:"text",size:"large",icon:"el-icon-document"},on:{click:function(t){e.codeVisible=!0}}},[e._v("生成代码")]),l("el-button",{staticClass:"danger",attrs:{type:"text",size:"large",icon:"el-icon-delete"},on:{click:e.handleEmpty}},[e._v("清空")])],1),l("el-main",{staticClass:"widget-container"},[l("componentItem",{attrs:{actived:e.actived,canNested:!0},on:{active:e.handleActive},model:{value:e.list,callback:function(t){e.list=t},expression:"list"}}),e.list.length?e._e():l("div",{staticClass:"empty"},[e._v("从左侧拖拽来添加组件")])],1)],1),l("el-aside",{staticClass:"models",staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"350px"}},[l("componentModel",{attrs:{models:e.computedModels},model:{value:e.actived,callback:function(t){e.actived=t},expression:"actived"}})],1)],1),l("Parse",{attrs:{list:e.list,visible:e.codeVisible},on:{"update:visible":function(t){e.codeVisible=t}}})],1)},c=[],s=(l("b64b"),function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-container",{staticClass:"list-container",attrs:{direction:"vertical"}},[l("el-main",[e._l(e.componentsList,(function(t,n){return[l("el-row",{key:n},[l("nav",[e._v(e._s(t.title))]),l("el-row",{attrs:{gutter:20}},[l("draggable",e._b({attrs:{list:t.list}},"draggable",e.draggableOptions,!1),e._l(t.list,(function(t,n){return l("el-col",{key:n,attrs:{span:12}},[l("div",{staticClass:"item"},[t.icon?l("i",{staticClass:"iconfont",class:t.icon,staticStyle:{"margin-right":"5px"}}):e._e(),l("span",[e._v(e._s(t.name))])])])})),1)],1)],1)]}))],2)],1)}),r=[],p=l("310e"),u=l.n(p),d={components:{draggable:u.a},data:function(){return{draggableOptions:{group:{name:"component",pull:"clone",put:!1},sort:!1},componentsList:[{title:"布局组件",list:[{name:"栅格布局",type:"el-row",icon:"icon-row",models:{gutter:0},list:[{type:"el-col",canNested:!0,list:[],models:{span:12}},{type:"el-col",canNested:!0,list:[],models:{span:12}}]}]},{title:"基础组件",list:[{name:"按钮",type:"el-button",icon:"icon-btn",models:{label:"按钮",type:"primary"}},{name:"选择器",type:"el-select",icon:"icon-select",hasKey:!0,getKeyValue:function(e){return e.multiple?[]:void 0},models:{options:[{label:"选项1",value:"值1"}]}},{name:"输入框",type:"el-input",icon:"icon-input",hasKey:!0,models:{placeholder:"请输入"}},{name:"单选框组",type:"el-radio-group",icon:"icon-radio",hasKey:!0,models:{options:[{label:"选项1",value:"值1"},{label:"选项2",value:"值2"}]}},{name:"多选框组",type:"el-checkbox-group",icon:"icon-checkbox",hasKey:!0,keyValue:[],models:{options:[{label:"选项1",value:"值1"},{label:"选项2",value:"值2"}]}},{name:"日期选择",type:"el-date-picker",icon:"icon-date",hasKey:!0,keyValue:[],models:{placeholder:"请选择日期"}},{name:"表格",type:"el-table",icon:"icon-table",hasKey:!0,keyValue:[],models:{options:[{label:"列1",prop:"值1"},{label:"列2",prop:"值2"}]}}]}]}}},b=d,m=(l("ecd6"),l("2877")),h=Object(m["a"])(b,s,r,!1,null,null,null),y=h.exports,f=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",{staticClass:"widget-item-container"},[e.canNested?[e.canNested?l("draggable",e._b({staticClass:"widget-list",on:{add:e.handleAdd,remove:e.handleInput},model:{value:e.list,callback:function(t){e.list=t},expression:"list"}},"draggable",e.draggableOptions,!1),e._l(e.list,(function(t,n){return l("div",{key:t.id,class:[{active:e.actived.id===t.id},t.list?"widget-group":"widget-item"],on:{click:function(l){return l.stopPropagation(),e.handleActive(t)}}},[l("Item",{attrs:{item:t,value:t.keyValue},on:{"update:value":function(l){return e.$set(t,"keyValue",l)}}},[l("componentItem",{attrs:{canNested:t.canNested,actived:e.actived},on:{active:e.handleActive,input:e.handleInput},model:{value:t.list,callback:function(l){e.$set(t,"list",l)},expression:"item.list"}})],1),l("div",{directives:[{name:"show",rawName:"v-show",value:e.actived.id===t.id,expression:"actived.id === item.id"}],staticClass:"widget-item_action"},[l("el-button",{attrs:{circle:"",round:"",plain:"",type:"primary",size:"mini",icon:"el-icon-copy-document"},on:{click:function(t){return t.stopPropagation(),e.handleClone(n)}}}),l("el-button",{attrs:{circle:"",round:"",plain:"",type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(t){return t.stopPropagation(),e.handleRemove(n)}}})],1)],1)})),0):e._e()]:[e._l(e.list,(function(t,n){return[l("Item",{key:t.id,staticClass:"widget-group-item",attrs:{item:t,value:t.keyValue},on:{"update:value":function(l){return e.$set(t,"keyValue",l)}}},[l("componentItem",{attrs:{canNested:t.canNested,actived:e.actived},on:{active:e.handleActive,input:e.handleInput},model:{value:t.list,callback:function(l){e.$set(t,"list",l)},expression:"item.list"}})],1)]}))]],2)},v=[],g=(l("c740"),l("4160"),l("a434"),l("159b"),l("5530")),k=l("81b0"),w=l.n(k),x=l("ec26"),j=function(){var e=this,t=e.$createElement,l=e._self._c||t;return e.computedItem.render?l("render",e._g(e._b({attrs:{render:e.computedItem.render,value:e.value}},"render",e.computedItem.models,!1),e.$listeners),[e._t("default")],2):l(e.computedItem.tag,e._g(e._b({tag:"component",attrs:{value:e.value}},"component",e.computedItem.models,!1),e.$listeners),[e._t("default")],2)},O=[],_=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-row",[l("draggable",{attrs:{list:e.options,"ghost-class":"ghost"},on:{update:e.handleChange}},e._l(e.options,(function(t,n){return l("el-row",{key:t.id,attrs:{gutter:4,type:"flex"}},[l("el-col",{attrs:{span:2}},[l("i",{staticClass:"el-icon-s-operation drag",attrs:{size:"mini"}})]),l("el-col",{attrs:{span:9}},["el-col"===t.type?l("el-input",{attrs:{size:"mini",placeholder:e.col1Text},on:{change:e.handleChange},model:{value:t.models[e.props.col1],callback:function(l){e.$set(t.models,e.props.col1,e._n(l))},expression:"item.models[props.col1]"}}):l("el-input",{attrs:{size:"mini",placeholder:e.col1Text},on:{change:e.handleChange},model:{value:t[e.props.col1],callback:function(l){e.$set(t,e.props.col1,l)},expression:"item[props.col1]"}})],1),e.showCol2?l("el-col",{attrs:{span:9}},[l("el-input",{attrs:{size:"mini",placeholder:e.col2Text},on:{change:e.handleChange},model:{value:t[e.props.col2],callback:function(l){e.$set(t,e.props.col2,l)},expression:"item[props.col2]"}})],1):e._e(),l("el-col",{attrs:{span:3}},[l("el-button",{attrs:{type:"danger",icon:"el-icon-minus",circle:"",plain:"",size:"mini"},on:{click:function(t){return e.handelRemove(n)}}})],1)],1)})),1),l("el-button",{attrs:{type:"text"},on:{click:e.handelAdd}},[e._v(e._s(e.addText))])],1)},C=[],$=(l("99af"),l("ade3")),I={components:{draggable:u.a},data:function(){return{options:[]}},props:{value:{type:Array},props:{type:Object,default:function(){return{col1:"label",col2:"value"}}},addText:{type:String,default:"添加选项"},col1Text:{type:String,default:"选项"},col2Text:{type:String,default:"值"},showCol2:{type:Boolean,default:!0},pushValue:{type:Object},isNumber:{type:Boolean,default:!1}},methods:{handelAdd:function(){var e,t=this.options.length+1;this.pushValue?this.options.push(this.pushValue):this.options.push((e={},Object($["a"])(e,this.props.col1,"".concat(this.col1Text).concat(t)),Object($["a"])(e,this.props.col2,"".concat(this.col2Text).concat(t)),e));this.handleChange()},handelRemove:function(e){this.options.splice(e,1),this.handleChange()},handleChange:function(){console.log("11221"),this.$emit("input",w.a.cloneDeep(this.options))}},watch:{value:{handler:function(e){this.options=w.a.cloneDeep(e)},immediate:!0}}},V=I,T=(l("8b5f"),Object(m["a"])(V,_,C,!1,null,"e0d52808",null)),N=T.exports,z={name:"render",functional:!0,render:function(e,t){return t.props.render(e,t.props,t.listeners,t.children)}},D=z,S=Object(m["a"])(D,n,a,!1,null,null,null),A=S.exports,M=(l("d81d"),l("15fd")),P={"el-button":{render:function(e,t){var l=t.label,n=Object(M["a"])(t,["label"]);return e("el-button",{props:Object(g["a"])({},n)},[l])}},"el-select":{render:function(e,t,l){var n=t.options,a=void 0===n?[]:n,o=Object(M["a"])(t,["options"]);return e("el-select",{props:Object(g["a"])({},o),on:Object(g["a"])({},l)},[a.map((function(t){return e("el-option",{props:Object(g["a"])({},t)})}))])}},"el-input":{tag:"el-input"},"el-radio-button":{render:function(e,t,l){var n=t.options,a=Object(M["a"])(t,["options"]);return e("el-radio-group",{props:Object(g["a"])({},a),on:Object(g["a"])({},l)},[n.map((function(t){return e("el-radio-button",{attrs:{label:t.value}},[t.label])}))])}},"el-switch":{tag:"el-switch"},"el-input-number":{tag:"el-input-number"},"el-radio-group":{render:function(e,t,l){var n=t.options,a=t.border,o=Object(M["a"])(t,["options","border"]);return e("el-radio-group",{props:Object(g["a"])({},o),on:Object(g["a"])({},l)},[n.map((function(t){return e("el-radio",{attrs:{border:a,label:t.value}},[t.label])}))])}},"el-checkbox-group":{value:[],render:function(e,t,l){var n=t.options,a=t.border,o=Object(M["a"])(t,["options","border"]);return e("el-checkbox-group",{props:Object(g["a"])({},o),on:Object(g["a"])({},l)},[n.map((function(t){return e("el-checkbox",{attrs:{border:a,label:t.value}},[t.label])}))])}},"el-date-picker":{tag:"el-date-picker"},"el-table":{render:function(e,t,l){var n=t.options,a=Object(M["a"])(t,["options"]);return e("el-table",{props:Object(g["a"])({},a),on:Object(g["a"])({},l)},[n.map((function(t){return e("el-table-column",{props:Object(g["a"])({},t)})}))])}},"el-row":{tag:"el-row"},"el-col":{tag:"el-col"},optionConfig:{tag:"optionConfig"},fence:{render:function(e,t,l,n){var a=t.options,o=void 0===a?[]:a,i=Object(M["a"])(t,["options"]);return e("el-row",{props:Object(g["a"])({},i)},[o.map((function(t){return e("el-col",{class:"widget-fence-item",props:Object(g["a"])({},t)},[n])}))])}}},E={components:{render:A,optionConfig:N},props:{item:{required:!0,type:Object},value:{}},computed:{computedItem:function(){var e=w.a.cloneDeep(this.item),t=e.type||"el-button",l=P[t]||{};return l.render?e.render=l.render:l.tag&&(e.tag=l.tag),e.models=Object.assign({},l.models,e.models),e}}},K=E,R=Object(m["a"])(K,j,O,!1,null,null,null),B=R.exports,J={name:"componentItem",components:{draggable:u.a,Item:B},props:{value:{default:function(){return[]}},actived:{default:function(){}},canNested:{type:Boolean,default:!1}},data:function(){return{btnOptions:{circle:!0,round:!0,plain:!0,size:"mini"},draggableOptions:{group:{name:"component"},ghostClass:"ghost"},list:[]}},methods:{handleAdd:function(e){var t=this,l=e.newIndex,n=Object(x["a"])(),a=this.list[l];a.hasKey&&(a.models.key=a.type+"_"+n),this.$set(this.list,l,Object(g["a"])(Object(g["a"])({},this.list[l]),{},{id:n})),this.handleInput(),this.$nextTick((function(){t.handleActive(w.a.cloneDeep(t.list[l]))}))},handleRemove:function(e){var t=this;this.list.length===e+1?0===e?this.$emit("active",{}):this.$emit("active",w.a.cloneDeep(this.list[e-1])):this.$emit("active",w.a.cloneDeep(this.list[e+1])),this.$nextTick((function(){t.list.splice(e,1),t.handleInput()}))},handleClone:function(e){var t=this,l=w.a.cloneDeep(this.list[e]);l=this.updateDataId(l),this.list.splice(e+1,0,l),this.handleInput(),this.$nextTick((function(){t.handleActive(l)}))},updateDataId:function(e){var t=this;return e.id=Object(x["a"])(),e.hasKey&&(e.models.key=e.type+"_"+e.id),e.list&&e.list.forEach((function(e){return t.updateDataId(e)})),e},handleActive:function(e){this.$emit("active",w.a.cloneDeep(e))},handleInput:function(){this.$emit("input",w.a.cloneDeep(this.list))}},watch:{value:{handler:function(){var e=w.a.cloneDeep(this.value);this.list=e},immediate:!0},actived:function(e){var t=this.list.findIndex((function(t){return t.id===e.id}));-1!==t&&(this.$set(this.list,t,e),this.handleInput()),"function"===typeof e.getKeyValue&&(this.$set(this.actived,"keyValue",e.getKeyValue(this.actived.models)),this.handleInput())}}},L=J,q=(l("dd13"),Object(m["a"])(L,f,v,!1,null,null,null)),F=q.exports,G=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",[Object.keys(e.item).length?l("el-main",[l("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[l("el-tab-pane",{attrs:{label:"字段属性",name:"prop"}},[l("el-form",{attrs:{"label-width":"100px"}},[e.item.list?l("el-form-item",{attrs:{label:"配置项"}},[l("optionConfig",{attrs:{showCol2:!1,col1Text:"栅格值",props:{col1:"span"},pushValue:e.pushValue,isNumber:!0},on:{input:e.handleInput},model:{value:e.item.list,callback:function(t){e.$set(e.item,"list",t)},expression:"item.list"}})],1):e._e(),e._l(e.models,(function(t){return l("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.ifRender(t.ifRender),expression:"ifRender(model.ifRender)"}],key:t.label,attrs:{label:t.label}},[l("Item",{attrs:{item:t},on:{input:e.handleInput},model:{value:e.item.models[t.key],callback:function(l){e.$set(e.item.models,t.key,l)},expression:"item.models[model.key]"}})],1)}))],2)],1)],1)],1):l("div",{staticClass:"empty"},[e._v("从左侧拖拽来添加组件")])],1)},H=[],Q={components:{Item:B,optionConfig:N},data:function(){return{item:{},activeName:"prop",pushValue:{type:"el-col",canNested:!0,list:[],models:{span:12}}}},props:{models:{default:function(){return[]}},value:{}},watch:{value:{handler:function(e){this.item=e?w.a.cloneDeep(e):{}},immediate:!0}},methods:{handleInput:function(){this.$emit("input",w.a.cloneDeep(this.item))},ifRender:function(e){return"function"!==typeof e||e(w.a.cloneDeep(this.item.models))}}},U=Q,W=Object(m["a"])(U,G,H,!1,null,null,null),X=W.exports,Y=[{label:"内容",key:"label",type:"el-input",models:{placeholder:"请输入内容"}},{label:"类型",key:"type",type:"el-select",models:{placeholder:"请选择类型",clearable:!0,options:[{label:"主要",value:"primary"},{label:"成功",value:"success"},{label:"信息",value:"info"},{label:"警告",value:"warning"},{label:"危险",value:"danger"},{label:"文字",value:"text"}]}},{label:"朴素按钮",key:"plain",type:"el-switch"},{label:"圆角按钮",key:"round",type:"el-switch"},{label:"圆形按钮",key:"circle",type:"el-switch"},{label:"禁用",key:"disabled",type:"el-switch"},{label:"图标",key:"icon",type:"el-input",models:{placeholder:"请输入图标"}},{label:"尺寸",key:"size",type:"el-select",models:{options:[{label:"中等",value:"medium"},{label:"小型",value:"small"},{label:"超小",value:"mini"}]}}],Z=[{label:"字段标示",key:"key",type:"el-input",placeholder:"请输入字段标示"},{label:"占位内容",key:"placeholder",type:"el-input",placeholder:"请输入占位内容"},{label:"长度限制",key:"maxlength",type:"el-input",props:{type:"number"}},{label:"尺寸",key:"size",type:"el-select",props:{options:[{label:"中等",value:"medium"},{label:"小型",value:"small"},{label:"超小",value:"mini"}]}},{label:"字数统计",key:"show-word-limit",type:"el-switch"},{label:"禁用状态",key:"disabled",type:"el-switch"},{label:"可清空",key:"clearable",type:"el-switch"},{label:"密码框",key:"show-password",type:"el-switch"},{label:"文本域",key:"type",type:"el-switch",activeValue:"textarea"}],ee=[{label:"字段标示",key:"key",type:"el-input",models:{placeholder:"请输入字段标示"}},{label:"占位内容",key:"placeholder",type:"el-input",models:{placeholder:"请输入占位内容"}},{label:"数据选项",key:"options",type:"optionConfig"},{label:"禁用状态",key:"disabled",type:"el-switch"},{label:"可清空",key:"clearable",type:"el-switch"},{label:"可搜索",key:"filterable",type:"el-switch"},{label:"多选",key:"multiple",type:"el-switch"},{label:"尺寸",key:"size",type:"el-select",models:{options:[{label:"中等",value:"medium"},{label:"小型",value:"small"},{label:"超小",value:"mini"}]}}],te=[{label:"字段标示",key:"key",type:"el-input",models:{placeholder:"请输入字段标示"}},{label:"尺寸",key:"size",type:"el-select",models:{options:[{label:"中等",value:"medium"},{label:"小型",value:"small"},{label:"超小",value:"mini"}]}},{label:"数据选项",key:"options",type:"optionConfig"},{label:"显示边框",key:"border",type:"el-switch"},{label:"禁用状态",key:"disabled",type:"el-switch"}],le=[{label:"字段标示",key:"key",type:"el-input",models:{placeholder:"请输入字段标示"}},{label:"尺寸",key:"size",type:"el-select",models:{options:[{label:"中等",value:"medium"},{label:"小型",value:"small"},{label:"超小",value:"mini"}]}},{label:"数据选项",key:"options",type:"optionConfig"},{label:"显示边框",key:"border",type:"el-switch"},{label:"禁用状态",key:"disabled",type:"el-switch"}],ne=[{label:"字段标示",key:"key",type:"el-input",placeholder:"请输入字段标示"},{label:"表格选项",key:"options",type:"optionConfig",models:{addText:"添加列",col1Text:"列",col2Text:"值",props:{col1:"label",col2:"prop"}}},{label:"边框",key:"border",type:"el-switch"},{label:"斑马纹",key:"stripe",type:"el-switch"},{label:"高度",key:"height",type:"el-input",placeholder:"请输入高度"},{label:"最大高度",key:"max-height",type:"el-input",placeholder:"请输入最大高度"},{label:"尺寸",key:"size",type:"el-select",models:{options:[{label:"中等",value:"medium"},{label:"小型",value:"small"},{label:"超小",value:"mini"}]}}],ae=[{label:"字段标示",key:"key",type:"el-input"},{label:"占位内容",key:"placeholder",type:"el-input"},{label:"显示类型",key:"type",type:"el-select",models:{options:[{label:"日",value:"date"},{label:"日期时间",value:"datetime"},{label:"日期时间范围",value:"datetimerange"},{label:"日期范围",value:"daterange"},{label:"月份范围",value:"monthrange"},{label:"年",value:"year"},{label:"月",value:"month"},{label:"周",value:"week"},{label:"多个日期",value:"dates"}]}},{label:"尺寸",key:"size",type:"el-select",models:{options:[{label:"中等",value:"medium"},{label:"小型",value:"small"},{label:"超小",value:"mini"}]}},{label:"显示格式",key:"format",type:"el-input",models:{placeholder:"yyyy-MM-dd"}},{label:"绑定格式",key:"value-format",type:"el-input",models:{placeholder:"yyyy-MM-dd"}},{label:"禁用状态",key:"disabled",type:"el-switch"},{label:"可清空",key:"clearable",type:"el-switch"},{label:"日期联动",key:"unlink-panels",type:"el-switch"},{label:"分隔符",key:"range-separator",type:"el-input",models:{placeholder:"-"}}],oe=[{label:"栅格间隔",key:"gutter",type:"el-input-number"},{label:"Flex布局",key:"type",type:"el-select",models:{options:[{label:"flex",value:"flex"}],clearable:!0}},{label:"水平排列",key:"justify",type:"el-select",ifRender:function(e){return"flex"===e.type},models:{options:[{label:"start",value:"start"},{label:"end",value:"end"},{label:"center",value:"center"},{label:"space-around",value:"space-around"},{label:"space-between",value:"space-between"}]}},{label:"垂直排列",key:"align",type:"el-select",ifRender:function(e){return"flex"===e.type},models:{options:[{label:"top",value:"top"},{label:"middle",value:"middle"},{label:"bottom",value:"bottom"}]}}],ie={"el-button":Y,"el-input":Z,"el-select":ee,"el-radio-group":te,"el-table":ne,"el-date-picker":ae,"el-checkbox-group":le,"el-row":oe},ce=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-dialog",{attrs:{title:"生成代码",center:"",visible:e.visible},on:{open:e.handleOpen,close:e.handleClose}},[l("codemirror",{ref:"jsonEditor",attrs:{options:e.options},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),l("el-row",{attrs:{type:"flex",justify:"center"}},[l("el-col",{attrs:{span:3}},[l("el-button",{attrs:{type:"primary"},on:{click:e.handleCopy}},[e._v("复制代码")])],1)],1)],1)},se=[],re=(l("4de4"),l("a15b"),l("8f94")),pe=(l("693d"),l("a7be"),l("7a7a"),l("7db0"),l("53ca")),ue={"el-button":function(e){e.key;var t=e.label,l=Object(M["a"])(e,["key","label"]);return"<el-button ".concat(be(l),">").concat(t,"</el-button>")},"el-input":function(e){var t=e.key,l=Object(M["a"])(e,["key"]);return'<el-input v-model="'.concat(t,'" ').concat(be(l),"></el-input>")},"el-select":function(e){var t=e.key,l=e.options,n=Object(M["a"])(e,["key","options"]);return'<el-select v-model="'.concat(t,'" ').concat(be(n),">\n      ").concat(l.map((function(e){return"<el-option ".concat(be(e),"></el-option>")})).join("\n"),"\n    </el-select>")},"el-radio-group":function(e){var t=e.key,l=e.border,n=e.options,a=Object(M["a"])(e,["key","border","options"]);return'<el-radio-group v-model="'.concat(t,'" ').concat(be(a),">\n    ").concat(n.map((function(e){var t=e.label,n=e.value;return'<el-radio  label="'.concat(n,'" ').concat(l||"",">").concat(t,"</el-radio>")})).join("\n"),"\n  </el-radio-group>")},"el-checkbox-group":function(e){var t=e.key,l=e.border,n=e.options,a=Object(M["a"])(e,["key","border","options"]);return'<el-checkbox-group v-model="'.concat(t,'" ').concat(be(a),">\n      ").concat(n.map((function(e){var t=e.label,n=e.value;return'<el-checkbox  label="'.concat(n,'" ').concat(l||"",">").concat(t,"</el-checkbox>")})).join("\n"),"\n    </el-checkbox-group>")},"el-table":function(e){var t=e.key,l=e.options,n=Object(M["a"])(e,["key","options"]);return"<el-table ".concat(be(n),' :data="').concat(t,'">\n        ').concat(l.map((function(e){return"<el-table-colmun  ".concat(be(e)," ></el-table-colmun>")})).join("\n"),"\n      </el-table>")},"el-date-picker":function(e){var t=e.key,l=Object(M["a"])(e,["key"]);return"<el-date-picker ".concat(be(l),' v-model="').concat(t,'"></el-date-picker>')},"el-row":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return"\n      <el-row  ".concat(be(e),">\n        ").concat(t.map((function(e){return"<el-col ".concat(be(e.models),">").concat(e.list.map((function(e){return ue[e.type](e.models,e.list)})).join("\n"),"</el-col>")})).join("\n"),"\n      </el-row>")}},de=ue;function be(e){var t=[],l=function(l){e[l]&&t.push("".concat(["number","boolean"].find((function(t){return t===Object(pe["a"])(e[l])}))?":":"").concat(l,'="').concat(e[l],'"'))};for(var n in e)l(n);return t.join(" ")}var me=l("e579"),he=l.n(me),ye={props:["list","visible"],components:{codemirror:re["codemirror"]},data:function(){return{options:{tabSize:4,mode:"text/x-vue",theme:"monokai",lineNumbers:!0,line:!0},code:""}},methods:{handleOpen:function(){this.generateCode()},handleClose:function(){this.$emit("update:visible",!1)},generateCode:function(){var e=this.list.map((function(e){return de[e.type](e.models,e.list)})).join("\n"),t=this.list.map((function(e){return e.models.key?"'".concat(e.models.key,"':").concat(JSON.stringify(e.keyValue),","):""})).filter((function(e){return e})).join("\n"),l="<template><div>".concat(e,"</div></template><script>export default {data() {").concat(t,"}}<\/script>");this.code=he()(l)},handleCopy:function(){var e=this;this.$copyText(this.code).then((function(t){e.$message.success("复制成功")}))}}},fe=ye,ve=Object(m["a"])(fe,ce,se,!1,null,null,null),ge=ve.exports,ke={name:"app",components:{componentsList:y,componentItem:F,componentModel:X,Parse:ge},data:function(){return{list:[],actived:{},codeVisible:!1}},computed:{computedModels:function(){return Object.keys(this.actived).length?ie[this.actived.type]:[]}},methods:{handleActive:function(e){this.actived=e},handleEmpty:function(){var e=this;this.$confirm("此操作将清空数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.list=[],e.actived={},e.$message({type:"success",message:"删除成功!"})})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}},watch:{}},we=ke,xe=(l("5c0b"),Object(m["a"])(we,i,c,!1,null,null,null)),je=xe.exports,Oe=l("5c96"),_e=l.n(Oe);l("0fae");o["default"].use(_e.a);var Ce=l("2f62");o["default"].use(Ce["a"]);var $e=new Ce["a"].Store({state:{},getters:{},mutations:{},actions:{}}),Ie=l("4eb5"),Ve=l.n(Ie);o["default"].use(Ve.a),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(je)},store:$e}).$mount("#app")},"5c0b":function(e,t,l){"use strict";var n=l("9c0c"),a=l.n(n);a.a},8651:function(e,t,l){},"8b5f":function(e,t,l){"use strict";var n=l("9906"),a=l.n(n);a.a},9906:function(e,t,l){},"9c0c":function(e,t,l){},b82d:function(e,t,l){},dd13:function(e,t,l){"use strict";var n=l("8651"),a=l.n(n);a.a},ecd6:function(e,t,l){"use strict";var n=l("b82d"),a=l.n(n);a.a}});
//# sourceMappingURL=app.ad4bbf4a.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46c69b5e"],{"04bb":function(t,e,a){"use strict";a("561e")},"561e":function(t,e,a){},e075:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"headerTextB"},[t._v("Search User Information")]),a("b-row",{staticClass:"mt-3 d-flex align-items-center"},[a("b-col",{attrs:{cols:"12",xl:"6",id:"options"}},[a("label",[t._v("Select Type Option")]),a("b-form-select",{attrs:{options:t.typeoption,"value-field":"item","text-field":"name","disabled-field":"notEnabled"},model:{value:t.selected_type_option,callback:function(e){t.selected_type_option=e},expression:"selected_type_option"}})],1),a("b-col",{staticClass:"mt-4 alignButtons",attrs:{id:"options",cols:"12",xl:"6"}},[a("b-button",{attrs:{variant:"primary"},on:{click:t.getDonarData}},[t._v("Search")])],1)],1),a("br"),a("div",{staticClass:"mt-5"},[a("b-row",[a("b-col",{attrs:{cols:"12",xl:"6"}},[a("label",{staticClass:"headerTextB"},[t._v("Information List")])]),a("b-col",{staticClass:"float-right alignButtons",attrs:{cols:"12",xl:"6"}},[a("b-button",{staticClass:"float-right",attrs:{variant:"primary"},on:{click:t.showRegisterModal}},[t._v("Register Info")])],1)],1)],1),a("div",{staticClass:"mt-4"},[a("b-table",{key:t.indexRefresh,ref:"selectableTable",attrs:{id:"infoTable","select-mode":t.selectModeTable,fields:t.fields,items:t.DonarData,striped:!0,bordered:!1,borderless:!1,"head-variant":"dark",fixed:"","sticky-header":""},scopedSlots:t._u([{key:"cell(type_name)",fn:function(e){return[t._v(t._s(e.value))]}},{key:"cell(title)",fn:function(e){return[t._v(t._s(e.value))]}},{key:"cell(details)",fn:function(e){return[t._v(t._s(e.value))]}},{key:"cell(Action)",fn:function(e){return[a("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"},on:{click:function(a){return t.deleteDetails(e)}}}),a("i",{staticClass:"fa fa-pencil-square-o ml-1",attrs:{"aria-hidden":"true"},on:{click:function(a){return t.edit(e)}}})]}}])}),a("b-modal",{ref:"tree-modal1",attrs:{id:"tree-modal1","hide-footer":!0,centered:"",variant:"secondary","modal-class":"py-0","body-class":"py-0",size:"lg","footer-class":"border-1","header-class":"border-0 pd-0","button-size":"sm"},scopedSlots:t._u([{key:"modal-header",fn:function(e){var i=e.cancel;return[a("span",{staticClass:"headerText mt-3 pl-3"},[t._v("Register User Information")]),a("div",{staticClass:"w0"},[a("button",{staticClass:"close close-btn",attrs:{type:"button","aria-label":"Close"},on:{click:i}},[t._v(" × ")])])]}}])},[a("div",{staticClass:"line mt-2"}),a("b-card",{staticClass:"pop-up-box border-0"},[a("b-row",[a("b-col",{attrs:{cols:"12",xl:"6"}},[a("label",[t._v("Admin Id")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.RegisterInfo.user_id,expression:"RegisterInfo.user_id"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.RegisterInfo.user_id},on:{input:function(e){e.target.composing||t.$set(t.RegisterInfo,"user_id",e.target.value)}}}),a("show-errors",{attrs:{control:t.$v.RegisterInfo.user_id,field:t.$t("user_id")}})],1),a("b-col",{staticClass:"justifyMobile",attrs:{cols:"12",xl:"6"}},[a("label",[t._v("Select Type")]),a("b-form-select",{attrs:{options:t.TypeOptions,"value-field":"item","text-field":"name","disabled-field":"notEnabled"},model:{value:t.RegisterInfo.type_id,callback:function(e){t.$set(t.RegisterInfo,"type_id",e)},expression:"RegisterInfo.type_id"}})],1)],1),a("b-row",{staticClass:"mt-3"},[a("b-col",{attrs:{cols:"12"}},[a("label",[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.RegisterInfo.title,expression:"RegisterInfo.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.RegisterInfo.title},on:{input:function(e){e.target.composing||t.$set(t.RegisterInfo,"title",e.target.value)}}}),a("show-errors",{attrs:{control:t.$v.RegisterInfo.title,field:t.$t("title")}})],1)],1),a("b-row",{staticClass:"mt-3"},[a("b-col",{attrs:{cols:"12"}},[a("label",[t._v("Details")]),a("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter Details...",rows:"3","max-rows":"6"},model:{value:t.RegisterInfo.details,callback:function(e){t.$set(t.RegisterInfo,"details",e)},expression:"RegisterInfo.details"}}),a("show-errors",{attrs:{control:t.$v.RegisterInfo.details,field:t.$t("details")}})],1)],1)],1),a("div",{staticClass:"line"}),a("b-row",[a("b-col",{staticClass:"mb-2 mt-2 d-flex justify-content-end",attrs:{cols:"12"}},[a("b-button",{staticClass:"mr-1",attrs:{variant:"secondary"},on:{click:t.close}},[t._v("close")]),a("b-button",{attrs:{variant:"primary"},on:{click:t.RegisterData}},[t._v("Add")])],1)],1)],1),a("b-modal",{ref:"tree-modal2",attrs:{id:"tree-modal2","hide-footer":!0,centered:"",variant:"secondary","modal-class":"py-0","body-class":"py-0",size:"lg","footer-class":"border-1","header-class":"border-0 pd-0","button-size":"sm"},scopedSlots:t._u([{key:"modal-header",fn:function(e){var i=e.cancel;return[a("span",{staticClass:"headerText mt-3 pl-3"},[t._v("Update User Information")]),a("div",{staticClass:"w0"},[a("button",{staticClass:"close close-btn",attrs:{type:"button","aria-label":"Close"},on:{click:i}},[t._v(" × ")])])]}}])},[a("div",{staticClass:"line mt-2"}),a("b-card",{staticClass:"pop-up-box border-0"},[a("b-row",[a("b-col",{attrs:{cols:"12",xl:"6"}},[a("label",[t._v("Admin Id")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.UpdateInfo.user_id,expression:"UpdateInfo.user_id"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.UpdateInfo.user_id},on:{input:function(e){e.target.composing||t.$set(t.UpdateInfo,"user_id",e.target.value)}}}),a("show-errors",{attrs:{control:t.$v.UpdateInfo.user_id,field:t.$t("user_id")}})],1),a("b-col",{staticClass:"justifyMobile",attrs:{cols:"12",xl:"6"}},[a("label",[t._v("Select Type")]),a("b-form-select",{attrs:{options:t.TypeOptions,"value-field":"item","text-field":"name","disabled-field":"notEnabled"},model:{value:t.UpdateInfo.type_id,callback:function(e){t.$set(t.UpdateInfo,"type_id",e)},expression:"UpdateInfo.type_id"}})],1)],1),a("b-row",{staticClass:"mt-3"},[a("b-col",{attrs:{cols:"12"}},[a("label",[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.UpdateInfo.title,expression:"UpdateInfo.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.UpdateInfo.title},on:{input:function(e){e.target.composing||t.$set(t.UpdateInfo,"title",e.target.value)}}}),a("show-errors",{attrs:{control:t.$v.UpdateInfo.title,field:t.$t("title")}})],1)],1),a("b-row",{staticClass:"mt-3"},[a("b-col",{attrs:{cols:"12"}},[a("label",[t._v("Details")]),a("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter Details...",rows:"3","max-rows":"6"},model:{value:t.UpdateInfo.details,callback:function(e){t.$set(t.UpdateInfo,"details",e)},expression:"UpdateInfo.details"}}),a("show-errors",{attrs:{control:t.$v.UpdateInfo.details,field:t.$t("details")}})],1)],1)],1),a("div",{staticClass:"line"}),a("b-row",[a("b-col",{staticClass:"mb-2 mt-2 d-flex justify-content-end",attrs:{cols:"12"}},[a("b-button",{staticClass:"mr-1",attrs:{variant:"secondary"},on:{click:t.close}},[t._v("close")]),a("b-button",{attrs:{variant:"primary"},on:{click:t.UpdateData}},[t._v("Update")])],1)],1)],1)],1)],1)},s=[],n=(a("ac6a"),a("7f7f"),a("96cf"),a("1da1")),r=a("1315"),o=a("b5ae"),l=a("c827"),c=a("bc3a"),d=a.n(c),u=a("3f54");r["Settings"].defaultLocale="ja";var p=u["a"].get("basic"),f={name:"Index",components:{ShowErrors:l["a"]},data:function(){return{indexRefresh:1,selected_type_option:"",typeoption:[],selectedBloodGroup:"",selectedCountry:"",selectedState:"",selectedDist:"",selectedCity:"",bloodGroupOption:[],CountryOption:[],TypeOptions:[],typeData:{},StateOption:[],DistOption:[],CityOption:[],DonarData:[],tableData:[],countryData:[],bloodGroupData:[],bloodGroup_Option:[],Country_Option:[],State_Option:[],District_Option:[],City_Option:[],selectModeTable:"single",plasmadonar_Option:[{item:"0",name:"Yes"},{item:"1",name:"No"}],RegisterInfo:{user_id:localStorage.getItem("user_id"),type_id:"",title:"",details:"",type_name:""},UpdateInfo:{user_id:localStorage.getItem("user_id"),type_id:"",title:"",details:"",type_name:""}}},computed:{fields:function(){return[{key:"type_name",label:"Type",class:"text-center normal-width"},{key:"title",label:"Title",class:"text-center normal-width"},{key:"details",label:"Details",class:"text-center normal-width"},{key:"Action",label:"Action",class:"text-center normal-width"}]}},validations:{RegisterInfo:{user_id:{required:o["required"]},type_id:{required:o["required"]},title:{required:o["required"]},details:{required:o["required"]}},UpdateInfo:{user_id:{required:o["required"]},type_id:{required:o["required"]},title:{required:o["required"]},details:{required:o["required"]}}},mounted:function(){this.serviceGetFunction(),this.getBloodGroupData(),this.getTypeData()},created:function(){},methods:{deleteDetails:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("delete item",e),a="master/delete/details",t.next=4,p.postAPI(a,{key:"id",value:e.item.id});case 4:i=t.sent,i.data.success&&this.serviceGetFunction();case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),UpdateData:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.$v.UpdateInfo.$touch(),this.$v.UpdateInfo.$invalid){t.next=8;break}return e={data:[{user_id:localStorage.getItem("user_id"),type_id:this.UpdateInfo.type_id,title:this.UpdateInfo.title,details:this.UpdateInfo.details}],conditions:[{key:"id",value:this.UpdateInfo.id}]},a="master/update/details",t.next=6,p.postAPI(a,e);case 6:i=t.sent,i.data.success&&(this.serviceGetFunction(),this.$refs["tree-modal2"].hide());case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),RegisterData:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.$v.RegisterInfo.$touch(),this.$v.RegisterInfo.$invalid){t.next=9;break}return e={user_id:localStorage.getItem("user_id"),type_id:this.RegisterInfo.type_id,title:this.RegisterInfo.title,details:this.RegisterInfo.details},a="master/createData/details",t.next=6,p.postAPI(a,e);case 6:i=t.sent,console.log(i,"DataData"),i.data.success&&(this.serviceGetFunction(),this.$refs["tree-modal1"].hide());case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),edit:function(t){this.UpdateInfo.id=t.item.id,this.UpdateInfo.type_id=t.item.type_id,this.UpdateInfo.user_id=t.item.user_id,this.UpdateInfo.title=t.item.title,this.UpdateInfo.details=t.item.details,this.$refs["tree-modal2"].show()},showRegisterModal:function(){this.$refs["tree-modal1"].show()},close:function(){this.$refs["tree-modal1"].hide(),this.$refs["tree-modal2"].hide()},getDonarData:function(){var t={paginate:!1,limit:100,fieldlist:["details.id","details.title","details.user_id","details.details","types.name as type_name","details.type_id"],joins:[{table:"types",join_type:"left",join_conditions:[{join_using:"types.id",join_operator:"=",join_with:"details.type_id"}]}],conditions:[{key:"details.type_id",operator:"=",value:this.selected_type_option}]},e="https://119.82.96.67:8082/api/master/readwithjoin/details";this.serviceFunction(t,e)},getBloodGroupData:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="master/readall/blood_groups",t.next=3,p.getAPI(e);case 3:for(a=t.sent,i=a.data,console.log(i,"data2"),this.bloodGroupOption.push({item:"",name:"Select",disabled:!0}),this.bloodGroup_Option.push({item:"",name:"Select",disabled:!0}),this.bloodGroupData=i.data,s=0;s<this.bloodGroupData.length;s++)this.bloodGroupOption.push({item:this.bloodGroupData[s].id,name:this.bloodGroupData[s].blood_type});for(n=0;n<this.bloodGroupData.length;n++)this.bloodGroup_Option.push({item:this.bloodGroupData[n].id,name:this.bloodGroupData[n].blood_type});console.log("this.bloodGroupOption",this.bloodGroupOption);case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getTypeData:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="master/readall/types",t.next=3,p.getAPI(e);case 3:a=t.sent,i=a.data,console.log(i,"data2"),this.typeData=i.data,this.typeoption.push({item:"",name:"Select"}),this.TypeOptions.push({item:"",name:"Select"}),this.typeData.map((function(t){s.typeoption.push({item:t.id,name:t.name}),s.TypeOptions.push({item:t.id,name:t.name})})),console.log("typeoption",this.TypeOptions);case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getStateDetails:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.State_Option=[],console.log(this.RegisterInfo,"KKKKKK"),alert("this.RegisterInfo.selected_Country",this.RegisterInfo.selected_Country),e="getstates?country_id=".concat(this.RegisterInfo.selected_Country),t.next=6,p.getAPI(e);case 6:for(a=t.sent,i=a.data,console.log(i,"data2"),s=i,console.log("StateData",s.length),this.StateOption.push({item:"",name:"Select",disabled:!0}),n=0;n<i.length;n++)this.State_Option.push({item:i[n].id,name:i[n].state_name});case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getStateData:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.StateOption=[],console.log(this.selectedCountry,"selectedCountry"),e="getstates?country_id=".concat(this.selectedCountry),t.next=5,p.getAPI(e);case 5:for(a=t.sent,i=a.data,console.log(i,"data2"),s=i,console.log("StateData",s.length),this.countryData=i.data,this.StateOption.push({item:"",name:"Select",disabled:!0}),n=0;n<i.length;n++)this.StateOption.push({item:i[n].id,name:i[n].state_name});case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getDistDetails:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.District_Option=[],e="getdistricts?state_id=".concat(this.RegisterInfo.selected_State),t.next=4,p.getAPI(e);case 4:for(a=t.sent,i=a.data,console.log(i,"data2"),this.District_Option.push({item:"0",name:"Select",disabled:!0}),s=0;s<i.length;s++)this.District_Option.push({item:i[s].id,name:i[s].district_name});case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getDistData:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.DistOption=[],e="getdistricts?state_id=".concat(this.selectedState),t.next=4,p.getAPI(e);case 4:for(a=t.sent,i=a.data,console.log(i,"data2"),this.DistOption.push({item:"",name:"Select",disabled:!0}),s=0;s<i.length;s++)this.DistOption.push({item:i[s].id,name:i[s].district_name});case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getCityDetails:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.City_Option=[],e="getcities?district_id=".concat(this.RegisterInfo.selected_District),t.next=4,p.getAPI(e);case 4:for(a=t.sent,i=a.data,console.log(i,"data2"),this.City_Option.push({item:"",name:"Select",disabled:!0}),s=0;s<i.length;s++)this.City_Option.push({item:i[s].id,name:i[s].city_name});case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getCityData:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.CityOption=[],e="getcities?district_id=".concat(this.selectedDist),t.next=4,p.getAPI(e);case 4:for(a=t.sent,i=a.data,console.log(i,"data2"),this.CityOption.push({item:"",name:"Select",disabled:!0}),s=0;s<i.length;s++)this.CityOption.push({item:i[s].id,name:i[s].city_name});case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),serviceGetFunction:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,i,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="https://119.82.96.67:8082/api/master/readall/details",t.next=3,d.a.get(e);case 3:return a=t.sent,console.log(a,"data"),"200"==a.status&&(this.tableData=a.data.data,console.log(this.tableData,"DATTATATATAT")),this.DonarData=[],this.tableData.forEach((function(t){i={id:t.id,type_id:t.type_id,type_name:t.type_name,user_id:localStorage.getItem("user_id"),title:t.title,details:t.details},s.DonarData.push(i)})),this.indexRefresh=this.indexRefresh+1,t.abrupt("return",a);case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),serviceFunction:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,a){var i,s,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.DonarData=[],t.next=3,d.a.post(a,e,{headers:{}});case 3:return i=t.sent,this.tableData=i.data.data.data,console.log(i,this.tableData,"data service funct"),this.tableData.forEach((function(t){s={id:t.id,type_id:t.type_id,type_name:t.type_name,user_id:localStorage.getItem("user_id"),title:t.title,details:t.details},n.DonarData.push(s)})),t.abrupt("return",i);case 8:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}()}},h=f,m=(a("04bb"),a("2877")),b=Object(m["a"])(h,i,s,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-46c69b5e.8d9ffa69.js.map
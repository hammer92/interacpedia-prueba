(window.webpackJsonp=window.webpackJsonp||[]).push([[2,11,12],{16:function(t,a,e){"use strict";e.r(a);var s=e(0),r=e.n(s),n=e(20),i=e(19);function o(t,a,e,s,r,n,i){try{var o=t[n](i),l=o.value}catch(t){return void e(t)}o.done?a(l):Promise.resolve(l).then(s,r)}function l(t){return function(){var a=this,e=arguments;return new Promise(function(s,r){var n=t.apply(a,e);function i(t){o(n,s,r,i,l,"next",t)}function l(t){o(n,s,r,i,l,"throw",t)}i(void 0)})}}var c={name:"Index",middleware:"auth",components:{CrearEmployee:n.default,EditEmployee:i.default},data:function(){return{lista:{data:[]},listaCompanies:[]}},mounted:function(){this.getData(),this.getDataEmployee()},methods:{getData:function(){var t=l(r.a.mark(function t(){var a,e,s=arguments;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.length>0&&void 0!==s[0]?s[0]:1,this.lista=[],t.next=4,this.$http("/api/employees?page=".concat(a));case 4:(e=t.sent)&&(this.lista=e.data);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getDataEmployee:function(){var t=l(r.a.mark(function t(){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$http("/api/companies/select");case 2:(a=t.sent)&&(this.listaCompanies=a.data);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),remove:function(){var t=l(r.a.mark(function t(a){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$http.delete("/api/employees/".concat(a));case 2:t.sent&&(console.log("emilinado"),this.getData(1));case 4:case"end":return t.stop()}},t,this)}));return function(a){return t.apply(this,arguments)}}(),edit:function(t){this.$refs.edit.setData(t)}}},m=e(1),p=Object(m.a)(c,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("section",{staticClass:"content-header"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row mb-2"},[e("div",{staticClass:"col-sm-6"},[e("h1",[t._v(" "+t._s(t.$t("employee")))])]),t._v(" "),e("div",{staticClass:"col-sm-6 text-right"},[e("crear-employee",{attrs:{"lista-companies":t.listaCompanies},on:{ok:t.getData}})],1)])])]),t._v(" "),e("section",{staticClass:"content"},[e("div",{staticClass:"card card-solid"},[e("div",{staticClass:"card-header"},[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination justify-content-start"},[1!==t.lista.current_page?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"},on:{click:function(a){return a.preventDefault(),t.getData(t.lista.current_page-1)}}},[t._v(t._s(t.$t("previous")))])]):t._e(),t._v(" "),e("li",{staticClass:"page-item"},[e("p",{staticClass:"page-link"},[t._v("\n                "+t._s(t.lista.current_page)+"/"+t._s(t.lista.last_page)+"\n                Pag.\n              ")])]),t._v(" "),t.lista.current_page!==t.lista.last_page?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getData(t.lista.current_page+1)}}},[t._v(t._s(t.$t("next")))])]):t._e()])])]),t._v(" "),e("div",{staticClass:"card-body pb-0"},[e("div",{staticClass:"row d-flex align-items-stretch"},[0===t.lista.data.length?e("div",{staticClass:"col-12"},[e("div",{staticClass:"error-page"},[t._m(0),t._v(" "),e("div",{staticClass:"error-content"},[e("h3",[t._v(" "+t._s(t.$t("data_not_found"))+" ")]),t._v(" "),e("p",[t._v(t._s(t.$t("data_not_found_mensaje"))+" "+t._s(t.$t("employee")))])])])]):e("div",{staticClass:"card-body table-responsive p-0",staticStyle:{height:"300px"}},[e("table",{staticClass:"table table-head-fixed"},[e("thead",[e("tr",[e("th",[t._v("ID")]),t._v(" "),e("th",[t._v(t._s(t.$t("first_name")))]),t._v(" "),e("th",[t._v(t._s(t.$t("last_name")))]),t._v(" "),e("th",[t._v(t._s(t.$t("company")))]),t._v(" "),e("th",[t._v(t._s(t.$t("email")))]),t._v(" "),e("th",[t._v(t._s(t.$t("phone")))]),t._v(" "),e("th",[t._v(t._s(t.$t("actions")))])])]),t._v(" "),e("tbody",t._l(t.lista.data,function(a,s){return e("tr",{key:s},[e("td",[t._v(t._s(s+1))]),t._v(" "),e("td",[t._v(t._s(a.first_name))]),t._v(" "),e("td",[t._v(t._s(a.last_name))]),t._v(" "),e("td",[t._v(t._s(a.company.name))]),t._v(" "),e("td",[t._v(t._s(a.email))]),t._v(" "),e("td",[t._v(t._s(a.phone))]),t._v(" "),e("td",[e("div",{staticClass:"text-right"},[e("a",{staticClass:"btn btn-sm bg-danger",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.remove(a.id)}}},[e("i",{staticClass:"fas fa-trash-alt"})]),t._v(" "),e("a",{staticClass:"btn btn-sm btn-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.edit(a)}}},[e("i",{staticClass:"fas fa-edit"}),t._v(" "+t._s(t.$t("edit"))+"\n                      ")])])])])}),0)])])])])])]),t._v(" "),e("edit-employee",{ref:"edit",attrs:{"lista-companies":t.listaCompanies},on:{ok:t.getData}})],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{staticClass:"headline text-warning"},[a("i",{staticClass:"fas fa-exclamation-triangle text-warning"})])}],!1,null,"c95e35ba",null);a.default=p.exports},19:function(t,a,e){"use strict";e.r(a);var s=e(0),r=e.n(s),n=e(2),i=e.n(n);function o(t,a,e,s,r,n,i){try{var o=t[n](i),l=o.value}catch(t){return void e(t)}o.done?a(l):Promise.resolve(l).then(s,r)}var l={name:"EditEmployee",props:{listaCompanies:{type:Array,default:function(){return[]}}},data:function(){return{form:new i.a({first_name:"",last_name:"",company_id:"",email:"",phone:""}),id:!1}},methods:{setData:function(t){this.id=t.id,this.form=new i.a(t),this.$refs.modalCrear.open()},save:function(){var t,a=(t=r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.put("/api/employees/".concat(this.id)).catch(function(t){console.log(t)});case 2:t.sent&&(this.$refs.modalCrear.close(),this.form.clear(),this.form.reset(),this.$emit("ok"));case 4:case"end":return t.stop()}},t,this)}),function(){var a=this,e=arguments;return new Promise(function(s,r){var n=t.apply(a,e);function i(t){o(n,s,r,i,l,"next",t)}function l(t){o(n,s,r,i,l,"throw",t)}i(void 0)})});return function(){return a.apply(this,arguments)}}()}},c=e(1),m=Object(c.a)(l,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("modal",{ref:"modalCrear",attrs:{id:"modal-edit-employee",title:t.$t("edit")+" "+t.$t("employee"),"button-class":"btn btn-sm btn-primary","button-text":t.$t("edit")},on:{save:t.save}},[e("form",{on:{submit:function(a){return a.preventDefault(),t.save(a)},keydown:function(a){return t.form.onKeydown(a)}}},[e("div",{staticClass:"input-group mb-3"},[e("div",{staticClass:"input-group-append"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"fas fa-city"})])]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.company_id,expression:"form.company_id"}],staticClass:"custom-select",class:{"is-invalid":t.form.errors.has("company_id")},attrs:{placeholder:t.$t("company")},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"company_id",a.target.multiple?e:e[0])}}},[e("option",{attrs:{selected:"",disabled:""}},[t._v("Choose...")]),t._v(" "),t._l(t.listaCompanies,function(a){return e("option",{domProps:{value:a.id}},[t._v(" "+t._s(a.name)+" ")])})],2),t._v(" "),e("has-error",{attrs:{form:t.form,field:"company_id"}})],1),t._v(" "),e("div",{staticClass:"input-group mb-3"},[e("div",{staticClass:"input-group-append"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"fas fa-user"})])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.first_name,expression:"form.first_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("first_name")},attrs:{type:"text",placeholder:t.$t("first_name")},domProps:{value:t.form.first_name},on:{input:function(a){a.target.composing||t.$set(t.form,"first_name",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"first_name"}})],1),t._v(" "),e("div",{staticClass:"input-group mb-3"},[e("div",{staticClass:"input-group-append"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"fas fa-user"})])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.last_name,expression:"form.last_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("last_name")},attrs:{type:"text",placeholder:t.$t("last_name")},domProps:{value:t.form.last_name},on:{input:function(a){a.target.composing||t.$set(t.form,"last_name",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"last_name"}})],1),t._v(" "),e("div",{staticClass:"input-group mb-3"},[e("div",{staticClass:"input-group-append"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"fas fa-envelope"})])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",placeholder:t.$t("email")},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"email"}})],1),t._v(" "),e("div",{staticClass:"input-group mb-3"},[e("div",{staticClass:"input-group-append"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"fas fa-phone"})])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("phone")},attrs:{type:"text",placeholder:t.$t("phone")},domProps:{value:t.form.phone},on:{input:function(a){a.target.composing||t.$set(t.form,"phone",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"phone"}})],1)])])},[],!1,null,"571f52f0",null);a.default=m.exports},20:function(t,a,e){"use strict";e.r(a);var s=e(0),r=e.n(s),n=e(2),i=e.n(n);function o(t,a,e,s,r,n,i){try{var o=t[n](i),l=o.value}catch(t){return void e(t)}o.done?a(l):Promise.resolve(l).then(s,r)}var l={props:{listaCompanies:{type:Array,default:function(){return[]}}},name:"CrearEmployee",data:function(){return{form:new i.a({first_name:"",last_name:"",company_id:"",email:"",phone:""})}},methods:{save:function(){var t,a=(t=r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.post("/api/employees").catch(function(t){console.log(t)});case 2:t.sent&&(this.$refs.modalCrear.close(),this.form.clear(),this.form.reset(),this.$emit("ok"));case 4:case"end":return t.stop()}},t,this)}),function(){var a=this,e=arguments;return new Promise(function(s,r){var n=t.apply(a,e);function i(t){o(n,s,r,i,l,"next",t)}function l(t){o(n,s,r,i,l,"throw",t)}i(void 0)})});return function(){return a.apply(this,arguments)}}()}},c=e(1),m=Object(c.a)(l,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("modal",{ref:"modalCrear",attrs:{button:"",id:"modal-create-employee",title:t.$t("create")+" "+t.$t("employee"),"button-class":"btn btn-sm btn-primary","button-text":t.$t("create")},on:{save:t.save}},[e("template",{slot:"button-icon"},[e("i",{staticClass:"fas fa-plus"})]),t._v(" "),e("form",{on:{submit:function(a){return a.preventDefault(),t.save(a)},keydown:function(a){return t.form.onKeydown(a)}}},[e("div",{staticClass:"input-group mb-3"},[e("div",{staticClass:"input-group-append"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"fas fa-city"})])]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.company_id,expression:"form.company_id"}],staticClass:"custom-select",class:{"is-invalid":t.form.errors.has("company_id")},attrs:{placeholder:t.$t("company")},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"company_id",a.target.multiple?e:e[0])}}},[e("option",{attrs:{selected:"",disabled:""}},[t._v("Choose...")]),t._v(" "),t._l(t.listaCompanies,function(a){return e("option",{domProps:{value:a.id}},[t._v(" "+t._s(a.name)+" ")])})],2),t._v(" "),e("has-error",{attrs:{form:t.form,field:"company_id"}})],1),t._v(" "),e("div",{staticClass:"input-group mb-3"},[e("div",{staticClass:"input-group-append"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"fas fa-user"})])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.first_name,expression:"form.first_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("first_name")},attrs:{type:"text",placeholder:t.$t("first_name")},domProps:{value:t.form.first_name},on:{input:function(a){a.target.composing||t.$set(t.form,"first_name",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"first_name"}})],1),t._v(" "),e("div",{staticClass:"input-group mb-3"},[e("div",{staticClass:"input-group-append"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"fas fa-user"})])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.last_name,expression:"form.last_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("last_name")},attrs:{type:"text",placeholder:t.$t("last_name")},domProps:{value:t.form.last_name},on:{input:function(a){a.target.composing||t.$set(t.form,"last_name",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"last_name"}})],1),t._v(" "),e("div",{staticClass:"input-group mb-3"},[e("div",{staticClass:"input-group-append"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"fas fa-envelope"})])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",placeholder:t.$t("email")},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"email"}})],1),t._v(" "),e("div",{staticClass:"input-group mb-3"},[e("div",{staticClass:"input-group-append"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"fas fa-phone"})])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("phone")},attrs:{type:"text",placeholder:t.$t("phone")},domProps:{value:t.form.phone},on:{input:function(a){a.target.composing||t.$set(t.form,"phone",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"phone"}})],1)])],2)},[],!1,null,"08af46fc",null);a.default=m.exports}}]);
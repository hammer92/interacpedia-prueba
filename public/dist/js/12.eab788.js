(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{19:function(t,e,a){"use strict";a.r(e);var s=a(0),r=a.n(s),o=a(2),n=a.n(o);function i(t,e,a,s,r,o,n){try{var i=t[o](n),l=i.value}catch(t){return void a(t)}i.done?e(l):Promise.resolve(l).then(s,r)}var l={name:"EditEmployee",props:{listaCompanies:{type:Array,default:function(){return[]}}},data:function(){return{form:new n.a({first_name:"",last_name:"",company_id:"",email:"",phone:""}),id:!1}},methods:{setData:function(t){this.id=t.id,this.form=new n.a(t),this.$refs.modalCrear.open()},save:function(){var t,e=(t=r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.put("/api/employees/".concat(this.id)).catch(function(t){console.log(t)});case 2:t.sent&&(this.$refs.modalCrear.close(),this.form.clear(),this.form.reset(),this.$emit("ok"));case 4:case"end":return t.stop()}},t,this)}),function(){var e=this,a=arguments;return new Promise(function(s,r){var o=t.apply(e,a);function n(t){i(o,s,r,n,l,"next",t)}function l(t){i(o,s,r,n,l,"throw",t)}n(void 0)})});return function(){return e.apply(this,arguments)}}()}},m=a(1),p=Object(m.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{ref:"modalCrear",attrs:{id:"modal-edit-employee",title:t.$t("edit")+" "+t.$t("employee"),"button-class":"btn btn-sm btn-primary","button-text":t.$t("edit")},on:{save:t.save}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.save(e)},keydown:function(e){return t.form.onKeydown(e)}}},[a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"fas fa-city"})])]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.company_id,expression:"form.company_id"}],staticClass:"custom-select",class:{"is-invalid":t.form.errors.has("company_id")},attrs:{placeholder:t.$t("company")},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"company_id",e.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:"",disabled:""}},[t._v("Choose...")]),t._v(" "),t._l(t.listaCompanies,function(e){return a("option",{domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"company_id"}})],1),t._v(" "),a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"fas fa-user"})])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.first_name,expression:"form.first_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("first_name")},attrs:{type:"text",placeholder:t.$t("first_name")},domProps:{value:t.form.first_name},on:{input:function(e){e.target.composing||t.$set(t.form,"first_name",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"first_name"}})],1),t._v(" "),a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"fas fa-user"})])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.last_name,expression:"form.last_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("last_name")},attrs:{type:"text",placeholder:t.$t("last_name")},domProps:{value:t.form.last_name},on:{input:function(e){e.target.composing||t.$set(t.form,"last_name",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"last_name"}})],1),t._v(" "),a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"fas fa-envelope"})])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",placeholder:t.$t("email")},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"email"}})],1),t._v(" "),a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"fas fa-phone"})])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("phone")},attrs:{type:"text",placeholder:t.$t("phone")},domProps:{value:t.form.phone},on:{input:function(e){e.target.composing||t.$set(t.form,"phone",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"phone"}})],1)])])},[],!1,null,"571f52f0",null);e.default=p.exports}}]);
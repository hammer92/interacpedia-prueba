(window.webpackJsonp=window.webpackJsonp||[]).push([[0,3,10],{15:function(t,a,e){"use strict";e.r(a);var s=e(0),n=e.n(s),i=e(21);function r(t,a,e,s,n,i,r){try{var o=t[i](r),l=o.value}catch(t){return void e(t)}o.done?a(l):Promise.resolve(l).then(s,n)}function o(t){return function(){var a=this,e=arguments;return new Promise(function(s,n){var i=t.apply(a,e);function o(t){r(i,s,n,o,l,"next",t)}function l(t){r(i,s,n,o,l,"throw",t)}o(void 0)})}}var l={name:"Index",middleware:"auth",components:{EditCompany:e(18).default,CrearCompany:i.default},data:function(){return{lista:{data:[]}}},mounted:function(){this.getData()},methods:{getData:function(){var t=o(n.a.mark(function t(){var a,e,s=arguments;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.length>0&&void 0!==s[0]?s[0]:1,this.lista={data:[]},t.next=4,this.$http("/api/companies?page=".concat(a));case 4:(e=t.sent)&&(this.lista=e.data);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),remove:function(){var t=o(n.a.mark(function t(a){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$http.delete("/api/companies/".concat(a));case 2:t.sent&&(console.log("emilinado"),this.getData(1));case 4:case"end":return t.stop()}},t,this)}));return function(a){return t.apply(this,arguments)}}(),edit:function(t){this.$refs.edit.setData(t)}}},c=e(1),u=Object(c.a)(l,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("section",{staticClass:"content-header"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row mb-2"},[e("div",{staticClass:"col-sm-6"},[e("h1",[t._v(" "+t._s(t.$t("company")))])]),t._v(" "),e("div",{staticClass:"col-sm-6 text-right"},[e("crear-company",{on:{ok:t.getData}})],1)])])]),t._v(" "),e("section",{staticClass:"content"},[e("div",{staticClass:"card card-solid"},[e("div",{staticClass:"card-header"},[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination justify-content-start"},[1!==t.lista.current_page?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"},on:{click:function(a){return a.preventDefault(),t.getData(t.lista.current_page-1)}}},[t._v(t._s(t.$t("previous")))])]):t._e(),t._v(" "),e("li",{staticClass:"page-item"},[e("p",{staticClass:"page-link"},[t._v("\n                "+t._s(t.lista.current_page)+"/"+t._s(t.lista.last_page)+" Pag.\n              ")])]),t._v(" "),t.lista.current_page!==t.lista.last_page?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getData(t.lista.current_page+1)}}},[t._v(t._s(t.$t("next")))])]):t._e()])])]),t._v(" "),e("div",{staticClass:"card-body pb-0"},[e("div",{staticClass:"row d-flex align-items-stretch"},[0===t.lista.data.length?e("div",{staticClass:"col-12"},[e("div",{staticClass:"error-page"},[t._m(0),t._v(" "),e("div",{staticClass:"error-content"},[e("h3",[t._v(" "+t._s(t.$t("data_not_found"))+" ")]),t._v(" "),e("p",[t._v(t._s(t.$t("data_not_found_mensaje"))+" "+t._s(t.$t("company")))])])])]):t._e(),t._v(" "),t._l(t.lista.data,function(a,s){return e("div",{key:s,staticClass:"col-12 col-sm-6 col-md-4 d-flex align-items-stretch"},[e("div",{staticClass:"card bg-light"},[e("div",{staticClass:"card-header text-muted border-bottom-0"},[t._v("\n                "+t._s(a.name)+"\n              ")]),t._v(" "),e("div",{staticClass:"card-body pt-0"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-7"},[e("p",{staticClass:"lead text-sm"},[e("b",[t._v(" "+t._s(a.email))])]),t._v(" "),e("p",{staticClass:"text-muted text-sm"},[e("b",[t._v(t._s(t.$t("website"))+": ")]),t._v(" "+t._s(a.website)+"\n                    ")])]),t._v(" "),e("div",{staticClass:"col-5 text-center"},[e("img",{staticClass:"img-circle img-fluid",attrs:{src:"/storage/"+a.logo,alt:""}})])])]),t._v(" "),e("div",{staticClass:"card-footer"},[e("div",{staticClass:"text-right"},[e("a",{staticClass:"btn btn-sm bg-danger",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.remove(a.id)}}},[e("i",{staticClass:"fas fa-trash-alt"})]),t._v(" "),e("a",{staticClass:"btn btn-sm btn-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.edit(a)}}},[e("i",{staticClass:"fas fa-edit"}),t._v(" "+t._s(t.$t("edit"))+"\n                  ")])])])])])})],2)])])]),t._v(" "),e("edit-company",{ref:"edit",on:{ok:t.getData}})],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{staticClass:"headline text-warning"},[a("i",{staticClass:"fas fa-exclamation-triangle text-warning"})])}],!1,null,"776b1d18",null);a.default=u.exports},18:function(t,a,e){"use strict";e.r(a);var s=e(0),n=e.n(s),i=e(2),r=e.n(i);function o(t,a,e,s,n,i,r){try{var o=t[i](r),l=o.value}catch(t){return void e(t)}o.done?a(l):Promise.resolve(l).then(s,n)}var l={name:"EditCompany",data:function(){return{form:new r.a({name:"",email:"",website:"",logofile:""}),id:!1,logo:""}},methods:{setData:function(t){this.id=t.id,this.logo=t.logo,this.form=new r.a(t),this.$refs.modalCrear.open()},save:function(){var t,a=(t=n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.submit("post","/api/companies/".concat(this.id),{transformRequest:[function(t){for(var a=new FormData,e=0,s=Object.keys(t);e<s.length;e++){var n=s[e];a.append(n,t[n])}return a}]}).catch(function(t){console.log(t)});case 2:t.sent&&(this.$refs.modalCrear.close(),this.form.clear(),this.form.reset(),this.$emit("ok"));case 4:case"end":return t.stop()}},t,this)}),function(){var a=this,e=arguments;return new Promise(function(s,n){var i=t.apply(a,e);function r(t){o(i,s,n,r,l,"next",t)}function l(t){o(i,s,n,r,l,"throw",t)}r(void 0)})});return function(){return a.apply(this,arguments)}}()}},c=e(1),u=Object(c.a)(l,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("modal",{ref:"modalCrear",attrs:{id:"modal-edit-company",title:t.$t("edit")+" "+t.$t("company"),"button-class":"btn btn-sm btn-primary","button-text":t.$t("edit")},on:{save:t.save}},[e("form",{staticClass:"text-center",on:{submit:function(a){return a.preventDefault(),t.save(a)},keydown:function(a){return t.form.onKeydown(a)}}},[e("img",{staticClass:"img-circle img-fluid",attrs:{src:"/storage/"+t.logo,alt:""}}),t._v(" "),e("div",{staticClass:"input-group mb-3"},[e("div",{staticClass:"input-group-append"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"fas fa-user"})])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",placeholder:t.$t("name")},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),e("div",{staticClass:"input-group mb-3"},[e("div",{staticClass:"input-group-append"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"fas fa-envelope"})])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",placeholder:t.$t("email")},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"email"}})],1),t._v(" "),e("div",{staticClass:"input-group mb-3"},[e("div",{staticClass:"input-group-append"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"fas fa-code"})])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.website,expression:"form.website"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("website")},attrs:{type:"text",placeholder:t.$t("website")},domProps:{value:t.form.website},on:{input:function(a){a.target.composing||t.$set(t.form,"website",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"website"}})],1),t._v(" "),e("vueFile",{model:{value:t.form.logofile,callback:function(a){t.$set(t.form,"logofile",a)},expression:"form.logofile"}})],1)])},[],!1,null,"0e228965",null);a.default=u.exports},21:function(t,a,e){"use strict";e.r(a);var s=e(0),n=e.n(s),i=e(2),r=e.n(i);function o(t,a,e,s,n,i,r){try{var o=t[i](r),l=o.value}catch(t){return void e(t)}o.done?a(l):Promise.resolve(l).then(s,n)}var l={name:"CrearCompany",data:function(){return{form:new r.a({name:"",email:"",website:"",logofile:""})}},methods:{save:function(){var t,a=(t=n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.submit("post","/api/companies",{transformRequest:[function(t){for(var a=new FormData,e=0,s=Object.keys(t);e<s.length;e++){var n=s[e];a.append(n,t[n])}return a}]}).catch(function(t){console.log(t)});case 2:t.sent&&(this.$refs.modalCrear.close(),this.form.clear(),this.form.reset(),this.$emit("ok"));case 4:case"end":return t.stop()}},t,this)}),function(){var a=this,e=arguments;return new Promise(function(s,n){var i=t.apply(a,e);function r(t){o(i,s,n,r,l,"next",t)}function l(t){o(i,s,n,r,l,"throw",t)}r(void 0)})});return function(){return a.apply(this,arguments)}}()}},c=(e(56),e(1)),u=Object(c.a)(l,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("modal",{ref:"modalCrear",attrs:{id:"modal-create-company",button:"",title:t.$t("create")+" "+t.$t("company"),"button-class":"btn btn-sm btn-primary","button-text":t.$t("create")},on:{save:t.save}},[e("template",{slot:"button-icon"},[e("i",{staticClass:"fas fa-plus"})]),t._v(" "),e("form",{on:{submit:function(a){return a.preventDefault(),t.save(a)},keydown:function(a){return t.form.onKeydown(a)}}},[e("div",{staticClass:"input-group my-3"},[e("div",{staticClass:"input-group-append"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"fas fa-user"})])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",placeholder:t.$t("name")},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),e("div",{staticClass:"input-group mb-3"},[e("div",{staticClass:"input-group-append"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"fas fa-envelope"})])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",placeholder:t.$t("email")},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"email"}})],1),t._v(" "),e("div",{staticClass:"input-group mb-3"},[e("div",{staticClass:"input-group-append"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"fas fa-code"})])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.website,expression:"form.website"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("website")},attrs:{type:"text",placeholder:t.$t("website")},domProps:{value:t.form.website},on:{input:function(a){a.target.composing||t.$set(t.form,"website",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"website"}})],1),t._v(" "),e("vueFile",{model:{value:t.form.logofile,callback:function(a){t.$set(t.form,"logofile",a)},expression:"form.logofile"}})],1)],2)},[],!1,null,"46701916",null);a.default=u.exports},22:function(t,a,e){var s=e(57);"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e(11)(s,n);s.locals&&(t.exports=s.locals)},56:function(t,a,e){"use strict";var s=e(22);e.n(s).a},57:function(t,a,e){(t.exports=e(10)(!1)).push([t.i,"\n.button-wrapper[data-v-46701916] {\n    display: flex;\n    justify-content: center;\n    margin-top: 17px;\n}\n.button[data-v-46701916] {\n    color: white;\n    font-size: 16px;\n    padding: 10px 20px;\n    background: #3fb37f;\n    cursor: pointer;\n    transition: background 0.5s;\n}\n.button[data-v-46701916]:hover {\n    background: #38d890;\n}\n.button input[data-v-46701916] {\n    display: none;\n}\n",""])}}]);
(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),o=t.n(u),c=t(4),l=t(2),i=function(e){return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{value:e.value,onChange:e.onChange}))},m=function(e){return r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement("h2",null,"add a new"),r.a.createElement("div",null,"name",r.a.createElement("input",{value:e.nameValue,onChange:e.nameHandler})),r.a.createElement("div",null,"number",r.a.createElement("input",{value:e.numberValue,onChange:e.numberHandler})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},f=function(e){var n=e.persons,t=e.removePerson;return r.a.createElement("ul",null,n.map((function(e,n){return r.a.createElement("li",{key:e.name}," ",e.name," ",e.number,r.a.createElement("button",{onClick:function(){return t(e.id)}},"delete"))})))},d=t(3),s=t.n(d),b="/api/persons",h=function(){return s.a.get(b).then((function(e){return e.data}))},p=function(e){return s.a.post(b,e).then((function(e){return e.data}))},v=function(e){return s.a.delete("".concat(b,"/").concat(e))},E=function(e,n){return s.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},w=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"notification"},n)},g=(t(37),function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),d=Object(l.a)(o,2),s=d[0],b=d[1],g=Object(a.useState)(""),j=Object(l.a)(g,2),O=j[0],S=j[1],C=Object(a.useState)(""),y=Object(l.a)(C,2),k=y[0],T=y[1],V=Object(a.useState)(!0),D=Object(l.a)(V,2),H=D[0],P=D[1],J=Object(a.useState)(null),L=Object(l.a)(J,2),N=L[0],x=L[1];Object(a.useEffect)((function(){h().then((function(e){u(e)}))}),[]);var A=H?t:t.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(w,{message:N}),r.a.createElement(i,{value:k,onChange:function(e){T(e.target.value),P(0===e.target.value.length)}}),r.a.createElement(m,{onSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name===s}));if(n){if(window.confirm("".concat(s," is already added to phonebook with number ").concat(n.number,". Do you want to replace the number with ").concat(O,"?"))){var a=Object(c.a)(Object(c.a)({},n),{},{number:O});E(n.id,a).then((function(e){u(t.map((function(t){return t.id!==n.id?t:e}))),x("Updated number for '".concat(n.name,"'")),setTimeout((function(){x(null)}),5e3)})).catch((function(e){"ValidationError"===e.response.data.name?x(e.response.data.error):(x("the person '".concat(n.name,"' was already deleted from server")),u(t.filter((function(e){return e.id!==n.id})))),setTimeout((function(){x(null)}),5e3)}))}}else p({name:s,number:O}).then((function(e){u(t.concat(e)),x("Added '".concat(e.name,"'")),setTimeout((function(){x(null)}),5e3)})).catch((function(e){console.log(e.response.data),x(e.response.data.error),setTimeout((function(){x(null)}),5e3)}));b(""),S("")},nameValue:s,numberValue:O,nameHandler:function(e){b(e.target.value)},numberHandler:function(e){S(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(f,{persons:A,removePerson:function(e){window.confirm("Delete '".concat(t.find((function(n){return n.id===e})).name,"' ?"))&&v(e).then(u(t.filter((function(n){return n.id!==e})))).then(x("Deleted '".concat(t.find((function(n){return n.id===e})).name,"'")),setTimeout((function(){x(null)}),5e3)).catch((function(n){x("the person was already deleted from server"),setTimeout((function(){x(null)}),5e3),u(t.filter((function(n){return n.id!==e})))}))}}))});o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.65bc731f.chunk.js.map
(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),r=t(14),c=t.n(r),o=t(4),l=t(2),i=function(e){return u.a.createElement("div",null,"filter shown with",u.a.createElement("input",{value:e.value,onChange:e.onChange}))},m=function(e){return u.a.createElement("form",{onSubmit:e.onSubmit},u.a.createElement("h2",null,"add a new"),u.a.createElement("div",null,"name",u.a.createElement("input",{value:e.nameValue,onChange:e.nameHandler})),u.a.createElement("div",null,"number",u.a.createElement("input",{value:e.numberValue,onChange:e.numberHandler})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"add")))},f=function(e){var n=e.persons,t=e.removePerson;return u.a.createElement("ul",null,n.map((function(e,n){return u.a.createElement("li",{key:e.name}," ",e.name," ",e.number,u.a.createElement("button",{onClick:function(){return t(e.id)}},"delete"))})))},d=t(3),s=t.n(d),b="/api/persons",h=function(){return s.a.get(b).then((function(e){return e.data}))},v=function(e){return s.a.post(b,e).then((function(e){return e.data}))},p=function(e){return s.a.delete("".concat(b,"/").concat(e))},E=function(e,n){return s.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},w=function(e){var n=e.message;return null===n?null:u.a.createElement("div",{className:"notification"},n)},j=(t(37),function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),d=Object(l.a)(c,2),s=d[0],b=d[1],j=Object(a.useState)(""),O=Object(l.a)(j,2),g=O[0],S=O[1],C=Object(a.useState)(""),y=Object(l.a)(C,2),k=y[0],T=y[1],D=Object(a.useState)(!0),H=Object(l.a)(D,2),V=H[0],P=H[1],J=Object(a.useState)(null),L=Object(l.a)(J,2),N=L[0],x=L[1];Object(a.useEffect)((function(){h().then((function(e){r(e)}))}),[]);var A=V?t:t.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())}));return u.a.createElement("div",null,u.a.createElement("h2",null,"Phonebook"),u.a.createElement(w,{message:N}),u.a.createElement(i,{value:k,onChange:function(e){T(e.target.value),P(0===e.target.value.length)}}),u.a.createElement(m,{onSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name===s}));if(n){if(window.confirm("".concat(s," is already added to phonebook with number ").concat(n.number,". Do you want to replace the number with ").concat(g,"?"))){var a=Object(o.a)(Object(o.a)({},n),{},{number:g});E(n.id,a).then((function(e){r(t.map((function(t){return t.id!==n.id?t:e}))),x("Updated number for '".concat(n.name,"'")),setTimeout((function(){x(null)}),5e3)})).catch((function(e){x("the person '".concat(n.name,"' was already deleted from server")),setTimeout((function(){x(null)}),5e3),r(t.filter((function(e){return e.id!==n.id})))}))}}else v({name:s,number:g}).then((function(e){r(t.concat(e)),x("Added '".concat(e.name,"'")),setTimeout((function(){x(null)}),5e3)}));b(""),S("")},nameValue:s,numberValue:g,nameHandler:function(e){b(e.target.value)},numberHandler:function(e){S(e.target.value)}}),u.a.createElement("h2",null,"Numbers"),u.a.createElement(f,{persons:A,removePerson:function(e){window.confirm("Delete '".concat(t.find((function(n){return n.id===e})).name,"' ?"))&&p(e).then(r(t.filter((function(n){return n.id!==e})))).then(x("Deleted '".concat(t.find((function(n){return n.id===e})).name,"'")),setTimeout((function(){x(null)}),5e3)).catch((function(n){x("the person was already deleted from server"),setTimeout((function(){x(null)}),5e3),r(t.filter((function(n){return n.id!==e})))}))}}))});c.a.render(u.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c5750b5f.chunk.js.map
(this["webpackJsonpredux-shop"]=this["webpackJsonpredux-shop"]||[]).push([[0],{418:function(t,e,n){},419:function(t,e,n){},421:function(t,e,n){},445:function(t,e){},447:function(t,e){},521:function(t,e,n){},522:function(t,e,n){},524:function(t,e,n){"use strict";n.r(e);var r=n(17),a=n(0),c=n.n(a),o=n(16),i=n.n(o),s=n(405);n(418),n(419);function u(){return Object(r.jsx)("div",{className:"app-bar",children:Object(r.jsx)("div",{children:"Constellation4"})})}var d=n(153),f=n(26),p=n.n(f),j=n(58),l=n(227),b=n(20);n(421);function O(t){return h.apply(this,arguments)}function h(){return(h=Object(j.a)(p.a.mark((function t(e){var n,r,a,c,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={},c=1,null===(n=e[0])||void 0===n||null===(r=n.data)||void 0===r||r.map((function(t,e){if(t.match(/phone number/gi)&&(a.phoneNumber=e),t.match(/first name/gi)&&(a.firstName=e),t.match(/last name/gi)&&(a.lastName=e),t.match(/city/gi)&&(a.city=e),t.match(/county/gi)&&(a.county=e),t.match(/group name/gi)&&(a.groupName=e),t.match(/zip/gi)&&(a.zip=e),t.match(/state/gi)&&(a.state=e),t.match(/^address$/i)&&(a.addresses=[e],++c),1!==c){var n=t.match("address".concat(c)),r=t.match("Address".concat(c));(n||r)&&(a.addresses.push(e),++c)}})),o=[],e.map((function(t,e){var n=[],r={};0!=e&&1!==t.data.length&&(a.addresses.map((function(e,a){""!==t.data[e]&&(n.push(t.data[e]),n.length>1&&(r["address".concat(a+1)]=n[a]))})),r.phoneNumber=t.data[a.phoneNumber],r.firstName=t.data[a.firstName],r.lastName=t.data[a.lastName],r.groupName=t.data[a.groupName],r.city=t.data[a.city],r.state=t.data[a.state],r.zip=t.data[a.zip],r.county=t.data[a.county],r.addresses=n,o.push(r))})),t.abrupt("return",o);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var v=n(96),m=n.n(v),x=n(94),g=n(221),w=n(219),y=n(385),R=n.n(y),D=function t(e){var n=this;Object(x.a)(this,t),this.instance=void 0,this._initializeResponseInterceptor=function(){n.instance.interceptors.response.use(n._handleResponse,n._handleError)},this._handleResponse=function(t){return t.data},this._handleError=function(t){return Promise.reject(t)},this.instance=R.a.create({baseURL:e,timeout:5e3}),this._initializeResponseInterceptor()},N="https://editable-dashboard-server.noskhil.repl.co/api/";var I={DOCTOR:"/doctor"},S=function(t){Object(g.a)(n,t);var e=Object(w.a)(n);function n(){var t;return Object(x.a)(this,n),(t=e.call(this,"".concat(N)))._initializeRequestInterceptor=function(){t.instance.interceptors.request.use(t._handleRequest,t._handleError)},t._handleRequest=function(t){return t.headers.authorization="Bearer ".concat(localStorage.getItem("@USER-TOKEN")),t},t.addDoctorInfo=function(){var e=Object(j.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.instance.post("".concat(I.DOCTOR,"/add/info"),n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.getDoctorInfo=Object(j.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.instance.get("".concat(I.DOCTOR,"/fetch/info"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),t.editDoctorInfo=function(){var e=Object(j.a)(p.a.mark((function e(n,r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.instance.post("".concat(I.DOCTOR,"/edit/").concat(n),r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),t.deleteDoctorInfo=function(){var e=Object(j.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.instance.get("".concat(I.DOCTOR,"/delete/").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t._initializeRequestInterceptor(),t}return n}(D),k=function t(){var e=this;Object(x.a)(this,t),this.protectedApiService=void 0,this.getDoctorInfo=function(){try{return e.protectedApiService.getDoctorInfo()}catch(t){throw t}},this.addDoctorInfo=function(t){try{return e.protectedApiService.addDoctorInfo(t)}catch(n){throw n}},this.editDoctorInfo=function(t,n){try{return e.protectedApiService.editDoctorInfo(t,n)}catch(r){throw r}},this.deleteDoctorInfo=function(t){try{return e.protectedApiService.deleteDoctorInfo(t)}catch(n){throw n}},this.protectedApiService=v.Container.get(S)},C=n(386),A=n(258),_=n.n(A),z=n(392),P=n.n(z),E=n(402),T=n.n(E),q=n(393),B=n.n(q),F=n(400),L=n.n(F),U=n(267),J=n.n(U),V=n(266),G=n.n(V),K=n(394),M=n.n(K),Z=n(395),$=n.n(Z),H=n(397),Q=n.n(H),W=n(398),X=n.n(W),Y=n(399),tt=n.n(Y),et=n(403),nt=n.n(et),rt=n(396),at=n.n(rt),ct=n(401),ot=n.n(ct),it=n(404),st=n.n(it),ut={Add:Object(a.forwardRef)((function(t,e){return Object(r.jsx)(P.a,Object(b.a)(Object(b.a)({},t),{},{ref:e}))})),Check:Object(a.forwardRef)((function(t,e){return Object(r.jsx)(B.a,Object(b.a)(Object(b.a)({},t),{},{ref:e}))})),Clear:Object(a.forwardRef)((function(t,e){return Object(r.jsx)(G.a,Object(b.a)(Object(b.a)({},t),{},{ref:e}))})),Delete:Object(a.forwardRef)((function(t,e){return Object(r.jsx)(M.a,Object(b.a)(Object(b.a)({},t),{},{ref:e}))})),DetailPanel:Object(a.forwardRef)((function(t,e){return Object(r.jsx)(J.a,Object(b.a)(Object(b.a)({},t),{},{ref:e}))})),Edit:Object(a.forwardRef)((function(t,e){return Object(r.jsx)($.a,Object(b.a)(Object(b.a)({},t),{},{ref:e}))})),Export:Object(a.forwardRef)((function(t,e){return Object(r.jsx)(at.a,Object(b.a)(Object(b.a)({},t),{},{ref:e}))})),Filter:Object(a.forwardRef)((function(t,e){return Object(r.jsx)(Q.a,Object(b.a)(Object(b.a)({},t),{},{ref:e}))})),FirstPage:Object(a.forwardRef)((function(t,e){return Object(r.jsx)(X.a,Object(b.a)(Object(b.a)({},t),{},{ref:e}))})),LastPage:Object(a.forwardRef)((function(t,e){return Object(r.jsx)(tt.a,Object(b.a)(Object(b.a)({},t),{},{ref:e}))})),NextPage:Object(a.forwardRef)((function(t,e){return Object(r.jsx)(J.a,Object(b.a)(Object(b.a)({},t),{},{ref:e}))})),PreviousPage:Object(a.forwardRef)((function(t,e){return Object(r.jsx)(L.a,Object(b.a)(Object(b.a)({},t),{},{ref:e}))})),ResetSearch:Object(a.forwardRef)((function(t,e){return Object(r.jsx)(G.a,Object(b.a)(Object(b.a)({},t),{},{ref:e}))})),Search:Object(a.forwardRef)((function(t,e){return Object(r.jsx)(ot.a,Object(b.a)(Object(b.a)({},t),{},{ref:e}))})),SortArrow:Object(a.forwardRef)((function(t,e){return Object(r.jsx)(T.a,Object(b.a)(Object(b.a)({},t),{},{ref:e}))})),ThirdStateCheck:Object(a.forwardRef)((function(t,e){return Object(r.jsx)(nt.a,Object(b.a)(Object(b.a)({},t),{},{ref:e}))})),ViewColumn:Object(a.forwardRef)((function(t,e){return Object(r.jsx)(st.a,Object(b.a)(Object(b.a)({},t),{},{ref:e}))}))},dt=[{title:"Phone Number",field:"phoneNumber",type:"numeric",validate:function(t){var e;return 10===(null===(e=t.phoneNumber)||void 0===e?void 0:e.toString().length)}},{title:"First Name",field:"firstName",type:"string",validate:function(t){var e;return(null===(e=t.firstName)||void 0===e?void 0:e.length)>0}},{title:"Last Name",field:"lastName",type:"string",validate:function(t){var e;return(null===(e=t.lastName)||void 0===e?void 0:e.length)>0}},{title:"Group Name",field:"groupName",type:"string",validate:function(t){var e;return(null===(e=t.groupName)||void 0===e?void 0:e.length)>0}},{title:"City",field:"city",type:"string",validate:function(t){var e;return(null===(e=t.city)||void 0===e?void 0:e.length)>0}},{title:"State",field:"state",type:"string",validate:function(t){var e;return(null===(e=t.state)||void 0===e?void 0:e.length)>0}},{title:"Zip",field:"zip",type:"numeric",validate:function(t){var e;return 5===(null===(e=t.zip)||void 0===e?void 0:e.toString().length)}},{title:"County",field:"county",type:"string",validate:function(t){var e;return(null===(e=t.county)||void 0===e?void 0:e.length)>0}},{title:"Address",field:"address",type:"string",validate:function(t){var e;return(null===(e=t.address)||void 0===e?void 0:e.length)>0}}];function ft(){var t=Object(a.useState)(dt),e=Object(l.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)([]),i=Object(l.a)(o,2),s=i[0],u=i[1],f=Object(a.useState)([]),b=Object(l.a)(f,2),h=b[0],v=b[1];Object(a.useEffect)((function(){x()}),[]);var x=function(){var t=Object(j.a)(p.a.mark((function t(){var e,n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=m.a.get(k),t.next=3,e.getDoctorInfo();case 3:n=t.sent,r=g(n),u(r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(t){var e=t,n=h,r=dt;return e.map((function(t){t.address=t.addresses[0],t.addresses.map((function(e,a){if(a>0){var c=a+1;t["address".concat(c)]=e,n.includes(c)||(r.push({title:"Address".concat(c),field:"address".concat(c),type:"string",addressIndex:c}),n.push(c))}}))})),c(r),v(n),e},w=function(){var t=Object(j.a)(p.a.mark((function t(e){var n,r,a,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=m.a.get(k),t.next=3,n.addDoctorInfo(e);case 3:r=t.sent,a=s.concat(r),c=g(a),u(c);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:n=t.sent,w(n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"DoctorInfo",children:[Object(r.jsx)(C.a,{onDrop:y,onError:function(t,e,n,r){console.log(t)},addRemoveButton:!0,removeButtonColor:"#659cef",onRemoveFile:function(t){},children:Object(r.jsx)("span",{children:"Drop CSV file here or click to upload."})}),Object(r.jsx)(_.a,{icons:ut,title:"Doctor/Clinic Info",columns:n,data:s,options:{pageSize:10},editable:{onRowAdd:function(t){return new Promise((function(e,n){setTimeout(Object(j.a)(p.a.mark((function n(){var r,a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u([].concat(Object(d.a)(s),[t])),(r=t).addresses=[t.address],h.map((function(e){t["address".concat(e)]&&r.addresses.push(t["address".concat(e)])})),a=m.a.get(k),n.next=7,a.addDoctorInfo([r]);case 7:n.sent,e();case 9:case"end":return n.stop()}}),n)}))),1e3)}))},onRowUpdate:function(t,e){return new Promise((function(n,r){setTimeout(Object(j.a)(p.a.mark((function r(){var a,c,o,i;return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=Object(d.a)(s),c=e.tableData.id,a[c]=t,u(Object(d.a)(a)),(o=t).addresses=[t.address],h.map((function(e){t["address".concat(e)]&&o.addresses.push(t["address".concat(e)])})),i=m.a.get(k),r.next=10,i.editDoctorInfo(t._id,o);case 10:r.sent,n();case 12:case"end":return r.stop()}}),r)}))),1e3)}))},onRowDelete:function(t){return new Promise((function(e,n){setTimeout(Object(j.a)(p.a.mark((function n(){var r,a,c;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Object(d.a)(s),a=t.tableData.id,r.splice(a,1),u(r),c=m.a.get(k),n.next=7,c.deleteDoctorInfo(t._id);case 7:n.sent,e();case 9:case"end":return n.stop()}}),n)}))),1e3)}))}}})]})}n(521);function pt(){return Object(r.jsx)("div",{className:"footer-container",children:"\xa9 2021 Shyam Akhil."})}n(522);var jt=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(u,{}),Object(r.jsx)(ft,{}),Object(r.jsx)(pt,{})]})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(s.a,{children:Object(r.jsx)(jt,{})})}),document.getElementById("root"))}},[[524,1,2]]]);
//# sourceMappingURL=main.784d5221.chunk.js.map
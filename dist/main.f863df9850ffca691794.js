webpackJsonp([0],[function(e,t,n){(function(e){"use strict";n(1);var t=n(3);(0,t.getUsers)().then(function(n){var r="";n.forEach(function(e){r+='<tr>\n      <td><a href="#" data-id="'+e.id+'" class="deleteUser">Delete</a></td>\n      <td>'+e.id+"</td>\n      <td>"+e.firstName+"</td>\n      <td>"+e.lastName+"</td>\n      <td>"+e.email+"</td>\n      </tr>"}),e.document.getElementById("users").innerHTML=r;var o=e.document.getElementsByClassName("deleteUser");Array.from(o,function(e){e.onclick=function(e){var n=e.target;e.preventDefault(),(0,t.deleteUser)(n.attributes["data-id"].value);var r=n.parentNode.parentNode;r.parentNode.removeChild(r)}})})}).call(t,function(){return this}())},function(e,t){},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){return c("users")}function u(e){return a("users/"+e)}function c(e){return window.fetch(f+e).then(d,i)}function a(e){var t=new Request(f+e,{method:"DELETE"});return window.fetch(t).then(d,i)}function d(e){return e.json()}function i(e){console.log(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getUsers=o,t.deleteUser=u,n(4);var s=n(5),l=r(s),f=(0,l["default"])()},,function(e,t){"use strict";function n(){return r("useMockApi")?"http://localhost:8081/":"/"}function r(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),r=n.exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n}]);
//# sourceMappingURL=main.f863df9850ffca691794.js.map
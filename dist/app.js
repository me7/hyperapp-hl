!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()}(0,function(){"use strict";!function(n,e,r,o){var t,i=[],u=o&&o.children[0],l=function n(e,r){return e&&{name:e.nodeName.toLowerCase(),props:{},children:r.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e,r)})}}(u,[].map);return c(function e(r,o,t){for(var i in t)"function"==typeof t[i]?function(e,i){t[e]=function(e){return o=s(r,n),"function"==typeof(e=i(e))&&(e=e(o,t)),e&&e!==o&&!e.then&&c(n=a(r,p(o,e),n,{})),e}}(i,t[i]):e(r.concat(i),o[i]=o[i]||{},t[i]=p(t[i]))}([],n=p(n),e=p(e))),e;function f(f){for(t=!t,f=r(n,e),o&&!t&&(u=function n(e,r,o,t,u,l){if(t===o);else if(null==o)r=e.insertBefore(v(t,u),r);else if(t.name&&t.name===o.name){!function(n,e,r){for(var o in p(e,r))r[o]!==("value"===o||"checked"===o?n[o]:e[o])&&h(n,o,r[o],e[o]);r.onupdate&&i.push(function(){r.onupdate(n,e)})}(r,o.props,t.props);for(var f=[],c={},a={},s=0;s<o.children.length;s++){f[s]=r.childNodes[s];var y=o.children[s],g=d(y);null!=g&&(c[g]=[f[s],y])}for(var s=0,N=0;N<t.children.length;){var y=o.children[s],b=t.children[N],g=d(y),w=d(b);if(a[g])s++;else if(null==w)null==g&&(n(r,f[s],y,b,u),N++),s++;else{var A=c[w]||[];g===w?(n(r,A[0],A[1],b,u),s++):A[0]?n(r,r.insertBefore(A[0],f[s]),A[1],b,u):n(r,f[s],null,b,u),N++,a[w]=b}}for(;s<o.children.length;){var y=o.children[s];null==d(y)&&m(r,f[s],y),s++}for(var s in c)a[c[s][1].props.key]||m(r,c[s][0],c[s][1])}else t.name===o.name?r.nodeValue=t:(r=e.insertBefore(v(t,u),l=r),m(e,l,o));return r}(o,u,l,l=f));f=i.pop();)f()}function c(){t||(t=!t,setTimeout(f))}function p(n,e){var r={};for(var o in n)r[o]=n[o];for(var o in e)r[o]=e[o];return r}function a(n,e,r,o){return n.length?(o[n[0]]=1<n.length?a(n.slice(1),e,r[n[0]],{}):e,p(r,o)):e}function s(n,e){for(var r=0;r<n.length;r++)e=e[n[r]];return e}function d(n){return n&&n.props?n.props.key:null}function h(n,e,r,o){if("key"===e);else if("style"===e)for(var t in p(o,r))n[e][t]=null==r||null==r[t]?"":r[t];else{try{n[e]=null==r?"":r}catch(n){}"function"!=typeof r&&(null==r||!1===r?n.removeAttribute(e):n.setAttribute(e,r))}}function v(n,e){var r="string"==typeof n||"number"==typeof n?document.createTextNode(n):(e=e||"svg"===n.name)?document.createElementNS("http://www.w3.org/2000/svg",n.name):document.createElement(n.name);if(n.props){n.props.oncreate&&i.push(function(){n.props.oncreate(r)});for(var o=0;o<n.children.length;o++)r.appendChild(v(n.children[o],e));for(var t in n.props)h(r,t,n.props[t])}return r}function m(n,e,r,o){function t(){n.removeChild(function n(e,r,o){if(o=r.props){for(var t=0;t<r.children.length;t++)n(e.childNodes[t],r.children[t]);o.ondestroy&&o.ondestroy(e)}return e}(e,r))}r.props&&(o=r.props.onremove)?o(e,t):t()}}({},{},function(n,e){return function(n,e){for(var r,o=arguments,t=[],i=[],u=arguments.length;u-- >2;)i.push(o[u]);for(;i.length;)if(Array.isArray(r=i.pop()))for(u=r.length;u--;)i.push(r[u]);else null==r||!0===r||!1===r||t.push(r);return"string"==typeof n?{name:n,props:e||{},children:t}:n(e||{},t)}("h1",{},"HyperApp Hot Reload")},document.body)});

(self.webpackChunkgatsby_blogging=self.webpackChunkgatsby_blogging||[]).push([[678],{6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,s,u,l;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(!o(e[s],i[s]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;for(l=e.entries();!(s=l.next()).done;)if(!o(s.value[1],i.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,u[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!e.$$typeof)&&!o(e[u[s]],i[u[s]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,a=r(7294),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):r&&(s=r(s))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},9230:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ve}});var n,a,o,i,c=r(7294),s=r(1597),u=r(5991),l=r(7059),f=r(5697),p=r.n(f),d=r(4839),m=r.n(d),y=r(2993),h=r.n(y),b=r(6494),g=r.n(b),v="bodyAttributes",T="htmlAttributes",E="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},A=(Object.keys(w).map((function(e){return w[e]})),"charset"),O="cssText",C="href",S="http-equiv",N="innerHTML",j="itemprop",k="name",P="property",I="rel",x="src",L="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",_="defer",D="encodeSpecialCharacters",B="onChangeClientState",H="titleTemplate",U=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),q=[w.NOSCRIPT,w.SCRIPT,w.STYLE],F="data-react-helmet",Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},K=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},G=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},$=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=te(e,w.TITLE),r=te(e,H);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=te(e,R);return t||n||void 0},J=function(e){return te(e,B)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return V({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},ee=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ie("Helmet: "+e+' should be of type "Array". Instead found type "'+Y(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||r===I&&"canonical"===e[r].toLowerCase()||s===I&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==N&&c!==O&&c!==j||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][u]&&(a[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],s=g()({},n[c],a[c]);n[c]=s}return e}),[]).reverse()},te=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},re=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){re(e)}),0)}),ne=function(e){return clearTimeout(e)},ae="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||re:r.g.requestAnimationFrame||re,oe="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ne:r.g.cancelAnimationFrame||ne,ie=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ce=null,se=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;fe(w.BODY,n),fe(w.HTML,a),le(f,p);var d={baseTag:pe(w.BASE,r),linkTags:pe(w.LINK,o),metaTags:pe(w.META,i),noscriptTags:pe(w.NOSCRIPT,c),scriptTags:pe(w.SCRIPT,u),styleTags:pe(w.STYLE,l)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(y[e]=d[e].oldTags)})),t&&t(),s(e,m,y)},ue=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ue(e)),fe(w.TITLE,t)},fe=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(F),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";r.getAttribute(s)!==u&&r.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var l=o.indexOf(s);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute(F):r.getAttribute(F)!==i.join(",")&&r.setAttribute(F,i.join(","))}},pe=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===N)r.innerHTML=t.innerHTML;else if(n===O)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(F,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},de=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[M[r]||r]=e[r],t}),t)},ye=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[F]=!0,a=me(r,n),[c.createElement(w.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=de(r),o=ue(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+$(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+$(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case v:case T:return{toComponent:function(){return me(t)},toString:function(){return de(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[F]=!0,n);return Object.keys(t).forEach((function(e){var r=M[e]||e;if(r===N||r===O){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===N||e===O)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+$(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},he=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:ye(w.BASE,t,n),bodyAttributes:ye(v,r,n),htmlAttributes:ye(T,a,n),link:ye(w.LINK,o,n),meta:ye(w.META,i,n),noscript:ye(w.NOSCRIPT,c,n),script:ye(w.SCRIPT,s,n),style:ye(w.STYLE,u,n),title:ye(w.TITLE,{title:f,titleAttributes:p},n)}},be=m()((function(e){return{baseTag:X([C,L],e),bodyAttributes:Q(v,e),defer:te(e,_),encode:te(e,D),htmlAttributes:Q(T,e),linkTags:ee(w.LINK,[I,C],e),metaTags:ee(w.META,[k,A,S,P,j],e),noscriptTags:ee(w.NOSCRIPT,[N],e),onChangeClientState:J(e),scriptTags:ee(w.SCRIPT,[x,N],e),styleTags:ee(w.STYLE,[O],e),title:Z(e),titleAttributes:Q(E,e)}}),(function(e){ce&&oe(ce),e.defer?ce=ae((function(){se(e,(function(){ce=null}))})):(se(e),ce=null)}),he)((function(){return null})),ge=(a=be,i=o=function(e){function t(){return z(this,t),G(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!h()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return V({},n,((t={})[r.type]=[].concat(n[r.type]||[],[V({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case w.TITLE:return V({},a,((t={})[n.type]=i,t.titleAttributes=V({},o),t));case w.BODY:return V({},a,{bodyAttributes:V({},o)});case w.HTML:return V({},a,{htmlAttributes:V({},o)})}return V({},a,((r={})[n.type]=V({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=V({},t);return Object.keys(e).forEach((function(t){var n;r=V({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[U[r]||r]=e[r],t}),t)}(W(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=W(e,["children"]),n=V({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(a,n)},K(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:p().object,bodyAttributes:p().object,children:p().oneOfType([p().arrayOf(p().node),p().node]),defaultTitle:p().string,defer:p().bool,encodeSpecialCharacters:p().bool,htmlAttributes:p().object,link:p().arrayOf(p().object),meta:p().arrayOf(p().object),noscript:p().arrayOf(p().object),onChangeClientState:p().func,script:p().arrayOf(p().object),style:p().arrayOf(p().object),title:p().string,titleAttributes:p().object,titleTemplate:p().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=he({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ge.renderStatic=ge.rewind;function ve(e){var t=e.data,r=t.metadata.siteMetadata,n=r.title,a=r.description,o=t.projects.nodes,i=t.travels.nodes;return c.createElement(c.Fragment,null,c.createElement(ge,null,c.createElement("title",null,n)),c.createElement(u.Z,null,c.createElement("div",{className:"mainheading"},c.createElement("h1",{className:"sitetitle"},n),c.createElement("p",{className:"lead"},a)),c.createElement("section",{className:"featured-posts"},c.createElement("div",{className:"section-title"},c.createElement("h2",null,c.createElement("span",null,"Projects"))),c.createElement("div",{className:"card-columns listfeaturedtag"},o.map((function(e){return c.createElement("div",{className:"card",key:e.id},c.createElement("div",{className:"row"},c.createElement("div",{className:"col-md-5 wrapthumbnail"},c.createElement(s.rU,{to:"/blogs/"+e.frontmatter.slug,key:e.id},c.createElement(l.G,{image:e.frontmatter.featuredImg.childImageSharp.gatsbyImageData,alt:""}))),c.createElement("div",{className:"col-md-7"},c.createElement("div",{className:"card-block"},c.createElement("h2",{className:"card-title"},c.createElement(s.rU,{to:"/blogs/"+e.frontmatter.slug,key:e.id},e.frontmatter.title)),c.createElement("h4",{className:"card-text"},e.frontmatter.description.substring(0,200)),c.createElement("div",{className:"metafooter"},c.createElement("div",{className:"wrapfooter"},c.createElement("span",{className:"author-meta"},c.createElement("span",{className:"post-date"},e.frontmatter.date),c.createElement("span",{className:"post-read"},"6 min read"))))))))})))),c.createElement("section",{className:"recent-posts"},c.createElement("div",{className:"section-title"},c.createElement("h2",null,c.createElement("span",null,"Travels"))),c.createElement("div",{className:"card-columns listrecent"},i.map((function(e){return c.createElement("div",{className:"card",key:e.id},c.createElement(s.rU,{to:"/blogs/"+e.frontmatter.slug,key:e.id},c.createElement(l.G,{image:e.frontmatter.featuredImg.childImageSharp.gatsbyImageData,alt:""})),c.createElement("div",{className:"card-block"},c.createElement("h2",{className:"card-title"},c.createElement(s.rU,{to:"/blogs/"+e.frontmatter.slug,key:e.id},e.frontmatter.title)),c.createElement("h4",{className:"card-text"},e.frontmatter.description.substring(0,200),"..."),c.createElement("div",{className:"metafooter"},c.createElement("div",{className:"wrapfooter"},c.createElement("span",{className:"author-meta"},c.createElement("span",{className:"post-date"},e.frontmatter.date),c.createElement("span",{className:"post-read"},"6 min read"))))))}))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-cd96e78a15d0503e269a.js.map
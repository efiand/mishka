(()=>{function x(){}function ie(t,e){for(let n in e)t[n]=e[n];return t}function re(t){return t()}function me(){return Object.create(null)}function L(t){t.forEach(re)}function X(t){return typeof t=="function"}function q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ye(t){return Object.keys(t).length===0}var J=!1;function qe(){J=!0}function Ne(){J=!1}function je(t,e,n,r){for(;t<e;){let s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function Re(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){let i=[];for(let c=0;c<e.length;c++){let a=e[c];a.claim_order!==void 0&&i.push(a)}e=i}let n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let i=0;i<e.length;i++){let c=e[i].claim_order,a=(s>0&&e[n[s]].claim_order<=c?s+1:je(1,s,m=>e[n[m]].claim_order,c))-1;r[i]=n[a]+1;let _=a+1;n[_]=i,s=Math.max(_,s)}let f=[],l=[],o=e.length-1;for(let i=n[s]+1;i!=0;i=r[i-1]){for(f.push(e[i-1]);o>=i;o--)l.push(e[o]);o--}for(;o>=0;o--)l.push(e[o]);f.reverse(),l.sort((i,c)=>i.claim_order-c.claim_order);for(let i=0,c=0;i<l.length;i++){for(;c<f.length&&l[i].claim_order>=f[c].claim_order;)c++;let a=c<f.length?f[c]:null;t.insertBefore(l[i],a)}}function b(t,e){if(J){for(Re(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function k(t,e,n){J&&!n?b(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function Y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function S(){return O(" ")}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t){return Array.from(t.childNodes)}function Pe(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function be(t,e,n,r,s=!1){Pe(t);let f=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){let o=t[l];if(e(o)){let i=n(o);return i===void 0?t.splice(l,1):t[l]=i,s||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){let o=t[l];if(e(o)){let i=n(o);return i===void 0?t.splice(l,1):t[l]=i,s?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return r()})();return f.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,f}function Be(t,e,n,r){return be(t,s=>s.nodeName===e,s=>{let f=[];for(let l=0;l<s.attributes.length;l++){let o=s.attributes[l];n[o.name]||f.push(o.name)}f.forEach(l=>s.removeAttribute(l))},()=>r(e))}function F(t,e,n){return Be(t,e,n,v)}function C(t,e){return be(t,n=>n.nodeType===3,n=>{let r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>O(e),!0)}function $(t){return C(t," ")}function D(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ve(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function se(t,e,n){t.classList[n?"add":"remove"](e)}var le;function P(t){le=t}var R=[];var pe=[],K=[],ge=[],He=Promise.resolve(),te=!1;function Ie(){te||(te=!0,He.then(Fe))}function ne(t){K.push(t)}var ee=new Set,G=0;function Fe(){let t=le;do{for(;G<R.length;){let e=R[G];G++,P(e),We(e.$$)}for(P(null),R.length=0,G=0;pe.length;)pe.pop()();for(let e=0;e<K.length;e+=1){let n=K[e];ee.has(n)||(ee.add(n),n())}K.length=0}while(R.length);for(;ge.length;)ge.pop()();te=!1,ee.clear(),P(t)}function We(t){if(t.fragment!==null){t.update(),L(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ne)}}var U=new Set,T;function B(){T={r:0,c:[],p:T}}function H(){T.r||L(T.c),T=T.p}function E(t,e){t&&t.i&&(U.delete(t),t.i(e))}function M(t,e,n,r){if(t&&t.o){if(U.has(t))return;U.add(t),T.c.push(()=>{U.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}var tt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function oe(t,e){let n={},r={},s={$$scope:1},f=t.length;for(;f--;){let l=t[f],o=e[f];if(o){for(let i in l)i in o||(r[i]=1);for(let i in o)s[i]||(n[i]=o[i],s[i]=1);t[f]=o}else for(let i in l)s[i]=1}for(let l in r)l in n||(n[l]=void 0);return n}function ce(t){return typeof t=="object"&&t!==null?t:{}}function ue(t){t&&t.c()}function ae(t,e){t&&t.l(e)}function V(t,e,n,r){let{fragment:s,after_update:f}=t.$$;s&&s.m(e,n),r||ne(()=>{let l=t.$$.on_mount.map(re).filter(X);t.$$.on_destroy?t.$$.on_destroy.push(...l):L(l),t.$$.on_mount=[]}),f.forEach(ne)}function I(t,e){let n=t.$$;n.fragment!==null&&(L(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ze(t,e){t.$$.dirty[0]===-1&&(R.push(t),Ie(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(t,e,n,r,s,f,l,o=[-1]){let i=le;P(t);let c=t.$$={fragment:null,ctx:[],props:f,update:x,not_equal:s,bound:me(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:me(),dirty:o,skip_bound:!1,root:e.target||i.$$.root};l&&l(c.root);let a=!1;if(c.ctx=n?n(t,e.props||{},(_,m,...d)=>{let u=d.length?d[0]:m;return c.ctx&&s(c.ctx[_],c.ctx[_]=u)&&(!c.skip_bound&&c.bound[_]&&c.bound[_](u),a&&ze(t,_)),m}):[],c.update(),a=!0,L(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){qe();let _=w(e.target);c.fragment&&c.fragment.l(_),_.forEach(g)}else c.fragment&&c.fragment.c();e.intro&&E(t.$$.fragment),V(t,e.target,e.anchor,e.customElement),Ne(),Fe()}P(i)}var Ge;typeof HTMLElement=="function"&&(Ge=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(re).filter(X);for(let e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){L(this.$$.on_disconnect)}$destroy(){I(this,1),this.$destroy=x}$on(t,e){if(!X(e))return x;let n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}$set(t){this.$$set&&!ye(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});var A=class{$destroy(){I(this,1),this.$destroy=x}$on(e,n){if(!X(n))return x;let r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!ye(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};var fe=(t,e)=>{let[n="."]=e||[];return/(\.|\?|!|,|:|…)$/.test(t)?t:`${t}${n}`},Q=(t,e=null,n={})=>t?new t({hydrate:!0,props:n,target:e}):null;function Ke(t){let e,n=`url('../images/icons.svg#${t[10]}')`;return{c(){e=v("input"),this.h()},l(r){e=F(r,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0,pattern:!0}),this.h()},h(){h(e,"class","Field__input"),h(e,"type",t[7]),h(e,"name",t[3]),e.value=t[8],h(e,"placeholder",t[0]),h(e,"pattern",t[4]),e.required=t[5],se(e,"Field__input_iconable",t[10]),ve(e,"--icon",n)},m(r,s){k(r,e,s)},p(r,s){s&128&&h(e,"type",r[7]),s&8&&h(e,"name",r[3]),s&256&&e.value!==r[8]&&(e.value=r[8]),s&1&&h(e,"placeholder",r[0]),s&16&&h(e,"pattern",r[4]),s&32&&(e.required=r[5])},d(r){r&&g(e)}}}function Ue(t){let e,n;return{c(){e=v("textarea"),this.h()},l(r){e=F(r,"TEXTAREA",{class:!0,name:!0,placeholder:!0}),w(e).forEach(g),this.h()},h(){h(e,"class","Field__input Field__input_area"),h(e,"name",t[3]),h(e,"placeholder",t[0]),e.required=t[5],e.value=n=t[8]||""},m(r,s){k(r,e,s)},p(r,s){s&8&&h(e,"name",r[3]),s&1&&h(e,"placeholder",r[0]),s&32&&(e.required=r[5]),s&256&&n!==(n=r[8]||"")&&(e.value=n)},d(r){r&&g(e)}}}function Xe(t){let e,n,r=fe(t[6],[":"])+"",s,f,l;function o(a,_){return a[1]?Ue:Ke}let i=o(t,-1),c=i(t);return{c(){e=v("label"),n=v("span"),s=O(r),f=S(),c.c(),this.h()},l(a){e=F(a,"LABEL",{class:!0});var _=w(e);n=F(_,"SPAN",{});var m=w(n);s=C(m,r),m.forEach(g),f=$(_),c.l(_),_.forEach(g),this.h()},h(){se(n,"visuallyHidden",t[9]),h(e,"class",l="Field "+t[2])},m(a,_){k(a,e,_),b(e,n),b(n,s),b(e,f),c.m(e,null)},p(a,[_]){_&64&&r!==(r=fe(a[6],[":"])+"")&&D(s,r),i===(i=o(a,_))&&c?c.p(a,_):(c.d(1),c=i(a),c&&(c.c(),c.m(e,null))),_&4&&l!==(l="Field "+a[2])&&h(e,"class",l)},i:x,o:x,d(a){a&&g(e),c.d()}}}function Je(t,e,n){let{area:r=!1,bemMix:s="",name:f=null,pattern:l=null,placeholder:o="",required:i=!1,title:c=o,type:a="text",value:_=null}=e,m=c===o,d=a==="text"?null:a;return o=`${o}${i?"*":""}`,t.$$set=u=>{"area"in u&&n(1,r=u.area),"bemMix"in u&&n(2,s=u.bemMix),"name"in u&&n(3,f=u.name),"pattern"in u&&n(4,l=u.pattern),"placeholder"in u&&n(0,o=u.placeholder),"required"in u&&n(5,i=u.required),"title"in u&&n(6,c=u.title),"type"in u&&n(7,a=u.type),"value"in u&&n(8,_=u.value)},[o,r,s,f,l,i,c,a,_,m,d]}var _e=class extends A{constructor(e){super(),N(this,e,Je,Xe,q,{area:1,bemMix:2,name:3,pattern:4,placeholder:0,required:5,title:6,type:7,value:8})}},we=_e;function Ye(t){let e,n,r,s,f,l;return{c(){e=v("label"),n=v("input"),s=S(),f=O(t[3]),this.h()},l(o){e=F(o,"LABEL",{class:!0});var i=w(e);n=F(i,"INPUT",{class:!0,type:!0,name:!0}),s=$(i),f=C(i,t[3]),i.forEach(g),this.h()},h(){h(n,"class",r="Checker__input Checker__input_"+t[4]),h(n,"type",t[4]),h(n,"name",t[2]),n.value=t[5],n.checked=t[1],h(e,"class",l="Checker "+t[0])},m(o,i){k(o,e,i),b(e,n),b(e,s),b(e,f)},p(o,[i]){i&16&&r!==(r="Checker__input Checker__input_"+o[4])&&h(n,"class",r),i&16&&h(n,"type",o[4]),i&4&&h(n,"name",o[2]),i&32&&n.value!==o[5]&&(n.value=o[5]),i&2&&(n.checked=o[1]),i&8&&D(f,o[3]),i&1&&l!==(l="Checker "+o[0])&&h(e,"class",l)},i:x,o:x,d(o){o&&g(e)}}}function Ve(t,e,n){let{bemMix:r="",checked:s=!1,name:f=null,title:l="",type:o="checkbox",value:i=null}=e;return t.$$set=c=>{"bemMix"in c&&n(0,r=c.bemMix),"checked"in c&&n(1,s=c.checked),"name"in c&&n(2,f=c.name),"title"in c&&n(3,l=c.title),"type"in c&&n(4,o=c.type),"value"in c&&n(5,i=c.value)},[r,s,f,l,o,i]}var de=class extends A{constructor(e){super(),N(this,e,Ve,Ye,q,{bemMix:0,checked:1,name:2,title:3,type:4,value:5})}},Ee=de;function ke(t,e,n){let r=t.slice();return r[6]=e[n].checkers!==void 0?e[n].checkers:[],r[7]=e[n].fields!==void 0?e[n].fields:[],r[8]=e[n].title,r}function xe(t,e,n){let r=t.slice();return r[11]=e[n],r}function Se(t,e,n){let r=t.slice();return r[14]=e[n],r}function $e(t){let e;return{c(){e=v("p"),this.h()},l(n){e=F(n,"P",{class:!0});var r=w(e);r.forEach(g),this.h()},h(){h(e,"class","Form__prepend")},m(n,r){k(n,e,r),e.innerHTML=t[3]},p(n,r){r&8&&(e.innerHTML=n[3])},d(n){n&&g(e)}}}function Me(t){let e,n,r=t[6],s=[];for(let l=0;l<r.length;l+=1)s[l]=Oe(Se(t,r,l));let f=l=>M(s[l],1,1,()=>{s[l]=null});return{c(){e=v("ul");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=F(l,"UL",{class:!0});var o=w(e);for(let i=0;i<s.length;i+=1)s[i].l(o);o.forEach(g),this.h()},h(){h(e,"class","Form__checkers")},m(l,o){k(l,e,o);for(let i=0;i<s.length;i+=1)s[i].m(e,null);n=!0},p(l,o){if(o&16){r=l[6];let i;for(i=0;i<r.length;i+=1){let c=Se(l,r,i);s[i]?(s[i].p(c,o),E(s[i],1)):(s[i]=Oe(c),s[i].c(),E(s[i],1),s[i].m(e,null))}for(B(),i=r.length;i<s.length;i+=1)f(i);H()}},i(l){if(!n){for(let o=0;o<r.length;o+=1)E(s[o]);n=!0}},o(l){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)M(s[o]);n=!1},d(l){l&&g(e),Y(s,l)}}}function Oe(t){let e,n,r,s,f=[t[14]],l={};for(let o=0;o<f.length;o+=1)l=ie(l,f[o]);return n=new Ee({props:l}),{c(){e=v("li"),ue(n.$$.fragment),r=S(),this.h()},l(o){e=F(o,"LI",{class:!0});var i=w(e);ae(n.$$.fragment,i),r=$(i),i.forEach(g),this.h()},h(){h(e,"class","Form__checker")},m(o,i){k(o,e,i),V(n,e,null),b(e,r),s=!0},p(o,i){let c=i&16?oe(f,[ce(o[14])]):{};n.$set(c)},i(o){s||(E(n.$$.fragment,o),s=!0)},o(o){M(n.$$.fragment,o),s=!1},d(o){o&&g(e),I(n)}}}function Ae(t){let e,n,r,s=[t[11]],f={};for(let l=0;l<s.length;l+=1)f=ie(f,s[l]);return n=new we({props:f}),{c(){e=v("p"),ue(n.$$.fragment),this.h()},l(l){e=F(l,"P",{class:!0});var o=w(e);ae(n.$$.fragment,o),o.forEach(g),this.h()},h(){h(e,"class","Form__field")},m(l,o){k(l,e,o),V(n,e,null),r=!0},p(l,o){let i=o&16?oe(s,[ce(l[11])]):{};n.$set(i)},i(l){r||(E(n.$$.fragment,l),r=!0)},o(l){M(n.$$.fragment,l),r=!1},d(l){l&&g(e),I(n)}}}function Ce(t){let e,n,r=t[8]+"",s,f,l,o,i=t[6].length&&Me(t),c=t[7],a=[];for(let m=0;m<c.length;m+=1)a[m]=Ae(xe(t,c,m));let _=m=>M(a[m],1,1,()=>{a[m]=null});return{c(){e=v("fieldset"),n=v("legend"),s=O(r),f=S(),i&&i.c(),l=S();for(let m=0;m<a.length;m+=1)a[m].c();this.h()},l(m){e=F(m,"FIELDSET",{class:!0});var d=w(e);n=F(d,"LEGEND",{class:!0});var u=w(n);s=C(u,r),u.forEach(g),f=$(d),i&&i.l(d),l=$(d);for(let p=0;p<a.length;p+=1)a[p].l(d);d.forEach(g),this.h()},h(){h(n,"class","Form__title"),h(e,"class","Form__set")},m(m,d){k(m,e,d),b(e,n),b(n,s),b(e,f),i&&i.m(e,null),b(e,l);for(let u=0;u<a.length;u+=1)a[u].m(e,null);o=!0},p(m,d){if((!o||d&16)&&r!==(r=m[8]+"")&&D(s,r),m[6].length?i?(i.p(m,d),d&16&&E(i,1)):(i=Me(m),i.c(),E(i,1),i.m(e,l)):i&&(B(),M(i,1,1,()=>{i=null}),H()),d&16){c=m[7];let u;for(u=0;u<c.length;u+=1){let p=xe(m,c,u);a[u]?(a[u].p(p,d),E(a[u],1)):(a[u]=Ae(p),a[u].c(),E(a[u],1),a[u].m(e,null))}for(B(),u=c.length;u<a.length;u+=1)_(u);H()}},i(m){if(!o){E(i);for(let d=0;d<c.length;d+=1)E(a[d]);o=!0}},o(m){M(i),a=a.filter(Boolean);for(let d=0;d<a.length;d+=1)M(a[d]);o=!1},d(m){m&&g(e),i&&i.d(),Y(a,m)}}}function Te(t){let e;return{c(){e=v("p"),this.h()},l(n){e=F(n,"P",{class:!0});var r=w(e);r.forEach(g),this.h()},h(){h(e,"class","Form__append")},m(n,r){k(n,e,r),e.innerHTML=t[1]},p(n,r){r&2&&(e.innerHTML=n[1])},d(n){n&&g(e)}}}function Qe(t){let e,n,r,s,f,l,o,i,c=t[3]&&$e(t),a=t[4],_=[];for(let u=0;u<a.length;u+=1)_[u]=Ce(ke(t,a,u));let m=u=>M(_[u],1,1,()=>{_[u]=null}),d=t[1]&&Te(t);return{c(){e=v("form"),c&&c.c(),n=S();for(let u=0;u<_.length;u+=1)_[u].c();r=S(),s=v("footer"),d&&d.c(),f=S(),l=v("button"),o=O(t[5]),this.h()},l(u){e=F(u,"FORM",{class:!0,action:!0,method:!0});var p=w(e);c&&c.l(p),n=$(p);for(let Z=0;Z<_.length;Z+=1)_[Z].l(p);r=$(p),s=F(p,"FOOTER",{class:!0});var y=w(s);d&&d.l(y),f=$(y),l=F(y,"BUTTON",{class:!0,type:!0});var j=w(l);o=C(j,t[5]),j.forEach(g),y.forEach(g),p.forEach(g),this.h()},h(){h(l,"class","Form__submit Button"),h(l,"type","submit"),h(s,"class","Form__footer"),h(e,"class","Form"),h(e,"action",t[0]),h(e,"method",t[2])},m(u,p){k(u,e,p),c&&c.m(e,null),b(e,n);for(let y=0;y<_.length;y+=1)_[y].m(e,null);b(e,r),b(e,s),d&&d.m(s,null),b(s,f),b(s,l),b(l,o),i=!0},p(u,[p]){if(u[3]?c?c.p(u,p):(c=$e(u),c.c(),c.m(e,n)):c&&(c.d(1),c=null),p&16){a=u[4];let y;for(y=0;y<a.length;y+=1){let j=ke(u,a,y);_[y]?(_[y].p(j,p),E(_[y],1)):(_[y]=Ce(j),_[y].c(),E(_[y],1),_[y].m(e,r))}for(B(),y=a.length;y<_.length;y+=1)m(y);H()}u[1]?d?d.p(u,p):(d=Te(u),d.c(),d.m(s,f)):d&&(d.d(1),d=null),(!i||p&32)&&D(o,u[5]),(!i||p&1)&&h(e,"action",u[0]),(!i||p&4)&&h(e,"method",u[2])},i(u){if(!i){for(let p=0;p<a.length;p+=1)E(_[p]);i=!0}},o(u){_=_.filter(Boolean);for(let p=0;p<_.length;p+=1)M(_[p]);i=!1},d(u){u&&g(e),c&&c.d(),Y(_,u),d&&d.d()}}}function Ze(t,e,n){let{action:r=null,append:s=null,method:f="get",prepend:l=null,sets:o=[],submitText:i="OK"}=e;return t.$$set=c=>{"action"in c&&n(0,r=c.action),"append"in c&&n(1,s=c.append),"method"in c&&n(2,f=c.method),"prepend"in c&&n(3,l=c.prepend),"sets"in c&&n(4,o=c.sets),"submitText"in c&&n(5,i=c.submitText)},[r,s,f,l,o,i]}var he=class extends A{constructor(e){super(),N(this,e,Ze,Qe,q,{action:0,append:1,method:2,prepend:3,sets:4,submitText:5})}},De=he;var W=class{constructor({target:e}){this._headerElement=e,this._togglerElement=this._headerElement.querySelector(".PageHeader__toggler"),this._togglerElement.addEventListener("click",this._toggleHandler.bind(this)),this._headerElement.classList.remove("PageHeader_noJs")}_toggleHandler(){this._headerElement.classList.toggle("PageHeader_open")}};var z=class{constructor({target:e}){this._reviewsElement=e,this._sliderElement=this._reviewsElement.querySelector(".Reviews__slider"),this._slideElements=Array.from(this._sliderElement.querySelectorAll(".Reviews__item")),!(this._slideElements.length<=1)&&(this._linkElements=this._sliderElement.querySelectorAll("a"),this._index=0,this._prevElement=this._reviewsElement.querySelector(".Reviews__control_prev"),this._nextElement=this._reviewsElement.querySelector(".Reviews__control_next"),this._prevElement.addEventListener("click",()=>this._handleSlide(-1)),this._nextElement.addEventListener("click",()=>this._handleSlide(1)),this._linkElements.forEach(n=>{n.addEventListener("focus",r=>{let s=r.currentTarget.closest(".Reviews__item");this._index=this._slideElements.findIndex(f=>f===s),this._setOffset()})}),window.addEventListener("resize",()=>this._setSlideWidth()),this._setSlideWidth(),this._reviewsElement.classList.remove("Reviews_noJs"))}_handleSlide(e){this._index=(this._index+e+this._slideElements.length)%this._slideElements.length,this._setOffset()}_setOffset(){this._reviewsElement.style.setProperty("--translate",`${-this._index*100}%`)}_setSlideWidth(){let{paddingRight:e,paddingLeft:n}=getComputedStyle(this._reviewsElement),r=this._reviewsElement.clientWidth-parseInt(n,10)-parseInt(e,10);this._reviewsElement.style.setProperty("--width",`${r}px`)}};var Le={Form:De},{widgets:et=[]}=window.pageData;et.forEach(([t,e={}])=>{!Le[t]||Q(Le[t],document.querySelector(`[data-widget="${t}"]`),e)});Q(W,document.querySelector(".PageHeader"));Q(z,document.querySelector(".Reviews"));})();

(()=>{function _(){}function D(t){return t()}function P(){return Object.create(null)}function y(t){t.forEach(D)}function x(t){return typeof t=="function"}function z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function H(t){return Object.keys(t).length===0}var k=!1;function et(){k=!0}function nt(){k=!1}function it(t,e,n,o){for(;t<e;){let r=t+(e-t>>1);n(r)<=o?t=r+1:e=r}return t}function ot(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){let l=[];for(let u=0;u<e.length;u++){let a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}let n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){let u=e[l].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:it(1,r,w=>e[n[w]].claim_order,u))-1;o[l]=n[a]+1;let f=a+1;n[f]=l,r=Math.max(f,r)}let c=[],i=[],s=e.length-1;for(let l=n[r]+1;l!=0;l=o[l-1]){for(c.push(e[l-1]);s>=l;s--)i.push(e[s]);s--}for(;s>=0;s--)i.push(e[s]);c.reverse(),i.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<i.length;l++){for(;u<c.length&&i[l].claim_order>=c[u].claim_order;)u++;let a=u<c.length?c[u]:null;t.insertBefore(i[l],a)}}function g(t,e){if(k){for(ot(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function T(t,e,n){k&&!n?g(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function K(){return S(" ")}function d(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function F(t){return Array.from(t.childNodes)}function st(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function G(t,e,n,o,r=!1){st(t);let c=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){let s=t[i];if(e(s)){let l=n(s);return l===void 0?t.splice(i,1):t[i]=l,r||(t.claim_info.last_index=i),s}}for(let i=t.claim_info.last_index-1;i>=0;i--){let s=t[i];if(e(s)){let l=n(s);return l===void 0?t.splice(i,1):t[i]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,s}}return o()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function rt(t,e,n,o){return G(t,r=>r.nodeName===e,r=>{let c=[];for(let i=0;i<r.attributes.length;i++){let s=r.attributes[i];n[s.name]||c.push(s.name)}c.forEach(i=>r.removeAttribute(i))},()=>o(e))}function O(t,e,n){return rt(t,e,n,b)}function j(t,e){return G(t,n=>n.nodeType===3,n=>{let o=""+e;if(n.data.startsWith(o)){if(n.data.length!==o.length)return n.splitText(o.length)}else n.data=o},()=>S(e),!0)}function W(t){return j(t," ")}function U(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}var N;function m(t){N=t}var p=[];var B=[],v=[],I=[],ct=Promise.resolve(),M=!1;function lt(){M||(M=!0,ct.then(X))}function C(t){v.push(t)}var A=new Set,$=0;function X(){let t=N;do{for(;$<p.length;){let e=p[$];$++,m(e),ut(e.$$)}for(m(null),p.length=0,$=0;B.length;)B.pop()();for(let e=0;e<v.length;e+=1){let n=v[e];A.has(n)||(A.add(n),n())}v.length=0}while(p.length);for(;I.length;)I.pop()();M=!1,A.clear(),m(t)}function ut(t){if(t.fragment!==null){t.update(),y(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}var ft=new Set;function at(t,e){t&&t.i&&(ft.delete(t),t.i(e))}var yt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function dt(t,e,n,o){let{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),o||C(()=>{let i=t.$$.on_mount.map(D).filter(x);t.$$.on_destroy?t.$$.on_destroy.push(...i):y(i),t.$$.on_mount=[]}),c.forEach(C)}function Y(t,e){let n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){t.$$.dirty[0]===-1&&(p.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(t,e,n,o,r,c,i,s=[-1]){let l=N;m(t);let u=t.$$={fragment:null,ctx:[],props:c,update:_,not_equal:r,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:P(),dirty:s,skip_bound:!1,root:e.target||l.$$.root};i&&i(u.root);let a=!1;if(u.ctx=n?n(t,e.props||{},(f,w,...q)=>{let L=q.length?q[0]:w;return u.ctx&&r(u.ctx[f],u.ctx[f]=L)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](L),a&&_t(t,f)),w}):[],u.update(),a=!0,y(u.before_update),u.fragment=o?o(u.ctx):!1,e.target){if(e.hydrate){et();let f=F(e.target);u.fragment&&u.fragment.l(f),f.forEach(h)}else u.fragment&&u.fragment.c();e.intro&&at(t.$$.fragment),dt(t,e.target,e.anchor,e.customElement),nt(),X()}m(l)}var ht;typeof HTMLElement=="function"&&(ht=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(D).filter(x);for(let e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){y(this.$$.on_disconnect)}$destroy(){Y(this,1),this.$destroy=_}$on(t,e){if(!x(e))return _;let n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{let o=n.indexOf(e);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!H(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});var E=class{$destroy(){Y(this,1),this.$destroy=_}$on(e,n){if(!x(n))return _;let o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{let r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(e){this.$$set&&!H(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};function J(t){let e;return{c(){e=b("p"),this.h()},l(n){e=O(n,"P",{class:!0});var o=F(e);o.forEach(h),this.h()},h(){d(e,"class","Form__prepend")},m(n,o){T(n,e,o),e.innerHTML=t[2]},p(n,o){o&4&&(e.innerHTML=n[2])},d(n){n&&h(e)}}}function pt(t){let e,n,o,r,c=t[2]&&J(t);return{c(){e=b("form"),c&&c.c(),n=K(),o=b("button"),r=S(t[3]),this.h()},l(i){e=O(i,"FORM",{class:!0,action:!0,method:!0});var s=F(e);c&&c.l(s),n=W(s),o=O(s,"BUTTON",{class:!0,type:!0});var l=F(o);r=j(l,t[3]),l.forEach(h),s.forEach(h),this.h()},h(){d(o,"class","Form__submit Button"),d(o,"type","submit"),d(e,"class","Form"),d(e,"action",t[0]),d(e,"method",t[1])},m(i,s){T(i,e,s),c&&c.m(e,null),g(e,n),g(e,o),g(o,r)},p(i,[s]){i[2]?c?c.p(i,s):(c=J(i),c.c(),c.m(e,n)):c&&(c.d(1),c=null),s&8&&U(r,i[3]),s&1&&d(e,"action",i[0]),s&2&&d(e,"method",i[1])},i:_,o:_,d(i){i&&h(e),c&&c.d()}}}function mt(t,e,n){let{action:o=null,method:r="get",prepend:c=null,submitText:i="OK"}=e;return t.$$set=s=>{"action"in s&&n(0,o=s.action),"method"in s&&n(1,r=s.method),"prepend"in s&&n(2,c=s.prepend),"submitText"in s&&n(3,i=s.submitText)},[o,r,c,i]}var R=class extends E{constructor(e){super(),V(this,e,mt,pt,z,{action:0,method:1,prepend:2,submitText:3})}},Q=R;var Z=(t,e=document.body,n={})=>new t({hydrate:!0,props:n,target:e});var tt={Form:Q};window.widgets.forEach(([t,e={}])=>{if(!tt[t])return;let n=document.querySelector(`[data-widget="${t}"]`);!n||Z(tt[t],n,e)});})();

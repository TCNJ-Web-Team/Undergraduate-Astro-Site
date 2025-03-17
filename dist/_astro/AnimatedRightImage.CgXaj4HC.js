import{j as I}from"./jsx-runtime.D3GSbgeI.js";import{r as l}from"./index.Cs-REvGi.js";import"./index.yBjzXJbu.js";var w=new Map,m=new WeakMap,E=0,S=void 0;function V(e){return e?(m.has(e)||(E+=1,m.set(e,E.toString())),m.get(e)):"0"}function $(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?V(e.root):e[t]}`).toString()}function z(e){const t=$(e);let n=w.get(t);if(!n){const s=new Map;let c;const o=new IntersectionObserver(i=>{i.forEach(r=>{var u;const v=r.isIntersecting&&c.some(d=>r.intersectionRatio>=d);e.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=v),(u=s.get(r.target))==null||u.forEach(d=>{d(v,r)})})},e);c=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:s},w.set(t,n)}return n}function M(e,t,n={},s=S){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const u=e.getBoundingClientRect();return t(s,{isIntersecting:s,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:c,observer:o,elements:i}=z(n),r=i.get(e)||[];return i.has(e)||i.set(e,r),r.push(t),o.observe(e),function(){r.splice(r.indexOf(t),1),r.length===0&&(i.delete(e),o.unobserve(e)),i.size===0&&(o.disconnect(),w.delete(c))}}function O({threshold:e,delay:t,trackVisibility:n,rootMargin:s,root:c,triggerOnce:o,skip:i,initialInView:r,fallbackInView:u,onChange:v}={}){var d;const[g,A]=l.useState(null),b=l.useRef(v),[h,R]=l.useState({inView:!!r,entry:void 0});b.current=v,l.useEffect(()=>{if(i||!g)return;let f;return f=M(g,(y,x)=>{R({inView:y,entry:x}),b.current&&b.current(y,x),x.isIntersecting&&o&&f&&(f(),f=void 0)},{root:c,rootMargin:s,threshold:e,trackVisibility:n,delay:t},u),()=>{f&&f()}},[Array.isArray(e)?e.toString():e,g,c,s,o,i,n,u,t]);const p=(d=h.entry)==null?void 0:d.target,j=l.useRef(void 0);!g&&p&&!o&&!i&&j.current!==p&&(j.current=p,R({inView:!!r,entry:void 0}));const a=[A,h.inView,h.entry];return a.ref=a[0],a.inView=a[1],a.entry=a[2],a}const N=({programOfStudyRight:e,imageAlt:t,rightImageHorizontalPosition:n,rightImageVerticalPosition:s})=>{const{ref:c}=O({triggerOnce:!0,threshold:.35});return I.jsx("div",{className:"relative overflow-y-visible",children:e&&I.jsx("img",{ref:c,loading:"lazy",src:e,alt:t+" program image",style:{objectPosition:`${n}% ${s}%`},id:"prog-study-img",className:`relative z-30 
     top-[-45px]
          object-cover
          object-left
          w-[100%]
          h-[350px]
          max-w-none
          sm:h-[500px]
          sm:top-[-45px]
          
       md:top-[-50px]
          md:right-[-82px]
          md:h-[425px]
          md:absolute
          mb-[5px]
          lg:w-[51%]
          lg:h-[600px]

          sm:mb-0
          `})})};export{N as default};

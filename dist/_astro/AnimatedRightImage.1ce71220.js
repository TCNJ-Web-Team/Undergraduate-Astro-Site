import{j as I}from"./jsx-runtime.b9e88e07.js";import{r as v}from"./index.03be2d59.js";var w=new Map,h=new WeakMap,E=0,S=void 0;function V(e){return e?(h.has(e)||(E+=1,h.set(e,E.toString())),h.get(e)):"0"}function $(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?V(e.root):e[t]}`).toString()}function M(e){const t=$(e);let n=w.get(t);if(!n){const s=new Map;let c;const o=new IntersectionObserver(i=>{i.forEach(r=>{var u;const l=r.isIntersecting&&c.some(d=>r.intersectionRatio>=d);e.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=l),(u=s.get(r.target))==null||u.forEach(d=>{d(l,r)})})},e);c=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:s},w.set(t,n)}return n}function O(e,t,n={},s=S){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const u=e.getBoundingClientRect();return t(s,{isIntersecting:s,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:c,observer:o,elements:i}=M(n),r=i.get(e)||[];return i.has(e)||i.set(e,r),r.push(t),o.observe(e),function(){r.splice(r.indexOf(t),1),r.length===0&&(i.delete(e),o.unobserve(e)),i.size===0&&(o.disconnect(),w.delete(c))}}function T({threshold:e,delay:t,trackVisibility:n,rootMargin:s,root:c,triggerOnce:o,skip:i,initialInView:r,fallbackInView:u,onChange:l}={}){var d;const[g,A]=v.useState(null),b=v.useRef(),[m,R]=v.useState({inView:!!r,entry:void 0});b.current=l,v.useEffect(()=>{if(i||!g)return;let f;return f=O(g,(y,x)=>{R({inView:y,entry:x}),b.current&&b.current(y,x),x.isIntersecting&&o&&f&&(f(),f=void 0)},{root:c,rootMargin:s,threshold:e,trackVisibility:n,delay:t},u),()=>{f&&f()}},[Array.isArray(e)?e.toString():e,g,c,s,o,i,n,u,t]);const p=(d=m.entry)==null?void 0:d.target,j=v.useRef();!g&&p&&!o&&!i&&j.current!==p&&(j.current=p,R({inView:!!r,entry:void 0}));const a=[A,m.inView,m.entry];return a.ref=a[0],a.inView=a[1],a.entry=a[2],a}const B=({programOfStudyRight:e,rightImageHorizontalPosition:t,rightImageVerticalPosition:n})=>{const{ref:s,inView:c}=T({triggerOnce:!0,threshold:.35});return I.jsx("div",{className:"relative overflow-y-visible",children:e&&I.jsx("img",{ref:s,src:e,alt:"",style:{objectPosition:`${t}% ${n}%`},id:"prog-study-img",className:`relative z-30 
     top-[-50px]
          object-cover
          object-left
          w-[100%]
          h-[400px]
          max-w-none
          sm:h-[550px]
          sm:top-[-50px]
          
      
          md:right-[-82px]
          md:h-[650px]
          md:absolute`})})};export{B as default};

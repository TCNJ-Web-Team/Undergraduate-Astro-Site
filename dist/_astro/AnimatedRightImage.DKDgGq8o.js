import{j as I}from"./jsx-runtime.C3nPk8XT.js";import{r as l}from"./index.Cq8P9Jm4.js";var w=new Map,h=new WeakMap,E=0,S=void 0;function V(e){return e?(h.has(e)||(E+=1,h.set(e,E.toString())),h.get(e)):"0"}function $(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?V(e.root):e[t]}`).toString()}function M(e){const t=$(e);let r=w.get(t);if(!r){const s=new Map;let c;const o=new IntersectionObserver(i=>{i.forEach(n=>{var u;const v=n.isIntersecting&&c.some(f=>n.intersectionRatio>=f);e.trackVisibility&&typeof n.isVisible>"u"&&(n.isVisible=v),(u=s.get(n.target))==null||u.forEach(f=>{f(v,n)})})},e);c=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:s},w.set(t,r)}return r}function O(e,t,r={},s=S){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const u=e.getBoundingClientRect();return t(s,{isIntersecting:s,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:c,observer:o,elements:i}=M(r),n=i.get(e)||[];return i.has(e)||i.set(e,n),n.push(t),o.observe(e),function(){n.splice(n.indexOf(t),1),n.length===0&&(i.delete(e),o.unobserve(e)),i.size===0&&(o.disconnect(),w.delete(c))}}function T({threshold:e,delay:t,trackVisibility:r,rootMargin:s,root:c,triggerOnce:o,skip:i,initialInView:n,fallbackInView:u,onChange:v}={}){var f;const[g,A]=l.useState(null),b=l.useRef(),[m,R]=l.useState({inView:!!n,entry:void 0});b.current=v,l.useEffect(()=>{if(i||!g)return;let a;return a=O(g,(y,x)=>{R({inView:y,entry:x}),b.current&&b.current(y,x),x.isIntersecting&&o&&a&&(a(),a=void 0)},{root:c,rootMargin:s,threshold:e,trackVisibility:r,delay:t},u),()=>{a&&a()}},[Array.isArray(e)?e.toString():e,g,c,s,o,i,r,u,t]);const p=(f=m.entry)==null?void 0:f.target,j=l.useRef();!g&&p&&!o&&!i&&j.current!==p&&(j.current=p,R({inView:!!n,entry:void 0}));const d=[A,m.inView,m.entry];return d.ref=d[0],d.inView=d[1],d.entry=d[2],d}const B=({programOfStudyRight:e,rightImageHorizontalPosition:t,rightImageVerticalPosition:r})=>{const{ref:s,inView:c}=T({triggerOnce:!0,threshold:.35});return I.jsx("div",{className:"relative overflow-y-visible",children:e&&I.jsx("img",{ref:s,src:e,alt:"",style:{objectPosition:`${t}% ${r}%`},id:"prog-study-img",className:`relative z-30 
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

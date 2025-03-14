import{j as I}from"./jsx-runtime.C3nPk8XT.js";import{r as l}from"./index.Cq8P9Jm4.js";var w=new Map,h=new WeakMap,E=0,S=void 0;function V(e){return e?(h.has(e)||(E+=1,h.set(e,E.toString())),h.get(e)):"0"}function $(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?V(e.root):e[t]}`).toString()}function z(e){const t=$(e);let r=w.get(t);if(!r){const s=new Map;let c;const i=new IntersectionObserver(o=>{o.forEach(n=>{var u;const g=n.isIntersecting&&c.some(a=>n.intersectionRatio>=a);e.trackVisibility&&typeof n.isVisible>"u"&&(n.isVisible=g),(u=s.get(n.target))==null||u.forEach(a=>{a(g,n)})})},e);c=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:i,elements:s},w.set(t,r)}return r}function M(e,t,r={},s=S){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const u=e.getBoundingClientRect();return t(s,{isIntersecting:s,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:c,observer:i,elements:o}=z(r),n=o.get(e)||[];return o.has(e)||o.set(e,n),n.push(t),i.observe(e),function(){n.splice(n.indexOf(t),1),n.length===0&&(o.delete(e),i.unobserve(e)),o.size===0&&(i.disconnect(),w.delete(c))}}function O({threshold:e,delay:t,trackVisibility:r,rootMargin:s,root:c,triggerOnce:i,skip:o,initialInView:n,fallbackInView:u,onChange:g}={}){var a;const[v,A]=l.useState(null),b=l.useRef(),[m,R]=l.useState({inView:!!n,entry:void 0});b.current=g,l.useEffect(()=>{if(o||!v)return;let f;return f=M(v,(y,x)=>{R({inView:y,entry:x}),b.current&&b.current(y,x),x.isIntersecting&&i&&f&&(f(),f=void 0)},{root:c,rootMargin:s,threshold:e,trackVisibility:r,delay:t},u),()=>{f&&f()}},[Array.isArray(e)?e.toString():e,v,c,s,i,o,r,u,t]);const p=(a=m.entry)==null?void 0:a.target,j=l.useRef();!v&&p&&!i&&!o&&j.current!==p&&(j.current=p,R({inView:!!n,entry:void 0}));const d=[A,m.inView,m.entry];return d.ref=d[0],d.inView=d[1],d.entry=d[2],d}const B=({programOfStudyRight:e,imageAlt:t,rightImageHorizontalPosition:r,rightImageVerticalPosition:s})=>{const{ref:c,inView:i}=O({triggerOnce:!0,threshold:.35});return I.jsx("div",{className:"relative overflow-y-visible",children:e&&I.jsx("img",{ref:c,loading:"lazy",src:e,alt:t+" program image",style:{objectPosition:`${r}% ${s}%`},id:"prog-study-img",className:`relative z-30 
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
          `})})};export{B as default};

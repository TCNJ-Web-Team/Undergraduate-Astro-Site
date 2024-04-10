import{j as w}from"./jsx-runtime.b9e88e07.js";import{r as v}from"./index.03be2d59.js";import{m as V}from"./motion.9b287751.js";var y=new Map,g=new WeakMap,A=0,S=void 0;function O(e){return e?(g.has(e)||(A+=1,g.set(e,A.toString())),g.get(e)):"0"}function $(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?O(e.root):e[t]}`).toString()}function M(e){const t=$(e);let n=y.get(t);if(!n){const i=new Map;let c;const s=new IntersectionObserver(o=>{o.forEach(r=>{var a;const h=r.isIntersecting&&c.some(d=>r.intersectionRatio>=d);e.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=h),(a=i.get(r.target))==null||a.forEach(d=>{d(h,r)})})},e);c=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:i},y.set(t,n)}return n}function N(e,t,n={},i=S){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const a=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:c,observer:s,elements:o}=M(n),r=o.get(e)||[];return o.has(e)||o.set(e,r),r.push(t),s.observe(e),function(){r.splice(r.indexOf(t),1),r.length===0&&(o.delete(e),s.unobserve(e)),o.size===0&&(s.disconnect(),y.delete(c))}}function T({threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:c,triggerOnce:s,skip:o,initialInView:r,fallbackInView:a,onChange:h}={}){var d;const[l,E]=v.useState(null),m=v.useRef(),[p,j]=v.useState({inView:!!r,entry:void 0});m.current=h,v.useEffect(()=>{if(o||!l)return;let f;return f=N(l,(I,x)=>{j({inView:I,entry:x}),m.current&&m.current(I,x),x.isIntersecting&&s&&f&&(f(),f=void 0)},{root:c,rootMargin:i,threshold:e,trackVisibility:n,delay:t},a),()=>{f&&f()}},[Array.isArray(e)?e.toString():e,l,c,i,s,o,n,a,t]);const b=(d=p.entry)==null?void 0:d.target,R=v.useRef();!l&&b&&!s&&!o&&R.current!==b&&(R.current=b,j({inView:!!r,entry:void 0}));const u=[E,p.inView,p.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}const C=({programOfStudyRight:e,rightImageHorizontalPosition:t,rightImageVerticalPosition:n})=>{const i={hidden:{opacity:0,x:25},show:{opacity:1,x:0,transition:{delay:.25,ease:"easeOut",duration:.75}}},{ref:c,inView:s}=T({triggerOnce:!0,threshold:.5});return w.jsxs("div",{className:"relative overflow-y-visible",children:[e&&w.jsx(V.img,{ref:c,src:e,alt:"",style:{objectPosition:`${t}% ${n}%`},id:"prog-study-img",className:`relative z-30 
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
          md:absolute`,variants:i,initial:"hidden",animate:s?"show":"hidden"}),w.jsx("div",{id:"prog-study-bg",className:`absolute 
                bg-lightgrey
                top-[-50px] object-cover object-left w-[100%] h-[400px] max-w-none sm:h-[550px] sm:top-[-50px] md:right-[-82px] md:h-[650px] md:absolute
          `})]})};export{C as default};

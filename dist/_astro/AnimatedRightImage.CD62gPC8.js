import{o as e,t}from"./react.BRNZa73l.js";import{t as n}from"./jsx-runtime.C8BoMr6r.js";var r=e(t(),1),i=new Map,a=new WeakMap,o=0,s=void 0;function c(e){return e?a.has(e)?a.get(e):(o+=1,a.set(e,o.toString()),a.get(e)):`0`}function l(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t===`root`?c(e.root):e[t]}`).toString()}function u(e){let t=l(e),n=i.get(t);if(!n){let r=new Map,a,o=new IntersectionObserver(t=>{t.forEach(t=>{var n;let i=t.isIntersecting&&a.some(e=>t.intersectionRatio>=e);e.trackVisibility&&t.isVisible===void 0&&(t.isVisible=i),(n=r.get(t.target))==null||n.forEach(e=>{e(i,t)})})},e);a=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},i.set(t,n)}return n}function d(e,t,n={},r=s){if(window.IntersectionObserver===void 0&&r!==void 0){let i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold==`number`?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}let{id:a,observer:o,elements:c}=u(n),l=c.get(e)||[];return c.has(e)||c.set(e,l),l.push(t),o.observe(e),function(){l.splice(l.indexOf(t),1),l.length===0&&(c.delete(e),o.unobserve(e)),c.size===0&&(o.disconnect(),i.delete(a))}}r.Component;function f({threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:a,triggerOnce:o,skip:s,initialInView:c,fallbackInView:l,onChange:u}={}){let[f,p]=r.useState(null),m=r.useRef(u),[h,g]=r.useState({inView:!!c,entry:void 0});m.current=u,r.useEffect(()=>{if(s||!f)return;let r;return r=d(f,(e,t)=>{g({inView:e,entry:t}),m.current&&m.current(e,t),t.isIntersecting&&o&&r&&(r(),r=void 0)},{root:a,rootMargin:i,threshold:e,trackVisibility:n,delay:t},l),()=>{r&&r()}},[Array.isArray(e)?e.toString():e,f,a,i,o,s,n,l,t]);let _=h.entry?.target,v=r.useRef(void 0);!f&&_&&!o&&!s&&v.current!==_&&(v.current=_,g({inView:!!c,entry:void 0}));let y=[p,h.inView,h.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}var p=n(),m=({programOfStudyRight:e,imageAlt:t,rightImageHorizontalPosition:n,rightImageVerticalPosition:r})=>{let{ref:i}=f({triggerOnce:!0,threshold:.35});return(0,p.jsx)(`div`,{className:`relative overflow-y-visible`,children:e&&(0,p.jsx)(`img`,{ref:i,loading:`lazy`,src:e,alt:t+` program image`,style:{objectPosition:`${n}% ${r}%`},id:`prog-study-img`,className:`relative z-30 
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
          `})})};export{m as default};
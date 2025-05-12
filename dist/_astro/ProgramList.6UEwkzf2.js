import{j as t}from"./jsx-runtime.D3GSbgeI.js";import{r}from"./index.Cs-REvGi.js";/* empty css                       */import{m as h}from"./proxy.DE21i8It.js";import"./index.yBjzXJbu.js";const G=({program:p,listType:d,index:l,animationState:g,gradCheckCard:f})=>{const[O]=r.useState(!1),[u,A]=r.useState(!0),b=O?"active-hover":"",w=d=="list";r.useEffect(()=>{setTimeout(()=>A(!1),1200)});const{slug:y,redirecturl:x,programOptions:j,additionalOptions:P}=p.program,{title:v}=p,k=x?x.replace("https://undergraduate-astro-site-t6y1l.kinsta.page",""):`./${y}`,i={Major:0,"Major/Specialization":0,Minor:1,Certificate:2,"Three-Year Bachelor's":3,Accelerated:4,"Dual Degree":5,"Teacher Education":6,Undeclared:7,Prelaw:8,Premed:9,"Premed/Prehealth":9};return t.jsx("div",{className:`program-card filter drop-shadow-none transition-all duration-300 bg-white ${b}
      ${u?"pulse":""}`,id:y,children:t.jsxs(h.a,{className:`program-card-gtm program-link block border-[1px] 
        border-[#bcbcbc] px-[30px] pt-[35px] pb-[40px] sm:min-h-[300px]
        sm:px-[35px]
        lg:px-[50px]
        lg:pt-[48px]
         ${w&&"md:flex md:flex-row md:justify-between md:min-h-0 md:items-center md:py-[35px] lg:!pt-[35px]"}`,href:f?`./graduate/${k}`:k,target:k.includes("http")?"_blank":"_self",initial:g?{opacity:0,y:5}:{opacity:1,y:0},animate:{opacity:1,y:0},transition:{delay:(l+.25)*.15,ease:"easeOut",duration:.3},children:[t.jsx("h2",{className:`font-domine font-bold 
        text-[19px] leading-[28px]
        sm:text-[21px] sm:leading-[30px]`,children:v}),t.jsx("hr",{className:`my-[20px] border-[#BCBCBC] ${w&&"md:hidden"}`}),t.jsx("div",{className:`icon-container flex flex-wrap gap-x-[20px] gap-y-[10px] ${w&&"md:max-w-[260px] md:w-[100%]"}`,children:(j||P)&&[...j||[],...P||[]].slice().sort((m,o)=>i[m]-i[o]).map((m,o)=>{const F=L=>L.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,""),c=L=>{switch(L.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")){case"accelerated":return"w-[23.658px] h-[15px]";case"certificate":return"w-[14.881px] h-[15px]";case"dual-degree":return"w-[15.343px] h-[15px]";case"major":return"w-[13.865px] h-[15px]";case"majorspecialization":return"w-[13.865px] h-[15px]";case"minor":return"w-[14.041px] h-[11px]";case"prelaw":return"w-[18.63px] h-[15px]";case"premed":return"w-[15px] h-[15px]";case"premedprehealth":return"w-[15px] h-[15px]";case"teacher-education":return"w-[14.236px] h-[15px]";case"three-year-bachelors":return"w-[13.391px] h-[15px]";case"language":return"w-[17.641px] h-[14.984px]";case"undeclared-option":return"w-[11.223px] h-[15px]";default:return"w-auto h-auto max-h-[15px]"}};return t.jsxs("p",{className:`font-opensans text-[14px] leading-[15px] md:leading-[25px] inline-flex gap-x-[5px] items-center ${m.length>15&&"col-span-full"}`,children:[t.jsx("img",{loading:"lazy",src:`/card-icons/${F(m)}.svg`,className:`${c(m)} object-contain`}),m]},o)})})]})})};function z({checkboxContent:p,title:d,isOpen:l,onToggle:g,index:f}){return t.jsxs("div",{className:`z-50 relative w-[100%] 
       
      ${l?"open-drop":""}`,children:[t.jsxs(h.div,{whileTap:{scale:.975},className:"z-30 relative",children:[t.jsx(h.div,{className:"h-[9px] w-[100%] bg-tcnjyellow origin-left",initial:{scaleX:0,opacity:0},animate:{scaleX:1,opacity:1},transition:{delay:(f+2)*.45,ease:[.22,0,.36,1],duration:.85}}),t.jsx(h.div,{initial:{"--background-color":"#bcbcbc"},animate:{"--background-color":"#fdd700"},className:`
          transition-all
          h-[1px] w-[100%] bg-[#bcbcbc] origin-left bg-[--background-color]`,transition:{delay:(f+2)*.45,ease:[.22,0,.36,1],duration:.85}}),t.jsx("h3",{className:`
        select-none
        dropdown-label
        font-opensans 
        font-semibold 
        leading-[30px] 
        text-black 
        text-[17px] 
        uppercase 
        p-[34px] py-[24px] 
        border-t-0
        pt-[23px]
        bg-white border-[1px] 
        border-[#bcbcbc] 

     cursor-pointer
     lg:px-[50px]
        ${l?"open":""}`,onClick:g,children:d})]}),t.jsx("div",{className:`input-list relative md:absolute opacity-0  px-[34px] border-[1px]  w-[99%] ml-[.5%]
        border-[#bcbcbc]  bg-white  transition-all duration-300
        h-0 block-0 pointer-events-none z-0 
        mt-[-5px]
md:h-auto
scale-[.975]
lg:px-[50px]

        ${l&&"!ml-0 !w-[100%] !border-t-[0] !mt-0 pointer-events-auto block opacity-100  py-[30px] h-[auto!important] !scale-[1]"}
        `,id:`${l?"open-list":""}`,children:p.map((O,u)=>t.jsx("div",{className:"drop-down-item",children:O},u))})]})}const Y=({boxId:p,checkboxContent:d})=>t.jsx(t.Fragment,{children:d&&d.map((l,g)=>t.jsx("div",{className:`drop-down-item ${p}`,children:l},g))});function le({data:p,redirectData:d,areaOfStudy:l,programOptionsClean:g,additionalOptions:f,gradCheck:O}){let u,A=!1;O?(u=p.graduatePrograms.nodes,A=!0):u=p.programs.nodes.concat(d.programRedirects.nodes.map(e=>({program:e.redirectProgram,title:e.title})));const b=u,w=b.sort((e,s)=>e.title.localeCompare(s.title)).slice(0,12),[y,x]=r.useState(!1),[j,P]=r.useState(!1),[v,k]=r.useState(b),[i,m]=r.useState([]),[o,F]=r.useState([]),[c,L]=r.useState([]),[C,R]=r.useState(""),[E,H]=r.useState(null),[T,V]=r.useState(""),B=r.useRef(null),D=e=>{H(E===e?null:e),P(!0)},$=e=>{if(e.type==="click"&&B.current&&!B.current.contains(e.target)||e.type==="keydown"&&e.key==="Escape"){H(null);const s=document.getElementById("open-list");s&&s.removeAttribute("id")}},[U,K]=r.useState(!1);r.useEffect(()=>{K(!0),U&&(()=>{try{const a=sessionStorage.getItem("programListScrollY");a!==null&&parseInt(a,10)>100&&x(!0)}catch{}})();let s=!1;const n=()=>{s||(window.requestAnimationFrame(()=>{if(window.scrollY>20)try{sessionStorage.setItem("programListScrollY",window.scrollY.toString())}catch{}window.scrollY>100&&!y&&x(!0),s=!1}),s=!0)};return window.addEventListener("scroll",n,{passive:!0}),()=>{window.removeEventListener("scroll",n)}},[U,y]),r.useEffect(()=>{const e=b.sort((s,n)=>s.title.localeCompare(n.title));k(e)},[]),r.useEffect(()=>(document.addEventListener("click",$),document.addEventListener("keydown",$),()=>{document.removeEventListener("click",$),document.removeEventListener("keydown",$)}),[]),r.useEffect(()=>{J()},[i,o,c,C]);const J=()=>{let e=b.filter(Q);i.length>0&&(e=e.filter(W)),o.length>0&&(e=e.filter(Z)),c.length>0&&(e=e.filter(ee)),e=e.sort((s,n)=>s.title.localeCompare(n.title)),k(e)},Q=e=>{const s=C.toLowerCase(),n=Array.isArray(e.program.school)?e.program.school:[e.program.school],a=e.program.keywords?e.program.keywords.toLowerCase().includes(s):!1;return e.title.toLowerCase().includes(s)||n.some(N=>N.toString().toLowerCase().includes(s))||a},W=e=>{const s=Array.isArray(e.program.school)?e.program.school:[e.program.school];return i.some(n=>s.includes(n))},Z=e=>o.some(s=>(e.program.programOptions??[]).includes(s)),ee=e=>c.some(s=>(e.program.additionalOptions??[]).includes(s)),X=e=>I(e.target.value,m,i),_=e=>I(e.target.value,F,o),q=e=>I(e.target.value,L,c),I=(e,s,n)=>{let a=[...n];a.includes(e)?a=a.filter(N=>N!==e):a.push(e),s(a)},M=()=>{x(!0)},te=e=>{M(),R(e.target.value),P(!0)},se=()=>{R("");const e=document.getElementById("text-filter");e&&(e.value="")},S=(e,s,n)=>e.map((a,N)=>t.jsxs("p",{className:`${s.name}-filter input-container 
        font-opensans text-[13px] text-[#2e2e2e] leading-[16px] font-medium
        flex items-center justify-between gap-[10px]
        ${n?.includes(a)?"active":""}`,id:`${a.replace(/\s+/g,"-").toLowerCase()}-filter`,onClick:()=>s({target:{value:a}}),children:[a,t.jsx("img",{className:"close-button",alt:"close",src:"/close-item.svg"})]},a+N));return t.jsxs("div",{className:"program-wrapper inner-width",children:[t.jsxs("div",{id:"input-and-filter-wrapper",className:"",children:[t.jsxs("div",{id:"filters-bg",className:`bg-lightgrey sm:bg-transparent flex flex-col gap-[20px] p-[35px] max-w-[1128px] mx-auto
          sm:gap-[25px]
        sm:pt-[50px]
        md:pt-[75px]
        
        lg:px-0`,children:[t.jsx("input",{type:"text",id:"text-filter",className:` w-[100%] font-opensans text-[16px] sm:text-[17px] p-[22px] pr-[34px] pl-[34px] uppercase font-[400] border-[1px] 
        border-[#bcbcbc] placeholder-[#000000]
        lg:px-[50px]`,onChange:te,onClick:()=>M(),placeholder:"Search by keyword"}),t.jsxs("div",{ref:B,id:"filter-wrapper",className:`flex flex-col gap-[20px] sm:gap-[30px] 
            sm:grid sm:grid-cols-2
            md:flex
            md:gap-[40px] md:flex-row`,onClick:()=>M(),children:[t.jsx(z,{checkboxContent:S(l,X,i),title:"Schools",isOpen:E===0,onToggle:()=>D(0),index:0}),t.jsx(z,{checkboxContent:S(g,_,o),title:"Programs",isOpen:E===1,onToggle:()=>D(1),index:1}),t.jsx(z,{checkboxContent:S(f,q,c),title:"Options",isOpen:E===2,onToggle:()=>D(2),index:2})]}),t.jsx("hr",{className:"hidden sm:block border-[#bcbcbc]"})]}),t.jsxs("div",{id:"display-box-wrapper",className:`flex flex-col sm:flex-row justify-between min-h-[50px]
          max-w-[1128px] mx-auto px-[35px] lg:px-0

          `,children:[t.jsx("div",{onClick:()=>x(!0),id:"left-content",className:"flex flex-row flex-wrap  gap-[10px]",children:t.jsxs("div",{className:"relative z-10 filtered-display-box",children:[t.jsx("p",{className:`
              basis-[100%]
              font-domine 
              text-[14px]
              leading-[26px] font-normal pr-[15px]
              pt-[25px]
              sm:pt-0
              sm:basis-auto
              sm:text-[17px] `,children:"Filtered by:"}),!C&&i.length==0&&o.length==0&&c.length==0&&t.jsx("div",{className:"drop-down-item",children:t.jsx("p",{id:"all-text-filter",children:"All"})}),C&&t.jsx("div",{className:"drop-down-item",children:t.jsxs("p",{id:"search-text-filter",onClick:se,children:[C,t.jsx("img",{className:"close-button",alt:"close",src:"/close-item.svg"})]})}),t.jsx(Y,{boxId:"area-of-study",checkboxContent:S(i,X,i)}),t.jsx(Y,{boxId:"degree",checkboxContent:S(o,_,o)}),t.jsx(Y,{boxId:"options",checkboxContent:S(c,q,c)})]})}),t.jsxs("div",{onClick:()=>x(!0),id:"right-content",className:`flex flex-row sm:h-[50px] items-center 
     
            `,children:[t.jsxs("p",{className:`font-opensans font-normal text-[14px] leading-[26px]
                   pt-[40px]
                   pb-[20px]
                   sm:pb-0
            sm:pt-0`,children:["Displaying ",t.jsxs("strong",{children:[v.length," results"]})]}),t.jsx(h.img,{src:"/grid-icon.svg",alt:"Grid View",className:"hidden md:block h-[20px] w-[24.781px] ml-[25px] cursor-pointer",onClick:()=>V(""),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:T!="list"?1:.5}}),t.jsx(h.img,{src:"/list-icon.svg",alt:"List View",className:"hidden md:block h-[20px] w-[25.406px] ml-[5px] cursor-pointer",onClick:()=>V("list"),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:T==="list"?1:.5}})]})]})]}),v&&v.length===0&&t.jsxs("div",{id:"no-results",className:`bg-lightgrey max-w-[1128px] 
          p-[40px] mx-[30px]  
          mt-0
          sm:mt-[50px]
          lg:mx-auto
          md:py-[75px] md:px-[100px] `,children:[t.jsx("h3",{className:"font-domine font-[700] text-[21px] leading-[30px] md:mb-[15px]",children:"Please try your search again"}),t.jsx("p",{className:"font-domine font-normal leading-[35px] text-[18px] py-[18px]",children:"Your search results do not match any available programs."}),t.jsx("hr",{}),t.jsxs("p",{className:"font-domine font-normal leading-[35px] text-[18px] py-[18px]",children:["Need help finding a program? Contact"," ",t.jsx("a",{className:"underline text-primarylinkblue",href:"mailto:admiss@tcnj.edu",children:"admiss@tcnj.edu"}),","," ",t.jsx("a",{className:"underline text-primarylinkblue",href:"tel:1-609-771-2131",children:"609.771.2131"}),", to get more information."]})]}),t.jsx(h.div,{id:"filtered-programs-wrapper",className:`${T==="list"?"list-view flex flex-col md:gap-[25px]":"grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 "}
        gap-[20px]
        
           max-w-[1128px] mx-auto
           pb-[50px]
        p-[35px]
        pt-0
        sm:p-[35px]
        sm:pt-[35px]
        sm:gap-[30px]
        md:gap-[40px]
        md:pb-[100px]
        lg:px-0
        `,initial:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(typeof navigator<"u"?navigator.userAgent:"")?{opacity:1,y:0}:j?{opacity:1,y:0}:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(typeof navigator<"u"?navigator.userAgent:"")?0:.15,ease:"easeOut",duration:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(typeof navigator<"u"?navigator.userAgent:"")?0:.3},children:!y&&w?w.map((e,s)=>t.jsx(G,{program:e,listType:T,index:s,animationState:j,gradCheckCard:A},e.program.slug+s)):v.map((e,s)=>t.jsx(G,{program:e,listType:T,index:s,animationState:j,gradCheckCard:A},e.program.slug+s))})]})}export{le as default};

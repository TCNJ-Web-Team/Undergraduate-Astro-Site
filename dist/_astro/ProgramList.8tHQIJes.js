import{j as t}from"./jsx-runtime.D3GSbgeI.js";import{r as s}from"./index.Cs-REvGi.js";/* empty css                       */import{m as f}from"./proxy.DE21i8It.js";import"./index.yBjzXJbu.js";const G=({program:d,listType:p,index:l,animationState:u,gradCheckCard:b})=>{const[w]=s.useState(!1),[h,O]=s.useState(!0),y=w?"active-hover":"",j=p=="list";s.useEffect(()=>{setTimeout(()=>O(!1),1200)});const{slug:v,redirecturl:m,programOptions:k,additionalOptions:A}=d.program,{title:N}=d,g=m?m.replace("https://undergraduate-astro-site-t6y1l.kinsta.page",""):`./${v}`,i={Major:0,"Major/Specialization":0,Minor:1,Certificate:2,"Three-Year Bachelor's":3,Accelerated:4,"Dual Degree":5,"Teacher Education":6,Undeclared:7,Prelaw:8,Premed:9,"Premed/Prehealth":9};return t.jsx("div",{className:`program-card filter border-[1px] 
        border-[#bcbcbc] drop-shadow-none transition-all duration-300 bg-white ${y}
      ${h?"pulse":""}`,id:v,children:t.jsxs(f.a,{className:`program-card-gtm program-link block  px-[30px] pt-[35px] pb-[40px] sm:min-h-[300px]
        sm:px-[35px]
        lg:px-[50px]
        lg:pt-[48px]
         ${j&&"md:flex md:flex-row md:justify-between md:min-h-0 md:items-center md:py-[35px] lg:!pt-[35px]"}`,href:b?g.includes("https")?g:`./graduate/${g}`:g,target:g.includes("http")?"_blank":"_self",initial:u?{opacity:0,y:5}:{opacity:1,y:0},animate:{opacity:1,y:0},transition:{delay:(l+.25)*.15,ease:"easeOut",duration:.3},children:[t.jsx("h2",{className:`font-domine font-bold 
        text-[19px] leading-[28px]
        sm:text-[21px] sm:leading-[30px]`,children:N}),t.jsx("hr",{className:`my-[20px] border-[#BCBCBC] ${j&&"md:hidden"}`}),t.jsx("div",{className:`icon-container flex flex-wrap gap-x-[20px] gap-y-[10px] ${j&&"md:max-w-[260px] md:w-[100%]"}`,children:(k||A)&&[...k||[],...A||[]].slice().sort((x,o)=>i[x]-i[o]).map((x,o)=>{const $=T=>T.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,""),c=T=>{switch(T.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")){case"accelerated":return"w-[23.658px] h-[15px]";case"certificate":return"w-[14.881px] h-[15px]";case"dual-degree":return"w-[15.343px] h-[15px]";case"major":return"w-[13.865px] h-[15px]";case"majorspecialization":return"w-[13.865px] h-[15px]";case"minor":return"w-[14.041px] h-[11px]";case"prelaw":return"w-[18.63px] h-[15px]";case"premed":return"w-[15px] h-[15px]";case"premedprehealth":return"w-[15px] h-[15px]";case"teacher-education":return"w-[14.236px] h-[15px]";case"three-year-bachelors":return"w-[13.391px] h-[15px]";case"language":return"w-[17.641px] h-[14.984px]";case"undeclared-option":return"w-[11.223px] h-[15px]";default:return"w-auto h-auto max-h-[15px]"}};return t.jsxs("p",{className:`font-opensans text-[14px] leading-[15px] md:leading-[25px] inline-flex gap-x-[5px] items-center ${x.length>15&&"col-span-full"}`,children:[t.jsx("img",{loading:"lazy",src:`/card-icons/${$(x)}.svg`,alt:x,className:`${c(x)} object-contain`}),x]},o)})})]})})};function M({checkboxContent:d,title:p,isOpen:l,onToggle:u,index:b}){return t.jsxs("div",{className:`z-50 relative w-[100%] 
       
      ${l?"open-drop":""}`,children:[t.jsxs(f.div,{whileTap:{scale:.975},className:"z-30 relative",children:[t.jsx(f.div,{className:"h-[9px] w-[100%] bg-tcnjyellow origin-left",initial:{scaleX:0,opacity:0},animate:{scaleX:1,opacity:1},transition:{delay:(b+2)*.45,ease:[.22,0,.36,1],duration:.85}}),t.jsx(f.div,{initial:{"--background-color":"#bcbcbc"},animate:{"--background-color":"#fdd700"},className:`
          transition-all
          h-[1px] w-[100%] bg-[#bcbcbc] origin-left bg-[--background-color]`,transition:{delay:(b+2)*.45,ease:[.22,0,.36,1],duration:.85}}),t.jsx("h3",{className:`
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
        ${l?"open":""}`,onClick:u,children:p})]}),t.jsx("div",{className:`input-list relative md:absolute opacity-0  px-[34px] border-[1px]  w-[99%] ml-[.5%]
        border-[#bcbcbc]  bg-white  transition-all duration-300
        h-0 block-0 pointer-events-none z-0 
        mt-[-5px]
md:h-auto
scale-[.975]
lg:px-[50px]

        ${l&&"!ml-0 !w-[100%] !border-t-[0] !mt-0 pointer-events-auto block opacity-100  py-[30px] h-[auto!important] !scale-[1]"}
        `,id:`${l?"open-list":""}`,children:d.map((w,h)=>t.jsx("div",{className:"drop-down-item",children:w},h))})]})}const z=({boxId:d,checkboxContent:p})=>t.jsx(t.Fragment,{children:p&&p.map((l,u)=>t.jsx("div",{className:`drop-down-item ${d}`,children:l},u))});function le({data:d,redirectData:p,areaOfStudy:l,programOptionsClean:u,additionalOptions:b,gradCheck:w}){let h,O=!1;w?(O=!0,h=d.graduatePrograms.nodes.concat(p.gradProgramsRedirects.nodes.map(e=>({program:{slug:e.graduateProgramRedirect.redirectUrl,redirecturl:e.graduateProgramRedirect.redirectUrl,programOptions:e.graduateProgramRedirect.programOptions,additionalOptions:e.graduateProgramRedirect.additionalOptions,degreeType:e.graduateProgramRedirect.degreeType,school:e.graduateProgramRedirect.school,keywords:e.graduateProgramRedirect.keywords},title:e.title})))):h=d.programs.nodes.concat(p.programRedirects.nodes.map(e=>({program:e.redirectProgram,title:e.title})));const y=h,j=y.sort((e,r)=>e.title.localeCompare(r.title)).slice(0,12),[v,m]=s.useState(!1),[k,A]=s.useState(!1),[N,g]=s.useState(y),[i,x]=s.useState([]),[o,$]=s.useState([]),[c,T]=s.useState([]),[C,Y]=s.useState(""),[E,H]=s.useState(null),[L,U]=s.useState(""),B=s.useRef(null),R=e=>{H(E===e?null:e),A(!0)},F=e=>{if(e.type==="click"&&B.current&&!B.current.contains(e.target)||e.type==="keydown"&&e.key==="Escape"){H(null);const r=document.getElementById("open-list");r&&r.removeAttribute("id")}},[V,K]=s.useState(!1);s.useEffect(()=>{K(!0),V&&(()=>{try{const a=sessionStorage.getItem("programListScrollY");a!==null&&parseInt(a,10)>100&&m(!0)}catch{}})();let r=!1;const n=()=>{r||(window.requestAnimationFrame(()=>{if(window.scrollY>20)try{sessionStorage.setItem("programListScrollY",window.scrollY.toString())}catch{}window.scrollY>100&&!v&&m(!0),r=!1}),r=!0)};return window.addEventListener("scroll",n,{passive:!0}),()=>{window.removeEventListener("scroll",n)}},[V,v]),s.useEffect(()=>{const e=y.sort((r,n)=>r.title.localeCompare(n.title));g(e)},[]),s.useEffect(()=>(document.addEventListener("click",F),document.addEventListener("keydown",F),()=>{document.removeEventListener("click",F),document.removeEventListener("keydown",F)}),[]),s.useEffect(()=>{J()},[i,o,c,C]);const J=()=>{let e=y.filter(Q);i.length>0&&(e=e.filter(W)),o.length>0&&(e=e.filter(Z)),c.length>0&&(e=e.filter(ee)),e=e.sort((r,n)=>r.title.localeCompare(n.title)),g(e)},Q=e=>{const r=C.toLowerCase(),n=Array.isArray(e.program.school)?e.program.school:[e.program.school],a=e.program.keywords?e.program.keywords.toLowerCase().includes(r):!1;return e.title.toLowerCase().includes(r)||n.some(P=>P.toString().toLowerCase().includes(r))||a},W=e=>{const r=Array.isArray(e.program.school)?e.program.school:[e.program.school];return i.some(n=>r.includes(n))},Z=e=>o.some(r=>(e.program.programOptions??[]).includes(r)),ee=e=>c.some(r=>(e.program.additionalOptions??[]).includes(r)),X=e=>D(e.target.value,x,i),_=e=>D(e.target.value,$,o),q=e=>D(e.target.value,T,c),D=(e,r,n)=>{let a=[...n];a.includes(e)?a=a.filter(P=>P!==e):a.push(e),r(a)},I=()=>{m(!0)},te=e=>{I(),Y(e.target.value),A(!0)},re=()=>{Y("");const e=document.getElementById("text-filter");e&&(e.value="")},S=(e,r,n)=>e.map((a,P)=>t.jsxs("p",{className:`${r.name}-filter input-container 
        font-opensans text-[13px] text-[#2e2e2e] leading-[16px] font-medium
        flex items-center justify-between gap-[10px]
        ${n?.includes(a)?"active":""}`,id:`${a.replace(/\s+/g,"-").toLowerCase()}-filter`,onClick:()=>r({target:{value:a}}),children:[a,t.jsx("img",{className:"close-button",alt:"close",src:"/close-item.svg"})]},a+P));return t.jsxs("div",{className:"program-wrapper inner-width",children:[t.jsxs("div",{id:"input-and-filter-wrapper",className:"",children:[t.jsxs("div",{id:"filters-bg",className:`bg-lightgrey sm:bg-transparent flex flex-col gap-[20px] p-[35px] max-w-[1128px] mx-auto
          sm:gap-[25px]
        sm:pt-[50px]
        md:pt-[75px]
        
        lg:px-0`,children:[t.jsx("input",{type:"text",id:"text-filter",className:` w-[100%] font-opensans text-[16px] sm:text-[17px] p-[22px] pr-[34px] pl-[34px] uppercase font-[400] border-[1px] 
        border-[#bcbcbc] placeholder-[#000000]
        lg:px-[50px]`,onChange:te,onClick:()=>I(),placeholder:"Search by keyword"}),t.jsxs("div",{ref:B,id:"filter-wrapper",className:`flex flex-col gap-[20px] sm:gap-[30px] 
            sm:grid sm:grid-cols-2
            md:flex
            md:gap-[40px] md:flex-row`,onClick:()=>I(),children:[t.jsx(M,{checkboxContent:S(l,X,i),title:"Schools",isOpen:E===0,onToggle:()=>R(0),index:0}),t.jsx(M,{checkboxContent:S(u,_,o),title:"Programs",isOpen:E===1,onToggle:()=>R(1),index:1}),t.jsx(M,{checkboxContent:S(b,q,c),title:"Options",isOpen:E===2,onToggle:()=>R(2),index:2})]}),t.jsx("hr",{className:"hidden sm:block border-[#bcbcbc]"})]}),t.jsxs("div",{id:"display-box-wrapper",className:`flex flex-col sm:flex-row justify-between min-h-[50px]
          max-w-[1128px] mx-auto px-[35px] lg:px-0

          `,children:[t.jsx("div",{onClick:()=>m(!0),id:"left-content",className:"flex flex-row flex-wrap  gap-[10px]",children:t.jsxs("div",{className:"relative z-10 filtered-display-box",children:[t.jsx("p",{className:`
              basis-[100%]
              font-domine 
              text-[14px]
              leading-[26px] font-normal pr-[15px]
              pt-[25px]
              sm:pt-0
              sm:basis-auto
              sm:text-[17px] `,children:"Filtered by:"}),!C&&i.length==0&&o.length==0&&c.length==0&&t.jsx("div",{className:"drop-down-item",children:t.jsx("p",{id:"all-text-filter",children:"All"})}),C&&t.jsx("div",{className:"drop-down-item",children:t.jsxs("p",{id:"search-text-filter",onClick:re,children:[C,t.jsx("img",{className:"close-button",alt:"close",src:"/close-item.svg"})]})}),t.jsx(z,{boxId:"area-of-study",checkboxContent:S(i,X,i)}),t.jsx(z,{boxId:"degree",checkboxContent:S(o,_,o)}),t.jsx(z,{boxId:"options",checkboxContent:S(c,q,c)})]})}),t.jsxs("div",{onClick:()=>m(!0),id:"right-content",className:`flex flex-row sm:h-[50px] items-center 
     
            `,children:[t.jsxs("p",{className:`font-opensans font-normal text-[14px] leading-[26px]
                   pt-[40px]
                   pb-[20px]
                   sm:pb-0
            sm:pt-0`,children:["Displaying ",t.jsxs("strong",{children:[N.length," results"]})]}),t.jsx(f.img,{src:"/grid-icon.svg",alt:"Grid View",className:"hidden md:block h-[20px] w-[24.781px] ml-[25px] cursor-pointer",onClick:()=>U(""),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:L!="list"?1:.5}}),t.jsx(f.img,{src:"/list-icon.svg",alt:"List View",className:"hidden md:block h-[20px] w-[25.406px] ml-[5px] cursor-pointer",onClick:()=>U("list"),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:L==="list"?1:.5}})]})]})]}),N&&N.length===0&&t.jsxs("div",{id:"no-results",className:`bg-lightgrey max-w-[1128px] 
          p-[40px] mx-[30px]  
          mt-0
          sm:mt-[50px]
          lg:mx-auto
          md:py-[75px] md:px-[100px] `,children:[t.jsx("h3",{className:"font-domine font-[700] text-[21px] leading-[30px] md:mb-[15px]",children:"Please try your search again"}),t.jsx("p",{className:"font-domine font-normal leading-[35px] text-[18px] py-[18px]",children:"Your search results do not match any available programs."}),t.jsx("hr",{}),t.jsxs("p",{className:"font-domine font-normal leading-[35px] text-[18px] py-[18px]",children:["Need help finding a program? Contact"," ",w?t.jsxs(t.Fragment,{children:[t.jsx("a",{className:"underline text-primarylinkblue",href:"mailto:graduate@tcnj.edu",children:"graduate@tcnj.edu"}),","," ",t.jsx("a",{className:"underline text-primarylinkblue",href:"tel:1-609-771-2300",children:"609.771.2300"})]}):t.jsxs(t.Fragment,{children:[t.jsx("a",{className:"underline text-primarylinkblue",href:"mailto:admiss@tcnj.edu",children:"admiss@tcnj.edu"}),","," ",t.jsx("a",{className:"underline text-primarylinkblue",href:"tel:1-609-771-2131",children:"609.771.2131"})]}),", to get more information."]})]}),t.jsx(f.div,{id:"filtered-programs-wrapper",className:`${L==="list"?"list-view flex flex-col md:gap-[25px]":"grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 "}
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
        `,initial:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(typeof navigator<"u"?navigator.userAgent:"")?{opacity:1,y:0}:k?{opacity:1,y:0}:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(typeof navigator<"u"?navigator.userAgent:"")?0:.15,ease:"easeOut",duration:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(typeof navigator<"u"?navigator.userAgent:"")?0:.3},children:!v&&j?j.map((e,r)=>t.jsx(G,{program:e,listType:L,index:r,animationState:k,gradCheckCard:O},e.program.slug+r)):N.map((e,r)=>t.jsx(G,{program:e,listType:L,index:r,animationState:k,gradCheckCard:O},e.program.slug+r))})]})}export{le as default};

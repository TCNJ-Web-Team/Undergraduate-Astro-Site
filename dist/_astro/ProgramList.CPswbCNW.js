import{j as e}from"./jsx-runtime.C3nPk8XT.js";import{r as a}from"./index.Cq8P9Jm4.js";/* empty css                       */import{m as u}from"./motion.C8JOvv4d.js";const q=({program:m,listType:g,index:l,animationState:h})=>{const[x,$]=a.useState(!1),[f,j]=a.useState(!0),v=x?"active-hover":"",p=g=="list";a.useEffect(()=>{setTimeout(()=>j(!1),1200)});const{slug:N,redirecturl:o,programOptions:k,additionalOptions:i}=m.program,{title:T}=m,c=o?o.replace("https://undergraduate-astro-site-t6y1l.kinsta.page",""):`./${N}`,C={Major:0,"Major/Specialization":0,Minor:1,Certificate:2,"Three-Year Bachelor's":3,Accelerated:4,"Dual Degree":5,"Teacher Education":6,Undeclared:7,Prelaw:8,Premed:9,"Premed/Prehealth":9};return e.jsx("div",{className:`program-card filter drop-shadow-none transition-all duration-300 bg-white ${v}
      ${f?"pulse":""}`,id:N,children:e.jsxs(u.a,{className:`program-card-gtm program-link block border-[1px] 
        border-[#bcbcbc] px-[30px] pt-[35px] pb-[40px] sm:min-h-[300px]
        sm:px-[35px]
        lg:px-[50px]
        lg:pt-[48px]
         ${p&&"md:flex md:flex-row md:justify-between md:min-h-0 md:items-center md:py-[35px] lg:!pt-[35px]"}`,href:c,target:c.includes("http")?"_blank":"_self",initial:h?{opacity:0,y:5}:{opacity:1,y:0},animate:{opacity:1,y:0},transition:{delay:(l+.25)*.15,ease:"easeOut",duration:.3},children:[e.jsx("h2",{className:`font-domine font-bold 
        text-[19px] leading-[28px]
        sm:text-[21px] sm:leading-[30px]`,children:T}),e.jsx("hr",{className:`my-[20px] border-[#BCBCBC] ${p&&"md:hidden"}`}),e.jsx("div",{className:`icon-container flex flex-wrap gap-x-[20px] gap-y-[10px] ${p&&"md:max-w-[260px] md:w-[100%]"}`,children:(k||i)&&[...k||[],...i||[]].slice().sort((r,b)=>C[r]-C[b]).map((r,b)=>{const y=S=>S.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"");return e.jsxs("p",{className:`font-opensans text-[14px] leading-[15px] md:leading-[25px] inline-flex gap-x-[5px] items-center ${r.length>15&&"col-span-full"}`,children:[e.jsx("img",{src:`/card-icons/${y(r)}.svg`,alt:r,className:"max-h-[15px]"}),r]},b)})})]})})};function L({checkboxContent:m,title:g,isOpen:l,onToggle:h,index:x}){return e.jsxs("div",{className:`z-50 relative w-[100%] 
       
      ${l?"open-drop":""}`,children:[e.jsxs(u.div,{whileTap:{scale:.975},className:"z-30 relative",children:[e.jsx(u.div,{className:"h-[9px] w-[100%] bg-tcnjyellow origin-left",initial:{scaleX:0,opacity:0},animate:{scaleX:1,opacity:1},transition:{delay:(x+2)*.45,ease:[.22,0,.36,1],duration:.85}}),e.jsx(u.div,{initial:{"--background-color":"#bcbcbc"},animate:{"--background-color":"#fdd700"},className:`
          transition-all
          h-[1px] w-[100%] bg-[#bcbcbc] origin-left bg-[--background-color]`,transition:{delay:(x+2)*.45,ease:[.22,0,.36,1],duration:.85}}),e.jsx("h3",{className:`
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
        ${l?"open":""}`,onClick:h,children:g})]}),e.jsx("div",{className:`input-list relative md:absolute opacity-0  px-[34px] border-[1px]  w-[99%] ml-[.5%]
        border-[#bcbcbc]  bg-white  transition-all duration-300
        h-0 block-0 pointer-events-none z-0 
        mt-[-5px]
md:h-auto
scale-[.975]
lg:px-[50px]

        ${l&&"!ml-0 !w-[100%] !border-t-[0] !mt-0 pointer-events-auto block opacity-100  py-[30px] h-[auto!important] !scale-[1]"}
        `,id:`${l?"open-list":""}`,children:m.map(($,f)=>e.jsx("div",{className:"drop-down-item",children:$},f))})]})}const B=({filteredData:m,boxId:g,checkboxContent:l})=>e.jsx(e.Fragment,{children:l&&l.map((h,x)=>e.jsx("div",{className:`drop-down-item ${g}`,children:h},x))});function Z({data:m,redirectData:g,areaOfStudy:l,programOptionsClean:h,additionalOptions:x}){const f=m.programs.nodes.concat(g.programRedirects.nodes.map(t=>({program:t.redirectProgram,title:t.title}))),[j,v]=a.useState(!1),[p,N]=a.useState(f),[o,k]=a.useState([]),[i,T]=a.useState([]),[c,C]=a.useState([]),[r,b]=a.useState(""),[y,S]=a.useState(null),[O,I]=a.useState(""),P=a.useRef(null),F=t=>{S(y===t?null:t),v(!0)},A=t=>{if(t.type==="click"&&P.current&&!P.current.contains(t.target)||t.type==="keydown"&&t.key==="Escape"){S(null);const s=document.getElementById("open-list");s&&s.removeAttribute("id")}};a.useEffect(()=>(document.addEventListener("click",A),document.addEventListener("keydown",A),()=>{document.removeEventListener("click",A),document.removeEventListener("keydown",A)}),[]),a.useEffect(()=>{V()},[o,i,c,r]);const V=()=>{let t=f.filter(M);o.length>0&&(t=t.filter(U)),i.length>0&&(t=t.filter(X)),c.length>0&&(t=t.filter(Y)),t=t.sort((s,d)=>s.title.localeCompare(d.title)),N(t)},M=t=>{const s=r.toLowerCase(),d=Array.isArray(t.program.school)?t.program.school:[t.program.school];return t.title.toLowerCase().includes(s)||d.some(n=>n.toString().toLowerCase().includes(s))},U=t=>{const s=Array.isArray(t.program.school)?t.program.school:[t.program.school];return o.some(d=>s.includes(d))},X=t=>i.some(s=>(t.program.programOptions??[]).includes(s)),Y=t=>c.some(s=>(t.program.additionalOptions??[]).includes(s)),z=t=>D(t.target.value,k,o),R=t=>D(t.target.value,T,i),H=t=>D(t.target.value,C,c),D=(t,s,d)=>{let n=[...d];n.includes(t)?n=n.filter(E=>E!==t):n.push(t),s(n)},_=t=>{b(t.target.value),v(!0)},G=()=>{b("");const t=document.getElementById("text-filter");t&&(t.value="")},w=(t,s,d)=>t.map((n,E)=>e.jsxs("p",{className:`${s.name}-filter input-container 
        font-opensans text-[13px] text-[#2e2e2e] leading-[16px] font-medium
        flex items-center justify-between gap-[10px]
        ${d?.includes(n)?"active":""}`,id:`${n.replace(/\s+/g,"-").toLowerCase()}-filter`,onClick:()=>s({target:{value:n}}),children:[n,e.jsx("img",{className:"close-button",alt:"close",src:"/close-item.svg"})]},n+E));return e.jsxs("div",{className:"program-wrapper inner-width",children:[e.jsxs("div",{id:"input-and-filter-wrapper",className:"",children:[e.jsxs("div",{id:"filters-bg",className:`bg-lightgrey sm:bg-transparent flex flex-col gap-[20px] p-[35px] max-w-[1128px] mx-auto
          sm:gap-[25px]
        sm:pt-[50px]
        md:pt-[75px]
        
        lg:px-0`,children:[e.jsx("input",{type:"text",id:"text-filter",className:` w-[100%] font-opensans text-[16px] sm:text-[17px] p-[22px] pr-[34px] pl-[34px] uppercase font-[400] border-[1px] 
        border-[#bcbcbc] placeholder-[#000000]
        lg:px-[50px]`,onChange:_,placeholder:"Search by keyword"}),e.jsxs("div",{ref:P,id:"filter-wrapper",className:`flex flex-col gap-[20px] sm:gap-[30px] 
            sm:grid sm:grid-cols-2
            md:flex
            md:gap-[40px] md:flex-row`,children:[e.jsx(L,{checkboxContent:w(l,z,o),title:"Schools",isOpen:y===0,onToggle:()=>F(0),index:0}),e.jsx(L,{checkboxContent:w(h,R,i),title:"Programs",isOpen:y===1,onToggle:()=>F(1),index:1}),e.jsx(L,{checkboxContent:w(x,H,c),title:"Options",isOpen:y===2,onToggle:()=>F(2),index:2})]}),e.jsx("hr",{className:"hidden sm:block border-[#bcbcbc]"})]}),e.jsxs("div",{id:"display-box-wrapper",className:`flex flex-col sm:flex-row justify-between min-h-[50px]
          max-w-[1128px] mx-auto px-[35px] lg:px-0

          `,children:[e.jsx("div",{id:"left-content",className:"flex flex-row flex-wrap  gap-[10px]",children:e.jsxs("div",{className:"relative z-10 filtered-display-box",children:[e.jsx("p",{className:`
              basis-[100%]
              font-domine 
              text-[14px]
              leading-[26px] font-normal pr-[15px]
              pt-[25px]
              sm:pt-0
              sm:basis-auto
              sm:text-[17px] `,children:"Filtered by:"}),!r&&o.length==0&&i.length==0&&c.length==0&&e.jsx("div",{className:"drop-down-item",children:e.jsx("p",{id:"all-text-filter",children:"All"})}),r&&e.jsx("div",{className:"drop-down-item",children:e.jsxs("p",{id:"search-text-filter",onClick:G,children:[r,e.jsx("img",{className:"close-button",alt:"close",src:"/close-item.svg"})]})}),e.jsx(B,{boxId:"area-of-study",checkboxContent:w(o,z,o)}),e.jsx(B,{boxId:"degree",checkboxContent:w(i,R,i)}),e.jsx(B,{boxId:"options",checkboxContent:w(c,H,c)})]})}),e.jsxs("div",{id:"right-content",className:`flex flex-row sm:h-[50px] items-center 
     
            `,children:[e.jsxs("p",{className:`font-opensans font-normal text-[14px] leading-[26px]
                   pt-[40px]
                   pb-[20px]
                   sm:pb-0
            sm:pt-0`,children:["Displaying ",e.jsxs("strong",{children:[p.length," results"]})]}),e.jsx(u.img,{src:"/grid-icon.svg",alt:"Grid View",className:"hidden md:block h-[20px] w-auto ml-[25px] cursor-pointer",onClick:()=>I(""),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:O!="list"?1:.5}}),e.jsx(u.img,{src:"/list-icon.svg",alt:"List View",className:"hidden md:block h-[20px] w-auto ml-[5px] cursor-pointer",onClick:()=>I("list"),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:O==="list"?1:.5}})]})]})]}),p&&p.length===0&&e.jsxs("div",{id:"no-results",className:`bg-lightgrey max-w-[1128px] 
          p-[40px] mx-[30px]  
          mt-0
          sm:mt-[50px]
          lg:mx-auto
          md:py-[75px] md:px-[100px] `,children:[e.jsx("h3",{className:"font-domine font-[700] text-[21px] leading-[30px] md:mb-[15px]",children:"Please try your search again"}),e.jsx("p",{className:"font-domine font-normal leading-[35px] text-[18px] py-[18px]",children:"Your search results do not match any available programs."}),e.jsx("hr",{}),e.jsxs("p",{className:"font-domine font-normal leading-[35px] text-[18px] py-[18px]",children:["Need help finding a program? Contact"," ",e.jsx("a",{className:"underline text-primarylinkblue",href:"mailto:admiss@tcnj.edu",children:"admiss@tcnj.edu"}),","," ",e.jsx("a",{className:"underline text-primarylinkblue",href:"tel:1-609-771-2131",children:"609.771.2131"}),", to get more information."]})]}),e.jsx(u.div,{id:"filtered-programs-wrapper",className:`${O==="list"?"list-view flex flex-col md:gap-[25px]":"grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 "}
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
        `,initial:j?{opacity:1,y:0}:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:.15,ease:"easeOut",duration:.3},children:p&&p.map((t,s)=>e.jsx(q,{program:t,listType:O,index:s,animationState:j},t.program.slug+s))})]})}export{Z as default};

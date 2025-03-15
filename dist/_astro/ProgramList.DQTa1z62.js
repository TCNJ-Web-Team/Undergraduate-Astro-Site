import{j as e}from"./jsx-runtime.C3nPk8XT.js";import{r as a}from"./index.Cq8P9Jm4.js";/* empty css                       */import{m as f}from"./motion.C8JOvv4d.js";const q=({program:g,listType:h,index:l,animationState:u})=>{const[x,$]=a.useState(!1),[b,v]=a.useState(!0),N=x?"active-hover":"",p=h=="list";a.useEffect(()=>{setTimeout(()=>v(!1),1200)});const{slug:k,redirecturl:i,programOptions:C,additionalOptions:o}=g.program,{title:T}=g,c=i?i.replace("https://undergraduate-astro-site-t6y1l.kinsta.page",""):`./${k}`,S={Major:0,"Major/Specialization":0,Minor:1,Certificate:2,"Three-Year Bachelor's":3,Accelerated:4,"Dual Degree":5,"Teacher Education":6,Undeclared:7,Prelaw:8,Premed:9,"Premed/Prehealth":9};return e.jsx("div",{className:`program-card filter drop-shadow-none transition-all duration-300 bg-white ${N}
      ${b?"pulse":""}`,id:k,children:e.jsxs(f.a,{className:`program-card-gtm program-link block border-[1px] 
        border-[#bcbcbc] px-[30px] pt-[35px] pb-[40px] sm:min-h-[300px]
        sm:px-[35px]
        lg:px-[50px]
        lg:pt-[48px]
         ${p&&"md:flex md:flex-row md:justify-between md:min-h-0 md:items-center md:py-[35px] lg:!pt-[35px]"}`,href:c,target:c.includes("http")?"_blank":"_self",initial:u?{opacity:0,y:5}:{opacity:1,y:0},animate:{opacity:1,y:0},transition:{delay:(l+.25)*.15,ease:"easeOut",duration:.3},children:[e.jsx("h2",{className:`font-domine font-bold 
        text-[19px] leading-[28px]
        sm:text-[21px] sm:leading-[30px]`,children:T}),e.jsx("hr",{className:`my-[20px] border-[#BCBCBC] ${p&&"md:hidden"}`}),e.jsx("div",{className:`icon-container flex flex-wrap gap-x-[20px] gap-y-[10px] ${p&&"md:max-w-[260px] md:w-[100%]"}`,children:(C||o)&&[...C||[],...o||[]].slice().sort((r,w)=>S[r]-S[w]).map((r,w)=>{const y=m=>m.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,""),O=m=>{switch(m.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")){case"accelerated":return"w-[23.658px] h-[15px]";case"certificate":return"w-[14.881px] h-[15px]";case"dual-degree":return"w-[15.343px] h-[15px]";case"major":return"w-[13.865px] h-[15px]";case"majorspecialization":return"w-[13.865px] h-[15px]";case"minor":return"w-[14.041px] h-[11px]";case"prelaw":return"w-[18.63px] h-[15px]";case"premed":return"w-[15px] h-[15px]";case"premedprehealth":return"w-[15px] h-[15px]";case"teacher-education":return"w-[14.236px] h-[15px]";case"three-year-bachelors":return"w-[13.391px] h-[15px]";case"undeclared-option":return"w-[11.223px] h-[15px]";default:return"w-auto h-auto max-h-[15px]"}};return e.jsxs("p",{className:`font-opensans text-[14px] leading-[15px] md:leading-[25px] inline-flex gap-x-[5px] items-center ${r.length>15&&"col-span-full"}`,children:[e.jsx("img",{loading:"lazy",src:`/card-icons/${y(r)}.svg`,alt:r,className:`${O(r)} object-contain`}),r]},w)})})]})})};function B({checkboxContent:g,title:h,isOpen:l,onToggle:u,index:x}){return e.jsxs("div",{className:`z-50 relative w-[100%] 
       
      ${l?"open-drop":""}`,children:[e.jsxs(f.div,{whileTap:{scale:.975},className:"z-30 relative",children:[e.jsx(f.div,{className:"h-[9px] w-[100%] bg-tcnjyellow origin-left",initial:{scaleX:0,opacity:0},animate:{scaleX:1,opacity:1},transition:{delay:(x+2)*.45,ease:[.22,0,.36,1],duration:.85}}),e.jsx(f.div,{initial:{"--background-color":"#bcbcbc"},animate:{"--background-color":"#fdd700"},className:`
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
        ${l?"open":""}`,onClick:u,children:h})]}),e.jsx("div",{className:`input-list relative md:absolute opacity-0  px-[34px] border-[1px]  w-[99%] ml-[.5%]
        border-[#bcbcbc]  bg-white  transition-all duration-300
        h-0 block-0 pointer-events-none z-0 
        mt-[-5px]
md:h-auto
scale-[.975]
lg:px-[50px]

        ${l&&"!ml-0 !w-[100%] !border-t-[0] !mt-0 pointer-events-auto block opacity-100  py-[30px] h-[auto!important] !scale-[1]"}
        `,id:`${l?"open-list":""}`,children:g.map(($,b)=>e.jsx("div",{className:"drop-down-item",children:$},b))})]})}const z=({filteredData:g,boxId:h,checkboxContent:l})=>e.jsx(e.Fragment,{children:l&&l.map((u,x)=>e.jsx("div",{className:`drop-down-item ${h}`,children:u},x))});function Z({data:g,redirectData:h,areaOfStudy:l,programOptionsClean:u,additionalOptions:x}){const b=g.programs.nodes.concat(h.programRedirects.nodes.map(t=>({program:t.redirectProgram,title:t.title}))),[v,N]=a.useState(!1),[p,k]=a.useState(b),[i,C]=a.useState([]),[o,T]=a.useState([]),[c,S]=a.useState([]),[r,w]=a.useState(""),[y,O]=a.useState(null),[m,P]=a.useState(""),D=a.useRef(null),F=t=>{O(y===t?null:t),N(!0)},A=t=>{if(t.type==="click"&&D.current&&!D.current.contains(t.target)||t.type==="keydown"&&t.key==="Escape"){O(null);const s=document.getElementById("open-list");s&&s.removeAttribute("id")}};a.useEffect(()=>(document.addEventListener("click",A),document.addEventListener("keydown",A),()=>{document.removeEventListener("click",A),document.removeEventListener("keydown",A)}),[]),a.useEffect(()=>{V()},[i,o,c,r]);const V=()=>{let t=b.filter(M);i.length>0&&(t=t.filter(U)),o.length>0&&(t=t.filter(X)),c.length>0&&(t=t.filter(Y)),t=t.sort((s,d)=>s.title.localeCompare(d.title)),k(t)},M=t=>{const s=r.toLowerCase(),d=Array.isArray(t.program.school)?t.program.school:[t.program.school];return t.title.toLowerCase().includes(s)||d.some(n=>n.toString().toLowerCase().includes(s))},U=t=>{const s=Array.isArray(t.program.school)?t.program.school:[t.program.school];return i.some(d=>s.includes(d))},X=t=>o.some(s=>(t.program.programOptions??[]).includes(s)),Y=t=>c.some(s=>(t.program.additionalOptions??[]).includes(s)),I=t=>E(t.target.value,C,i),R=t=>E(t.target.value,T,o),H=t=>E(t.target.value,S,c),E=(t,s,d)=>{let n=[...d];n.includes(t)?n=n.filter(L=>L!==t):n.push(t),s(n)},_=t=>{w(t.target.value),N(!0)},G=()=>{w("");const t=document.getElementById("text-filter");t&&(t.value="")},j=(t,s,d)=>t.map((n,L)=>e.jsxs("p",{className:`${s.name}-filter input-container 
        font-opensans text-[13px] text-[#2e2e2e] leading-[16px] font-medium
        flex items-center justify-between gap-[10px]
        ${d?.includes(n)?"active":""}`,id:`${n.replace(/\s+/g,"-").toLowerCase()}-filter`,onClick:()=>s({target:{value:n}}),children:[n,e.jsx("img",{className:"close-button",alt:"close",src:"/close-item.svg"})]},n+L));return e.jsxs("div",{className:"program-wrapper inner-width",children:[e.jsxs("div",{id:"input-and-filter-wrapper",className:"",children:[e.jsxs("div",{id:"filters-bg",className:`bg-lightgrey sm:bg-transparent flex flex-col gap-[20px] p-[35px] max-w-[1128px] mx-auto
          sm:gap-[25px]
        sm:pt-[50px]
        md:pt-[75px]
        
        lg:px-0`,children:[e.jsx("input",{type:"text",id:"text-filter",className:` w-[100%] font-opensans text-[16px] sm:text-[17px] p-[22px] pr-[34px] pl-[34px] uppercase font-[400] border-[1px] 
        border-[#bcbcbc] placeholder-[#000000]
        lg:px-[50px]`,onChange:_,placeholder:"Search by keyword"}),e.jsxs("div",{ref:D,id:"filter-wrapper",className:`flex flex-col gap-[20px] sm:gap-[30px] 
            sm:grid sm:grid-cols-2
            md:flex
            md:gap-[40px] md:flex-row`,children:[e.jsx(B,{checkboxContent:j(l,I,i),title:"Schools",isOpen:y===0,onToggle:()=>F(0),index:0}),e.jsx(B,{checkboxContent:j(u,R,o),title:"Programs",isOpen:y===1,onToggle:()=>F(1),index:1}),e.jsx(B,{checkboxContent:j(x,H,c),title:"Options",isOpen:y===2,onToggle:()=>F(2),index:2})]}),e.jsx("hr",{className:"hidden sm:block border-[#bcbcbc]"})]}),e.jsxs("div",{id:"display-box-wrapper",className:`flex flex-col sm:flex-row justify-between min-h-[50px]
          max-w-[1128px] mx-auto px-[35px] lg:px-0

          `,children:[e.jsx("div",{id:"left-content",className:"flex flex-row flex-wrap  gap-[10px]",children:e.jsxs("div",{className:"relative z-10 filtered-display-box",children:[e.jsx("p",{className:`
              basis-[100%]
              font-domine 
              text-[14px]
              leading-[26px] font-normal pr-[15px]
              pt-[25px]
              sm:pt-0
              sm:basis-auto
              sm:text-[17px] `,children:"Filtered by:"}),!r&&i.length==0&&o.length==0&&c.length==0&&e.jsx("div",{className:"drop-down-item",children:e.jsx("p",{id:"all-text-filter",children:"All"})}),r&&e.jsx("div",{className:"drop-down-item",children:e.jsxs("p",{id:"search-text-filter",onClick:G,children:[r,e.jsx("img",{className:"close-button",alt:"close",src:"/close-item.svg"})]})}),e.jsx(z,{boxId:"area-of-study",checkboxContent:j(i,I,i)}),e.jsx(z,{boxId:"degree",checkboxContent:j(o,R,o)}),e.jsx(z,{boxId:"options",checkboxContent:j(c,H,c)})]})}),e.jsxs("div",{id:"right-content",className:`flex flex-row sm:h-[50px] items-center 
     
            `,children:[e.jsxs("p",{className:`font-opensans font-normal text-[14px] leading-[26px]
                   pt-[40px]
                   pb-[20px]
                   sm:pb-0
            sm:pt-0`,children:["Displaying ",e.jsxs("strong",{children:[p.length," results"]})]}),e.jsx(f.img,{src:"/grid-icon.svg",alt:"Grid View",className:"hidden md:block h-[20px] w-[24.781px] ml-[25px] cursor-pointer",onClick:()=>P(""),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:m!="list"?1:.5}}),e.jsx(f.img,{src:"/list-icon.svg",alt:"List View",className:"hidden md:block h-[20px] w-[25.406px] ml-[5px] cursor-pointer",onClick:()=>P("list"),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:m==="list"?1:.5}})]})]})]}),p&&p.length===0&&e.jsxs("div",{id:"no-results",className:`bg-lightgrey max-w-[1128px] 
          p-[40px] mx-[30px]  
          mt-0
          sm:mt-[50px]
          lg:mx-auto
          md:py-[75px] md:px-[100px] `,children:[e.jsx("h3",{className:"font-domine font-[700] text-[21px] leading-[30px] md:mb-[15px]",children:"Please try your search again"}),e.jsx("p",{className:"font-domine font-normal leading-[35px] text-[18px] py-[18px]",children:"Your search results do not match any available programs."}),e.jsx("hr",{}),e.jsxs("p",{className:"font-domine font-normal leading-[35px] text-[18px] py-[18px]",children:["Need help finding a program? Contact"," ",e.jsx("a",{className:"underline text-primarylinkblue",href:"mailto:admiss@tcnj.edu",children:"admiss@tcnj.edu"}),","," ",e.jsx("a",{className:"underline text-primarylinkblue",href:"tel:1-609-771-2131",children:"609.771.2131"}),", to get more information."]})]}),e.jsx(f.div,{id:"filtered-programs-wrapper",className:`${m==="list"?"list-view flex flex-col md:gap-[25px]":"grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 "}
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
        `,initial:v?{opacity:1,y:0}:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:.15,ease:"easeOut",duration:.3},children:p&&p.map((t,s)=>e.jsx(q,{program:t,listType:m,index:s,animationState:v},t.program.slug+s))})]})}export{Z as default};

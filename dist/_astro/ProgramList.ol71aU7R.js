import{j as e}from"./jsx-runtime.D3GSbgeI.js";import{r as a}from"./index.Cs-REvGi.js";/* empty css                       */import{m as u}from"./proxy.DE21i8It.js";import"./index.yBjzXJbu.js";const q=({program:d,listType:x,index:i,animationState:h})=>{const[f]=a.useState(!1),[k,b]=a.useState(!0),C=f?"active-hover":"",w=x=="list";a.useEffect(()=>{setTimeout(()=>b(!1),1200)});const{slug:m,redirecturl:S,programOptions:n,additionalOptions:O}=d.program,{title:o}=d,A=S?S.replace("https://undergraduate-astro-site-t6y1l.kinsta.page",""):`./${m}`,l={Major:0,"Major/Specialization":0,Minor:1,Certificate:2,"Three-Year Bachelor's":3,Accelerated:4,"Dual Degree":5,"Teacher Education":6,Undeclared:7,Prelaw:8,Premed:9,"Premed/Prehealth":9};return e.jsx("div",{className:`program-card filter drop-shadow-none transition-all duration-300 bg-white ${C}
      ${k?"pulse":""}`,id:m,children:e.jsxs(u.a,{className:`program-card-gtm program-link block border-[1px] 
        border-[#bcbcbc] px-[30px] pt-[35px] pb-[40px] sm:min-h-[300px]
        sm:px-[35px]
        lg:px-[50px]
        lg:pt-[48px]
         ${w&&"md:flex md:flex-row md:justify-between md:min-h-0 md:items-center md:py-[35px] lg:!pt-[35px]"}`,href:A,target:A.includes("http")?"_blank":"_self",initial:h?{opacity:0,y:5}:{opacity:1,y:0},animate:{opacity:1,y:0},transition:{delay:(i+.25)*.15,ease:"easeOut",duration:.3},children:[e.jsx("h2",{className:`font-domine font-bold 
        text-[19px] leading-[28px]
        sm:text-[21px] sm:leading-[30px]`,children:o}),e.jsx("hr",{className:`my-[20px] border-[#BCBCBC] ${w&&"md:hidden"}`}),e.jsx("div",{className:`icon-container flex flex-wrap gap-x-[20px] gap-y-[10px] ${w&&"md:max-w-[260px] md:w-[100%]"}`,children:(n||O)&&[...n||[],...O||[]].slice().sort((g,c)=>l[g]-l[c]).map((g,c)=>{const $=j=>j.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,""),y=j=>{switch(j.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")){case"accelerated":return"w-[23.658px] h-[15px]";case"certificate":return"w-[14.881px] h-[15px]";case"dual-degree":return"w-[15.343px] h-[15px]";case"major":return"w-[13.865px] h-[15px]";case"majorspecialization":return"w-[13.865px] h-[15px]";case"minor":return"w-[14.041px] h-[11px]";case"prelaw":return"w-[18.63px] h-[15px]";case"premed":return"w-[15px] h-[15px]";case"premedprehealth":return"w-[15px] h-[15px]";case"teacher-education":return"w-[14.236px] h-[15px]";case"three-year-bachelors":return"w-[13.391px] h-[15px]";case"undeclared-option":return"w-[11.223px] h-[15px]";default:return"w-auto h-auto max-h-[15px]"}};return e.jsxs("p",{className:`font-opensans text-[14px] leading-[15px] md:leading-[25px] inline-flex gap-x-[5px] items-center ${g.length>15&&"col-span-full"}`,children:[e.jsx("img",{loading:"lazy",src:`/card-icons/${$(g)}.svg`,className:`${y(g)} object-contain`}),g]},c)})})]})})};function L({checkboxContent:d,title:x,isOpen:i,onToggle:h,index:f}){return e.jsxs("div",{className:`z-50 relative w-[100%] 
       
      ${i?"open-drop":""}`,children:[e.jsxs(u.div,{whileTap:{scale:.975},className:"z-30 relative",children:[e.jsx(u.div,{className:"h-[9px] w-[100%] bg-tcnjyellow origin-left",initial:{scaleX:0,opacity:0},animate:{scaleX:1,opacity:1},transition:{delay:(f+2)*.45,ease:[.22,0,.36,1],duration:.85}}),e.jsx(u.div,{initial:{"--background-color":"#bcbcbc"},animate:{"--background-color":"#fdd700"},className:`
          transition-all
          h-[1px] w-[100%] bg-[#bcbcbc] origin-left bg-[--background-color]`,transition:{delay:(f+2)*.45,ease:[.22,0,.36,1],duration:.85}}),e.jsx("h3",{className:`
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
        ${i?"open":""}`,onClick:h,children:x})]}),e.jsx("div",{className:`input-list relative md:absolute opacity-0  px-[34px] border-[1px]  w-[99%] ml-[.5%]
        border-[#bcbcbc]  bg-white  transition-all duration-300
        h-0 block-0 pointer-events-none z-0 
        mt-[-5px]
md:h-auto
scale-[.975]
lg:px-[50px]

        ${i&&"!ml-0 !w-[100%] !border-t-[0] !mt-0 pointer-events-auto block opacity-100  py-[30px] h-[auto!important] !scale-[1]"}
        `,id:`${i?"open-list":""}`,children:d.map((k,b)=>e.jsx("div",{className:"drop-down-item",children:k},b))})]})}const B=({boxId:d,checkboxContent:x})=>e.jsx(e.Fragment,{children:x&&x.map((i,h)=>e.jsx("div",{className:`drop-down-item ${d}`,children:i},h))});function ee({data:d,redirectData:x,areaOfStudy:i,programOptionsClean:h,additionalOptions:f}){const b=d.programs.nodes.concat(x.programRedirects.nodes.map(t=>({program:t.redirectProgram,title:t.title}))),[C,w]=a.useState(!1),[m,S]=a.useState(b),[n,O]=a.useState([]),[o,A]=a.useState([]),[l,g]=a.useState([]),[c,$]=a.useState(""),[y,j]=a.useState(null),[N,z]=a.useState(""),P=a.useRef(null),F=t=>{j(y===t?null:t),w(!0)},T=t=>{if(t.type==="click"&&P.current&&!P.current.contains(t.target)||t.type==="keydown"&&t.key==="Escape"){j(null);const s=document.getElementById("open-list");s&&s.removeAttribute("id")}};a.useEffect(()=>(document.addEventListener("click",T),document.addEventListener("keydown",T),()=>{document.removeEventListener("click",T),document.removeEventListener("keydown",T)}),[]),a.useEffect(()=>{H()},[n,o,l,c]);const H=()=>{let t=b.filter(M);n.length>0&&(t=t.filter(U)),o.length>0&&(t=t.filter(X)),l.length>0&&(t=t.filter(Y)),t=t.sort((s,p)=>s.title.localeCompare(p.title)),S(t)},M=t=>{const s=c.toLowerCase(),p=Array.isArray(t.program.school)?t.program.school:[t.program.school];return t.title.toLowerCase().includes(s)||p.some(r=>r.toString().toLowerCase().includes(s))},U=t=>{const s=Array.isArray(t.program.school)?t.program.school:[t.program.school];return n.some(p=>s.includes(p))},X=t=>o.some(s=>(t.program.programOptions??[]).includes(s)),Y=t=>l.some(s=>(t.program.additionalOptions??[]).includes(s)),I=t=>D(t.target.value,O,n),R=t=>D(t.target.value,A,o),V=t=>D(t.target.value,g,l),D=(t,s,p)=>{let r=[...p];r.includes(t)?r=r.filter(E=>E!==t):r.push(t),s(r)},_=t=>{$(t.target.value),w(!0)},G=()=>{$("");const t=document.getElementById("text-filter");t&&(t.value="")},v=(t,s,p)=>t.map((r,E)=>e.jsxs("p",{className:`${s.name}-filter input-container 
        font-opensans text-[13px] text-[#2e2e2e] leading-[16px] font-medium
        flex items-center justify-between gap-[10px]
        ${p?.includes(r)?"active":""}`,id:`${r.replace(/\s+/g,"-").toLowerCase()}-filter`,onClick:()=>s({target:{value:r}}),children:[r,e.jsx("img",{className:"close-button",alt:"close",src:"/close-item.svg"})]},r+E));return e.jsxs("div",{className:"program-wrapper inner-width",children:[e.jsxs("div",{id:"input-and-filter-wrapper",className:"",children:[e.jsxs("div",{id:"filters-bg",className:`bg-lightgrey sm:bg-transparent flex flex-col gap-[20px] p-[35px] max-w-[1128px] mx-auto
          sm:gap-[25px]
        sm:pt-[50px]
        md:pt-[75px]
        
        lg:px-0`,children:[e.jsx("input",{type:"text",id:"text-filter",className:` w-[100%] font-opensans text-[16px] sm:text-[17px] p-[22px] pr-[34px] pl-[34px] uppercase font-[400] border-[1px] 
        border-[#bcbcbc] placeholder-[#000000]
        lg:px-[50px]`,onChange:_,placeholder:"Search by keyword"}),e.jsxs("div",{ref:P,id:"filter-wrapper",className:`flex flex-col gap-[20px] sm:gap-[30px] 
            sm:grid sm:grid-cols-2
            md:flex
            md:gap-[40px] md:flex-row`,children:[e.jsx(L,{checkboxContent:v(i,I,n),title:"Schools",isOpen:y===0,onToggle:()=>F(0),index:0}),e.jsx(L,{checkboxContent:v(h,R,o),title:"Programs",isOpen:y===1,onToggle:()=>F(1),index:1}),e.jsx(L,{checkboxContent:v(f,V,l),title:"Options",isOpen:y===2,onToggle:()=>F(2),index:2})]}),e.jsx("hr",{className:"hidden sm:block border-[#bcbcbc]"})]}),e.jsxs("div",{id:"display-box-wrapper",className:`flex flex-col sm:flex-row justify-between min-h-[50px]
          max-w-[1128px] mx-auto px-[35px] lg:px-0

          `,children:[e.jsx("div",{id:"left-content",className:"flex flex-row flex-wrap  gap-[10px]",children:e.jsxs("div",{className:"relative z-10 filtered-display-box",children:[e.jsx("p",{className:`
              basis-[100%]
              font-domine 
              text-[14px]
              leading-[26px] font-normal pr-[15px]
              pt-[25px]
              sm:pt-0
              sm:basis-auto
              sm:text-[17px] `,children:"Filtered by:"}),!c&&n.length==0&&o.length==0&&l.length==0&&e.jsx("div",{className:"drop-down-item",children:e.jsx("p",{id:"all-text-filter",children:"All"})}),c&&e.jsx("div",{className:"drop-down-item",children:e.jsxs("p",{id:"search-text-filter",onClick:G,children:[c,e.jsx("img",{className:"close-button",alt:"close",src:"/close-item.svg"})]})}),e.jsx(B,{boxId:"area-of-study",checkboxContent:v(n,I,n)}),e.jsx(B,{boxId:"degree",checkboxContent:v(o,R,o)}),e.jsx(B,{boxId:"options",checkboxContent:v(l,V,l)})]})}),e.jsxs("div",{id:"right-content",className:`flex flex-row sm:h-[50px] items-center 
     
            `,children:[e.jsxs("p",{className:`font-opensans font-normal text-[14px] leading-[26px]
                   pt-[40px]
                   pb-[20px]
                   sm:pb-0
            sm:pt-0`,children:["Displaying ",e.jsxs("strong",{children:[m.length," results"]})]}),e.jsx(u.img,{src:"/grid-icon.svg",alt:"Grid View",className:"hidden md:block h-[20px] w-[24.781px] ml-[25px] cursor-pointer",onClick:()=>z(""),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:N!="list"?1:.5}}),e.jsx(u.img,{src:"/list-icon.svg",alt:"List View",className:"hidden md:block h-[20px] w-[25.406px] ml-[5px] cursor-pointer",onClick:()=>z("list"),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:N==="list"?1:.5}})]})]})]}),m&&m.length===0&&e.jsxs("div",{id:"no-results",className:`bg-lightgrey max-w-[1128px] 
          p-[40px] mx-[30px]  
          mt-0
          sm:mt-[50px]
          lg:mx-auto
          md:py-[75px] md:px-[100px] `,children:[e.jsx("h3",{className:"font-domine font-[700] text-[21px] leading-[30px] md:mb-[15px]",children:"Please try your search again"}),e.jsx("p",{className:"font-domine font-normal leading-[35px] text-[18px] py-[18px]",children:"Your search results do not match any available programs."}),e.jsx("hr",{}),e.jsxs("p",{className:"font-domine font-normal leading-[35px] text-[18px] py-[18px]",children:["Need help finding a program? Contact"," ",e.jsx("a",{className:"underline text-primarylinkblue",href:"mailto:admiss@tcnj.edu",children:"admiss@tcnj.edu"}),","," ",e.jsx("a",{className:"underline text-primarylinkblue",href:"tel:1-609-771-2131",children:"609.771.2131"}),", to get more information."]})]}),e.jsx(u.div,{id:"filtered-programs-wrapper",className:`${N==="list"?"list-view flex flex-col md:gap-[25px]":"grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 "}
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
        `,initial:C?{opacity:1,y:0}:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:.15,ease:"easeOut",duration:.3},children:m&&m.map((t,s)=>e.jsx(q,{program:t,listType:N,index:s,animationState:C},t.program.slug+s))})]})}export{ee as default};

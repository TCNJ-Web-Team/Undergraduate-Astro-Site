import{j as e}from"./jsx-runtime.b9e88e07.js";import{r as a}from"./index.03be2d59.js";/* empty css                       */import{m as v}from"./motion.9b287751.js";const K=({program:x,listType:m,index:n,animationState:g})=>{const[h,b]=a.useState(!1),[N,k]=a.useState(!0),u=m=="list";a.useEffect(()=>{setTimeout(()=>k(!1),1200)});const{slug:d,redirecturl:w,programOptions:r,additionalOptions:C}=x.program,{title:c}=x;return e.jsx("div",{className:`program-card filter  hover:drop-shadow-md drop-shadow-none transition-all duration-300 bg-white ${h?"active-hover":""}
      ${N?"pulse":""}  
      `,id:d,onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),children:e.jsxs(v.a,{className:`program-link block border-[1px] 
        border-[#bcbcbc] pl-[30px] pr-[45px] pt-[35px] pb-[40px] sm:min-h-[300px]
         ${u&&"md:flex md:flex-row md:justify-between md:min-h-0 md:items-center md:py-[35px]"}
        `,href:w||`./${d}`,target:w?"_blank":"_self",initial:g?{opacity:0,y:5}:{opacity:1,y:0},animate:{opacity:1,y:0},transition:{delay:(n+.25)*.15,ease:"easeOut",duration:.3},children:[e.jsx("h2",{className:`font-domine font-bold 
        text-[19px] leading-[28px]
        sm:text-[21px] sm:leading-[30px]

        `,children:c}),e.jsx("hr",{className:`my-[20px] ${u&&"md:hidden"}`}),e.jsxs("div",{className:`icon-container flex flex-wrap gap-x-[20px] gap-y-[10px]  ${u&&"md:max-w-[260px] md:w-[100%]"}`,children:[r&&r.map((i,l)=>{const y=p=>p.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"");return e.jsxs("p",{className:`font-opensans text-[14px] leading-[15px] md:leading-[25px] inline-flex gap-x-[5px] items-center ${i.length>15&&"col-span-full"}`,children:[e.jsx("img",{src:`/card-icons/${y(i)}.svg`,alt:i,className:"max-h-[15px]"}),i]},l)}),C&&C.map((i,l)=>{const y=p=>p.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"");return e.jsxs("p",{className:`font-opensans text-[14px] leading-[25px]  inline-flex gap-x-[5px] items-center ${i.length>15&&"col-span-full"}`,children:[e.jsx("img",{src:`/card-icons/${y(i)}.svg`,alt:i,className:"max-h-[15px]"}),i]},l)})]})]})})};function A({checkboxContent:x,title:m,isOpen:n,onToggle:g}){return e.jsxs("div",{className:`z-50 relative w-[100%] 
       
      ${n?"open-drop":""}`,children:[e.jsxs(v.div,{whileTap:{scale:.975},className:"z-30 relative",children:[e.jsx("div",{className:"h-[10px] w-[100%] bg-tcnjyellow"}),e.jsx("h3",{className:`
        select-none
        dropdown-label
        font-opensans 
        font-semibold 
        leading-[30px] 
        text-black 
        text-[17px] 
        uppercase 
        p-[34px] py-[24px] 
        bg-white border-[1px] 
        border-[#bcbcbc] 
     border-t-0
     cursor-pointer
        ${n?"open":""}`,onClick:g,children:m})]}),e.jsx("div",{className:`input-list relative md:absolute opacity-0  px-[34px] border-[1px]  w-[99%] ml-[.5%]
        border-[#bcbcbc]  bg-white  transition-all duration-300
        h-0 block-0 pointer-events-none z-0 
        mt-[-5px]
md:h-auto
scale-[.975]

        ${n&&"!ml-0 !w-[100%] !border-t-[0] !mt-0 pointer-events-auto block opacity-100  py-[30px] h-[auto!important] !scale-[1]"}
        `,id:`${n?"open-list":""}`,children:x.map((h,b)=>e.jsx("div",{className:"drop-down-item",children:h},b))})]})}const D=({filteredData:x,boxId:m,checkboxContent:n})=>e.jsx(e.Fragment,{children:n&&n.map((g,h)=>e.jsx("div",{className:`drop-down-item ${m}`,children:g},h))});function Z({data:x,redirectData:m,areaOfStudy:n,programOptionsClean:g,additionalOptions:h}){const N=x.programs.nodes.concat(m.programRedirects.nodes.map(t=>({program:t.redirectProgram,title:t.title}))),[k,u]=a.useState(!1),[d,w]=a.useState(N),[r,C]=a.useState([]),[c,i]=a.useState([]),[l,y]=a.useState([]),[p,P]=a.useState(""),[S,B]=a.useState(null),[O,I]=a.useState(""),F=a.useRef(null),L=t=>{B(S===t?null:t),u(!0)},$=t=>{if(t.type==="click"&&F.current&&!F.current.contains(t.target)||t.type==="keydown"&&t.key==="Escape"){B(null);const s=document.getElementById("open-list");s&&s.removeAttribute("id")}};a.useEffect(()=>(document.addEventListener("click",$),document.addEventListener("keydown",$),()=>{document.removeEventListener("click",$),document.removeEventListener("keydown",$)}),[]),a.useEffect(()=>{H()},[r,c,l,p]);const H=()=>{let t=N.filter(M);r.length>0&&(t=t.filter(_)),c.length>0&&(t=t.filter(G)),l.length>0&&(t=t.filter(Y)),t=t.sort((s,j)=>s.title.localeCompare(j.title)),w(t)},M=t=>{const s=p.toLowerCase();return t.title.toLowerCase().includes(s)||t.program.school.toString().toLowerCase().includes(s)},_=t=>(r??[]).includes(t.program.school.toString()),G=t=>c.some(s=>(t.program.programOptions??[]).includes(s)),Y=t=>l.some(s=>(t.program.additionalOptions??[]).includes(s)),z=t=>T(t.target.value,C,r),R=t=>T(t.target.value,i,c),V=t=>T(t.target.value,y,l),T=(t,s,j)=>{let o=[...j];o.includes(t)?o=o.filter(E=>E!==t):o.push(t),s(o)},q=t=>{P(t.target.value),u(!0)},J=()=>{P("");const t=document.getElementById("text-filter");t&&(t.value="")},f=(t,s,j)=>t.map((o,E)=>e.jsxs("p",{className:`${s.name}-filter input-container 
        font-opensans text-[13px] text-[#2e2e2e] leading-[16px] font-medium
        ${j?.includes(o)?"active":""}`,id:`${o.replace(/\s+/g,"-").toLowerCase()}-filter`,onClick:()=>s({target:{value:o}}),children:[o,e.jsx("img",{className:"close-button",src:"/close-item.svg"})]},o+E));return e.jsxs("div",{className:"program-wrapper inner-width",children:[e.jsxs("div",{id:"input-and-filter-wrapper",className:`flex flex-col gap-[20px] bg-lightgrey p-[35px] max-w-[1128px] mx-auto
        sm:pt-[50px]
        md:pt-[75px]
        md:bg-transparent
        lg:px-0`,children:[e.jsx("input",{type:"text",id:"text-filter",className:` w-[100%] font-opensans text-[17px] p-[22px] pr-[34px] pl-[34px] uppercase font-light border-[1px] 
        border-[#bcbcbc] `,onChange:q,placeholder:"Search by keyword"}),e.jsxs("div",{ref:F,id:"filter-wrapper",className:"flex flex-col gap-[30px] sm:gap-[40px] md:flex-row",children:[e.jsx(A,{checkboxContent:f(n,z,r),title:"Area of Study",isOpen:S===0,onToggle:()=>L(0)}),e.jsx(A,{checkboxContent:f(g,R,c),title:"Degree",isOpen:S===1,onToggle:()=>L(1)}),e.jsx(A,{checkboxContent:f(h,V,l),title:"Options",isOpen:S===2,onToggle:()=>L(2)})]}),e.jsx("hr",{}),e.jsxs("div",{id:"display-box-wrapper",className:"flex flex-row justify-between min-h-[50px]",children:[e.jsx("div",{id:"left-content",className:"flex flex-row flex-wrap  gap-[10px]",children:e.jsxs("div",{className:"relative z-10 filtered-display-box",children:[e.jsx("p",{className:"font-bitter text-[17px] leading-[26px] font-normal pr-[15px]",children:"Filtered by:"}),!p&&r.length==0&&c.length==0&&l.length==0&&e.jsx("div",{className:"drop-down-item",children:e.jsx("p",{id:"all-text-filter",children:"All"})}),p&&e.jsx("div",{className:"drop-down-item",children:e.jsxs("p",{id:"search-text-filter",onClick:J,children:[p,e.jsx("img",{className:"close-button",src:"/close-item.svg"})]})}),e.jsx(D,{boxId:"area-of-study",checkboxContent:f(r,z,r)}),e.jsx(D,{boxId:"degree",checkboxContent:f(c,R,c)}),e.jsx(D,{boxId:"options",checkboxContent:f(l,V,l)})]})}),e.jsxs("div",{id:"right-content",className:"flex flex-row h-[50px] items-center ",children:[e.jsxs("p",{className:"font-opensans font-normal text-[14px] leading-[26px]",children:["Displaying ",e.jsxs("strong",{children:[d.length," results"]})]}),e.jsx(v.img,{src:"/grid-icon.svg",alt:"Grid View",className:"hidden md:block h-[20px] w-auto ml-[25px] cursor-pointer",onClick:()=>I(""),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:O!="list"?1:.5}}),e.jsx(v.img,{src:"/list-icon.svg",alt:"List View",className:"hidden md:block h-[20px] w-auto ml-[5px] cursor-pointer",onClick:()=>I("list"),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:O==="list"?1:.5}})]})]})]}),d&&d.length===0&&e.jsxs("div",{id:"no-results",className:`bg-lightgrey max-w-[1128px] 
          p-[40px] mx-[30px]  mt-[50px]
          lg:mx-auto
          md:py-[75px] md:px-[100px] `,children:[e.jsx("h3",{className:"font-domine font-[700] text-[21px] leading-[30px] md:mb-[15px]",children:"Please try your search again"}),e.jsx("p",{className:"font-bitter font-normal leading-[35px] text-[18px] py-[18px]",children:"Your search results do not match any available programs."}),e.jsx("hr",{}),e.jsxs("p",{className:"font-bitter font-normal leading-[35px] text-[18px] py-[18px]",children:["Need help finding a program? Contact"," ",e.jsx("a",{className:"underline text-primarylinkblue",href:"mailto:admiss@tcnj.edu",children:"admiss@tcnj.edu"}),","," ",e.jsx("a",{className:"underline text-primarylinkblue",href:"tel:1-609-771-2131",children:"609.771.2131"}),", to get more information."]})]}),e.jsx(v.div,{id:"filtered-programs-wrapper",className:`${O==="list"?"list-view flex flex-col md:gap-[25px]":"grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 "}
        gap-[30px] sm:gap-[40px] 
        p-[35px] max-w-[1128px] mx-auto
        pb-[50px]
        lg:px-0
        md:pb-[100px]
        `,initial:k?{opacity:1,y:0}:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:.15,ease:"easeOut",duration:.3},children:d&&d.map((t,s)=>e.jsx(K,{program:t,listType:O,index:s,animationState:k},t.program.slug+s))})]})}export{Z as default};

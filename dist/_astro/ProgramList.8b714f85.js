import{j as e}from"./jsx-runtime.b9e88e07.js";import{r as a}from"./index.03be2d59.js";/* empty css                       */import{m as G}from"./motion.9b287751.js";const H=({program:d,listType:g})=>{const[n,p]=a.useState(!1),l=g=="list",{degreeType:b,slug:r,school:$,programOptions:o,additionalOptions:j,programAtAGlance:c,learnMoreList:F}=d.program,{title:h}=d;return e.jsx("div",{className:`program-card filter hover:drop-shadow-md drop-shadow-none transition-all duration-300 bg-white ${n?"active-hover":""}`,id:r,onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:e.jsxs("a",{className:`program-link block border-[1px] 
        border-[#bcbcbc] pl-[30px] pr-[45px] pt-[35px] pb-[40px] sm:min-h-[300px]
         ${l&&"md:flex md:flex-row md:justify-between md:min-h-0 md:items-center md:py-[35px]"}
        `,href:`./${r}`,children:[e.jsx("h2",{className:"font-domine font-bold text-[19px] leading-[28px]",children:h}),e.jsx("hr",{className:`my-[20px] ${l&&"md:hidden"}`}),e.jsxs("div",{className:"icon-container grid grid-cols-2 gap-x-[20px] gap-y-[10px]",children:[o&&o.map((x,m)=>e.jsx("p",{className:`font-opensans text-[14px] leading-[25px] inline-block ${x.length>15&&"col-span-full"}`,children:x},m)),j&&j.map((x,m)=>e.jsx("p",{className:`font-opensans text-[14px] leading-[25px] inline-block ${x.length>15&&"col-span-full"}`,children:x},m))]})]})})};function S({checkboxContent:d,title:g,isOpen:n,onToggle:p}){return e.jsxs("div",{className:`z-50 relative w-[100%] 
       
      ${n?"open-drop":""}`,children:[e.jsxs(G.div,{whileTap:{scale:.975},className:"z-30 relative",children:[e.jsx("div",{className:"h-[10px] w-[100%] bg-tcnjyellow"}),e.jsx("h3",{className:`
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
        ${n?"open":""}`,onClick:p,children:g})]}),e.jsx("div",{className:`input-list relative md:absolute opacity-0  px-[34px] border-[1px]  w-[99%] ml-[.5%]
        border-[#bcbcbc]  bg-white  transition-all duration-300
        h-0 block-0 pointer-events-none z-0 
        mt-[-5px]
md:h-auto
scale-[.975]

        ${n&&"!ml-0 !w-[100%] !border-t-[0] !mt-0 pointer-events-auto block opacity-100  py-[30px] h-[auto!important] !scale-[1]"}
        `,id:`${n?"open-list":""}`,children:d.map((l,b)=>e.jsx("div",{className:"drop-down-item",children:l},b))})]})}const O=({filteredData:d,boxId:g,checkboxContent:n})=>e.jsx(e.Fragment,{children:n&&n.map((p,l)=>e.jsx("div",{className:`drop-down-item ${g}`,children:p},l))});function Q({data:d,areaOfStudy:g,programOptionsClean:n,additionalOptions:p}){const[l,b]=a.useState(d.programs.nodes),[r,$]=a.useState([]),[o,j]=a.useState([]),[c,F]=a.useState([]),[h,x]=a.useState(""),[m,A]=a.useState(null),[v,L]=a.useState(""),y=a.useRef(null),N=t=>{A(m===t?null:t)},w=t=>{if(t.type==="click"&&y.current&&!y.current.contains(t.target)||t.type==="keydown"&&t.key==="Escape"){A(null);const s=document.getElementById("open-list");s&&s.removeAttribute("id")}};a.useEffect(()=>(document.addEventListener("click",w),document.addEventListener("keydown",w),()=>{document.removeEventListener("click",w),document.removeEventListener("keydown",w)}),[]),a.useEffect(()=>{P()},[r,o,c,h]);const P=()=>{let t=d.programs.nodes.filter(B);r.length>0&&(t=t.filter(I)),o.length>0&&(t=t.filter(z)),c.length>0&&(t=t.filter(V)),t=t.sort((s,f)=>s.title.localeCompare(f.title)),b(t)},B=t=>{const s=h.toLowerCase();return t.title.toLowerCase().includes(s)||t.program.school.toString().toLowerCase().includes(s)},I=t=>(r??[]).includes(t.program.school.toString()),z=t=>o.some(s=>(t.program.programOptions??[]).includes(s)),V=t=>c.some(s=>(t.program.additionalOptions??[]).includes(s)),E=t=>k(t.target.value,$,r),T=t=>k(t.target.value,j,o),D=t=>k(t.target.value,F,c),k=(t,s,f)=>{let i=[...f];i.includes(t)?i=i.filter(C=>C!==t):i.push(t),s(i)},M=t=>{x(t.target.value)},R=()=>{x("");const t=document.getElementById("text-filter");t&&(t.value="")},u=(t,s,f)=>t.map((i,C)=>e.jsxs("p",{className:`${s.name}-filter input-container 
        font-opensans text-[13px] text-[#2e2e2e] leading-[16px] font-medium
        ${f?.includes(i)?"active":""}`,id:`${i.replace(/\s+/g,"-").toLowerCase()}-filter`,onClick:()=>s({target:{value:i}}),children:[i,e.jsx("img",{className:"close-button",src:"/close-item.svg"})]},i+C));return console.log(v),e.jsxs("div",{className:"program-wrapper inner-width",children:[e.jsxs("div",{id:"input-and-filter-wrapper",className:`flex flex-col gap-[20px] bg-lightgrey p-[35px] max-w-[1128px] mx-auto
        sm:pt-[50px]
        md:pt-[75px]
        md:bg-transparent
        lg:px-0`,children:[e.jsx("input",{type:"text",id:"text-filter",className:` w-[100%] font-opensans text-[17px] p-[22px] pr-[34px] pl-[34px] uppercase font-light border-[1px] 
        border-[#bcbcbc] `,onChange:M,placeholder:"Search by keyword"}),e.jsxs("div",{ref:y,id:"filter-wrapper",className:"flex flex-col gap-[30px] sm:gap-[40px] md:flex-row",children:[e.jsx(S,{checkboxContent:u(g,E,r),title:"Area of Study",isOpen:m===0,onToggle:()=>N(0)}),e.jsx(S,{checkboxContent:u(n,T,o),title:"Degree",isOpen:m===1,onToggle:()=>N(1)}),e.jsx(S,{checkboxContent:u(p,D,c),title:"Options",isOpen:m===2,onToggle:()=>N(2)})]}),e.jsx("hr",{}),e.jsxs("div",{id:"display-box-wrapper",className:"flex flex-row justify-between min-h-[50px]",children:[e.jsx("div",{id:"left-content",className:"flex flex-row flex-wrap  gap-[10px]",children:e.jsxs("div",{className:"relative z-10 filtered-display-box",children:[e.jsx("p",{className:"font-bitter text-[17px] leading-[26px] font-normal pr-[15px]",children:"Filtered by:"}),!h&&r.length==0&&o.length==0&&c.length==0&&e.jsx("div",{className:"drop-down-item",children:e.jsx("p",{id:"all-text-filter",children:"All"})}),h&&e.jsx("div",{className:"drop-down-item",children:e.jsxs("p",{id:"search-text-filter",onClick:R,children:[h,e.jsx("img",{className:"close-button",src:"/close-item.svg"})]})}),e.jsx(O,{boxId:"area-of-study",checkboxContent:u(r,E,r)}),e.jsx(O,{boxId:"degree",checkboxContent:u(o,T,o)}),e.jsx(O,{boxId:"options",checkboxContent:u(c,D,c)})]})}),e.jsxs("div",{id:"right-content",className:"flex flex-row h-[50px] items-center ",children:[e.jsxs("p",{className:"font-opensans font-normal text-[14px] leading-[26px]",children:["Displaying ",e.jsxs("strong",{children:[l.length," results"]})]}),e.jsx("img",{src:"/grid-icon.svg",alt:"Grid View",className:"hidden md:block h-[20px] w-auto ml-[25px] cursor-pointer",onClick:()=>L("")}),e.jsx("img",{src:"/list-icon.svg",alt:"List View",className:"hidden md:block h-[20px] w-auto ml-[5px] cursor-pointer",onClick:()=>L("list")})]})]})]}),l&&l.length===0&&e.jsxs("div",{id:"no-results",className:`bg-lightgrey max-w-[1128px] 
          p-[40px] mx-[30px]  mt-[50px]
          lg:mx-auto
          md:py-[75px] md:px-[100px] `,children:[e.jsx("h3",{className:"font-domine font-[700] text-[21px] leading-[30px] md:mb-[15px]",children:"Please try your search again"}),e.jsx("p",{className:"font-bitter font-normal leading-[35px] text-[18px] py-[18px]",children:"Your search results do not match any available programs."}),e.jsx("hr",{}),e.jsxs("p",{className:"font-bitter font-normal leading-[35px] text-[18px] py-[18px]",children:["Need help finding a program? Contact"," ",e.jsx("a",{className:"underline text-primarylinkblue",href:"mailto:admiss@tcnj.edu",children:"admiss@tcnj.edu"}),","," ",e.jsx("a",{className:"underline text-primarylinkblue",href:"tel:1-609-771-2131",children:"609.771.2131"}),", to get more information."]})]}),e.jsx("div",{id:"filtered-programs-wrapper",className:`${v==="list"?"list-view flex flex-col md:gap-[25px]":"grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 "}
        gap-[30px] sm:gap-[40px] 
        p-[35px] max-w-[1128px] mx-auto
        pb-[50px]
        lg:px-0
        md:pb-[100px]
        `,children:l&&l.map((t,s)=>e.jsx(H,{program:t,listType:v},t.program.slug+s))})]})}export{Q as default};

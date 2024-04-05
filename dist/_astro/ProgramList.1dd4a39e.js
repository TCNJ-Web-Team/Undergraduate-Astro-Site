import{j as e}from"./jsx-runtime.b9e88e07.js";import{r}from"./index.03be2d59.js";/* empty css                       */import{m as O}from"./motion.9b287751.js";const G=({program:d,listType:m,index:a})=>{const[g,n]=r.useState(!1),[w,i]=r.useState(!0),j=m=="list";r.useEffect(()=>{setTimeout(()=>i(!1),1200)});const{degreeType:c,slug:N,school:p,programOptions:k,additionalOptions:x,programAtAGlance:$,learnMoreList:y}=d.program,{title:C}=d;return e.jsx("div",{className:`program-card filter  hover:drop-shadow-md drop-shadow-none transition-all duration-300 bg-white ${g?"active-hover":""}
      ${w?"pulse":""}  
      `,id:N,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:e.jsxs(O.a,{className:`program-link block border-[1px] 
        border-[#bcbcbc] pl-[30px] pr-[45px] pt-[35px] pb-[40px] sm:min-h-[300px]
         ${j&&"md:flex md:flex-row md:justify-between md:min-h-0 md:items-center md:py-[35px]"}
        `,href:`./${N}`,initial:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:(a+.25)*.15,ease:"easeOut",duration:.3},children:[e.jsx("h2",{className:"font-domine font-bold text-[19px] leading-[28px]",children:C}),e.jsx("hr",{className:`my-[20px] ${j&&"md:hidden"}`}),e.jsxs("div",{className:`icon-container flex flex-wrap gap-x-[20px] gap-y-[10px]  ${j&&"md:max-w-[260px]"}`,children:[k&&k.map((l,f)=>{const h=u=>u.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"");return e.jsxs("p",{className:`font-opensans text-[14px] leading-[25px] inline-flex gap-x-[5px] items-center ${l.length>15&&"col-span-full"}`,children:[e.jsx("img",{src:`/card-icons/${h(l)}.svg`,alt:l,className:"max-h-[15px]"}),l]},f)}),x&&x.map((l,f)=>{const h=u=>u.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"");return e.jsxs("p",{className:`font-opensans text-[14px] leading-[25px]  inline-flex gap-x-[5px] items-center ${l.length>15&&"col-span-full"}`,children:[e.jsx("img",{src:`/card-icons/${h(l)}.svg`,alt:l,className:"max-h-[15px]"}),l]},f)})]})]})})};function F({checkboxContent:d,title:m,isOpen:a,onToggle:g}){return e.jsxs("div",{className:`z-50 relative w-[100%] 
       
      ${a?"open-drop":""}`,children:[e.jsxs(O.div,{whileTap:{scale:.975},className:"z-30 relative",children:[e.jsx("div",{className:"h-[10px] w-[100%] bg-tcnjyellow"}),e.jsx("h3",{className:`
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
        ${a?"open":""}`,onClick:g,children:m})]}),e.jsx("div",{className:`input-list relative md:absolute opacity-0  px-[34px] border-[1px]  w-[99%] ml-[.5%]
        border-[#bcbcbc]  bg-white  transition-all duration-300
        h-0 block-0 pointer-events-none z-0 
        mt-[-5px]
md:h-auto
scale-[.975]

        ${a&&"!ml-0 !w-[100%] !border-t-[0] !mt-0 pointer-events-auto block opacity-100  py-[30px] h-[auto!important] !scale-[1]"}
        `,id:`${a?"open-list":""}`,children:d.map((n,w)=>e.jsx("div",{className:"drop-down-item",children:n},w))})]})}const A=({filteredData:d,boxId:m,checkboxContent:a})=>e.jsx(e.Fragment,{children:a&&a.map((g,n)=>e.jsx("div",{className:`drop-down-item ${m}`,children:g},n))});function Q({data:d,areaOfStudy:m,programOptionsClean:a,additionalOptions:g}){const[n,w]=r.useState(d.programs.nodes),[i,j]=r.useState([]),[c,N]=r.useState([]),[p,k]=r.useState([]),[x,$]=r.useState(""),[y,C]=r.useState(null),[l,f]=r.useState(""),h=r.useRef(null),u=t=>{C(y===t?null:t)},S=t=>{if(t.type==="click"&&h.current&&!h.current.contains(t.target)||t.type==="keydown"&&t.key==="Escape"){C(null);const s=document.getElementById("open-list");s&&s.removeAttribute("id")}};r.useEffect(()=>(document.addEventListener("click",S),document.addEventListener("keydown",S),()=>{document.removeEventListener("click",S),document.removeEventListener("keydown",S)}),[]),r.useEffect(()=>{B()},[i,c,p,x]);const B=()=>{let t=d.programs.nodes.filter(I);i.length>0&&(t=t.filter(z)),c.length>0&&(t=t.filter(V)),p.length>0&&(t=t.filter(H)),t=t.sort((s,v)=>s.title.localeCompare(v.title)),w(t)},I=t=>{const s=x.toLowerCase();return t.title.toLowerCase().includes(s)||t.program.school.toString().toLowerCase().includes(s)},z=t=>(i??[]).includes(t.program.school.toString()),V=t=>c.some(s=>(t.program.programOptions??[]).includes(s)),H=t=>p.some(s=>(t.program.additionalOptions??[]).includes(s)),E=t=>L(t.target.value,j,i),D=t=>L(t.target.value,N,c),P=t=>L(t.target.value,k,p),L=(t,s,v)=>{let o=[...v];o.includes(t)?o=o.filter(T=>T!==t):o.push(t),s(o)},M=t=>{$(t.target.value)},R=()=>{$("");const t=document.getElementById("text-filter");t&&(t.value="")},b=(t,s,v)=>t.map((o,T)=>e.jsxs("p",{className:`${s.name}-filter input-container 
        font-opensans text-[13px] text-[#2e2e2e] leading-[16px] font-medium
        ${v?.includes(o)?"active":""}`,id:`${o.replace(/\s+/g,"-").toLowerCase()}-filter`,onClick:()=>s({target:{value:o}}),children:[o,e.jsx("img",{className:"close-button",src:"/close-item.svg"})]},o+T));return console.log(l),e.jsxs("div",{className:"program-wrapper inner-width",children:[e.jsxs("div",{id:"input-and-filter-wrapper",className:`flex flex-col gap-[20px] bg-lightgrey p-[35px] max-w-[1128px] mx-auto
        sm:pt-[50px]
        md:pt-[75px]
        md:bg-transparent
        lg:px-0`,children:[e.jsx("input",{type:"text",id:"text-filter",className:` w-[100%] font-opensans text-[17px] p-[22px] pr-[34px] pl-[34px] uppercase font-light border-[1px] 
        border-[#bcbcbc] `,onChange:M,placeholder:"Search by keyword"}),e.jsxs("div",{ref:h,id:"filter-wrapper",className:"flex flex-col gap-[30px] sm:gap-[40px] md:flex-row",children:[e.jsx(F,{checkboxContent:b(m,E,i),title:"Area of Study",isOpen:y===0,onToggle:()=>u(0)}),e.jsx(F,{checkboxContent:b(a,D,c),title:"Degree",isOpen:y===1,onToggle:()=>u(1)}),e.jsx(F,{checkboxContent:b(g,P,p),title:"Options",isOpen:y===2,onToggle:()=>u(2)})]}),e.jsx("hr",{}),e.jsxs("div",{id:"display-box-wrapper",className:"flex flex-row justify-between min-h-[50px]",children:[e.jsx("div",{id:"left-content",className:"flex flex-row flex-wrap  gap-[10px]",children:e.jsxs("div",{className:"relative z-10 filtered-display-box",children:[e.jsx("p",{className:"font-bitter text-[17px] leading-[26px] font-normal pr-[15px]",children:"Filtered by:"}),!x&&i.length==0&&c.length==0&&p.length==0&&e.jsx("div",{className:"drop-down-item",children:e.jsx("p",{id:"all-text-filter",children:"All"})}),x&&e.jsx("div",{className:"drop-down-item",children:e.jsxs("p",{id:"search-text-filter",onClick:R,children:[x,e.jsx("img",{className:"close-button",src:"/close-item.svg"})]})}),e.jsx(A,{boxId:"area-of-study",checkboxContent:b(i,E,i)}),e.jsx(A,{boxId:"degree",checkboxContent:b(c,D,c)}),e.jsx(A,{boxId:"options",checkboxContent:b(p,P,p)})]})}),e.jsxs("div",{id:"right-content",className:"flex flex-row h-[50px] items-center ",children:[e.jsxs("p",{className:"font-opensans font-normal text-[14px] leading-[26px]",children:["Displaying ",e.jsxs("strong",{children:[n.length," results"]})]}),e.jsx(O.img,{src:"/grid-icon.svg",alt:"Grid View",className:"hidden md:block h-[20px] w-auto ml-[25px] cursor-pointer",onClick:()=>f(""),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:l!="list"?1:.5}}),e.jsx(O.img,{src:"/list-icon.svg",alt:"List View",className:"hidden md:block h-[20px] w-auto ml-[5px] cursor-pointer",onClick:()=>f("list"),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:l==="list"?1:.5}})]})]})]}),n&&n.length===0&&e.jsxs("div",{id:"no-results",className:`bg-lightgrey max-w-[1128px] 
          p-[40px] mx-[30px]  mt-[50px]
          lg:mx-auto
          md:py-[75px] md:px-[100px] `,children:[e.jsx("h3",{className:"font-domine font-[700] text-[21px] leading-[30px] md:mb-[15px]",children:"Please try your search again"}),e.jsx("p",{className:"font-bitter font-normal leading-[35px] text-[18px] py-[18px]",children:"Your search results do not match any available programs."}),e.jsx("hr",{}),e.jsxs("p",{className:"font-bitter font-normal leading-[35px] text-[18px] py-[18px]",children:["Need help finding a program? Contact"," ",e.jsx("a",{className:"underline text-primarylinkblue",href:"mailto:admiss@tcnj.edu",children:"admiss@tcnj.edu"}),","," ",e.jsx("a",{className:"underline text-primarylinkblue",href:"tel:1-609-771-2131",children:"609.771.2131"}),", to get more information."]})]}),e.jsx("div",{id:"filtered-programs-wrapper",className:`${l==="list"?"list-view flex flex-col md:gap-[25px]":"grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 "}
        gap-[30px] sm:gap-[40px] 
        p-[35px] max-w-[1128px] mx-auto
        pb-[50px]
        lg:px-0
        md:pb-[100px]
        `,children:n&&n.map((t,s)=>e.jsx(G,{program:t,listType:l,index:s},t.program.slug+s))})]})}export{Q as default};

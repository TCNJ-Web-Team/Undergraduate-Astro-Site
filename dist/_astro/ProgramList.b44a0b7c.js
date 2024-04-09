import{j as e}from"./jsx-runtime.b9e88e07.js";import{r as a}from"./index.03be2d59.js";/* empty css                       */import{m as S}from"./motion.9b287751.js";const q=({program:x,listType:m,index:r})=>{const[g,d]=a.useState(!1),[w,j]=a.useState(!0),c=m=="list";a.useEffect(()=>{setTimeout(()=>j(!1),1200)});const{slug:y,redirecturl:n,programOptions:v,additionalOptions:i}=x.program,{title:O}=x;return e.jsx("div",{className:`program-card filter  hover:drop-shadow-md drop-shadow-none transition-all duration-300 bg-white ${g?"active-hover":""}
      ${w?"pulse":""}  
      `,id:y,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:e.jsxs(S.a,{className:`program-link block border-[1px] 
        border-[#bcbcbc] pl-[30px] pr-[45px] pt-[35px] pb-[40px] sm:min-h-[300px]
         ${c&&"md:flex md:flex-row md:justify-between md:min-h-0 md:items-center md:py-[35px]"}
        `,href:n||`./${y}`,target:n?"_blank":"_self",initial:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:(r+.25)*.15,ease:"easeOut",duration:.3},children:[e.jsx("h2",{className:`font-domine font-bold 
        text-[19px] leading-[28px]
        sm:text-[21px] sm:leading-[30px]

        `,children:O}),e.jsx("hr",{className:`my-[20px] ${c&&"md:hidden"}`}),e.jsxs("div",{className:`icon-container flex flex-wrap gap-x-[20px] gap-y-[10px]  ${c&&"md:max-w-[260px]"}`,children:[v&&v.map((l,f)=>{const p=h=>h.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"");return e.jsxs("p",{className:`font-opensans text-[14px] leading-[15px] md:leading-[25px] inline-flex gap-x-[5px] items-center ${l.length>15&&"col-span-full"}`,children:[e.jsx("img",{src:`/card-icons/${p(l)}.svg`,alt:l,className:"max-h-[15px]"}),l]},f)}),i&&i.map((l,f)=>{const p=h=>h.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"");return e.jsxs("p",{className:`font-opensans text-[14px] leading-[25px]  inline-flex gap-x-[5px] items-center ${l.length>15&&"col-span-full"}`,children:[e.jsx("img",{src:`/card-icons/${p(l)}.svg`,alt:l,className:"max-h-[15px]"}),l]},f)})]})]})})};function E({checkboxContent:x,title:m,isOpen:r,onToggle:g}){return e.jsxs("div",{className:`z-50 relative w-[100%] 
       
      ${r?"open-drop":""}`,children:[e.jsxs(S.div,{whileTap:{scale:.975},className:"z-30 relative",children:[e.jsx("div",{className:"h-[10px] w-[100%] bg-tcnjyellow"}),e.jsx("h3",{className:`
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
        ${r?"open":""}`,onClick:g,children:m})]}),e.jsx("div",{className:`input-list relative md:absolute opacity-0  px-[34px] border-[1px]  w-[99%] ml-[.5%]
        border-[#bcbcbc]  bg-white  transition-all duration-300
        h-0 block-0 pointer-events-none z-0 
        mt-[-5px]
md:h-auto
scale-[.975]

        ${r&&"!ml-0 !w-[100%] !border-t-[0] !mt-0 pointer-events-auto block opacity-100  py-[30px] h-[auto!important] !scale-[1]"}
        `,id:`${r?"open-list":""}`,children:x.map((d,w)=>e.jsx("div",{className:"drop-down-item",children:d},w))})]})}const D=({filteredData:x,boxId:m,checkboxContent:r})=>e.jsx(e.Fragment,{children:r&&r.map((g,d)=>e.jsx("div",{className:`drop-down-item ${m}`,children:g},d))});function W({data:x,redirectData:m,areaOfStudy:r,programOptionsClean:g,additionalOptions:d}){const j=x.programs.nodes.concat(m.programRedirects.nodes.map(t=>({program:t.redirectProgram,title:t.title}))),[c,y]=a.useState(j),[n,v]=a.useState([]),[i,O]=a.useState([]),[l,f]=a.useState([]),[p,h]=a.useState(""),[N,A]=a.useState(null),[k,P]=a.useState(""),$=a.useRef(null),F=t=>{A(N===t?null:t)},C=t=>{if(t.type==="click"&&$.current&&!$.current.contains(t.target)||t.type==="keydown"&&t.key==="Escape"){A(null);const s=document.getElementById("open-list");s&&s.removeAttribute("id")}};a.useEffect(()=>(document.addEventListener("click",C),document.addEventListener("keydown",C),()=>{document.removeEventListener("click",C),document.removeEventListener("keydown",C)}),[]),a.useEffect(()=>{R()},[n,i,l,p]);const R=()=>{let t=j.filter(V);n.length>0&&(t=t.filter(H)),i.length>0&&(t=t.filter(M)),l.length>0&&(t=t.filter(_)),t=t.sort((s,b)=>s.title.localeCompare(b.title)),y(t)},V=t=>{const s=p.toLowerCase();return t.title.toLowerCase().includes(s)||t.program.school.toString().toLowerCase().includes(s)},H=t=>(n??[]).includes(t.program.school.toString()),M=t=>i.some(s=>(t.program.programOptions??[]).includes(s)),_=t=>l.some(s=>(t.program.additionalOptions??[]).includes(s)),B=t=>L(t.target.value,v,n),I=t=>L(t.target.value,O,i),z=t=>L(t.target.value,f,l),L=(t,s,b)=>{let o=[...b];o.includes(t)?o=o.filter(T=>T!==t):o.push(t),s(o)},G=t=>{h(t.target.value)},Y=()=>{h("");const t=document.getElementById("text-filter");t&&(t.value="")},u=(t,s,b)=>t.map((o,T)=>e.jsxs("p",{className:`${s.name}-filter input-container 
        font-opensans text-[13px] text-[#2e2e2e] leading-[16px] font-medium
        ${b?.includes(o)?"active":""}`,id:`${o.replace(/\s+/g,"-").toLowerCase()}-filter`,onClick:()=>s({target:{value:o}}),children:[o,e.jsx("img",{className:"close-button",src:"/close-item.svg"})]},o+T));return e.jsxs("div",{className:"program-wrapper inner-width",children:[e.jsxs("div",{id:"input-and-filter-wrapper",className:`flex flex-col gap-[20px] bg-lightgrey p-[35px] max-w-[1128px] mx-auto
        sm:pt-[50px]
        md:pt-[75px]
        md:bg-transparent
        lg:px-0`,children:[e.jsx("input",{type:"text",id:"text-filter",className:` w-[100%] font-opensans text-[17px] p-[22px] pr-[34px] pl-[34px] uppercase font-light border-[1px] 
        border-[#bcbcbc] `,onChange:G,placeholder:"Search by keyword"}),e.jsxs("div",{ref:$,id:"filter-wrapper",className:"flex flex-col gap-[30px] sm:gap-[40px] md:flex-row",children:[e.jsx(E,{checkboxContent:u(r,B,n),title:"Area of Study",isOpen:N===0,onToggle:()=>F(0)}),e.jsx(E,{checkboxContent:u(g,I,i),title:"Degree",isOpen:N===1,onToggle:()=>F(1)}),e.jsx(E,{checkboxContent:u(d,z,l),title:"Options",isOpen:N===2,onToggle:()=>F(2)})]}),e.jsx("hr",{}),e.jsxs("div",{id:"display-box-wrapper",className:"flex flex-row justify-between min-h-[50px]",children:[e.jsx("div",{id:"left-content",className:"flex flex-row flex-wrap  gap-[10px]",children:e.jsxs("div",{className:"relative z-10 filtered-display-box",children:[e.jsx("p",{className:"font-bitter text-[17px] leading-[26px] font-normal pr-[15px]",children:"Filtered by:"}),!p&&n.length==0&&i.length==0&&l.length==0&&e.jsx("div",{className:"drop-down-item",children:e.jsx("p",{id:"all-text-filter",children:"All"})}),p&&e.jsx("div",{className:"drop-down-item",children:e.jsxs("p",{id:"search-text-filter",onClick:Y,children:[p,e.jsx("img",{className:"close-button",src:"/close-item.svg"})]})}),e.jsx(D,{boxId:"area-of-study",checkboxContent:u(n,B,n)}),e.jsx(D,{boxId:"degree",checkboxContent:u(i,I,i)}),e.jsx(D,{boxId:"options",checkboxContent:u(l,z,l)})]})}),e.jsxs("div",{id:"right-content",className:"flex flex-row h-[50px] items-center ",children:[e.jsxs("p",{className:"font-opensans font-normal text-[14px] leading-[26px]",children:["Displaying ",e.jsxs("strong",{children:[c.length," results"]})]}),e.jsx(S.img,{src:"/grid-icon.svg",alt:"Grid View",className:"hidden md:block h-[20px] w-auto ml-[25px] cursor-pointer",onClick:()=>P(""),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:k!="list"?1:.5}}),e.jsx(S.img,{src:"/list-icon.svg",alt:"List View",className:"hidden md:block h-[20px] w-auto ml-[5px] cursor-pointer",onClick:()=>P("list"),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:k==="list"?1:.5}})]})]})]}),c&&c.length===0&&e.jsxs("div",{id:"no-results",className:`bg-lightgrey max-w-[1128px] 
          p-[40px] mx-[30px]  mt-[50px]
          lg:mx-auto
          md:py-[75px] md:px-[100px] `,children:[e.jsx("h3",{className:"font-domine font-[700] text-[21px] leading-[30px] md:mb-[15px]",children:"Please try your search again"}),e.jsx("p",{className:"font-bitter font-normal leading-[35px] text-[18px] py-[18px]",children:"Your search results do not match any available programs."}),e.jsx("hr",{}),e.jsxs("p",{className:"font-bitter font-normal leading-[35px] text-[18px] py-[18px]",children:["Need help finding a program? Contact"," ",e.jsx("a",{className:"underline text-primarylinkblue",href:"mailto:admiss@tcnj.edu",children:"admiss@tcnj.edu"}),","," ",e.jsx("a",{className:"underline text-primarylinkblue",href:"tel:1-609-771-2131",children:"609.771.2131"}),", to get more information."]})]}),e.jsx("div",{id:"filtered-programs-wrapper",className:`${k==="list"?"list-view flex flex-col md:gap-[25px]":"grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 "}
        gap-[30px] sm:gap-[40px] 
        p-[35px] max-w-[1128px] mx-auto
        pb-[50px]
        lg:px-0
        md:pb-[100px]
        `,children:c&&c.map((t,s)=>e.jsx(q,{program:t,listType:k,index:s},t.program.slug+s))})]})}export{W as default};

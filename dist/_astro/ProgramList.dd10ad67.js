import{j as e}from"./jsx-runtime.b9e88e07.js";import{r as a}from"./index.03be2d59.js";/* empty css                       */import{m as u}from"./motion.9b287751.js";const J=({program:m,listType:g,index:l,animationState:h})=>{const[d,y]=a.useState(!1),[f,k]=a.useState(!0),b=g=="list";a.useEffect(()=>{setTimeout(()=>k(!1),1200)});const{slug:x,redirecturl:j,programOptions:i,additionalOptions:C}=m.program,{title:c}=m;return e.jsx("div",{className:`program-card filter  hover:drop-shadow-md drop-shadow-none transition-all duration-300 bg-white ${d?"active-hover":""}
      ${f?"pulse":""}  
      `,id:x,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),children:e.jsxs(u.a,{className:`program-link block border-[1px] 
        border-[#bcbcbc] px-[30px] pt-[35px] pb-[40px] sm:min-h-[300px]
        sm:px-[35px]
        lg:px-[50px]
        lg:pt-[48px]
         ${b&&"md:flex md:flex-row md:justify-between md:min-h-0 md:items-center md:py-[35px]"}
        `,href:j||`./${x}`,target:j?"_blank":"_self",initial:h?{opacity:0,y:5}:{opacity:1,y:0},animate:{opacity:1,y:0},transition:{delay:(l+.25)*.15,ease:"easeOut",duration:.3},children:[e.jsx("h2",{className:`font-domine font-bold 
        text-[19px] leading-[28px]
        sm:text-[21px] sm:leading-[30px]

        `,children:c}),e.jsx("hr",{className:`my-[20px] border-[#BCBCBC] ${b&&"md:hidden"}`}),e.jsxs("div",{className:`icon-container flex flex-wrap gap-x-[20px] gap-y-[10px]  ${b&&"md:max-w-[260px] md:w-[100%]"}`,children:[i&&i.map((r,n)=>{const v=p=>p.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"");return e.jsxs("p",{className:`font-opensans text-[14px] leading-[15px] md:leading-[25px] inline-flex gap-x-[5px] items-center ${r.length>15&&"col-span-full"}`,children:[e.jsx("img",{src:`/card-icons/${v(r)}.svg`,alt:r,className:"max-h-[15px]"}),r]},n)}),C&&C.map((r,n)=>{const v=p=>p.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"");return e.jsxs("p",{className:`font-opensans text-[14px] leading-[25px]  inline-flex gap-x-[5px] items-center ${r.length>15&&"col-span-full"}`,children:[e.jsx("img",{src:`/card-icons/${v(r)}.svg`,alt:r,className:"max-h-[15px]"}),r]},n)})]})]})})};function A({checkboxContent:m,title:g,isOpen:l,onToggle:h,index:d}){return e.jsxs("div",{className:`z-50 relative w-[100%] 
       
      ${l?"open-drop":""}`,children:[e.jsxs(u.div,{whileTap:{scale:.975},className:"z-30 relative",children:[e.jsx(u.div,{className:"h-[9px] w-[100%] bg-tcnjyellow origin-left",initial:{scaleX:0,opacity:0},animate:{scaleX:1,opacity:1},transition:{delay:(d+2)*.45,ease:[.22,0,.36,1],duration:.85}}),e.jsx(u.div,{initial:{"--background-color":"#bcbcbc"},animate:{"--background-color":"#fdd700"},className:`
          transition-all
          h-[1px] w-[100%] bg-[#bcbcbc] origin-left bg-[--background-color]`,transition:{delay:(d+2)*.45,ease:[.22,0,.36,1],duration:.85}}),e.jsx("h3",{className:`
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

        ${l&&"!ml-0 !w-[100%] !border-t-[0] !mt-0 pointer-events-auto block opacity-100  py-[30px] h-[auto!important] !scale-[1]"}
        `,id:`${l?"open-list":""}`,children:m.map((y,f)=>e.jsx("div",{className:"drop-down-item",children:y},f))})]})}const D=({filteredData:m,boxId:g,checkboxContent:l})=>e.jsx(e.Fragment,{children:l&&l.map((h,d)=>e.jsx("div",{className:`drop-down-item ${g}`,children:h},d))});function Z({data:m,redirectData:g,areaOfStudy:l,programOptionsClean:h,additionalOptions:d}){const f=m.programs.nodes.concat(g.programRedirects.nodes.map(t=>({program:t.redirectProgram,title:t.title}))),[k,b]=a.useState(!1),[x,j]=a.useState(f),[i,C]=a.useState([]),[c,r]=a.useState([]),[n,v]=a.useState([]),[p,B]=a.useState(""),[S,P]=a.useState(null),[O,I]=a.useState(""),F=a.useRef(null),L=t=>{P(S===t?null:t),b(!0)},$=t=>{if(t.type==="click"&&F.current&&!F.current.contains(t.target)||t.type==="keydown"&&t.key==="Escape"){P(null);const s=document.getElementById("open-list");s&&s.removeAttribute("id")}};a.useEffect(()=>(document.addEventListener("click",$),document.addEventListener("keydown",$),()=>{document.removeEventListener("click",$),document.removeEventListener("keydown",$)}),[]),a.useEffect(()=>{H()},[i,c,n,p]);const H=()=>{let t=f.filter(M);i.length>0&&(t=t.filter(X)),c.length>0&&(t=t.filter(_)),n.length>0&&(t=t.filter(G)),t=t.sort((s,N)=>s.title.localeCompare(N.title)),j(t)},M=t=>{const s=p.toLowerCase();return t.title.toLowerCase().includes(s)||t.program.school.toString().toLowerCase().includes(s)},X=t=>(i??[]).includes(t.program.school.toString()),_=t=>c.some(s=>(t.program.programOptions??[]).includes(s)),G=t=>n.some(s=>(t.program.additionalOptions??[]).includes(s)),z=t=>T(t.target.value,C,i),R=t=>T(t.target.value,r,c),V=t=>T(t.target.value,v,n),T=(t,s,N)=>{let o=[...N];o.includes(t)?o=o.filter(E=>E!==t):o.push(t),s(o)},Y=t=>{B(t.target.value),b(!0)},q=()=>{B("");const t=document.getElementById("text-filter");t&&(t.value="")},w=(t,s,N)=>t.map((o,E)=>e.jsxs("p",{className:`${s.name}-filter input-container 
        font-opensans text-[13px] text-[#2e2e2e] leading-[16px] font-medium
        ${N?.includes(o)?"active":""}`,id:`${o.replace(/\s+/g,"-").toLowerCase()}-filter`,onClick:()=>s({target:{value:o}}),children:[o,e.jsx("img",{className:"close-button",src:"/close-item.svg"})]},o+E));return e.jsxs("div",{className:"program-wrapper inner-width",children:[e.jsxs("div",{id:"input-and-filter-wrapper",className:"",children:[e.jsxs("div",{id:"filters-bg",className:`bg-lightgrey sm:bg-transparent flex flex-col gap-[20px] p-[35px] max-w-[1128px] mx-auto
          sm:gap-[25px]
        sm:pt-[50px]
        md:pt-[75px]
        
        lg:px-0`,children:[e.jsx("input",{type:"text",id:"text-filter",className:` w-[100%] font-opensans text-[17px] p-[22px] pr-[34px] pl-[34px] uppercase font-light border-[1px] 
        border-[#bcbcbc] placeholder-[#000000]
        lg:px-[50px]`,onChange:Y,placeholder:"Search by keyword"}),e.jsxs("div",{ref:F,id:"filter-wrapper",className:`flex flex-col gap-[20px] sm:gap-[30px] 
            sm:grid sm:grid-cols-2
            md:flex
            md:gap-[40px] md:flex-row`,children:[e.jsx(A,{checkboxContent:w(l,z,i),title:"Area of Study",isOpen:S===0,onToggle:()=>L(0),index:0}),e.jsx(A,{checkboxContent:w(h,R,c),title:"Degree",isOpen:S===1,onToggle:()=>L(1),index:1}),e.jsx(A,{checkboxContent:w(d,V,n),title:"Options",isOpen:S===2,onToggle:()=>L(2),index:2})]}),e.jsx("hr",{className:"hidden sm:block border-[#bcbcbc]"})]}),e.jsxs("div",{id:"display-box-wrapper",className:`flex flex-col sm:flex-row justify-between min-h-[50px]
          max-w-[1128px] mx-auto px-[35px] lg:px-0

          `,children:[e.jsx("div",{id:"left-content",className:"flex flex-row flex-wrap  gap-[10px]",children:e.jsxs("div",{className:"relative z-10 filtered-display-box",children:[e.jsx("p",{className:`
              basis-[100%]
              font-bitter 
              text-[14px]
              leading-[26px] font-normal pr-[15px]
              pt-[25px]
              sm:pt-0
              sm:basis-auto
              sm:text-[17px] `,children:"Filtered by:"}),!p&&i.length==0&&c.length==0&&n.length==0&&e.jsx("div",{className:"drop-down-item",children:e.jsx("p",{id:"all-text-filter",children:"All"})}),p&&e.jsx("div",{className:"drop-down-item",children:e.jsxs("p",{id:"search-text-filter",onClick:q,children:[p,e.jsx("img",{className:"close-button",src:"/close-item.svg"})]})}),e.jsx(D,{boxId:"area-of-study",checkboxContent:w(i,z,i)}),e.jsx(D,{boxId:"degree",checkboxContent:w(c,R,c)}),e.jsx(D,{boxId:"options",checkboxContent:w(n,V,n)})]})}),e.jsxs("div",{id:"right-content",className:`flex flex-row sm:h-[50px] items-center 
     
            `,children:[e.jsxs("p",{className:`font-opensans font-normal text-[14px] leading-[26px]
                   pt-[40px]
                   pb-[20px]
                   sm:pb-0
            sm:pt-0`,children:["Displaying ",e.jsxs("strong",{children:[x.length," results"]})]}),e.jsx(u.img,{src:"/grid-icon.svg",alt:"Grid View",className:"hidden md:block h-[20px] w-auto ml-[25px] cursor-pointer",onClick:()=>I(""),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:O!="list"?1:.5}}),e.jsx(u.img,{src:"/list-icon.svg",alt:"List View",className:"hidden md:block h-[20px] w-auto ml-[5px] cursor-pointer",onClick:()=>I("list"),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:O==="list"?1:.5}})]})]})]}),x&&x.length===0&&e.jsxs("div",{id:"no-results",className:`bg-lightgrey max-w-[1128px] 
          p-[40px] mx-[30px]  
          mt-0
          sm:mt-[50px]
          lg:mx-auto
          md:py-[75px] md:px-[100px] `,children:[e.jsx("h3",{className:"font-domine font-[700] text-[21px] leading-[30px] md:mb-[15px]",children:"Please try your search again"}),e.jsx("p",{className:"font-bitter font-normal leading-[35px] text-[18px] py-[18px]",children:"Your search results do not match any available programs."}),e.jsx("hr",{}),e.jsxs("p",{className:"font-bitter font-normal leading-[35px] text-[18px] py-[18px]",children:["Need help finding a program? Contact"," ",e.jsx("a",{className:"underline text-primarylinkblue",href:"mailto:admiss@tcnj.edu",children:"admiss@tcnj.edu"}),","," ",e.jsx("a",{className:"underline text-primarylinkblue",href:"tel:1-609-771-2131",children:"609.771.2131"}),", to get more information."]})]}),e.jsx(u.div,{id:"filtered-programs-wrapper",className:`${O==="list"?"list-view flex flex-col md:gap-[25px]":"grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 "}
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
        `,initial:k?{opacity:1,y:0}:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:.15,ease:"easeOut",duration:.3},children:x&&x.map((t,s)=>e.jsx(J,{program:t,listType:O,index:s,animationState:k},t.program.slug+s))})]})}export{Z as default};

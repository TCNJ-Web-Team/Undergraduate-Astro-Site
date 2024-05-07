import{j as e}from"./jsx-runtime.b9e88e07.js";import{r as n}from"./index.03be2d59.js";/* empty css                       */import{m as h}from"./motion.9b287751.js";const K=({program:x,listType:m,index:i,animationState:g})=>{const[d,$]=n.useState(!1),[u,j]=n.useState(!0),v=d?"active-hover":"",c=m=="list";n.useEffect(()=>{setTimeout(()=>j(!1),1200)});const{slug:N,redirecturl:l,programOptions:k,additionalOptions:r}=x.program,{title:F}=x;return e.jsx("div",{className:`program-card filter   drop-shadow-none transition-all duration-300 bg-white ${v}
      ${u?"pulse":""}  
      `,id:N,children:e.jsxs(h.a,{className:`program-link block border-[1px] 
        border-[#bcbcbc] px-[30px] pt-[35px] pb-[40px] sm:min-h-[300px]
        sm:px-[35px]
        lg:px-[50px]
        lg:pt-[48px]
         ${c&&"md:flex md:flex-row md:justify-between md:min-h-0 md:items-center md:py-[35px]"}
        `,href:l||`./${N}`,target:l?"_blank":"_self",initial:g?{opacity:0,y:5}:{opacity:1,y:0},animate:{opacity:1,y:0},transition:{delay:(i+.25)*.15,ease:"easeOut",duration:.3},children:[e.jsx("h2",{className:`font-domine font-bold 
        text-[19px] leading-[28px]
        sm:text-[21px] sm:leading-[30px]

        `,children:F}),e.jsx("hr",{className:`my-[20px] border-[#BCBCBC] ${c&&"md:hidden"}`}),e.jsxs("div",{className:`icon-container flex flex-wrap gap-x-[20px] gap-y-[10px]  ${c&&"md:max-w-[260px] md:w-[100%]"}`,children:[k&&k.map((a,y)=>{const p=f=>f.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"");return e.jsxs("p",{className:`font-opensans text-[14px] leading-[15px] md:leading-[25px] inline-flex gap-x-[5px] items-center ${a.length>15&&"col-span-full"}`,children:[e.jsx("img",{src:`/card-icons/${p(a)}.svg`,alt:a,className:"max-h-[15px]"}),a]},y)}),r&&r.map((a,y)=>{const p=f=>f.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"");return e.jsxs("p",{className:`font-opensans text-[14px] leading-[25px]  inline-flex gap-x-[5px] items-center ${a.length>15&&"col-span-full"}`,children:[e.jsx("img",{src:`/card-icons/${p(a)}.svg`,alt:a,className:"max-h-[15px]"}),a]},y)})]})]})})};function E({checkboxContent:x,title:m,isOpen:i,onToggle:g,index:d}){return e.jsxs("div",{className:`z-50 relative w-[100%] 
       
      ${i?"open-drop":""}`,children:[e.jsxs(h.div,{whileTap:{scale:.975},className:"z-30 relative",children:[e.jsx(h.div,{className:"h-[9px] w-[100%] bg-tcnjyellow origin-left",initial:{scaleX:0,opacity:0},animate:{scaleX:1,opacity:1},transition:{delay:(d+2)*.45,ease:[.22,0,.36,1],duration:.85}}),e.jsx(h.div,{initial:{"--background-color":"#bcbcbc"},animate:{"--background-color":"#fdd700"},className:`
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
        ${i?"open":""}`,onClick:g,children:m})]}),e.jsx("div",{className:`input-list relative md:absolute opacity-0  px-[34px] border-[1px]  w-[99%] ml-[.5%]
        border-[#bcbcbc]  bg-white  transition-all duration-300
        h-0 block-0 pointer-events-none z-0 
        mt-[-5px]
md:h-auto
scale-[.975]
lg:px-[50px]

        ${i&&"!ml-0 !w-[100%] !border-t-[0] !mt-0 pointer-events-auto block opacity-100  py-[30px] h-[auto!important] !scale-[1]"}
        `,id:`${i?"open-list":""}`,children:x.map(($,u)=>e.jsx("div",{className:"drop-down-item",children:$},u))})]})}const B=({filteredData:x,boxId:m,checkboxContent:i})=>e.jsx(e.Fragment,{children:i&&i.map((g,d)=>e.jsx("div",{className:`drop-down-item ${m}`,children:g},d))});function Z({data:x,redirectData:m,areaOfStudy:i,programOptionsClean:g,additionalOptions:d}){const u=x.programs.nodes.concat(m.programRedirects.nodes.map(t=>({program:t.redirectProgram,title:t.title}))),[j,v]=n.useState(!1),[c,N]=n.useState(u),[l,k]=n.useState([]),[r,F]=n.useState([]),[a,y]=n.useState([]),[p,f]=n.useState(""),[C,P]=n.useState(null),[S,I]=n.useState(""),T=n.useRef(null),L=t=>{P(C===t?null:t),v(!0)},O=t=>{if(t.type==="click"&&T.current&&!T.current.contains(t.target)||t.type==="keydown"&&t.key==="Escape"){P(null);const s=document.getElementById("open-list");s&&s.removeAttribute("id")}};n.useEffect(()=>(document.addEventListener("click",O),document.addEventListener("keydown",O),()=>{document.removeEventListener("click",O),document.removeEventListener("keydown",O)}),[]),n.useEffect(()=>{V()},[l,r,a,p]);const V=()=>{let t=u.filter(X);l.length>0&&(t=t.filter(_)),r.length>0&&(t=t.filter(G)),a.length>0&&(t=t.filter(Y)),t=t.sort((s,w)=>s.title.localeCompare(w.title)),N(t)},X=t=>{const s=p.toLowerCase();return t.title.toLowerCase().includes(s)||t.program.school.toString().toLowerCase().includes(s)},_=t=>(l??[]).includes(t.program.school.toString()),G=t=>r.some(s=>(t.program.programOptions??[]).includes(s)),Y=t=>a.some(s=>(t.program.additionalOptions??[]).includes(s)),z=t=>A(t.target.value,k,l),H=t=>A(t.target.value,F,r),R=t=>A(t.target.value,y,a),A=(t,s,w)=>{let o=[...w];o.includes(t)?o=o.filter(D=>D!==t):o.push(t),s(o)},q=t=>{f(t.target.value),v(!0)},J=()=>{f("");const t=document.getElementById("text-filter");t&&(t.value="")},b=(t,s,w)=>t.map((o,D)=>e.jsxs("p",{className:`${s.name}-filter input-container 
        font-opensans text-[13px] text-[#2e2e2e] leading-[16px] font-medium
        ${w?.includes(o)?"active":""}`,id:`${o.replace(/\s+/g,"-").toLowerCase()}-filter`,onClick:()=>s({target:{value:o}}),children:[o,e.jsx("img",{className:"close-button",src:"/close-item.svg"})]},o+D));return e.jsxs("div",{className:"program-wrapper inner-width",children:[e.jsxs("div",{id:"input-and-filter-wrapper",className:"",children:[e.jsxs("div",{id:"filters-bg",className:`bg-lightgrey sm:bg-transparent flex flex-col gap-[20px] p-[35px] max-w-[1128px] mx-auto
          sm:gap-[25px]
        sm:pt-[50px]
        md:pt-[75px]
        
        lg:px-0`,children:[e.jsx("input",{type:"text",id:"text-filter",className:` w-[100%] font-opensans text-[17px] p-[22px] pr-[34px] pl-[34px] uppercase font-light border-[1px] 
        border-[#bcbcbc] placeholder-[#000000]
        lg:px-[50px]`,onChange:q,placeholder:"Search by keyword"}),e.jsxs("div",{ref:T,id:"filter-wrapper",className:`flex flex-col gap-[20px] sm:gap-[30px] 
            sm:grid sm:grid-cols-2
            md:flex
            md:gap-[40px] md:flex-row`,children:[e.jsx(E,{checkboxContent:b(i,z,l),title:"Area of Study",isOpen:C===0,onToggle:()=>L(0),index:0}),e.jsx(E,{checkboxContent:b(g,H,r),title:"Degree",isOpen:C===1,onToggle:()=>L(1),index:1}),e.jsx(E,{checkboxContent:b(d,R,a),title:"Options",isOpen:C===2,onToggle:()=>L(2),index:2})]}),e.jsx("hr",{className:"hidden sm:block border-[#bcbcbc]"})]}),e.jsxs("div",{id:"display-box-wrapper",className:`flex flex-col sm:flex-row justify-between min-h-[50px]
          max-w-[1128px] mx-auto px-[35px] lg:px-0

          `,children:[e.jsx("div",{id:"left-content",className:"flex flex-row flex-wrap  gap-[10px]",children:e.jsxs("div",{className:"relative z-10 filtered-display-box",children:[e.jsx("p",{className:`
              basis-[100%]
              font-bitter 
              text-[14px]
              leading-[26px] font-normal pr-[15px]
              pt-[25px]
              sm:pt-0
              sm:basis-auto
              sm:text-[17px] `,children:"Filtered by:"}),!p&&l.length==0&&r.length==0&&a.length==0&&e.jsx("div",{className:"drop-down-item",children:e.jsx("p",{id:"all-text-filter",children:"All"})}),p&&e.jsx("div",{className:"drop-down-item",children:e.jsxs("p",{id:"search-text-filter",onClick:J,children:[p,e.jsx("img",{className:"close-button",src:"/close-item.svg"})]})}),e.jsx(B,{boxId:"area-of-study",checkboxContent:b(l,z,l)}),e.jsx(B,{boxId:"degree",checkboxContent:b(r,H,r)}),e.jsx(B,{boxId:"options",checkboxContent:b(a,R,a)})]})}),e.jsxs("div",{id:"right-content",className:`flex flex-row sm:h-[50px] items-center 
     
            `,children:[e.jsxs("p",{className:`font-opensans font-normal text-[14px] leading-[26px]
                   pt-[40px]
                   pb-[20px]
                   sm:pb-0
            sm:pt-0`,children:["Displaying ",e.jsxs("strong",{children:[c.length," results"]})]}),e.jsx(h.img,{src:"/grid-icon.svg",alt:"Grid View",className:"hidden md:block h-[20px] w-auto ml-[25px] cursor-pointer",onClick:()=>I(""),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:S!="list"?1:.5}}),e.jsx(h.img,{src:"/list-icon.svg",alt:"List View",className:"hidden md:block h-[20px] w-auto ml-[5px] cursor-pointer",onClick:()=>I("list"),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:S==="list"?1:.5}})]})]})]}),c&&c.length===0&&e.jsxs("div",{id:"no-results",className:`bg-lightgrey max-w-[1128px] 
          p-[40px] mx-[30px]  
          mt-0
          sm:mt-[50px]
          lg:mx-auto
          md:py-[75px] md:px-[100px] `,children:[e.jsx("h3",{className:"font-domine font-[700] text-[21px] leading-[30px] md:mb-[15px]",children:"Please try your search again"}),e.jsx("p",{className:"font-bitter font-normal leading-[35px] text-[18px] py-[18px]",children:"Your search results do not match any available programs."}),e.jsx("hr",{}),e.jsxs("p",{className:"font-bitter font-normal leading-[35px] text-[18px] py-[18px]",children:["Need help finding a program? Contact"," ",e.jsx("a",{className:"underline text-primarylinkblue",href:"mailto:admiss@tcnj.edu",children:"admiss@tcnj.edu"}),","," ",e.jsx("a",{className:"underline text-primarylinkblue",href:"tel:1-609-771-2131",children:"609.771.2131"}),", to get more information."]})]}),e.jsx(h.div,{id:"filtered-programs-wrapper",className:`${S==="list"?"list-view flex flex-col md:gap-[25px]":"grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 "}
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
        `,initial:j?{opacity:1,y:0}:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:.15,ease:"easeOut",duration:.3},children:c&&c.map((t,s)=>e.jsx(K,{program:t,listType:S,index:s,animationState:j},t.program.slug+s))})]})}export{Z as default};

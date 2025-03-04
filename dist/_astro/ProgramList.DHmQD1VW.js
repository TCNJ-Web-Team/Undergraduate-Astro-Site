import{j as e}from"./jsx-runtime.C3nPk8XT.js";import{r as a}from"./index.Cq8P9Jm4.js";/* empty css                       */import{m as f}from"./motion.C8JOvv4d.js";const q=({program:g,listType:h,index:l,animationState:u})=>{const[x,O]=a.useState(!1),[b,j]=a.useState(!0),v=x?"active-hover":"",c=h=="list";a.useEffect(()=>{setTimeout(()=>j(!1),1200)});const{slug:N,redirecturl:n,programOptions:k,additionalOptions:o}=g.program,{title:A}=g,i={Major:0,"Major/Specialization":0,Minor:1,Certificate:2,"Three-Year Bachelor's":3,Accelerated:4,"Dual Degree":5,"Teacher Education":6,Undeclared:7,Prelaw:8,Premed:9,"Premed/Prehealth":9};return e.jsx("div",{className:`program-card filter   drop-shadow-none transition-all duration-300 bg-white ${v}
      ${b?"pulse":""}  
      `,id:N,children:e.jsxs(f.a,{className:`program-link block border-[1px] 
        border-[#bcbcbc] px-[30px] pt-[35px] pb-[40px] sm:min-h-[300px]
        sm:px-[35px]
        lg:px-[50px]
        lg:pt-[48px]
         ${c&&"md:flex md:flex-row md:justify-between md:min-h-0 md:items-center md:py-[35px]  lg:!pt-[35px]"}
        `,href:n||`./${N}`,target:n?"_blank":"_self",initial:u?{opacity:0,y:5}:{opacity:1,y:0},animate:{opacity:1,y:0},transition:{delay:(l+.25)*.15,ease:"easeOut",duration:.3},children:[e.jsx("h2",{className:`font-domine font-bold 
        text-[19px] leading-[28px]
        sm:text-[21px] sm:leading-[30px]

        `,children:A}),e.jsx("hr",{className:`my-[20px] border-[#BCBCBC] ${c&&"md:hidden"}`}),e.jsx("div",{className:`icon-container flex flex-wrap gap-x-[20px] gap-y-[10px]  ${c&&"md:max-w-[260px] md:w-[100%]"}`,children:(k||o)&&[...k||[],...o||[]].slice().sort((m,p)=>i[m]-i[p]).map((m,p)=>{const C=y=>y.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"");return e.jsxs("p",{className:`font-opensans text-[14px] leading-[15px] md:leading-[25px] inline-flex gap-x-[5px] items-center ${m.length>15&&"col-span-full"}`,children:[e.jsx("img",{src:`/ug-programs//card-icons/${C(m)}.svg`,alt:m,className:"max-h-[15px]"}),m]},p)})})]})})};function E({checkboxContent:g,title:h,isOpen:l,onToggle:u,index:x}){return e.jsxs("div",{className:`z-50 relative w-[100%] 
       
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
        `,id:`${l?"open-list":""}`,children:g.map((O,b)=>e.jsx("div",{className:"drop-down-item",children:O},b))})]})}const L=({filteredData:g,boxId:h,checkboxContent:l})=>e.jsx(e.Fragment,{children:l&&l.map((u,x)=>e.jsx("div",{className:`drop-down-item ${h}`,children:u},x))});function Z({data:g,redirectData:h,areaOfStudy:l,programOptionsClean:u,additionalOptions:x}){const b=g.programs.nodes.concat(h.programRedirects.nodes.map(t=>({program:t.redirectProgram,title:t.title}))),[j,v]=a.useState(!1),[c,N]=a.useState(b),[n,k]=a.useState([]),[o,A]=a.useState([]),[i,m]=a.useState([]),[p,C]=a.useState(""),[y,B]=a.useState(null),[S,I]=a.useState(""),T=a.useRef(null),P=t=>{B(y===t?null:t),v(!0)},$=t=>{if(t.type==="click"&&T.current&&!T.current.contains(t.target)||t.type==="keydown"&&t.key==="Escape"){B(null);const s=document.getElementById("open-list");s&&s.removeAttribute("id")}};a.useEffect(()=>(document.addEventListener("click",$),document.addEventListener("keydown",$),()=>{document.removeEventListener("click",$),document.removeEventListener("keydown",$)}),[]),a.useEffect(()=>{V()},[n,o,i,p]);const V=()=>{let t=b.filter(M);n.length>0&&(t=t.filter(X)),o.length>0&&(t=t.filter(Y)),i.length>0&&(t=t.filter(_)),t=t.sort((s,d)=>s.title.localeCompare(d.title)),N(t)},M=t=>{const s=p.toLowerCase(),d=Array.isArray(t.program.school)?t.program.school:[t.program.school];return t.title.toLowerCase().includes(s)||d.some(r=>r.toString().toLowerCase().includes(s))},X=t=>{const s=Array.isArray(t.program.school)?t.program.school:[t.program.school];return n.some(d=>s.includes(d))},Y=t=>o.some(s=>(t.program.programOptions??[]).includes(s)),_=t=>i.some(s=>(t.program.additionalOptions??[]).includes(s)),z=t=>F(t.target.value,k,n),H=t=>F(t.target.value,A,o),R=t=>F(t.target.value,m,i),F=(t,s,d)=>{let r=[...d];r.includes(t)?r=r.filter(D=>D!==t):r.push(t),s(r)},G=t=>{C(t.target.value),v(!0)},U=()=>{C("");const t=document.getElementById("text-filter");t&&(t.value="")},w=(t,s,d)=>t.map((r,D)=>e.jsxs("p",{className:`${s.name}-filter input-container 
        font-opensans text-[13px] text-[#2e2e2e] leading-[16px] font-medium
        ${d?.includes(r)?"active":""}`,id:`${r.replace(/\s+/g,"-").toLowerCase()}-filter`,onClick:()=>s({target:{value:r}}),children:[r,e.jsx("img",{className:"close-button",src:"/ug-programs//close-item.svg"})]},r+D));return e.jsxs("div",{className:"program-wrapper inner-width",children:[e.jsxs("div",{id:"input-and-filter-wrapper",className:"",children:[e.jsxs("div",{id:"filters-bg",className:`bg-lightgrey sm:bg-transparent flex flex-col gap-[20px] p-[35px] max-w-[1128px] mx-auto
          sm:gap-[25px]
        sm:pt-[50px]
        md:pt-[75px]
        
        lg:px-0`,children:[e.jsx("input",{type:"text",id:"text-filter",className:` w-[100%] font-opensans text-[17px] p-[22px] pr-[34px] pl-[34px] uppercase font-light border-[1px] 
        border-[#bcbcbc] placeholder-[#000000]
        lg:px-[50px]`,onChange:G,placeholder:"Search by keyword"}),e.jsxs("div",{ref:T,id:"filter-wrapper",className:`flex flex-col gap-[20px] sm:gap-[30px] 
            sm:grid sm:grid-cols-2
            md:flex
            md:gap-[40px] md:flex-row`,children:[e.jsx(E,{checkboxContent:w(l,z,n),title:"Schools",isOpen:y===0,onToggle:()=>P(0),index:0}),e.jsx(E,{checkboxContent:w(u,H,o),title:"Programs",isOpen:y===1,onToggle:()=>P(1),index:1}),e.jsx(E,{checkboxContent:w(x,R,i),title:"Options",isOpen:y===2,onToggle:()=>P(2),index:2})]}),e.jsx("hr",{className:"hidden sm:block border-[#bcbcbc]"})]}),e.jsxs("div",{id:"display-box-wrapper",className:`flex flex-col sm:flex-row justify-between min-h-[50px]
          max-w-[1128px] mx-auto px-[35px] lg:px-0

          `,children:[e.jsx("div",{id:"left-content",className:"flex flex-row flex-wrap  gap-[10px]",children:e.jsxs("div",{className:"relative z-10 filtered-display-box",children:[e.jsx("p",{className:`
              basis-[100%]
              font-bitter 
              text-[14px]
              leading-[26px] font-normal pr-[15px]
              pt-[25px]
              sm:pt-0
              sm:basis-auto
              sm:text-[17px] `,children:"Filtered by:"}),!p&&n.length==0&&o.length==0&&i.length==0&&e.jsx("div",{className:"drop-down-item",children:e.jsx("p",{id:"all-text-filter",children:"All"})}),p&&e.jsx("div",{className:"drop-down-item",children:e.jsxs("p",{id:"search-text-filter",onClick:U,children:[p,e.jsx("img",{className:"close-button",src:"/ug-programs//close-item.svg"})]})}),e.jsx(L,{boxId:"area-of-study",checkboxContent:w(n,z,n)}),e.jsx(L,{boxId:"degree",checkboxContent:w(o,H,o)}),e.jsx(L,{boxId:"options",checkboxContent:w(i,R,i)})]})}),e.jsxs("div",{id:"right-content",className:`flex flex-row sm:h-[50px] items-center 
     
            `,children:[e.jsxs("p",{className:`font-opensans font-normal text-[14px] leading-[26px]
                   pt-[40px]
                   pb-[20px]
                   sm:pb-0
            sm:pt-0`,children:["Displaying ",e.jsxs("strong",{children:[c.length," results"]})]}),e.jsx(f.img,{src:"/ug-programs//grid-icon.svg",alt:"Grid View",className:"hidden md:block h-[20px] w-auto ml-[25px] cursor-pointer",onClick:()=>I(""),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:S!="list"?1:.5}}),e.jsx(f.img,{src:"/ug-programs//list-icon.svg",alt:"List View",className:"hidden md:block h-[20px] w-auto ml-[5px] cursor-pointer",onClick:()=>I("list"),whileHover:{scale:1.025,opacity:1},whileTap:{scale:.9},animate:{opacity:S==="list"?1:.5}})]})]})]}),c&&c.length===0&&e.jsxs("div",{id:"no-results",className:`bg-lightgrey max-w-[1128px] 
          p-[40px] mx-[30px]  
          mt-0
          sm:mt-[50px]
          lg:mx-auto
          md:py-[75px] md:px-[100px] `,children:[e.jsx("h3",{className:"font-domine font-[700] text-[21px] leading-[30px] md:mb-[15px]",children:"Please try your search again"}),e.jsx("p",{className:"font-bitter font-normal leading-[35px] text-[18px] py-[18px]",children:"Your search results do not match any available programs."}),e.jsx("hr",{}),e.jsxs("p",{className:"font-bitter font-normal leading-[35px] text-[18px] py-[18px]",children:["Need help finding a program? Contact"," ",e.jsx("a",{className:"underline text-primarylinkblue",href:"mailto:admiss@tcnj.edu",children:"admiss@tcnj.edu"}),","," ",e.jsx("a",{className:"underline text-primarylinkblue",href:"tel:1-609-771-2131",children:"609.771.2131"}),", to get more information."]})]}),e.jsx(f.div,{id:"filtered-programs-wrapper",className:`${S==="list"?"list-view flex flex-col md:gap-[25px]":"grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 "}
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
        `,initial:j?{opacity:1,y:0}:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:.15,ease:"easeOut",duration:.3},children:c&&c.map((t,s)=>e.jsx(q,{program:t,listType:S,index:s,animationState:j},t.program.slug+s))})]})}export{Z as default};

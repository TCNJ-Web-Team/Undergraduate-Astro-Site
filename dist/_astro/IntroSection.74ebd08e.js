import{j as e}from"./jsx-runtime.b9e88e07.js";import{r as o}from"./index.03be2d59.js";/* empty css                       */import{m}from"./motion.9b287751.js";function f(){const[i,p]=o.useState(!1),[l,n]=o.useState(!1),a=o.useRef(null),r=o.useRef(null),c=t=>{t===a?(p(!i),n(!1)):t===r&&(n(!l),p(!1))};o.useEffect(()=>{const t=s=>{(s.type==="click"&&(a.current&&!a.current.contains(s.target)&&s.target.className!=="info-button one w-[12px] h-[12px] mt-[-22px] cursor-pointer"||r.current&&!r.current.contains(s.target)&&s.target.className!=="info-button one w-[12px] h-[12px] mt-[-22px] cursor-pointer")||s.type==="keydown"&&s.key==="Escape")&&(p(!1),n(!1))};return document.addEventListener("click",t),document.addEventListener("keydown",t),()=>{document.removeEventListener("click",t),document.removeEventListener("keydown",t)}},[i,l]);const x=t=>{t.stopPropagation()};return e.jsxs("div",{id:"intro",className:`w-[100%] h-[562px] relative 
      z-[1000]
       border-[20px] sm:border-[35px] border-b-0 sm:border-b-0 border-tcnjyellow sm:h-[700px] md:h-[485px]`,children:[e.jsxs("div",{className:"max-w-[1128px] mx-auto relative z-10 text-white p-[35px] pl-[30px] pr-[30px] text-center sm:pt-[77px] md:pt-[67px] md:text-left lg:px-0",children:[e.jsxs("div",{id:"breadcrumbs",className:"font-bitter text-[17px] leading-[20px] sm:text-[18px] sm:leading-[26px] sm:text-left",children:[e.jsx("a",{children:"Home"})," / Explore Undergraduate Programs"]}),e.jsx(m.h1,{className:"pt-[100px] font-alfaslab text-tcnjyellow text-[32px] leading-[38px] pb-[10px] sm:pt-[150px] sm:text-[55px] sm:leading-[55px] md:text-[60px] md:leading-[65px] md:pt-[85px]",initial:{opacity:0,y:-5},animate:{opacity:1,y:0},transition:{delay:.25,ease:"easeOut",duration:.35},children:"Explore Undergraduate Programs"}),e.jsxs(m.div,{className:"font-domine text-[20px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[23px] font-normal",initial:{opacity:0,y:-5},animate:{opacity:1,y:0},transition:{delay:.75,ease:"easeOut",duration:.35},children:["Search by keyword or browse programs by selecting an area of study, degree type, and/or format. TCNJ students also have an option to pursue accelerated programs",e.jsxs("span",{className:"inline-block mr-[5px] ml-[-1px]",children:[e.jsx("div",{className:`popup-container fixed top-0 left-0
              bg-slate-600 w-[100%] h-[100%] ${i&&"active"}`,children:e.jsxs("div",{ref:a,className:`top-arrow-popup relative z-[1000] left-0 bg-white w-[100%]
                max-w-[1128px] mx-[15px] sm:mx-[30px] lg:mx-auto text-white  pl-[30px] pr-[30px] text-center  md:text-left lg:px-0 cursor-default`,onClick:x,children:[e.jsxs("p",{className:"accell-text-block py-[45px] px-[15px] sm:px-[45px] font-opensans text-[16px] leading-[24px] text-black",children:[e.jsx("strong",{children:"Accelerated bachelor’s to master’s degrees"})," ","are available in business, counseling, English, public health, public policy, and teacher education. Admission into the program’s graduate portion is based on undergraduate performance."]}),e.jsx("img",{className:"close-button",src:"/close-item.svg",onClick:()=>p(!1)})]})}),e.jsx("img",{className:"info-button one w-[12px] h-[12px] mt-[-22px] cursor-pointer",src:"/info-icon.svg",onClick:()=>c(a)})]}),"and dual degrees.",e.jsxs("span",{className:"inline-block mr-[5px] ml-[-2px] relative",children:[e.jsx("div",{className:`popup-container-two fixed top-0 left-0
              bg-slate-600 w-[100%] h-[100%] ${l&&"active"}`,children:e.jsxs("div",{ref:r,className:`top-arrow-popup relative z-[1000] left-0 bg-white w-[100%]
                max-w-[1128px] mx-[15px] sm:mx-[30px] lg:mx-auto text-white  pl-[30px] pr-[30px] text-center  md:text-left lg:px-0 cursor-default`,onClick:x,children:[e.jsxs("p",{className:" py-[45px] px-[15px] sm:px-[45px] font-opensans text-[16px] leading-[24px] text-black",children:[e.jsx("strong",{children:"Dual degrees"})," from affiliated universities are available in law, medicine, optometry, pharmacy, physical therapy, social service, and speech-language pathology. Admission into the program's graduate portion is based on undergraduate performance."]}),e.jsx("img",{className:"close-button",src:"/close-item.svg",onClick:()=>n(!1)})]})}),e.jsx("img",{className:"info-button one w-[12px] h-[12px] mt-[-22px] cursor-pointer",src:"/info-icon.svg",onClick:()=>c(r)})]})]})]}),e.jsxs("picture",{id:"hero-image",className:"absolute top-0 left-0 z-0 w-[100%]",children:[e.jsx("source",{srcSet:"https://tcnj.edu/custom/undergraduate/img/hero-desktop.jpg",type:"image/jpeg",media:"(min-width: 901px)"}),e.jsx("source",{srcSet:"https://tcnj.edu/custom/undergraduate/img/hero-tablet.jpg",type:"image/jpeg",media:"(min-width: 551px)"}),e.jsx("source",{srcSet:"https://tcnj.edu/custom/undergraduate/img/hero-mobile.jpg",type:"image/webp"}),e.jsx("img",{src:"https://tcnj.edu/custom/undergraduate/img/hero-mobile.jpg",alt:"TCNJ scenery",className:"w-[100%] h-[542px] sm:h-[665px] md:h-[450px] object-cover"})]}),e.jsx("div",{className:"bg-black absolute w-[100%] h-[100%] top-0 left-0 z-[5] opacity-[.5] sm:opacity-[.25]"})]})}export{f as default};
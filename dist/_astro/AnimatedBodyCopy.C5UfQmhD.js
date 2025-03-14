import{j as e}from"./jsx-runtime.C3nPk8XT.js";import"./index.Cq8P9Jm4.js";import{f as p}from"./fadeInVariant.DZRTaQ3B.js";import{m as x}from"./motion.C8JOvv4d.js";function i({copy:t,id:s}){return e.jsx(x.div,{id:s,className:"text-[20px] leading-[35px] text-center sm:text-left sm:text-[21px] sm:leading-[40px] md:text-[23px] md:leading-[45px] yellow-body-copy",dangerouslySetInnerHTML:{__html:t},variants:p,custom:2})}const c=({left:t,right:s,body:n,heading:m})=>{const a=m.replace(/\s+/g,"-").toLowerCase();return e.jsxs(x.div,{id:a,className:"relative sm:px-[45px] md:pl-[20px] md:pr-[20px] lgMd:pl-0  lg:pl-[0px] lg:pr-[0px]",variants:p,initial:"initial",whileInView:"animate",viewport:{once:!0},children:[e.jsx(x.h2,{className:`text-center font-chunkfive text-tcnjblue text-[45px] leading-[62px] pb-[25px] sm:pb-[20px] sm:text-[55px] sm:leading-[75px] sm:text-left md:text-[65px] md:leading-[89px] md:pb-[23px]
          lg:pb-[14px]
        
        `,variants:p,custom:1,children:m}),n&&e.jsx(i,{id:`${a}-body`,copy:n}),e.jsx("div",{className:`flex
      gap-[60px]
      sm:gap-[75px]
      md:gap-[100px]
      text-[1.438rem]
      inner-body-copy-white
      flex-col`,children:e.jsxs("div",{className:`flex flex-col  pb-[100px] gap-[0px]
          sm:flex-row
          sm:pb-[110px]
          sm:gap-[40px] 
          md:pb-[150px]
          lg:pb-[200px] 
          ${t?"sm:pt-[70px] md:pt-[89px] lg:pt-[85px]":"pt-0"}`,children:[t&&e.jsx(x.div,{id:`${a}-left`,className:"md:max-w-[45%] lg:max-w-[50%]",dangerouslySetInnerHTML:{__html:t},variants:p,custom:3}),e.jsx(x.div,{id:`${a}-right`,dangerouslySetInnerHTML:{__html:s||""},variants:p,custom:4})]})})]})};export{c as default};

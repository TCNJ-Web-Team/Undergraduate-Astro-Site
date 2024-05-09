import{j as e}from"./jsx-runtime.b9e88e07.js";import"./index.03be2d59.js";import{f as s}from"./fadeInVariant.284d47c4.js";import{m as x}from"./motion.9b287751.js";function m({copy:n,id:a}){return e.jsx(x.div,{id:a,className:`
      text-[20px]
          leading-[35px]
          text-center
          sm:text-[23px]
          sm:leading-[45px]
          sm:text-left
          md:text-[23px]
          md:leading-[45px]
          
          ${a==="careers-body"?"pb-[50px] sm:pb-[75px]":""}  

          `,dangerouslySetInnerHTML:{__html:n},variants:s,custom:2})}const c=({left:n,right:a,body:r,heading:t})=>{const p=t.replace(/\s+/g,"-").toLowerCase();return e.jsxs(x.div,{id:p,className:`relative ${t==="Careers"?"sm:pl-[47px] sm:pr-[47px] md:pl-[20px] md:pr-[20px]  lg:pl-[0px] lg:pr-[0px]":""}`,variants:s,initial:"initial",whileInView:"animate",viewport:{once:!0},children:[t!=="Careers"?e.jsx(x.h2,{className:`
          text-[23px] 
          leading-[33px] 
          pb-[20px]
          sm:pb-[25px] 
          sm:text-[30px] 
          sm:leading-[60px] 
          md:pb-[35px] 
          md:leading-[40px]
          font-chunkfive 
          text-tcnjblue`,variants:s,custom:1,children:t}):e.jsx(x.h2,{className:`text-center
      font-chunkfive 
      text-tcnjblue
      text-[45px]
      leading-[50px]
      pb-[50px]
      sm:pb-[20px]
      sm:text-[60px]
      sm:leading-[70px]
      sm:text-left
      md:text-[65px]
      md:leading-[75px]

      md:pb-[50px]
            `,variants:s,custom:1,children:"Careers"}),r&&t==="Careers"&&e.jsx(m,{id:`${p}-body`,copy:r}),e.jsxs("div",{className:`flex
      gap-[60px]
      sm:gap-[75px]
      md:gap-[100px]
      text-[1.438rem]
      inner-body-copy-white
      flex-col`,children:[e.jsxs("div",{className:t==="Careers"?"flex flex-col sm:flex-row pb-[100px] sm:pb-[125px] md:pb-[200px] gap-[50px] sm:gap-[40px]":"",children:[n&&e.jsx(x.div,{id:`${p}-left`,className:"md:max-w-[45%] lg:max-w-[40%]",dangerouslySetInnerHTML:{__html:n},variants:s,custom:3}),t==="Careers"&&e.jsx(x.div,{id:`${p}-right`,dangerouslySetInnerHTML:{__html:a||""},variants:s,custom:4})]}),r&&t!=="Careers"&&e.jsx("div",{className:"",id:`${p}-body`,dangerouslySetInnerHTML:{__html:r}})]})]})};export{c as default};

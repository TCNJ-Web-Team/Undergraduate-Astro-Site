import{j as e}from"./jsx-runtime.b9e88e07.js";import"./index.03be2d59.js";function r({copy:p,id:t}){return e.jsx("div",{id:t,className:`
      text-[20px]
          leading-[35px]
          text-center
          sm:text-[23px]
          sm:leading-[45px]
          sm:text-left
          md:text-[23px]
          md:leading-[45px]
          
          ${t==="careers-body"?"pb-[50px] sm:pb-[75px]":""}  

          `,dangerouslySetInnerHTML:{__html:p}})}function a({heading:p}){return e.jsx("h2",{className:`text-center
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
            `,children:p})}const d=({left:p,right:t,body:n,heading:x})=>{const s=x.replace(/\s+/g,"-").toLowerCase();return e.jsxs("div",{id:s,className:`relative ${x==="Careers"?"sm:pl-[47px] sm:pr-[47px] md:pl-[20px] md:pr-[20px]  lg:pl-[0px] lg:pr-[0px]":""}`,children:[x!=="Careers"?e.jsx("h2",{className:`
          text-[23px] 
          leading-[33px] 
          pb-[20px]
          sm:pb-[25px] 
          sm:text-[30px] 
          sm:leading-[60px] 
          md:pb-[35px] 
          md:leading-[40px]
          font-chunkfive 
          text-tcnjblue`,children:x}):e.jsx(a,{heading:"Careers"}),n&&x==="Careers"&&e.jsx(r,{id:`${s}-body`,copy:n}),e.jsxs("div",{className:`flex
      gap-[60px]
      sm:gap-[75px]
      md:gap-[100px]
      text-[1.438rem]
      inner-body-copy-white
      flex-col`,children:[e.jsxs("div",{className:x==="Careers"?"flex flex-col sm:flex-row pb-[100px] sm:pb-[125px] md:pb-[200px] gap-[50px] sm:gap-[40px]":"",children:[p&&e.jsx("div",{id:`${s}-left`,className:"md:max-w-[45%] lg:max-w-[40%]",dangerouslySetInnerHTML:{__html:p}}),x==="Careers"&&e.jsx("div",{id:`${s}-right`,dangerouslySetInnerHTML:{__html:t||""}})]}),n&&x!=="Careers"&&e.jsx("div",{className:"",id:`${s}-body`,dangerouslySetInnerHTML:{__html:n}})]})]})};export{d as default};

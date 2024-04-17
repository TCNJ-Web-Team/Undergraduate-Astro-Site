import{j as e}from"./jsx-runtime.b9e88e07.js";import"./index.03be2d59.js";import{m as n}from"./motion.9b287751.js";function m({heroImgMobile:r,heroImgTablet:s,sourceUrl:i,horizontalPositionDesktopHero:t,title:o}){return e.jsx("div",{className:"relative w-full overflow-hidden",children:e.jsxs("picture",{children:[r&&e.jsx("source",{media:"(max-width: 550px)",srcSet:r.sourceUrl}),s&&e.jsx("source",{media:"(max-width: 900px)",srcSet:s.sourceUrl}),e.jsx(n.img,{src:i,style:{objectPosition:`${t}%`},className:`relative z-30
                w-[100%]
          h-[450px]
          sm:h-[600px]
          object-cover
          pl-[35px]
          
          lg:pl-[100px]
          lg:w-[100%]
          xl:pl-[200px]`,id:"hero-img",alt:o})]})})}export{m as default};

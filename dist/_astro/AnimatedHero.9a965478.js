import{j as e}from"./jsx-runtime.b9e88e07.js";import"./index.03be2d59.js";import{m as l}from"./motion.9b287751.js";function p({heroImgMobile:n,heroImgTablet:t,sourceUrl:s,horizontalPositionDesktopHero:i,title:a}){return e.jsxs("div",{className:"relative w-full overflow-hidden",children:[e.jsxs("picture",{children:[n&&e.jsx("source",{media:"(max-width: 550px)",srcSet:n.sourceUrl}),t&&e.jsx("source",{media:"(max-width: 900px)",srcSet:t.sourceUrl}),e.jsx(l.img,{src:s,style:{objectPosition:`${i}%`},className:`relative z-30
                w-[100%]
          h-[450px]
          sm:h-[600px]
          object-cover
          pl-[35px]
          
          lg:pl-[100px]
          lg:w-[100%]
          xl:pl-[200px]`,id:"hero-img",alt:a,initial:{opacity:0,x:25},animate:{opacity:1,x:0},transition:{delay:.045,ease:"easeInOut",duration:.55}})]}),e.jsx("div",{className:`absolute top-0 
                bg-lightgrey
                w-[100%]
          h-[450px]
          sm:h-[600px]
    
          left-[35px]
          
          lg:left-[100px]
          xl:left-[200px]
          z-10
          `})]})}export{p as default};

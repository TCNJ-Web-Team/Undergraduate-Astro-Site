import{j as t}from"./jsx-runtime.C3nPk8XT.js";import"./index.Cq8P9Jm4.js";function h({heroImgMobile:s,heroImgTablet:e,sourceUrl:o,horizontalPositionDesktopHero:c,horizontalPositionMobile:r,horizontalPositionTablet:i,title:p,badge:l}){const x=o?.replace("-scaled.jpg",".jpg")||o,a=s?.sourceUrl?.replace("-scaled.jpg",".jpg")||s?.sourceUrl,n=e?.sourceUrl?.replace("-scaled.jpg",".jpg")||e?.sourceUrl,d=r||0,m=i||0,j=c||0;return t.jsxs("div",{className:"relative w-full overflow-hidden",children:[t.jsxs("picture",{children:[s&&t.jsx("source",{media:"(max-width: 550px)",srcSet:a}),e&&t.jsx("source",{media:"(max-width: 900px)",srcSet:n}),t.jsx("img",{src:x,className:`relative z-30 w-[100%] h-[450px] sm:h-[600px] md:h-[500px] lg:h-[700px] object-cover pl-[35px] lg:pl-[100px] xl:pl-[200px]
    standard-object-position-${j} 
            mobile-object-position-${d} 
            tablet-object-position-${m}

  `,id:"hero-img",alt:p})]}),l&&t.jsx("img",{src:l.sourceUrl,className:`absolute right-[10px] bottom-[12px] z-40 h-auto w-[208px]
                    sm:right-[41px] sm:bottom-[27px] sm:w-[215px]
                    md:right-[35px] md:bottom-[7px] md:w-[215px]
                    lg:right-[70px] lg:bottom-[37px] lg:w-[236px]`,alt:"Badge "+p})]})}export{h as default};

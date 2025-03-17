import{j as s}from"./jsx-runtime.D3GSbgeI.js";import"./index.yBjzXJbu.js";function w({heroImgMobileWebp:o,heroImgMobile:t,heroImgTablet:e,sourceUrl:p,horizontalPositionDesktopHero:l,horizontalPositionMobile:i,horizontalPositionTablet:x,title:c,badge:r}){const a=p?.replace("-scaled.jpg",".jpg")||p,d=t?.sourceUrl?.replace("-scaled.jpg",".jpg")||t?.sourceUrl,n=e?.sourceUrl?.replace("-scaled.jpg",".jpg")||e?.sourceUrl,m=i||0,j=x||0,u=l||0;return s.jsxs("div",{className:"relative w-full overflow-hidden",children:[s.jsxs("picture",{children:[o&&s.jsx("source",{media:"(max-width: 550px)",srcSet:o.sourceUrl}),t&&s.jsx("source",{media:"(max-width: 550px)",srcSet:d}),e&&s.jsx("source",{media:"(max-width: 900px)",srcSet:n}),s.jsx("img",{src:a,className:`relative z-30 w-[100%] h-[450px] sm:h-[600px] md:h-[500px] lg:h-[700px] object-cover pl-[35px] lg:pl-[100px] xl:pl-[200px]
    standard-object-position-${u} 
            mobile-object-position-${m} 
            tablet-object-position-${j}

  `,id:"hero-img",alt:c})]}),r&&s.jsx("img",{src:r.sourceUrl,className:`absolute right-[10px] bottom-[12px] z-40 h-auto w-[208px]
                    sm:right-[41px] sm:bottom-[27px] sm:w-[215px]
                    md:right-[35px] md:bottom-[7px] md:w-[215px]
                    lg:right-[70px] lg:bottom-[37px] lg:w-[236px]`,alt:"Badge "+c})]})}export{w as default};

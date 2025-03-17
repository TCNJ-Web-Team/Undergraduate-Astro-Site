import{j as s}from"./jsx-runtime.D3GSbgeI.js";import"./index.yBjzXJbu.js";function b({heroImgMobileWebp:o,heroImgMobile:e,heroImgTabletWebp:c,heroImgTablet:t,sourceUrl:r,heroImgDesktopWebp:p,horizontalPositionDesktopHero:x,horizontalPositionMobile:a,horizontalPositionTablet:d,title:i,badge:l}){const m=r?.replace("-scaled.jpg",".jpg")||r,n=e?.sourceUrl?.replace("-scaled.jpg",".jpg")||e?.sourceUrl,j=t?.sourceUrl?.replace("-scaled.jpg",".jpg")||t?.sourceUrl,u=a||0,g=d||0,w=x||0;return s.jsxs("div",{className:"relative w-full overflow-hidden",children:[s.jsxs("picture",{children:[o&&s.jsx("source",{media:"(max-width: 550px)",srcSet:o.sourceUrl}),e&&s.jsx("source",{media:"(max-width: 550px)",srcSet:n}),c&&s.jsx("source",{media:"(max-width: 900px)",srcSet:c.sourceUrl,type:"image/webp"}),t&&s.jsx("source",{media:"(max-width: 900px)",srcSet:j}),p&&s.jsx("source",{srcSet:p.sourceUrl,type:"image/webp"}),s.jsx("img",{src:m,className:`relative z-30 w-[100%] h-[450px] sm:h-[600px] md:h-[500px] lg:h-[700px] object-cover pl-[35px] lg:pl-[100px] xl:pl-[200px]
    standard-object-position-${w} 
            mobile-object-position-${u} 
            tablet-object-position-${g}

  `,id:"hero-img",alt:i})]}),l&&s.jsx("img",{src:l.sourceUrl,className:`absolute right-[10px] bottom-[12px] z-40 h-auto w-[208px]
                    sm:right-[41px] sm:bottom-[27px] sm:w-[215px]
                    md:right-[35px] md:bottom-[7px] md:w-[215px]
                    lg:right-[70px] lg:bottom-[37px] lg:w-[236px]`,alt:"Badge "+i})]})}export{b as default};

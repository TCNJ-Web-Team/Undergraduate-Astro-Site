import{t as e}from"./jsx-runtime.C8BoMr6r.js";var t=e();function n({heroImgMobileWebp:e,heroImgMobile:n,heroImgTabletWebp:r,heroImgTablet:i,sourceUrl:a,heroImgDesktopWebp:o,horizontalPositionDesktopHero:s,horizontalPositionMobile:c,horizontalPositionTablet:l,title:u,badge:d}){let f=a?.replace(`-scaled.jpg`,`.jpg`)||a,p=n?.sourceUrl?.replace(`-scaled.jpg`,`.jpg`)||n?.sourceUrl,m=i?.sourceUrl?.replace(`-scaled.jpg`,`.jpg`)||i?.sourceUrl,h=c||0,g=l||0,_=s||0;return(0,t.jsxs)(`section`,{className:`relative w-full overflow-hidden`,children:[(0,t.jsxs)(`picture`,{children:[e&&(0,t.jsx)(`source`,{media:`(max-width: 550px)`,srcSet:e.sourceUrl}),n&&(0,t.jsx)(`source`,{media:`(max-width: 550px)`,srcSet:p}),r&&(0,t.jsx)(`source`,{media:`(max-width: 900px)`,srcSet:r.sourceUrl,type:`image/webp`}),i&&(0,t.jsx)(`source`,{media:`(max-width: 900px)`,srcSet:m}),o&&(0,t.jsx)(`source`,{srcSet:o.sourceUrl,type:`image/webp`}),(0,t.jsx)(`img`,{src:f,className:`relative z-30 w-[100%] h-[450px] sm:h-[600px] md:h-[500px] lg:h-[700px] object-cover pl-[35px] lg:pl-[100px] xl:pl-[200px]
    standard-object-position-${_} 
            mobile-object-position-${h} 
            tablet-object-position-${g}

  `,id:`hero-img`,alt:u})]}),d&&(0,t.jsx)(`img`,{src:d.sourceUrl,className:`absolute right-[10px] bottom-[12px] z-40 h-auto w-[208px]
                    sm:right-[41px] sm:bottom-[27px] sm:w-[215px]
                    md:right-[35px] md:bottom-[7px] md:w-[215px]
                    lg:right-[70px] lg:bottom-[37px] lg:w-[236px]`,alt:`Badge `+u})]})}export{n as default};
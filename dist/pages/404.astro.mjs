/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CQh-u2xo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Be99Bnas.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  // If user lands here from a non-existing route (e.g. /bad-path), redirect to /404.html\n  if (\n    !location.pathname.endsWith("/404.html") &&\n    !location.search.includes("fromError")\n  ) {\n    window.location.replace("/404.html?fromError=1");\n  }\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "404 \u2013 Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col justify-center items-center p-[0px] w-auto border-[15px] sm:border-[35px] border-tcnjyellow sm:bg-white
    min-h-[calc(100vh-216px)] sm:min-h-[calc(100vh-516px)]"> <main class="text-center
      bg-white
      relative
      py-[71px]
      sm:py-[93px]
      px-[25px]
      sm:px-[45px]
      lg:py-[105px]"> <h1 class="font-alfaslab text-tcnjblue text-[32px] leading-[37px]sm:text-[40px] sm:leading-[45px] md:text-[60px] md:leading-[65px] font-[400] pb-[30px]">
Page Not Found
</h1> <p class="font-domine text-[20px] leading-[30px] sm:text-[20px] sm:leading-[35px] md:leading-[35px] md:text-[20px] font-normal
          max-w-[1095px]">
Sorry, we couldn’t find the page you were looking for.<br>
Please
<a href="/" class="text-[#33739F] underline">
return to the Program Explorer.
</a> </p> </main> </div> ` }));
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/404.astro", void 0);

const $$file = "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

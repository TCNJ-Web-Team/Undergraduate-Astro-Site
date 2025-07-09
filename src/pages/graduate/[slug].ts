// src/pages/graduate/[slug].ts
import type { APIRoute } from "astro";
import { wpquery } from "../../data/wordpress"; // adjust relative path!

/** Build a lookup table once at build time */
async function getRedirectTable() {
  const { gradProgramsRedirects } = await wpquery({
    query: `query GradRedirectList {
      gradProgramsRedirects(first: 220) {
        nodes {
          graduateProgramRedirect {
            slug
            redirectUrl
          }
        }
      }
    }`,
  });

  const table = new Map<string, string>();
  gradProgramsRedirects.nodes.forEach((n: any) => {
    const { slug, redirectUrl } = n.graduateProgramRedirect;
    table.set(
      slug,
      redirectUrl.startsWith("http") ? redirectUrl : `https://${redirectUrl}`
    );
  });
  return table;
}

/* ---------- dynamic routing ---------- */
export async function getStaticPaths() {
  const table = await getRedirectTable();
  return Array.from(table.keys()).map((slug) => ({ params: { slug } }));
}

// export const GET: APIRoute = async ({ params, redirect }) => {
//   const table = await getRedirectTable();
//   const target = table.get(params.slug!);

//   // Defensive check: if someone hits a non-listed slug, 404.
//   if (!target) return new Response("Not found", { status: 404 });

//   // 302 (temporary) by default; pass 301/308 if you prefer
//   return redirect(target, 302);
// };
export const GET: APIRoute = async ({ params }) => {
  const table = await getRedirectTable();

  const target = table.get(params.slug!);
  if (!target) return new Response("Not found", { status: 404 });

  // minimal body so nothing flashes
  return new Response(
    `<meta http-equiv="refresh" content="0; url=${target}">`,
    { status: 302, headers: { Location: target } }
  );
};

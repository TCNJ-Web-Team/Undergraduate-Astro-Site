import { jsxs, jsx } from 'react/jsx-runtime';
/* empty css                          */

async function wpquery({ query, variables = {} }) {
  try {
    const res = await fetch("https://ceva6.tcnj.edu/graphql", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query,
        variables
      })
    });
    if (!res.ok) {
      throw new Error(
        `Request failed with status ${res.status}: ${res.statusText}`
      );
    }
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

function NextStepFooter({ customCtaButtons }) {
  return /* @__PURE__ */ jsxs("div", { id: "next-step-footer", children: [
    /* @__PURE__ */ jsx("h2", { children: "Take the next step" }),
    !customCtaButtons ? /* @__PURE__ */ jsxs("div", { className: "link-wrapper", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "program-next-step-button-gtm",
          href: "https://admissions.tcnj.edu/apply/",
          target: "_blank",
          children: "Apply"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "program-next-step-button-gtm",
          href: "https://admissions.tcnj.edu/visit/",
          target: "_blank",
          children: "Visit"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "program-next-step-button-gtm",
          href: "https://connect.tcnj.edu/register/prospect",
          target: "_blank",
          children: "Request Info"
        }
      )
    ] }) : /* @__PURE__ */ jsx("div", { className: "link-wrapper", children: customCtaButtons.map((button, index) => /* @__PURE__ */ jsx(
      "a",
      {
        className: "program-next-step-button-gtm",
        href: button.buttonLink.url,
        target: "_blank",
        children: button.buttonText
      },
      index
    )) })
  ] });
}

export { NextStepFooter as N, wpquery as w };

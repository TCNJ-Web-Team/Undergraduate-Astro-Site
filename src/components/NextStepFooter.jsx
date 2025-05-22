import "../styles/next-step-footer.scss";

export default function NextStepFooter({ customCtaButtons }) {
  // console.log(customCtaButtons);
  return (
    <div id="next-step-footer">
      <h2>Take the next step</h2>
      {!customCtaButtons ? (
        <div className="link-wrapper">
          <a
            className="program-next-step-button-gtm"
            href="https://admissions.tcnj.edu/apply/"
            target="_blank"
          >
            Apply
          </a>
          <a
            className="program-next-step-button-gtm"
            href="https://admissions.tcnj.edu/visit/"
            target="_blank"
          >
            Visit
          </a>
          <a
            className="program-next-step-button-gtm"
            href="https://connect.tcnj.edu/register/prospect"
            target="_blank"
          >
            Request Info
          </a>
        </div>
      ) : (
        <div className="link-wrapper">
          {customCtaButtons.map((button, index) => (
            <a
              key={index}
              className="program-next-step-button-gtm"
              href={button.buttonLink.url}
              target="_blank"
            >
              {button.buttonText}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

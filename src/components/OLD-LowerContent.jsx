export default function LowerContent({ lowerContent }) {
  return (
    <div id="lower-content">
      {lowerContent.map((content, index) => {
        return (
          <div
            key={index}
            id={content.title.replace(/\s+/g, "-").toLowerCase()}
          >
            <h3>{content.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: content.body }} />
          </div>
        );
      })}
    </div>
  );
}

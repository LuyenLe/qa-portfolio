import './SectionHeading.css';

// Shared section header used by every Home section: an accent marker, the H2,
// and a trailing hairline. `id` is applied to the <h2> so sections can be
// referenced with aria-labelledby.
export default function SectionHeading({ id, eyebrow, children }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <h2 id={id} className="section-heading__title">
        <span className="section-heading__marker" aria-hidden="true" />
        <span className="section-heading__text">{children}</span>
      </h2>
    </div>
  );
}

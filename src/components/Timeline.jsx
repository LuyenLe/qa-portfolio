import './Timeline.css';

// Compact vertical career timeline. `items` is the language-resolved
// career_timeline array from homepageData ({ period, company, role, description }).
// The final entry is marked as the current role so the present QA position stays
// visually prominent and the older frontend years do not dominate.
export default function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item, index) => {
        const isCurrent = index === items.length - 1;
        return (
          <li
            key={`${item.period}-${item.company}`}
            className={`timeline__item${isCurrent ? ' timeline__item--current' : ''}`}
          >
            <span className="timeline__dot" aria-hidden="true" />
            <p className="timeline__period">{item.period}</p>
            <div className="timeline__card">
              <h3 className="timeline__role">{item.role}</h3>
              <p className="timeline__company">{item.company}</p>
              <p className="timeline__description">{item.description}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

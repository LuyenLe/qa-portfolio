import './SkillGroup.css';

// One skill category card: the group name and its skills as plain chips.
// No proficiency levels or bars — the source data does not define them.
export default function SkillGroup({ name, skills }) {
  return (
    <div className="skill-group">
      <h3 className="skill-group__name">{name}</h3>
      <ul className="skill-group__list">
        {skills.map((skill) => (
          <li key={skill} className="skill-group__chip">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

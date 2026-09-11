import './SkillGroup.css';

// One skill category as a compact editorial row inside the Skills <dl>: the
// group name (<dt>) beside its skills as plain pills (<dd>). No proficiency
// levels or bars — the source data does not define them.
export default function SkillGroup({ name, skills }) {
  return (
    <div className="skill-group">
      <dt className="skill-group__name">{name}</dt>
      <dd className="skill-group__items">
        {skills.map((skill) => (
          <span key={skill} className="skill-group__pill">
            {skill}
          </span>
        ))}
      </dd>
    </div>
  );
}

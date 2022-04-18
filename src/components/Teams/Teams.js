import teamsJSON from '../../../data/teams.json';
import Section from '../Section';

// TODO: Refactor later so Section can be reused and make the teams show as cards
const Teams = () => {
  return teamsJSON.data.map(({ name, abbreviation, type, requirements }) => (
    <Section
      key={name}
      teamName={name}
      teamNameAbbreviation={abbreviation}
      type={type}
    >
      {requirements && (
        <ul>
          {requirements.map((requirement) => (
            <li key={requirement}>{requirement}</li>
          ))}
        </ul>
      )}
    </Section>
  ));
};

export default Teams;

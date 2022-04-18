import pt from 'prop-types';
import teamsSchema from '../../../schemas/teams.schema.json';

const teamTypes = teamsSchema.properties.data.items.properties.type.enum;

const propTypes = {
  children: pt.oneOfType([pt.arrayOf(pt.node), pt.node]),
  teamName: pt.string,
  teamNameAbbreviation: pt.string,
  type: pt.oneOf(teamTypes),
};

const Section = ({ children, teamName, teamNameAbbreviation, type }) => {
  return (
    <section>
      {teamName && <h3>{teamName}</h3>}

      <h4>{'[' + teamNameAbbreviation + ']'}</h4>

      <h5> {type}</h5>

      <h6>Requirements</h6>

      {children}
    </section>
  );
};

Section.propTypes = propTypes;

export default Section;

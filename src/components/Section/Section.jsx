import PropTypes from 'prop-types';
import { StatisticSection } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <StatisticSection>
      <h2>{title}</h2>
      {children}
    </StatisticSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

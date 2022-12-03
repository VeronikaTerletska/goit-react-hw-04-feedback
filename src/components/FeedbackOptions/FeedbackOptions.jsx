import PropTypes from 'prop-types';
import { ButtonsContainer, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsContainer>
      {options.map((option, index) => {
        return (
          <Button
            type="button"
            name={option}
            onClick={onLeaveFeedback}
            key={index}
          >
            {option}
          </Button>
        );
      })}
    </ButtonsContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

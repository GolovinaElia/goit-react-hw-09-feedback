import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

const FeedbackOption = ({ options, onLeaveFeedback }) => (
  <ul className={style.feedbackList}>
    {options.map(btn => (
      <li key={btn} className={style.feedbackItem}>
        <button
          className={style.button}
          type="button"
          name={btn}
          onClick={onLeaveFeedback}
        >
          {btn}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOption;

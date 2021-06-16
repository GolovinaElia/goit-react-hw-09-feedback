import PropTypes from 'prop-types';
import style from './Statistics.module.css';
import Notifications from '../Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={style.statistics}>
    <h2 className={style.title}>Statistics</h2>
    {total === 0 ? (
      <Notifications message="No feedback given" />
    ) : (
      <ul className={style.statList}>
        <li className={style.good}>Good: {good}</li>
        <li className={style.neutral}>Neutral: {neutral}</li>
        <li className={style.bad}>Bad: {bad}</li>
        <li className={style.total}>Total: {total}</li>
        <li className={style.positiveFeedback}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    )}
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

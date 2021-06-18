import React, { useState } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        console.log(null);
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round((good * 100) / total);
    return positivePercentage;
  };
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleIncrement}
      />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </Section>
  );
};

export default App;

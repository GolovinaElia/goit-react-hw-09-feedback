import { useState } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  // const [positivePercentage, setPositivePercentage] = useState(0);

  const handleIncrement = () => {
    setGood(good + 1);
    setNeutral(neutral + 1);
    setBad(bad + 1);
    setTotal(good + neutral + bad);
    // setPositivePercentage(Math.round(good * 100));
  }

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
          // positivePercentage={positivePercentage}
        />
      </Section>
    );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleIncrement = event => {
//     const name = event.target.name;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = Math.round((good * 100) / total);
//     return positivePercentage;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={['good', 'neutral', 'bad']}
//           onLeaveFeedback={this.handleIncrement}
//         />

//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={total}
//           positivePercentage={positivePercentage}
//         />
//       </Section>
//     );
//   }
// }

export default App;

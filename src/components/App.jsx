import {Feedback } from 'components/Feedback/Feedback'
import Statistics from 'components/Statistics/Statistics'

import Notification from 'components/Notification/notification'
import Section from 'components/Section/Section'
import { useState } from 'react'


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const choiceState = (propertyName) => {
    switch (propertyName){
      case "good":
        setGood(prev => prev + 1);
        break;
      case "neutral":
        setNeutral(prev => prev + 1);
        break;
      case "bad":
        setBad(prev => prev + 1);
        break;
        default:
          return;
    }
      };


      const totalFeedback = () =>{
        return good + neutral + bad
       };
      
      const feedbackPercentage = ()=>{
       return Math.round((good / totalFeedback()) * 100)
       };
      
    
 
  
  return (
  <>
  <div>
  <Section title="Please leave feedback">
   <Feedback 
   options={["good", "neutral", "bad"]} 
  choiceState={choiceState}
  />

  </Section>
   <Section title="Statistics">
   {totalFeedback() ?
     <Statistics good={good} 
            neutral={neutral} 
            bad={bad} 
            total={totalFeedback()} 
            positivePercentage={feedbackPercentage()}/>
            
            :
            <Notification message="There is no feedback"/>
          }
    </Section>
  </div>
  </>
  );
};













 

  












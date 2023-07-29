import { hover } from '@testing-library/user-event/dist/hover';
import { useEffect, useState } from 'react';
import QuestionInput from '../components/QuestionInput';
import { Configuration, OpenAIApi} from 'openai';

function QuestionPage({ bgColor }) {
  const [hoverColor, setHoverColor] = useState('hover:bg-white');
  const [response, setResponse] = useState('');

  let apiKey = process.env.REACT_APP_OPENAI_API_KEY;


  const generateQuestions = async () => {
    
    const systemMessage = {
      role: "system",
      content: "You are an AI who's job is print out math questions for students to answer. Only respond with the question don't start by saying sure for example just go right into the question."
    }
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        {role: "user", content: "Generate a single math question for a first grader to answer."},
      ]
    }
    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json()
    }).then((data) => {
      console.log(data)
    })
  }

  useEffect(() => {
    if (bgColor === 'bg-green-500') {
      setHoverColor('hover:bg-green-600');
    } else if (bgColor === 'bg-blue-500') {
      setHoverColor('hover:bg-blue-600');
    } else if (bgColor === 'bg-yellow-500') {
      setHoverColor('hover:bg-yellow-600');
    }
    generateQuestions();
  }, []);

  return (
    <div className={`h-screen flex flex-col justify-center items-center`}>
      <div className="grid grid-cols-2 gap-4 w-full mt-auto">
        {/* First column */}
        <div>
          <QuestionInput number="1" question="What is 1 + 9" answer="10"/>

          <QuestionInput number="2" question="What is 1 + 9" answer="10"/>

          <QuestionInput number="3" question="What is 1 + 9" answer="10"/>
        </div>

        {/* Second column */}
        <div>
          <QuestionInput number="4" question="What is 1 + 9 + 2023" answer="10"/>

          <QuestionInput number="5" question="What is 1 + 9" answer="10"/>

          <QuestionInput number="6" question="What is 1 + 9" answer="10"/>
        </div>
      </div>

      <div className="mt-auto mb-4 flex justify-center items-center gap-2">
        <button type="submit" className={`py-2 px-4 ${bgColor} rounded-md ${hoverColor} text-white`}>
          Submit
        </button>
        <button type="submit" className={`py-2 px-4 ${bgColor} rounded-md ${hoverColor} text-white`}>
          Talk
        </button>
      </div>
    </div>
  );
}

export default QuestionPage;

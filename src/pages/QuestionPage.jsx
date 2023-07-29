import { hover } from '@testing-library/user-event/dist/hover';
import { useEffect, useState } from 'react';
import QuestionInput from '../components/QuestionInput';
import { Configuration, OpenAIApi} from 'openai';

function QuestionPage({ bgColor }) {
  const [hoverColor, setHoverColor] = useState('hover:bg-white');
  const [questions, setQuestions] = useState({1: "", 2: "", 3: "", 4: "", 5: "", 6: ""});

  let apiKey = process.env.REACT_APP_OPENAI_API_KEY;


  const generateQuestions = async () => {
    const apiRequests = [];
    // for (let i = 0; i < 6; i++) {
      const systemMessage = {
        role: "system",
        content:
          "You are an AI whose job is to print out math questions for students to answer. Only respond with the question; don't start by saying sure, for example, just go right into the question.",
      };
      const apiRequestBody = {
        model: "gpt-3.5-turbo",
        messages: [
          systemMessage,
          { role: "user", content:  "Write 6 math questions for a first grader to answer. Your response should be seperated by only a single '\n'. Your response must leave out any unneccessary phrases or responses" },
        ],
      };

      await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
      }).then((data) => data.json()).then((data) => {
        let [question1, question2, question3, question4, question5, question6] = data["choices"][0]["message"]["content"].split("\n")
        console.log(question1);
        console.log(question2);
        console.log(question3);
        console.log(question4);
        console.log(question5);
        console.log(question6);
      });
      // apiRequests.push(
      //   fetch("https://api.openai.com/v1/chat/completions", {
      //     method: "POST",
      //     headers: {
      //       Authorization: "Bearer " + apiKey,
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(apiRequestBody),
      //   }).then((data) => data.json())
      // );

    // }

    // try {
    //   const responses = await Promise.all(apiRequests);
    //   setQuestions((prevQuestions) => {
    //     const updatedQuestions = { ...prevQuestions };
    //     responses.forEach((data, index) => {
    //       updatedQuestions[index + 1] = data["choices"][0]["message"]["content"];
    //     });
    //     return updatedQuestions;
    //   });
    // } catch (error) {
    //   console.error("Error fetching questions:", error);
    // }
  };


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
          <QuestionInput number="1" question={questions[1]} answer="10"/>

          <QuestionInput number="2" question={questions[2]} answer="10"/>

          <QuestionInput number="3" question={questions[3]} answer="10"/>
        </div>

        {/* Second column */}
        <div>
          <QuestionInput number="4" question={questions[4]} answer="10"/>

          <QuestionInput number="5" question={questions[5]} answer="10"/>

          <QuestionInput number="6" question={questions[6]} answer="10"/>
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

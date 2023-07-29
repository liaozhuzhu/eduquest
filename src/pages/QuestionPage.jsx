import { useEffect, useState } from 'react';
import QuestionInput from '../components/QuestionInput';

function QuestionPage({ bgColor, hoverBgColor }) {
  const [hoverColor, setHoverColor] = useState('hover:bg-white');
  const [questions, setQuestions] = useState({1: "", 2: "", 3: "", 4: "", 5: "", 6: ""});
  const [answers, setAnswers] = useState({1: "", 2: "", 3: "", 4: "", 5: "", 6: ""});
  const [userInputs, setUserInputs] = useState({1: "", 2: "", 3: "", 4: "", 5: "", 6: ""});
  const [grade, setGrade] = useState("first");

  let apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const generateQuestions = async () => {
      const systemMessage = {
        role: "system",
        content:
          "You are an AI whose job is to print out math questions for students to answer. Only respond with the question; don't start by saying sure, for example, just go right into the question.",
      };
      const apiRequestBody = {
        model: "gpt-3.5-turbo",
        messages: [
          systemMessage,
          { role: "user", content:  `Write 6 math questions for a ${grade} grader to answer. Your response should be seperated by only a single '\n'. Do not start each question with a number. Your response must leave out any unneccessary phrases or responses` },
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
        setQuestions((prevQuestions) => {
          return {
            ...prevQuestions,
            1: data["choices"][0]["message"]["content"].split("\n")[0],
            2: data["choices"][0]["message"]["content"].split("\n")[1],
            3: data["choices"][0]["message"]["content"].split("\n")[2],
            4: data["choices"][0]["message"]["content"].split("\n")[3],
            5: data["choices"][0]["message"]["content"].split("\n")[4],
            6: data["choices"][0]["message"]["content"].split("\n")[5],
          };
        });

      });
  };

  const generateAnswers = async (question, questionNumber) => {
    const systemMessage = {
      role: "system",
      content: "you are an teacher whose job is to answer math questions without saying any unnecessary phrases or sentences",
    };
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage,
        { role: "user", content:  question + ". Answer with only the integer number. Do not include special characters such as periods or unneccessary phrases or letters." },
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
      setAnswers((prevAnswers) => {
        return {
          ...prevAnswers,
          [questionNumber]: data["choices"][0]["message"]["content"],
        };
      });
      });
  };

  const handleSubmit = () => {
    let score = 0;
    console.log(userInputs, answers)
    for (let i = 1; i <= 6; i++) {
      if (userInputs[i] === answers[i]) {
        score++;
      }
    }

    alert(`Your score: ${score}/6`);
  };

  useEffect(() => {
    if (bgColor === 'bg-green-500') {
      setGrade("first")
    } else if (bgColor === 'bg-blue-500') {
      setGrade("second")
    } else if (bgColor === 'bg-yellow-500') {
      setGrade("third")
    }

    generateQuestions();
  }, []);

  useEffect(() => {
    for (let i = 1; i <= 6; i++) {
      generateAnswers(questions[i], i);
    }
  }, [questions])

  return (
    <div className={`h-screen flex flex-col justify-center items-center`}>
      <div className="grid grid-cols-2 gap-4 w-full mt-auto">
        {/* First column */}
        <div>
          <QuestionInput
            number="1"
            question={questions[1]}
            answer={answers[1]}
            userInput={userInputs[1]}
            setUserInput={(input) => setUserInputs({ ...userInputs, 1: input })}
          />

          <QuestionInput
            number="2"
            question={questions[2]}
            answer={answers[2]}
            userInput={userInputs[2]}
            setUserInput={(input) => setUserInputs({ ...userInputs, 2: input })}
          />

          <QuestionInput
            number="3"
            question={questions[3]}
            answer={answers[3]}
            userInput={userInputs[3]}
            setUserInput={(input) => setUserInputs({ ...userInputs, 3: input })}
          />
        </div>

        {/* Second column */}
        <div>
          <QuestionInput
            number="4"
            question={questions[4]}
            answer={answers[4]}
            userInput={userInputs[4]}
            setUserInput={(input) => setUserInputs({ ...userInputs, 4: input })}
          />

          <QuestionInput
            number="5"
            question={questions[5]}
            answer={answers[5]}
            userInput={userInputs[5]}
            setUserInput={(input) => setUserInputs({ ...userInputs, 5: input })}
          />

          <QuestionInput
            number="6"
            question={questions[6]}
            answer={answers[6]}
            userInput={userInputs[6]}
            setUserInput={(input) => setUserInputs({ ...userInputs, 6: input })}
          />
        </div>
      </div>

      <div className="mt-auto mb-4 flex justify-center items-center gap-2">
        <button
          type="button"
          className={`py-2 px-4 ${bgColor} rounded-md ${hoverBgColor} text-white`}
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          type="submit"
          className={`py-2 px-4 ${bgColor} rounded-md ${hoverBgColor} text-white`}
        >
          Talk
        </button>
      </div>
    </div>
  );
}

export default QuestionPage;

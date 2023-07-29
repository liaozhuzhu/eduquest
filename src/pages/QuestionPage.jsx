import { hover } from '@testing-library/user-event/dist/hover';
import { useEffect, useState } from 'react';
import QuestionInput from '../components/QuestionInput';
import { Configuration, OpenAIApi} from 'openai';

function QuestionPage({ bgColor }) {
  const [hoverColor, setHoverColor] = useState('hover:bg-white');
  const [response, setResponse] = useState('');

  // make a function that calls the openai api using model 3.5 turbo and the prompt: "hello"
  const callOpenAI = async () => {
    const configuration = new Configuration({
      apiKey: '',
    });

    const openai = new OpenAIApi(configuration);

    const prompt = 'hello';

    const gptResponse = await openai.complete({
      engine: 'davinci',
      prompt: prompt,
      maxTokens: 5,
      temperature: 0.5,
      topP: 1,
      presencePenalty: 0,
      frequencyPenalty: 0,
      bestOf: 1,
      n: 1,
      stream: false,
      stop: ['\n'],
    });

    setResponse(gptResponse.data.choices[0].text);
  };

  useEffect(() => {
    if (bgColor === 'bg-green-500') {
      setHoverColor('hover:bg-green-600');
    } else if (bgColor === 'bg-blue-500') {
      setHoverColor('hover:bg-blue-600');
    } else if (bgColor === 'bg-yellow-500') {
      setHoverColor('hover:bg-yellow-600');
    }
    callOpenAI();
  }, [bgColor]);

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

import React from 'react'

function QuestionInput({number, question, answer}) {
  return (
    <div className="flex items-end justify-start gap-2 my-10 mx-5">
        <div className="flex items-end justify-center gap-1">
            <label className="text-4xl text-stone-600">{number}.</label>
            <p className="text-2xl text-stone-600 whitespace-nowrap">
                {question}
            </p>
        </div>
        <input
              className="border focus:outline-none border-0 border-b-2 border-stone-600 w-1/2 text-stone-600 text-3xl"
              type="text"
              placeholder=""
        />
    </div>
  )
}

export default QuestionInput
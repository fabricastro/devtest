import React from 'react';
import { OptionType, QuestionType } from '../types';

interface QuestionProps {
    question: QuestionType;
    onSelect: (optionIndex: number) => void;
    selectedOptionIndex?: number;
}

const Question: React.FC<QuestionProps> = ({ question, onSelect, selectedOptionIndex }) => {
    return (
        <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{question.question}</h3>
            <div className="space-y-3">
                {question.options.map((option: OptionType, index: number) => (
                    <div
                        key={index}
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedOptionIndex === index
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'
                            }`}
                        onClick={() => onSelect(index)}
                    >
                        <p>{option.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Question;

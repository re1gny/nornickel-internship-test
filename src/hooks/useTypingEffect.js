import { useState } from "react";
import { createTypingEffect, defaultInputSpeed } from "../utils/createTypingEffect";

export const useTypingEffect = ({ onStep, onComplete }) => {
  const [typedText, setTypedText] = useState('');

  const handleStep = (text) => {
    setTypedText(text);
    onStep && onStep(text);
  };

  const startTyping = (text) => {
    setTypedText('');
    createTypingEffect(text, defaultInputSpeed, handleStep, onComplete)
  };

  return [typedText, startTyping];
};
import {useEffect, useState} from "react";
import { createTypingEffect, defaultInputSpeed } from "../utils/createTypingEffect";

export const useTypingEffect = ({ onStep, onComplete }) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    setTypedText('');
  }, [onStep, onComplete]);

  const handleStep = (text) => {
    setTypedText(text);
    onStep && onStep(text);
  };

  const startTyping = (text) => createTypingEffect(text, defaultInputSpeed, handleStep, onComplete);

  return [typedText, startTyping];
};
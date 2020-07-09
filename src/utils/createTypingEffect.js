export const createTypingEffect = (() => {
  let timeoutId = null;
  const type = (text, inputSpeed = getInputSpeed(text), onStep, onComplete, index = 0) => {
    if (index < text?.length) {
      timeoutId && (timeoutId = clearTimeout(timeoutId));
      timeoutId = setTimeout(() => {
        onStep(text.substring(0, index + 1));
        type(text, inputSpeed, onStep, onComplete, index + 1);
      }, inputSpeed);
    }
    else {
      timeoutId && (timeoutId = clearTimeout(timeoutId));
      text?.length && onComplete && onComplete();
    }
  };
  return type;
})();

export const defaultInputSpeed = 40;
export const inputAnimationDuration = 2000;
export const minDataLengthForDefaultSpeed = 30;

export const getInputSpeed = (text) => {
  return (text?.length >= minDataLengthForDefaultSpeed ?
    Math.round(inputAnimationDuration / text?.length)
    : defaultInputSpeed);
};
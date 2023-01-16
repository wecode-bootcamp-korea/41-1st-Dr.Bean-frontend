import { useState } from "react";

function useInput(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  return [inputValue, handleChange];
}

export default useInput;

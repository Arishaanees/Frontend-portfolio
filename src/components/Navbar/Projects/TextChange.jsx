

import React, { useState, useEffect } from "react";



const TextChange = () => {
  const texts = ["Hi, I am Arisha.", "Welcome to my profile!", "Enjoy your stay!"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setBlink((b) => !b), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  useEffect(() => {
    if (index >= texts.length) return;
    if (subIndex === texts[index].length + 1 && !reverse) {
      setReverse(true);
      setTimeout(() => setSubIndex((s) => s - 1), 1000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((i) => (i + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((s) => s + (reverse ? -1 : 1));
    }, 100);

    setCurrentText(texts[index].substring(0, subIndex));
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span>
      {currentText}
      <span className="inline-block ml-1">{blink ? "|" : " "}</span>
    </span>
  );
};

export default TextChange;

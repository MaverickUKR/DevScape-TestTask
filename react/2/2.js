import { useState } from "react";

const CensoredText = ({ children, badWords }) => {
  const [visibleWords, setVisibleWords] = useState({});

  const toggleVisibility = (word) => {
    setVisibleWords((prev) => ({
      ...prev,
      [word]: !prev[word],
    }));
  };

  const processedText = children.split(" ").map((word, index) => {
    const cleanWord = word.replace(/[^\w]/g, "");
    if (badWords.includes(cleanWord.toLowerCase())) {
      const isVisible = visibleWords[cleanWord];
      const censoredWord = "*".repeat(cleanWord.length);
      return (
        <span
          key={index}
          onClick={() => toggleVisibility(cleanWord)}
          style={{ cursor: "pointer" }}
        >
          {isVisible ? cleanWord : censoredWord}
          {word.substring(cleanWord.length)}
        </span>
      );
    }
    return <span key={index}>{word} </span>;
  });

  return <div>{processedText}</div>;
};

function SomeComponent() {
  const badWords = ["test", "somebadword"];
  const someText =
    "Very long text who contains someBadWord and testWord, also test.";

  return <CensoredText badWords={badWords}>{someText}</CensoredText>;
}

export default SomeComponent;

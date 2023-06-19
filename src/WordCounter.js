import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');
  const wordCount = text.trim().split(/\s+/).length;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type your text here"
      />
      <p>Word count: {wordCount}</p>
    </div>
  );
};

export default WordCounter;

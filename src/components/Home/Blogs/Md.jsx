const introContent = `
# Introduction to React Hooks

React Hooks provide a way to use state and other React features in functional components. They allow you to reuse stateful logic without changing your component hierarchy.

## useState Hook

The \`useState\` Hook is a built-in React Hook that allows you to add state to functional components. Here's how you can use it:

\`\`\`jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
\`\`\`
`;

const goodContent = `
# Good Markdown Practices

Markdown is a lightweight markup language with plain-text formatting syntax. Here are some good practices to follow when writing Markdown:

- Use headings to structure your document.
- Utilize lists (both ordered and unordered) for organized content.
- Employ code blocks for displaying code snippets.
- Add links and images to provide additional context.

This sentence uses  delimiters to show math inline:  $\sqrt{3x-1}+(1+x)^2$

`;

export { introContent, goodContent };
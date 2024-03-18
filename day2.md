# Day 2 MERN

### Learn the fundamentals of React, including components,state, and props
React is a JS library build by facebook.
component is more like a function. ( React is all about components)

**components** are used to display contents on website.

**State** is used to preserve or keep track of data in the component. state is mutable.

**props** is short for properties. that is used to pass data to its child components and its immutable.

Class components and legacy component life cycle- [link](https://legacy.reactjs.org/docs/react-component.html)

### Build reusable React components
### Use React's virtual DOM for efficient rendering

 The virtual DOM is a lightweight representation of the actual DOM (Document Object Model) in memory. React uses it to perform efficient updates to the real DOM.

1. **Initial Rendering:**
   - When you create a React element, React creates a corresponding virtual DOM representation for it.
   - React then compares this virtual DOM with the actual DOM, identifying the differences.

2. **Updating the DOM:**
   - When state or props of a component change, React re-renders the component and generates a new virtual DOM representation.
   - React then compares this new virtual DOM with the previous one to determine the changes that need to be applied to the actual DOM.

3. **Diffing Algorithm:**
   - React's diffing algorithm efficiently identifies the minimum number of DOM operations required to update the actual DOM based on changes in the virtual DOM.
   - It compares the new virtual DOM with the previous one, looking for added, removed, or changed elements.
   - Instead of updating the entire DOM, React only updates the parts of the DOM that have changed, minimizing the performance impact.

4. **Batched Updates:**
   - React batches multiple state updates and performs them in a single pass to avoid unnecessary re-renders and DOM updates.
   - This batching mechanism ensures that updates are processed efficiently and avoids unnecessary reflows and repaints.

5. **Rendering Optimization:**
   - React provides additional mechanisms for optimizing rendering performance, such as `shouldComponentUpdate` lifecycle method, `React.memo`, and `useMemo` hook.
   - These optimizations allow you to prevent unnecessary re-renders of components and improve overall application performance.

By using React's virtual DOM, you benefit from:
- Faster initial rendering due to minimal DOM manipulation.
- Efficient updates and re-renders by minimizing DOM operations.
- Improved performance through batched updates and rendering optimizations.




## Here i make a app where all concepts such as , states , props, fucntions passing, rendering etc. covered 

`App.js`
```sh
import React, { useState } from 'react';
import DisplayNum from './displaynum';
import BtnComponent from './btncomponent';
import './App.css';

function App() {
  const [num, setNum] = useState(0);

  const updateNum = (action) => {
    if (action === 'plus') {
      setNum(num + 1);
    } else if (action === 'minus' && num > 0) {
      setNum(num - 1);
    }
  };

  return (
    <div className="App">
      <DisplayNum num={num} />
      <BtnComponent sign='plus' onClick={updateNum} />
      <BtnComponent sign='minus' onClick={updateNum} />
    </div>
  );
}

export default App;

```

`btncomponent.js`
```sh
import React from 'react';

const BtnComponent = ({ sign, onClick }) => {
  return (
    <button onClick={() => onClick(sign)}>
      {sign === 'plus' ? '+' : '-'}
    </button>
  );
};

export default BtnComponent;

```

`displaynum.js`
```sh
import React from 'react'

const displaynum = ({num}) => {
  return (
    <div>
      <h1>{num}</h1>
    </div>
  )
}

export default displaynum

```

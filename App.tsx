import * as React from 'react';
import './style.css';

export default function App() {
  const [count, setcount] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      setcount((count) => count + 1);
    }, 1000);
  });
  return <h1>ihave render {count} times!</h1>;
}

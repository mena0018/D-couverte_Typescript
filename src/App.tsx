import './index.css';
import Card from './components/Card';
import { useState, useRef, useEffect } from 'react';


export default function App() {

  const btnRef = useRef <HTMLButtonElement> (null)
  const [data, setData] = useState([
    {
      title: 'React',
      content: 'React is a JavaScript library for building user interfaces.',
      id: 1
    },
    {
      title: 'Vue',
      content: "Vue is a progressive JavaScript framework for building user interfaces.",
      id: 2
    },
    {
      title: 'Angular',
      content: "Angular is a JavaScript framework for building single-page applications.",
      id: 3
    },
  ])

  
  useEffect(() => {
    console.log(btnRef);

    const handleResize = () => console.log("Resize");
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)

  }, [])
  

  return (
    <div className="App">

      {data.map(item =>  
          <Card key={item.id} title={item.title} content={item.content} />
      )}

      <button ref={btnRef}>Submit</button>
    </div>
  );
}

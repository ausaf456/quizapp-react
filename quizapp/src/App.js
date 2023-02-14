import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [question, setquestion] = useState([
    {
      question: "Html Stands For _______________________",
      options: ["Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language"
      ],
      correctAns: "Hypertext markup language",
    },
    {
      question: "Css Stands For _______________________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language"
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "Js Stands For _______________________",
      options: [
        "Java Style",
        "Java Script",
        "Script",
        "Script Src"
      ],
      correctAns: "Java Script",
    },
    {
      question: "Dom Stands For _______________________",
      options: [
        "Document Object Model",
        "html",
        "Css",
        "Java"
      ],
      correctAns: "Document Object Model",
    },
    {
      question: "Ram Stands For _______________________",
      options: [
        "Read Only Memory",
        "Dom",
        "Random Acccess Memory",
        "For Pc"
      ],
      correctAns: "Random Acccess Memory",
    },
    {
      question: "Rom Stands For _______________________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory"
      ],
      correctAns: "Read Only Memory",
    },
  ]);
  const [indexnumber, setindexnumber] = useState(0)
  const [marks, setmarks] = useState(0);
  const [result, setresult] = useState(false);

  const checkQues = (e) => {
    if (e == question[indexnumber].correctAns) {
      setmarks(marks + 1);
    }
    if (indexnumber + 1 == question.length) {
      setresult(true);
    }
    setindexnumber(indexnumber + 1);
  };



  return (
    <>
      {result ?
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div style={{padding:10,}}>
    
        <h1>Your marks is: {marks}</h1>
        </div>
        </div>
        : 

     <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div style={{padding:10,}}>
    
      <p>Question number: {indexnumber + 1} /{question.length}</p>
      <h1>{question[indexnumber].question}</h1>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",flexWrap:"wrap"}}>{question[indexnumber].options.map((e, i) => {

        return (<button style={{backgroundColor:"green",width:"40%",padding:10,border:"none",borderRadius:5,margin:10}} onClick={() => { checkQues(e) }}>{e}</button>)
      }

      )}
      </div >
    
      </div>
      </div>

    }
    </>
  )
}


export default App;

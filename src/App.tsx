import {
  CalendarLabel,
  NumberResult,
  TypeResult,
} from "./components/Label.styled";
import { Background } from "./components/Paper.styled";
import { CalendarTextField } from "./components/Textfield.styled";
import { Divider } from "@mui/material";
import { SubmitButton } from "./components/Button.styled";
import {createRef, useState} from 'react'
import { nanoid } from "nanoid";
function App() {
 const [input, setInput] = useState({years: "", months: "", days: ""})
 const [output, setOutput] = useState({years: "--", months: "--", days: "--"})
  interface CalendarProps {
    id : string,
    label: string;
    placeholder: string;
    
  }
  interface OutputProps {
    time: string,
    date: string
  }

 
const yearsRef = createRef()
const monthsRef = createRef()
const daysRef = createRef()


  const CalendarInput = (props: CalendarProps) => (
    <div>
      <CalendarLabel>{props.label}</CalendarLabel>
      <CalendarTextField 
        name={props.id}
        ref={}
        key={props.id}
        onBlur={(e) =>handleChange(e)}
        placeholder={props.placeholder}
        maxLength={props.placeholder === "YYYY" ? 4 : 2}
      />
    </div>
  );

  const ResultValue = (props: OutputProps) => (
    <div>
      {" "}
      <NumberResult>{props.time}</NumberResult> <TypeResult>{props.date}</TypeResult>
    </div>
  );


 function handleChange(e : React.ChangeEvent<HTMLInputElement> ){
  const {name,value} = e.target
  console.log(name, value)
  setInput(old => ({...old, [name]: value}))
 
 }
console.log("input values", input)
  return (
    <Background elevation={5} sx={{ paddingTop: "2em", paddingLeft: "1.4em" }}>
      <div
        style={{
          display: "flex",
          width: "70%",
          justifyContent: "space-between",
          marginLeft: "1em",
          marginBottom: "2.5em",
        }}
      > 
        <CalendarInput placeholder="DD" label="D A Y" id="days" />
        <CalendarInput placeholder="MM" label="M O N T H" id="months" />
        <CalendarInput placeholder="YYYY" label="Y E A R" id="years" />
        
      </div>

      <Divider sx={{ width: "80%" }} />
      <SubmitButton>
        <img src="./icon-arrow.svg" />
      </SubmitButton>
      <ResultValue time={output.years} date="years" />
      <ResultValue time={output.months} date="months"/>
      <ResultValue time={output.days} date="days"/>
    </Background>
  );
}

export default App;

// TODO
// 1) functionality of inputs, States
// 2) functionality of button to return correct values
// 3) 
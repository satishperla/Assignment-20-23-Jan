import Form1 from './components/Form1';
import BasicExample from './components/ProgressBar';
import Breakpoint from './components/BreakPoints';
import StackExample from './components/StackComponent';
import FormExample from './components/Forms';
import React from 'react';
import './App.css';
import ContainerExamples from './components/ContainerComponent';
import ContainerFluidExamples from './components/ContainerFluid';
import AccordianComponent from './components/AccodianComponent';
import ModalComponent from './components/ModalComponent';
import TooltipComponent from './components/TooltipComponent';
import CardComponent from './components/CardComponent';

function App() {

  const details=[
    {id:'345',name:"John",email:"john@gmail.com",phone:"+91 9912123123",city:"Hyderabad",profile:"https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"},
    {id:'178',name:"Satish",email:"satish@gmail.com",phone:"+91 9912433123",city:"Chennai",profile:"https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="},
    {id:'654',name:"Kumar",email:"kumar1@gmail.com",phone:"+91 991219873",city:"Bangalore",profile:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
  ];
  return (
    <div className="App">
      {/* <Form1></Form1> */}
    {/* <BasicExample></BasicExample>
    <Breakpoint></Breakpoint>
    <ContainerExamples></ContainerExamples> */}
    {/* <StackExample></StackExample>
    <ContainerFluidExamples></ContainerFluidExamples> */}
    {/* <FormExample></FormExample> */}
    {/* <TooltipComponent></TooltipComponent> */}
    {/* <CardComponent></CardComponent> */}
    <AccordianComponent myarr={details}></AccordianComponent>
    <ModalComponent myarr={details}></ModalComponent>

      
    </div>
  );
}

export default App;

import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';

function App() {
  const onDelete=()=>{
    console.log('I am onDelete')
  };
  let todos= [
    {
      slo: 1,
      title: 'You need to go to the market',
      desc: 'You need to buy fish.',
    },
    {
      slo: 2,
      title: 'You need to go to the ration shop',
      desc: 'You need to collect ration.',
    },
    {
      slo: 3,
      title: 'You need to go to the cyber cafe',
      desc: 'You need to print notes.',
    },
  ];
  return (
    <>
    <Header title='MyTodoList'/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;

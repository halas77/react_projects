import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import { items } from "./constants";



// function Card(props){
//   return <Note 
//   name = {props.name}
//   details = {props.details}
//   />
// }

function App() {
  return (
    <div className="App">
      <Header />
      {items.map(Note)}
      <Footer />
    </div>
  );
}

export default App;

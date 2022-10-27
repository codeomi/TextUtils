import './Appa.css';
// import About from './components/About';
import NavBar from './components/NavBar';
import TextArea from './components/TextForm';

let name = "Omkar"

function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutText="About Us" />

      <div className="container my-3" >
      <TextArea heading = "Enter the text to analyse"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;

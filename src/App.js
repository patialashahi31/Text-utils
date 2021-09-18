import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      
      <Navbar title="Text-Utils" about='About us'/>
      <TextForm></TextForm>
      {/* <About/> */}
    </>
  );
}

export default App;

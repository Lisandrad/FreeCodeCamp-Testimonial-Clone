import './App.css';
import Testimony from "./Components/Testimony";

function App() {
  return (
    <div className="App">
      <div className="principal-container">
        <h1> Here is what our alumni say about freeCodeCamp:</h1>
        <Testimony 
          name="Emma Bostian"
          country="Sweden"
          image="Emma"
          position="Software Engineer"
          company="Spotify"
          testimony="I've always struggled with learning JavaScript. 
          I've taken many courses but freeCodeCamp's course was the 
          one which stuck. Studying JavaScript as well as data structures 
          and algorithms on freeCodeCamp gave me the skills and confidence 
          I needed to land my dream job as a software engineer at Spotify."
        />
      </div>
    </div>
  );
}

export default App;

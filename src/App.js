import logo from "./logo.svg";
import "./App.css";
import "./NewApp.css";

function App() {
  const name = "habib";
  const myName = <h2>my name is {name}</h2>;

  const boy ='kwaku'
  const multiline = (
    <>
      <div>
        <h1>hello u</h1>
        <hr/>
        <p>lorem iposum jkknas;oaihibcbiubs;{boy}</p>
      </div>
    </>
  );

  const abigail = <p> i am a girl</p>;
  const multi = (
    <>
      <div>
        <h1>hello u\bkb</h1>
        <p>lorem iposum jkknas;oaihibcbiubs;</p>
      </div>
    </>
  );

  return (
    <div className="App">
      <h1 style={{ color: "yellow", backgroundColor: "blue", marginTop: 50 }}>
        {" "}
        hello world
      </h1>
      {abigail}

      <h5 style={{fontSize:50,color:'grey'}}> boy</h5>

      <p> i am a boy</p>
      <br />
      {myName}
      <div className="nyarko">
        <p>jdififsgig</p>
      </div>
      {multiline}
      <img src="hgh" />
      <a href="nbjkabjkkg" id="hel">
        {" "}
        click here
      </a>
      {multi}
    </div>
  );
}

export default App;

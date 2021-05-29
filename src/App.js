import './App.css';
import yellowDaisies from  './assets/img/yellow-daisie.jpg';

function bgChanger() {
  if (this.scrollY > this.innerHeight / 1.5) {
    document.body.classList.add("bg-active");
  } else {
    document.body.classList.remove("bg-active");
  }
}

window.addEventListener("scroll", bgChanger);

function App() {
  document.title="My Happy Color"
  
  return (
    <div className="App">
      <header>
        <div className="intro">
          <h1>Yellow is a Happy Color</h1>
          <p>It makes you feel happy and spontaneous.</p>
        </div>
      </header>

      <section>
        <div className="page2">
          <h1>Daisy Asteraceae</h1>
          <p>Yellow symbolizes happiness, joy and friendship. You can always give this flower to someone who is dear to you and a true friend. The yellow daisies are going to be a perfect eye-catcher in your home and it is going to bring you a lot of positive energy.</p>
        </div>
        <img src={yellowDaisies} alt="Yellow Daisies Laid on Yellow Surface"/>
      </section>
    </div>
  );
}


export default App;

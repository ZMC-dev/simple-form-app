import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Formulaire </h1>
        <form id="contact-form">      
    <input name="name" type="text" id="name" placeholder="Nom" />   
    <input name="email" type="text" id="email" placeholder="Email" />
    <input name="pw" type="text" id="password" placeholder="Password" />
    <input name="confirm-pw" type="text" id="confirm-password" placeholder="Confirm Your Password" />

    <input type="submit" value="Envoyer"/>
    </form>
      </div>
    </div>
  );
}

export default App;

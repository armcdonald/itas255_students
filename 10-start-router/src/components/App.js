import logo from '../assets/logo.svg';

function App() {
  return (
    <div className="app">
      <header className="container">
        <img
            className="logo"
            src={logo}
            alt="Silly logo"
            title="Silly Logo | Home"
        />
      </header>
      <footer className="container">
        Allan McDonald | <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" className='cclogo' src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>
      </footer>
    </div>
  );
}

export default App;

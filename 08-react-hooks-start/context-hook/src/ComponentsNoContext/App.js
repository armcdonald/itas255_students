import '../styles/App.css';
import Layout from './Layout';

function App() {
  const username = "Allan McDonald";

  return (
    <div className="App">
      <Layout username={username}>
        Main Content
      </Layout>
    </div>
  );
}

export default App;

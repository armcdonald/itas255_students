import { useEffect, useState } from 'react';

import Layout from './Layout';

import '../styles/App.css';

function App() {
  const [username, setUserName] = useState("Allan McDonald");

  useEffect(() => {
    setTimeout(() => {
      setUserName("Bond, James Bond");
    }, 3000);
  }, []);

  return (
      <div className="App">
        <Layout>
          Main Content
        </Layout>
      </div>
  );
}

export default App;

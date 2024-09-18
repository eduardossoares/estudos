import { UserProvider } from './contexts/user'

import { Students } from "./components/Students";
import { Footer } from './components/Footer';

function App() {
  return (
    <UserProvider>
      <div>
        <h1>Escola Dev</h1>
        <hr />
        <br />
        <br />

        <Students />

        <Footer />
      </div>
    </UserProvider>
  )
}

export default App

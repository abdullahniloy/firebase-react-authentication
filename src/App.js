import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './App.css';
import app from './Firebase/firebase.init';
const auth = getAuth(app);
function App() {
  const provider = new GoogleAuthProvider();
  const handleGoogleSign = () => {
    // console.log('google coming soon')
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user)

      })
      .catch(error => {
        console.log('error', error)
      })
  }
  return (

    <div className="App">
      <button onClick={handleGoogleSign}>Google Sing</button>
    </div>
  );
}

export default App;

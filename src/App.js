import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import './App.css';
import app from './Firebase/firebase.init';
const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();
  const handleGoogleSign = () => {
    // console.log('google coming soon')
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user)

      })
      .catch(error => {
        console.log('error', error)
      })
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .error(() => {
        setUser({})
      })
  }
  return (

    <div className="App">
      {/*conditional rendering: user sing in kora thakle Sing Out Button dekhabo. r SIng out kora thakle Singn In dekhabo.  condition ? true:false  */}
      {user.email ?
        <button onClick={handleSignOut}>Sign Out</button> :
        <>
          <button onClick={handleGoogleSign}>Google Sing</button>

          <button>gitHub SignIn</button>
        </>

      }

      {
        user.email &&
        <div>
          User Name:{user.displayName}
          <br />
          Email: {user.email}
          <br />
          Photo:
          <img src={user.photoURL} alt="" />
        </div>
      }
    </div >
  );
}

export default App;

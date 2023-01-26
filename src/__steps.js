/*
1. Visit:console.firebase.google.com
2.create a new firebase project
3.Visit (Go to docs)
4. Build -> Authentication -> Web -> Get Started

5. Register web app -> firebase project home ->  click web -> give name and register

6.Install Firebase for our project : npm install firebase
7. DANGEROUS: get firebase config and put it in firebase.init.js 

8.export app from firebase.init.js
9. create auth using getAuth from firebase by using app from firebase.init.js
10. create a google auth provider.do not forget to use 'new GoogleAuthProvider()';
11. go to firebase project >Build> Authentication > Sing In method.
12. Enable Google sing in method.

13. inside the event handler, call signInWithPOpUp  with auth, provider
14.after singInWithPopUp .then result , error
*/
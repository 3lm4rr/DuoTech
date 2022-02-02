function registrar(){
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

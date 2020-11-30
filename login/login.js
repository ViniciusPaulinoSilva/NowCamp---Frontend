function handleSubmit(){
    var email = document.getElementById("email")
    var  password = document.getElementById("password")
    console.log(email,password)
    var user = {}

    axios.post("http://localhost:3030/api/login", {
        email: email.value, 
        password: password.value 
        } )
        .then(response =>{
            user = response.data
            document.cookie = `user_cod=${user}; path=/`;
            window.location.href = "http://127.0.0.1:5500/frontend/index/"
        }).catch( error =>{
            console.error(error)
        })
}


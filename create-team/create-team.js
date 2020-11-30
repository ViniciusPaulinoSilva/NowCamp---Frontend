getCategories()

function handleSubmit() {
    let teamName = document.getElementById("name").value
    let category = document.getElementById("categories").value

    axios.post(`http://localhost:3030/api/equipe`,{teamName, category}).then(response =>
    {
        console.log("equipe criada")
    })
}



getCategories()

function handleSubmit() {
    let name = document.getElementById("name").value
    let description = document.getElementById("desc").value
    let award = document.getElementById("award").value
    let rules = document.getElementById("rules").value
    let date = document.getElementById("date").value
    let category = document.getElementById("categories").value

    console.log(name, description, award, rules, date, category)

    axios.post(`http://localhost:3030/api/torneio`,{name, description, award, rules, category, date}).then(response =>
    {
        console.log("Torneio criado")
    })
}

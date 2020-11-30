
//Função para puxar as categorias e povoar o campo 

var categories  = []

function getCategories(){
    axios.get("http://localhost:3030/api/categorias").then(response => {
    categories = response.data

    var select = document.getElementById("categories")
    categories.map(category => {
    console.log(category)
    var opt = document.createElement("option")

    opt.value = category.CODIGO
    opt.innerHTML = category.NOME

    select.appendChild(opt)
    } )

})

}
//Função para dar trigger no submit

function submitForm(){
    document.getElementById("form").submit()
}




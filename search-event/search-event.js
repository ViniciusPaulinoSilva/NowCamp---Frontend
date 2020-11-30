getCategories()

function subscribe(CODIGO){

    const parseCookie = str =>
    str
      .split(';')
      .map(v => v.split('='))
      .reduce((acc, v) => {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
        return acc;
      }, {});
        console.log(CODIGO, parseCookie(document.cookie).user_cod)
      axios.post("http://localhost:3030/api/inscrever", {tournament:CODIGO, player:parseCookie(document.cookie).user_cod}).then(response => {
        console.log("Inscrição realizada com sucesso")
    })
}

function searchEvents(){
    let eventos = []
    let category = document.getElementById("categories").value
    let award = document.getElementById("reward").value
    let modality = document.getElementById("participation").value
    axios.get(`http://localhost:3030/api/torneios?category=${category}&award=${award}&modality=${modality}`).then(response => {
        eventos = response.data
        console.log(eventos)
        const lista = document.getElementById("lista-eventos")
        lista.innerHTML = ""
        eventos.map(evento => {
        const item = document.createElement("li")
        //     <div class="results">
        //         <img src="../icons/torneio.jpg" alt="Promo">
        //      
        //         <div class="result-info">
        //              <h4>{{evento.NOME}}</h4>
        //              <p>{{evento.DESCRICAO}}</p>
        //              <p>{{evento.PREMIACAO}}</p>
        //              <p>{{evento.REGRAS}}</p>
        //               
        //         </div>
        //       
        //      
        //</div>
        
        const div = document.createElement("div")
        const div2 = document.createElement("div")
        const h4 = document.createElement("h4")
        const p = document.createElement("p")
        const p2 = document.createElement("p")
        const p3 = document.createElement("p")
        const button = document.createElement("button")


        div.classList.add("results")
        div2.classList.add("result-info")
        button.classList.add("button")
        button.innerHTML = "Participar"
        button.onclick = function(){subscribe(evento.CODIGO)}
        h4.innerHTML = evento.NOME
        p.innerHTML = evento.DESCRICAO
        p2.innerHTML = evento.PREMIACAO
        p3.innerHTML = evento.REGRAS
      

        div2.appendChild(h4)
        div2.appendChild(p)
        div2.appendChild(p2)
        div2.appendChild(p3)
        div2.appendChild(button)

        div.appendChild(div2)

        item.appendChild(div)

        lista.appendChild(item)
        

        })
    })
}





let chave = "ae284e07f6be9d5bbe190595f55793fe";


function clique(){
   
    let cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade);

   if(!cidade){
        alert("Inserir o nome da cidade")

    } else{
        buscarCidade(cidade);
    }
}

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



async function buscarCidade(cidade){
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+
        cidade+
        "&appid="+
        chave +
        "&lang=pt_br" +
        "&units=metric")
        .then(res => res.json ())
   
    colocaNaTela(dados);

   console.log(dados);
   console.log(dados.main.temp)
}

function colocaNaTela(dados){
    document.querySelector(".nome-cidade").innerHTML = dados.name;
    document.querySelector(".temp").innerHTML = (dados.main.temp) +"°C";
    document.querySelector(".descrição").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = dados.main.humidity +"%";
     document.querySelector(".img").src = "https://openweathermap.org/img/wn" + dados.weather[0].icon + ".png";

}






    








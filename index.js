
let flag = false;
const container = document.getElementById('carro')
const container1 = document.getElementById('carro1')

class carro{
  constructor(marca, modelo, ano, cor) {
    
    this.marca = marca,
    this.modelo = modelo,
    this.ano = ano,
    this.cor = cor

  }

} 
    


const Carros = []

Carros.push(new carro("Audi", "A1", 2017, "Preta"))

Carros.push(new carro("Chevrolet", "CRUZE", 2019, "Branco"))

Carros.push(new carro("Honda", "CIVIC", 2019, "Branco"))

Carros.push(new carro("Volkswagem", "Golf", 2020, "Vermelho"))

Carros.push(new carro("Fiat", "Fiat 500", 2022, "Azul"))


const Pergunta = prompt("Digite o que você quer Fazer, Comprar ou Vender Seu Veiculo ?")

if(Pergunta === "Comprar" ){


  const Veiculo = prompt("Qual Veiculo você Procura ?" );


  for(let i = 0; i <= Carros.length; i++){

    let elemento = document.createElement('div')

    if(Carros[i].marca === Veiculo){
      alert("Seu Carro Foi Encontrado!!") 

      flag = true;

      elemento.innerHTML = `
    <p id="texto"> Carro Encontrado sucesso!!</p>   
    <p id="carro"> <b>Marca:</b> ${Carros[i].marca}</p>
    <p id="carro"> <b>Modelo:</b> ${Carros[i].modelo}</p>
    <p id="carro"> <b>Ano:</b> ${Carros[i].ano}</p>
    <p id="carro"> <b>Cor:</b> ${Carros[i].cor}</p>`
     container.append(elemento);
      console.log(Carros[i].marca);
    } 
    
    if((i == (Carros.length-1))  &&  Carros[i].marca !== Veiculo && flag == false){
      alert("Seu Carro não Foi Encontrado!!") 
      
      console.log(i);
    }
 
  }
    
}

else if (Pergunta === "Vender"){

  let VeiculoVendaMarca = prompt("Digite  a Marca do Seu Veiculo !!")

  let VeiculoVendaModelo = prompt("Digite  o Modelo do Seu Veiculo !!")

  let VeiculoVendaAno = prompt("Digite  o Ano do Seu Veiculo !!")

  let VeiculoVendaCor = prompt("Digite  a Cor do Seu Veiculo !!")


  
  
  Carros.push(new carro(VeiculoVendaMarca, VeiculoVendaModelo, VeiculoVendaAno, VeiculoVendaCor))

  alert("Obrigado seu Carro Foi Adicionado ao Banco de Dados e Quando aparecer alguma proposta você sera Avisado !!")
  console.log(Carros);
   


  for(let i = 0; i <= Carros.length; i++){
    
    let elemento = document.createElement('div')

    if(Carros[i].marca === VeiculoVendaMarca){
      
      elemento.innerHTML = `
    <p id="texto"> Carro Adicionado com sucesso!!</p>  
    <p id="carro"> <b>Marca:</b> ${Carros[i].marca}</p>
    <p id="carro"> <b>Modelo:</b> ${Carros[i].modelo}</p>
    <p id="carro"> <b>Ano:</b> ${Carros[i].ano}</p>
    <p id="carro"> <b>Cor:</b> ${Carros[i].cor}</p>`
     container.append(elemento);
      console.log(Carros[i].marca);
    } 
    
    

    
  }
           

 
}
  

   








  
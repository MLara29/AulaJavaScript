



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

Carros.push(new carro("GM", "CRUZE", 2019, "Branco"))

Carros.push(new carro("Honda", "CIVIC", 2019, "Branco"))

Carros.push(new carro("Honda", "FIT", 2020, "Vermelho"))

Carros.push(new carro("Fiat", "Fiat 500", 2022, "Azul"))


const Veiculo = prompt("Qual Veiculo você Procura ?" );

for (const item of Carros )
{
    

    if(item.marca === Veiculo || item.modelo === Veiculo  )
    {
        alert("Seua Carro foi encontardo !!")
        console.log(item)
        
    }
    if(item.marca !== Veiculo || item.modelo !== Veiculo  )
    {
        alert("Seua Carro nâo foi encontardo !!")
    }
    
}




let friend = {
    nome: 'arthur',
    sexo: 'M',
    idade: 19,
    peso: 90,
    engordar(p){
        this.peso += p
    }
}
friend.engordar(5)
console.log(`${friend.nome} pesa ${friend.peso}kg`) 
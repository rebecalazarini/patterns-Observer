const observers = []; //Cria uma lista vazia e guarda todas as funções tipo um array
//que vai ser chamada quadno um user for criado


//Ele recebe a função fn como paramentro (essa função é o observador).
//Usa push para adicionar essa função dentro da lista observers.
function addObserver(fn) {
  observers.push(fn);
}



//Quando o usuario for criado essa função é chamada dar o aviso
//E chama cada um deles, passando o data, Se data for { name: "Lucas", email: "lucas@email.com" }, 
// todos os observadores vão receber esse objeto como argumento.
function notifyObservers(data) {
  observers.forEach(fn => fn(data));
}

//Exporta essas duas funções
module.exports = {
  addObserver,
  notifyObservers,
};

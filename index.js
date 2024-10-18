// Definição da classe genérica Herói
class Heroi {
    // Construtor para inicializar as propriedades
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar que exibe a mensagem apropriada com base no tipo de herói
    atacar() {
      let ataque;
      
      // Estrutura de decisão para escolher o ataque baseado no tipo
      switch (this.tipo.toLowerCase()) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "realizou um ataque desconhecido";
          break;
      }
  
      // Exibindo a mensagem do ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de criação de heróis e invocação do método atacar
  let heroi1 = new Heroi("Arus", 30, "guerreiro");
  let heroi2 = new Heroi("Gandalf", 150, "mago");
  let heroi3 = new Heroi("Lee", 40, "monge");
  let heroi4 = new Heroi("Ryu", 25, "ninja");
  
  // Heróis atacando
  heroi1.atacar(); // Saída: O guerreiro atacou usando espada
  heroi2.atacar(); // Saída: O mago atacou usando magia
  heroi3.atacar(); // Saída: O monge atacou usando artes marciais
  heroi4.atacar(); // Saída: O ninja atacou usando shuriken
  
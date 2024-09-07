class heroi {
  constructor(heroiTipo, heroiAtaque) {
    this.heroiTipo = heroiTipo;
    this.heroiAtaque = heroiAtaque;
  }

  ataque() {
    if (this.heroiTipo == "guerreiro") {
      console.log(`O ${this.heroiTipo} atacou usando ${this.heroiAtaque}`);
    } else if (this.heroiTipo == "mago") {
      console.log(`O ${this.heroiTipo} atacou usando ${this.heroiAtaque}`);
    } else if (this.heroiTipo == "monge") {
      console.log(`O ${this.heroiTipo} atacou usando ${this.heroiAtaque}`);
    } else if (this.heroiTipo == "ninja") {
      console.log(`O ${this.heroiTipo} atacou usando ${this.heroiAtaque}`);
    }
  }
}

let escolhaHeroi = new heroi("mago", "magia");
escolhaHeroi.ataque();

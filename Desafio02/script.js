function calcularRank(vitorias, derrotas) {
  let soma = vitorias - derrotas;
  if (soma < 10) {
    return "O Herói tem um saldo de "+ soma +"e está no nível de Ferro";
  } else if (soma >= 11 && soma <= 20) {
    return "O Herói tem um saldo de "+ soma +" e esta no nível Bronze ";
  } else if (soma >= 21 && soma <= 50) {
    return "O Herói tem um saldo de "+ soma +" e esta no nível Bronze ";
  } else if (soma >= 51 && soma <= 80) {
    return "O Herói tem um saldo de "+ soma +" e esta no nível Bronze ";
  } else if (soma >= 81 && soma <= 90) {
    return "O Herói tem um saldo de "+ soma +" e esta no nível Bronze ";
  } else if (soma >= 91 && soma <= 100) {
    return "O Herói tem um saldo de "+ soma +" e esta no nível Bronze ";
  } else if (soma >= 101) {
    return "O Herói tem um saldo de "+ soma +" e esta no nível Bronze ";
  } else {
    return "Não foi possível calcular";
  }
}

let rank = calcularRank(100, 20);
console.log(rank);

export class Jeton {
  constructor(sign, color) {
    this.sign = sign;
    this.color = color;
  }
}
export class Player {
  constructor(name, score, jeton, isActive) {
    this.name = name;
    this.score = score;
    this.jeton = jeton;
    this.isActive = isActive;
  }
}

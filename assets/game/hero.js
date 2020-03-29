class Hero {
  constructor(name, HP, shield, weapon) {
    this.name = name; // string
    this.HP = HP; // number
    this.hp = this.HP; // number
    // we declare HP & hp, this way we can keep track of the total HP while only affecting hp
    this.shield = shield; // number
    this.weapon = weapon; // number
    this.dead = false; // boolean
  }
  loseHp(amount /*number*/) {
    let remainingDamage = 0;
    if (this.shield > 0) {
      if (this.shield > amount) {
        this.shield -= amount;
      } else {
        remainingDamage = amount - this.shield;
        this.shield = 0;
        this.hp -= remainingDamage;
      }
    } else {
      this.hp -= amount;
    }
    if (this.hp <= 0) {
      this.hp = 0;
      this.dead = true;
    }
  }
  earnHp(amount /*number*/) {
    let lostHp = this.HP - this.hp;
    if (amount >= lostHp) {
      this.hp = this.HP;
    } else {
      this.hp += amount;
    }
  }
}

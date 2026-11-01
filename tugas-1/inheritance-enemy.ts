// ini tugas 

class Enemy {
  health: number;
  damage: number;
  speed: number;

  constructor(health: number, damage: number, speed: number) {
    this.health = health;
    this.damage = damage;
    this.speed = speed;
  }

  baseHealth(): number {
    return this.health;
  }
}

class Minions extends Enemy {
  gold: number;

  constructor(health: number, damage: number, speed: number) {
    super(health, damage, speed);
    this.gold = 10;
  }

  baseHealth(): number {
    return (this.health += 30);
  }
}

class MinionFighter extends Enemy {
  physicalAttack: number;

  constructor(health: number, damage: number, speed: number) {
    super(health, damage, speed);
    this.physicalAttack = 20;
  }
}

class MinionArcher extends Enemy {
  attackRange: number;

  constructor(health: number, damage: number, speed: number) {
    super(health, damage, speed);
    this.attackRange = 5;
  }
}

class MinionMage extends Enemy {
  magicalPower: number;

  constructor(health: number, damage: number, speed: number) {
    super(health, damage, speed);
    this.magicalPower = 30;
  }
}

class SuperMinion extends Enemy {
  armor: number;

  constructor(health: number, damage: number, speed: number) {
    super(health, damage, speed);
    this.armor = 50;
  }
}

class Lord extends Enemy {
  ultimateDamage: number;

  constructor(health: number, damage: number, speed: number) {
    super(health, damage, speed);
    this.ultimateDamage = 100;
  }
}

class Turtle extends Enemy {
  shield: number;

  constructor(health: number, damage: number, speed: number) {
    super(health, damage, speed);
    this.shield = 80;
  }
}

class RedDragon extends Enemy {
  fireDamage: number;

  constructor(health: number, damage: number, speed: number) {
    super(health, damage, speed);
    this.fireDamage = 70;
  }
}

class BlueWolf extends Enemy {
  criticalChance: number;

  constructor(health: number, damage: number, speed: number) {
    super(health, damage, speed);
    this.criticalChance = 25;
  }
}

const minion = new Minions(10, 5, 10);
const fighter = new MinionFighter(100, 20, 10);
const archer = new MinionArcher(80, 25, 15);
const mage = new MinionMage(70, 30, 10);
const superMinion = new SuperMinion(200, 40, 8);
const lord = new Lord(1000, 100, 5);
const turtle = new Turtle(800, 50, 4);
const redDragon = new RedDragon(500, 60, 12);
const blueWolf = new BlueWolf(150, 35, 20);

console.log("Minions:", minion.baseHealth());
console.log("Minion Fighter:", fighter);
console.log("Minion Archer:", archer);
console.log("Minion Mage:", mage);
console.log("Super Minion:", superMinion);
console.log("Lord:", lord);
console.log("Turtle:", turtle);
console.log("Red Dragon:", redDragon);
console.log("Blue Wolf:", blueWolf);
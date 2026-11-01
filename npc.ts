class NPC {
    name: string;
    health: number;
    speed: number;
    defense: number;
    attack: number;
    npcType: "walk" | "fly";

    constructor(name: string, health: number, speed: number, 
        defense: number, attack: number, npcType: "walk" | "fly") {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.defense = defense;
        this.attack = attack;
        this.npcType = "walk";
    }

    walking(): void {
        this.speed += 2;
        console.log(
            `${this.name} sedang berjalan, speed bertambah menjadi: ${this.speed}`
        );
    }

    attacking(): void {
        this.attack += 2;
        console.log(
            `${this.name} sedang menyerang, attack bertambah menjadi: ${this.attack}`
        );
    }

    sprint(): void {
        this.speed += 4;
        console.log(
            `${this.name} sedang berlari, speed bertambah menjadi: ${this.speed}`
        );
    }

    ultimateSkill(): void {
        this.attack += 10;
        console.log(
            `${this.name} menggunakan ultimate skill, attack bertambah menjadi: ${this.attack}`
        );
    }

    isflying(): void {
        
    }
}

// new NPC adlh object
const npc: NPC = new NPC(
    "Goblin",    //name
    100,        //health
    10,        //speed
    5,        //defense
    20,      //attack
    "walk"  //npcType
);

// memanggil method pada object yaitu walking (object method)
npc.walking();
npc.attacking();
npc.sprint();
npc.ultimateSkill();
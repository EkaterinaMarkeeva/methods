export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error ("Имя должно быть не менее 2 и не более 10 символов");
    }
    if (type !== 'Bowman' && type !== 'Daemon' && type !== 'Magician' && type !== 'Swordsman' && type !== 'Undead'&& type !== 'Zombie') {
      throw new Error ("Тип не найден");
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error ("Нельзя повысить левел умершего");
    }

    this.level += 1;
    this.attack = this.attack + this.attack * 0.2;
    this.defence = this.defence + this.defence * 0.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);

      if (this.health < 0) {
        this.health = 0;
      }
    }
  }
}

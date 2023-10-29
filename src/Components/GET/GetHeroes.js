export function getHeroes(hero) {
  return {
    id: hero.id,
    localized_name: hero.name,
    attack_type: hero.attack_type,
    roles: hero.roles,
    img: hero.img,
    base_attack: hero.base_attack,
  };
}

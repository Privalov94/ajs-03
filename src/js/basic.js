export default function informationAboutHeroes(input) {
  input.sort((x, y) => y.health - x.health);
}

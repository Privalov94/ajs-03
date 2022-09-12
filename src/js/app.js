export default function healthIndicator(character) {
  if (character.health > 50) {
    return 'healthy';
  } if (character.health >= 50 && character.health >= 15) {
    return 'wounded';
  } if (character.health < 15) {
    return 'critical';
  }
  return character;
}

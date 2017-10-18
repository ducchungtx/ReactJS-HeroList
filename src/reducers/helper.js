import charactors_json from '../data/characters.json';

export function createCharacter(id) {
    let character = charactors_json.find(c => c.id === id);
    return character;
}
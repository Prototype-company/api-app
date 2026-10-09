import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters }) => {
  return (
  <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
    {characters.map((character) => (
      <CharacterCard key={character.id} character={character} />
    ))}
  </div>
  )
};

export default CharacterList;

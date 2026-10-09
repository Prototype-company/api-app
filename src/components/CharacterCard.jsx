const CharacterCard = ({ character }) => {
  let colorCharacter;
  if (character.status === "Alive") {
    colorCharacter = "text-green-700";
  } else {
    colorCharacter = "text-red-700";
  }
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <img src={character.image} alt={character.name} className="w-full" />
      <div className="p-4">
        <h2 className="text-lg font-bold">Name:{character.name}</h2>
        <p className="text-gray-600">Location:{character.location.name}</p>
        <p className="text-gray-600">Gender:{character.gender}</p>
        <p className="text-gray-600">
          About:
          {character.species}
          <span className={colorCharacter}>{character.status}</span>
        </p>
        <p className="text-sm text-gray-500 mt-2">{character.origin.name}</p>
      </div>
    </div>
  );
};

export default CharacterCard;

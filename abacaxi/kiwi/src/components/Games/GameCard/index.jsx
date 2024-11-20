import "./gamecard.css"

const GameCard = ({ nome, images, nota }) => {
    return (
      <div className="game-card">
        <img src={images} alt={nome} className="game-image" />
        <h3>{nome}</h3>
        <p>Nota: {nota}</p>
      </div>
    );
};
  
export default GameCard;
  
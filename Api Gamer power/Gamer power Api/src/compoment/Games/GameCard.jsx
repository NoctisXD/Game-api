
const GameCard = ({ Game , onViewDetail }) => {
    return (
        <div className="Game-card" >
            <img src={Game.thumbnail} alt={Game.name} className="Game-image" />
            <div className="Game-info">
                <h3 className="Game-title"> {Game.title} </h3>
                <p className="Game-pice"> {Game.price} </p>
                <p className="Game-rating"> {Game.rating} </p>
                <button 
                    onClick={() => onViewDetail(Game.id)}
                    > ดูรายละเอียด </button>
            </div>
        </div>
    );
}
export default GameCard;
export { GameCard };
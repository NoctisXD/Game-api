
const GameCard = ({ Game , onViewDetail }) => {
    return (
        <div className="Game-card" >
            <img src={Game.thumbnail} alt={Game.title} className="Game-image" />
            <div className="Game-info">
                <h3 className="Game-title"> {Game.title} </h3>
                <p className="Game-pice"> {Game.worth} </p>
                <p className="Game-status"> {Game.status} </p>
                <p className="Game-description"> {Game.description} </p>
                <button 
                    onClick={() => onViewDetail(Game.id)}
                    > ดูรายละเอียด </button>
            </div>
        </div>
    );
}
export default GameCard;
export { GameCard };
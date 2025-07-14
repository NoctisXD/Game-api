
import { useGame } from "../../hooks/useGame";
import { GameCard } from "./GameCard";

const GeameList = ({ onViewDetail }) => {
    const { Games, loading, error } = useGame();

    if (loading) {
        return <div className="loading"> Loading... </div>;
    }

    if (error) {
        return <div className="error"> Error: {error}</div>;
    }

    return (
        <div className="games-list">
            <h2> เกมทั้งหมด </h2>
            <div className="game-grid"> 
                {Games.map( p => (
                    <GameCard 
                        key={p.id}
                        Game={p} 
                        onViewDetail={onViewDetail} 
                    />
                ))}
            </div>
        </div>
    );
}
export default GeameList;
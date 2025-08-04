
import { useNavigate } from 'react-router-dom';
import GameList from '../compoment/Games/GameList';

const HomePage = () => {
    const navigate = useNavigate();

    const handleViewDetail = (gameId) => {
        navigate(`/giveaways/${gameId}`);
    };

    return (
        <div className="home-page">
            <header> Gamer Power </header>
            <GameList onViewDetail={handleViewDetail} />
        </div>
    );
}
export default HomePage;
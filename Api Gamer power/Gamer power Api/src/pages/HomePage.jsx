
import { useNavigate } from 'react-router-dom';
import GameList from '../compoment/Games/GameList';

const HomePage = () => {
    const navigate = useNavigate();

    const handleViewDetail = (gameId) => {
        navigate(`/giveaways/${gameId}`);
    };

    return (
        <div className="home-page">
            <h1> ยินดีต้อนรับสู่ร้านค้าเกมออนไลน์ </h1>
            <GameList onViewDetail={handleViewDetail} />
        </div>
    );
}
export default HomePage;
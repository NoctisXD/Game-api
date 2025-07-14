
import { useNavigate } from 'react-router-dom';
import GeameList from '../compoment/Games/GameList';

const HomePage = () => {
    const navigate = useNavigate();

    const handleViewDetail = (gameId) => {
        navigate(`/games/${gameId}`);
    };

    return (
        <div className="home-page">
            <h1> ยินดีต้อนรับสู่ร้านค้าเกมออนไลน์ </h1>
            <ProductList onViewDetail={handleViewDetail} />
        </div>
    );
}
export default HomePage;
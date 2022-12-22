import "./Homepage.css";
import Bullion from '../../Components/Coins/Bullion';
import Exclusive from '../../Components/Coins/Exclusive';
import Commemorative from '../../Components/Coins/Commemorative';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../../Components/Container/Container';

function Homepage() {
    return (
        <div className="Homepage">
            <header>
                <div>
                    <h1>Homepage</h1>
                </div>
                <Header />
            </header>
            <main>
                <Bullion />
                <Exclusive />
                <Commemorative />
            </main>
        </div>
    )
}

export default Homepage;
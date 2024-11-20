const Home_GameCard = ({ nome , images, rating }) => {
    return(
        <div className="home-gamecard">
            <img src={images} alt={nome} className="game-images" />
            <h3>{nome}</h3>
            <p>Nota: {rating}</p>
        </div>
    );
};

export default Home_GameCard;
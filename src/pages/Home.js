import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import Game from "../components/Game";
import styled from "styled-components";
import { motion, LayoutGroup } from "framer-motion";
import { fadeIn } from "../animations";

const Home = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);
    const { upcoming, searched } = useSelector(state => state.games);

    return (

        <GameList variants={fadeIn} initial="hidden" animate="show">
            <LayoutGroup>
                {searched.length > 0 ? (
                    <div>
                        <h2>test</h2>
                        <Games>
                            {searched.map(game => (
                                <Game
                                    name={game.name}
                                    released={game.released}
                                    id={game.id}
                                    image={game.background_image}
                                    key={game.id}
                                />
                            ))}
                        </Games>
                    </div>) : ""}

                <h2>Projects</h2>
                <Games>
                    {upcoming.map(project => (
                        <Game
                            name={project.name}
                            description={project.description}
                            id={project.id}
                            image={project.image}
                            link={project.link}
                            key={project.id}
                        />
                    ))}
                </Games>
            </LayoutGroup>
        </GameList>


    );
};

const GameList = styled(motion.div)`
    padding: 0 5rem ;
    h2{
        padding: 5rem 0 ;
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap:3rem;
    grid-row-gap: 5rem;
`;

export default Home;
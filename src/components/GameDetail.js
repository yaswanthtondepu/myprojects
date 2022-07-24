import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import playstation from "../img/playstation.svg";
// import steam from "../img/steam.svg";
// import xbox from "../img/xbox.svg";
// import nintendo from "../img/nintendo.svg";
// import apple from "../img/apple.svg";
// import gamepad from "../img/gamepad.svg";
// import starEmpty from "../img/star-empty.png";
// import starFull from "../img/star-full.png";


const GameDetail = ({ pathId }) => {
    const navigate = useNavigate();
    //Exit Detail
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains("popup")) {
            document.body.style.overflow = "auto";
            navigate("/");
        }
    }
    //Get platform images
    const getPlatform = (platform) => {
        switch (platform) {
            case "PlayStation 5":
                return null;
            case "PlayStation 4":
                return null;
            case "Xbox One":
                return null;
            case "Nintendo Switch":
                return null;
            case "PC":
                return null;
            case "iOS":
                return null;
            default:
                return null;
        }
    };

    const getRatingStars = () => {
        // const stars = [];
        // const rating = Math.floor(game.rating);
        // for (let i = 1; i <= 5; i++) {
        //     if (i <= rating) {
        //         stars.push(<img src={starFull} key={i} alt="star" />);
        //     } else {
        //         stars.push(<img src={starEmpty} key={i} alt="star" />);
        //     }
        // }
        // return stars;
    }

    const { screenshots, game, isLoading } = useSelector(state => state.detail);
    return (
        <>
            {!isLoading && (
                <CardShadow className="popup" onClick={exitDetailHandler}>
                    <Detail layoutId={pathId}>
                        <Stats>
                            <div className="rating">
                                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                                <p title={game.rating}>{getRatingStars()}</p>
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms && game.platforms.map((data) => (
                                        <img key={data.platform.id} src={getPlatform(data.platform.name)} title={data.platform.name} alt={data.platform.name} />
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img layoutId={`image ${pathId}`} src={game.background_image} alt={game.background_image} />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screenshots.results && screenshots.results.map((data) => (
                                <img src={data.image} key={data.id} alt={data.background_image} />
                            ))}
                        </div>
                    </Detail>
                </CardShadow>
            )}
        </>
    );
};

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y:auto;
    background:rgba(0,0,0,0.5);
    position:fixed ;
    z-index:10;
    top:0 ;
    left:0 ;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
       background-color:#ff7676; ;
    }
    &::-webkit-scrollbar-track {
        background: white ;
    }

`;

const Detail = styled(motion.div)`
    width:80%;
    border-radius:1rem;
    padding: 2rem 5rem ;
    background:white ;
    position:absolute ;
    left: 10%;
    color: black ;
    img{
        width: 100% ;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items:center ;
    justify-content:space-between ;
    img{
        width:2rem ;
        height:2rem ;
        display:inline;
    }
`;

const Info = styled(motion.div)`
    text-align:center ;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left:3rem ;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem ;
    img{
        width: 100% ;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0 ;
`;
export default GameDetail;
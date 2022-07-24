import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

import { popup } from "../animations";

const Game = ({ name, description, image, id, link }) => {
    const stringPathId = id.toString();
    const dispatch = useDispatch();
    console.log(image);
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id));
    }

    return (
        <StyledGame layoutId={stringPathId} variants={popup} initial="hidden" animate="show">
            <a href={link} target="_blank">
                <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
                <p>{description}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={image} alt={name} />
            </a>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height:30vh ;
    cursor: pointer;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
    text-align:center ;
    border-radius: 1rem;
    overflow: hidden;
    img{
        width: 100%;
        height:40vh;
        object-fit:cover ;
    }
    h3{
        min-height:100px ;
    }
`;

export default Game;
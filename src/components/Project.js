import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animations";

const Project = ({ name, description, image, id, link }) => {
    const stringPathId = id.toString();
    const redirectTo = () => {
        // reirect to the project link
        window.open(link, "_blank");
    }

    return (
        <StyledProject layoutId={stringPathId} variants={popup} initial="hidden" animate="show">
            <a href={link} target="_blank" rel="noreferrer">
                <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
                <p>{description}</p>
                
            </a>
            <div onClick={redirectTo}>
                <motion.img layoutId={`image ${stringPathId}`} src={image} alt={name} loading="lazy" />
            </div>
            
        </StyledProject>
    )
}

const StyledProject = styled(motion.div)`
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
        left:0 !important;
        position:relative !important;
    }
    h3{
        min-height:100px ;
    }
`;

export default Project;
import React from "react";

export const Meme = ({ template, onClick }) => {
    return(
        <img className="memes" key={template.id} src={template.url} alt={template.name} onClick={onClick} />
    )
}
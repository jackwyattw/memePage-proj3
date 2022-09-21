import React, { useEffect, useState } from "react";
import { Meme } from "../components/Meme"



const objectToQueryParam = (obj) => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`)
    return '?' + params.join('&')
}

function MemesList(){
    const [templates, setTemplates] = useState([]);
    const [template, setTemplate] = useState(null);
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');
    const [meme, setMeme] = useState(null);

    useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes').then(x => x.json().then(response => setTemplates(response.data.memes))
        );
    }, []);

    if (meme) {
        return (
            <div>
                <img src={meme} alt="your meme"/>
            </div>
        )
    }


    return(
        <div>
            {template && (
                <form onSubmit={ async (e) => {
                    e.preventDefault()

                    const params = {
                        template_id: template.id,
                        text0: topText,
                        text1: bottomText,
                        username: 'JackWikum',
                        password: 'jackwwikum',
                    }

                    const response = await fetch(
                        `https://api.imgflip.com/caption_image${objectToQueryParam(params)
                    }`);
                    const json = await response.json();
                    setMeme(json.data.url)
                }}>
                    <Meme template={template} />
                    <input
                    placeholder="top text"
                    value={topText}
                    onChange={e => setTopText(e.target.value)}
                    />
                    <input
                    placeholder="bottom text"
                    value={bottomText}
                    onChange={e => setBottomText(e.target.value)}/>
                    <button type="submit">Create!</button>
                </form>
            )}

            {!template && (
                <>
                    <h1>Choose Your Meme Image</h1>
                    {templates.map((template, idx) => {
                        return(
                            <div key={idx}>
                            <Meme
                            template={template}
                            onClick={() => {
                                setTemplate(template)
                            }} />
                            </div>
                           
                        );
                    })}
                </>
            )}
        </div>
    );
}
export default MemesList;
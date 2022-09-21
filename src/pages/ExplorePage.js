import React, { useEffect, useState } from "react"

export default function Main() {

    const [memeList, setMemeList] = useState();

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes').then(x => 
        x.json().then(response => setMemeList(response.data)))
    }, [])

    return(
        <></>
    )
}
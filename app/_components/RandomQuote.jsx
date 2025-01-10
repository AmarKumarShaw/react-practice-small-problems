import React from "react"

const RandomQuote = () =>{

    let quotes = [
        "You are the hero",
        "You are the best",
        "You can do it",
        "You are the one"
    ]
    const randomIndex  = Math.floor(Math.random()*quotes.length)
    const quote = quotes[randomIndex]   
    return(
        <div className="text-center text-3xl shadow-xl p-6 rounded-full">
            <p className="text-xl">Random Quote Generator</p>
            <p className="text-3xl py-2 text-green-600">Quote:
                {quote}</p>
        </div>
    )
}

export default RandomQuote;
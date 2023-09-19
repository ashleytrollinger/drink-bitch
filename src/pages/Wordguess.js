import React, { useState, useEffect } from "react";
import { useNavigate, Link} from 'react-router-dom';
import Header from "../components/Header";
import './Wordguess.css';
import Drink from './Drink';

const sampleWords = [
    {
        word: "UNIVERSITY",
        description: "A place of higher education."
    },

    {
        word: "ADVENTURE",
        description: "An exciting or unusual experience."
    },

    {
        word: "AMBITIOUS",
        description: "Having a strong desire to succeed."
    },

    {
        word: "INFLUENCE",
        description: "The capacity to have an effect on someone's character or behavior."
    },

    {
        word: "CREATIVITY",
        description: "The ability to produce original and imaginative ideas."
    },

    {
        word: "INDEPENDENCE",
        description: "The state of being self-reliant and free from outside control."
    },

    {
        word: "MOTIVATION",
        description: "The reason or reasons one has for acting or behaving in a particular way."
    },

    {
        word: "COMMUNITY",
        description: "A group of people living in the same place or having a particular characteristic in common."
    },

    {
        word: "TECHNOLOGY",
        description: "The application of scientific knowledge for practical purposes."
    },

    {
        word: "LEADERSHIP",
        description: "The action of leading a group of people or an organization."
    },
    {
        word: "CHAMPAGNE",
        description: "Bubbly drink for celebrations."
    },
    {
        word: "MARGARITA",
        description: "Tangy tequila-based delight."
    },
    {
        word: "ESPRESSO",
        description: "Strong, hot, and caffeinated."
    },
    {
        word: "TEQUILA",
        description: "From the agave plant."
    },
    {
        word: "WHISKEY",
        description: "A distilled grain spirit."
    }, {
        word: "XYLOPHONE",
        description: "A musical instrument with wooden bars."
    },
    {
        word: "CRYPTIC",
        description: "Having a hidden or mysterious meaning."
    },
    {
        word: "SYNCHRONIZE",
        description: "To cause to occur at the same time."
    },
    {
        word: "BENEVOLENT",
        description: "Well-meaning and kindly."
    },
    {
        word: "HARMONY",
        description: "The quality of forming a pleasing and consistent whole."
    },
    {
        word: "VIVID",
        description: "Producing powerful feelings or strong, clear images in the mind."
    },
    {
        word: "FORTUNATE",
        description: "Favored by or involving good luck; lucky."
    },
    {
        word: "GENEROUS",
        description: "Willing to give and share unstintingly; liberal."
    },
    {
        word: "OPTIMISTIC",
        description: "Having a positive outlook on situations or outcomes."
    },
    {
        word: "RESILIENT",
        description: "Able to withstand or recover quickly from difficult conditions."
    },
    {
        word: "SERENE",
        description: "Calm, peaceful, and untroubled; tranquil."
    },
    {
        word: "SYMPATHY",
        description: "Feelings of pity and sorrow for someone else's misfortune."
    },
    {
        word: "VIBRANT",
        description: "Full of energy and enthusiasm; lively."
    },
    {
        word: "TOKYO",
        description: "The capital city of Japan, a vibrant metropolis with a rich cultural heritage."
    },
    {
        word: "VENICE",
        description: "A beautiful city in Italy known for its canals and historic architecture."
    },
    {
        word: "BERLIN",
        description: "The capital city of Germany, known for its history and vibrant culture."
    },
    {
        word: "TALLAHASSEE",
        description: "The capital city of the U.S. state of Florida."
    },
    {
        word: "LISBON",
        description: "The capital city of Portugal, located on the Atlantic Ocean."
    },
    {
        word: "DENVER",
        description: "The capital city of the U.S. state of Colorado, known for its outdoor activities."
    },
    {
        word: "BEIJING",
        description: "The capital city of China, a major cultural and political center."
    },
    {
        word: "ALBANY",
        description: "The capital city of the U.S. state of New York, located on the Hudson River."
    },
    {
        word: "CAIRO",
        description: "The capital city of Egypt, known for its ancient history and landmarks."
    },
    {
        word: "AUSTIN",
        description: "The capital city of the U.S. state of Texas, famous for its live music scene."
    },
    {
        word: "VIENNA",
        description: "The capital city of Austria, known for its classical music heritage."
    },
    {
        word: "MOSCOW",
        description: "The capital city of Russia, a major global city with historical significance."
    },
    {
        word: "AURORA",
        description: "A princess with a penchant for long naps and a love for all things pink."
    },
    {
        word: "ARIEL",
        description: "A red-haired royal who prefers underwater adventures and has a collection of human artifacts."
    },
    {
        word: "BELLE",
        description: "An avid reader who finds herself in a castle filled with enchanted objects."
    },
    {
        word: "JASMINE",
        description: "A free-spirited princess who longs for adventure beyond the palace walls."
    },
    {
        word: "MERIDA",
        description: "A skilled archer with wild, fiery hair and a rebellious spirit."
    },
    {
        word: "TIANA",
        description: "A hardworking waitress with dreams of owning her own restaurant."
    },
    {
        word: "RAPUNZEL",
        description: "A young woman with exceptionally long hair and an artistic talent for painting."
    },
    {
        word: "MOANA",
        description: "A daring navigator who sets out to save her island and discovers her destiny on the open sea."
    },
    {
        word: "POCAHONTAS",
        description: "A Native American princess who connects with nature and strives for peace."
    },
    {
        word: "MULAN",
        description: "A courageous warrior who disguises herself as a man to protect her family and country."
    }, {
        word: "Avatar",
        description: "A visually stunning science fiction film directed by James Cameron."
    },
    {
        word: "Inception",
        description: "A mind-bending heist thriller directed by Christopher Nolan."
    },
    {
        word: "Gladiator",
        description: "An epic historical drama directed by Ridley Scott."
    },
    {
        word: "Titanic",
        description: "A blockbuster romance and disaster film directed by James Cameron."
    },
    {
        word: "Interstellar",
        description: "A space exploration epic directed by Christopher Nolan."
    },
    {
        word: "Jaws",
        description: "A classic thriller directed by Steven Spielberg."
    },
    {
        word: "Matrix",
        description: "A groundbreaking science fiction series created by the Wachowskis."
    },
    {
        word: "Alien",
        description: "A science fiction horror franchise created by Ridley Scott."
    },
    {
        word: "Frozen",
        description: "A beloved animated musical film produced by Walt Disney Animation Studios."
    },
    {
        word: "Avatar",
        description: "A visually stunning science fiction film directed by James Cameron."
    }
];

const getRandomWord = () => {
    const randomPlace = Math.floor(Math.random() * sampleWords.length);
    return sampleWords[randomPlace];
};

function Wordguess() {
    const [wordData, setWordData] = useState(getRandomWord());
    const [msg, setMsg] = useState("");
    const [chosenLetters, setChosenLetters] = useState([]);
    const [hints, setHints] = useState(3);
    const [displayWord, setDisplayWord] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [wrongGuesses, setWrongGuesses] = useState(0);
    const navigate = useNavigate();
    const [showDrink, setShowDrink] = useState(false); 

    useEffect(() => {
        if (wrongGuesses >= 3) {

            setShowDrink(true);

            const timeoutId = setTimeout(() => {
                setShowDrink(false);
                restartGameFunction(); 
            }, 20000);

     
            return () => clearTimeout(timeoutId);
            restartGameFunction();
        }
    }, [wrongGuesses]);


    const letterSelectFunction = (letter) => {
        if (!chosenLetters.includes(letter)) {
            setChosenLetters([...chosenLetters, letter]);
            if (!wordData.word.includes(letter)) {
                setWrongGuesses(wrongGuesses + 1);
            }
        }
    };

    const hintFunction = () => {
        if (hints > 0) {
            const hiddenLetterIndex = wordData.word
                .split("")
                .findIndex((letter) => !chosenLetters.includes(letter));
            setChosenLetters([...chosenLetters, wordData.word[hiddenLetterIndex]]);
            setHints(hints - 1);
        }
    };

    const removeCharacterFunction = () => {
        setChosenLetters(chosenLetters.slice(0, -1));
    };

    const displayLettersFunction = () => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        return Array.from(letters).map((letter, index) => (
            <button
                key={index}
                onClick={() => letterSelectFunction(letter)}
                disabled={chosenLetters.includes(letter)}
                className={`letter-button ${chosenLetters.includes(letter) ? "selected" : ""
                    }`}
            >
                {letter}
            </button>
        ));
    };

    const checkWordGuessedFunction = () => {
        return wordData.word.split("").every((letter) => chosenLetters.includes(letter));
    };

    const guessFunction = () => {
        if (checkWordGuessedFunction()) {
            setMsg("Correct! Take a shot or give a shot... whatever you consider winning😉");
        } else {
            setMsg("Wrong. Finish your drink and start over. I programmed this and do not know how this end point could hit");
            setDisplayWord(true);
        }
    };

    const restartGameFunction = () => {
        setWordData(getRandomWord());
        setMsg("");
        setChosenLetters([]);
        setHints(3);
        setDisplayWord(false);
        setGameOver(false);
        setWrongGuesses(0);
    };

    return (
        <>
            <Header />
            <div className="container">
                <h1>WORD GUESS GAME</h1>
                <div className="game-container">
                    <div className="word-container">
                        {Array.from(wordData.word).map((letter, index) => (
                            <div
                                key={index}
                                className={`letter ${chosenLetters.includes(letter) ? "visible" : ""
                                    }`}
                            >
                                {chosenLetters.includes(letter) ? letter : ""}
                            </div>
                        ))}
                    </div>
                    <p className="word-description">{wordData.description}</p>
                    {msg && (
                        <div className="message">
                            <p>{msg}</p>
                            {displayWord && <p>Correct word was: {wordData.word}</p>}
                        </div>
                    )}
                    <div className="button-section">
                        <div className="guess-section">
                            <button onClick={restartGameFunction} className="restart-button">
                                New Word
                            </button>
                            <button
                                onClick={removeCharacterFunction}
                                disabled={!chosenLetters.length}
                                className="remove-button"
                            >
                                Remove Letter
                            </button>
                        </div>
                        <div className="letter-selection">{displayLettersFunction()}</div>
                        <div className="hints">
                            Hints Remaining: {hints}{" "}
                            <button
                                onClick={hintFunction}
                                disabled={hints === 0}
                                className="hint-button"
                            >
                                Get Hint
                            </button>
                        </div>
                        {!msg && (
                            <button
                                onClick={guessFunction}
                                disabled={!chosenLetters.length}
                                className="guess-button"
                            >
                                Guess
                            </button>
                        )}
                    </div>
                </div>
                <Link to='/' className='homebtn'>
                    <button>← Back to Home</button>
                </Link>
            </div>
            {showDrink && <Drink />}
        </>
    );
}

export default Wordguess;
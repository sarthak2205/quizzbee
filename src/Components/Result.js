import React from "react";

const Result = ({score, playAgain}) => (
    <div className="score-board">
        <div className="score">Thanks for taking Sarthak's Mahabharata Quiz. You scored {score} / 5 correct answers! </div>
        <div>
        <button className="playBtn" onClick={playAgain}>
            Play Again!
        </button>
        </div>
    </div>
);

export default Result;
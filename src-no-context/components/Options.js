function Options({ question, dispatch, answer }) {
    const hasAnswered = answer !== null;
    return (
        <div className="options">
            {question.options.map((option, index) => {
                return (
                    <button
                        className={`btn btn-option ${
                            index === answer ? "answer" : ""
                        } ${
                            hasAnswered
                                ? index === question.correctOption
                                    ? "correct"
                                    : "wrong"
                                : ""
                        }`}
                        key={option}
                        onClick={() =>
                            dispatch({
                                type: "newAnswer",
                                payload: index,
                            })
                        }
                        disabled={answer !== null}
                    >
                        {option}
                    </button>
                );
            })}
        </div>
    );
}

export default Options;

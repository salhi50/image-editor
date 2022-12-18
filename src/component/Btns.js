/**
 * Main Btn component
 * @param {String} text The btn text content
 * @param {Function} callback on click callback function
 */
function MainBtn({text, callback = null}) {
    return (
        <button className="main-btn btn" onClick={callback}>
            {text}
        </button>
    )
}

/** Secondary Btn */

function SecondaryBtn({text, callback = null}) {
    return (
        <button className="secondary-btn btn" onClick={callback}>
            {text}
        </button>
    )
}

export { 
    MainBtn,
    SecondaryBtn
}
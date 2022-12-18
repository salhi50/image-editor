function InputRange(props) {
    const {
        title = '',
        min = 0,
        max = 100,
        value = 0,
        inpRef = null,
        callback = null
    } = props;

    return (
        <div className="range-container" data-value={value}>
            <label htmlFor="range">{title}</label>
            <input type="range" onChange={callback} min={min} max={max} value={value} ref={inpRef} />
        </div>
    )
}

export default InputRange;
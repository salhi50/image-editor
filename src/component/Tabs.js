/**
 * Tabs component
 * @param {Object} props
 * @param {Array} titles each elemet contain tab title
 * @param {Number} active The active tab index
 * @param {Function} callback on click event function for each tab
 */

function Tabs(props) {

    const {
        titles = [],
        active = 0,
        callback = null
    } = props;

    const getTitles = (title, indx) => {

        var isActive = indx == active ? ' active' : '';

        return <li key={indx}>
            <button data-id={indx} onClick={callback} className={"tab btn" + isActive}>{title}</button>
        </li>
    }

    return (
        <ul className="tabs">
            { titles.map(getTitles) }
        </ul>
    )
}

export default Tabs;
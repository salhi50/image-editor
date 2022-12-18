import { imageEditor } from "../data/website";

function ToolInfo({indx}) {
    const {name, description} = imageEditor.tools[indx]

    return (
        <div className="tool-info">
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    )
}

export default ToolInfo;
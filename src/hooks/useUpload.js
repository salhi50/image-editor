import { useState, useRef } from "react";

function useUpload() {
    const [file, setFile] = useState(null);

    const inp = useRef(null);

    const change = ({current}) => {
        var file = current.files[0];
        var imgSrc = window.URL.createObjectURL(file);
        setFile(imgSrc);
    }

    const Input = () => {
        return (
            <input
            type="file"
            ref={inp}
            hidden 
            accept='image/*'
            id='file'
            onChange={() => change(inp)}
            />
        )
    }

    return [file, <Input />];
}

export {useUpload};
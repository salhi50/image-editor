import { Link } from "react-router-dom";
import {imageEditor} from '../data/website';

function Navbar({active}) {

    return (
        <header>
            <div className="container">
                <h3 className="logo">Image Editor</h3>
            </div>
        </header>
    )
}

export default Navbar;
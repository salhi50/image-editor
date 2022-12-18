import ReactDOM from "react-dom/client";

import Adjusment from './pages/Adjusment';

const root = ReactDOM.createRoot(document.querySelector('.wrapper'));

function App() {
    return (
        <Adjusment />
    )
}

root.render(<App />);
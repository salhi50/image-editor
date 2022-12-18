// Layout
import Navbar from '../layout/Navbar';
import ToolInfo from '../component/ToolInfo';

// Css
import '../assets/global.css';

// Hooks
import { useUpload } from '../hooks/useUpload';

// Component
import AdjusmentSection from '../component/AdjusmentSection';

function Adjusment() {
    const [file, Input] = useUpload();

    return (
        <>
            <Navbar active={0} />
            <div className='container'>
                <ToolInfo indx={0} />
                {Input}
                <label htmlFor='file' className="main-btn choose btn">
                    Choose an image
                </label>
            </div>
            {
                file ? <AdjusmentSection img={file} /> : null
            }
        </>
    )
}

export default Adjusment;
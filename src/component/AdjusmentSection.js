// React 
import { useState, useRef, useEffect } from 'react';

// Data
import { adjusmentTools } from '../data/adjusment';

// UI
import { SecondaryBtn } from '../component/Btns';
import InputRange from './InputRange';

// Component
import Tabs from './Tabs';

// functions
import { saveImageWithFilters } from '../utils/functions';


function AdjusmentSection({img}) {

    const [activeIndx, setActiveIndx] = useState(0); 

    const getAdjusmentToolsDefaultValuesObject = () => {
        return Object.fromEntries(adjusmentTools.map(tool => [tool.name, tool.range.default]));
    }

    useEffect(() => {
        // Reset values when we change img
        setValue(getAdjusmentToolsDefaultValuesObject());
    }, [img]);

    const [adjusmentValues, setValue] = useState(
        getAdjusmentToolsDefaultValuesObject()
    );

    const { name , range:{min, max} } = adjusmentTools[activeIndx];

    const inpRange = useRef(null);

    const changeToolValue = () => {
        var value = Number(inpRange.current.value);
        setValue(s => ( {...s, [name]: value} ));
    }

    const changeActiveIndx = (e) => {
        var btn = e.target;
        const btnIsNotActive = () => {
            return !btn.classList.contains('active');
        }
        if(btnIsNotActive()) {
            setActiveIndx(btn.getAttribute('data-id'));
        }
    }

    const getFilters = () => {
        var filters = [];
        for(var i of adjusmentTools) {
            filters.push(i.name + `(${adjusmentValues[i.name]}%)`);
        }
        return filters.join(' ');
    }

    return <div className="adjusment-container">
        <div className="container">
            <section>
                <div className="col settings">
                    <Tabs callback={changeActiveIndx} active={activeIndx} titles={adjusmentTools.map(tool => tool.name)} />
                    <InputRange callback={changeToolValue} min={min} max={max} value={adjusmentValues[name]} inpRef={inpRange} title={name} />
                </div>
                <div className="col preview">
                    <img src={img} alt="" style={{
                        filter: getFilters()
                    }} />
                </div>
            </section>
            <footer>
                <SecondaryBtn text="Save Image" callback={() => saveImageWithFilters(img, getFilters())} />
            </footer>
        </div>
    </div>
}

export default AdjusmentSection;
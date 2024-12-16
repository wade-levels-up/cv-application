import '/src/styles/Sidebar.css'
import Icon from '@mdi/react';
import { mdiPrinter, mdiReload } from '@mdi/js';


export default function Sidebar({ clearState }) {
    
    const handlePrint = () => {
        window.print();
    };


    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <button onClick={handlePrint}>
                        <Icon path={mdiPrinter} size={2} />
                    </button>
                </li>
                <li>
                    <button onClick={clearState} className='reload'>
                        <Icon path={mdiReload} size={2} />
                    </button>
                </li>
            </ul>
        </div>
    )
}
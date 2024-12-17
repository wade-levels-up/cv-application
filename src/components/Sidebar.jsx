import '/src/styles/Sidebar.css'
import Icon from '@mdi/react';
import { mdiPrinter, mdiReload, mdiDownload } from '@mdi/js';


export default function Sidebar({ clearState }) {
    
    const handlePrint = () => {
        window.print();
    };


    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <button onClick={handlePrint}>
                    <Icon path={mdiPrinter} size={1} /> 
                    <p>Print</p>
                    </button>
                </li>
                <li>
                    <button onClick={clearState} className='reload'>
                    <Icon path={mdiReload} size={1} />
                    <p>Clear</p>
                    </button>
                </li>
                <li>
                    <button onClick={clearState} className='reload'>
                    <Icon path={mdiDownload} size={1} />
                    <p>Download PDF</p>
                    </button>
                </li>
            </ul>
        </div>
    )
}
import '/src/styles/Sidebar.css'
import Icon from '@mdi/react';
import { mdiPrinter, mdiReload, mdiDownload } from '@mdi/js';
import html2pdf from 'html2pdf.js';


export default function Sidebar({ clearState }) {
    
    const handlePrint = () => {
        window.print();
    };

    const handleDownloadPDF = () => {
        const element = document.getElementById('resume-container');
        const opt = {
            margin: 1,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 3 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
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
                    <button onClick={handleDownloadPDF} className='reload'>
                    <Icon path={mdiDownload} size={1} />
                    <p>Download PDF</p>
                    </button>
                </li>
            </ul>
        </div>
    )
}
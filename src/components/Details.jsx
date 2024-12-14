import { useState } from 'react';
import '/src/styles/Details.css'
import WorkExpForm from './WorkExpForm';
import Icon from '@mdi/react';
import { mdiDelete, mdiPlus, mdiPencil  } from '@mdi/js';


export default function Details({ generalInfo, experienceInfo, educationInfo, skills, onChange, onRemoveJob, onAddJob, onUpdateJob }) {
    
    const [newFormVisibility, setNewFormVisibility] = useState('hidden');
    const [activeEditWorkExpID, setActiveEditWorkExpID] = useState(null);

    function formVisibilityHandler() {
        setActiveEditWorkExpID(null);
        if (newFormVisibility === 'hidden') {
            setNewFormVisibility('visible');
        } else {
            setNewFormVisibility('hidden');
        }
    }

    function handleActiveForm(id) {
        setNewFormVisibility('hidden');
        if (id !== activeEditWorkExpID) {
            setActiveEditWorkExpID(id);
        } else {
            setActiveEditWorkExpID(null);
        }
    }

    function hideForms() {
        setNewFormVisibility('hidden');
        setActiveEditWorkExpID(null)
    }

    return (
        <div className='details-container'>

            <div className='details-info'>
                <h2>Personal</h2>
                <form action='' method=''>
                    <div>
                        <label htmlFor='name'>Name </label>
                        <input type='text' name='name' id='name' value={generalInfo.name} onChange={onChange} />
                    </div>
                    <div>
                        <label htmlFor='email'>Email </label>
                        <input type='email' name='email' id='email' value={generalInfo.email} onChange={onChange} />
                    </div>
                    <div>
                        <label htmlFor='phone'>Phone </label>
                        <input type='tel' name='phone' id='phone' value={generalInfo.phone} onChange={onChange} />
                    </div>
                    <div>
                        <label htmlFor='location'>Location </label>
                        <input type='text' name='location' id='location' value={generalInfo.location} onChange={onChange} />
                    </div>
                </form>
            </div>

            <div className='experience-info'>
                <h2>Work Experience</h2>
                <ul>
                    {experienceInfo.map((job) => {
                        let formStatus = 'hidden';
                        if (job.id === activeEditWorkExpID) {
                            formStatus = 'visible';
                        }
                        return (
                            <li key={job.id}>
                                <div className='workExpItem'>
                                    <span>{job.company}</span>
                                    <button onClick={() => handleActiveForm(job.id)} aria-label={`Edit ${job.company} entry in work experience list`} >
                                        <Icon path={mdiPencil} size={1} />
                                    </button>
                                    <button onClick={() => onRemoveJob(job.id)} aria-label={`Delete ${job.company} from work experience list`} >
                                        <Icon path={mdiDelete} size={1} />
                                    </button>
                                </div>
                                <WorkExpForm onAddJob={onAddJob} hideForms={hideForms} onRemoveJob={onRemoveJob} formVisibility={formStatus} baseValues={job} onUpdateJob={onUpdateJob}/>
                            </li>
                        )
                    })}
                    <li onClick={formVisibilityHandler}>
                        <div className='workExpItem'>
                            <span>Add New Workplace</span>
                            <button aria-label={'Add new job to work experience list'} onClick={formVisibilityHandler}>
                                <Icon path={mdiPlus} size={1} />
                            </button>
                        </div>
                    </li>
                </ul>
                <WorkExpForm onAddJob={onAddJob} formVisibility={newFormVisibility} hideForms={hideForms}/>
            </div>

        </div>
    )
}
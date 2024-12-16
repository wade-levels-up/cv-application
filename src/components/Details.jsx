import { useState } from 'react';
import '/src/styles/Details.css'
import WorkExpForm from './WorkExpForm';
import EducationForm from './EducationForm';
import Icon from '@mdi/react';
import { mdiDelete, mdiPlus, mdiPencil  } from '@mdi/js';


export default function Details({ generalInfo, experienceInfo, educationInfo, skills, onChange, onRemove, onAdd, onUpdate }) {
    
    const [newFormVisibility, setNewFormVisibility] = useState('hidden');
    const [activeFormID, setActiveFormID] = useState(null);

    function formVisibilityHandler() {
        setActiveFormID(null);
        if (newFormVisibility === 'hidden') {
            setNewFormVisibility('visible');
        } else {
            setNewFormVisibility('hidden');
        }
    }

    function handleActiveForm(id) {
        // setNewFormVisibility('hidden');
        if (id !== activeFormID) {
            setActiveFormID(id);
        } else {
            setActiveFormID(null);
        }
    }

    function hideForms() {
        setNewFormVisibility('hidden');
        setActiveFormID(null)
    }

    return (
        <div className='details-container'>

            <div className='details-sub-container'>
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

            <div className='details-sub-container'>
                <h2>Work Experience</h2>
                <ul>
                    {experienceInfo.map((job) => {
                        let formStatus = 'hidden';
                        if (job.id === activeFormID) {
                            formStatus = 'visible';
                        }
                        return (
                            <li key={job.id}>
                                <div className='detailsTab'>
                                    <span>{job.company}</span>
                                    <button onClick={() => handleActiveForm(job.id)} aria-label={`Edit ${job.company} entry in work experience list`} >
                                        <Icon path={mdiPencil} size={1} />
                                    </button>
                                    <button onClick={() => onRemove(job.id, 'work experience')} aria-label={`Delete ${job.company} from work experience list`} >
                                        <Icon path={mdiDelete} size={1} />
                                    </button>
                                </div>
                                <WorkExpForm onAdd={onAdd} hideForms={hideForms} formVisibility={formStatus} baseValues={job} onUpdate={onUpdate}/>
                            </li>
                        )
                    })}
                    <li onClick={() => handleActiveForm('new work experience')}>
                        <div className='detailsTab'>
                            <span>Add New Workplace</span>
                            <button aria-label={'Add new job to work experience list'} onClick={() => handleActiveForm('new work experience')}>
                                <Icon path={mdiPlus} size={1} />
                            </button>
                        </div>
                    </li>
                    <li> 
                        <WorkExpForm onAdd={onAdd} formVisibility={activeFormID === 'new work experience' ? 'visible' : 'hidden'} hideForms={hideForms}/>
                    </li>
                </ul>
            </div>

            <div className='details-sub-container'>
                <h2>Education</h2>
                <ul>
                    {educationInfo.map((item) => {
                        let formStatus = 'hidden';
                        if (item.id === activeFormID) {
                            formStatus = 'visible';
                        }
                        return (
                            <li key={item.id}>
                                <div className='detailsTab'>
                                    <span>{item.school}</span>
                                    <button onClick={() => handleActiveForm(item.id)} aria-label={`Edit ${item.company} entry in work experience list`} >
                                        <Icon path={mdiPencil} size={1} />
                                    </button>
                                    <button onClick={() => onRemove(item.id, 'education')} aria-label={`Delete ${item.company} from work experience list`} >
                                        <Icon path={mdiDelete} size={1} />
                                    </button>
                                </div>
                                <EducationForm onAdd={onAdd} hideForms={hideForms} formVisibility={formStatus} baseValues={item} onUpdate={onUpdate}/>
                            </li>
                        )
                    })}
                    <li>
                        <div className='detailsTab'>
                            <span>Add New Education</span>
                            <button aria-label={'Add new education to work education list'} onClick={() => handleActiveForm('new education')}>
                                <Icon path={mdiPlus} size={1} />
                            </button>
                        </div>
                    </li>
                    <li>
                        <EducationForm onAdd={onAdd} formVisibility={activeFormID === 'new education' ? 'visible' : 'hidden'} hideForms={hideForms}/>
                    </li>
                </ul>
            </div>

            <div className='details-sub-container'>
                <h2>Skills</h2>
                <form action='' method=''>
                    <div className='textarea-container'>
                        <label htmlFor='skills'>Skills </label>
                        <textarea value={generalInfo.skills} id='skills' name='skills' onInput={onChange}></textarea>
                    </div>
                </form>
            </div>

        </div>
    )
}
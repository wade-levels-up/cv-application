import { useState } from 'react';
import '/src/styles/Details.css'
import Icon from '@mdi/react';
import { mdiDelete, mdiPlus  } from '@mdi/js';


export default function Details({ generalInfo, experienceInfo, educationInfo, skills, onChange, onRemoveJob, onAddJob }) {

    const [newFormVisibility, setNewFormVisibility] = useState('hidden');

    function formVisibilityHandler() {
        newFormVisibility === 'hidden' ? setNewFormVisibility('visible') : setNewFormVisibility('hidden');
    }

    function handleSubmit (e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formObject = Object.fromEntries(formData.entries())
        onAddJob(formObject)
        e.target.reset();
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
                    {/* <div>
                        <button type="submit" value="Submit">Submit</button>
                        <button  type='reset'>Reset</button>
                    </div> */}
                </form>
            </div>

            <div className='experience-info'>
                <h2>Work Experience</h2>
                <ul>
                    {experienceInfo.map((job) => {
                        return (
                            <li key={job.id}>{job.company} | {job.title} 
                                <button onClick={() => onRemoveJob(job.id)} aria-label={`Delete ${job.company} from work experience list    `}>
                                    <Icon path={mdiDelete} size={1} />
                                </button>
                            </li>
                        )
                    })}
                    <li>Add New Work Experience
                        <button aria-label={'Add new job to work experience list'} onClick={formVisibilityHandler}>
                            <Icon path={mdiPlus} size={1} />
                        </button>
                    </li>
                </ul>
                <form action='' method='' className={newFormVisibility} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='company'>Company </label>
                        <input type='text' name='company' id='company' placeholder='Enter company name' required/>
                    </div>
                    <div>
                        <label htmlFor='startDate'>Start Date </label>
                        <input type='date' name='startDate' id='startDate' required/>
                    </div>
                    <div>
                        <label htmlFor='endDate'>End Date </label>
                        <input type='date' name='endDate' id='endDate' required/>
                    </div>
                    {/* <div>
                        <label htmlFor='currentJob'>Still Working Here </label>
                        <input type='checkbox' name='currentJob' id='currentJob' />
                    </div> */}
                    <div>
                        <label htmlFor='title'>Job Title </label>
                        <input type='text' name='title' id='title' placeholder='Enter title of position held' required/>
                    </div>
                    <div>
                        <label htmlFor='location'>Location </label>
                        <input type='text' name='location' id='location' placeholder='Enter location of job' required/>
                    </div>
                    <div className='textarea-container'>
                        <label htmlFor='response'>Responsibilities </label>
                        <textarea rows='4' cols='32' wrap='hard' name='response' id='response' placeholder={`Enter responsibilites carried out as part of your job separated by commas and spaces.`}></textarea>
                    </div>
                    <div className='textarea-container'>
                        <label htmlFor='achievements'>Achievements </label>
                        <textarea rows='4' cols='32' wrap='hard' name='achievements' id='achievements' placeholder={`Enter highlights, milestones or goals achieved in your job separated by commas and spaces.`}></textarea>
                    </div>
                    <div className='submit-container'>
                        <button type="submit" value="Submit">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
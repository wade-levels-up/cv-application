import '/src/styles/Details.css'
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';


export default function Details({ generalInfo, experienceInfo, educationInfo, skills, onChange, onRemoveJob }) {
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
                                <button onClick={() => onRemoveJob(job.id)}>
                                    <Icon path={mdiDelete} size={1} />
                                </button>
                            </li>
                        )
                    })}
                    <li>
                        + Add New
                    </li>
                </ul>
            </div>

        </div>
    )
}
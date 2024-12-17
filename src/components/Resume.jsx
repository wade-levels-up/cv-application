import '/src/styles/Resume.css'
import { format, parse } from "date-fns"
import Icon from '@mdi/react';
import { mdiPhone, mdiMapMarker, mdiEmail } from '@mdi/js';



export default function Resume({ generalInfo, experienceInfo, educationInfo }) {
    return (
     <div className='resume'>
        <div className='resume-container'>
        
            <div className='resume-header'>
                <h1>{generalInfo.name}</h1>
                <div>
                    <address className='flex-centre'><Icon path={mdiEmail} size={1} />{generalInfo.email}</address>
                    <span className='flex-centre'><Icon path={mdiPhone} size={1} />{generalInfo.phone}</span>
                    <address className='flex-centre'><Icon path={mdiMapMarker} size={1} />{generalInfo.location}</address>
                </div>
            </div>
            <hr />
            <div className='resume-experience'>
                <h2>Work Experience</h2>
                <hr />
                {experienceInfo.map((job) => {
                    const startDate = parse(job.startDate, 'yyyy-MM', new Date());
                    const endDate = parse(job.endDate, 'yyyy-MM', new Date());
                    return (
                        <div key={job.id} className='card'>
                            <div>
                                <h3>{job.company}</h3>
                                <span>{format(startDate, 'MMM yyyy')} - {format(endDate, 'MMM yyyy')}</span>
                            </div>
                            <div>
                                <span><em>{job.title}</em></span><address><em>{job.location}</em></address>
                            </div>
                            <ul>
                                {job.response.map((item) => {
                                    return (
                                        <li key={crypto.randomUUID()}>{item}</li>
                                    )
                                })}
                                {job.achievements.map((item) => {
                                    return (
                                        <li key={crypto.randomUUID()}>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
            <div className='resume-education'>
                <h2>Education</h2>
                <hr />
                {educationInfo.map((entry) => {
                    const startDate = parse(entry.startDate, 'yyyy-MM', new Date());
                    const endDate = parse(entry.endDate, 'yyyy-MM', new Date());
                    return (
                        <div className='card' key={entry.id}>
                            <div>
                                <h3>{entry.school}</h3>
                                <span>{format(startDate, 'MMM yyyy')} - {format(endDate, 'MMM yyyy')}</span>
                            </div>
                            <div>
                                <span><em>{entry.degree}</em></span><address><em>{entry.location}</em></address>
                            </div>
                            <ul>
                                {entry.details.map((item) => {
                                    return (
                                        <li key={crypto.randomUUID()}>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
            <div className='resume-skills'>
                <h2>Skills</h2>
                <hr />
                <p>{generalInfo.skills}</p>
            </div>
        </div>
     </div>
    )
}
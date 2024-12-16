import { useState } from 'react'
import '/src/styles/Resume.css'

export default function Resume({ generalInfo, experienceInfo, educationInfo, skills }) {
    return (
     <>
        <div className='resume-container'>
            <div className='overlay'></div>
            <div className='resume-header'>
                <h1>{generalInfo.name}</h1>
                <div>
                    <address>{generalInfo.email}</address>
                    <span>tel: {generalInfo.phone}</span>
                    <address>{generalInfo.location}</address>
                </div>
            </div>
            <hr />
            <div className='resume-experience'>
                <h2>Work Experience</h2>
                <hr />
                {experienceInfo.map((job) => {
                    return (
                        <div key={job.id} className='card'>
                            <div>
                                <h3>{job.company}</h3>
                                <span>{job.startDate} - {job.endDate}</span>
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
                    return (
                        <div className='card' key={entry.id}>
                            <div>
                                <h3>{entry.school}</h3>
                                <span>{entry.startDate} - {entry.endDate}</span>
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
     </>
    )
}
import { useState } from 'react'
import '/src/styles/Resume.css'

export default function Resume({ generalInfo, experienceInfo }) {
    return (
        <div className='resume-container'>
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
                        <div key={job.id} className='job-card'>
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
        </div>
    )
}
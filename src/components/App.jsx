import { useState } from 'react'
import '/src/styles/App.css'
import Sidebar from './Sidebar'
import Details from './Details'
import Resume from './Resume'
import Icon from '@mdi/react';
import { mdiGithub, mdiReact } from '@mdi/js';



export default function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: 'Elliot Alderson',
    email: 'not.elliot@fsociety.org',
    phone: '0123 123 123',
    location: 'New York City',
    skills: 'Cybersecurity analyst with a proven track record in network security, penetration testing, and system hacking. Possessing a deep understanding of complex systems and a keen eye for vulnerabilities. Adept at problem-solving and critical thinking, with a strong focus on ethical hacking practices.'
  })

  const [experienceInfo, setExperienceInfo] = useState([
    {
      id: crypto.randomUUID(),
      company: 'Allsafe Cybersecurity',
      startDate: '2015-06',
      endDate: '2016-12',
      title: 'Cybersecurity Analyst',
      location: 'New York',
      response: [
        'Conducted vulnerability assessments and penetration testing on various networks and systems',
        'Identified and exploited system weaknesses to improve security posture',
        'Collaborated with cross-functional teams to address security concerns'
      ],
      achievements: [
        'Infiltrated Evil-Corp'
      ]
    }
  ])

  const [educationInfo, setEducationInfo] = useState([
    {
      id: crypto.randomUUID(),
      school: 'University Of Mr.Robot',
      startDate: '2010-01',
      endDate: '2014-12',
      degree: 'Computer Science',
      location: 'New York',
      details: [
        'Successfully hacked and secured numerous complex systems',
        'Recognized for exceptional problem-solving and analytical skills',
        'Demonstrated a strong commitment to ethical hacking principles'
      ]
    }
  ])

  function clearState() {
    setGeneralInfo({
      name: '',
      email: '',
      phone: '',
      location: '',
      skills: ''
    });
    setExperienceInfo([]);
    setEducationInfo([]);
  }

  function handleSetGeneralInfo(e) {
    const target = e.target.name;
    const next = {...generalInfo, [target]: e.target.value }
    setGeneralInfo(next);
  }

  function handleRemoveInfo(id, type) {
    if (type === 'work experience') {
      setExperienceInfo(experienceInfo.filter((item) => item.id !== id));
    }
    if (type === 'education') {
      setEducationInfo(educationInfo.filter((item) => item.id !== id));
    }
  }

  function handleAddInfo(entry, type) {
    let id = crypto.randomUUID();
    if (type === 'work experience') {
      const newEntry = { 
        ...entry, id: id,
         response: entry.response.split(', '),
          achievements: entry.achievements.split(', ') 
        }
      setExperienceInfo([...experienceInfo, newEntry])
    }

    if (type === 'education') {
      const newEntry = { ...entry, id: id, details: entry.details.split(', ') }
      setEducationInfo([...educationInfo, newEntry])
    }
  }

  function handleUpdateInfo(entry , type) {
    if (type === 'work experience') {
      setExperienceInfo(experienceInfo.map((item) => {
        if (item.id === entry.id) {
          return { 
            ...entry,
             response: entry.response.split(', '),
              achievements: entry.achievements.split(', ') 
            };
        }
        return item;
      }))
    }

    if (type === 'education') {
      setEducationInfo(educationInfo.map((item) => {
        if (item.id === entry.id) {
          return { 
            ...entry,
             details: entry.details.split(', ')
            };
        }
        return item;
      }))
    }
  }

  return (
    <>
      <header>
        <h1>Resume Generator</h1>
      </header>
      <main className='main-layout'>
      <Details
          generalInfo={generalInfo}
          experienceInfo={experienceInfo}
          educationInfo={educationInfo}
          onChange={handleSetGeneralInfo}
          onRemove={handleRemoveInfo}
          onAdd={handleAddInfo}
          onUpdate={handleUpdateInfo}
        />
        <Resume generalInfo={generalInfo} experienceInfo={experienceInfo} educationInfo={educationInfo} />
        <Sidebar clearState={clearState}/>
      </main>
      <footer>
        <a href="https://github.com/wade-levels-up" target='blank'>
          <Icon path={mdiGithub} size={1.3} />
        </a>Built with React by Wade<span>
          <Icon path={mdiReact} size={1.3} />
        </span>
      </footer>
    </>
  )
}


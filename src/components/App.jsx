import { useState } from 'react'
import '/src/styles/App.css'
import Sidebar from './Sidebar'
import Details from './Details'
import Resume from './Resume'

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: 'Wade Foster',
    email: 'not.wades.email@gmail.com',
    phone: '0418 000 3214',
    location: 'Melbourne',
  })

  function handleSetGeneralInfo(e) {
    const target = e.target.name;
    const next = {...generalInfo, [target]: e.target.value}
    setGeneralInfo(next);
  }

  const [experienceInfo, setExperienceInfo] = useState([
    {
      id: crypto.randomUUID(),
      company: 'E-Corp',
      startDate: '2017-10',
      endDate: '2022-11',
      title: 'Chief Technical Officer',
      location: 'New York',
      response: [
        'Manage staff members and their responsibilities',
        'Wear expensive suits'
      ],
      achievements: [
        'Achievement #1',
        'Achievement #2'
      ]
    },
    {
      id: crypto.randomUUID(),
      company: 'MM Electrical Merchandising',
      startDate: '2017-10',
      endDate: '2019-11',
      title: 'Internal Sales',
      location: 'Melbourne',
      response: [
        'Serve customers',
        'Count stock'
      ],
      achievements: [
        'Achievement #1',
        'Achievement #2'
      ]
    }
  ])

  // Experience

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

  function handleUpdateInfo(job) {
    setExperienceInfo(experienceInfo.map((item) => {
      if (item.id === job.id) {
        return { 
          ...job,
           response: job.response.split(', '),
            achievements: job.achievements.split(', ') 
          };
      }
      return item;
    }))
  }

  const [educationInfo, setEducationInfo] = useState([
    {
      id: crypto.randomUUID(),
      school: 'University Name',
      startDate: 'Oct.2017',
      endDate: 'Mar.2021',
      degree: 'Computer Science',
      location: 'City, Street',
      details: [
        'List your honors like summa cum laude or Economics Honors Society',
        'Studied abroad in City, Country during spring/fall 20YY semester (University Name)',
        'Any other fun stuff like varsity sports, fraternity/sorority, or something that gives you a little color'
      ]
    }
  ])

  const [skills, setSkills] = useState([
    'Strategic planning', 'strategic partnerships', 'revenue modeling & forecasting', 
    'retail partnerships', 'sales, & distro', 'contract negotiations', 'account management', 
    'Amazon marketing', 'channel marketing', 'crowdfunding'
  ])

  return (
    <div className='main-layout'>
      <Sidebar />
      <Details 
        generalInfo={generalInfo} experienceInfo={experienceInfo} 
        educationInfo={educationInfo} skills={skills} 
        onChange={handleSetGeneralInfo}
        onRemove={handleRemoveInfo}
        onAdd={handleAddInfo}
        onUpdate={handleUpdateInfo}
      />
      <Resume generalInfo={generalInfo} experienceInfo={experienceInfo} educationInfo={educationInfo} skills={skills} />
    </div>
  )
}


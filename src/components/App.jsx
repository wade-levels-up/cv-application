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
    skills: 'General planning, staff management, handling money, managing stock levels'
  })

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

  const [educationInfo, setEducationInfo] = useState([
    {
      id: crypto.randomUUID(),
      school: 'University Name',
      startDate: '2020-10',
      endDate: '2021-03',
      degree: 'Computer Science',
      location: 'City, Street',
      details: [
        'List your honors like summa cum laude or Economics Honors Society',
        'Studied abroad in City, Country during spring/fall 20YY semester (University Name)',
        'Any other fun stuff like varsity sports, fraternity/sorority, or something that gives you a little color'
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
    <div className='main-layout'>
      <Sidebar clearState={clearState}/>
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
    </div>
  )
}


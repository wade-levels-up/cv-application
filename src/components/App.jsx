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

  const [experienceInfo, setExperienceInfo] = useState([
    {
      id: 0,
      company: 'E-Corp',
      startDate: 'Oct.2017',
      endDate: 'Nov.2023',
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
      id: 1,
      company: 'E-Corp',
      startDate: 'Oct.2017',
      endDate: 'Nov.2023',
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
    }
  ])

  return (
    <div className='main-layout'>
      <Sidebar />
      <Details />
      <Resume generalInfo={generalInfo} experienceInfo={experienceInfo}/>
    </div>
  )
}


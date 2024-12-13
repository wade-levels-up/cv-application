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

  const [educationInfo, setEducationInfo] = useState([
    {
      id: 0,
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
    },
    {
      id: 1,
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
    },
    {
      id: 2,
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
    },
  ])

  const [skills, setSkills] = useState([
    'Strategic planning', 'strategic partnerships', 'revenue modeling & forecasting', 
    'retail partnerships', 'sales, & distro', 'contract negotiations', 'account management', 
    'Amazon marketing', 'channel marketing', 'crowdfunding'
  ])

  return (
    <div className='main-layout'>
      <Sidebar />
      <Details />
      <Resume generalInfo={generalInfo} experienceInfo={experienceInfo} educationInfo={educationInfo} skills={skills}/>
    </div>
  )
}


import '/src/styles/App.css'
import Sidebar from './Sidebar'
import Details from './Details'
import Resume from './Resume'

export default function App() {

  return (
    <div className='main-layout'>
      <Sidebar />
      <Details />
      <Resume />
    </div>
  )
}


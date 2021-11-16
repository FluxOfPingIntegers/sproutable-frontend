import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function ZipSearch(){

    const [selectedZip, setSelectedZip] = useState("")
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      navigate(`/locations/zip-search/${selectedZip}`)
    }
  
    return <div className="Nav">
      <form onSubmit={handleSubmit}>
        <label>Please enter zipcode to search: 
          <input type="number" name="SelectedZip" value={selectedZip} onChange={(e) => setSelectedZip(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  }
  
  export default ZipSearch;
import './index.css';
import NewsletterForm from './components/NewlsetterForm'
import React from 'react'

function App() {

const [formData, setFormData] = React.useState({
  name: '',
  email: '',
  emailIntervals:'',
  genresInterestedIn: []
})

const handleChange = (e) => {
if(e.target.name === 'genresInterestedIn' && (e.target.checked)) {
  setFormData(prevObj => ({
    ...prevObj,
    [e.target.name]: [...prevObj.genresInterestedIn, (e.target.id)]
  }))} else if (e.target.name === 'genresInterestedIn' && (!e.target.checked)) {
  const index = formData.genresInterestedIn.indexOf(e.target.id)
  setFormData(prevObj => ({
    ...prevObj,
    [e.target.name]: prevObj.genresInterestedIn.splice(index, 1)
  }))
} else {
  setFormData(prevData => [{
      ...prevData,
      [e.target.name]: e.target.value
  }])}
  console.log(formData)
}

  return (
    <div className="app">
       <NewsletterForm
       formData={formData}
       handleChange={handleChange}
       />
    </div>
  );
}

export default App;

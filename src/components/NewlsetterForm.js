import React from 'react'
import JazzImg from ".././images/jazz-collection.jpg"
import Form from 'react-bootstrap/Form'

export default function NewsletterForm(props) {

    const [validated, setValidated] = React.useState(false);

const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

    return (
        <div className="container--background">
            <div class='container'>
            <div className="row">
                <h1 className="header">Kierans' Records <img className='image' src='https://as2.ftcdn.net/v2/jpg/02/18/99/19/1000_F_218991944_B9ryzMcHfSSNVSXzHs891phcQOqlPoQR.jpg' alt=''/></h1>
                <p className="benefits--newsletter"><strong>Newletter</strong><br/>Hear about the latest new releases or upcoming represses before they go live to make sure you are able to get the record before it sells out.</p>
                <p className="benefits--newsletter">Get notified when sales or offers begin or when an album you want comes back in to stock to keep your collection updated with all your favorite releases.</p>
                <p class="benefits--newsletter"></p>
            </div>
            <div className="form" >
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <h3>Join the newsletter</h3>
                    <img src={JazzImg} class='img-thumbnail' alt=""/>
                    <div class="form-floating">
                        <input 
                        name='name'
                        value={props.formData.name}
                        onChange={(e) => props.handleChange(e)}
                        type="name" id="name" class="form-control" placeholder="name"></input>
                        <label for="name">Name</label>
                    </div>
                    <div class="form-floating">
                        <input 
                         name='email'
                         value={props.formData.email}
                         onChange={(e) => props.handleChange(e)}
                        type="email" id="email" class="form-control" required placeholder="email"/>
                        <label for="email">Email</label>
                        <div class="invalid-feedback">Invalid email address</div>
                        <div class="valid-feedback">Correct email address</div>
                    </div>
                    <label for="genres" class="form-lable">How regularly would you like emails.</label>
                    <select 
                    id='email--selector'
                     name='emailIntervals'
                     value={props.formData.emailIntervals}
                     onChange={(e) => props.handleChange(e)}class="form-select">
                        <option value='Twice a week'>Twice a week</option>
                        <option value='Once a week'>Once a week</option>
                        <option value='Twice a month'>Twice a month</option>
                        <option value ='Once a month'>Once a month</option>
                    </select>
                    <label for="genres" class="form-label select">Which genres would you be interested in hearing news about.</label>
                    <div class="form-check-inline" className='select-container'>
                        <label  class="form-label">Rock</label>
                        <input 
                        type="checkbox"
                        id="Rock" 
                        name='genresInterestedIn'
                        value={props.formData.genresInterestedIn}
                        onChange={props.handleChange}/>
                        <label  class="form-label">Pop</label>
                        <input 
                        id="Pop" 
                        name='genresInterestedIn'
                        value={props.formData.genresInterestedIn}
                        onChange={props.handleChange}
                        type="checkbox"/>
                        <label  class="form-label">Hip Hop</label>
                        <input 
                        id="Hip Hop" 
                        name='genresInterestedIn'
                        value={props.formData.genresInterestedIn}
                        onChange={props.handleChange}
                        type="checkbox"/>
                        <label class="form-label">Metal</label>
                        <input
                        id="Metal" 
                        name='genresInterestedIn'
                        value={props.formData.genresInterestedIn}
                        onChange={props.handleChange}
                        type="checkbox"/>
                        <label  class="form-label">Jazz</label>
                        <input
                         id="Jazz" 
                         name='genresInterestedIn'
                         value={props.formData.genresInterestedIn}
                         onChange={props.handleChange}
                         type="checkbox"/>
                        <label  class="form-label">Electronic</label>
                        <input
                         id="Electronic" 
                         name='genresInterestedIn'
                         value={props.formData.genresInterestedIn}
                         onChange={props.handleChange}
                         type="checkbox"/>
                        <label class="form-label">R&B</label>
                        <input 
                         id="R&B" 
                         name='genresInterestedIn'
                         value={props.formData.genresInterestedIn}
                         onChange={props.handleChange}
                         type="checkbox"/>
                    </div>
                    <button id='button' type="submit" class="btn btn-primary">Submit</button>
                </Form>
                </div>
            </div>
        </div>
  ) }
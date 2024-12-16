import { useState } from "react";

const blankWExpObj = {
    id: 'new',
    school: '',
    startDate: '',
    endDate: '',
    degree: '',
    location: '',
    details: []
  }

export default function EducationForm({ onAddJob, hideForms, onRemoveJob, onUpdateJob, formVisibility, baseValues = blankWExpObj }) {
    const [formState, setFormState] = useState(baseValues);

    function handleInput(e) {
        const target = e.target.name;
        let detailArray = formState.details;
     
        if (target === 'details') {
            detailArray = e.target.value.split(', ');
        }
        const next = {...formState, [target]: e.target.value, details: detailArray }
        setFormState(next)
    }

    function handleSubmit (e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        let formObject = Object.fromEntries(formData.entries());
        // setFormState(baseValues);
        if (baseValues.id === 'new') {
            onAddJob(formObject);
        } else {
            onUpdateJob(formObject);
        }
        e.target.reset();
    }

    // Ensures the textArea elements below receive details as a single string not an array
    let detailArray = formState.details;
 
    if (Array.isArray(detailArray)) {
        detailArray = detailArray.join(', ')
    }

    return (
        <form action='' method='' className={formVisibility} onSubmit={handleSubmit}>
            <label htmlFor="id"></label>
            <input type="hidden" name='id' id="id" value={formState.id}></input>
            <div>
                <label htmlFor='school'>School </label>
                <input value={formState.school} onInput={handleInput} type='text' name='school' id='school' placeholder='Enter school name' required maxLength='50'/>
            </div>
            <div>
                <label htmlFor='startDate'>Start Date </label>
                <input value={formState.startDate} onInput={handleInput} type='month' name='startDate' id='startDate' required/>
            </div>
            <div>
                <label htmlFor='endDate'>End Date </label>
                <input value={formState.endDate} onInput={handleInput} type='month' name='endDate' id='endDate' required/>
            </div>
            <div>
                <label htmlFor='degree'>Degree </label>
                <input value={formState.degree} onInput={handleInput} type='text' name='degree' id='degree' placeholder='Enter name of degree or area of study' required maxLength='50'/>
            </div>
            <div>
                <label htmlFor='location'>Location </label>
                <input value={formState.location} onInput={handleInput} type='text' name='location' id='location' placeholder='Enter location of job' required/>
            </div>
            <div className='textarea-container'>
                <label htmlFor='details'>Details </label>
                <textarea value={detailArray} onInput={handleInput} rows='4' cols='32' wrap='hard' name='details' id='details' placeholder={`List honors, fun stuff to give you a bit of color or interesting details such as studying abroad.`}></textarea>
            </div>
            <div className='submit-container'>
                <button onClick={hideForms} type="submit" value="Submit">Submit</button>
            </div>
        </form>
    )
}
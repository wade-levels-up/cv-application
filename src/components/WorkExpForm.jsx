import { useState } from "react";

const blankWExpObj = {
    id: 'new',
    company: '',
    startDate: '',
    endDate: '',
    title: '',
    location: '',
    response: [],
    achievements: []
  }

export default function WorkExpForm({ onAdd, hideForms, onUpdate, formVisibility, baseValues = blankWExpObj }) {
    const [formState, setFormState] = useState(baseValues);

    function handleInput(e) {
        const target = e.target.name;
        let responseArray = formState.response;
        let achieveArray = formState.achievements;
        if (target === 'response') {
            responseArray = e.target.value.split(', ');
        }
        if (target === 'achievements') {
            achieveArray = e.target.value.split(', ');
        }
        const next = {...formState, [target]: e.target.value, response: responseArray, achievements: achieveArray }
        setFormState(next)
    }

    function handleSubmit (e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        let formObject = Object.fromEntries(formData.entries());
        // setFormState(baseValues);
        if (baseValues.id === 'new') {
            onAdd(formObject, 'work experience');
        } else {
            onUpdate(formObject);
        }
        e.target.reset();
    }

    // Ensures the textArea elements below receive achievements and responsibilities as a single string not an array
    let respArr = formState.response;
    let achieveArr = formState.achievements;
    if (Array.isArray(respArr)) {
        respArr = respArr.join(', ')
    }
    if (Array.isArray(achieveArr)) {
        achieveArr = achieveArr.join(', ')
    }

    return (
        <form action='' method='' className={formVisibility} onSubmit={handleSubmit}>
            <label htmlFor="id"></label>
            <input type="hidden" name='id' id="id" value={formState.id}></input>
            <div>
                <label htmlFor='company'>Company </label>
                <input value={formState.company} onInput={handleInput} type='text' name='company' id='company' placeholder='Enter company name' required maxLength='50'/>
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
                <label htmlFor='title'>Job Title </label>
                <input value={formState.title} onInput={handleInput} type='text' name='title' id='title' placeholder='Enter title of position held' required maxLength='50'/>
            </div>
            <div>
                <label htmlFor='location'>Location </label>
                <input value={formState.location} onInput={handleInput} type='text' name='location' id='location' placeholder='Enter location of job' required/>
            </div>
            <div className='textarea-container'>
                <label htmlFor='response'>Responsibilities </label>
                <textarea value={respArr} onInput={handleInput} rows='4' cols='32' wrap='hard' name='response' id='response' placeholder={`Enter responsibilites carried out as part of your job separated by commas and spaces.`}></textarea>
            </div>
            <div className='textarea-container'>
                <label htmlFor='achievements'>Achievements </label>
                <textarea value={achieveArr} onInput={handleInput} rows='4' cols='32' wrap='hard' name='achievements' id='achievements' placeholder={`Enter highlights, milestones or goals achieved in your job separated by commas and spaces.`}></textarea>
            </div>
            <div className='submit-container'>
                <button onClick={hideForms} type="submit" value="Submit">Submit</button>
            </div>
        </form>
    )
}
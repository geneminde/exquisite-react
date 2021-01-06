import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  
  const blankFields = {
    adj1: '',
    noun1: '', 
    adv: '', 
    verb: '', 
    adj2: '',
    noun2: '', 
  }

  const [player, setPlayer] = useState(1);
  const [playerSubmission, setPlayerSubmission] = useState(blankFields)

  const onInputChange = (event) => {
  
    const updatedField = {...playerSubmission}
    updatedField[event.target.name] = event.target.value
    setPlayerSubmission(updatedField)
    
  }
  const makeSentence = () => {
    const words = props.fields.map((element) => {
      if (element.key) {
        return playerSubmission[`${element.key}`]
      } else {
        return element
      }
    })
    return words.join(' ')
  }

  const onSubmitNewLine = (event) => {
    event.preventDefault();

    setPlayer(player + 1);

    props.sendSubmission(makeSentence());
    
    setPlayerSubmission(blankFields);
  }
  

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{player}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onSubmitNewLine} >

        <div className="PlayerSubmissionForm__poem-inputs">
      
          {
           props.fields.map((element, i) => {
             if (element.key) {
               return(<input key={ `${i}` } className={ playerSubmission[element.key] === '' ? 'empty' : 'full' } name={ element.key } placeholder={ element.placeholder } type="text" value={ playerSubmission[element.key] } onChange={ onInputChange } />)
             } else {
               return(element)
             }
           
           })
          }
      
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn"  />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;

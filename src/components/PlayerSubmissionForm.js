import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const blankSubmission = () => {
    const blankFields = props.fields.map((element) => {
      if(element.key) {
        const newObject = {}
        newObject[`${element.key}`] = ''
        return newObject
      } else {
        return element
      }
    })
    return blankFields
  }

  const [player, setPlayer] = useState(1);
  const [playerSubmission, setPlayerSubmission] = useState(blankSubmission())

  


  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{player}</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
           props.fields.map((element) => {
             if (element.placeholder) {
               return(<input placeholder={element.placeholder} type="text"/>)
             } else {
               return(element)
             }
           
           })
          }
      
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
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

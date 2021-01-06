import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const onClickCallback = (event) => {
    event.preventDefault();
    props.revealPoem();
  }

  const finishedPoem = 
    <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      {props.submissions.map((element, i) => {
        return(<p key={i}>{element}</p>)
      })}
    </section>

  
  const poemButton = 
    <div className="FinalPoem__reveal-btn-container">
      <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={onClickCallback} />
    </div>

  
  const display = props.isSubmitted ? finishedPoem : poemButton

  return (
    
    <div className="FinalPoem">

      {display}
  
    </div>
  );
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;

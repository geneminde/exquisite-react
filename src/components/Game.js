import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const [submittedLines, setSubmittedLines] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  const onSubmitLine = (submittedLine) => {
    const newLineList = [...submittedLines, submittedLine];
    setSubmittedLines(newLineList);
  }

  const getLastLine = () => {
    return( (submittedLines.length > 0) ? submittedLines[submittedLines.length - 1] : '');
  }

  const finishGame = () => {
    setSubmitted(!submitted);
  } 

  const showRecentSubmission = (!submitted && submittedLines.length > 0) ? <RecentSubmission submission={ getLastLine() } /> : ''
  const showSubmissionForm = (!submitted) ? <PlayerSubmissionForm fields={FIELDS} sendSubmission={onSubmitLine} index={0}/> : ''
  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      {showRecentSubmission}

      {showSubmissionForm}

      <FinalPoem isSubmitted={submitted} submissions={submittedLines} revealPoem={finishGame} />

    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;

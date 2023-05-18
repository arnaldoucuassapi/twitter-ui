
import './Status.css'
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import { FormEvent, KeyboardEvent, useState } from 'react';
import { PaperPlaneRight } from 'phosphor-react';

export function Status() {

  const [answers, setAnswers] = useState([
    'Parabéns pelo progresso.',
    'Obrigado',
    'Está muito nice'
  ])

  const [newAnswer, setNewAnswer] = useState('')

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    if(newAnswer.length > 0) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if ( event.key === 'Enter' && (event.ctrlKey || event.metaKey) ) {
      createNewAnswer(event);
    }
  }

  return (
    <main className="status">
      <Header title='Tweet' />

      <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto enim, nemo quam autem error, minima atque commodi facilis illo veritatis sed quod, quas nisi! Necessitatibus nesciunt accusantium deserunt cupiditate qui." />

      <Separator />

      <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src='https://github.com/arnaldoucuassapi.png' alt="Arnaldo Ucuassapi" />
          <textarea 
            id="tweet" 
            placeholder="What's happening?" 
            value={newAnswer} 
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => setNewAnswer(event.target.value)}
          ></textarea>
        </label>

        <button type='submit'>
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {
        answers.map(answer => 
          <Tweet key={answer} content={answer} />
        )
      }
    </main>
  )
}
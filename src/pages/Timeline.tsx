
import './Timeline.css'

import { FormEvent, useState, KeyboardEvent } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import { PaperPlaneRight } from 'phosphor-react'

export function Timeline() {

  const [tweets, setTweets] = useState([
    'Figma está evoluindo..',
    'JS and TS are nice!'
  ])

  const [newTweet, setNewTweet] = useState('')

  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    if(newTweet.length > 0) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if ( event.key === 'Enter' && (event.ctrlKey || event.metaKey) ) {
      createNewTweet(event);
    }
  }

  return (
    <main className="timeline">
      <Header title='Home' />

      <form onSubmit={createNewTweet} className='new-tweet-form'>
        <label htmlFor="tweet">
          <img src='https://github.com/arnaldoucuassapi.png' alt="Arnaldo Ucuassapi" />
          <textarea 
            id="tweet" 
            placeholder="What's happening?" 
            value={newTweet} 
            onKeyDown={handleHotKeySubmit}
            onChange={(e) => setNewTweet(e.target.value)}
          ></textarea>
        </label>

        <button type='submit'>
          <PaperPlaneRight />
          <span>Tweet</span>
        </button>
      </form>

      <Separator />

      {
        tweets.map(tweet => 
          <Tweet key={tweet} content={tweet} />
        )
      }
    </main>
  )
}
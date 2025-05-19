import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App({userName, name, isFollowing}) {
    return (
        <section className="App">
        <TwitterFollowCard userName="x" name="username001" isFollowing={false}></TwitterFollowCard> 
        </section>
    )
}
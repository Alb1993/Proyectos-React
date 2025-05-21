import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    const formatUserName = (userName) => '@${userName}'
    return (
        <section className="App">
            <TwitterFollowCard formatUserName={formatUserName} isFollowing={true} userName="pheralb" name="Pablo Hernandez" isFollowing={false}></TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="elonmusk" name="Elon Musk" isFollowing={false}></TwitterFollowCard> 
            <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="vxnder" name="Vanderhart" isFollowing={false}></TwitterFollowCard>  
        </section>
    )
}
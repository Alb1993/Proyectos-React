import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    const formatUserName = (userName) => '@${userName}'
    return (
        <section className="App">
            <TwitterFollowCard formatUserName={formatUserName} userName="pheralb">
                Pablo Hernandez
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUserName} userName="elonmusk">
                Elon Musk
            </TwitterFollowCard> 
            <TwitterFollowCard formatUserName={formatUserName} userName="vxnder">
                Vanderhart  
            </TwitterFollowCard>  
        </section>
    )
}
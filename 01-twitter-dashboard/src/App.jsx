import './App.css'
import { SubscribeBlock } from './SubscribeBlock.jsx'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import {NavBlock } from './NavBlock.jsx'

export function App() {
    const formatUserName = (userName) => '@${userName}'
    return (
        <div>
            <div>
                <NavBlock></NavBlock>
            </div>
            <div className='blockProps'>
                <div className='searchBlock'>
                    <div className='imgProps'>
                        <img src="assets/search.svg"/>
                    </div>
                    <input type="text" placeholder='Buscar' className="inputProps"/>
                </div>
                <SubscribeBlock></SubscribeBlock>
                <div className="followBlock">
                    <section className="App">
                        <h1 className="titleProps">A quién seguir</h1>
                        <TwitterFollowCard formatUserName={formatUserName} userName="kikobeats">
                            Microsoft
                        </TwitterFollowCard>
                        <TwitterFollowCard formatUserName={formatUserName} userName="elonmusk">
                            Elon Musk
                        </TwitterFollowCard> 
                        <TwitterFollowCard formatUserName={formatUserName} userName="vxnder">
                            Vanderhart  
                        </TwitterFollowCard>  
                    </section>
                </div>
            </div>
        </div>
    )
}
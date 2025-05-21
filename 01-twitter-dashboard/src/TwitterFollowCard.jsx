import './App.css'
/* Clase Twitter Card*/
export function TwitterFollowCard({formatUserName,userName, name, isFollowing}) {
    const imgsrc = 'https://unavatar.io/x/${userN}'
    const addAt = (userName) => '@${userName}'
    return (
        <article classname='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar'
                alt='avatar username001' 
                src={imgsrc}
                />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
                </div>
                <aside>
                    <button className='tw-followCard-button'>
                        Seguir
                    </button>
                </aside>
            </header>
        </article>
    )
}
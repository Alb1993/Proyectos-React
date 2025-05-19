import './App.css'
/* Clase Twitter Card*/
export function TwitterFollowCard({userName, name, isFollowing}) {
    const imgsrc = 'https://unavatar.io/${userName}'
    const follow = isFollowing
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
                    <span className="tw-followCard-infoUserName">{userName}</span>
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
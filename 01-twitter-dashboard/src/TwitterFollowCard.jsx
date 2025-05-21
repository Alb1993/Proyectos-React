import './App.css'
/* Clase Twitter Card*/
export function TwitterFollowCard({formatUserName,userName,children}) {
    const imgsrc = 'https://unavatar.io/x/${userN}'
    const [isFollowing, setIsFollowing] = useState(false)
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'


    /* Llamando a handleClick cambiamos el estado del useState */
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    /* Dependiendo de que estado se encuentre usaremos una clase o otra */
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    return (
        <article classname='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar'
                alt='avatar username001' 
                src={imgsrc}
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
                </div>
                <aside>
                    <button className={buttonClassName} onClick={handleClick}>
                        {text}
                    </button>
                </aside>
            </header>
        </article>
    )
}
import './Menu.scss'

function Menu(props) {

    return (

        <div className='menu-overlay'>
            <div class="menu-container">    
                <h1 className='menu-header'>{props.menuTitle}</h1>
                <h3 className='menu-details'>{props.menuInfo}</h3>

                {props.menuData.map((menuItem) => {
                    return (
                    <div>
                        <h3>
                            <span className='menuItem'>{menuItem.item}</span>
                            <span className='menuPrice'>{menuItem.price}</span>
                        </h3>
                        <p>{menuItem.description}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Menu
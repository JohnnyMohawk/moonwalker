import './Menu.css'

function Menu(props) {

    return (

        <div className='food-menu-overlay'>
            <h3 className='tag-line'>{props.tagLine}</h3>
            <div class="food-menu-container">    
                <h1 className='food-menu-header'>{props.menuTitle}</h1>
                <h3 className='food-menu-details'>{props.menuInfo}</h3>

                {props.menuData.map((menuItem) => {
                    return (
                    <div className='menu-content-wrap'>
                        <div className='item-price-wrap'>

                                <h3 className='menu-item'>{menuItem.item}</h3>
                                <h3 className='menu-price'>{menuItem.price}</h3>

                        </div>
                        <p className='menu-description'>{menuItem.description}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Menu
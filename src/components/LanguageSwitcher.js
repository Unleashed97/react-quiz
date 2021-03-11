import React from 'react'

import ru from '../images/icons/ru.png'
import uk from '../images/icons/en.png'

const LanguageSwitcher = () => {

    // const styles={
    //     sliderLeft:{
    //         display: 'block',
    //         position: 'absolute',
    //         zIndex: '-1',
    //         margin: '0',
    //         padding: '0',
    //         width: '25px',
    //         height: '20px',
    //         backgroundImage: `url(${uk})`
    //     },
    //     sliderRight:{
    //         display: 'block',
    //         position: 'absolute',
    //         zIndex: '-1',
    //         margin: '0',
    //         padding: '0',
    //         width: '25px',
    //         height: '20px',
    //         backgroundImage: `url(${ru})`
    //     }
    // }

    return (
        <label className="lang-switch" htmlFor='lang-switch__checkbox'>
            <p className="lang-switch__text">Change language</p>
            <input id="lang-switch__checkbox" className="lang-switch__checkbox" type="checkbox"/>
            <div className="lang-switch__slider">
                <span className="lang-switch__slider-left">
                    UK
                    {/* <img style={styles.sliderLeft} src={uk} alt="English language"/> */}
                </span>
                <span className="lang-switch__slider-right">
                    RU
                    {/* <img style={styles.sliderRight} src={ru} alt="Russian language"/> */}
                </span>
            </div>
        </label>
    )
}

export default LanguageSwitcher

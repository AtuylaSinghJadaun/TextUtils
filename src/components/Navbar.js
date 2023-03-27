import PropTypes from 'prop-types'
import './Navbar.css'
import ColorThemePicker from './ColorThemePicker.js'
import {Link} from 'react-router-dom'
import { useState } from 'react';


const Navbar = (props) => {
    const [focusList, setFocusList] = useState(['focus', 'nonfocus']);
    const routerHandle = (event) => {
    //     if (focusList[0] === 'focus') {
    //         setFocusList(['nonfocus', 'focus']);
    //     }
    //     else if(focusList[0] === 'nonfocus'){
    //         ['focus', 'nonfocus']
    //     }
    }
    return (
        <nav className={`navbar navbar-expand-lg`} style={{ background: `${props.mode === 'light' ? 'white' : props.colorTheme.secondary}`}}>
            <div className="container-fluid">
                <Link onClick={routerHandle} className={`navbar-brand `} to="/" style={{color: `${props.mode==='light' ? 'black' : props.colorTheme.color}`}}>
                    <span className="title" style={{color: `${props.mode==='light' ? 'black' : props.colorTheme.color}`}}>
                        {props.title.split('UT')[0]}<span className="titleUtils" style={{ background: `${props.mode==='light' ? 'blue' : props.colorTheme.primary}`, color: `${props.mode==='light' ? 'white' : props.colorTheme.color}`}}>{props.title.split('xt')}</span>
                    </span>
                </Link>
                <button className={`navbar-toggler `} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{color: `${props.mode==='light' ? 'black' : props.colorTheme.color}`}}>
                    <span className={`navbar-toggler-icon`}></span>
                </button>
                <div className={`collapse navbar-collapse `} id="navbarSupportedContent" style={{color: `${props.mode==='light' ? 'black' : props.colorTheme.color}`}}>
                    <ul className={`navbar-nav me-auto mb-2 mb-lg-0 `} style={{color: `${props.mode==='light' ? 'black' : props.colorTheme.color}`}}>
                        <li className={`nav-item `}>
                            <Link onClick={routerHandle} className={`${focusList[0]} nav-link active `} aria-current="page" to="/" style={{color: `${props.mode==='light' ? 'black' : props.colorTheme.color}`}}>Home</Link>
                        </li>
                        <li className={`nav-item `}>
                            <Link onClick={routerHandle} className={`${focusList[1]} nav-link `} to="/about" style={{color: `${props.mode==='light' ? 'black' : props.colorTheme.color}`}}>About</Link>
                        </li>
                    </ul>
                    
                    <ColorThemePicker colorThemeChange={props.colorThemeChange} mode={props.mode} colorTheme={props.colorTheme} />

                    <form className={`d-flex `} role="search" style={{color: `${props.mode==='light' ? 'black' : props.colorTheme.color}`}}>
                        <input className={`form-control me-2`} type="search" placeholder="Search" aria-label="Search"/>
                        <button className={`btn btn-outline-${props.mode==='dark'?'secondary':'success'} `} type="submit">Search</button>
                    </form>
                    <div className="form-check form-switch mx-3" style={{color: `${props.mode==='light' ? 'black' : props.colorTheme.color}`}}>
                        <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string
}
Navbar.defaultProps = {
    title: 'Lodaing the Title... UTxtLoading'
}

export default Navbar;
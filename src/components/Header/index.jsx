/***************************************************************************/
/**********            components/Header index.jsx                   *******/
/***************************************************************************/
import imgLogoHeader from '../../assets/logo_header.png';
import '../../sass/layouts/Header.scss'
import NavBar from '../../components/NavLink';

export default function Header (){
    return (
        <header className='header container'>
            <div className="header_logo">
                <img src={imgLogoHeader} alt="Logo Kasa" className="header_logo_img" />
            </div>
            <NavBar/>    
        </header>
    )
}

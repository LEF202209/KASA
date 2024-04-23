/***************************************************************************/
/**********            components/Footer index.jsx                   *******/
/***************************************************************************/
import imgLogoFooter from '../../assets/logo_footer.png'
import '../../sass/components/Footer.scss';

export default function Footer (){
    return (
        <footer >
            <img src={imgLogoFooter} alt="Logo Kasa" className='footer_logo'/>
            <div className='footer_text_container'>
                <p>  © 2020 Kasa. All rights reserved </p>
            </div>
        </footer>
    )
}
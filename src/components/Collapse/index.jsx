/***************************************************************************/
/**********            components/collapse index.jsx                 *******/
/***************************************************************************/
import  { useState } from 'react';
import '../../sass/components/Collapse.scss';
import arrow from '../../assets/down_arrow.png';

export default function Collapse({title, content,collapseDirection}) {
    /* Variable isOpen initialisée à false */
    const [isOpen, setIsOpen] = useState(false);
    /* Fonction toggleCollapsible pour inverser la valeur de isOpen */
    const toggleCollapsible = () => {setIsOpen(!isOpen);};
    return (
        <div className={`collapse_container ${collapseDirection}`}>
            <div className={`collapse_container_title ${collapseDirection==='row'?'collapse_container_title_row':''}`} onClick={toggleCollapsible}>
                <h3 >{title}</h3>
                <img onClick={toggleCollapsible} 
                    className={`arrow ${isOpen ? 'arrow_up' : 'arrow_down'}`}
                    src={arrow} 
                    alt="content" 
                /> 
            </div>
            {isOpen && content && (
            <div className={`${isOpen ? `collapsible_open ${(collapseDirection==='row')?'collapsible_open_row':''}` : 'collapsible_close' }  collapse_container_content `}>
                    {content} 
            </div>
            )}  
        </div>
    )
}
/***************************************************************************/
/**********            components/collapse index.jsx                 *******/
/***************************************************************************/
import  { useState } from 'react';
import '../../styles/Collapse.css';
import arrow from '../../assets/down_arrow.png';

export default function Collapse({title, content,collapseDirection}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapsible = () => {setIsOpen(!isOpen);};
    return (
            <div className={`collapse_container ${collapseDirection}`}>
                <div className={`collapse_title_container ${collapseDirection==='row'?'collapse_title_container_row':''}`} onClick={toggleCollapsible}>
                    <h3 >{title}</h3>
                    <img onClick={toggleCollapsible}
                        className={isOpen ? 'arrow down_arrow' : 'arrow up_arrow'} 
                        src={arrow} 
                        alt="content" 
                    /> 
                </div>
                {isOpen && content && (
                <div className={`${isOpen ? `collapsible_open ${(collapseDirection==='row')?'collapsible_open_row':''}` : 'collapsible_close' }  collapse_content_container `}>
                     {content} 
                </div>
                )}  
            </div>
    )
}
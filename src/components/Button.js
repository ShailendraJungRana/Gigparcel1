 import React from 'react'
 import './Button.css'
 import {Link} from 'react-router-dom';
 
const STYLES =['btn--primary', 'btn--outline'];

const SIZES = ['btn--meduim', 'btn--large'];

export const Button =({children,
     type,
      onclick,
       buttonStyle,
       buttonSize
    })=> {
        const checkButtonSyle = 
        STYLES.includes(buttonStyle) ?
         buttonStyle: STYLES[0]

         const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize: SIZES[0]
            return(
                   <Link to ='/sign-up' className=''btm-mobile>
                        <button className={`btn $ {checkButtonSytle} $ {checkButtonSize}`} 
                        onclick= {onclick} type={type}
                        > 

                            {children}

                        </button>
                       
                   </Link> 
            )


        };
 
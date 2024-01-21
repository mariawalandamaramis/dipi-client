import React, {Component} from 'react';
import { useState } from "react";
import '../../App.css';

function ArticleDetail(){
  const [state, setState]= useState(1);

  const action = (index) => {
  

  setState(index)

  }
    return(
        <>
        <div className='box'>
            <div className='tabs'>
                <div  onClick={()=>action(1)}className={`${state===1 ? 'tab active-tab':'tab'}`}>
                       
                </div>

                <div className={`${state===2 ? 'tab active-tab':'tab'}`} onClick={()=>action(2)}>
                    tab2
                </div>
                
                <div className={`${state===3 ? 'tab active-tab':'tab'}`} onClick={()=>action(3)}>
                    tab3 
                </div>
            </div>

            <div className="contents">
                <div  className="content active-content">
                <h2>Content 1</h2>
                <p>this is Contente 1</p>
                </div>

                <div className="contents">
                <h2>Content 2</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam dolores assumenda excepturi adipisci culpa dignissimos! Nobis, vel ab. Harum nesciunt debitis modi, impedit et distinctio fuga eos voluptate consequuntur quis.this is2</p>
                </div>

                <div  className="contents">
                <h2>Content 3</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit corrupti sit vero beatae, dolorem fuga, numquam voluptatibus est similique tempora ad. Laudantium facere alias repellat rem impedit minus, placeat ab!</p>
                </div>
            </div>
        </div>
        </>
    )

}
export default ArticleDetail



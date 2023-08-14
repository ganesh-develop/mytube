
import React  from 'react';
import './Imagebox.css';


const Imagedisplay = ({ renderedimg }) => {

   
    return (
        <div>
            {renderedimg && renderedimg.map((image, index) => {
                return (
                    <div className='SingleImage' key={index} >

                        <div className=" First">
                            <li className='imgtitle'>{image.filesName ? image.filesName : ''}</li> 
                        </div>
                        <div className='Secound '>
                            <img className='' src={image.Imgsrc} alt={`Imag ${index}`}
                                loading='lazy' />
                        </div>
                        <div className=" Third">

                            <i className="Likebtn bi bi-hand-thumbs-up-fill">Like</i>
                            <i className="Commentbtn bi bi-chat-dots-fill">Comment</i>
                            <i className="Sharebtn bi bi-share-fill">Share</i>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    );
};

export default Imagedisplay
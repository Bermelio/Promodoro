import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import StopStart from './StopStart'
import { useState } from 'react';

function Clock(){
    
    const Promodoro25 = 25 * 60; 
    
    const [secondLeft, setSecondLeft] = useState(Promodoro25);
    
    const minLeft = Promodoro25/60;


    return(
        <>
            <div className='flex justify-center items-center m-10 flex-col'>   
                <CircularProgressbar
                value={0.5}
                text={`${minLeft}'`}
                maxValue={25}
                styles={buildStyles({
                    rotation: 1,
                    strokeLinecap: 'butt',
                    trailColor: '#d1d1d1',
                    textColor: '#567853',
                    pathColor: '#567853'
                })   
                }
                />;

                <StopStart />
            </div>
        </>
    )
}


export default Clock;


import React from 'react'
import './Performance.css';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Performance() {
    return (
        <>
            <p className="performance">Performance</p>
<div className="full-rectangle">
    <div className="rectangle1">
        <h6 className="message">Hello Jane !</h6>
        <p>it's good to see you again.</p>
    </div>
    {/* <div className="image1">
        <img src="https://i.ibb.co/C9HQfTN/image1.png" alt="image" />
    </div> */}
   
<div className="image1">
<img src="https://i.ibb.co/C9HQfTN/image1.png" alt="image" />
</div>
    <div className="rectangle2">
    
        <div className="download">
            <h6>Download Report</h6>
            <p>Last week <KeyboardArrowDownIcon/></p>
        </div>
            <div className="icon">
           <CloudDownloadIcon/>
</div>
    </div>
   
    </div>

        </>
    )
}

export default Performance

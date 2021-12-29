import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Form,FormControl} from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MovingIcon from '@mui/icons-material/Moving';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import "./Team.css";
function Team() {
    return (
        <>
            <div className="whole">
                <div className="first-part">

               
<div className="text">
    <p>show:</p><h6>Team  <KeyboardArrowDownIcon/></h6>
</div>
<div className="search">
            <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search team"
          className="me-2"
          aria-label="Search"
          />
          <SearchIcon/>
      </Form>
            </div>
            </div>
            <div className="first-box">
                <div className="course">
                    <h6>Course</h6>
                    <p>Total course assigned</p>
                </div>
            
            <div className="circular">
                <img src="https://i.ibb.co/CQdkC9c/circular.png" alt="image"  />
                <div className="some-text">
                <p><CheckCircleOutlineIcon/>  course completed</p>
                <p><MovingIcon/>  ongoing course</p>
                <p><GppMaybeIcon/>  not started</p>
                </div>
                </div>
            </div>
            <div className="second-box">
                <h6>Announcement</h6>
            </div>
            <div className="third-box">
                <h6>Course in demand</h6>
                <div className="course-content">

               
                <div className="courses">
                    <div className="courses-names">
                 <MenuBookIcon style={{ fill:'#0f5da7'}}/>
                 <div className="courses-with-highlight">
                 <h6>  Introduction to hadoop</h6>
                 <p>28 Employees</p>
                     </div> 
                    </div>
                </div>
                <div className="courses">
                    <div className="courses-names">
                 <MenuBookIcon style={{ fill:'#0f5da7'}}/>
                 <div className="courses-with-highlight">
                 <h6>  Getting started to hadoop</h6>
                 <p>28 Employees</p>
                     </div> 
                    </div>
                </div>
                <div className="courses">
                    <div className="courses-names">
                 <MenuBookIcon style={{ fill:'#0f5da7'}}/>
                 <div className="courses-with-highlight">
                 <h6>  Introduction to hadoop</h6>
                 <p>28 Employees</p>
                     </div> 
                    </div>
                </div>
                <div className="courses">
                    <div className="courses-names">
                 <MenuBookIcon style={{ fill:'#0f5da7'}}/>
                 <div className="courses-with-highlight">
                 <h6>  Introduction to hadoop</h6>
                 <p>28 Employees</p>
                     </div> 
                    </div>
                </div>
                <div className="courses">
                    <div className="courses-names">
                 <MenuBookIcon style={{ fill:'#0f5da7'}}/>
                 <div className="courses-with-highlight">
                 <h6>  Introduction to hadoop</h6>
                 <p>28 Employees</p>
                     </div> 
                    </div>
                </div>
                </div>
           
            </div>
           
            </div>
        </>
    )
}

export default Team

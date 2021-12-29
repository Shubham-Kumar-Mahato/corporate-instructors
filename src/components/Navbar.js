import React from 'react'
import "./Navbar.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
function Navbar() {
    return (
       <nav className="navbar">
           
               <img className='image' src="https://corporateinstructor.in/wp-content/uploads/2021/06/cropped-ci_CI_logo-1-e1625126555368.png" alt="corporate" />
         
<div className="nav-items">
<div className="nav-components">
<HomeOutlinedIcon/>
<h5 className='font'>Home</h5>

</div>

<div className="nav-components">
<BookOutlinedIcon/>
<h5 className='font'>My learning</h5>

</div>
<div className="nav-components">
<ArrowRightIcon /><h6 className='dropdown'>Course</h6>

</div>
<div className="nav-components">
<ArrowRightIcon /><h6 className='dropdown'>Specialization</h6>
</div>
<div className="nav-components">
<WorkspacePremiumIcon/>
<h5 className='font'>Learning path</h5>

</div>
<div className="nav-components">
<EqualizerOutlinedIcon/>
<h5 className='font'>Performance</h5>

</div>
<div className="nav-components">
<ShoppingCartOutlinedIcon/>
<h5 className='font'>Cart</h5>

</div>
<div className="nav-components">
<SettingsOutlinedIcon/>
<h5 className='font'>Settings</h5>

</div>


</div>
       </nav>
    )
}

export default Navbar

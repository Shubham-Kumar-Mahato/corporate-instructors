import React from 'react'
import {Dropdown,DropdownButton,Form,FormControl,Button} from "react-bootstrap"
import "./Header.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Header() {
    return (
        <div className='header'>
            <div className="explore">
            <DropdownButton id="dropdown-basic-button" title="Explore">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
            </div>
            <div className="search">
            <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search course"
          className="me-2"
          aria-label="Search"
        />
        <Button className='btn' variant="outline-secondary">Search</Button>
      </Form>
            </div>
            <div className="profile">
            <NotificationsNoneIcon className='icon'/>
            <img src="https://image.shutterstock.com/image-photo/young-beautiful-woman-wearing-red-260nw-1531814996.jpg" alt="image" className="profile-image" />
            <div className="profile-info">
                <h6 className="profile-name">Jane Doe <KeyboardArrowDownIcon/></h6>
                <p>987654321</p>
            </div>
            </div>
        </div>
    )
}

export default Header

import React from 'react'
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import { IoSpeedometerOutline } from "react-icons/io5";
import { FaCalendarPlus } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { IoIosNotifications } from "react-icons/io";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";

const Dashboard = () => {
  return (
    <>
      <Nav className=''>
        <ListGroup defaultActiveKey="#link1" className='container-fluid'>
          <ListGroup.Item className='bg-dark text-light text-center fs-3 fw-bolder py-3'>
            <IoSpeedometerOutline />
            <i> Dashboard</i>
          </ListGroup.Item>
          <ListGroup.Item action href="#link1">
          <FaCalendarPlus />
            <i> Schedule Meeting</i>
          </ListGroup.Item>
          <ListGroup.Item action href="#link2">
          <FaRegCalendar />
            <i> Manage Meetings</i>
          </ListGroup.Item>
          <ListGroup.Item action href="#link3">
          <PiUsersThreeFill />
            <i> Users & Permissions</i>
          </ListGroup.Item>

          <ListGroup.Item action href="#link4">
          <IoIosNotifications />
            <i> Notifications</i>
          </ListGroup.Item>

          <ListGroup.Item action href="#link5">
          <TbDeviceDesktopAnalytics />
            <i> Analytics</i>
          </ListGroup.Item>
          <ListGroup.Item action href="#link6">
          <IoMdSettings />
            <i> Settings</i>
          </ListGroup.Item>
        </ListGroup>
      </Nav>
    </>
  );
}

export default Dashboard
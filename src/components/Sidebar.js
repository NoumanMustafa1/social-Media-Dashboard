import React from 'react';
import { Nav } from 'react-bootstrap';
import './Sidebar.css'; // Import your CSS file for sidebar styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <Nav.Link href="#facebook" className="sidebar-link">Facebook</Nav.Link>
        <Nav.Link href="#instagram" className="sidebar-link">Instagram</Nav.Link>
        <Nav.Link href="#youtube" className="sidebar-link">YouTube</Nav.Link>
        <Nav.Link href="#twitter" className="sidebar-link">Twitter</Nav.Link>
        <Nav.Link href="#tiktok" className="sidebar-link">TikTok</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const SitewideNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
          <Navbar color="dark" dark expand="md" fixed="top">
            <NavbarBrand href="/">
              <strong>2 Glocs TV</strong>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/" className="hashlink-active">
                    Stream Schedule
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Photography</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Contact</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Social Media
                  </DropdownToggle>
                  <DropdownMenu left>
                    <DropdownItem
                      tag="a"
                      href="https://twitter.com/"
                      target="_blank"
                    >
                      Twitter
                    </DropdownItem>
                    <DropdownItem
                      tag="a"
                      href="https://instagram.com/2glocsideways"
                      target="_blank"
                    >
                      Instagram
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                      tag="a"
                      href="https://discord.gg/jVvcaU"
                      target="_blank"
                    >
                      Discord Server
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
  );
};

export default SitewideNavbar;

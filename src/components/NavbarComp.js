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
    <Container>
      <Row>
        <Col>
          <Navbar color="light" light expand="md" fixed="top">
            <NavbarBrand href="/">
              <strong>2 Glocs TV</strong>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/" className="hashlink-active">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Schedule</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Portfolio</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Socials
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink
                        href="https://github.com/zaycation"
                        target="_blank"
                      >
                        Twitter
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        href="https://www.linkedin.com/in/isaiahthomas098/"
                        target="_blank"
                      >
                        Instagram
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <NavLink href="https://discord.gg/jVvcaU" target="_blank">
                        Discord Server
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default SitewideNavbar;

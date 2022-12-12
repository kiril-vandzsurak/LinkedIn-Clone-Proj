import {
  NavDropdown,
  Navbar,
  Nav,
  Container,
  InputGroup,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsLinkedin, BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import {
  RiGroupFill,
  RiMessage2Fill,
  RiNotification3Fill,
} from "react-icons/ri";
import img from "./avatar-1.jpg";
import { useEffect, useState } from "react";

const NavbarLinked = () => {
  const [profiles, setProfiles] = useState([]);

  // const saveData = () => {
  //     try {
  //       const response = await fetch("https://striveschool.herokuapp.com/api/reservation", {
  //         method: 'POST',
  //         body: JSON.stringify(this.state.reservation),
  //         headers: {
  //           'Content-type': 'application/json'
  //         }
  //       })
  //       if (response.ok) {
  //         alert('data saved successfully')
  //       }
  //     } catch (e) {
  //         console.log(e)
  //     }
  //   }

  useEffect(() => {
    saveData();
  }, []);

  const headers = {
    headers: {
      Authorization:
        "Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk3MDFiNGM5NmRmYjAwMTUyMWE1YzYiLCJpYXQiOjE2NzA4NDA3NTcsImV4cCI6MTY3MjA1MDM1N30.T5hB8KIIR6yohMzGajhbb-YdZ8l99w7-m-ASjfU4Jyc",
    },
  };

  const saveData = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        headers
      );
      if (response.ok) {
        let data = await response.json();
        setProfiles(data);
        console.log(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Navbar bg="light" expand="lg" style={{ padding: "0px", height: "48px" }}>
        <Container>
          <BsLinkedin style={{ fontSize: "35px", color: "#0A66C2" }} />
          <InputGroup className="ml-2" style={{ width: "350px" }}>
            {/* <ImSearch /> */}
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Search"
            />
          </InputGroup>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">
                <div>
                  <AiFillHome style={{ fontSize: "20px" }} />
                </div>
                <div style={{ fontSize: "13px" }}>Home</div>
              </Nav.Link>
              <Nav.Link href="#home">
                <div>
                  <RiGroupFill style={{ fontSize: "20px" }} />
                </div>
                <div style={{ fontSize: "13px" }}>My Network</div>
              </Nav.Link>
              <Nav.Link href="#home">
                <div>
                  <BsFillBriefcaseFill style={{ fontSize: "20px" }} />
                </div>
                <div style={{ fontSize: "13px" }}>Jobs</div>
              </Nav.Link>
              <Nav.Link href="#home">
                <div>
                  <RiMessage2Fill style={{ fontSize: "20px" }} />
                </div>
                <div style={{ fontSize: "13px" }}>Messaging</div>
              </Nav.Link>
              <Nav.Link href="#home">
                <div>
                  <RiNotification3Fill style={{ fontSize: "20px" }} />
                </div>
                <div style={{ fontSize: "13px" }}>Notifications</div>
              </Nav.Link>

              <div>
                <img
                  src={img}
                  alt="..."
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    marginTop: "11px",
                  }}
                />
                <NavDropdown
                  title="Me"
                  id="basic-nav-dropdown"
                  style={{ fontSize: "13px" }}
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarLinked;

import React, { useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import style from "../CssFolder/style.css";
import { BsFillCameraFill } from "react-icons/bs";
import { SiCampaignmonitor } from "react-icons/si";
import SecondSection from "../MainProfile/SecondSection";
import AnalyticsSection from "./AnalyticsSection";
import { BiPencil } from "react-icons/bi";
import ResourceSection from "./ResourceSection";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/action";
import Activity from "./Activity";
import Experience from "./Experience";
import SkillsComponent from "./SkillsComponent";
import Interest from "./Interests";
import ModalComponet from "./ModalComponent";
export default function MainProfile() {
  const dispatch = useDispatch();
  const profileDetails = useSelector((state) => state.profile.profilename);

  console.log(profileDetails);
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  return (
    <Container className="profile-main ">
      <div className="section-1">
        <Card className="section-profile">
          <div className="top-side">
            <div></div>
            <div className="take-picture mt-4 mr-4">
              <BsFillCameraFill className="take-picture-icon" />
            </div>
          </div>
          <Card.Body>
            <div className="profile-info">
              <div className="profile-picture">
                <img src={profileDetails.image} alt="profilepicture" />
                <div>
                  <ModalComponet />
                </div>
              </div>
              <div className="profile-name d-flex">
                <div className="profile-details">
                  <h4 className="mb-0">
                    {profileDetails.name}
                    {profileDetails.surname}
                  </h4>

                  <p className="mb-0">{profileDetails.title}</p>
                  <p className="mb-0">Sytems & Networks</p>
                  <p className="mb-0">
                    {profileDetails.area}.<a href="#">Contact Info</a>
                  </p>
                  <p className="mb-0">
                    <a href="#">30 connections</a>
                  </p>

                  <div className="profile-buttons">
                    <Button className="btn-1">Open to</Button>
                    <Button className="btn-2">Add profile Section</Button>
                    <Button className="btn-3">more</Button>
                  </div>
                  <div className="open-to-work mt-3">
                    <div className="mt-2 ">
                      <h3 className="mb-0">Open to work</h3>
                      Business Analyst, Junior Business Analyst................
                      <p>
                        <a href="#"> See all details</a>
                      </p>
                    </div>
                    <div>
                      <BiPencil className="icon" />
                    </div>
                  </div>
                </div>

                <div className="profile-job-details">
                  <div>
                    <SiCampaignmonitor />
                  </div>
                  <div>Epicode</div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="section-2">
        <SecondSection />
      </div>
      <div className="section-3">
        <AnalyticsSection />
      </div>
      <div className="section-4">
        <ResourceSection />
      </div>
      <div className="section-4">
        <Activity />
      </div>
      <div className="section-4">
        <Experience />
      </div>
      <div className="section-4">
        <SkillsComponent />
      </div>
      <div className="section-4">
        <Interest />
      </div>
    </Container>
  );
}

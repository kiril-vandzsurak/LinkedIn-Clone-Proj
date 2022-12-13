import React from "react";
import { Card } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPencil, BiBuildings } from "react-icons/bi";
export default function Experience() {
  return (
    <div className="wrapper-analytic mt-2">
      <Card>
        <Card.Body>
          <Card.Title className="activity">
            <div className="activity-followers">
              <h2 className="mb-0">Experience</h2>
            </div>
            <div className="experience-add">
              <div>
                <AiOutlinePlus className="experice-icon" />
              </div>
              <div>
                <BiPencil className="experice-icon" />
              </div>
            </div>
          </Card.Title>
          <div className="experience-note">
            <div className="experience">
              <BiBuildings className="experice-icon" />
            </div>
            <div>
              <h2 className="mb-0">Junior Business Analyst</h2>
              <div>JAY DEE LOGISTICS LTD.FULL-TIME</div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

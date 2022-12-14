import { AiFillEye } from "react-icons/ai";
import React from "react";
import { Button, Card } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { ImAddressBook } from "react-icons/im";

export default function SecondSection() {
  const now = 30;
  return (
    <div className="wrapper mt-2">
      <Card>
        <Card.Body>
          <div>
            <h4 className="mb-0">Suggested for you</h4>
            <p className="second-section-p">
              <AiFillEye className="icon" />
              Private to you
            </p>
            <div>Intermediate</div>
            <div className="second-section-progressive">
              <ProgressBar now={now} label={`${now}%`} />
            </div>
            <div>
              Complete 1 step to achieve <a href="#">All-star</a>
            </div>
          </div>

          <Card.Body>
            <div className="add-sumary-section">
              <div>
                <ImAddressBook className="icon" />
              </div>
              <div>
                Wrire a sumaary to highlight your personality or work experice
              </div>
            </div>
            <div>
              Members who include a summary receive up to 3.9 times as many
              profile views.
            </div>
            <Button variant="primary">Add a summary</Button>
          </Card.Body>
        </Card.Body>
      </Card>
    </div>
  );
}

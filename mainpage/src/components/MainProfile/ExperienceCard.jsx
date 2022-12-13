import { Container, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteExperienceAction } from "../redux/actions";

const ExperienceCard = (props) => {
  const startdate = props.data.startDate;
  const enddate = props.data.endDate;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.profilename);
  const userID = user._id;

  const formatDate = (d) => new Date(d).toISOString().substring(0, 10);

  return (
    <>
      <Container fluid>
        <Card>
          <Card.Body>
            <p>
              <span className="font-weight-bold" style={{ fontSize: "25px" }}>
                {props.data.role}
                <br />
              </span>
              <span style={{ fontSize: "18px" }}>{props.data.company}</span>
              <br />
              {formatDate(startdate)} to{" "}
              {props.data.endDate ? formatDate(enddate) : "present"}
              <br />
            </p>
            <hr />
            <p>{props.data.description}</p>
          </Card.Body>
          <Card.Footer>
            <Button
              variant="danger"
              onClick={() => {
                dispatch(deleteExperienceAction(props.data._id, userID));
              }}
            >
              Remove
            </Button>
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default ExperienceCard;

import Button from "react-bootstrap/Button";

const AddingPost = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        style={{
          width: "400px",
          height: "120px",
          backgroundColor: "lightgrey",
          borderRadius: "0.8 rem",
          marginTop: "20px",
        }}
        className="d-flex justify-content-around"
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "white",
          }}
          className="d-flex"
        >
          img
        </div>
        <div style={{ marginTop: "12px" }}>
          <Button variant="primary">Go somewhere</Button>
        </div>
      </div>
    </div>
  );
};

export default AddingPost;

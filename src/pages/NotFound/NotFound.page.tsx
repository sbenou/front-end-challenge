import { Button, Divider, Row } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

function NotFound(): React.ReactElement {
  let navigate = useNavigate();

  async function handleClick() {
    await navigate("/home");
  }

  return (
    <div className={styles.container}>
      <Row>
        <div id="message">Oops ... it seems like you've got lost!</div>
      </Row>
      <Divider orientation="left"></Divider>
      <Row>
        <Button id="base" type="primary" onClick={handleClick}>
          Home
        </Button>
      </Row>
    </div>
  );
}

export default NotFound;

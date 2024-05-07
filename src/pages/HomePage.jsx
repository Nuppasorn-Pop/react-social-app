import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
function HomePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate ต่างจาก Link ตรงที่ navigate สามารถ Programatically Redirection (เลือกได้ว่าจะ redirect ตอนไหน)
    // ถ้าเป็น Link กดแล้วไปที่ path นั้นเลย
    let isValid = true;
    if (isValid) navigate("/profile");
    else navigate("/login");
  };
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/login">LoginPage</Link>
      <Link to="/profile">ProfilePage</Link>
      <Button
        variant="contained"
        color="error"
        size="large"
        onClick={handleClick}
        startIcon={<SendIcon />}
        disableElevation
      >
        Go to 404
      </Button>
    </div>
  );
}

export default HomePage;

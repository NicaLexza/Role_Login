import { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import "./App.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username || !password || !role) {
      alert("Please fill in all the fields");
      return;
    }
    
    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        { username, password, role },
        { headers: { "Content-Type": "application/json" } }
      );
      
      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box 
        sx={{ 
          textAlign: "center", 
          p: 3, 
          borderRadius: 2, 
          boxShadow: 3, 
          backgroundColor: "#f7f7f8" 
        }}
      >
        <Typography variant="h4" sx={{ color: "#333", mb: 2 }}>
          Register
        </Typography>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          sx={{ backgroundColor: "white" }}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          sx={{ backgroundColor: "white" }}
        />
        <TextField
          label="Role"
          fullWidth
          margin="normal"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          variant="outlined"
          sx={{ backgroundColor: "white" }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleRegister}
          sx={{ mt: 2, borderRadius: "8px", textTransform: "none" }}
        >
          Register
        </Button>
        <Typography 
        variant="body2" 
        sx={{ mt: 2, color: "primary.main", textAlign: "center" }}
      >
        Already have an account?{" "}
        <Link to="/login" style={{ textDecoration: "none", color: "blue" }}>
          Login
        </Link>
      </Typography>
      </Box>
    </Container>
  );
};

export default Register;

import { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Please fill in all the fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("role", response.data.role); // will store the role in local storage
      const role = response.data.role; // extract role from response
      
     if(role === "admin"){
        navigate("/admin");
     } else if(role === "staff"){
        navigate("/staff");
     } else if(role === "staff2"){
        navigate("/staff2");
     } else if(role === "staff3"){
        navigate("/staff3");
     } else if(role === "staff4"){
        navigate("/staff4");
     } else { 
        alert("Invalid role");
     }
    } catch (error) {
      alert("Login failed");
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
          backgroundColor: "#f9f9f9" 
        }}
      >
        <Typography variant="h4" sx={{ color: "#333", mb: 2 }}>
          Login
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
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          sx={{ mt: 2, borderRadius: "8px", textTransform: "none" }}
        >
          Login
        </Button>
        <Typography 
        variant="body2" 
        sx={{ mt: 2, color: "primary.main", textAlign: "center" }}
      >
        Don't have an account?{" "}
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          Register
        </Link>
      </Typography>
      </Box>
    </Container>
  );
};

export default Login;

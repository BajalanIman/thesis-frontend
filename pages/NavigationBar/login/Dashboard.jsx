import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PopupLogout from "./PopupLogout";

const Dashboard = () => {
  const [defineValues, setDefineValues] = useState("");

  const handleChange = (event) => {
    setDefineValues(event.target.value);
  };

  const [usernameChecker, setUsernameChecker] = useState("");
  const [passwordChecker, setPasswordChecker] = useState("");
  const [nameChecker, setNameChecker] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    setNameChecker(localStorage.getItem("name"));
    setUsernameChecker(localStorage.getItem("username"));
    setPasswordChecker(localStorage.getItem("password"));
    setRole(localStorage.getItem("role"));
    console.log(role);
  }, [usernameChecker, role]);

  const [open, setOpen] = useState(false);
  const logoutHandler = () => {
    // localStorage.removeItem("name");
    // localStorage.removeItem("username");
    // localStorage.removeItem("password");
    // window.location.reload();
    console.log(123);
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ Width: { xs: "100px", md: "200px" } }}>
        <Link className="w-18" to={"/"} />
        <FormControl sx={{ width: "200px" }} fullWidth>
          <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
            Daschboard
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={defineValues}
            label="Stations"
            onChange={handleChange}
          >
            {usernameChecker && passwordChecker && (
              <MenuItem value={"Username"}>Hi {nameChecker}</MenuItem>
            )}

            {usernameChecker && passwordChecker && (
              <MenuItem onClick={logoutHandler} value={"logout"}>
                Log out
              </MenuItem>
            )}
            {!usernameChecker && !passwordChecker && (
              <Link to={"/login"}>
                <MenuItem value={"login"}>Log in</MenuItem>
              </Link>
            )}
            {!usernameChecker && !passwordChecker && (
              <Link to="/newuser">
                <MenuItem value={"Creat account"}>Creat account</MenuItem>
              </Link>
            )}
            {usernameChecker &&
              passwordChecker &&
              role &&
              role.length === 5 && (
                <Link to="/stationsadmin">
                  <MenuItem value={"Send Data"}>Send data</MenuItem>
                </Link>
              )}
            {usernameChecker &&
              passwordChecker &&
              role &&
              role.length === 5 && (
                <Link to="/usermanagement">
                  <MenuItem value={"User management"}>User managment</MenuItem>
                </Link>
              )}
          </Select>
        </FormControl>
      </Box>
      <PopupLogout
        open={open}
        setOpen={setOpen}
        onClose={handleClose}
      ></PopupLogout>
    </>
  );
};
export default Dashboard;

import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: 'linear-gradient(90deg, rgba(2,0,36,1) 10%, rgba(23,105,223,0.9697128851540616) 90%, rgba(0,212,255,1) 100%)', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={55} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
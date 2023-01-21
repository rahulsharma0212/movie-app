import { Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
const Logo = () => {
  const theme = useTheme();
  return (
    <Typography
      fontWeight="700"
      fontSize="1.7rem"
      component={Link}
      to={"/"}
      sx={{
        color: "unset",
        textDecoration: "none",
      }}
    >
      Mr<span style={{ color: theme.palette.primary.main }}>Flix</span>
    </Typography>
  );
};

export default Logo;

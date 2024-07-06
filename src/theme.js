import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#1D1F26",
        },
        primary: {
            main: "#BEA4FF",
        },
    },
    typography: {
        fontFamily: "Lato, sans-serif",
        button: {
            textTransform: "unset",
            fontWeight: 800
        },
        h6: {
            fontWeight: 700,
        },
    },    
})

export default theme
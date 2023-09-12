import {styled} from "@mui/system"
import {Paper} from "@mui/material"

export const Background = styled(Paper, {})({
    height: "35em",
    width: "40em",
    position: "absolute",
    top:"50%",
    left:"50%",
    background:"white",
    transform:"translate(-50%, -50%);",
    borderRadius: "20px",
    // backgroundColor:"red"

})
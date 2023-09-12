// const SubmitButton = () => (
//     <div
//       style={{
//         width: "80px",
//         height: "80px",
//         borderRadius: "50%",
//         backgroundColor: "hsl(259, 100%, 65%)",
//         display: "flex",
//         justifyContent:"center",
//         alignItems:'center',
//         position:"relative",
//         bottom:"2em",
//         left:"calc(100% - 10em)"

import styled from "styled-components";

        
//       }}
//     >
//       {" "}
//       <img src="./icon-arrow.svg"/>
//     </div>
//   );


export const SubmitButton = styled.button`
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: hsl(259, 100%, 65%);
        display: flex;
        justify-content:center;
        align-items: center;
        position:relative;
        bottom:3em;
        left: calc(100% - 10em);
        border: none;
        cursor: pointer;
        margin-bottom: -4em;

        &:hover{
            background-color: black;

        }
`
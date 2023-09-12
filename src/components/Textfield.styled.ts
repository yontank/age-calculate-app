import styled from "styled-components";

export const CalendarTextField = styled.input`
  border-radius: 6px;
  width: 95px;
  height: 45px;
  border: 1px solid hsl(0, 0%, 86%);
  font-size: 32px;
  font-family: "Poppins";
  padding-right: 0.75em;
   padding-left: 0.25em; 
  display: block;
  /* color: red; */
  

  &:hover {
    border: 1px solid hsl(259, 100%, 65%);
  }

  &:focus {
    outline: none;
    border: 1px solid hsl(259, 100%, 65%);
  }
  
  &::placeholder{
    color: hsl(0, 1%, 44%);
    
  }
`;

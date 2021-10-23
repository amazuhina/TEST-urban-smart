import styled from "styled-components";
import {Container} from "./components/container";
import {BrowserRouter as Router} from "react-router-dom";



const AppStl = styled.div` 
  min-width: 320px;
  overflow-x: hidden;
`



export const App = () => {
  return (
      <>
          <Router>
              <AppStl>
                <Container/>
              </AppStl>
          </Router>
      </>
  )
}


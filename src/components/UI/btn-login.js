import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {isDisabledSelector,signIn} from "../../redux/slice";
import {useHistory} from "react-router-dom";



const BtnLoginStl = styled.button`
  width: 270px;
  height: 33px;
  padding: 5px 10px;
  margin: 50px auto;
  text-align: center;
  text-transform: uppercase;
  border: 3px solid #fff;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  color: #fff;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    background-color: #fff;
    color: #2b3636;
  }  
  &:disabled {
    border: 3px solid rgba(255,255,255,0.41);
    background-color: transparent;
    color: rgba(255,255,255,0.41);
  }
`



export const BtnLogin = ({title}) => {

    const dispatch = useDispatch()

    const btnStatus = useSelector(isDisabledSelector)

    const history = useHistory()

    const onLink = () => {
        history.push("/profile")
    }

    const onLogin = () => {
        dispatch(signIn())

        onLink()
    }

    return (
        <BtnLoginStl onClick={onLogin} disabled={btnStatus}>
            {title}
        </BtnLoginStl>
    )
}

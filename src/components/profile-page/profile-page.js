import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {loginSelector} from "../../redux/slice";



const ProfilePageStl = styled.div`
`


const TitleStl = styled.h1`
  text-align: center;
  font-weight: 600;  
`



export const ProfilePage = () => {

    const valueLogin = useSelector(loginSelector)

    return (
        <ProfilePageStl>
            <TitleStl>Добро пожаловать, {valueLogin}!</TitleStl>
        </ProfilePageStl>
    )
}

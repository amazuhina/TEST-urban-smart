import React from "react";
import styled from "styled-components";
import {BtnLogin} from "../UI/btn-login";
import {loginSelector, passwordSelector, setValueLogin, setValuePassword} from "../../redux/slice";
import {useDispatch, useSelector} from "react-redux";



const LoginPageStl = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`


const InputsBlockStl = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`


const InputStl = styled.input`
  min-width: 238px;
  height: 25px;
  outline: none;
  border: none;
  padding: 0 5px;
  font-size: 14px;
  margin-right: 15px;
  color: #251c1c;
  border-radius: 3px;
  margin-bottom: 15px;  
`


const TitleStl = styled.h1`
  text-align: center;
  font-weight: 600; 
  margin-bottom: 50px;
`



export const LoginPage = () => {

    const dispatch = useDispatch()

    const valueLogin = useSelector(loginSelector)

    const valuePassword = useSelector(passwordSelector)


    const onValueChangeLogin = (event) => {
        const payload = event.target.value

        dispatch(setValueLogin(payload))
    }


    const onValueChangePassword = (event) => {
        const payload = event.target.value

        dispatch(setValuePassword(payload))
    }


    return (
        <LoginPageStl>
            <TitleStl>
                Тестовое задание Urban Smart
            </TitleStl>
            <InputsBlockStl>


                <InputStl
                    type={'text'}
                    placeholder={'Введите логин'}
                    onChange={onValueChangeLogin}
                    value={valueLogin}
                />

                <InputStl
                    type={'password'}
                    placeholder={'Введите пароль'}
                    onChange={onValueChangePassword}
                    value={valuePassword}
                />


            </InputsBlockStl>
            <BtnLogin title={'Войти'}/>
        </LoginPageStl>
    )
}

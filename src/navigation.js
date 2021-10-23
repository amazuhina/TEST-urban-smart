import {Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import {LoginPage} from "./components/login-page/login-page";
import {ProfilePage} from "./components/profile-page/profile-page";
import {useSelector} from "react-redux";
import {isAuthSelector} from "./redux/slice";



const PrivateRoute = ({ children}) => {

    const auth = useSelector(isAuthSelector)

    return (
        <Route
            render={({ location }) =>
                auth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}



export const Navigation = () => {
    return (
        <Switch>
            <PrivateRoute path="/profile">
                <ProfilePage/>
            </PrivateRoute>

            <Route path="/">
                <LoginPage/>
            </Route>
        </Switch>
    )
}
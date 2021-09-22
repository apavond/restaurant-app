import { useState, useEffect } from 'react';
import { loginUser } from './actions';
import './login.css';

import { connect } from 'react-redux';

const Login = (props) => {
    const {
        login,
        loading
    } = props;

    const [form, setForm] = useState({
        login: 'pepe',
        password: '1234'
    })

    /* useEffect(() => {
        loginUser("pepe", "1234").then(userInfo => console.log(userInfo));
    }); */

    console.log(form);

    const updateValue = (e, key) => {
        setForm({
            ...form,
            [key]: e.target.value
        })
    };


    return (
        <div className="login">
            <div className="form-container">
                <div className="form-container-logo"></div>
                {loading &&
                    <div className="loading">Haciendo login contra el servidor</div>
                }
                <form onSubmit={(e) => {
                    login(form.login, form.password);
                    e.stopPropagation();
                    e.preventDefault();

                    return false;
                }}>
                    <input type="text" placeholder="Login" value={form.login} onChange={(e) => updateValue(e, 'login')} />
                    <input type="password" placeholder="Password" value={form.password} onChange={(e) => updateValue(e, 'password')} />
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default connect(
    store => ({
        loading: store.login.loading,
    }),
    dispatch => ({
        login : (login, password) => dispatch(loginUser(login, password))
    })
)(Login);
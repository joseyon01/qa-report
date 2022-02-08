import React, { Fragment, useState } from 'react';
import './Login.css';
export const Login = () => {

    //State para Iniciar Sesion
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    //Extraer data del Usuario
    const {email, password} = user;


    const onChangeData = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el Usuario quiere iniciar Sesion
    const handlerChangeSubmit = (e) => {
        e.preventDefault();

        //Validar que no vienen los campos vacios


        //Pasar al action

    }


  return (
  <div className="text-center">
    <main className="form-signin">
      <form onSubmit={handlerChangeSubmit}>
        {/* <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" /> */}
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input 
                type="email" 
                className="form-control" 
                id="floatingInput"
                name="email"
                placeholder="name@example.com"
                value={email}
                onChange={onChangeData}
            />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <br />
        <div className="form-floating">
          <input 
                type="password" 
                className="form-control" 
                id="floatingPassword"
                name="password"
                placeholder="Password"
                value={password}
                onChange={onChangeData} 
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        {/* <div className="checkbox mb-3">
          <label>
            <input type="checkbox" defaultValue="remember-me" /> Remember me
          </label>
        </div> */}
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">QA - Turbochef,  ©2022</p>
      </form>
    </main>
  </div>)
};

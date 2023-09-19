import React from 'react'
import"./Login.css";
const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100"
    id="image">
        <div className="border border-3 border-dark p-3">
            <form>
                <h2 className="text-center text-primary">Login Page</h2>
                <div className="mb-3">
                    <label htmlFor="Email">Email</label>
                    <input 
                    type="email"
                    placeholder ="Enter your email"
                    className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Password">Password</label>
                    <input 
                    type="password"
                    placeholder ="Enter your password"
                    className="form-control"
                    />
                </div>
               <div className="mb-3">
                <input type="checkbox"className="mx-2"/>

                <label>Remember you Password</label>
                </div>
               <div className="d-grid">
                <button className="btn btn-success">Login</button>

                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
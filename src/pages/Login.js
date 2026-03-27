import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [password, setPassword] = useState(localStorage.getItem("password"));
  const [emaile, setEmaile] = useState('');
  const [pass, setPass] = useState('');

  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault()
    if (pass !== password || email !== emaile) {
      toast.error("password or email is invalid....")
      setEmaile("")
      setPass("")
      return
    }
    else {


      setIsLoggedIn(true)
      navigate("/")
      toast.success("logged In successfully")
      return
    }
  }

  return (
    <>

      <section className=" py-3">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 offset-md-3">

              <div className="card border-0 shadow-lg">
                <div className="card-body p-4">

                  <h2 className="text-center fw-bold mb-4">
                    login
                  </h2>

                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Email address</label>
                      <input
                        type="email"
                        className="form-control py-2"
                        placeholder="Enter your email" value={emaile}
                        onChange={(e) => setEmaile(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">Password</label>
                      <input
                        type="password"
                        className="form-control py-2"
                        placeholder="Enter your password" value={pass}
                        onChange={(e) => setPass(e.target.value)}
                      />
                    </div>

                    <button className="btn btn-danger w-100 py-2 mt-2">
                      Login
                    </button>
                  </form>

                  <p className="text-center mt-4 mb-0">
                    Dont have an account?{' '}
                    <NavLink to="/register" className="text-danger fw-semibold text-decoration-none">
                      Register
                    </NavLink>
                  </p>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Login
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Register = () => {
  const [name, setName] = useState('')
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')
  const [Cpassword, setCPassword] = useState('')
  const [contact, setContact] = useState('')

  const navigate = useNavigate()

  const getdata = (e) => {
    e.preventDefault()

   if (!name || !email || !password || !Cpassword) {
        toast.error('all fields are required')
        return
      }
  
      if (password !== Cpassword) {
        toast.error('password should be same')
        return
      }

    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
     localStorage.setItem("contact", contact)
toast.success('registered successfully')

   
     setTimeout(()=>{
      navigate('/login')

     } ,2000)
   

    setName('')
    setemail('')
    setPassword('')
    setCPassword('')
  }

  return (
   <>
   

      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7">

            <div className="card border-0 shadow-lg">
              <div className="card-body p-4">

                <h3 className="text-center mb-4 fw-bold">Create Account</h3>

                <form onSubmit={getdata}>
                  <input
                    type="text"
                    className="form-control mb-3 py-2 "
                    placeholder="Enter Your Name" value={name}
            onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    type="email"
                    className="form-control mb-3 py-2 "
                    placeholder="Enter Your Email" value={email}
            onChange={(e) => setemail(e.target.value)}
                  />

                   <input
                    type="text"
                    className="form-control mb-3 py-2 "
                    placeholder="Enter Your Contact n." value={contact}
            onChange={(e) => setContact(e.target.value)}
                  />


                  <input
                    type="password"
                    className="form-control mb-3 py-2 "
                    placeholder="Enter Password" value={password}
            onChange={(e) => setPassword(e.target.value)}
                  />

                  <input
                    type="password"
                    className="form-control mb-4 py-2 "
                    placeholder="Confirm Password" value={Cpassword}
            onChange={(e) => setCPassword(e.target.value)}
                  />

                  <button className="btn btn-danger w-100 py-2 fw-semibold ">
                    Register
                  </button>
                </form>

                <p className="text-center mt-4">
                  Already have an account? <NavLink to="/login" className="text-danger fw-semibold text-decoration-none">
                      Login
                    </NavLink>
                  
                </p>

              </div>
            </div>

          </div>
        </div>
      </div> </>
  )
}

export default Register
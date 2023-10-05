import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location);
  const handleLogIn = (e) => {

    e.preventDefault()
    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password);
    signIn(email, password)
    .then(result => {
      console.log(result.user);
      // navigate after login
      navigate(location?.state ? location.state : '/')
    })
    .catch(error => {
      console.log(error);
    })
  }
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-3xl text-center my-4">Please login</h2>
      <div className="w-3/4 mx-auto">
        <div className="">
          <div className="card w-full">
            <form className="card-body pb-0" onSubmit={handleLogIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center p-4">Don't have an account <Link className="font-semibold btn-link" to={'/register'}>Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

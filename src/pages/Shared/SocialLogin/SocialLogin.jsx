/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle, signInWithGithub, signInWithFacebook } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };

  const handleGithubSignIn = () => {
    signInWithGithub().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("https://bistro-boss-server-deployment.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };

  const handleFacebookSignIn = () => {
    signInWithFacebook().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("https://bistro-boss-server-deployment.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div>
      <div className="divider m-0"></div>
      <div className="flex justify-evenly mb-3">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline m-0 bg-success"
        >
          <FaGoogle className="mb-1 mr-2"></FaGoogle> <span>Google</span>
        </button>
        <button onClick={handleGithubSignIn} className="btn btn-outline m-0">
          <FaGithub className="mb-1 mr-2"></FaGithub> <span>Github</span>
        </button>
        <button
          onClick={handleFacebookSignIn}
          className="btn btn-outline m-0 bg-info"
        >
          <FaFacebookF className="mb-1 mr-2"></FaFacebookF>{" "}
          <span>Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

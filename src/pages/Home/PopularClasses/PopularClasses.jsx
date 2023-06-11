/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import img1 from "../../../assets/classes/class1.jpg";
import img2 from "../../../assets/classes/class2.jpg";
import img3 from "../../../assets/classes/class3.jpg";
import img4 from "../../../assets/classes/class4.jpg";
import img5 from "../../../assets/classes/class5.jpg";
import img6 from "../../../assets/classes/class6.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PopularClasses = () => {
  const [fold, setFold] = useState(true);

  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const navigate = useNavigate();
  const location = useLocation();

  const seats = 10;

  const [value, setValue] = useState(seats);

  const handleClick = (event) => {
    if (user) {
      event.currentTarget.disabled = true;
      console.log("button clicked");
      setValue((prevValue) => prevValue - 1);
      toast.success("Added Favorite success! 👍", { autoClose: 500 });
    } else {
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mb-24">
      <div>
        <h2 className="text-center text-4xl">Popular Classes</h2>
        <div className="divider w-96 mx-auto"></div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div className="card glass">
          <figure>
            <img src={img1} alt="car!" />
          </figure>
          <div className="p-5 gap-0 card-body">
            <h2 className="text-2xl card-title">Spanish</h2>
            <h3 className="text-1xl">
              <b>Total Student</b> : 327
            </h3>
            {fold ? (
              <>
                <p className="my-0">
                  Spanish (español or idioma español), or Castilian
                  (castellano), is a Romance language of the Indo-European
                  language family that evolved from....
                </p>
                <small
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => setFold(!fold)}
                >
                  Read More
                </small>
              </>
            ) : (
              <>
                <p className="my-0">
                  Spanish (español or idioma español), or Castilian
                  (castellano), is a Romance language of the Indo-European
                  language family that evolved from colloquial Latin spoken on
                  the Iberian Peninsula of Europe. Today, it is a global
                  language with about 486 million native speakers, mainly in the
                  Americas and Spain.
                </p>
                <small
                  style={{ cursor: "pointer", color: "gray" }}
                  onClick={() => setFold(!fold)}
                >
                  Read Less
                </small>
              </>
            )}

            {seats === 0 || isAdmin ? (
              <>
                <div>
                  <button disabled className="btn btn-primary">
                    Sorry Seat Not Available
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <button onClick={handleClick} className="btn btn-primary">
                    Select This Class
                  </button>
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="card glass">
          <figure>
            <img src={img2} alt="car!" />
          </figure>
          <div className="p-5 gap-0 card-body">
            <h2 className="text-2xl card-title">Germany</h2>
            <h3 className="text-1xl">
              <b>Total Student</b> : 363
            </h3>
            {fold ? (
              <>
                <p className="my-0">
                  {"German, or more precisely High German, is a West Germanic language mainly spoken in Western Europe and Central Europe. It is the most widely spoken and official or co-official language in Germany, Austria, Switzerland, Liechtenstein, and the Italian province of South Tyrol.".substring(
                    0,
                    100
                  )}
                  of South Tyrol.
                </p>
                <small
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => setFold(!fold)}
                >
                  Read More
                </small>
              </>
            ) : (
              <>
                <p className="my-0">
                  German, or more precisely High German, is a West Germanic
                  language mainly spoken in Western Europe and Central Europe.
                  It is the most widely spoken and official or co-official
                  language in Germany, Austria, Switzerland, Liechtenstein, and
                  the Italian province of South Tyrol.
                </p>
                <small
                  style={{ cursor: "pointer", color: "gray" }}
                  onClick={() => setFold(!fold)}
                >
                  Read Less
                </small>
              </>
            )}

            <div className="">
              <button className="btn btn-primary">
                Details and Learn now!
              </button>
            </div>
          </div>
        </div>
        <div className="card glass">
          <figure>
            <img src={img3} alt="car!" />
          </figure>
          <div className="p-5 gap-0 card-body">
            <h2 className="text-2xl card-title">Japanes</h2>
            <h3 className="text-1xl">
              <b>Total Student</b> : 217
            </h3>
            {fold ? (
              <>
                <p className="my-0">
                  Spanish (español or idioma español), or Castilian
                  (castellano), is a Romance language of the Indo-European
                  language family that evolved from....
                </p>
                <small
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => setFold(!fold)}
                >
                  Read More
                </small>
              </>
            ) : (
              <>
                <p className="my-0">
                  Spanish (español or idioma español), or Castilian
                  (castellano), is a Romance language of the Indo-European
                  language family that evolved from colloquial Latin spoken on
                  the Iberian Peninsula of Europe. Today, it is a global
                  language with about 486 million native speakers, mainly in the
                  Americas and Spain.
                </p>
                <small
                  style={{ cursor: "pointer", color: "gray" }}
                  onClick={() => setFold(!fold)}
                >
                  Read Less
                </small>
              </>
            )}

            <div className="">
              <button className="btn btn-primary">
                Details and Learn now!
              </button>
            </div>
          </div>
        </div>
        <div className="card glass">
          <figure>
            <img src={img4} alt="car!" />
          </figure>
          <div className="p-5 gap-0 card-body">
            <h2 className="text-2xl card-title">Mandarin</h2>
            <h3 className="text-1xl">
              <b>Total Student</b> : 324
            </h3>
            {fold ? (
              <>
                <p className="my-0">
                  Spanish (español or idioma español), or Castilian
                  (castellano), is a Romance language of the Indo-European
                  language family that evolved from....
                </p>
                <small
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => setFold(!fold)}
                >
                  Read More
                </small>
              </>
            ) : (
              <>
                <p className="my-0">
                  Spanish (español or idioma español), or Castilian
                  (castellano), is a Romance language of the Indo-European
                  language family that evolved from colloquial Latin spoken on
                  the Iberian Peninsula of Europe. Today, it is a global
                  language with about 486 million native speakers, mainly in the
                  Americas and Spain.
                </p>
                <small
                  style={{ cursor: "pointer", color: "gray" }}
                  onClick={() => setFold(!fold)}
                >
                  Read Less
                </small>
              </>
            )}

            <div className="">
              <button className="btn btn-primary">
                Details and Learn now!
              </button>
            </div>
          </div>
        </div>
        <div className="card glass">
          <figure>
            <img src={img5} alt="car!" />
          </figure>
          <div className="p-5 gap-0 card-body">
            <h2 className="text-2xl card-title">Portuguese</h2>
            <h3 className="text-1xl">
              <b>Total Student</b> : 178
            </h3>
            {fold ? (
              <>
                <p className="my-0">
                  Spanish (español or idioma español), or Castilian
                  (castellano), is a Romance language of the Indo-European
                  language family that evolved from....
                </p>
                <small
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => setFold(!fold)}
                >
                  Read More
                </small>
              </>
            ) : (
              <>
                <p className="my-0">
                  Spanish (español or idioma español), or Castilian
                  (castellano), is a Romance language of the Indo-European
                  language family that evolved from colloquial Latin spoken on
                  the Iberian Peninsula of Europe. Today, it is a global
                  language with about 486 million native speakers, mainly in the
                  Americas and Spain.
                </p>
                <small
                  style={{ cursor: "pointer", color: "gray" }}
                  onClick={() => setFold(!fold)}
                >
                  Read Less
                </small>
              </>
            )}

            <div className="">
              <button className="btn btn-primary">
                Details and Learn now!
              </button>
            </div>
          </div>
        </div>
        <div className="card glass">
          <figure>
            <img src={img6} alt="car!" />
          </figure>
          <div className="p-5 gap-0 card-body">
            <h2 className="text-2xl card-title">Russian</h2>
            <h3 className="text-1xl">
              <b>Total Student</b> : 432
            </h3>
            {fold ? (
              <>
                <p className="my-0">
                  Spanish (español or idioma español), or Castilian
                  (castellano), is a Romance language of the Indo-European
                  language family that evolved from....
                </p>
                <small
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => setFold(!fold)}
                >
                  Read More
                </small>
              </>
            ) : (
              <>
                <p className="my-0">
                  Spanish (español or idioma español), or Castilian
                  (castellano), is a Romance language of the Indo-European
                  language family that evolved from colloquial Latin spoken on
                  the Iberian Peninsula of Europe. Today, it is a global
                  language with about 486 million native speakers, mainly in the
                  Americas and Spain.
                </p>
                <small
                  style={{ cursor: "pointer", color: "gray" }}
                  onClick={() => setFold(!fold)}
                >
                  Read Less
                </small>
              </>
            )}

            <div className="">
              <button className="btn btn-primary">
                Details and Learn now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;

/* eslint-disable no-unused-vars */
import React from "react";
import img1 from "../../../assets/students/student1.jpg";
import img2 from "../../../assets/students/student2.jpg";
import img3 from "../../../assets/students/student3.jpg";

const HappyStudent = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-24">
      <div>
        <h2 className="text-center text-4xl">Our Old Summer Camp Students</h2>
        <div className="divider w-96 mx-auto"></div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div>
          <div className="card glass p-6">
            <h3 className="text-cyan-700"> AWESOME!</h3>
            <p>
              Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh
              tellus, a rutrum turpis pellentesque ac. Nulla nibh libero,
              tincidunt vero eos et accusamus et iusto odio dignissimos ducimus
            </p>
          </div>
          <div className="bg-cyan-700 w-56 mt-3 rounded flex items-center gap-3 ">
            <img
              src={img1}
              alt="Shoes"
              style={{
                height: "60px",
                width: "60px",
              }}
            />
            <div className="text-white">
              <h5 className="m-0 text-sm">Kaira Sims</h5>
              <p className="m-0 text-xs">Student</p>
            </div>
          </div>
        </div>
        <div>
          <div className="card glass p-6">
            <h3 className="text-red-500"> HIGH QUALITY!</h3>
            <p>
              Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh
              tellus, a rutrum turpis pellentesque ac. Nulla nibh libero,
              tincidunt vero eos et accusamus et iusto odio dignissimos ducimus
            </p>
          </div>
          <div className="bg-red-500 w-56 mt-3 rounded flex items-center gap-3 ">
            <img
              src={img2}
              alt="Shoes"
              style={{
                height: "60px",
                width: "60px",
              }}
            />
            <div className="text-white">
              <h5 className="m-0 text-sm">Phil Neal</h5>
              <p className="m-0 text-xs">Student</p>
            </div>
          </div>
        </div>
        <div>
          <div className="card glass p-6">
            <h3 className="text-amber-400"> SO SIMPLE!</h3>
            <p>
              Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh
              tellus, a rutrum turpis pellentesque ac. Nulla nibh libero,
              tincidunt vero eos et accusamus et iusto odio dignissimos ducimus
            </p>
          </div>
          <div className="bg-amber-400 w-56 mt-3 rounded flex items-center gap-3 ">
            <img
              src={img3}
              alt="Shoes"
              style={{
                height: "60px",
                width: "60px",
              }}
            />
            <div className="text-white">
              <h5 className="m-0 text-sm">Hania</h5>
              <p className="m-0 text-xs">Student</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyStudent;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="gap-4 bg-slate-900 text-white p-5">
      <div className="flex gap-6 mb-4">
        <Link to="/FunProp">
          {" "}
          <div>FunctionProps</div>
        </Link>
        <Link to="/hoc-state">
          <div>StateFunction</div>
        </Link>
        <Link to="/">
          <div>UseEffect</div>
        </Link>
        <Link to="/CondRend">
          <div>ConditionRender</div>
        </Link>
        <Link to="/EventKey">
          {" "}
          <div>Eventkey</div>
        </Link>
        <Link to="/UseRed">
          {" "}
          <div>UseReducer</div>
        </Link>
        <Link to="/context">
          <div>UseContext</div>
        </Link>
        <Link to="/context2">
          <div>UseContext2</div>
        </Link>
        <Link to="/fetch">
          <div>UseFetch</div>
        </Link>
        <Link to="/local">
          {" "}
          <div>LocalStorage</div>
        </Link>
        <Link to="/callBack">
          <div>CallBack</div>
        </Link>
        <Link to="/useMemo">
          <div>UseMemo</div>
        </Link>
        <Link to="/useRef">
          <div>UseRef</div>
        </Link>
        <Link to="/useRef2">
          <div>UseRef2</div>
        </Link>
      </div>
      <div className="flex gap-6">
        <Link to="/redux">
          <div>Redux</div>
        </Link>
        <Link to="/hoc">
          <div>HOC</div>
        </Link>
        <Link to="/throttle">
          <div>Throttle</div>
        </Link>
        <Link to="/debounce">
          <div>Debounce</div>
        </Link>
        <Link to="/buggy">
          <div>Error Boundary</div>
        </Link>
        <Link to="/portal">
          <div>Portal</div>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;

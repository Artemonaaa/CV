import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import xiaopangPng from "@/assets/xiaopang.png";
import xiaopangJpg from "@/assets/xiaopang.jpg";
import Calendar from "@/assets/xiaopang.svg";

const Todo = () => {
  Todo2();
}

const Todo2 = () => {
  throw new Error();
}


export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increase = () => Todo();

  return (
    <div data-testid={"App"}>
      <h1 data-testid={"Platform"}>PLATFORM={__PLATFORM__}</h1>
      <div>
        <img width={100} height={100} src={xiaopangPng} />
        <img width={100} height={100} src={xiaopangJpg} />
        <Calendar width={100} height={100} style={{ color: "green" }} />
      </div>
      <Link to={"/about"}>About</Link>
      <br />
      <Link to={"/shop"}>Shop</Link>
      <br />
      <h1>{count}</h1>
      <button className={classes.btn} onClick={increase}>
        Inc
      </button>
      <Outlet />
    </div>
  );
};

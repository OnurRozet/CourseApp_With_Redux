import { useEffect } from "react";
import "./App.css";
import CourseList from "./Components/CourseList";
import Navbar from "./Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./control/cartSlice";

function App() {
  const {cartItems} = useSelector((store)=>store.cart)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(calculateTotal())
  },[cartItems])
  return <div>
    <Navbar/>
    <CourseList/>
  </div>;
}

export default App;

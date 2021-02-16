import { useState } from "react"
import SignInSignUp from "./page/SignInSignUp";
//import { Button, Alert } from "react-bootstrap"

export default function App() {

  const [user, setUser] = useState({name: "Lautaro"});

  return (
    <div>
      {user ? (
        <div>
          <SignInSignUp/>
        </div>
      ):(
        <h1>No estás logueado</h1>)}
    </div>
    );
}

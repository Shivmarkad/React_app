"use client"
import react, { useState } from "react";
import Header from "@/Components/Header"


const page = () => {
  const [user,setUser] = useState("Shiv")
  const [friend,setFriend] = useState("Sufia")


  return (
    <>
    <Header user={user} friend = {friend}/>
    {user}
    </>
  )
}

export default page;
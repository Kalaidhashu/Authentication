'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {signIn,signOut,useSession} from "next-auth/react";

export default function Home() {
  const {data:session}=useSession();
  console.log(session);
  if(session){
  return (
    <>
    <div className={styles.page}>
    <div className="logout">
    <p>You are signed out as {session.user.email}</p>
    <img src={session.user.image}></img>
    <button onClick={()=>signOut()}>Logout</button>
    </div>
    </div>
    </>
  );
}
  return (
    <>
    <div className={styles.page}>
    <form className="form">
    <p>Login Here </p>
    <button onClick={()=>signIn()} className="btn">Login</button>
    </form>
    </div>
    </>
  );
}

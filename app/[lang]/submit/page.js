import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: 'Terms of Use',
  description: 'Operated by 3M DIGITAL LTD. Effective Date: July 31, 2024',
}

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
      <h1>Submit a video</h1>
      <p>We will watch it, and include it in the next edition if it is funny enough, and passes a few extra validation points.</p>
      </div>
      
      <form className={styles.form}>
        <label>Youtube URL *</label>
        <input type="text" />
        <br/><br/>
        <label>Your Instagram handle (optional)</label>
        <input type="text" />
        <br/><br/>
        <label>Your TikTok handle (optional)</label>
        <input type="text" />
        <br/><br/>
        <button type="submit">Send suggestion</button>
      </form>
    </div>
  );
}

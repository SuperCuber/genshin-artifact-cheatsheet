import styles from "./page.module.css";
import Image from "next/image";
import { characters } from "./lib/data";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Image src={characters.Albedo} alt="Albedo" />
      </main>
    </div>
  );
}

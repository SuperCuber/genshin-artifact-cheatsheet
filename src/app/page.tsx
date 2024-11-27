import styles from "./page.module.css";
import Image from "next/image";
import { artifacts, characters, builds } from "./lib/data";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                Builds: {Object.entries(builds).map(([name, builds]) => `${name} (${builds.length})`).join(", ")}
                <hr />
                {Object.entries(characters).map(([name, image]) =>
                    <div>{name}: <Image key={name} src={image} alt={name} /></div>)}
                <hr />
                {Object.entries(artifacts).map(([name, image]) =>
                    <div>{name}: <Image key={name} src={image} alt={name} /></div>)}
            </main>
        </div>
    );
}

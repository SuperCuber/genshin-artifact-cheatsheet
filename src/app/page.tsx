import styles from "./page.module.css";
import { builds } from "./lib/data";
import ArtifactBuilds from "./ui/ArtifactBuilds";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                {/* Builds: {Object.entries(builds).map(([name, builds]) => `${name} (${builds.length})`).join(", ")}
                <hr />
                {Object.entries(characters).map(([name, image]) =>
                    <div key={name}>{name}: <Image src={image} alt={name} /></div>)}
                <hr />
                {Object.entries(artifacts).map(([name, image]) =>
                    <div key={name}>{name}: <Image src={image} alt={name} /></div>)} */}
                <ArtifactBuilds
                    artifactName="Thundering Fury"
                    characterBuilds={[{
                        character: "Keqing", build: builds['Keqing']![0]
                    }]} />
            </main>
        </div>
    );
}

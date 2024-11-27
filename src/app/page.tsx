import styles from "./page.module.css";
import { ArtifactSet, builds, groupByArtifact } from "./lib/data";
import ArtifactBuilds from "./ui/ArtifactBuilds";

export default function Home() {
    const artifacts = groupByArtifact(builds);

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.artifact_sets}>
                    {Object.entries(artifacts).map(([artifactName, characterBuilds]) => (
                        <ArtifactBuilds
                            key={artifactName}
                            artifactName={artifactName as ArtifactSet}
                            characterBuilds={characterBuilds}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

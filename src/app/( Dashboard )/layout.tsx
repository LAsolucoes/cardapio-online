import { Layout } from "./_Components/Layout";
import styles from "./layout.module.css";

export default function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Layout />
      <main className={styles.MainContent}>
        {children}
        
        </main>
    </>
  );
}

import styles from "./Heading.module.css";

export const Heading = () => {
  return (
    <h1 className={styles.title}>
      Welcome to <a href="https://nextjs.org">Next.js!</a>
    </h1>
  );
};

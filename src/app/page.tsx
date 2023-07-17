import { CharactersList, SearchCharacter } from '@/components';
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>ZUSTAND REACT QUERY TEST</h1>
      <div className={styles.description}>
        <CharactersList />
      </div>

      <div className={styles.center}>
        <SearchCharacter />
      </div>

      <div className={styles.grid}>
        {/* <StrangeSelector /> */}
      </div>
    </main>
  )
}

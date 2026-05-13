import { Link } from 'react-router-dom';
import styles from './Layout.module.scss';

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                <h1>React Performance Lab</h1>

                <nav>
                    <Link to="/">Dashboard</Link>

                    <Link to="/rerenders">
                        Re-renders
                    </Link>

                    <Link to="/virtualization">
                        Virtualization
                    </Link>

                    <Link to="/code-splitting">
                        Code Splitting
                    </Link>
                </nav>
            </aside>

            <main className={styles.content}>
                {children}
            </main>
        </div>
    );
}
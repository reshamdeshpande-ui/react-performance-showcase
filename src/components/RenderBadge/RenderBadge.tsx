import styles from './RenderBadge.module.scss';

type Props = {
    count: number;
};

export default function RenderBadge({ count }: Props) {
    return (
        <div className={styles.badge}>
            Renders: {count}
        </div>
    );
}
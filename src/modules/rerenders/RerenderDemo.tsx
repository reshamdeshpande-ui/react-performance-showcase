import AfterDemo from './AfterDemo';
import BeforeDemo from './BeforeDemo';

export default function RerenderDemo() {
    return (
        <div>
            <h1>Unnecessary Re-renders</h1>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '24px',
                }}
            >
                <BeforeDemo />
                <AfterDemo />
            </div>
        </div>
    );
}
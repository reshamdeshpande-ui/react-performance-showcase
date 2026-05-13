import {
    lazy,
    Suspense,
    useState,
} from 'react';

const HeavyChart = lazy(
    () => import('./HeavyChart')
);

export default function CodeSplittingDemo() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Route Level Code Splitting</h1>

            <button
                onClick={() => setShow(true)}
            >
                Load Heavy Module
            </button>

            <Suspense fallback={<div>Loading...</div>}>
                {show && <HeavyChart />}
            </Suspense>
        </div>
    );
}
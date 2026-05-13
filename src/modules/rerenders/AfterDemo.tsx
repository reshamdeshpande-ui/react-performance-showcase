import {
    memo,
    useCallback,
    useState,
} from 'react';

import { useRenderCount } from '../../hooks/useRenderCount';

import RenderBadge from '../../components/RenderBadge/RenderBadge';

const Child = memo(function Child({
    onClick,
}: any) {
    const renders = useRenderCount(
        'Optimized Child'
    );

    return (
        <div>
            <RenderBadge count={renders} />

            <button onClick={onClick}>
                Child Button
            </button>
        </div>
    );
});

export default function AfterDemo() {
    const [count, setCount] = useState(0);

    const renders = useRenderCount('AfterDemo');

    const handleClick = useCallback(() => { //stores the same function reference
        console.log('clicked');
    }, []);

    return (
        <div>
            <h2>After Optimization</h2>

            <RenderBadge count={renders} />

            <button
                onClick={() => setCount(count + 1)}
            >
                Parent Count: {count}
            </button>

            <Child onClick={handleClick} />
        </div>
    );
}
import { useState } from 'react';

import { useRenderCount } from '../../hooks/useRenderCount';

import RenderBadge from '../../components/RenderBadge/RenderBadge';

function Child({ onClick }: any) {
    const renders = useRenderCount('Child');

    return (
        <div>
            <RenderBadge count={renders} />

            <button onClick={onClick}>
                Child Button
            </button>
        </div>
    );
}

export default function BeforeDemo() {
    const [count, setCount] = useState(0);

    const renders = useRenderCount('BeforeDemo');

    return (
        <div>
            <h2>Before Optimization</h2>

            <RenderBadge count={renders} />

            <button
                onClick={() => setCount(count + 1)}
            >
                Parent Count: {count}
            </button>

            <Child
                onClick={() => console.log('clicked')}
            />
        </div>
    );
}
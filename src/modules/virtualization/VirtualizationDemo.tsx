import { FixedSizeList as List } from 'react-window';
const data = Array.from(
    { length: 10000 },
    (_, i) => `Row ${i}`
);

const Row = ({ index, style }: any) => (
    <div style={style}>
        {data[index]}
    </div>
);

export default function VirtualizationDemo() {
    return (
        <div>
            <h1>List Virtualization</h1>

            <List
                height={500}
                itemCount={data.length}
                itemSize={35}
                width={500}
            >
                {Row}
            </List>
        </div>
    );
}
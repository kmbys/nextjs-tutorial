import { useState } from 'react';

function Header(props) {
    return <h1>{props.title}</h1>
}

export default function HomePage() {
    const tasks = [
        'タスク1',
        'タスク2',
        'タスク3'
    ];

    const [status, startTask] = useState('未着手');
    function handleStartTask() {
        startTask('対応中')
    }
    return (
        <div>
            <Header title="タスク一覧" />
            <h2>{status}</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task}>{task}</li>
                ))}
            </ul>
            <button onClick={handleStartTask}>対応開始</button>
        </div>
    );
}

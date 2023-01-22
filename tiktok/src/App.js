import React, { useState } from 'react';

const courses = [
    {
        id: 1,

        name: 'ReactJS',
    },
    {
        id: 2,

        name: 'JavaScrip',
    },
    {
        id: 3,

        name: 'CSS',
    },
];

function App() {
    const [checked, setChecked] = useState(2);
    // console.log(checked)
    const handleSubmit = () => {
        console.log({ id: checked });
    };
    return (
        <div style={{ padding: 32 }}>
            {courses.map((course) => (
                <div key={course.id}>
                    <input type="checkbox" checked={checked === course.id} onChange={() => setChecked(course.id)} />
                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit}>Register</button>
        </div>
    );
}
export default App;

import React from 'react';
import sectorisation from './data/sectorisation.json';

function App() {
    const root = sectorisation.data.roots[0]; // "France"

    return (
        <div style={{ padding: '2rem' }}>
            <h1>{root.name}</h1>
        </div>
    );
}

export default App;

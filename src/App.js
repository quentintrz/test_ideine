import React from 'react';
import sectorisation from './data/sectorisation.json';
import TreeNode from './components/TreeNode';

function App() {
    const root = sectorisation.data.roots[0]; // "France"

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Permissions pour le secteur France</h1>
            <TreeNode node={root} />
        </div>
    );
}

export default App;

import React from 'react';

function SummaryPanel({ state }) {
    const readLeafNodes = [];
    const writeLeafNodes = [];

    for (const [id, node] of Object.entries(state)) {
        const isLeaf = node.children.length === 0;
        if (!isLeaf) continue;

        if (node.read) readLeafNodes.push(id);
        if (node.write) writeLeafNodes.push(id);
    }

    return (
        <div style={{ marginTop: '2rem' }}>
            <h3>Résumé des permissions</h3>

            <div>
                <strong>Lire :</strong>
                <ul>
                    {readLeafNodes.map(id => (
                        <li key={id}>{state[id].name}</li>
                    ))}
                </ul>
            </div>

            <div>
                <strong>Modifier :</strong>
                <ul>
                    {writeLeafNodes.map(id => (
                        <li key={id}>{state[id].name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SummaryPanel;

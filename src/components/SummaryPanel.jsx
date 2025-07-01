import React from 'react';
import './PermissionsTable.css';

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
        <div className="summary-panel">
            <h3>Résumé des permissions</h3>
            <div className="summary-columns">
                <div className="summary-column">
                    <strong>Permission de voir les brouillons :</strong>
                    <ul>
                        {readLeafNodes.map(id => (
                            <li key={id}>{state[id].name}</li>
                        ))}
                    </ul>
                </div>
                <div className="summary-column">
                    <strong>Permission de modifier les brouillons :</strong>
                    <ul>
                        {writeLeafNodes.map(id => (
                            <li key={id}>{state[id].name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SummaryPanel;

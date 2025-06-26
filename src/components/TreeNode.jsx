import React, { useState } from 'react';

function TreeNode({ node, depth }) {
    const [expanded, setExpanded] = useState(false);
    const [readChecked, setReadChecked] = useState(false);
    const [writeChecked, setWriteChecked] = useState(false);

    const hasChildren = node.children && node.children.length > 0;

    return (
        <>
            <tr>
                {/* Nom + indentation + chevron */}
                <td style={{ paddingLeft: `${depth * 20}px` }}>
                    {hasChildren && (
                        <button
                            onClick={() => setExpanded(!expanded)}
                            style={{ marginRight: 8 }}
                        >
                            {expanded ? '▼' : '▶'}
                        </button>
                    )}
                    {node.name}
                </td>

                {/* Checkbox Lire */}
                <td style={{ textAlign: 'center' }}>
                    <input
                        type="checkbox"
                        checked={readChecked}
                        onChange={() => setReadChecked(!readChecked)}
                    />
                </td>

                {/* Checkbox Modifier */}
                <td style={{ textAlign: 'center' }}>
                    <input
                        type="checkbox"
                        checked={writeChecked}
                        onChange={() => setWriteChecked(!writeChecked)}
                    />
                </td>
            </tr>

            {/* Affichage récursif */}
            {expanded &&
                hasChildren &&
                node.children.map(child => (
                    <TreeNode key={child.id} node={child} depth={depth + 1} />
                ))}
        </>
    );
}

export default TreeNode;

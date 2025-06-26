// 📄 src/components/TreeNode.jsx
import React, { useState } from 'react';

function TreeNode({ node, depth, state, dispatch }) {
    const [expanded, setExpanded] = useState(false);
    const nodeState = state[node.id];

    const hasChildren = node.children && node.children.length > 0;

    const handleCheckboxChange = (permission, value) => {
        dispatch({
            type: 'TOGGLE_PERMISSION',
            nodeId: node.id,
            permission,
            value,
        });
    };

    return (
        <>
            <tr>
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

                <td style={{ textAlign: 'center' }}>
                    <input
                        type="checkbox"
                        checked={nodeState.read}
                        onChange={(e) =>
                            handleCheckboxChange('read', e.target.checked)
                        }
                    />
                </td>

                <td style={{ textAlign: 'center' }}>
                    <input
                        type="checkbox"
                        checked={nodeState.write}
                        onChange={(e) =>
                            handleCheckboxChange('write', e.target.checked)
                        }
                    />
                </td>
            </tr>

            {expanded &&
                hasChildren &&
                node.children.map(child => (
                    <TreeNode
                        key={child.id}
                        node={child}
                        depth={depth + 1}
                        state={state}
                        dispatch={dispatch}
                    />
                ))}
        </>
    );
}

export default TreeNode;

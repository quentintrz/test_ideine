import React, { useState } from 'react';

function TreeNode({ node }) {
    const [expanded, setExpanded] = useState(false);

    const hasChildren = node.children && node.children.length > 0;

    return (
        <div style={{ marginLeft: 20 }}>
            <div>
                {hasChildren && (
                    <button onClick={() => setExpanded(!expanded)} style={{ marginRight: 8 }}>
                        {expanded ? '▼' : '▶'}
                    </button>
                )}
                {node.name}
            </div>

            {expanded && hasChildren && (
                <div>
                    {node.children.map(child => (
                        <TreeNode key={child.id} node={child} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default TreeNode;

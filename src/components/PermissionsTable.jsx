// 📄 src/components/PermissionsTable.jsx
import React from 'react';
import TreeNode from './TreeNode';
import sectorisation from '../data/sectorisation.json';
import { usePermissionsReducer } from '../hooks/usePermissionsReducer';

function PermissionsTable() {
    const root = sectorisation.data.roots[0];
    const [state, dispatch] = usePermissionsReducer(root);

    return (
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
            <tr>
                <th></th>
                <th>Lire</th>
                <th>Modifier</th>
            </tr>
            </thead>
            <tbody>
            <TreeNode node={root} depth={0} state={state} dispatch={dispatch} />
            </tbody>
        </table>
    );
}

export default PermissionsTable;

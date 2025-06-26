import React from 'react';
import TreeNode from './TreeNode';
import sectorisation from '../data/sectorisation.json';

function PermissionsTable() {
    const root = sectorisation.data.roots[0];

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
            <TreeNode node={root} depth={0} />
            </tbody>
        </table>
    );
}

export default PermissionsTable;

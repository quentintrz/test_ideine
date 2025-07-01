// 📄 src/components/PermissionsTable.jsx
import React from 'react';
import TreeNode from './TreeNode';
import sectorisation from '../data/sectorisation.json';
import { usePermissionsReducer } from '../hooks/usePermissionsReducer';
import SummaryPanel from "./SummaryPanel";

function PermissionsTable() {
    const root = sectorisation.data.roots[0];
    const [state, dispatch] = usePermissionsReducer(root);
    console.log('État complet :', state);


    return (
        <>
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
            <SummaryPanel state={state} />
        </>

    );
}

export default PermissionsTable;

// 📄 src/hooks/usePermissionsReducer.js
import { useReducer, useEffect } from 'react';

function buildInitialState(node, parentId = null, state = {}) {
    state[node.id] = {
        read: false,
        write: false,
        children: node.children?.map(child => child.id) || [],
        parent: parentId,
    };
    node.children?.forEach(child => buildInitialState(child, node.id, state));
    return state;
}

function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_PERMISSION': {
            const { nodeId, permission, value } = action;
            const newState = { ...state };

            function applyToChildren(id) {
                newState[id] = {
                    ...newState[id],
                    [permission]: value,
                };
                newState[id].children.forEach(childId => applyToChildren(childId));
            }

            applyToChildren(nodeId);

            return newState;
        }

        default:
            return state;
    }
}

export function usePermissionsReducer(rootNode) {
    const [state, dispatch] = useReducer(reducer, {}, () =>
        buildInitialState(rootNode)
    );

    return [state, dispatch];
}

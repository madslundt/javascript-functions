import { ITree, getListToTree } from './tree';

const list = [
    {
        id: 1,
        parentId: null,
    },
    {
        id: 2,
        parentId: 1,
    },
    {
        id: 3,
        parentId: 2,
    },
    {
        id: 4,
        parentId: 3,
    },
    {
        id: 5,
        parentId: 4,
    },
    {
        id: 6,
        parentId: 5,
    },
    {
        id: 7,
        parentId: 6,
    },
    {
        id: 8,
        parentId: 7,
    },
    {
        id: 9,
        parentId: 8,
    },
    {
        id: 10,
        parentId: 1,
    },
    {
        id: 11,
        parentId: 2,
    },
];

getListToTree(list, 'id', 'parentId', null, 4 );

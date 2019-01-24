const route = [
    {
        path: '/message',
        component: () => import('../pages/message')
    }
]
// const route = [
//     {
//         path: '/message',
//         component: () => import('../pages/message')
//     },
//     {
//         path: '/message/kid',
//         component: () => import('../pages/home')
//     }
// ]
// const route = [
//     {
//         path: '/message',
//         component: () => import('../pages/message'),
//         children: [
//             {
//                 path: 'kid',
//                 component: () => import('../pages/home')
//             }
//         ]

//     },
//     {
//         path: '/message/kid',
//         components: {
//             default: () => import('../pages/message'),
//             kid: () => import('../pages/home')
//         }

//     }
// ]
export default route;

const route = [
    {
        path: '/news',
        component: () => import('../pages/news')
    },
    {
        path:'/news/public',
        component: () => import('../pages/news/publicnews')
    }
]
export default route;
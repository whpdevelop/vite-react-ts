import React ,{ lazy } from 'react';
import { Route } from 'react-router-dom'

export interface IRoutes {
    path:string
    component:any
    routes?:IRoutes[]
    title?:{
        router?:string
        titleText?:string
        shareStatus?:boolean
    }
}
let {baseRouterUrl} = constConfig

export const routes:IRoutes[] = [
    {
        path:`${baseRouterUrl}/index`,
        component:lazy(() => import('@/Pages/Index')),
    },
    {
        path:`${baseRouterUrl}/webpack`,
        component:lazy(() => import('@/Pages/Webpack')),
    },
    {
        path:`${baseRouterUrl}/vite`,
        component:lazy(() => import('@/Pages/Vite')),
    },
    {
        path:`${baseRouterUrl}/node`,
        component:lazy(() => import('@/Pages/Node')),
    }
    // {
    //     path:`${baseRouterUrl}/luckdraw`,
    //     component:lazy(() => import('@/Pages/Luckdraw/Index')),
    //     routes:[
    //         {
    //             path:`${baseRouterUrl}/luckdraw/index`,
    //             component:lazy(() => import('@/Pages/Luckdraw/Luckdraw')),
    //             title:{
    //                 router:``,
    //                 titleText:l('l1_2'),
    //                 shareStatus:true
    //             }
    //         },
    //         {
    //             path:`${baseRouterUrl}/luckdraw/record`,
    //             component:lazy(() => import('@/Pages/Luckdraw/views/DrawRecord')),
    //             title:{
    //                 router:`${baseRouterUrl}/luckdraw/index`,
    //                 titleText:l('l1_1')
    //             }
    //         }
    //     ]
    // }
]
export const RouteWithSubRoutes = (route:IRoutes) => {
    return (
        <Route
            path={route.path}
            render={(props:any) => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    )
}

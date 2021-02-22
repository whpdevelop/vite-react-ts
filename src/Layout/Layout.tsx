
import React , { Suspense } from 'react';
import { Switch } from 'react-router-dom'
import {RouteWithSubRoutes,routes,IRoutes} from '@/Routes'
import Loading from '@/Layout/Component/Loading'
import Header from './Component/Header'
const Layout = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<Loading />}>
                <Switch>
                    {
                        routes.map((item:IRoutes,index:number)=><RouteWithSubRoutes key={index} {...item} />)
                    }
                </Switch>
            </Suspense>
        </>
    )
}
export default Layout;

import React from 'react'
import { useHistory } from 'react-router-dom'
const {baseRouterUrl} = constConfig
const Header = ()=>{
    let { push } = useHistory()
    return (
        <>
            <br/>
            <br/>
            <br/>
            <div className="flex flex-tc">
                <div onClick={()=>push(`${baseRouterUrl}/index`)}>index</div>
                &emsp;
                <div onClick={()=>push(`${baseRouterUrl}/webpack`)}>webpack</div>
                &emsp;
                <div onClick={()=>push(`${baseRouterUrl}/vite`)}>vite</div>
                &emsp;
                <div onClick={()=>push(`${baseRouterUrl}/node`)}>node</div>
            </div>
            <br/>
        </>
    )
}
export default Header
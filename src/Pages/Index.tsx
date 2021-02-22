import React from 'react'
import './style.scss'
import { useSelector,useDispatch } from 'react-redux'
import {img1} from '@/images'
const Index = () => {
    let dispatch = useDispatch()
    let store = useSelector((state:any)=>{
        let {locale} = state.globalReducer
        return {locale}
    })
    let clickFn = (param:string) =>{
        dispatch({type:'LOCALE',payLoad:param})
    }
    return (
        <div className="tc">
            <br/>
            <br/>
            <h1 style={{textAlign:'center'}}>{store.locale}</h1>
            <br/>
            <div>
                <button onClick={()=>clickFn('zh-CN')}>zh-CN</button>
                &emsp;
                <button onClick={()=>clickFn('zh-TW')}>zh-TW</button>
                &emsp;
                <button onClick={()=>clickFn('en-US')}>en-US</button>
                &emsp;
                <button onClick={()=>clickFn('vi-VN')}>vi-VN</button>
            </div>
            <br/>
            <div>{l('t1')} {l('t2')}</div>
            <br/>
            <img className="m00" src={img1} alt=""/>
        </div>
    )
}
export default Index
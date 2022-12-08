import React, { useState } from "react";
import Button from "./Buttons.js";
import Screen from "./Screen.js";
import Title from "./Title.js";




function Calculator() {

    const [ans,setAns] = useState(0);

    function abc(a){
        setAns(ans +""+ a);
    }
    
    function clr(){
        setAns('');
    }

    function equal(){
        setAns(eval(ans));
    }
    function del(){
        setAns(ans - ans);
    }
    return (

        <div className="layout">
            <Title value="Zia and Abeeras Calculator" />
            <Screen as={ans}></Screen>
            <div className="buttons-layout">
                <Button label={'0'} cli={()=>{abc(0)}}  />
                <Button label={'1'} cli={()=>{abc(1)}}  />
                <Button label={'2'} cli={()=>{abc(2)}}  />
            </div>
            <div className="buttons-layout">
                <Button label={'3'} cli={()=>{abc(3)}}/>
                <Button label={'4'} cli={()=>{abc(4)}}/>
                <Button label={'5'} cli={()=>{abc(5)}}/>
            </div>
            <div className="buttons-layout">
                <Button label={'6'} cli={()=>{abc(6)}}/>
                <Button label={'7'} cli={()=>{abc(7)}}/>
                <Button label={'8'} cli={()=>{abc(8)}}/>
            </div>
            <div className="buttons-layout">
                <Button label={'9'} cli={()=>{abc(9)}}/>
                <Button label={'+'} cli={()=>{abc('+')}}  />
                <Button label={'-'} cli={()=>{abc('-')}}/>
            </div>
            <div className="buttons-layout">
                <Button label={'*'} cli={()=>{abc('*')}}/>
                <Button label={'/'} cli={()=>{abc('/')}}/>
                <Button label={'='} cli={()=>{equal()}}  />
            </div>
            <div className="buttons-layout">
                <Button label={'.'} cli={()=>{abc('.')}}/>
                <Button label={'Clear'} cli={()=>{clr()}}/>
                <Button label={'Delete'} cli={()=>{del()}}/>
            </div>
        </div>
    );
}

export default Calculator;
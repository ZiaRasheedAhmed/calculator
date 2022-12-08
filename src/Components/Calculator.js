import React from "react";
import Button from "./Buttons.js";
import Screen from "./Screen.js";
import Title from "./Title.js";




class Calculator extends React.Component {
    
        render() {
        return (
            <div className="layout">
                <Title value="Calculator" />
                <Screen></Screen>
                <div className="buttons-layout">
                    <Button label={'0'} />
                    <Button label={'1'} />
                    <Button label={'2'} />
                </div>
                <div className="buttons-layout">
                    <Button label={'3'} />
                    <Button label={'4'} />
                    <Button label={'5'} />
                </div>
                <div className="buttons-layout">
                    <Button label={'6'} />
                    <Button label={'7'} />
                    <Button label={'8'} />
                </div>
                <div className="buttons-layout">
                    <Button label={'9'} />
                    <Button label={'+'} />
                    <Button label={'-'} />
                </div>
                <div className="buttons-layout">
                    <Button label={'*'} />
                    <Button label={'/'} />
                    <Button label={'='} />
                </div>
                <div className="buttons-layout">
                    <Button label={'.'} />
                    <Button label={'Clear'} />
                    <Button label={'Delete'} />
                </div>
            </div>
        );
    }
}
export default Calculator;
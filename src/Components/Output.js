import React from "react";

function Output(a){
    return (
        <div className="outputScreen">
            <input type="text" readOnly /> {/* we used read only so the user can't modify the value run time */}
        </div>
    )
}
export default Output;
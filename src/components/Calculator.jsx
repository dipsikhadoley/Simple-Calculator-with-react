import React, { useState } from 'react'
import './Calculator.css'
const Calculator = () => {
    const [value, setValue] = useState('');
    function handle(e) {
        setValue(value + e.target.innerHTML)
    }
    function equal() {
        setValue(eval(value))
    }
    function Ac() {
        setValue("")
    }
    function Ac() {
        setValue("")
    }
    function dell() {
        setValue(value.toString().slice(0, -1))
    }

    return (
        <>
            <div className='container'>
                <div className='screen'>
                    <div className="previous">

                    </div>
                    <div className="current">
                        {value}
                    </div>

                </div>

                <button onClick={Ac}>AC</button>

                <button onClick={dell} >
                    DEL
                </button>
                <button onClick={handle}>
                    %
                </button>

                <button onClick={handle}>
                    /
                </button>
                <button onClick={handle}>
                    7
                </button>
                <button onClick={handle}>
                    8
                </button>
                <button onClick={handle}>
                    9
                </button>
                <button onClick={handle} >
                    *
                </button>
                <button onClick={handle}>
                    4
                </button>
                <button onClick={handle}>
                    5
                </button>
                <button onClick={handle}>
                    6
                </button>
                <button onClick={handle}>
                    +
                </button>
                <button onClick={handle}>
                    1
                </button>
                <button onClick={handle}>
                    2
                </button>
                <button onClick={handle}>
                    3
                </button>
                <button onClick={handle} >
                    -
                </button>
                <button onClick={handle}>
                    00
                </button>
                <button onClick={handle}>
                    0
                </button>

                <button onClick={handle}>
                    .
                </button>
                <button onClick={equal}>
                    =
                </button>





            </div>
        </>
    )
}

export default Calculator
import React, {useState} from 'react'
import {Button} from 'antd'
// export default function HelloWord () {
//     const [buttonText, setButtonText] = useState('Click me');

//     function handleClick () {
//         return setButtonText('been Clicked');
//     }
//     return <Button onClick={handleClick} >{buttonText}</Button>
// }

class HelloWord extends React.Component {
    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
            </div>
        )
    }
}

export default HelloWord


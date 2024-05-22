import * as React from 'react';

interface Item {
    name : string;
    price : number;
}

interface CheckBoxProps{
    name : string;
    price : number;
    isChecked : boolean;
    onChange : () => void;
}

const App4:React.FC = () => {
    return(
        <div>
            <h1>Total : </h1>
        </div>
    );
}

const Checkbox:React.FC<CheckBoxProps> = ({name, price, isChecked, onChange}) => {
    return (
        <div>
            <label><input type="checkbox" />{name}</label>
        </div>
    );
}
export default App4;
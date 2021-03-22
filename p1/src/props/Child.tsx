import {FC} from 'react';

interface ChildProps {
    color: string;
    onClick: () => void;
}

export const Child: FC<ChildProps> = ({color, onClick, children}) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>Click me!</button>
            {children}
        </div>
    )
}
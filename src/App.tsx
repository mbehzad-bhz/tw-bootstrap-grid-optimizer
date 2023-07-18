import {Example2} from "./Examples/Example2";
import {Example1} from "./Examples/Example1";
import {Example3} from "./Examples/Example3";
import {Example4} from "./Examples/Example4";
import {Example5} from "./Examples/Example5";
import { Example6 } from "./Examples/Example6";


function App() {
    return (
        <>
            <h1 className={'text-center mt-2'}>Usage of tw-bootstrap-grid-optimize</h1>
            <div className={'container space-y-8 mt-10 mb-16'}>
                <Example1 />
                <div className={'h-1 w-full bg-gray-300'}></div>
                <Example2 />
                <div className={'h-1 w-full bg-gray-300'}></div>
                <Example3 />
                <div className={'h-1 w-full bg-gray-300'}></div>
                <Example4 />
                <div className={'h-1 w-full bg-gray-300'}></div>
                <Example5 />
                <div className={'h-1 w-full bg-gray-300'}></div>
                <Example6 />
            </div>
        </>
    )
}

export default App

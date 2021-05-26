import React from "react";
import AppFlags, {useFlag} from "appflags-react";

const user = {
    key: Math.random().toString()  // key should be a non-changing string representing your user, like an ID or email
}
AppFlags.initialize("YOUR_KEY_HERE", user);

function App() {
    const flag = useFlag("test");

    return (
        <div>
            <h2>AppFlags React Example</h2>
            <div>
                { flag === undefined ?
                    "Initializing..." :
                    "The feature is " + (flag.value ? "enabled" : "disabled")
                }
            </div>
        </div>
    );
}

export default App;

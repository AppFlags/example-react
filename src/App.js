import React from "react";
import AppFlags, {useFlag} from "appflags-react";

AppFlags.initialize("YOUR_KEY_HERE");

function App() {
    const enabled = useFlag("test");

    return (
        <div>
            <h2>AppFlags React Example</h2>
            <div>
                { enabled === undefined ?
                    "Initializing..." :
                    "The feature is " + (enabled ? "enabled" : "disabled")
                }
            </div>
        </div>
    );
}

export default App;

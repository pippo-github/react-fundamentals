const IntroBlock = () =>{
    return (
        <div>
            <h1>
                Click Event diff page
            </h1>

            <div>
                <p>
                    React produces asynchronous updates for UI elements.
                </p>
                <p>
                    This page demonstrates how instead the events are controlled by the framework in a synchronous way differently  from what one might think.
                </p>

                <p>
                    To verify this behavior, press several times on the synchronous key, after two seconds it will carry out the increase, not taking into account how many times this has been pressed, the increase will always be one unit, then carry out the same operation on the another key, this instead after the delay executes the increment of the variable every time it has been clicked.
                </p>
            </div>
        </div>
    )
}

export default IntroBlock;
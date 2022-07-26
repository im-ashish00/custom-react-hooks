# Useful Custom React Hooks

A Hook is a special function that lets you “hook into” React features and these custom hooks saves lots of time by performing specific tasks.

#### useToogle 
- It works just the same as useState returns a value and toggleValue function.
- toggleValue function gives toggledValue if the value passed is a boolean.

#### useTimeout
- It sets the timeout, works the same as setTimeout.
- It gives the reset and clear function, works without it too.

#### useDebounce 
- It restricts the function calls for performance boost.
- If anything changes within the delay period it resets the timer and holds on to calling a callback.

#### useUpdateEffect 
- Works the same as useEffect but it doesn't run on the first call.

#### useArray 
- Some useful array operations which get used over and over again.
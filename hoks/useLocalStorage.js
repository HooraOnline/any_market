import {useState} from "react";

function returnInitialState(storageKey,defaultValue) {
    try {
        // Get from local storage by key
        const item = window.localStorage.getItem(storageKey);
        // Parse stored json or if none return an empty object
        return item ? JSON.parse(item) : defaultValue
    } catch (error) {
        // If error also return an empty object
        console.log(error);
        return defaultValue;
    }
}

export function useLocalStorage(storageKey,defaultValue) {
    const [storedValue, setStoredValue] = useState(
        returnInitialState(storageKey,defaultValue)
    );

    const setValue = (value) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;

            // Save to local storage
            window.localStorage.setItem(storageKey, JSON.stringify(valueToStore));
            // Save state
            setStoredValue(valueToStore);
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };

    return [storedValue, setValue]
}
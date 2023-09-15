import {useState} from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)){
    const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
        if(jsonValue == null) {
            if(typeof initialValue === "function"){
                return (initialValue as () => T)();
                // initial value koo function baanake call krra hai 
            }else {
                return initialValue;
            }
        }else {
            return JSON.parse(jsonValue);
        }
    })
    return [value, setValue] as [T, typeof setValue]
}
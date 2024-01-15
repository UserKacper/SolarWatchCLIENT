import { Dispatch, SetStateAction, ChangeEvent } from "react";

type SetState<T> = Dispatch<SetStateAction<T>>;

export function handleInputChange<T>(
    e: ChangeEvent<HTMLInputElement>,
    setState: SetState<T>
): void {
    const { id, value } = e.target;
    setState((prevData) => ({
        ...prevData,
        [id]: value,
    }));
}

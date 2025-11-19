import {FormEvent} from "react";

export interface FormsProps{
    fun: (event: FormEvent<HTMLFormElement>) => void | Promise<void>;
}
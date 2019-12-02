import * as React from "react"
import { useHistory } from "react-router";

const history = useHistory()

export function goto(path: string) {
    history.push(path)
}
import { RouterProps } from "react-router";
import { IMapedDispatch, IMapedState } from "./redux";

export type IPageBaseProps = RouterProps & IMapedDispatch & IMapedState
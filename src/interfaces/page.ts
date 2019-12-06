import { RouterProps } from "react-router";
import { IMapedDispatch, IMapedState } from "./redux";
import { ReduxStateType } from "./state";

export type IPageBaseProps = RouterProps & ReduxStateType
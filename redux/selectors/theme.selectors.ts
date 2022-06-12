import { RootState } from "../store";

export const GetCurrentTheme = (state:RootState) => {
    return state.theme.name
}
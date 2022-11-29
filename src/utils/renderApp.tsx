import {Provider} from "react-redux";
import {createStore} from "../store/createStore";
import {render} from "@testing-library/react";
import {DeepPartial} from "@reduxjs/toolkit";
import {StoreState} from "../store/rootReducer";

export function renderApp(ui: Parameters<typeof render>[0], preloadedState: DeepPartial<StoreState> = {}) {
    const store = createStore(preloadedState);
    return render(
        <Provider store={store}>
            {ui}
        </Provider>
    )
}

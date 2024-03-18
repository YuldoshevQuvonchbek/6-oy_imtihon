import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import { saveState } from "../config/store";
import { likeredusser } from "./reduser/likeredusser";
import { removiLIkeitem, likeCount, likeAddItem } from "./reduser/likeredusser";

const storageMiddleware = createListenerMiddleware();

storageMiddleware.startListening({
  matcher: isAnyOf(likeAddItem, removiLIkeitem),
  effect: (_, api) => {
    api.dispatch(likeCount());
    // api.dispatch(addLikeItem());
    // api.dispatch(removeLikeItem());
  },
});

export const store = configureStore({
  reducer: {
    like: likeredusser,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().prepend(storageMiddleware.middleware),
});

store.subscribe(() => {
  saveState("like", store.getState().like);
});

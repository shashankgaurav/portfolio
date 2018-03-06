import { watchFirstSaga } from "./firstSaga/firstSaga";

export function* sagas() {
    yield [
        watchFirstSaga()
    ]
}
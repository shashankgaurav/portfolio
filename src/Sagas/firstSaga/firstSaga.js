import { takeEvery } from "redux-saga";
import { put } from "redux-saga/effects"

import { FIRST_ACTION } from "../../Constants/Constant";

export function* watchFirstSaga() {
   yield takeEvery(FIRST_ACTION, firstSaga)
}

function* firstSaga(){
    try{
       console.log("Saga is working");
    } catch(error){

    }
}
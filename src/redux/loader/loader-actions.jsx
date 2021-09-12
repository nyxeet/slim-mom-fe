/* eslint-disable import/no-anonymous-default-export */
import { createAction } from "@reduxjs/toolkit";

const loaderOn = createAction("loader/loaderOn");
const loaderOff = createAction("loader/loaderOff")

export default {
   loaderOn,
   loaderOff
}
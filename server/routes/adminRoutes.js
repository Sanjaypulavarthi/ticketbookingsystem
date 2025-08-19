import express from "express";
import {protectAdmin} from "../middleware/auth.js"
import { getAllBookings, getAllShows, getDashbardData, isAdmin } from "../controllers/adminController";

const adminRouter=express.Router();

adminRouter.get('/is-admin',protectAdmin,isAdmin)
adminRouter.get('/dashboard',protectAdmin,getDashbardData)
adminRouter.get('/all-shows',protectAdmin,getAllShows)
adminRouter.get('/all-bookings',protectAdmin,getAllBookings)

export default adminRouter;
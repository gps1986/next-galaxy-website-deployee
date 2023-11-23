import { connect } from "@/dbConfig/dbConfig";
import Booking from "@/app/models/Bookingweb";
import { NextResponse } from "next/server";





connect()


export async function POST(request) {
    try {
        const reqBody = await request.json()
        // const reqBody = await request.json()
        //const {name, password} = reqBody
        const { username, mobile, email, pickupFrom, deliveryTo, shiftingDate, bookingType, subBookingType } = reqBody
        const newBooking = new Booking({
            username,
            mobile,
            email,
            pickupFrom,
            deliveryTo,
            shiftingDate,
            bookingType,
            subBookingType,

        });

        //console.log(newBooking);


        // const newUser = new User({

        //     email,
        //     password
        // })
        const savedUser = await newBooking.save();

        //const savedUser = await newUser.save()
       // console.log(savedUser);

        //send verification email



        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })




    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}
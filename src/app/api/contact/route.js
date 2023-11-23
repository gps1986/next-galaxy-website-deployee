import { connect } from "@/dbConfig/dbConfig";
import Contact from "@/app/models/Contact";
import { NextResponse } from "next/server";

connect()

export async function POST(request) {
    try {
      const reqBody = await request.json();
      const { name, email, phone, message } = reqBody;
  
      // Custom validation for email format
    //   if (!/\S+@\S+\.\S+/.test(email)) {
    //     return NextResponse.json({
    //       error: 'Invalid Email Address',
    //     }, {
    //       status: 400,
    //     });
    //   }
  
      // Custom validation for phone number format
    //   if (!/^\+?[0-9\s]+$/i.test(phone)) {
    //     return NextResponse.json({
    //       error: 'Invalid Phone Number',
    //     }, {
    //       status: 400,
    //     });
    //   }
  
      const newBooking = new Contact({
        name,
        email,
        phone,
        message,
      });
  
      //console.log(newBooking);
  
      const savedBooking = await newBooking.save();
      //console.log(savedBooking);
  
      return NextResponse.json({
        message: 'Booking submitted successfully',
        success: true,
        savedBooking,
      });
  
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
import { Appointment } from "../model/appointmentModel.js"
export const bookAppo = async(req,res)=>{
    try {
        console.log(req.body)
        const {name,phoneNumeber,drName,address,clinicName,date} = req.body

        const appo = await Appointment.findOne({name:name})
        if(appo){
            if(appo.drName===drName){
                return res.status(401).json({
            message:"already booked",
            success:false
        })
            }
        }
        const newAppo = await Appointment.create({
              name,
              phoneNumber:phoneNumeber,
              drName,
              address,
              clinicName,
              date
            });
            return res.status(201).json({
      message:"Appoinment booked successfully",
      Appo:newAppo,
      success:true
    })
    } catch (error) {
        console.log(error)
        return res.status(402).json({
            message:"something error",
            success:false
        })
    }
}

export const getBookings = async(req,res)=>{
    try {
        const {name} = req.params
        console.log(name)
        const bookings = await Appointment.find({name:name})
        const doctors = bookings.map(booking =>booking.drName)
        
        for(var i = 0 ;i<doctors.length;i++){
             console.log(doctors[i])
        }
        if(!bookings){
            res.send(401).json({
            message:"no bookings or wrong id"
        })
        }
        return res.status(200).json({bookings:bookings})
    } catch (error) {
        console.log("get booking error : ",error);
        res.send(404).json({
            message:"booking error"
        })
    }
}
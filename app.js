
const express = require('express')
const sid = 'sid'
const auth_token = 'auth_token'

const twilio = require('twilio')(sid,auth_token)




twilio.messages.create({
    from: "+Twilio_Number",
    to:"+91Mobile_Number",
    body:" This is an Testing message from Sanjai Ragul Murugesan's Server"
})
.then((response)=>{
    console.log(response,'Mesaage Has Sent')
})
.catch((err)=>{
    console.log(err)
})
import axios from "axios";


export default async (req, res) => {
 let resp = await new axios(`${req.protocol}://wwf-jr.herokuapp.com/contact`, {
   method:"POST",
    data: {
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      msg: req.body.message
    }
  })
  if(resp.data.success){
    res.redirect(303, "/contact?success=true")
  }else{
    console.log(resp.data.message)
    res.redirect(303, "/contact?success=false")
  }
}
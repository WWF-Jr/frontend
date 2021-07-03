export default (req, res) => {
  console.log(req.body)  // The form data
  /*
  * This section would contain the operations to send a request 
  * to the backend server for adding the message to the Database 
  * and Mailing it to the admins.
  */
  res.redirect(303, "/contact?success=true")
}
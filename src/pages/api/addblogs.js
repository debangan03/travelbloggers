import Blog from "../../../Models/Blog";
import conndb from "../../../Middlewire/mongoose";
const handler = async(req,res)=>{

   if(req.method=='POST'){
    try {
        console.log(req.body);
        const blogres =  new Blog(req.body);
        const blogs = await blogres.save();
        res.status(201).json({success:true,blogs})
    } catch (error) {
        res.status(400).send({success:false,error:error})
    }
   }
   else{
    res.status(400).send({success:false,error: 'error method'})
   }
}
export default conndb(handler);
import Blog from "../../../Models/Blog";
import conndb from "../../../Middlewire/mongoose";
const handler = async(req,res)=>{
   if(req.method=='GET'){
    try {
        const blogs =  await Blog.find();

        res.status(201).json({blogs})
    } catch (error) {
        res.status(400).send({error: 'error '})
    }
   }
   else{
    res.status(400).send({error: 'error method'})
   }
}
export default conndb(handler);
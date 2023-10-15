import { stripe } from "../../../utils/stripe";


export async function POST(req,res){
    const body = await req.json()
    try{
       const session = await stripe.checkout.sessions.create({
        line_items: body,
        mode: 'payment',
        success_url: `${req.headers.get('origin')}/cart?success=true`,
        cancel_url: `${req.headers.get('origin')}/cart?canceled=true`,
      });  
      return Response.json({session_url:session.url})
    }catch(err){
        console.log("ERROR while CHECKOUT:",err)
        return Response.json({error:"Internal server error"},{status:500})
    }

}
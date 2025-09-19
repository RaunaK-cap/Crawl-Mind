import { mutation } from "./_generated/server"
import { v, VString} from "convex/values"

export const storeEmbeddings = mutation({
   args:{
    Text_chunks : v.string(),
    Vectors:v.array(v.float64()),
    source:v.string(),
   },
   handler:async(ctx, args)=>{
    await ctx.db.insert("Embedding_vectors" , {
        Text_Chunk: args.Text_chunks,
        Vectors:args.Vectors,
        source:args.source,
        CreatedAt:Date.now()
    })
   }
})

export const storeUsersData = mutation({
    args:{
        UserID:v.string(),
        Email:v.string(),
        Firstname:v.string(),
        Lastname:v.string(),
        CreatedAt:v.number()
    },
    
    handler:async(ctx , args)=>{
        await ctx.db.insert("UserSchema" , {
            UserID:args.UserID,
            Email:args.UserID,
            Firstname:args.Firstname,
            Lastname:args.Lastname,
            CreatedAt:Date.now()
            
        })
    }
})
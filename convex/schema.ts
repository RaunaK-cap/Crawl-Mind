import { defineSchema , defineTable} from "convex/server"
import { v} from "convex/values"

export default  defineSchema({

    UserSchema:defineTable({
        UserID:v.string(),
        Email:v.string(),
        Firstname:v.string(),
        Lastname:v.string(),
        CreatedAt:v.number()
    }),

    Embedding_vectors : defineTable({
        Text_Chunk: v.string(),             //text chunks 
        Vectors:v.array(v.float64()),       // vector embeddings of the text chunks 
        source:v.string(),                  // urls ,
        CreatedAt:v.number()                //created time 
    }).vectorIndex("by_embedding" , {
        vectorField:"Vectors",              // Give  your stored vector access
        dimensions:1536                     // Check the open AI embedding models dimensions 
    })
})
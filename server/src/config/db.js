import mongoose from "mongoose";

export const CONNECTDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB CONNECTED SUCCESSFULLY");
    } catch (error) {
        console.error("Error connecting to MONOGODB", error)
        process.exit(1)//exit with failure
    }
}
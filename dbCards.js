import mongoose from 'mongoose';

const carSchema = mongoose.Schema({
    name:String,
    imageUrl:String
})

export default mongoose.model('cards', carSchema);
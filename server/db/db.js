import mongoose from "mongoose";

const connectDB = async () => {
  const dbUrl = process.env.MONGO_URI;

  try {
    const mongooseConnect = await mongoose.connect(dbUrl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB Connected: ${mongooseConnect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;

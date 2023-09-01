import mongoose from "mongoose";

const connectDb = () => {
  // Your MongoDB connection URL
  const dbUrl = process.env.DB_URL;

  // Set up mongoose options to handle deprecation warnings and other configurations
  const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose
    .connect(dbUrl, mongooseOptions)
    .then(() => {
      console.log("🌐 MongoDB Connected");
    })
    .catch((error) => {
      console.error("❌ MongoDB Connection Error:", error.message);
    });

  // Event listener for successful connection
  mongoose.connection.on("connected", () => {
    console.log("🚀 Connected to MongoDB");
  });

  // Event listener for connection errors
  mongoose.connection.on("error", (error) => {
    console.error("❌ MongoDB Connection Error:", error);
  });

  // Event listener for connection disconnection
  mongoose.connection.on("disconnected", () => {
    console.warn("⚠️ Disconnected from MongoDB");
  });

  // Graceful shutdown on application termination
  process.on("SIGINT", async () => {
    try {
      await mongoose.connection.close();
      console.log("👋 MongoDB connection closed through app termination");
      process.exit(0);
    } catch (error) {
      console.error("❌ Error while closing MongoDB connection:", error);
      process.exit(1);
    }
  });
};

export default connectDb;

import mongoose from 'mongoose';

// connect to mongoDb database

const connectDB = async () => {
  mongoose.connection.on('connected', () =>
    console.log('Database connected successfully!')
  );
  await mongoose.connect(process.env.DATABASE_URL);
};
export default connectDB;

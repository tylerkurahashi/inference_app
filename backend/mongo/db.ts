import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    await connect('mongodb://root:nintendo@127.0.0.1:27018/', {
      dbName: 'models',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB connected..')
  } catch {
    console.log('error connecting to the DB')
  }
}

export default connectDB;
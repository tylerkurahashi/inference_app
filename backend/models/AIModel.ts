import { model, Schema } from 'mongoose';

interface AIModel {
  type: string;
  name: string;
  url: string
}

const AIModelSchema = new Schema<AIModel>({
  type: { type: String, required: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
});

const AIModel = model('aimodels', AIModelSchema);

export default AIModel;
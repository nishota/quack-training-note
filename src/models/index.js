// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Training, UserTrainingData, TrainingData, TrainingDataTraining } = initSchema(schema);

export {
  Training,
  UserTrainingData,
  TrainingData,
  TrainingDataTraining
};
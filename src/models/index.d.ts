import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerTraining = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Training, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Type: string;
  readonly Name: string;
  readonly trainingdatas?: (TrainingDataTraining | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTraining = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Training, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Type: string;
  readonly Name: string;
  readonly trainingdatas: AsyncCollection<TrainingDataTraining>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Training = LazyLoading extends LazyLoadingDisabled ? EagerTraining : LazyTraining

export declare const Training: (new (init: ModelInit<Training>) => Training) & {
  copyOf(source: Training, mutator: (draft: MutableModel<Training>) => MutableModel<Training> | void): Training;
}

type EagerUserTrainingData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserTrainingData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserName: string;
  readonly TrainingDataId?: (string | null)[] | null;
  readonly TrainingData?: (TrainingData | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserTrainingData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserTrainingData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserName: string;
  readonly TrainingDataId?: (string | null)[] | null;
  readonly TrainingData: AsyncCollection<TrainingData>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserTrainingData = LazyLoading extends LazyLoadingDisabled ? EagerUserTrainingData : LazyUserTrainingData

export declare const UserTrainingData: (new (init: ModelInit<UserTrainingData>) => UserTrainingData) & {
  copyOf(source: UserTrainingData, mutator: (draft: MutableModel<UserTrainingData>) => MutableModel<UserTrainingData> | void): UserTrainingData;
}

type EagerTrainingData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TrainingData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly TrainingId: string;
  readonly Count: number;
  readonly Weight: number;
  readonly At: string;
  readonly usertrainingdataID: string;
  readonly Trainings?: (TrainingDataTraining | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTrainingData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TrainingData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly TrainingId: string;
  readonly Count: number;
  readonly Weight: number;
  readonly At: string;
  readonly usertrainingdataID: string;
  readonly Trainings: AsyncCollection<TrainingDataTraining>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TrainingData = LazyLoading extends LazyLoadingDisabled ? EagerTrainingData : LazyTrainingData

export declare const TrainingData: (new (init: ModelInit<TrainingData>) => TrainingData) & {
  copyOf(source: TrainingData, mutator: (draft: MutableModel<TrainingData>) => MutableModel<TrainingData> | void): TrainingData;
}

type EagerTrainingDataTraining = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TrainingDataTraining, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly trainingId?: string | null;
  readonly trainingDataId?: string | null;
  readonly training: Training;
  readonly trainingData: TrainingData;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTrainingDataTraining = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TrainingDataTraining, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly trainingId?: string | null;
  readonly trainingDataId?: string | null;
  readonly training: AsyncItem<Training>;
  readonly trainingData: AsyncItem<TrainingData>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TrainingDataTraining = LazyLoading extends LazyLoadingDisabled ? EagerTrainingDataTraining : LazyTrainingDataTraining

export declare const TrainingDataTraining: (new (init: ModelInit<TrainingDataTraining>) => TrainingDataTraining) & {
  copyOf(source: TrainingDataTraining, mutator: (draft: MutableModel<TrainingDataTraining>) => MutableModel<TrainingDataTraining> | void): TrainingDataTraining;
}
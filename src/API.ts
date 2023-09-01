/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTrainingGoalInput = {
  id?: string | null,
  exerciseType: ExerciseTypeInput,
  targetWeight: number,
  targetReps: number,
  createdAt?: string | null,
  updatedAt?: string | null,
  resetAt: string,
  isActive: boolean,
  userDataID: string,
};

export type ExerciseTypeInput = {
  id: string,
  name: string,
  exerciseCategory?: string | null,
  category: string,
  createdAt: string,
  updatedAt: string,
  difficulty?: string | null,
};

export type ModelTrainingGoalConditionInput = {
  targetWeight?: ModelFloatInput | null,
  targetReps?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  resetAt?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  userDataID?: ModelIDInput | null,
  and?: Array< ModelTrainingGoalConditionInput | null > | null,
  or?: Array< ModelTrainingGoalConditionInput | null > | null,
  not?: ModelTrainingGoalConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type TrainingGoal = {
  __typename: "TrainingGoal",
  id: string,
  exerciseType: ExerciseType,
  targetWeight: number,
  targetReps: number,
  createdAt: string,
  updatedAt?: string | null,
  resetAt: string,
  isActive: boolean,
  userDataID: string,
};

export type ExerciseType = {
  __typename: "ExerciseType",
  id: string,
  name: string,
  exerciseCategory?: string | null,
  category: string,
  createdAt: string,
  updatedAt: string,
  difficulty?: string | null,
};

export type UpdateTrainingGoalInput = {
  id: string,
  exerciseType?: ExerciseTypeInput | null,
  targetWeight?: number | null,
  targetReps?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  resetAt?: string | null,
  isActive?: boolean | null,
  userDataID?: string | null,
};

export type DeleteTrainingGoalInput = {
  id: string,
};

export type CreateUserDataInput = {
  id?: string | null,
  userName?: string | null,
  exerciseTypes?: Array< ExerciseTypeInput | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelUserDataConditionInput = {
  userName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserDataConditionInput | null > | null,
  or?: Array< ModelUserDataConditionInput | null > | null,
  not?: ModelUserDataConditionInput | null,
};

export type UserData = {
  __typename: "UserData",
  id: string,
  userName?: string | null,
  trainings?: ModelTrainingConnection | null,
  exerciseTypes?:  Array<ExerciseType | null > | null,
  createdAt: string,
  updatedAt: string,
  trainingGoals?: ModelTrainingGoalConnection | null,
};

export type ModelTrainingConnection = {
  __typename: "ModelTrainingConnection",
  items:  Array<Training | null >,
  nextToken?: string | null,
};

export type Training = {
  __typename: "Training",
  id: string,
  exerciseType: ExerciseType,
  weight: number,
  reps: number,
  createdAt: string,
  updatedAt: string,
  userDataID: string,
  userName: string,
  previousId?: string | null,
};

export type ModelTrainingGoalConnection = {
  __typename: "ModelTrainingGoalConnection",
  items:  Array<TrainingGoal | null >,
  nextToken?: string | null,
};

export type UpdateUserDataInput = {
  id: string,
  userName?: string | null,
  exerciseTypes?: Array< ExerciseTypeInput | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserDataInput = {
  id: string,
};

export type CreateTrainingInput = {
  id?: string | null,
  exerciseType: ExerciseTypeInput,
  weight: number,
  reps: number,
  createdAt?: string | null,
  updatedAt?: string | null,
  userDataID: string,
  userName: string,
  previousId?: string | null,
};

export type ModelTrainingConditionInput = {
  weight?: ModelFloatInput | null,
  reps?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userDataID?: ModelIDInput | null,
  userName?: ModelStringInput | null,
  previousId?: ModelIDInput | null,
  and?: Array< ModelTrainingConditionInput | null > | null,
  or?: Array< ModelTrainingConditionInput | null > | null,
  not?: ModelTrainingConditionInput | null,
};

export type UpdateTrainingInput = {
  id: string,
  exerciseType?: ExerciseTypeInput | null,
  weight?: number | null,
  reps?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  userDataID?: string | null,
  userName?: string | null,
  previousId?: string | null,
};

export type DeleteTrainingInput = {
  id: string,
};

export type ModelTrainingGoalFilterInput = {
  id?: ModelIDInput | null,
  targetWeight?: ModelFloatInput | null,
  targetReps?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  resetAt?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  userDataID?: ModelIDInput | null,
  and?: Array< ModelTrainingGoalFilterInput | null > | null,
  or?: Array< ModelTrainingGoalFilterInput | null > | null,
  not?: ModelTrainingGoalFilterInput | null,
};

export type ModelUserDataFilterInput = {
  id?: ModelIDInput | null,
  userName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserDataFilterInput | null > | null,
  or?: Array< ModelUserDataFilterInput | null > | null,
  not?: ModelUserDataFilterInput | null,
};

export type ModelUserDataConnection = {
  __typename: "ModelUserDataConnection",
  items:  Array<UserData | null >,
  nextToken?: string | null,
};

export type ModelTrainingFilterInput = {
  id?: ModelIDInput | null,
  weight?: ModelFloatInput | null,
  reps?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userDataID?: ModelIDInput | null,
  userName?: ModelStringInput | null,
  previousId?: ModelIDInput | null,
  and?: Array< ModelTrainingFilterInput | null > | null,
  or?: Array< ModelTrainingFilterInput | null > | null,
  not?: ModelTrainingFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionTrainingGoalFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  targetWeight?: ModelSubscriptionFloatInput | null,
  targetReps?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  resetAt?: ModelSubscriptionStringInput | null,
  isActive?: ModelSubscriptionBooleanInput | null,
  userDataID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionTrainingGoalFilterInput | null > | null,
  or?: Array< ModelSubscriptionTrainingGoalFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionUserDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userName?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserDataFilterInput | null > | null,
};

export type ModelSubscriptionTrainingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  weight?: ModelSubscriptionFloatInput | null,
  reps?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userDataID?: ModelSubscriptionIDInput | null,
  userName?: ModelSubscriptionStringInput | null,
  previousId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionTrainingFilterInput | null > | null,
  or?: Array< ModelSubscriptionTrainingFilterInput | null > | null,
};

export type CreateTrainingGoalMutationVariables = {
  input: CreateTrainingGoalInput,
  condition?: ModelTrainingGoalConditionInput | null,
};

export type CreateTrainingGoalMutation = {
  createTrainingGoal?:  {
    __typename: "TrainingGoal",
    id: string,
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      exerciseCategory?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
      difficulty?: string | null,
    },
    targetWeight: number,
    targetReps: number,
    createdAt: string,
    updatedAt?: string | null,
    resetAt: string,
    isActive: boolean,
    userDataID: string,
  } | null,
};

export type UpdateTrainingGoalMutationVariables = {
  input: UpdateTrainingGoalInput,
  condition?: ModelTrainingGoalConditionInput | null,
};

export type UpdateTrainingGoalMutation = {
  updateTrainingGoal?:  {
    __typename: "TrainingGoal",
    id: string,
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      exerciseCategory?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
      difficulty?: string | null,
    },
    targetWeight: number,
    targetReps: number,
    createdAt: string,
    updatedAt?: string | null,
    resetAt: string,
    isActive: boolean,
    userDataID: string,
  } | null,
};

export type DeleteTrainingGoalMutationVariables = {
  input: DeleteTrainingGoalInput,
  condition?: ModelTrainingGoalConditionInput | null,
};

export type DeleteTrainingGoalMutation = {
  deleteTrainingGoal?:  {
    __typename: "TrainingGoal",
    id: string,
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      exerciseCategory?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
      difficulty?: string | null,
    },
    targetWeight: number,
    targetReps: number,
    createdAt: string,
    updatedAt?: string | null,
    resetAt: string,
    isActive: boolean,
    userDataID: string,
  } | null,
};

export type CreateUserDataMutationVariables = {
  input: CreateUserDataInput,
  condition?: ModelUserDataConditionInput | null,
};

export type CreateUserDataMutation = {
  createUserData?:  {
    __typename: "UserData",
    id: string,
    userName?: string | null,
    trainings?:  {
      __typename: "ModelTrainingConnection",
      items:  Array< {
        __typename: "Training",
        id: string,
        weight: number,
        reps: number,
        createdAt: string,
        updatedAt: string,
        userDataID: string,
        userName: string,
        previousId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    exerciseTypes?:  Array< {
      __typename: "ExerciseType",
      id: string,
      name: string,
      exerciseCategory?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
      difficulty?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    trainingGoals?:  {
      __typename: "ModelTrainingGoalConnection",
      items:  Array< {
        __typename: "TrainingGoal",
        id: string,
        targetWeight: number,
        targetReps: number,
        createdAt: string,
        updatedAt?: string | null,
        resetAt: string,
        isActive: boolean,
        userDataID: string,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateUserDataMutationVariables = {
  input: UpdateUserDataInput,
  condition?: ModelUserDataConditionInput | null,
};

export type UpdateUserDataMutation = {
  updateUserData?:  {
    __typename: "UserData",
    id: string,
    userName?: string | null,
    trainings?:  {
      __typename: "ModelTrainingConnection",
      items:  Array< {
        __typename: "Training",
        id: string,
        weight: number,
        reps: number,
        createdAt: string,
        updatedAt: string,
        userDataID: string,
        userName: string,
        previousId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    exerciseTypes?:  Array< {
      __typename: "ExerciseType",
      id: string,
      name: string,
      exerciseCategory?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
      difficulty?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    trainingGoals?:  {
      __typename: "ModelTrainingGoalConnection",
      items:  Array< {
        __typename: "TrainingGoal",
        id: string,
        targetWeight: number,
        targetReps: number,
        createdAt: string,
        updatedAt?: string | null,
        resetAt: string,
        isActive: boolean,
        userDataID: string,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteUserDataMutationVariables = {
  input: DeleteUserDataInput,
  condition?: ModelUserDataConditionInput | null,
};

export type DeleteUserDataMutation = {
  deleteUserData?:  {
    __typename: "UserData",
    id: string,
    userName?: string | null,
    trainings?:  {
      __typename: "ModelTrainingConnection",
      items:  Array< {
        __typename: "Training",
        id: string,
        weight: number,
        reps: number,
        createdAt: string,
        updatedAt: string,
        userDataID: string,
        userName: string,
        previousId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    exerciseTypes?:  Array< {
      __typename: "ExerciseType",
      id: string,
      name: string,
      exerciseCategory?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
      difficulty?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    trainingGoals?:  {
      __typename: "ModelTrainingGoalConnection",
      items:  Array< {
        __typename: "TrainingGoal",
        id: string,
        targetWeight: number,
        targetReps: number,
        createdAt: string,
        updatedAt?: string | null,
        resetAt: string,
        isActive: boolean,
        userDataID: string,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateTrainingMutationVariables = {
  input: CreateTrainingInput,
  condition?: ModelTrainingConditionInput | null,
};

export type CreateTrainingMutation = {
  createTraining?:  {
    __typename: "Training",
    id: string,
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      exerciseCategory?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
      difficulty?: string | null,
    },
    weight: number,
    reps: number,
    createdAt: string,
    updatedAt: string,
    userDataID: string,
    userName: string,
    previousId?: string | null,
  } | null,
};

export type UpdateTrainingMutationVariables = {
  input: UpdateTrainingInput,
  condition?: ModelTrainingConditionInput | null,
};

export type UpdateTrainingMutation = {
  updateTraining?:  {
    __typename: "Training",
    id: string,
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      exerciseCategory?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
      difficulty?: string | null,
    },
    weight: number,
    reps: number,
    createdAt: string,
    updatedAt: string,
    userDataID: string,
    userName: string,
    previousId?: string | null,
  } | null,
};

export type DeleteTrainingMutationVariables = {
  input: DeleteTrainingInput,
  condition?: ModelTrainingConditionInput | null,
};

export type DeleteTrainingMutation = {
  deleteTraining?:  {
    __typename: "Training",
    id: string,
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      exerciseCategory?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
      difficulty?: string | null,
    },
    weight: number,
    reps: number,
    createdAt: string,
    updatedAt: string,
    userDataID: string,
    userName: string,
    previousId?: string | null,
  } | null,
};

export type GetTrainingGoalQueryVariables = {
  id: string,
};

export type GetTrainingGoalQuery = {
  getTrainingGoal?:  {
    __typename: "TrainingGoal",
    id: string,
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      exerciseCategory?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
      difficulty?: string | null,
    },
    targetWeight: number,
    targetReps: number,
    createdAt: string,
    updatedAt?: string | null,
    resetAt: string,
    isActive: boolean,
    userDataID: string,
  } | null,
};

export type ListTrainingGoalsQueryVariables = {
  filter?: ModelTrainingGoalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTrainingGoalsQuery = {
  listTrainingGoals?:  {
    __typename: "ModelTrainingGoalConnection",
    items:  Array< {
      __typename: "TrainingGoal",
      id: string,
      exerciseType:  {
        __typename: "ExerciseType",
        id: string,
        name: string,
        exerciseCategory?: string | null,
        category: string,
        createdAt: string,
        updatedAt: string,
        difficulty?: string | null,
      },
      targetWeight: number,
      targetReps: number,
      createdAt: string,
      updatedAt?: string | null,
      resetAt: string,
      isActive: boolean,
      userDataID: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserDataQueryVariables = {
  id: string,
};

export type GetUserDataQuery = {
  getUserData?:  {
    __typename: "UserData",
    id: string,
    userName?: string | null,
    trainings?:  {
      __typename: "ModelTrainingConnection",
      items:  Array< {
        __typename: "Training",
        id: string,
        weight: number,
        reps: number,
        createdAt: string,
        updatedAt: string,
        userDataID: string,
        userName: string,
        previousId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    exerciseTypes?:  Array< {
      __typename: "ExerciseType",
      id: string,
      name: string,
      exerciseCategory?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
      difficulty?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    trainingGoals?:  {
      __typename: "ModelTrainingGoalConnection",
      items:  Array< {
        __typename: "TrainingGoal",
        id: string,
        targetWeight: number,
        targetReps: number,
        createdAt: string,
        updatedAt?: string | null,
        resetAt: string,
        isActive: boolean,
        userDataID: string,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListUserDataQueryVariables = {
  filter?: ModelUserDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserDataQuery = {
  listUserData?:  {
    __typename: "ModelUserDataConnection",
    items:  Array< {
      __typename: "UserData",
      id: string,
      userName?: string | null,
      trainings?:  {
        __typename: "ModelTrainingConnection",
        nextToken?: string | null,
      } | null,
      exerciseTypes?:  Array< {
        __typename: "ExerciseType",
        id: string,
        name: string,
        exerciseCategory?: string | null,
        category: string,
        createdAt: string,
        updatedAt: string,
        difficulty?: string | null,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
      trainingGoals?:  {
        __typename: "ModelTrainingGoalConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTrainingQueryVariables = {
  id: string,
};

export type GetTrainingQuery = {
  getTraining?:  {
    __typename: "Training",
    id: string,
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      exerciseCategory?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
      difficulty?: string | null,
    },
    weight: number,
    reps: number,
    createdAt: string,
    updatedAt: string,
    userDataID: string,
    userName: string,
    previousId?: string | null,
  } | null,
};

export type ListTrainingsQueryVariables = {
  filter?: ModelTrainingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTrainingsQuery = {
  listTrainings?:  {
    __typename: "ModelTrainingConnection",
    items:  Array< {
      __typename: "Training",
      id: string,
      exerciseType:  {
        __typename: "ExerciseType",
        id: string,
        name: string,
        exerciseCategory?: string | null,
        category: string,
        createdAt: string,
        updatedAt: string,
        difficulty?: string | null,
      },
      weight: number,
      reps: number,
      createdAt: string,
      updatedAt: string,
      userDataID: string,
      userName: string,
      previousId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TrainingGoalsByUserDataIDQueryVariables = {
  userDataID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTrainingGoalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TrainingGoalsByUserDataIDQuery = {
  trainingGoalsByUserDataID?:  {
    __typename: "ModelTrainingGoalConnection",
    items:  Array< {
      __typename: "TrainingGoal",
      id: string,
      exerciseType:  {
        __typename: "ExerciseType",
        id: string,
        name: string,
        exerciseCategory?: string | null,
        category: string,
        createdAt: string,
        updatedAt: string,
        difficulty?: string | null,
      },
      targetWeight: number,
      targetReps: number,
      createdAt: string,
      updatedAt?: string | null,
      resetAt: string,
      isActive: boolean,
      userDataID: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TrainingsByUserDataIDQueryVariables = {
  userDataID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTrainingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TrainingsByUserDataIDQuery = {
  trainingsByUserDataID?:  {
    __typename: "ModelTrainingConnection",
    items:  Array< {
      __typename: "Training",
      id: string,
      exerciseType:  {
        __typename: "ExerciseType",
        id: string,
        name: string,
        exerciseCategory?: string | null,
        category: string,
        createdAt: string,
        updatedAt: string,
        difficulty?: string | null,
      },
      weight: number,
      reps: number,
      createdAt: string,
      updatedAt: string,
      userDataID: string,
      userName: string,
      previousId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTrainingGoalSubscriptionVariables = {
  filter?: ModelSubscriptionTrainingGoalFilterInput | null,
};

export type OnCreateTrainingGoalSubscription = {
  onCreateTrainingGoal?:  {
    __typename: "TrainingGoal",
    id: string,
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      exerciseCategory?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
      difficulty?: string | null,
    },
    targetWeight: number,
    targetReps: number,
    createdAt: string,
    updatedAt?: string | null,
    resetAt: string,
    isActive: boolean,
    userDataID: string,
  } | null,
};

export type OnUpdateTrainingGoalSubscriptionVariables = {
  filter?: ModelSubscriptionTrainingGoalFilterInput | null,
};

export type OnUpdateTrainingGoalSubscription = {
  onUpdateTrainingGoal?:  {
    __typename: "TrainingGoal",
    id: string,
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      exerciseCategory?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
      difficulty?: string | null,
    },
    targetWeight: number,
    targetReps: number,
    createdAt: string,
    updatedAt?: string | null,
    resetAt: string,
    isActive: boolean,
    userDataID: string,
  } | null,
};

export type OnDeleteTrainingGoalSubscriptionVariables = {
  filter?: ModelSubscriptionTrainingGoalFilterInput | null,
};

export type OnDeleteTrainingGoalSubscription = {
  onDeleteTrainingGoal?:  {
    __typename: "TrainingGoal",
    id: string,
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      exerciseCategory?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
      difficulty?: string | null,
    },
    targetWeight: number,
    targetReps: number,
    createdAt: string,
    updatedAt?: string | null,
    resetAt: string,
    isActive: boolean,
    userDataID: string,
  } | null,
};

export type OnCreateUserDataSubscriptionVariables = {
  filter?: ModelSubscriptionUserDataFilterInput | null,
};

export type OnCreateUserDataSubscription = {
  onCreateUserData?:  {
    __typename: "UserData",
    id: string,
    userName?: string | null,
    trainings?:  {
      __typename: "ModelTrainingConnection",
      items:  Array< {
        __typename: "Training",
        id: string,
        weight: number,
        reps: number,
        createdAt: string,
        updatedAt: string,
        userDataID: string,
        userName: string,
        previousId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    exerciseTypes?:  Array< {
      __typename: "ExerciseType",
      id: string,
      name: string,
      exerciseCategory?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
      difficulty?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    trainingGoals?:  {
      __typename: "ModelTrainingGoalConnection",
      items:  Array< {
        __typename: "TrainingGoal",
        id: string,
        targetWeight: number,
        targetReps: number,
        createdAt: string,
        updatedAt?: string | null,
        resetAt: string,
        isActive: boolean,
        userDataID: string,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateUserDataSubscriptionVariables = {
  filter?: ModelSubscriptionUserDataFilterInput | null,
};

export type OnUpdateUserDataSubscription = {
  onUpdateUserData?:  {
    __typename: "UserData",
    id: string,
    userName?: string | null,
    trainings?:  {
      __typename: "ModelTrainingConnection",
      items:  Array< {
        __typename: "Training",
        id: string,
        weight: number,
        reps: number,
        createdAt: string,
        updatedAt: string,
        userDataID: string,
        userName: string,
        previousId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    exerciseTypes?:  Array< {
      __typename: "ExerciseType",
      id: string,
      name: string,
      exerciseCategory?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
      difficulty?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    trainingGoals?:  {
      __typename: "ModelTrainingGoalConnection",
      items:  Array< {
        __typename: "TrainingGoal",
        id: string,
        targetWeight: number,
        targetReps: number,
        createdAt: string,
        updatedAt?: string | null,
        resetAt: string,
        isActive: boolean,
        userDataID: string,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteUserDataSubscriptionVariables = {
  filter?: ModelSubscriptionUserDataFilterInput | null,
};

export type OnDeleteUserDataSubscription = {
  onDeleteUserData?:  {
    __typename: "UserData",
    id: string,
    userName?: string | null,
    trainings?:  {
      __typename: "ModelTrainingConnection",
      items:  Array< {
        __typename: "Training",
        id: string,
        weight: number,
        reps: number,
        createdAt: string,
        updatedAt: string,
        userDataID: string,
        userName: string,
        previousId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    exerciseTypes?:  Array< {
      __typename: "ExerciseType",
      id: string,
      name: string,
      exerciseCategory?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
      difficulty?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    trainingGoals?:  {
      __typename: "ModelTrainingGoalConnection",
      items:  Array< {
        __typename: "TrainingGoal",
        id: string,
        targetWeight: number,
        targetReps: number,
        createdAt: string,
        updatedAt?: string | null,
        resetAt: string,
        isActive: boolean,
        userDataID: string,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateTrainingSubscriptionVariables = {
  filter?: ModelSubscriptionTrainingFilterInput | null,
};

export type OnCreateTrainingSubscription = {
  onCreateTraining?:  {
    __typename: "Training",
    id: string,
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      exerciseCategory?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
      difficulty?: string | null,
    },
    weight: number,
    reps: number,
    createdAt: string,
    updatedAt: string,
    userDataID: string,
    userName: string,
    previousId?: string | null,
  } | null,
};

export type OnUpdateTrainingSubscriptionVariables = {
  filter?: ModelSubscriptionTrainingFilterInput | null,
};

export type OnUpdateTrainingSubscription = {
  onUpdateTraining?:  {
    __typename: "Training",
    id: string,
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      exerciseCategory?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
      difficulty?: string | null,
    },
    weight: number,
    reps: number,
    createdAt: string,
    updatedAt: string,
    userDataID: string,
    userName: string,
    previousId?: string | null,
  } | null,
};

export type OnDeleteTrainingSubscriptionVariables = {
  filter?: ModelSubscriptionTrainingFilterInput | null,
};

export type OnDeleteTrainingSubscription = {
  onDeleteTraining?:  {
    __typename: "Training",
    id: string,
    exerciseType:  {
      __typename: "ExerciseType",
      id: string,
      name: string,
      exerciseCategory?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
      difficulty?: string | null,
    },
    weight: number,
    reps: number,
    createdAt: string,
    updatedAt: string,
    userDataID: string,
    userName: string,
    previousId?: string | null,
  } | null,
};

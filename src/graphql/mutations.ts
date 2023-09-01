/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTrainingGoal = /* GraphQL */ `
  mutation CreateTrainingGoal(
    $input: CreateTrainingGoalInput!
    $condition: ModelTrainingGoalConditionInput
  ) {
    createTrainingGoal(input: $input, condition: $condition) {
      id
      exerciseType {
        id
        name
        exerciseCategory
        category
        createdAt
        updatedAt
        difficulty
        __typename
      }
      targetWeight
      targetReps
      createdAt
      updatedAt
      resetAt
      isActive
      userDataID
      __typename
    }
  }
`;
export const updateTrainingGoal = /* GraphQL */ `
  mutation UpdateTrainingGoal(
    $input: UpdateTrainingGoalInput!
    $condition: ModelTrainingGoalConditionInput
  ) {
    updateTrainingGoal(input: $input, condition: $condition) {
      id
      exerciseType {
        id
        name
        exerciseCategory
        category
        createdAt
        updatedAt
        difficulty
        __typename
      }
      targetWeight
      targetReps
      createdAt
      updatedAt
      resetAt
      isActive
      userDataID
      __typename
    }
  }
`;
export const deleteTrainingGoal = /* GraphQL */ `
  mutation DeleteTrainingGoal(
    $input: DeleteTrainingGoalInput!
    $condition: ModelTrainingGoalConditionInput
  ) {
    deleteTrainingGoal(input: $input, condition: $condition) {
      id
      exerciseType {
        id
        name
        exerciseCategory
        category
        createdAt
        updatedAt
        difficulty
        __typename
      }
      targetWeight
      targetReps
      createdAt
      updatedAt
      resetAt
      isActive
      userDataID
      __typename
    }
  }
`;
export const createUserData = /* GraphQL */ `
  mutation CreateUserData(
    $input: CreateUserDataInput!
    $condition: ModelUserDataConditionInput
  ) {
    createUserData(input: $input, condition: $condition) {
      id
      userName
      trainings {
        items {
          id
          weight
          reps
          createdAt
          updatedAt
          userDataID
          userName
          previousId
          __typename
        }
        nextToken
        __typename
      }
      exerciseTypes {
        id
        name
        exerciseCategory
        category
        createdAt
        updatedAt
        difficulty
        __typename
      }
      createdAt
      updatedAt
      trainingGoals {
        items {
          id
          targetWeight
          targetReps
          createdAt
          updatedAt
          resetAt
          isActive
          userDataID
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const updateUserData = /* GraphQL */ `
  mutation UpdateUserData(
    $input: UpdateUserDataInput!
    $condition: ModelUserDataConditionInput
  ) {
    updateUserData(input: $input, condition: $condition) {
      id
      userName
      trainings {
        items {
          id
          weight
          reps
          createdAt
          updatedAt
          userDataID
          userName
          previousId
          __typename
        }
        nextToken
        __typename
      }
      exerciseTypes {
        id
        name
        exerciseCategory
        category
        createdAt
        updatedAt
        difficulty
        __typename
      }
      createdAt
      updatedAt
      trainingGoals {
        items {
          id
          targetWeight
          targetReps
          createdAt
          updatedAt
          resetAt
          isActive
          userDataID
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const deleteUserData = /* GraphQL */ `
  mutation DeleteUserData(
    $input: DeleteUserDataInput!
    $condition: ModelUserDataConditionInput
  ) {
    deleteUserData(input: $input, condition: $condition) {
      id
      userName
      trainings {
        items {
          id
          weight
          reps
          createdAt
          updatedAt
          userDataID
          userName
          previousId
          __typename
        }
        nextToken
        __typename
      }
      exerciseTypes {
        id
        name
        exerciseCategory
        category
        createdAt
        updatedAt
        difficulty
        __typename
      }
      createdAt
      updatedAt
      trainingGoals {
        items {
          id
          targetWeight
          targetReps
          createdAt
          updatedAt
          resetAt
          isActive
          userDataID
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const createTraining = /* GraphQL */ `
  mutation CreateTraining(
    $input: CreateTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    createTraining(input: $input, condition: $condition) {
      id
      exerciseType {
        id
        name
        exerciseCategory
        category
        createdAt
        updatedAt
        difficulty
        __typename
      }
      weight
      reps
      createdAt
      updatedAt
      userDataID
      userName
      previousId
      __typename
    }
  }
`;
export const updateTraining = /* GraphQL */ `
  mutation UpdateTraining(
    $input: UpdateTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    updateTraining(input: $input, condition: $condition) {
      id
      exerciseType {
        id
        name
        exerciseCategory
        category
        createdAt
        updatedAt
        difficulty
        __typename
      }
      weight
      reps
      createdAt
      updatedAt
      userDataID
      userName
      previousId
      __typename
    }
  }
`;
export const deleteTraining = /* GraphQL */ `
  mutation DeleteTraining(
    $input: DeleteTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    deleteTraining(input: $input, condition: $condition) {
      id
      exerciseType {
        id
        name
        exerciseCategory
        category
        createdAt
        updatedAt
        difficulty
        __typename
      }
      weight
      reps
      createdAt
      updatedAt
      userDataID
      userName
      previousId
      __typename
    }
  }
`;

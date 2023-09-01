/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTrainingGoal = /* GraphQL */ `
  subscription OnCreateTrainingGoal(
    $filter: ModelSubscriptionTrainingGoalFilterInput
  ) {
    onCreateTrainingGoal(filter: $filter) {
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
export const onUpdateTrainingGoal = /* GraphQL */ `
  subscription OnUpdateTrainingGoal(
    $filter: ModelSubscriptionTrainingGoalFilterInput
  ) {
    onUpdateTrainingGoal(filter: $filter) {
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
export const onDeleteTrainingGoal = /* GraphQL */ `
  subscription OnDeleteTrainingGoal(
    $filter: ModelSubscriptionTrainingGoalFilterInput
  ) {
    onDeleteTrainingGoal(filter: $filter) {
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
export const onCreateUserData = /* GraphQL */ `
  subscription OnCreateUserData($filter: ModelSubscriptionUserDataFilterInput) {
    onCreateUserData(filter: $filter) {
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
export const onUpdateUserData = /* GraphQL */ `
  subscription OnUpdateUserData($filter: ModelSubscriptionUserDataFilterInput) {
    onUpdateUserData(filter: $filter) {
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
export const onDeleteUserData = /* GraphQL */ `
  subscription OnDeleteUserData($filter: ModelSubscriptionUserDataFilterInput) {
    onDeleteUserData(filter: $filter) {
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
export const onCreateTraining = /* GraphQL */ `
  subscription OnCreateTraining($filter: ModelSubscriptionTrainingFilterInput) {
    onCreateTraining(filter: $filter) {
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
export const onUpdateTraining = /* GraphQL */ `
  subscription OnUpdateTraining($filter: ModelSubscriptionTrainingFilterInput) {
    onUpdateTraining(filter: $filter) {
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
export const onDeleteTraining = /* GraphQL */ `
  subscription OnDeleteTraining($filter: ModelSubscriptionTrainingFilterInput) {
    onDeleteTraining(filter: $filter) {
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

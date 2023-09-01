/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTrainingGoal = /* GraphQL */ `
  query GetTrainingGoal($id: ID!) {
    getTrainingGoal(id: $id) {
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
export const listTrainingGoals = /* GraphQL */ `
  query ListTrainingGoals(
    $filter: ModelTrainingGoalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainingGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUserData = /* GraphQL */ `
  query GetUserData($id: ID!) {
    getUserData(id: $id) {
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
export const listUserData = /* GraphQL */ `
  query ListUserData(
    $filter: ModelUserDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userName
        trainings {
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
          nextToken
          __typename
        }
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTraining = /* GraphQL */ `
  query GetTraining($id: ID!) {
    getTraining(id: $id) {
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
export const listTrainings = /* GraphQL */ `
  query ListTrainings(
    $filter: ModelTrainingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const trainingGoalsByUserDataID = /* GraphQL */ `
  query TrainingGoalsByUserDataID(
    $userDataID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTrainingGoalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    trainingGoalsByUserDataID(
      userDataID: $userDataID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const trainingsByUserDataID = /* GraphQL */ `
  query TrainingsByUserDataID(
    $userDataID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTrainingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    trainingsByUserDataID(
      userDataID: $userDataID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      name
      parentName
      email
      level
      reportCards {
        items {
          id
          date
          score
          message
          createdAt
          updatedAt
          userReportCardsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      name
      parentName
      email
      level
      reportCards {
        items {
          id
          date
          score
          message
          createdAt
          updatedAt
          userReportCardsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      name
      parentName
      email
      level
      reportCards {
        items {
          id
          date
          score
          message
          createdAt
          updatedAt
          userReportCardsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createReportCard = /* GraphQL */ `
  mutation CreateReportCard(
    $input: CreateReportCardInput!
    $condition: ModelReportCardConditionInput
  ) {
    createReportCard(input: $input, condition: $condition) {
      id
      date
      score
      message
      createdAt
      updatedAt
      userReportCardsId
      __typename
    }
  }
`;
export const updateReportCard = /* GraphQL */ `
  mutation UpdateReportCard(
    $input: UpdateReportCardInput!
    $condition: ModelReportCardConditionInput
  ) {
    updateReportCard(input: $input, condition: $condition) {
      id
      date
      score
      message
      createdAt
      updatedAt
      userReportCardsId
      __typename
    }
  }
`;
export const deleteReportCard = /* GraphQL */ `
  mutation DeleteReportCard(
    $input: DeleteReportCardInput!
    $condition: ModelReportCardConditionInput
  ) {
    deleteReportCard(input: $input, condition: $condition) {
      id
      date
      score
      message
      createdAt
      updatedAt
      userReportCardsId
      __typename
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      username
      name
      parentName
      parentEmail
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      username
      name
      parentName
      parentEmail
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      username
      name
      parentName
      parentEmail
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
export const onCreateReportCard = /* GraphQL */ `
  subscription OnCreateReportCard(
    $filter: ModelSubscriptionReportCardFilterInput
  ) {
    onCreateReportCard(filter: $filter) {
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
export const onUpdateReportCard = /* GraphQL */ `
  subscription OnUpdateReportCard(
    $filter: ModelSubscriptionReportCardFilterInput
  ) {
    onUpdateReportCard(filter: $filter) {
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
export const onDeleteReportCard = /* GraphQL */ `
  subscription OnDeleteReportCard(
    $filter: ModelSubscriptionReportCardFilterInput
  ) {
    onDeleteReportCard(filter: $filter) {
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

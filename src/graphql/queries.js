/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        name
        parentName
        email
        level
        reportCards {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReportCard = /* GraphQL */ `
  query GetReportCard($id: ID!) {
    getReportCard(id: $id) {
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
export const listReportCards = /* GraphQL */ `
  query ListReportCards(
    $filter: ModelReportCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReportCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;

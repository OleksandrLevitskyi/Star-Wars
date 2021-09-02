import { gql } from "@apollo/client";

export const ALL_PERSONS = gql`
  query getPerson {
    allPeople {
      people {
        name
        gender
        id
        homeworld {
          name
        }
      }
    }
  }
`;

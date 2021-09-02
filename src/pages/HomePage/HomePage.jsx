import React from "react";
import { HomePageWrapper } from "./styles";
import { useQuery } from "@apollo/client";
import { ALL_PERSONS } from "../../mocked/scheme";
import ContentBlock from "../../components/ContentBlock";
import Filter from "../../components/Fliter";

const HomePage = () => {
  const { loading } = useQuery(ALL_PERSONS, {
    fetchPolicy: "catch-first",
  });

  return loading ? (
    <HomePageWrapper>Loading...</HomePageWrapper>
  ) : (
    <HomePageWrapper>
      <Filter />
      <ContentBlock />
    </HomePageWrapper>
  );
};

export default HomePage;
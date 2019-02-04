import React, { useState } from "react";
import styled from "styled-components";
import { Menu } from "../components/Menu";
import gql from "graphql-tag";
import { Spinner } from "../components/Spinner";
import { useQuery } from "../hooks";
import { Page } from "../components/Page";

const FETCH_DATASOURCES = gql`
  {
    datasources {
      id
      type
      name
      host
      port
      user
      database
    }
  }
`;

type Datasource = {
  id: string;
  type: "MySQL";
  name: string;
  host: string;
  port: number;
  user: string;
  database: string;
};

export const Datasources = () => {
  const [
    selectedDatasource,
    setSelectedDatasource
  ] = useState<Datasource | null>(null);

  return (
    <Page page="Datasources">
      <DatasourceList onClick={setSelectedDatasource} />
    </Page>
  );
};

const DatastoreItem = ({ datastore }: any) => (
  <DatasourceListItem>
    <span>{datastore.type}</span>
    <span>{datastore.name}</span>
  </DatasourceListItem>
);

type DatasourceListProps = {
  onClick: (datastore: Datasource) => void;
};

const DatasourceList = ({ onClick }: DatasourceListProps) => {
  const result = useQuery<{ datastores: Datasource[] }>({
    query: FETCH_DATASOURCES
  });
  switch (result.status) {
    case "Loading":
      return <Spinner size={24} />;
    case "Error":
      return <p> Error fetching data stores </p>;
    case "Ready":
      return (
        <ul>
          {result.data.datastores.map((datastore: Datasource) => (
            <DatastoreItem
              key={datastore.id}
              datastore={datastore}
              onClick={onClick}
            />
          ))}
        </ul>
      );
  }
};

const DatasourceListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  grid-auto-rows: auto;
  grid-gap: 5px;
`;

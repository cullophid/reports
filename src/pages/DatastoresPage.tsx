import React, { useState } from "react";
import styled from "react-emotion";
import { column, columnSpacing, fill } from "../styles";
import Menu from "../components/Menu";
import gql from "graphql-tag";
import { Spinner } from "../components/Spinner";
import { useQuery } from "../hooks";

const FETCH_DATASTORES = gql`
  {
    datastores {
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

type Datastore = {
  id: string;
  type: "MySQL";
  name: string;
  host: string;
  port: number;
  user: string;
  database: string;
};

const DatastoresPage = () => {
  const [selectedDatastore, setSelectedDatastore] = useState<Datastore | null>(
    null
  );

  return (
    <ViewContainer>
      <Menu />
      <DatastoreList onClick={setSelectedDatastore} />
    </ViewContainer>
  );
};
export default DatastoresPage;

const DatastoreItem = ({ datastore }: any) => (
  <DatastoreListItem>
    <span>{datastore.type}</span>
    <span>{datastore.name}</span>
  </DatastoreListItem>
);

type DatastoreListProps = {
  onClick: (datastore: Datastore) => void;
};

const DatastoreList = ({ onClick }: DatastoreListProps) => {
  const result = useQuery<{ datastores: Datastore[] }>({
    query: FETCH_DATASTORES
  });
  switch (result.status) {
    case "Loading":
      return <Spinner color="primary" size={24} />;
    case "Error":
      return <p> Error fetching data stores </p>;
    case "Ready":
      return (
        <ul>
          {result.data.datastores.map((datastore: Datastore) => (
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

const ViewContainer = styled.div`
  ${column};
`;

const DatastoreListItem = styled.li`
  ${column};
  ${columnSpacing(5)};
`;

import * as React from "react";
import { css } from "emotion";
import { column, columnSpacing, fill } from "../styles";
import Menu from "../components/Menu";
import gql from "graphql-tag";
import { Spinner } from "../components/Spinner";
import { Query, Mutation } from "react-apollo";

const Styles = {
  viewContainer: css`
    ${column};
  `,

  dataStoreListItem: css`
    ${column};
    ${columnSpacing(5)};
  `
};

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

const DatastoreItem = ({ datastore }: any) => (
  <li css={Styles.dataStoreListItem}>
    <span>{datastore.type}</span>
    <span>{datastore.name}</span>
  </li>
);

type DatastoreListProps = {
  onClick: (datastore: Datastore) => void;
};
const DatastoreList = ({ onClick }: DatastoreListProps) => (
  <Query query={FETCH_DATASTORES}>
    {(res) => {
      if (res.loading) return <Spinner color="primary" size={24} />;
      if (res.error) {
        return <p> Error fetching data stores </p>;
      }
      return (
        <ul>
          {res.data.datastores.map((datastore: Datastore) => (
            <DatastoreItem
              key={datastore.id}
              datastore={datastore}
              onClick={onClick}
            />
          ))}
        </ul>
      );
    }}
  </Query>
);

type State = {
  selectedDatastore: Datastore | null;
};
export default class DatastoresPage extends React.PureComponent<{}, State> {
  state: State = {
    selectedDatastore: null
  };
  render() {
    return (
      <div css={Styles.viewContainer}>
        <Menu />
        <DatastoreList
          onClick={(selectedDatastore) => this.setState({ selectedDatastore })}
        />
      </div>
    );
  }
}

import { ApolloError } from "apollo-boost"
import styled from "@emotion/styled";

type Props = {
  error: ApolloError
}

export const ErrorBox = (props: Props) => {
  const { error, } = props;

  return (
    <Box role="alert">
      {error.graphQLErrors.map(err =>
        err.message
      )}
    </Box>
  )
}

const Box = styled.div`
  padding: 32px;
  background:#f0f0f0;
  border:1px solid #ddd;
  border-radius: 3px;
  color:#414141;
`
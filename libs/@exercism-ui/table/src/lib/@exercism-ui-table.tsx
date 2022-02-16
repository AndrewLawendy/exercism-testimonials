import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ExercismUiTableProps {}

const StyledExercismUiTable = styled.div`
  color: pink;
`;

export function ExercismUiTable(props: ExercismUiTableProps) {
  return (
    <StyledExercismUiTable>
      <h1>Welcome to ExercismUiTable!</h1>
    </StyledExercismUiTable>
  );
}

export default ExercismUiTable;

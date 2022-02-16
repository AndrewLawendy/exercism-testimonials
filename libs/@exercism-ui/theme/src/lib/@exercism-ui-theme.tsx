import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ExercismUiThemeProps {}

const StyledExercismUiTheme = styled.div`
  color: pink;
`;

export function ExercismUiTheme(props: ExercismUiThemeProps) {
  return (
    <StyledExercismUiTheme>
      <h1>Welcome to ExercismUiTheme!</h1>
    </StyledExercismUiTheme>
  );
}

export default ExercismUiTheme;

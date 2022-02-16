import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ExercismUiStorybookProps {}

const StyledExercismUiStorybook = styled.div`
  color: pink;
`;

export function ExercismUiStorybook(props: ExercismUiStorybookProps) {
  return (
    <StyledExercismUiStorybook>
      <h1>Welcome to ExercismUiStorybook!</h1>
    </StyledExercismUiStorybook>
  );
}

export default ExercismUiStorybook;

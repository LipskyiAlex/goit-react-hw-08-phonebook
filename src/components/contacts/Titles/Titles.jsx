import { MainTitle, SecondaryTitle, Span } from './Titles.styled';

export const Title = () => {
  return (
    <MainTitle>
      Phonebo<Span>ok</Span>
    </MainTitle>
  );
};

export const SubTitle = () => {
  return <SecondaryTitle>Contacts</SecondaryTitle>;
};

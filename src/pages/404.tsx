import Logo from "src/components/elements/Logo";
import LogoLink from "src/components/elements/LogoLink";
import BasePage from "src/components/layouts/BasePage";
import styled from "styled-components";

const FourOhFourStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

const LogoAnimation = styled.div`
  background: var(--white);
  border-radius: 50%;
  margin: 10px;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
  animation: pulse 2s infinite;
  &:hover {
    animation-play-state: paused;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`;

const ErrorCodeStyle = styled.h1`
  margin: 0;
`;

export default function Custom404() {
  return (
    <BasePage>
      <FourOhFourStyles>
        <ErrorCodeStyle>404</ErrorCodeStyle>
        <span>Sorry, we can't find what you are looking for</span>
        <LogoAnimation>
          <LogoLink />
        </LogoAnimation>
      </FourOhFourStyles>
    </BasePage>
  );
}

import ButtonBase from '@material-ui/core/Button';
import styled from 'styled-components';
import test1 from '../../images/test1.jpg';

export const MainContainer = styled.section`
  background: url(${test1});
  background-size: cover;
  position: absolute;
  width: 100%;
`;

export const TestContainer = styled.div`
  align-items: center;
  background: 
    linear-gradient(115deg, rgb(11, 204, 238) 0%, rgb(48, 150, 156) 0%, rgb(132, 202, 202) 24.0458%, rgb(151, 214, 212) 48.855%, rgb(197, 139, 111) 100%);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
`;

export const ContentContainer = styled.div`
  align-content: space-around;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: 'canterburyregular';
  height: 100vh;
  justify-content: center;
  position: relative;
`;

export const NameContainer = styled.div`
  font-family: canterburyregular, serif;
  font-size: 3.25rem;
  font-weight:normal;
  text-align: center;
`;

export const LandingPageButton = styled(ButtonBase)`
  background-color: transparent;
  color: #000;
  .label {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    font-weight: 560;
  }
  :hover {
    border: .15rem solid #000;
    border-radius: 0;
  }
`;

// font-family: 'Playfair Display', serif;

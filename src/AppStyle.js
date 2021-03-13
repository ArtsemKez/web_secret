import styled from 'styled-components'

export const AppComponent = styled.div`
  position: relative;
  width: calc(100% - 140px);
  max-width: 1400px;
  margin-left: auto !important;
  margin-right: auto !important;

  @media (max-width: 1280px) {
    width: calc(100% - 120px);
  }

  @media(max-width: 767px){
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: 100%;
  }
`

export const ContentStyle = styled.div`
s  
  @media (max-width: 1460px) {
    zoom: 90%;
  }
  @media (max-width: 1355px) {
    zoom: 80%;
  }
  @media (max-width: 1230px) {
    zoom: 70%;
  }
  @media (max-width: 1125px) {
    zoom: 100%;
  }
  @media (max-width: 768px) {
    margin-left: 0 !important;
    margin-right: 0 !important;
    left: 0;
    width: 100%;
  }
`

export const FilterStyle = styled.div`
  @media (max-width: 1125px) {
    display: none;
    width: 0;
  }
  @media(max-width: 767px) {
    width: 100%;
  }
`

export const BurgerStyle = styled.span`
  @media (max-width: 1125px) {
    display: block;
    position: relative;
    width: 40px;
    height: 30px;
    top: 10px;

    span {
      position: absolute;
      background-color: black;
      left: 0;
      width: 100%;
      height: 3px;
      top: 14px;
    }

    ::before {
      content: '';
      background-color: black;
      position: absolute;
      width: 100%;
      height: 3px;
      left: 0;
      top: 0;
    }

    ::after {
      content: '';
      background-color: black;
      position: absolute;
      width: 100%;
      height: 3px;
      left: 0;
      bottom: 0;
    }

    @media (max-width: 767px){
      left: 15px;
    }
  }
`

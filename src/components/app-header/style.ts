import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`
  color: #fff;
  background-color: #242424;
  .header {
    display: flex;
    justify-content: space-between;
    height: 70px;
  }

  .divider {
    height: 5px;
    background-color: ${(props) => props.theme.color.primary};
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  .logo {
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  .title-list {
    display: flex;
    .item {
      position: relative;
      a {
        display: block;
        padding: 0 19px;
        line-height: 70px;
        color: #ccc;

        &:hover,
        &.active {
          color: #fff;
          background-color: #000;
        }

        &.active .icon {
          position: absolute;
          left: 50%;
          bottom: -1px;
          width: 12px;
          height: 7px;
          transform: translateX(-50%);
          background-position: -226px 0;
        }
      }
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    padding-left: 30px;
    font-size: 12px;
    border-radius: 32px;
    background-color: #fff;
    background-position: 0 -99px;
    &::placeholder {
      color: #9b9b9b;
    }
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 32px;
    margin: 0 24px 0 12px;
    color: #ccc;
    border-radius: 20px;
    border: 1px solid #4f4f4f;
    box-sizing: border-box;
  }

  .login {
    color: #787878;
  }
`

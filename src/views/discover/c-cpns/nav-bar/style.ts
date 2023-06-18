import styled from 'styled-components'

export const NavBarWrapper = styled.div`
  height: 30px;
  background-color: ${(props) => props.theme.color.primary};

  .nav {
    .top {
      display: flex;
      padding-left: 180px;

      .item {
        a {
          display: inline-block;
          height: 20px;
          margin: 2px 17px 0;
          padding: 0 13px;
          line-height: 20px;
          font-size: 12px;
          color: #fff;
          border-radius: 20px;
          &.active,
          &:hover {
            background-color: #9b0909;
          }
        }
      }
    }
  }
`

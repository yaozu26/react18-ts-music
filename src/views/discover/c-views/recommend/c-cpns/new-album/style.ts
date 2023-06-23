import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
  > .content {
    position: relative;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    background: #f5f5f5;

    > .arrow {
      position: absolute;
      top: 71px;
      width: 17px;
      height: 17px;
      cursor: pointer;

      &.arrow-left {
        left: 4px;
        background-position: -260px -75px;
        &:hover {
          background-position: -280px -75px;
        }
      }

      &.arrow-right {
        right: 4px;
        background-position: -300px -75px;
        &:hover {
          background-position: -320px -75px;
        }
      }
    }

    > .banner {
      width: 645px;
      margin-left: 16px;

      .album-list {
        margin-top: 28px;
        display: flex;
        align-items: center;
      }
    }
  }
`

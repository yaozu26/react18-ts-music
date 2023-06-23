import styled from 'styled-components'

export const HotAnchorWrapper = styled.div`
  margin-top: 20px;

  > .hot-anchor {
    margin: 20px 0 0 20px;

    > .item {
      display: flex;
      margin-bottom: 14px;
      font-size: 12px;

      .right {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 10px;

        .name:hover {
          text-decoration: underline;
        }

        .desc {
          width: 160px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
`

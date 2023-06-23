import styled from 'styled-components'

export const AlbumItemWrapper = styled.div`
  width: 118px;
  height: 150px;
  margin-left: 11px;
  background-position: -260px 100px;

  > .top {
    position: relative;
    > .cover {
      position: absolute;
      top: 0;
      width: 118px;
      height: 100px;
      background-position: 0 -570px;

      &:hover + .play {
        background-position: 0 -85px;
      }
    }

    > .play {
      position: absolute;
      left: 72px;
      bottom: 5px;
      width: 22px;
      height: 22px;

      &:hover {
        background-position: 0 -110px;
      }
    }
  }
  > .bottom {
    margin: 8px 10px 3px 0;
    font-size: 12px;

    > .t {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

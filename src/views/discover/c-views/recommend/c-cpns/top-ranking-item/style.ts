import styled from 'styled-components'

export const TopRankingItemWrapper = styled.div`
  width: 230px;
  &:last-child {
    width: 228px;
  }
  > .inner {
    > .top {
      display: flex;
      margin: 20px 0 0 19px;

      > .cover {
        cursor: pointer;
      }

      > .tit {
        margin: 6px 0 0 10px;

        > .name:hover {
          cursor: pointer;
          text-decoration: underline;
        }

        > .btns {
          margin-top: 10px;

          > .btn {
            width: 22px;
            height: 22px;
            cursor: pointer;

            &.play {
              margin-right: 10px;
              background-position: -267px -205px;

              &:hover {
                background-position: -267px -235px;
              }
            }

            &.favor {
              background-position: -300px -205px;

              &:hover {
                background-position: -300px -235px;
              }
            }
          }
        }
      }
    }

    > .song-list {
      margin-top: 20px;
    }

    > .more {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 32px;
      margin-right: 32px;
      font-size: 12px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

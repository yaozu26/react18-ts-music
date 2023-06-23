import styled from 'styled-components'

export const SongItemV1Wrapper = styled.div`
  display: flex;
  height: 32px;
  line-height: 32px;
  &:nth-child(-n + 3) .order {
    color: #c10d0c;
  }

  &:hover .name {
    text-decoration: underline;
  }

  &:hover .right {
    display: flex;
    align-items: center;
  }

  > .order {
    width: 35px;
    margin-left: 15px;
    text-align: center;
    font-size: 16px;
  }

  > .name {
    flex: 1;
    font-size: 12px;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > .right {
    display: none;
    margin-right: 15px;

    .btn {
      width: 17px;
      height: 17px;
      cursor: pointer;
    }

    .play {
      background-position: -267px -268px;

      &:hover {
        background-position: -267px -288px;
      }
    }

    .add {
      margin: 2px 6px 0 10px;
      background-position: 0 -700px;

      &:hover {
        background-position: -22px -700px;
      }
    }

    .favor {
      background-position: -297px -268px;

      &:hover {
        background-position: -297px -288px;
      }
    }
  }
`

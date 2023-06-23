import styled from 'styled-components'

export const EnterSingerWrapper = styled.div`
  margin-top: 15px;
  > .singer-list {
    margin: 6px 0 14px 20px;

    .singer-item {
      display: flex;
      margin: 14px 20px 0 0;
      border: 1px solid #e9e9e9;
      background: #fafafa;
      cursor: pointer;

      &:hover {
        background: #f4f4f4;
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 14px;
        padding: 8px 0;

        .alias {
          width: 120px;
          font-size: 12px;
          color: #666;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }

  > .bot {
    width: 205px;
    height: 31px;
    margin-left: 20px;
    padding-right: 5px;
    border-radius: 4px;
    color: #333;
    background-position: right -100px;

    &:hover {
      background-position: right -182px;

      .btn {
        background-position: 0 -141px;
      }
    }

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 170px;
      padding: 0 15px 0 20px;
      height: 31px;
      font-size: 12px;
      font-weight: bold;
      background-position: 0 -59px;
    }
  }
`

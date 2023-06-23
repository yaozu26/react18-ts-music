import styled from 'styled-components'

export const UserLoginWrapper = styled.div`
  .info {
    height: 126px;
    background-position: 0 0;

    .note {
      width: 205px;
      margin: 0 auto;
      padding: 16px 0;
      line-height: 22px;
      font-size: 12px;
    }

    .btn {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 31px;
      font-size: 12px;
      color: #fff;
      text-shadow: 0 1px 0 #8a060b;
      background-position: 0 -195px;

      &:hover {
        background-position: -110px -195px;
      }
    }
  }
`

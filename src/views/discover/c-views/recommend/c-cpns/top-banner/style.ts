import styled from 'styled-components'

export const TopBannerWrapper = styled.div`
  height: 285px;
  .banner {
    position: relative;
    display: flex;
  }
`

export const BannerLeft = styled.div`
  width: 730px;
  a {
    height: 285px;
    img {
      height: 100%;
    }
  }

  .dots {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    li {
      margin: 0 2px;

      .item {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(${require('@/assets/img/banner_sprite.png')}) 3px -343px;
        cursor: pointer;

        &:hover,
        &.active {
          background-position: -14px -343px;
        }
      }
    }
  }
`

export const BannerRight = styled.div`
  position: relative;
  width: 254px;
  height: 285px;
  background-image: url(${require('@/assets/img/download.png')});

  a {
    position: absolute;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    background-image: url(${require('@/assets/img/download.png')});
    opacity: 0;

    &:hover {
      opacity: 1;
      background-position: 0 -290px;
    }
  }
`

export const BannerControll = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 63px;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`

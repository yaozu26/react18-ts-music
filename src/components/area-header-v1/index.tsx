import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { AreaHeaderV1Wrapper } from './style'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  titleText?: string
  keywords?: string[]
  moreText?: string
  moreLink?: string
}

const AreaHeaderV1: FC<IProps> = (props) => {
  const { titleText = '默认标题', keywords = [], moreText = '更多', moreLink = '/' } = props

  return (
    <AreaHeaderV1Wrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{titleText}</h3>
        <div className="keywords">
          {keywords.map((item) => (
            <div className="item" key={item}>
              <Link className="link" to={moreLink}>
                {item}
              </Link>
              <span className="divider">|</span>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <Link className="more" to={moreLink}>
          {moreText}
        </Link>
        <i className="sprite_02 icon"></i>
      </div>
    </AreaHeaderV1Wrapper>
  )
}

export default memo(AreaHeaderV1)

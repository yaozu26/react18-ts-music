import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import type { FC, ReactNode } from 'react'
import { AreaHeaderV2Wrapper } from './style'

interface IProps {
  children?: ReactNode
  titleText?: string
  moreText?: string
  moreLink?: string
}

const AreaHeaderV2: FC<IProps> = (props) => {
  const { titleText = '默认标题', moreText = '', moreLink = '/' } = props

  return (
    <AreaHeaderV2Wrapper>
      <div className="title">{titleText}</div>
      <Link className="more" to={moreLink}>
        {moreText}
      </Link>
    </AreaHeaderV2Wrapper>
  )
}

export default memo(AreaHeaderV2)

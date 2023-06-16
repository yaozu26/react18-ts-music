import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Recommend: React.FC<IProps> = (props) => {
  return <div>Recommend</div>
}

export default memo(Recommend)
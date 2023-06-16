import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Songs: React.FC<IProps> = (props) => {
  return <div>Songs</div>
}

export default memo(Songs)

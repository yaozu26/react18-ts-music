import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Friend: React.FC<IProps> = (props) => {
  return <div>Friend</div>
}

export default memo(Friend)

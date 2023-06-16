import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Singer: React.FC<IProps> = (props) => {
  return <div>Singer</div>
}

export default memo(Singer)

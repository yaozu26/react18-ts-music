import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Ranking: React.FC<IProps> = (props) => {
  return <div>Ranking</div>
}

export default memo(Ranking)

import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const DJRadio: React.FC<IProps> = (props) => {
  return <div>DJRadio</div>
}

export default memo(DJRadio)

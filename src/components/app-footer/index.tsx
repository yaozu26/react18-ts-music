import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const AppFooter: React.FC<IProps> = (props) => {
  return <div>AppFooter</div>
}

export default memo(AppFooter)

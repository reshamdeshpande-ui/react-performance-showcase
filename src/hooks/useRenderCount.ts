import { useRef } from 'react'

export function useRenderCount(name: string) {
  const renderCount = useRef(0)

  renderCount.current += 1

  console.log(`${name} rendered`, renderCount.current)

  return renderCount.current
}
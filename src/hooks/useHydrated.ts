'use client'

import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

// false no servidor e na hidratação, true depois. Evita diferença entre o HTML do servidor e o do navegador.
export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )
}

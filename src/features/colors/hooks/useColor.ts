import { useSelector } from "react-redux"
import { defaultColorSelector } from '@features/colors/color.slice'
import { colorsSelector } from "@features/colors/color.slice"

export function useColor(id: number) {
  const colors = useSelector(colorsSelector)
  const defaultColor = useSelector(defaultColorSelector)
  return colors.find(color => color.id === id) || defaultColor
}
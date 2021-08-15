import React from 'react'
import { AccessibilityRole, TouchableWithoutFeedback, View as RNView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useGlobal } from 'reactn'
import { darkTheme, iconStyles } from '../styles'

type Props = {
  accessibilityLabel?: string
  accessibilityRole?: AccessibilityRole
  brand?: boolean
  color?: string
  isSecondary?: boolean
  name: string
  onPress?: any
  size: number
  solid?: boolean
  style?: any
  testID: string
}

export const PVIcon = (props: Props) => {
  const { accessibilityLabel, accessibilityRole, brand, color: colorOverride,
    isSecondary, name, onPress, size, solid, style, testID } = props
  const [globalTheme] = useGlobal('globalTheme')
  const isDarkMode = globalTheme === darkTheme
  const color = isDarkMode
    ? isSecondary
      ? iconStyles.darkSecondary.color
      : iconStyles.dark.color
    : isSecondary
    ? iconStyles.lightSecondary.color
    : iconStyles.light.color

  const icon = (
    <Icon
      {...(accessibilityLabel ? { accessibilityLabel } : {})}
      {...(accessibilityRole ? { accessibilityRole } : {})}
      {...(brand ? { brand } : {})}
      color={colorOverride || color}
      name={name}
      size={size}
      {...(solid ? { solid } : {})}
      {...(style ? { style } : {})}
    />
  )

  return (
    <RNView>
      {
        !!onPress ? (
          <TouchableWithoutFeedback
            hitSlop={{
              bottom: 8,
              left: 8,
              right: 8,
              top: 8
            }}
            onPress={onPress}
            {...(testID ? { testID: `${testID}_icon_button` } : {})}>
            {icon}
          </TouchableWithoutFeedback>
        ) : (
          icon
        )
      }
    </RNView>
  )
}

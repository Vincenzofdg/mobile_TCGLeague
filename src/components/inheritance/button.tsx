import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import { IInheritanceButton } from 'interfaces';
import {colorScheme} from 'styles'

function Button({
    children,
    enabled = false,
    style = {},
    action
}: IInheritanceButton): React.ReactElement {
    const handleSubmit = (): void => action();
    const colors = colorScheme()
    const backgroundColor = enabled ? colors.button.backgroundEnabled : colors.button.backgroundDisabled

    return (
        <TouchableOpacity
            style={
                [
                    styles.container,
                    { backgroundColor },
                    ...(Array.isArray(style) ? style : [style])
                ]}
            onPress={handleSubmit}
            disabled={!enabled}
        >
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: "90%",
        alignSelf: 'center',
    }
})

export {Button};

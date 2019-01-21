import React from 'react';

import { Disabled as DisabledBehaviour } from '../lib/Behaviours';

import styles from './Button.module.sass';

export interface IProps {
    animation?: string;
    color?: string;
    decoration?: string;
    disabled?: boolean;
    size?: string;
    buttonType?: string;
    onClick: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
}

interface IState {
}

export class Component extends React.Component<IProps, IState> {
    public render(): React.ReactNode {
        const { onClick, animation, color, decoration, disabled, size, buttonType } = this.props;
        const _disabled: string = disabled ? DisabledBehaviour : '';
        const classList = [animation, color, decoration, size, buttonType, _disabled];
        const optionalDisabledProps = disabled ? { disabled: true, "aria-disabled": true } : {};

        return (
            <button
                className={`${styles.c_btn} ${disabled ? 'disabled' : ''} c-btn ${classList.join(' ')}`}
                {...optionalDisabledProps}
                onClick={onClick}
            >
                {this.props.children}
            </button >
        );
    }
}

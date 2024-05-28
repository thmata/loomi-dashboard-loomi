import React from 'react';

interface Props {
    src: string; // Diretório do SVG
    color?: string; // Cor a ser aplicada (opcional)
}

const SVGComponent = ({ src, color }: Props) => {
    const fill = color || '#000'; // Cor padrão preta

    return (
        <svg viewBox="0 0 100 100">
            <use href={src} fill={fill} />
        </svg>
    );
};

export default SVGComponent;

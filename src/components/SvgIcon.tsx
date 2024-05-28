import React from 'react';

interface Props {
    src: string; // Diretório do SVG
    color?: string; // Cor a ser aplicada (opcional)
}

const SVGComponent: React.FC<Props> = ({ src, color }: any) => {
    const fill = color || '#000'; // Cor padrão preta

    return (
        <svg viewBox="0 0 100 100">
            <use href={src} fill={fill} />
        </svg>
    );
};

export default SVGComponent;

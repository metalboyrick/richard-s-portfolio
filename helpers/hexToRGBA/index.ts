const hexToRGBA = (hexColor: string, alpha: number) : string | null => {
    if(alpha > 1 || alpha < 0) return null;
    
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);

    return result ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${alpha})` : null;
};

export default hexToRGBA;
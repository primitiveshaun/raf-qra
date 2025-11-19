/**
 * An arrow pointing right icon component.
 *
 * @param {object} props
 * @param {string} [props.color='currentColor'] - The fill color of the icon. Defaults to 'currentColor'.
 * @param {string} [props.width='23'] - The width of the icon.
 * @param {string} [props.height='15'] - The height of the icon.
 * @param {string} [props.className=''] - Additional Tailwind CSS classes to apply.
 */
const ArrowIcon = ({ 
    color = 'currentColor', 
    width = '23', 
    height = '15', 
    className = '', 
    ...rest 
}) => {
  
  // Note: The viewBox is 23x15, so the default dimensions match the original scale.
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 15" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest} // Allows passing other SVG/HTML props
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2521 0.298304L22.7031 6.77983C23.099 7.17757 23.099 7.82243 22.7031 8.22017L16.2521 14.7017C15.8562 15.0994 15.2144 15.0994 14.8185 14.7017C14.4227 14.304 14.4227 13.6591 14.8185 13.2614L19.5391 8.51847H1.01368C0.453839 8.51847 0 8.06249 0 7.5C0 6.93751 0.453839 6.48153 1.01368 6.48153H19.5391L14.8185 1.73864C14.4227 1.3409 14.4227 0.696043 14.8185 0.298304C15.2144 -0.0994348 15.8562 -0.0994348 16.2521 0.298304Z"
        fill={color} // Uses the color prop, which defaults to 'currentColor'
      />
    </svg>
  );
};

export default ArrowIcon;
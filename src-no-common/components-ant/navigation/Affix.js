import { Affix as affix } from 'antd';


/* props desc

 */
export default function Affix(props) {
    let { style,children,offsetBottom=0,offsetTop=0,target,onChange

    } = props;


    return (
        <affix  {...props}  >{children}</affix>
    );
}

/*
breakpoint width#
{
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
}
*/




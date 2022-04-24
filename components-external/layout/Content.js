import { Layout } from 'antd';


/* props desc

 */
export default function Content(props) {
    let { style,children,
        breakpoint='xs | sm | md | lg | xl | xxl',//Breakpoints of the responsive layout
        className,
        collapsed,collapsedWidth=80,collapsible=false,defaultCollapsed=false,
        reverseArrow=false,theme='light | dark',trigger,width=200,zeroWidthTriggerStyle,onBreakpoint,onCollapse
    } = props;


    return (
        <Layout.Content  {...props}  >{children}</Layout.Content>
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




import { Breadcrumb as breadcrumb } from 'antd';
import Link from "next/link";

/* props desc

 */
export default function Breadcrumb(props) {
    let { style,items=[],children,params,routes,separator,
        itemRender,SeparatorChildren='<span>=></span>',
        itemTemplate=item=><Link href={item.href}>{item.label}</Link>,
    } = props;

    /*
    item props,
      className,
      dropdownProps,
      href,
      overlay,
      onClick,

    */



    return (
        <breadcrumb  {...props}  >
            {children}
            {items.map(item=>
                    <breadcrumb.Item {...item.props}>
                        {itemTemplate && itemTemplate(item)}
                    </breadcrumb.Item>
                )
            }
        </breadcrumb>
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




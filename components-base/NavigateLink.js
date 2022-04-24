import Link from 'next/link'

export const  NavigateLink=(props)=>{
    const {children,style}=props;
    return ( <>
        <Link {...props}>{children}</Link>
    </> )
}








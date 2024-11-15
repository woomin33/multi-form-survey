import cn from 'classnames'

interface Props{
  direction?: 'horizontal' | 'vertical';
}

export default function Divider({className, direction = 'horizontal'}: Cn<Props>){
  if(direction === 'horizontal'){
    return <hr className={cn("border-t-1 border-gray100 w-full", className)} />
  }

  return <hr className={cn("border-l-1 border-gray100 h-full", className)} />
}
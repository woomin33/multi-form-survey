import { PropsWithChildren } from "react";
import cn from 'classnames'
import { Cn } from "../../types/global";

export default function Panel({ className, children}: PropsWithChildren<Cn>){
  return(
    <div className={cn("flex flex-col p-20 pt-26 bg-white rounded-10", className)}>{children}</div>
  )
}

export function PanelHeader({ className, children}: PropsWithChildren<Cn>){
  return(
    <div className={className}>{children}</div>
  )
}

export function PanelBody({className, children}: PropsWithChildren<Cn>){
  return(
    <div className={className}>{children}</div>
  )
}

export function PanelFooter({className, children}: PropsWithChildren<Cn>){
  return(
    <>
      <hr className="border-gray-500 mb-20"/>
      <div className={className}>{children}</div>
    </>
  )
}

export function PanelCap({children}: PropsWithChildren){
  return(
    <div className="-mb-10 relative">
      <div className="inline-block px-14 pt-10 pb-6 bg-main rounded-t-10 text-15 text-white">{children}</div>
      <div className="bg-main h-9"/>
    </div>
  )
}
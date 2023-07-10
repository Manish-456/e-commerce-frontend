
import { Image as ImageType } from '@/types'
import React from 'react'
import { Tab } from '@headlessui/react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type Props = {
    image : ImageType;
}

export default function GalleryTab({image}: Props) {

  return (

  
        <Tab className={cn(`
        flex aspect-square relative cursor-pointer items-center justify-center rounded-md bg-white
        `)}>
            {
                (
                    {selected}
                ) => (
                    <div>
                        <span className='absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md'>
                            <Image src={image.url} alt={image.url} className='object-cover object-center' fill/>
                        </span>
                        <span className={cn(
                            `
                            absolute inset-0 rounded-md ring-2 ring-offset-2
                            ${selected ? "ring-black" : "ring-transparent"}`
                        )} />
                    </div>
                )
            }
        </Tab>

  )
}
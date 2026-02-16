import PlaylistSkeleton from '@/components/skeletons/PlaylistSkeleton'
import { buttonVariants } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { SignedIn } from '@clerk/clerk-react'
import { HomeIcon, Library, MessageCircle } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const LeftSidebar = () => {

    const isLoading=true;
  return (
    <div className="h-full flex flex-col bg-pink-600 gap-2">
        {/* nav menu */}
        <div className="rounded-lg bg-zinc-900 p-4">
            <div className="space-y-2">
                <Link to={"/"} className={cn(buttonVariants({
                    variant:"ghost",
                    className:"w-full justify-start text-white hover:bg-pink-300"
                }))}>
                <HomeIcon className="mr-2 size-5 "/>
                <span className="hidden md:inline">
                    Root
                </span>
                </Link>

                <SignedIn>
                    <Link to={"/chat"} className={cn(buttonVariants({
                    variant:"ghost",
                    className:"w-full justify-start text-white hover:bg-pink-300"
                    }))}>
                        <MessageCircle className="mr-2 size-5 "/>
                        <span className="hidden md:inline">
                            Pings
                        </span>
                    </Link>

                </SignedIn>

            </div>

        </div>

        {/* library */}

        <div className="flex-1 min-h-0 rounded-lg bg-zinc-900 p-4">
            <div className="flex items-center justify-between mb-4">
                <div className='flex items-center text-white px-2'>
                    <Library className="size-5 mr-2"/>
                    <span className='hidden md:inline'>Your Jams</span>
                </div>
            </div>
            <ScrollArea className="h-[calc(100vh-300px)]">
                <div className="space-y-2">
                    {isLoading?(
                        <PlaylistSkeleton/>
                    ):(
                        "You got no jams !!!"
                    )}


                </div>

            </ScrollArea>

        </div>

    </div>

  )
}

export default LeftSidebar
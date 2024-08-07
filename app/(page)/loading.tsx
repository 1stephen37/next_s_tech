import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";

function Loading() {
    return (
        <div className="flex items-center justify-center space-x-4">
            <Skeleton className="h-[20rem] w-[40rem] rounded-full"/>
            <div className="space-y-2">
                <Skeleton className="h-[30rem] w-[40rem]"/>
                <Skeleton className="h-[30rem] w-[40rem]"/>
            </div>
        </div>
    );
}

export default Loading;

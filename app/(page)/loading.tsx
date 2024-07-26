import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";

function Loading() {
    return (
        <div className="flex items-center justify-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full"/>
            <div className="space-y-2">
                <Skeleton className="h-4 w-[400px]"/>
                <Skeleton className="h-4 w-[200px]"/>
            </div>
        </div>
    );
}

export default Loading;

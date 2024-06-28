import {useEffect, useState} from 'react';

function UseScrollProgress() {
    const [completion, setCompletion] = useState(0);
    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                const progressPercentage = (currentProgress / scrollHeight) * 100;
                setCompletion(Number(progressPercentage.toFixed(2)));
            }
        }
        window.addEventListener('scroll', updateScrollCompletion);
        return () => window.removeEventListener('scroll', updateScrollCompletion);
    }, [])
    return completion;
}

export default UseScrollProgress;

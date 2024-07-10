import React, {useRef} from 'react';

function Alert({showAlert, setShowAlert, message}: {
    showAlert: boolean,
    setShowAlert: React.Dispatch<React.SetStateAction<boolean>>,
    message: string
}) {
    const background = useRef(null);

    if (showAlert) {
        return (
            <div ref={background} onClick={() => setShowAlert(false)}
                 className="fixed left-0 z-50 top-0 bg-[rgba(0,0,0,0.4)] grid place-items-center w-full h-screen">
                <div className="bg-secondary p-10 rounded-2xl w-[40%] h-[40dvh] text-[2rem]" onClick={(e) => e.stopPropagation()}>
                    <h1 className="text-center">{message}</h1>
                </div>
            </div>
        )
    }


    ;
}

export default Alert;

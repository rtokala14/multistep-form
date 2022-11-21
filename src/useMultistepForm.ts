import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
    const [currStepIndex, setCurrStepIndex] = useState(0)

    function next() {
        setCurrStepIndex(i => {
            if (i >= steps.length - 1) return i
            return i + 1
        })
    }

    function back() {
        setCurrStepIndex(i => {
            if (i <= 0) return i
            return i - 1
        })
    }

    function goTo(index: number) {
        setCurrStepIndex(index)
    }

    return (
        currStepIndex,
        step: steps[currStepIndex],
        goTo,
        next,
        back,
    )
}
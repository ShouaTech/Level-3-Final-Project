type StepsCardType = {
    step: string,
    title: string,
    description: string;
}

export const StepsCard = (props: StepsCardType) => {
    return (
        <div>
        <p>{props.step}</p>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        </div>
    )
}
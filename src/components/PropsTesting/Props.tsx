
interface Props {
    name: string,
}
const Props = ({ name }: Props) => {
    return (
        <>
            <div>{`User name:${name}`}</div>
            <button >
                button
            </button>
        </>
    )
}
export default Props
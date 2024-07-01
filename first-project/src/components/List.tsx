import { ReactNode } from "react"

interface ListProps<T> {
    items: T[],
    render: (item: T) => ReactNode
}

const List = <T,>({ items, render }: ListProps<T>) => {
    // const listItem = [];
    // for (let i = 0; i < items.length; i++) {
    //     listItem.push(<li key={i}>{render(items[i])}</li>);
    // }
    // return <ul>{listItem}</ul>;
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {render(item)}
                </li>
            ))}
        </ul>
    )
}

export default List;